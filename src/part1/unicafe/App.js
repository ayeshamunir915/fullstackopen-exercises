// // 1.6
// import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       code here
//     </div>
//   )
// }

// export default App

// 1.7
// import { useState } from 'react'

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>

//       <h1>Statistics</h1>
//       <div>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//       <p>all {good+neutral+bad}</p>
//       <p>average {(good+neutral+bad)/3}</p>
//       <p>positive {((good)/(good+neutral+bad))*100}%</p>
//       </div>

//     </div>
//   )
// }

// export default App

// 1.8
// import { useState } from 'react'

// const Statistics = (props) => {
//   const {good,neutral,bad}=props;
//   return (
//     <><table>
//       <tr>
//         <td>good {good}</td>
//       </tr>
//       <tr>
//         <td>neutral {neutral}</td>
//       </tr>
//       <tr>
//         <td>bad {bad}</td>
//       </tr>
//       <tr>
//         <td>all {good + neutral + bad}</td>
//       </tr>
//       <tr>
//         <td>average {(good + neutral + bad) / 3}</td>
//       </tr>
//       <tr>
//         <td>positive {((good) / (good + neutral + bad)) * 100}%</td>
//       </tr>
//     </table></>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>

//       <h1>Statistics</h1>
//       <div>
//       <Statistics good={good} neutral={neutral} bad={bad} />
//       </div>

//     </div>
//   )
// }

// export default App

// 1.9

// import { useState } from 'react'

// const Statistics = (props) => {
//   const {good,neutral,bad}=props;
//   return (
//     <><table>
//       <tr>
//         <td>good {good}</td>
//       </tr>
//       <tr>
//         <td>neutral {neutral}</td>
//       </tr>
//       <tr>
//         <td>bad {bad}</td>
//       </tr>
//       <tr>
//         <td>all {good + neutral + bad}</td>
//       </tr>
//       <tr>
//         <td>average {(good + neutral + bad) / 3}</td>
//       </tr>
//       <tr>
//         <td>positive {((good) / (good + neutral + bad)) * 100}%</td>
//       </tr>
//     </table></>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>

//       <h1>Statistics</h1>
//       <div>
//       {(good === 0 && bad === 0 && neutral === 0) ? <div>No feedback is given</div> :
//       <Statistics good={good} neutral={neutral} bad={bad} />}
//       </div>

//     </div>
//   )
// }
// export default App

// // 1.10
// import { useState } from 'react'

// const StatisticLine = (props) => {
//   const {good,neutral,bad}=props;
//   return (
//     <div>
//       <td>{good}</td>
//       <td>{neutral}</td>
//       <td>{bad}</td>
//     </div>
//   )
// }

// const Statistics = (props) => {
//   const {good,neutral,bad}=props;
//   return (
//     <><table>
//       <tr>
//         <td>good {good}</td>
//       </tr>
//       <tr>
//         <td>neutral {neutral}</td>
//       </tr>
//       <tr>
//         <td>bad {bad}</td>
//       </tr>
//       <tr>
//         <td>all {good + neutral + bad}</td>
//       </tr>
//       <tr>
//         <td>average {(good + neutral + bad) / 3}</td>
//       </tr>
//       <tr>
//         <td>positive {((good) / (good + neutral + bad)) * 100}%</td>
//       </tr>
//       </table>
//       <div>
//         <StatisticLine text="good" value={good} />
//         <StatisticLine text="neutral" value={neutral} />
//         <StatisticLine text="bad" value={bad} />
//         <StatisticLine text="all" value={good + neutral + bad} />
//         <StatisticLine text="average" value={(good + neutral + bad) / 3} />
//         <StatisticLine text="positive" value={((good) / (good + neutral + bad)) * 100} />
//       </div>
//       </>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>

//       <h1>Statistics</h1>
//       <div>
//       {(good === 0 && bad === 0 && neutral === 0) ? <div>No feedback is given</div> :
//       <Statistics good={good} neutral={neutral} bad={bad} />}
//       </div>

//     </div>
//   )
// }

// export default App


// 1.11 Already in table view
import { useState } from 'react'

const StatisticLine = (props) => {
  const {good,neutral,bad}=props;
  return (
    <div>
      <td>{good}</td>
      <td>{neutral}</td>
      <td>{bad}</td>
    </div>
  )
}

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
      </table>
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={(good + neutral + bad) / 3} />
        <StatisticLine text="positive" value={((good) / (good + neutral + bad)) * 100} />
      </div>
      </>
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
      <div>
      {(good === 0 && bad === 0 && neutral === 0) ? <div>No feedback is given</div> :
      <Statistics good={good} neutral={neutral} bad={bad} />}
      </div>

    </div>
  )
}

export default App