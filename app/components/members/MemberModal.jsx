import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ModalPortal from './ModalPortal';
import { PortableText } from 'next-sanity';

const MemberModal = ({ isOpen, onClose, member }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

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
              initial={{ x: '-80%', opacity: 0 }}
              animate={{ x: '0px', opacity: 1 }}
              exit={{ x: '-80%', opacity: 0 }}
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
                  <span className='seniority'>{member.seniority}</span>
                  <p>{member.status}</p>
                  <p>{member.phone}</p>
                  <p>{member.email}</p>
                  <PortableText value={member.bio} />
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
