'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ preloadComplete }) => {
  const [liftVeil, setLiftVeil] = useState(false);
  const [showSVG, setShowSVG] = useState(false);

  useEffect(() => {
    const liftVeilTimeout = setTimeout(() => {
      setLiftVeil(true);
    }, 5000);

    const preloadCompleteTimeout = setTimeout(() => {
      if (preloadComplete) {
        setLiftVeil(true);
      }
    }, 2750);

    const showSVGTimeout = setTimeout(() => {
      setShowSVG(true);
    }, 50);

    return () => {
      clearTimeout(liftVeilTimeout);
      clearTimeout(preloadCompleteTimeout);
      clearTimeout(showSVGTimeout);
    };
  }, [preloadComplete]);

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='loading-screen'
      >
        <motion.div
          className='loading-screen__logocontainer'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 2 }}
        >
          {showSVG && (
            <>
              <motion.svg
                className='loading-screen__logo'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 112.72 110.45'
              >
                <g id='logo-loading'>
                  <path
                    className='logo-loading__path'
                    d='M104.28,38.33c-.61.07-1.22.16-1.83.17-3.57.06-7.02.75-10.3,2.2-.31.14-.65.21-.94.51.35.13.65.1.95.09,3.48-.17,6.87-.88,10.23-1.69,1.39-.34,3.38-.37,4.38-1.56.16-.18.47-.6.4-.84-.33.11-.64.37-.94.52-.64.33-1.26.52-1.97.6h.01Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M99.19,33.08c4.91-.71,9.45-2.15,13.53-4.87-1.43.37-2.84.86-4.3,1.08-3.02.44-5.72,1.73-8.38,3.1-.28.14-.61.26-.84.69h-.01Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M79.69,44.96c-6.6,7.14-11.59,15.4-16.96,23.45-1.11,1.66-2.21,3.3-3.33,4.95-.65.98-1.25,2-1.9,2.96-.6.88-1.26,1.79-1.65,2.79-.13.33.61-.38.81-.68,1.49-2.2,3.06-4.41,4.55-6.6,1.08-1.59,2.18-3.26,3.28-4.86.94-1.28,1.67-2.56,2.55-3.88,1.22-1.84,2.72-3.29,4.82-4.08,1.38-.52,2.75-.96,4.17-1.33,3.36-.88,6.82-1.22,10.26-1.71.45-.07.92-.07,1.28-.5-5.63-1.2-11.08-.96-16.21,2.15.03-.38.24-.52.37-.71.94-1.42,2.33-2.31,3.72-3.22,3.05-1.97,6.3-3.43,9.93-3.94,1.84-.26,3.7-.47,5.55-.71.35-.04.75-.04,1.15-.5-5.46-1.08-10.57-.82-15.32,2.15-.06.04-.11.08-.16.13.06-.04.11-.09.16-.13-.06-.06-.11-.11-.16-.18.94-1.18,2.04-2.14,3.36-2.86,2.2-1.2,4.58-1.86,6.98-2.45,2.54-.64,5.12-1.05,7.69-1.59.52-.11,1.06-.2,1.52-.61-.27-.21-.54-.24-.81-.27-1.04-.13-2.07-.13-3.11-.1-3.42.1-6.78.48-9.87,2.1-.16.08-.23.16-.4.07.04-.54.92-1.28,1.3-1.69.52-.57,1.09-1.09,1.73-1.53,2.44-1.69,5.57-1.84,8.43-2.69,3.6-1.06,6.78-3.27,10.4-4.31-3.82.03-7.6.88-11.06,2.47-1.21.55-2.43,1.22-3.76,1.28,2.91-2.62,6.48-4.35,9.9-6.28,3.42-1.93,6.79-4.18,8.92-7.47.11-.18.24-.38.21-.59-.04-.37-.52-.55-.89-.44-.37.11-.61.43-.85.71-3.23,3.78-7.86,6.04-12.08,8.67-5.35,3.33-10.16,7.37-14.43,11.99l-.07.04Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M18.95,45.17c2.71,3.2,5.33,6.39,7.09,10.2,1.84,4.01,2.89,8.26,5.08,12.14.2.35.41.71.62,1.06,1.55,2.55,3.16,4.95,4.28,7.72,1.29,3.2,3.26,9.2,3.69,9.68.11.13.1-.77.1-.82-.04-.81-.13-1.62-.21-2.41-.11-1.11-.17-2.21-.31-3.3-.14-1.09-.44-2.24-.84-3.3-.5-1.36-1.12-2.66-1.79-3.95-.67-1.29-1.21-2.64-1.76-3.97-.38-.92-.72-1.84-1.02-2.79-.78-2.49-1.22-5.1-2.18-7.54-.96-2.44-2.62-4.77-4.52-6.66-3.6-3.56-6.85-7.31-10.65-10.66-2.92-2.58-5.67-5-8.71-7.45-.58-.47-2.78-1.88-2.37-1.25.92,1.42,2.55,2.76,3.93,3.97,3.36,2.95,6.65,5.91,9.56,9.32h.01Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M91.49,64.26c-5.12,1.64-10.18,3.47-15.19,5.41-3.11,1.2-5.96,2.76-8.34,5.1-1.08,1.06-2.2,2.1-3.18,3.26.11.13.24.21.4.27-.14-.06-.28-.16-.4-.27-1.57,1.43-3.22,2.75-4.89,4.05-1.04.69-2.07,1.39-3.11,2.1-1.02.69-1.99,1.43-2.78,2.38-1.3,1.57-2.5,3.22-3.7,4.87-.07.11-.28.34-.13.35.11,0,.37-.24.54-.38,3.4-2.75,6.77-6.02,10.65-8.09s7.35-4.24,10.5-7.24c.71-.68,1.42-1.37,2.16-2.04,3.33-3.02,7.43-4.66,11.5-6.52,4.1-1.87,5.66-2.31,9.94-3.64.28-.09,3.65-1.64,3.43-1.77-.21-.14-2.68.65-2.79.69-2.28.69-2.31.74-4.6,1.46h-.01Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M55.62,67.3c.07-.11.16-.24.23-.35,2.57-4.04,5.05-8.12,7.47-12.24,2.33-3.97,4.58-7.96,6.75-12.02,2.17-4.05,3.9-8.09,5.76-12.16.52-1.16,1.4-2.55,1.67-3.81-.16.2-.3.41-.44.62-2.89,4.82-5.82,9.59-8.84,14.33-1.23,1.94-2.48,3.88-3.72,5.84-1.28,1.87-2.54,3.75-3.83,5.63-1.49,2.17-2.99,4.32-4.5,6.49-1.18,1.47-2.17,3.07-3.23,4.62-1.29,1.9-2.13,3.98-2.54,6.25-.27,1.54-.5,3.09-.87,4.61-.92,3.83-2.43,7.45-3.79,11.12-.09.24-.48,1.37-.18.98.94-1.25,2.52-5.44,3.63-8.1.87-2.1,1.86-4.17,2.81-6.22.91-1.94,2.38-3.77,3.57-5.58h.03Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M13.36,69.92c1.83,1.86,3.69,3.68,5.57,5.46,3.99,3.75,8.31,8.03,13.7,9.61,2.52.74,4.5,2.3,5.65,4.76.54,1.18,1.08,4.8,1.13,3.41.06-1.69-.23-2.67-.73-3.96-.54-1.4-1.66-2.3-2.61-3.44-2.96-3.49-5.94-6.86-9.29-9.98-3.35-3.12-7.02-6.29-10.71-9.25-2.09-1.67-4.2-3.34-6.37-4.89-3.12-2.27-6.41-4.51-9.55-6.73-.09-.06-.03,0-.16-.01.03.18-.04.11.06.23,4.2,5.02,8.72,10.12,13.32,14.81h-.01Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M84.04,82.75c-6.79,2.15-13.5,4.59-20.23,6.97-2.06.72-4.11,1.45-6.2,2.1-2.88.91-5.53,2.27-7.97,4.04-.41.3-.99.52-1.11,1.05-.07.3.96-.11,1.21-.28,3.74-2.79,7.35-4.83,12.18-4.34.84.09,1.67.07,2.51-.03,3.84-.48,7.73-2.08,11.33-3.46,5.5-2.1,10.84-4.66,15.94-7.58.6-.34,1.25-.6,1.83-1.19-.91.08-1.62.38-2.35.58-2.4.67-4.78,1.39-7.15,2.14Z'
                  />
                  <path
                    className='logo-loading__path'
                    d='M47.67,59.14c.85-4.59,1.56-9.12,1.73-13.79.18-4.77-.04-9.55-.5-14.3-.92-9.44-2.84-18.69-4.72-27.96-.21-1.03-.44-2.07-.65-3.1-.04.61,0,1.19.06,1.77.6,4.63.87,9.28.95,13.94.17,9.71.14,19.43-.09,29.15-.23,9.82-.65,19.64-1.06,29.44-.11,2.76-.38,5.57-.38,8.33-.16,2.88-.4,5.77-1.16,8.54-1.12,4.02-3.16,7.61-5.59,10.98-1.83,2.54-4.18,4.59-6.5,6.66-.26.23-.51.45-.74.71-.16.18-.2.4-.07.62.13.21.33.3.57.3.3,0,.52-.16.74-.33,2.14-1.7,4.17-3.51,5.84-5.68,2.08-2.71,3.65-5.72,5.38-8.66,2.2-3.7,3.32-7.67,3.5-11.94.13-3.02.26-6.02.37-9.04.06-1.43,0-2.89.17-4.31.14-1.22.55-2.39.78-3.6.5-2.58.94-5.17,1.42-7.76h-.04Z'
                  />
                </g>
              </motion.svg>
              <motion.svg
                className='loading-screen__logo'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 112.72 110.45'
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                <g id='logo-loading'>
                  <path
                    className='logo-loading__path--white'
                    d='M104.28,38.33c-.61.07-1.22.16-1.83.17-3.57.06-7.02.75-10.3,2.2-.31.14-.65.21-.94.51.35.13.65.1.95.09,3.48-.17,6.87-.88,10.23-1.69,1.39-.34,3.38-.37,4.38-1.56.16-.18.47-.6.4-.84-.33.11-.64.37-.94.52-.64.33-1.26.52-1.97.6h.01Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M99.19,33.08c4.91-.71,9.45-2.15,13.53-4.87-1.43.37-2.84.86-4.3,1.08-3.02.44-5.72,1.73-8.38,3.1-.28.14-.61.26-.84.69h-.01Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M79.69,44.96c-6.6,7.14-11.59,15.4-16.96,23.45-1.11,1.66-2.21,3.3-3.33,4.95-.65.98-1.25,2-1.9,2.96-.6.88-1.26,1.79-1.65,2.79-.13.33.61-.38.81-.68,1.49-2.2,3.06-4.41,4.55-6.6,1.08-1.59,2.18-3.26,3.28-4.86.94-1.28,1.67-2.56,2.55-3.88,1.22-1.84,2.72-3.29,4.82-4.08,1.38-.52,2.75-.96,4.17-1.33,3.36-.88,6.82-1.22,10.26-1.71.45-.07.92-.07,1.28-.5-5.63-1.2-11.08-.96-16.21,2.15.03-.38.24-.52.37-.71.94-1.42,2.33-2.31,3.72-3.22,3.05-1.97,6.3-3.43,9.93-3.94,1.84-.26,3.7-.47,5.55-.71.35-.04.75-.04,1.15-.5-5.46-1.08-10.57-.82-15.32,2.15-.06.04-.11.08-.16.13.06-.04.11-.09.16-.13-.06-.06-.11-.11-.16-.18.94-1.18,2.04-2.14,3.36-2.86,2.2-1.2,4.58-1.86,6.98-2.45,2.54-.64,5.12-1.05,7.69-1.59.52-.11,1.06-.2,1.52-.61-.27-.21-.54-.24-.81-.27-1.04-.13-2.07-.13-3.11-.1-3.42.1-6.78.48-9.87,2.1-.16.08-.23.16-.4.07.04-.54.92-1.28,1.3-1.69.52-.57,1.09-1.09,1.73-1.53,2.44-1.69,5.57-1.84,8.43-2.69,3.6-1.06,6.78-3.27,10.4-4.31-3.82.03-7.6.88-11.06,2.47-1.21.55-2.43,1.22-3.76,1.28,2.91-2.62,6.48-4.35,9.9-6.28,3.42-1.93,6.79-4.18,8.92-7.47.11-.18.24-.38.21-.59-.04-.37-.52-.55-.89-.44-.37.11-.61.43-.85.71-3.23,3.78-7.86,6.04-12.08,8.67-5.35,3.33-10.16,7.37-14.43,11.99l-.07.04Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M18.95,45.17c2.71,3.2,5.33,6.39,7.09,10.2,1.84,4.01,2.89,8.26,5.08,12.14.2.35.41.71.62,1.06,1.55,2.55,3.16,4.95,4.28,7.72,1.29,3.2,3.26,9.2,3.69,9.68.11.13.1-.77.1-.82-.04-.81-.13-1.62-.21-2.41-.11-1.11-.17-2.21-.31-3.3-.14-1.09-.44-2.24-.84-3.3-.5-1.36-1.12-2.66-1.79-3.95-.67-1.29-1.21-2.64-1.76-3.97-.38-.92-.72-1.84-1.02-2.79-.78-2.49-1.22-5.1-2.18-7.54-.96-2.44-2.62-4.77-4.52-6.66-3.6-3.56-6.85-7.31-10.65-10.66-2.92-2.58-5.67-5-8.71-7.45-.58-.47-2.78-1.88-2.37-1.25.92,1.42,2.55,2.76,3.93,3.97,3.36,2.95,6.65,5.91,9.56,9.32h.01Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M91.49,64.26c-5.12,1.64-10.18,3.47-15.19,5.41-3.11,1.2-5.96,2.76-8.34,5.1-1.08,1.06-2.2,2.1-3.18,3.26.11.13.24.21.4.27-.14-.06-.28-.16-.4-.27-1.57,1.43-3.22,2.75-4.89,4.05-1.04.69-2.07,1.39-3.11,2.1-1.02.69-1.99,1.43-2.78,2.38-1.3,1.57-2.5,3.22-3.7,4.87-.07.11-.28.34-.13.35.11,0,.37-.24.54-.38,3.4-2.75,6.77-6.02,10.65-8.09s7.35-4.24,10.5-7.24c.71-.68,1.42-1.37,2.16-2.04,3.33-3.02,7.43-4.66,11.5-6.52,4.1-1.87,5.66-2.31,9.94-3.64.28-.09,3.65-1.64,3.43-1.77-.21-.14-2.68.65-2.79.69-2.28.69-2.31.74-4.6,1.46h-.01Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M55.62,67.3c.07-.11.16-.24.23-.35,2.57-4.04,5.05-8.12,7.47-12.24,2.33-3.97,4.58-7.96,6.75-12.02,2.17-4.05,3.9-8.09,5.76-12.16.52-1.16,1.4-2.55,1.67-3.81-.16.2-.3.41-.44.62-2.89,4.82-5.82,9.59-8.84,14.33-1.23,1.94-2.48,3.88-3.72,5.84-1.28,1.87-2.54,3.75-3.83,5.63-1.49,2.17-2.99,4.32-4.5,6.49-1.18,1.47-2.17,3.07-3.23,4.62-1.29,1.9-2.13,3.98-2.54,6.25-.27,1.54-.5,3.09-.87,4.61-.92,3.83-2.43,7.45-3.79,11.12-.09.24-.48,1.37-.18.98.94-1.25,2.52-5.44,3.63-8.1.87-2.1,1.86-4.17,2.81-6.22.91-1.94,2.38-3.77,3.57-5.58h.03Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M13.36,69.92c1.83,1.86,3.69,3.68,5.57,5.46,3.99,3.75,8.31,8.03,13.7,9.61,2.52.74,4.5,2.3,5.65,4.76.54,1.18,1.08,4.8,1.13,3.41.06-1.69-.23-2.67-.73-3.96-.54-1.4-1.66-2.3-2.61-3.44-2.96-3.49-5.94-6.86-9.29-9.98-3.35-3.12-7.02-6.29-10.71-9.25-2.09-1.67-4.2-3.34-6.37-4.89-3.12-2.27-6.41-4.51-9.55-6.73-.09-.06-.03,0-.16-.01.03.18-.04.11.06.23,4.2,5.02,8.72,10.12,13.32,14.81h-.01Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M84.04,82.75c-6.79,2.15-13.5,4.59-20.23,6.97-2.06.72-4.11,1.45-6.2,2.1-2.88.91-5.53,2.27-7.97,4.04-.41.3-.99.52-1.11,1.05-.07.3.96-.11,1.21-.28,3.74-2.79,7.35-4.83,12.18-4.34.84.09,1.67.07,2.51-.03,3.84-.48,7.73-2.08,11.33-3.46,5.5-2.1,10.84-4.66,15.94-7.58.6-.34,1.25-.6,1.83-1.19-.91.08-1.62.38-2.35.58-2.4.67-4.78,1.39-7.15,2.14Z'
                  />
                  <path
                    className='logo-loading__path--white'
                    d='M47.67,59.14c.85-4.59,1.56-9.12,1.73-13.79.18-4.77-.04-9.55-.5-14.3-.92-9.44-2.84-18.69-4.72-27.96-.21-1.03-.44-2.07-.65-3.1-.04.61,0,1.19.06,1.77.6,4.63.87,9.28.95,13.94.17,9.71.14,19.43-.09,29.15-.23,9.82-.65,19.64-1.06,29.44-.11,2.76-.38,5.57-.38,8.33-.16,2.88-.4,5.77-1.16,8.54-1.12,4.02-3.16,7.61-5.59,10.98-1.83,2.54-4.18,4.59-6.5,6.66-.26.23-.51.45-.74.71-.16.18-.2.4-.07.62.13.21.33.3.57.3.3,0,.52-.16.74-.33,2.14-1.7,4.17-3.51,5.84-5.68,2.08-2.71,3.65-5.72,5.38-8.66,2.2-3.7,3.32-7.67,3.5-11.94.13-3.02.26-6.02.37-9.04.06-1.43,0-2.89.17-4.31.14-1.22.55-2.39.78-3.6.5-2.58.94-5.17,1.42-7.76h-.04Z'
                  />
                </g>
              </motion.svg>
            </>
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className='loading-screen-bg'
        initial={{ y: '0%' }}
        animate={{ y: liftVeil ? '-100%' : '0%' }}
        transition={{ duration: 0.75, ease: 'easeInOut' }}
      />
    </>
  );
};

export default LoadingScreen;
