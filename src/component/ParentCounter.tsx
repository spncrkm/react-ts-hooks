import React from 'react'
import Counter from './Counter'

const ParentCounter = () => {
  return (
    <div>
      <h1>Test Counter</h1>
      <Counter initialCount={0} />
      <Counter initialCount={5} />
      <Counter initialCount={-15} />
      
    </div>
  )
}

export default ParentCounter
