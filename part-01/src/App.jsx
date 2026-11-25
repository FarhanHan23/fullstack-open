import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 	// const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  const handleClick = () => setCounter(counter + 1)
  // console.log('rendering...', counter)

  const setZero = () => setCounter(0)

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1?.name} {part1?.exercises}
      </p>
      <p>
        {part2?.name} {part2?.exercises}
      </p>
      <p>
        {part3?.name} {part3?.exercises}
      </p>
      <p>Number of exercises {part1?.exercises + part2?.exercises + part3?.exercises}</p>
      <h1>Counter: {counter}</h1>

        <button onClick={() => handleClick()}>
        plus
      </button>
      <button onClick={() => setZero()}>Reset</button>
    </div>
  )
}

export default App
