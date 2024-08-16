import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ModalPortal from './ModalPortal';
import { PortableText } from 'next-sanity';
import FancyLink from '@/app/components/links/FancyLink';

const MemberModal = ({ isOpen, onClose, member }) => {
  const bioRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    const checkOverflow = () => {
      if (bioRef.current) {
        const hasOverflow =
          bioRef.current.scrollHeight > bioRef.current.clientHeight;
        bioRef.current.classList.toggle('has-overflow', hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [member]);

  const formatUrl = (url) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  // Custom components for PortableText
  const components = {
    marks: {
      link: ({ value, children }) => {
        const href = formatUrl(value?.href || '');
        const target =
          value?.openInNewTab || value?.blank ? '_blank' : undefined;
        const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

        // Use a regular <a> tag for external links
        if (href.startsWith('http')) {
          return (
            <a href={href} target={target} rel={rel}>
              {children}
            </a>
          );
        }

        // Use Next.js Link for internal links
        return (
          <Link href={href} target={target} rel={rel}>
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='member-modal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className='member-modal__wrapper'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='member-modal__inner'>
                <motion.div
                  initial={{ x: '-80%', opacity: 0 }}
                  animate={{ x: '0%', opacity: 1 }}
                  exit={{ x: '-80%', opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: 'easeInOut' }}
                  className='member-modal__img'
                >
                  <Image src={member.portraitUrl} alt={member.name} fill />
                </motion.div>
                <div className='member-modal__content'>
                  <div className='member-modal__content__header'>
                    <h1>{member.name}</h1>
                    <button
                      className='btn btn--light btn--modal'
                      onClick={onClose}
                    >
                      Close
                      <svg
                        id='close_modal-icon'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 6.25 6.25'
                      >
                        <g>
                          <polygon points='6.25 .71 5.53 0 3.12 2.41 .71 0 0 .71 2.41 3.12 0 5.53 .71 6.25 3.12 3.84 5.53 6.25 6.25 5.53 3.84 3.12 6.25 .71' />
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className='member-modal__content__subheader'>
                    <div className='member-modal__content__row'>
                      <span className='seniority'>{member.seniority}</span>
                      <span className='seniority'>{member.status}</span>
                    </div>
                    <div className='member-modal__content__row member-modal__content__row--spread'>
                      <div className='member-modal__content__row'>
                        <div className='member-modal__content__link'>
                          <div className='member-modal__content__icon'>
                            <Image
                              fill
                              src='/icons/icon__phone.svg'
                              alt='Email'
                            />
                          </div>
                          <FancyLink
                            to={`tel:${member.phone}`}
                            text={member.phone}
                          />
                        </div>
                        <div className='member-modal__content__link'>
                          <div className='member-modal__content__icon'>
                            <Image
                              fill
                              src='/icons/icon__email.svg'
                              alt='Email'
                            />
                          </div>
                          <FancyLink
                            to={`mailto:${member.email}`}
                            text={member.email}
                          />
                        </div>
                      </div>
                      <div className='member-modal__content__link member-modal__content__link--external'>
                        <Link
                          href={member.profile}
                          target='_blank'
                          rel='noreferrer noopener'
                        >
                          External Profile
                        </Link>
                        <div className='member-modal__content__icon'>
                          <Image
                            fill
                            src='/icons/icon__arrowup.svg'
                            alt='Email'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div ref={bioRef} className='member-modal__bio'>
                    <PortableText components={components} value={member.bio} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
};

export default MemberModal;
