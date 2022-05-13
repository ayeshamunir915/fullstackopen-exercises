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

/*import { useState, useEffect } from 'react';
import axios from 'axios'

const Country = ({allCountries, setNewFilter}) => {
  if (allCountries.length === 1) {
    const country = allCountries[0]
    return (
      <div>
        <h1>{country.name}</h1>
        <div>capital</div>
        <div>area</div>
        <h3>languages</h3>
      </div>
    )
  }
  if (setNewFilter.length > 10) return <div>Too many matches, specify another filter</div>
}


const App = () => {

  const [newCountries, setNewCountries] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setNewCountries(response.data)
    })
  }, [])

  return (
    <div>
      find countries <input value={setNewFilter} onChange={e => setNewFilter(e.target.value)} />
    </div>
  )
}

export default App*/