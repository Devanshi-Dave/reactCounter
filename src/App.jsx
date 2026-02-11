import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setnum] = useState(0)
  return (
    <div>
      <h1 className='h1'>Conter</h1>
      <button className='plus' onClick={() => setnum(num + 1)}>+</button>
        <button className='num'>{num}</button>
          <button className='minus' onClick={() => setnum(num - 1)}>-</button><br />
          <button className='reset' onClick={() => setnum(0)}>Reset</button>
    </div>
  )
}

export default App