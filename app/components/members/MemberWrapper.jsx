'use client';
import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import MemberList from './MemberList';
import Sidebar from './Sidebar';
import Modal from './MemberModal';

const MemberWrapper = ({ members, navSquareData }) => {
  const [display, setDisplay] = useState('Grid');
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDisplayChange = useCallback((newDisplay) => {
    setDisplay(newDisplay);
  }, []);

  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedMember]);

  const handleMemberClick = useCallback((member) => {
    if (member) {
      setSelectedMember(member);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  const handleSlideChange = useCallback((newActiveSlide) => {
    setActiveSlide(newActiveSlide);
  }, []);

  const classes = {
    wrapper: clsx(
      'wrapper',
      display === 'Slides' ? 'wrapper--grid' : 'wrapper--carousel'
    ),
  };

  return (
    <div className={classes.wrapper}>
      <div className='container container--carousel'>
        <Sidebar data={navSquareData} />
        <MemberList
          members={members}
          navSquareData={navSquareData}
          display={display}
          onDisplayChange={handleDisplayChange}
          onMemberClick={handleMemberClick}
          activeSlide={activeSlide}
          onSlideChange={handleSlideChange}
        />
        <Modal
          isOpen={!!selectedMember}
          onClose={handleCloseModal}
          member={selectedMember}
        />
      </div>
    </div>
  );
};

export default MemberWrapper;
