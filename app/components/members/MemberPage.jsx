import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default function MemberPage({ member }) {
  return (
    <div className='wrapper wrapper--fh wrapper--member'>
      <div className='container--member'>
        <div className='member__img'>
          {member.portraitUrl && (
            <Image src={member.portraitUrl} alt={member.name} fill />
          )}
        </div>
        <div className='member__info'>
          <div className='member__info__content'>
            <h1>{member.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
