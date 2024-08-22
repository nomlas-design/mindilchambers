import Link from 'next/link';

const FancyLink = ({ text, to, external = false, onClick }) => {
  const linkProps = {
    className: 'fancy-link',
    href: to,
    'data-text': text,
    ...(external && { target: '_blank', rel: 'noopener noreferrer' }),
    onClick: (e) => {
      if (onClick) {
        onClick(e);
      }
    },
  };

  return <Link {...linkProps}>{text}</Link>;
};

export default FancyLink;
