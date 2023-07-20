'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div >
  )
}