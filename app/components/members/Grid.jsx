import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import {
  gridContainerVariants,
  gridItemVariants,
} from '@/app/animations/membersVariants';

const Grid = ({ members, onMemberClick }) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleMouseEnter = useCallback((memberId) => {
    setHoveredMember(memberId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredMember(null);
  }, []);

  const handleMemberClick = useCallback(
    (member) => {
      onMemberClick(member);
    },
    [onMemberClick]
  );

  return (
    <motion.div
      className={`members_grid ${hoveredMember ? 'hovering' : ''}`}
      variants={gridContainerVariants}
      initial='hidden'
      animate='visible'
      //exit='exit'
    >
      {members.map((member) => (
        <motion.div
          className='members_grid__member'
          key={member._id}
          variants={gridItemVariants}
          custom={member._id}
          onMouseEnter={() => handleMouseEnter(member._id)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMemberClick(member)}
        >
          <div className='members_grid__member__inner'>
            <div className='members_grid__member__image'>
              <Image
                src={member.portraitUrl}
                alt={member.name}
                fill
                style={{
                  filter:
                    hoveredMember && hoveredMember !== member._id
                      ? 'saturate(0.5)'
                      : 'saturate(1)',
                  opacity:
                    hoveredMember && hoveredMember !== member._id ? 0.8 : 1,
                }}
              />
            </div>
            <div className='members_grid__member__content'>
              <h3>{member.name}</h3>
              <p>{member.seniority}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Grid;
