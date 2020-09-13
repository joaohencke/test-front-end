import { useRef, useEffect, useCallback } from 'react';

export default function useInfiniteScroll({ onEndReached }) {
  const ref = useRef();

  const onScroll = useCallback(() => {
    const elm = ref.current;
    if (elm.scrollTop + elm.clientHeight >= elm.scrollHeight) {
      onEndReached();
    }
  }, []);

  const attach = useCallback(() => ref.current.addEventListener('scroll', onScroll), []);

  const dettach = useCallback(() => ref.current.removeEventListener('scroll', onScroll), []);

  useEffect(() => {
    attach();
    return () => {
      dettach();
    };
  }, []);

  return [ref, { attach, dettach }];
}
