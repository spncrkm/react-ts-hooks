import React, { useState } from 'react'

interface CounterProps {
    initialCount: number;

}

const Counter = ({initialCount}: CounterProps) => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => setCount(count => count + 1)
    const decrement = () => setCount(count => count - 1)
    const reset = () => setCount(0)


  return (
    <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
