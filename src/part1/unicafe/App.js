// 1.1 to 1.11

import { useState } from 'react'

const allClicks = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
      No feedback is given
      </div>
    )
  }
    else {(
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
}

const Statistics = (props) => {
  //come back to step 1.8 and 1.9 and 1.10
  //research how to distruct in javascript
  const {good, neutral, bad, all, average, positive} = props 

  return(
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <History allClicks={allClicks} />

      <h1>Statistics</h1>
      <table>
        <tr>
          <td>good {good}</td>
        </tr>
        <tr>
          <td>neutral {neutral}</td>
        </tr>
        <tr>
          <td>bad {bad}</td>
        </tr>
        <tr>
          <td>all {good+neutral+bad}</td>
        </tr>
        <tr>
          <td>average {(good+neutral+bad)/3}</td>
        </tr>
        <tr>
          <td>positive {(good+neutral)*100}%</td>
        </tr>
      </table>
    </div>
  )
}

export default App