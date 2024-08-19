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

  const components = {
    marks: {
      link: ({ value, children }) => {
        const href = formatUrl(value?.href || '');
        const target =
          value?.openInNewTab || value?.blank ? '_blank' : undefined;
        const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

        if (href.startsWith('http')) {
          return (
            <a href={href} target={target} rel={rel}>
              {children}
            </a>
          );
        }

        return (
          <Link href={href} target={target} rel={rel}>
            {children}
          </Link>
        );
      },
    },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
                  variants={fadeInFromRight}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className='member-modal__img'
                >
                  <Image src={member.portraitUrl} alt={member.name} fill />
                </motion.div>
                <div className='member-modal__content'>
                  <div className='member-modal__content__header'>
                    <motion.h1
                      variants={fadeInFromRight}
                      initial='hidden'
                      animate='visible'
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {member.name}
                    </motion.h1>
                    <motion.button
                      variants={fadeIn}
                      initial='hidden'
                      animate='visible'
                      transition={{ delay: 0.9, duration: 0.3 }}
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
                    </motion.button>
                  </div>
                  <div className='member-modal__content__subheader'>
                    <div className='member-modal__content__row'>
                      <motion.span
                        variants={fadeInFromRight}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='seniority'
                      >
                        {member.seniority}
                      </motion.span>
                      <motion.span
                        variants={fadeInFromRight}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className='seniority'
                      >
                        {member.status}
                      </motion.span>
                    </div>
                    <motion.div
                      variants={fadeIn}
                      initial='hidden'
                      animate='visible'
                      transition={{ delay: 0.6, duration: 0.3 }}
                      className='member-modal__content__row member-modal__content__row--spread'
                    >
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
                    </motion.div>
                  </div>
                  <motion.div
                    ref={bioRef}
                    variants={fadeIn}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: 0.9, duration: 0.3 }}
                    className='member-modal__bio'
                  >
                    <PortableText components={components} value={member.bio} />
                  </motion.div>
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
