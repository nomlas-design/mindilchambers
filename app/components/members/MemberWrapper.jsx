'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import MemberList from './MemberList';
import Sidebar from './Sidebar';
import Modal from './MemberModal';

const MemberWrapper = ({ members, navSquareData, initialMemberSlug }) => {
  const [display, setDisplay] = useState('Grid');
  const [isExiting, setIsExiting] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (initialMemberSlug) {
      const member = members.find((m) => m.slug === initialMemberSlug);
      if (member) {
        setSelectedMember(member);
      }
    } else {
      setSelectedMember(null);
    }
  }, [initialMemberSlug, members]);

  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedMember]);

  const handleMemberClick = useCallback(
    (member) => {
      if (member && member.slug) {
        setSelectedMember(member);
        router.push(`/members/${member.slug}`, { scroll: false });
      }
    },
    [router]
  );

  const handleCloseModal = useCallback(() => {
    setSelectedMember(null);
    router.push('/members', { scroll: false });
  }, [router]);

  const classes = {
    wrapper: clsx(
      'wrapper',
      display === 'Slides' ? 'wrapper--grid' : 'wrapper--carousel'
    ),
  };

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
