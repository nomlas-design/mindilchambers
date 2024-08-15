'use client';
import { useState, useCallback, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import MemberList from './MemberList';
import Sidebar from './Sidebar';
import MemberModal from './MemberModal';

const MemberWrapper = ({ members, navSquareData, initialMemberSlug }) => {
  const [display, setDisplay] = useState('Grid');
  const [selectedMember, setSelectedMember] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (initialMemberSlug) {
      const member = members.find((m) => m.slug === initialMemberSlug);
      if (member) {
        setSelectedMember(member);
      }
    }
  }, [initialMemberSlug, members]);

  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedMember]);

  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  const handleMemberClick = useCallback(
    (member) => {
      setSelectedMember(member);
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('member', member.slug);
      router.push(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  const handleCloseModal = useCallback(() => {
    setSelectedMember(null);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('member');
    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  }, [router, pathname, searchParams]);

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
        />
        <MemberModal
          isOpen={!!selectedMember}
          onClose={handleCloseModal}
          member={selectedMember}
        />
      </div>
    </div>
  );
};

export default MemberWrapper;
