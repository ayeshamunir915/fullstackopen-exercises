// // 1.12
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const FilteredCountriesResult = ({searchFilteredCountries}) => {
//   if (searchFilteredCountries.length === 1){
//     const country = searchFilteredCountries[0]
//     return (
//       <div>
//         <h1>{country.name.official}</h1>
//         <div>capital {country.capital}</div>
//         <div>population {country.population}</div>
//         <div>area {country.area}</div>
//         <div>region {country.region}</div>
//         <div>subregion {country.subregion}</div>
//         <h1>Languages</h1>
//         <ul>
//         { Object.values(country.languages).map(language => <li key={language}>{language}</li>) }
//         </ul>
//         <div> {country.flag}</div>
//       </div>
//     )
//   }
//   if (searchFilteredCountries.length > 10)
//   return (
//   <div>
//     Too many matches, specify another filter
//   </div>
//   )
//   return(
//     searchFilteredCountries.map(country => <div key={country.name.official}>{country.name.official}</div>)
//   )
// }

// const App = () => {
//   const [ searchFilter, setSearchFilter ] = useState('')
//   const [countries, setCountries] = useState([])

//   const handleFilterChange = (event) => {
//     console.log(event.target.value)
//     setSearchFilter(event.target.value)
//   }

//   useEffect(() => {
//     console.log('effect')
//     axios.get('https://restcountries.com/v3.1/all').then(response => {
//         console.log('promise fulfilled', response.data)
//         setCountries(response.data)
//       })
//   }, [])

//   const searchFilteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(searchFilter))
//   console.log(searchFilteredCountries)
 
//   return (
//     <div>
//       find countries <input countries={countries} searchFilter={searchFilter} onChange={handleFilterChange} />
//       <FilteredCountriesResult searchFilteredCountries={searchFilteredCountries} />
//     </div>
//   )
 
// }

// export default App

// // 1.13
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const FilteredCountriesResult = ({searchFilteredCountries, handleFilterChange}) => {
//   if (searchFilteredCountries.length === 1){
//     const country = searchFilteredCountries[0]
//     return (
//       <div>
//         <h1>{country.name.official}</h1>
//         <div>area {country.area}</div>
//         <h1>Languages</h1>
//         <ul>
//         { Object.values(country.languages).map(language => <li key={language}>{language}</li>) }
//         </ul>
//         <div> {country.flag}</div>
//       </div>
//     )
//   }
//   if (searchFilteredCountries.length > 10)
//   return (
//   <div>
//     Too many matches, specify another filter
//   </div>
//   )
//   return(
//     searchFilteredCountries.map(country => <div key={country.name.official} onClick={handleFilterChange}>{country.name.official}<button value={country.name.official}>show</button></div>)
//   )
// }

// const App = () => {
//   const [ searchFilter, setSearchFilter ] = useState('')
//   const [countries, setCountries] = useState([])

//   const handleFilterChange = (event) => {
//     console.log(event.target.value)
//     setSearchFilter(event.target.value)
//   }

//   useEffect(() => {
//     console.log('effect')
//     axios.get('https://restcountries.com/v3.1/all').then(response => {
//         console.log('promise fulfilled', response.data)
//         setCountries(response.data)
//       })
//   }, [])

//   const searchFilteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(searchFilter))
//   console.log(searchFilteredCountries)
 
//   return (
//     <div>
//       find countries <input countries={countries} searchFilter={searchFilter} onChange={handleFilterChange} />
//       <FilteredCountriesResult searchFilteredCountries={searchFilteredCountries} onChange={handleFilterChange} />
//     </div>
//   )
 
// }

// export default App

// 1.14
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FilteredCountriesResult = ({searchFilteredCountries, handleFilterChange}) => {
  if (searchFilteredCountries.length === 1){
    const country = searchFilteredCountries[0]
    return (
      <div>
        <h1>{country.name.official}</h1>
        <div>area {country.area}</div>
        <h1>Languages</h1>
        <ul>
        { Object.values(country.languages).map(language => <li key={language}>{language}</li>) }
        </ul>
        <div> {country.flag}</div>
      </div>
    )
  }
  if (searchFilteredCountries.length > 10)
  return (
  <div>
    Too many matches, specify another filter
  </div>
  )
  return(
    searchFilteredCountries.map(country => <div key={country.name.official} onClick={handleFilterChange}>{country.name.official}<button value={country.name.official}>show</button></div>)
  )
}

const App = () => {
  const [ searchFilter, setSearchFilter ] = useState('')
  const [countries, setCountries] = useState([])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setSearchFilter(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then(response => {
        console.log('promise fulfilled', response.data)
        setCountries(response.data)
      })
  }, [])

  const searchFilteredCountries = countries.filter(country => country.name.official.toLowerCase().includes(searchFilter))
  console.log(searchFilteredCountries)
 
  return (
    <div>
      find countries <input countries={countries} searchFilter={searchFilter} onChange={handleFilterChange} />
      <FilteredCountriesResult searchFilteredCountries={searchFilteredCountries} onChange={handleFilterChange} />
    </div>
  )
 
}

export default App