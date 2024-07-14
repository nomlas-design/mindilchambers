import Image from 'next/image';

const Button = ({ text, colour, size, type, href, onClick }) => {
  return (
    <a href={href} className={`button ${colour} ${size}`}>
      <span>{text}</span>
      <div className={`button__arrow button__arrow--${type}`}>
        {type === 'up' ? (
          <Image fill src='icons/icon__arrowup.svg' alt='' />
        ) : (
          <Image fill src='icons/icon__arrowright.svg' alt='' />
        )}
      </div>
    </a>
  );
};

export default Button;
