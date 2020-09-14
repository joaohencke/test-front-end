import { useRef } from 'react';

export default function useDebounce(ms = 1000) {
  const timeoutId = useRef();

  return (debounced) => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(debounced, ms);
  };
}
