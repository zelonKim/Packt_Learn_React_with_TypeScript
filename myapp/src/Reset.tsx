import { memo } from 'react';

type Props = {
  onClick: () => void;
};

export const Reset = memo(({ onClick }: Props) => {
  console.log('rendering Reset is happened');

  return <button onClick={onClick}> Reset </button>;
});
// Add버튼과 Subtract버튼을 눌러도 콘솔창에 rendering Reset is happened이 출력됨.
// (Reset component is still unnecessarily re-rendered)

// new instance of the function is created on every render
// -> onClick will have a different reference on each render
// -> the memoized result from Reset isn`t used

Reset.displayName = 'Reset';
