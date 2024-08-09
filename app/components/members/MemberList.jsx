'use client';
import {
  rightSideVariants,
  membersVariants,
} from '@/app/animations/membersVariants';
import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Carousel from './Carousel';
import Grid from './Grid';

const MemberList = ({
  members,
  display,
  onDisplayChange,
  onMemberClick,
  isExiting,
}) => {
  const handleDisplayChange = () => {
    const newDisplay = display === 'Slides' ? 'Grid' : 'Slides';
    onDisplayChange(newDisplay);
  };

  const handleMemberClick = useCallback(
    (member) => {
      onMemberClick(member);
    },
    [onMemberClick]
  );

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className='members_list'>
      <AnimatePresence mode='wait'>
        {!isExiting && (
          <motion.div
            key='display-button'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={rightSideVariants}
          >
            <button className='btn' onClick={handleDisplayChange}>
              {display}
              <div className='btn__icon'>
                {display === 'Grid' ? (
                  <svg
                    id='icon__grid'
                    data-name='Icon Grid'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 312.45 311.45'
                  >
                    <g>
                      <path d='M136.65,147.65H11c-6.07,0-11-4.93-11-11V11C0,4.93,4.93,0,11,0h125.65c6.07,0,11,4.93,11,11v125.65c0,6.07-4.93,11-11,11ZM16,131.65h115.65V16H16v115.65Z' />
                      <path d='M301.45,147.65h-125.65c-6.07,0-11-4.93-11-11V11c0-6.07,4.93-11,11-11h125.65c6.07,0,11,4.93,11,11v125.65c0,6.07-4.93,11-11,11ZM180.81,131.65h115.65V16h-115.65v115.65Z' />
                      <path d='M136.65,311.45H11c-6.07,0-11-4.93-11-11v-125.65c0-6.07,4.93-11,11-11h125.65c6.07,0,11,4.93,11,11v125.65c0,6.07-4.93,11-11,11ZM16,295.45h115.65v-115.65H16v115.65Z' />
                      <path d='M301.45,311.45h-125.65c-6.07,0-11-4.93-11-11v-125.65c0-6.07,4.93-11,11-11h125.65c6.07,0,11,4.93,11,11v125.65c0,6.07-4.93,11-11,11ZM180.81,295.45h115.65v-115.65h-115.65v115.65Z' />
                    </g>
                  </svg>
                ) : (
                  <svg
                    id='icon__carousel'
                    data-name='Icon Carousel'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 444.07 307.41'
                  >
                    <g>
                      <path d='M102.53,153.59c0-46.83,0-93.66,0-140.49C102.54,2.1,104.65,0,115.73,0c70.85,0,141.69,0,212.54,0,11.12,0,13.24,2.1,13.24,13.07,0,93.83,0,187.66,0,281.48,0,10.63-2.24,12.85-12.96,12.85-71.01,0-142.02,0-213.03,0-10.74,0-12.99-2.22-12.99-12.83,0-47,0-93.99,0-140.99ZM324.15,17.45H119.89v272.52h204.26V17.45Z' />
                      <path d='M392.58,268.09V39.39c-6.07,3.08-11.64,5.92-17.21,8.74-1.63.83-3.22,1.79-4.93,2.42-4.47,1.65-9.17-.22-11.01-4.24-1.76-3.86-.5-8.73,3.51-10.82,11.51-6.01,23.08-11.92,34.81-17.46,5.64-2.67,11.26.97,12.07,7.18.17,1.31.09,2.66.09,4,0,83,0,166,0,249,0,11.03-5.57,14.54-15.33,9.68-9.84-4.9-19.67-9.8-29.48-14.75-5.95-3.01-7.94-7.7-5.4-12.46,2.42-4.54,7.28-5.62,12.98-2.76,6.48,3.26,12.91,6.6,19.89,10.17Z' />
                      <path d='M51.38,39.29v228.67c3.55-1.73,6.75-3.26,9.92-4.85,3.86-1.95,7.63-4.11,11.56-5.91,4.69-2.15,9.49-.53,11.58,3.62,2.1,4.18.63,9.01-3.9,11.49-5.54,3.03-11.28,5.72-16.93,8.55-5.36,2.68-10.67,5.45-16.1,7.99-7.25,3.38-13.06-.29-13.37-8.3-.03-.83,0-1.67,0-2.5,0-82.83,0-165.67,0-248.5,0-1.33-.08-2.68.06-4,.68-6.5,6.38-10.23,12.25-7.45,11.58,5.48,23.01,11.29,34.37,17.21,4.31,2.25,5.65,7.12,3.72,11.15-2,4.18-6.91,6.03-11.52,3.83-7.03-3.35-13.9-7.04-21.62-10.99Z' />
                      <path d='M17.05,153.66c0,41.16,0,82.32,0,123.47,0,1.83.12,3.69-.11,5.49-.55,4.34-3.09,6.91-7.45,7.44-4.26.52-7.96-1.94-9.03-6.17-.48-1.9-.44-3.96-.44-5.94C0,194.98,0,112,.02,29.02c0-1.98.01-4.06.59-5.91,1.3-4.2,4.45-6.18,8.79-5.77,4.36.41,6.91,3.03,7.55,7.36.22,1.47.11,2.99.11,4.49,0,41.49,0,82.98,0,124.47Z' />
                      <path d='M426.99,153.15c0-41.16,0-82.31,0-123.47,0-1.67-.11-3.35.11-4.99.6-4.35,3.18-6.95,7.54-7.35,4.33-.4,7.51,1.56,8.78,5.78.6,2.02.6,4.26.6,6.41.03,82.81.03,165.62.03,248.44,0,1.33.07,2.68-.07,4-.53,5.11-4.17,8.42-8.94,8.2-4.56-.21-7.84-3.55-7.99-8.54-.17-5.66-.06-11.33-.06-16.99,0-37.16,0-74.31,0-111.47Z' />
                    </g>
                  </svg>
                )}
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {display === 'Grid' ? (
          <Carousel members={members} onMemberClick={handleMemberClick} />
        ) : (
          <Grid
            members={members}
            onMemberClick={handleMemberClick}
            isExiting={isExiting}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemberList;
