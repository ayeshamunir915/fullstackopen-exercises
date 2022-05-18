import { useState } from 'react'

const Statistics = (props) => {
  const {good,neutral,bad}=props;
  return (
    <><table>
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
        <td>all {good + neutral + bad}</td>
      </tr>
      <tr>
        <td>average {(good + neutral + bad) / 3}</td>
      </tr>
      <tr>
        <td>positive {((good) / (good + neutral + bad)) * 100}%</td>
      </tr>
    </table><div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
      </div></>

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

      <h1>Statistics</h1>
      {(good === 0 && bad === 0 && neutral === 0) ? <div>No feedback is given</div> :
      <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

export default App