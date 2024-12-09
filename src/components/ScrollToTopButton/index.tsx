import UpArrow from '@assets/icon/float_up.svg?react';
import { ScrollButton } from './style';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
    console.log('페이지 상단으로 이동');
  };

  return (
    <ScrollButton
      onClick={scrollToTop}
      aria-label="페이지 상단으로 이동"
    >
      <UpArrow />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
