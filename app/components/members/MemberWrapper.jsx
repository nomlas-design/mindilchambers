'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import MemberList from './MemberList';
import Sidebar from './Sidebar';

const MemberWrapper = ({ members, navSquareData }) => {
  const [display, setDisplay] = useState('Grid');
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  const classes = {
    wrapper: clsx(
      'wrapper',
      display === 'Slides' ? 'wrapper--grid' : 'wrapper--carousel'
    ),
  };

  const handleMemberClick = useCallback(
    (member) => {
      setIsExiting(true);
      setTimeout(() => {
        router.push(`/members/${member.slug}`);
      }, 800); // Adjust this delay to match your animation duration
    },
    [router]
  );

  return (
    <div className={classes.wrapper}>
      <div className='container container--carousel'>
        <Sidebar data={navSquareData} isExiting={isExiting} />
        <MemberList
          members={members}
          navSquareData={navSquareData}
          display={display}
          onDisplayChange={handleDisplayChange}
          onMemberClick={handleMemberClick}
          isExiting={isExiting}
        />
      </div>
    </div>
  );
};

export default MemberWrapper;
