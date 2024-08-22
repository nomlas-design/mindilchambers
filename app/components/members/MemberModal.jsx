import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ModalPortal from './ModalPortal';
import MemberArticles from './MemberArticles';
import { PortableText } from 'next-sanity';
import FancyLink from '@/app/components/links/FancyLink';

const MemberModal = ({ isOpen, onClose, member }) => {
  const bioRef = useRef(null);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const clickTimerRef = useRef(null);

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
    if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
      return url;
    }
    return url ? `https://${url}` : '';
  };

  const handleEasterEggClick = (e) => {
    if (member._id === 'b2f337eb-8971-452e-ab18-80313643751a') {
      setClickCount((prevCount) => prevCount + 1);

      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }

      clickTimerRef.current = setTimeout(() => {
        if (clickCount >= 3) {
          setShowEasterEgg(true);

          setTimeout(() => {
            setShowEasterEgg(false);
          }, 5000);
        }
        setClickCount(0);
      }, 500);
    }
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

  const spinningVariants = {
    hidden: {
      opacity: 0,
      rotate: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      rotate: 360,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      rotate: 720,
      scale: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
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
                <AnimatePresence>
                  {showEasterEgg && (
                    <motion.div
                      variants={spinningVariants}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      className='easteregg-mobile'
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/tom_easter.jpg)',
                        backgroundSize: 'cover',
                        color: 'black',
                        padding: '5px',
                        borderRadius: '5px',
                        fontSize: '10vw',
                        zIndex: '1000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          transform: 'rotate(-45deg)',
                        }}
                      >
                        DILIRANG MENGAMUK
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div
                  variants={fadeInFromRight}
                  initial='hidden'
                  animate='visible'
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className='member-modal__img'
                >
                  <Image
                    src={member.portraitUrl || '/portrait-placeholder.png'}
                    alt={member.name || 'Member portrait'}
                    fill
                  />
                  <div
                    onClick={handleEasterEggClick}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '50px',
                      height: '50px',
                    }}
                  />
                  <AnimatePresence>
                    {showEasterEgg && (
                      <motion.div
                        variants={spinningVariants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='easteregg-desktop'
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          width: '100%',
                          height: '100%',
                          backgroundImage: 'url(/tom_easter.jpg)',
                          backgroundSize: 'cover',
                          color: 'black',
                          padding: '5px',
                          borderRadius: '5px',
                          fontSize: '5vw',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <div
                          style={{
                            transform: 'rotate(-45deg)',
                          }}
                        >
                          DILIRANG MENGAMUK
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                <div className='member-modal__content'>
                  <div className='member-modal__content__header'>
                    <div
                      onClick={handleEasterEggClick}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '50px',
                        height: '50px',
                      }}
                    />
                    {member.name && (
                      <motion.h1
                        variants={fadeInFromRight}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        {member.name}
                      </motion.h1>
                    )}
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
                    <div className='member-modal__content__row member-modal__content__row--titles'>
                      {member.seniority && (
                        <motion.span
                          variants={fadeInFromRight}
                          initial='hidden'
                          animate='visible'
                          transition={{ delay: 0.3, duration: 0.3 }}
                          className='seniority'
                        >
                          {member.seniority}
                        </motion.span>
                      )}
                      {member.status && (
                        <motion.span
                          variants={fadeInFromRight}
                          initial='hidden'
                          animate='visible'
                          transition={{ delay: 0.4, duration: 0.3 }}
                          className='seniority'
                        >
                          {member.status}
                        </motion.span>
                      )}
                    </div>
                    <motion.div
                      variants={fadeIn}
                      initial='hidden'
                      animate='visible'
                      transition={{ delay: 0.6, duration: 0.3 }}
                      className='member-modal__content__row member-modal__content__row--spread'
                    >
                      <div className='member-modal__content__row member-modal__content__row--details'>
                        {member.phone && (
                          <div className='member-modal__content__link'>
                            <div className='member-modal__content__icon'>
                              <Image
                                fill
                                src='/icons/icon__phone.svg'
                                alt='Phone'
                              />
                            </div>
                            <FancyLink
                              to={`tel:${member.phone}`}
                              text={member.phone}
                            />
                          </div>
                        )}
                        {member.email && (
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
                        )}
                      </div>
                      {member.profile && (
                        <div className='member-modal__content__link member-modal__content__link--external'>
                          <Link
                            href={formatUrl(member.profile)}
                            target='_blank'
                            rel='noreferrer noopener'
                          >
                            External Profile
                          </Link>
                          <div className='member-modal__content__icon'>
                            <Image
                              fill
                              src='/icons/icon__arrowup.svg'
                              alt='External link'
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                  {member.bio && (
                    <motion.div
                      ref={bioRef}
                      variants={fadeIn}
                      initial='hidden'
                      animate='visible'
                      transition={{ delay: 0.9, duration: 0.3 }}
                      className='member-modal__bio'
                    >
                      <PortableText
                        components={components}
                        value={member.bio}
                      />
                      <MemberArticles articles={member.articles} />
                    </motion.div>
                  )}
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
