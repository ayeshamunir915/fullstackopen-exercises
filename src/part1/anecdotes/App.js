// // 1.12
// import { useState } from 'react'

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)

//   const handleNextAnecdotesClick = () => {
//     const newAnecdotes = Math.floor(Math.random() * anecdotes.length)
//     setSelected(newAnecdotes)
//   }

//   return (
//     <div>
//       {anecdotes[selected]}<br></br>
//       <button onClick={handleNextAnecdotesClick}>Next anecdotes</button>
//     </div>
//   )
// }

// export default App

// // 1.13
// import { useState } from 'react'

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)
//   const [totalVotes, setTotalVotes] = useState(new Array(anecdotes.length).fill(0))

//   const handleNextAnecdotesClick = () => {
//     const newAnecdotes = Math.floor(Math.random() * anecdotes.length)
//     setSelected(newAnecdotes)
//   }

//   const handleTotalVotesClick = () => {
//     const copy = [...totalVotes]
//     copy[selected]+=1
//     setTotalVotes(copy)
//   }

//   return (
//     <div>
//       {anecdotes[selected]}<br></br>
//       has {totalVotes[selected]} votes<br></br>
//       <Button handleClick={handleTotalVotesClick} text="Vote" />
//       <Button handleClick={handleNextAnecdotesClick} text="Next anecdotes" />
//     </div>
//   )
// }

// export default App

// 1.14

import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [totalVotes, setTotalVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdotesClick = () => {
    const newAnecdotes = Math.floor(Math.random() * anecdotes.length)
    setSelected(newAnecdotes)
  }

  const handleTotalVotesClick = () => {
    const votes = [...totalVotes]
    votes[selected]+=1
    setTotalVotes(votes)
  }

  const mostVotes = Math.max(...totalVotes);
  const mostSelected = totalVotes.indexOf(mostVotes);
  console.log(mostSelected);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br></br>
      has {totalVotes[selected]} votes<br></br>
      <Button handleClick={handleTotalVotesClick} text="Vote" />
      <Button handleClick={handleNextAnecdotesClick} text="Next anecdotes" />
      <h1>Anecdotes with the most votes</h1>
      {anecdotes[mostSelected]}<br></br>
      has {mostVotes[mostSelected]} votes<br></br>
    </div>
  )
}

export default App
