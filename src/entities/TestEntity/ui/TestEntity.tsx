'use client';
import { FC, useState } from 'react';
import { cvaRoot } from './TestEntityStyles';

interface Props {
}

const TestEntity: FC<Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cvaRoot()}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 2)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default TestEntity;