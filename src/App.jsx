import { useState } from 'react'
import Example1 from './Example1'
import Example2 from './Example2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Example2 />
    </div>
  )
}

export default App
