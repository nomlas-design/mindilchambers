'use client';
import { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

const PortableTextWrapper = ({ value }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const desktopComponents = {
    block: {
      normal: ({ children, index }) => {
        if (children.length === 0) {
          return null;
        }
        if (index === 0) {
          return <h1>{children}</h1>;
        } else {
          return <h2>{children}</h2>;
        }
      },
    },
  };

  const MobileContent = ({ value }) => {
    const h1Content =
      value.find((block) => block.style === 'normal')?.children[0]?.text || '';
    const h2Content = value
      .filter((block) => block.style === 'normal')
      .slice(1)
      .map((block) => block.children[0]?.text || '')
      .join(' ');

    return (
      <>
        <h1>{h1Content}</h1>
        <h2>{h2Content}</h2>
      </>
    );
  };

  return isMobile ? (
    <MobileContent value={value} />
  ) : (
    <PortableText value={value} components={desktopComponents} />
  );
};

export default PortableTextWrapper;
