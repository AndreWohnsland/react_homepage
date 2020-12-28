import { useEffect, useState, useCallback } from 'react';

const useResize = (myRef) => {
  const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef]);

  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth());
    };

    if (myRef.current) {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef, getWidth]);

  return width && width > 25 ? width - 50 : width;
};

export default useResize;
