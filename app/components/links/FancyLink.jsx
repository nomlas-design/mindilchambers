import Link from 'next/link';

const FancyLink = ({ text, to }) => (
  <Link className='fancy-link' href={to} data-text={text}>
    {text}
  </Link>
);

export default FancyLink;
