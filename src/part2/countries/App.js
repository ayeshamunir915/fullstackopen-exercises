import { useState, useEffect } from 'react';
import axios from 'axios'

const Country = (props) => {
  if (props.allCountries.length === 0) {
    return (
      <div>
        Too many countries, specify another filter
      </div>
    )
  }
}

const Countries = (props) => {
  const {name, capital, area}=props;
  return (
    <table>
    <tr>
      <td>name {name}</td>
    </tr>
    <tr>
      <td>capital {capital}</td>
    </tr>
    <tr>
      <td>area {area}</td>
    </tr>
  </table>
  )
}

const Languages = (props) => {
  const {languages}=props;
  return (
    <table>
    <tr>
      <td>languages {languages}</td>
    </tr>
  </table>
  )
}

const App = () => {

  const [newCountries, setNewCountries] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.com/')
    .then(response => {
      const notes = response.data
      console.log(notes)
    })
  }, [])

  return (
    <div>
      Find countries <input />
    </div>
  )
}

export default App