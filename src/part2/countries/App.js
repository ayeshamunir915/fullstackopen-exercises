import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const Countries = (props) => {
    if (countries.length > 10)
    return (
    <div>
      Too many matches, specify another filter
    </div>
    )
    return (
      props.countries.map(countries => {
        return(
          <Countries countries={countries} />
        )
      })
    )
  }

  const CountryInformation = ({countries}) => {
    return(
      <div>
        <h2>{countries.name}</h2>
        <p>Capital: {countries.capital}</p>
        <p>Population: {countries.population}</p>
        <h3>Languages</h3>
        <div>
          {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
        </div>
        <img src={countries.flag} alt="country flag" width="300vw"/>
      </div>
    )
  }

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return(
    // {(countries.length >=10) ? <div>Too many matches, specify another filter</div> :
    // <Countries countries={countries} />}
    <div>
      find countries <input value={search} onChange={e => setSearch(e.target.value)} /><br></br>
      <Countries countries={countries}/><button>Show</button>
    </div>
  )
}

export default App