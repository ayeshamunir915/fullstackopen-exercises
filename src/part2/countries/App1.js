// // 2.12
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Countries = ({countries}) => {
//   if (countries.length > 10)
//   return (
//   <div>
//     Too many matches, specify another filter
//   </div>
//   )
//   return (
//     countries.map(countries => {
//       return(
//         <Countries countries={countries} />
//       )
//     })
//   )
// }

// const countriesInformation = ({setCountries, setSearchFilter}) => {
//   if (setCountries.length === 1) {
//     const countries = setCountries[0]
//     return (
//       <div>
//         <h1>{countries.name}</h1>
//         <div>Capital {countries.capital}</div>
//         <div>Population {countries.population}</div>
//         <h1>Languages</h1>
//         <ul>
//             {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
//           </ul>
//       </div>
//     )
//   }
// }

// const App = () => {
//   const [countries, setCountries] = useState([])
//   const [searchFilter, setSearchFilter] = useState('')


//   const handleSearchFilterChange = (event) => {
//     console.log(event.target.value)
//     setSearchFilter(event.target.value)
//   }

//   useEffect(() => {
//     console.log('effect')
//     axios.get('https://restcountries.com/v3.1/all').then(response => {
//         console.log('promise fulfilled')
//         setCountries(response.data)
//       })
//   }, [])

//   return (
//     <div>
//       find countries <input value={searchFilter} onChange={handleSearchFilterChange} />
//       <countriesInformation setCountries={setCountries} setSearchFilter={setSearchFilter}/>
//     </div>
//   )
// }

// export default App

// // 2.13
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Countries = ({countries}) => {
//   if (countries.length > 10)
//   return (
//   <div>
//     Too many matches, specify another filter
//   </div>
//   )
//   return (
//     countries.map(countries => {
//       return(
//         <Countries countries={countries} />
//       )
//     })
//   )
// }

// const CountriesInformation = ({setCountries}) => {
//   if (setCountries.length === 1) {
//     const countries = setCountries[0]
//     return (
//       <div>
//         <h1>{countries.name}</h1>
//         <div>Capital {countries.capital}</div>
//         <div>Population {countries.population}</div>
//         <h1>Languages</h1>
//         <ul>
//             {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
//           </ul>
//       </div>
//     )
//   }
// }

// const App = () => {
//   const [countries, setCountries] = useState([])
//   const [searchFilter, setSearchFilter] = useState('')

//   const handleSearchFilterChange = (event) => {
//     console.log(event.target.value)
//     setSearchFilter(event.target.value)
//   }

//   const ShowButton = ({setSearchFilter}) => {
//     return setSearchFilter.map(countries => {
//       return (
//         <div key={countries.name}>
//           {countries.name} <button value={countries.name} onClick={handleSearchFilterChange}>show</button>
//         </div>
//       )
//     })
//   }

//   useEffect(() => {
//     console.log('effect')
//     axios.get('https://restcountries.com/v3.1/all').then(response => {
//         console.log('promise fulfilled')
//         setCountries(response.data)
//       })
//   }, [])

//   return (
//     <div>
//       find countries <input value={searchFilter} onChange={handleSearchFilterChange} />
//       <CountriesInformation setCountries={setCountries} setSearchFilter={setSearchFilter}/>
//       <ShowButton setCountries={setCountries} setSearchFilter={setSearchFilter}/>
//     </div>
//   )
// }

// export default App

// // 2.14
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const Countries = ({countries}) => {
//   if (countries.length > 10)
//   return (
//   <div>
//     Too many matches, specify another filter
//   </div>
//   )
//   return (
//     countries.map(countries => {
//       return(
//         <Countries countries={countries} />
//       )
//     })
//   )
// }

// const CountriesInformation = ({setCountries}) => {
//   if (setCountries.length === 1) {
//     const countries = setCountries[0]
//     return (
//       <div>
//         <h1>{countries.name}</h1>
//         <div>Capital {countries.capital}</div>
//         <div>Area {countries.area}</div>
//         <h1>Languages</h1>
//         <ul>
//             {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
//           </ul>
//       </div>
//     )
//   }
// }

// const api_key = process.env.REACT_APP_API_KEY

// const ShowWeather = ({countries}) => {
//   const [ weather, setWeather ] = useState({})

//   useEffect(() => {
//     axios
//       .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${countries.name}`)
//       .then(response => setWeather(response.data)) 
//   }, [countries])

//   return (
//     <>
//       <h1>Weather in {countries.name}</h1>
//       <div><b>temperature:</b> {weather.current?.temperature} Celsius</div>
//       <img src={weather.current?.weather_icons[0]} alt={weather.current?.weather_descriptions[0]}/>
//       <div><b>wind:</b> {weather.current?.wind_speed} mph direction {weather.current?.wind_direction}</div>
//     </>
//   )
// }

// const App = () => {
//   const [countries, setCountries] = useState([])
//   const [searchFilter, setSearchFilter] = useState('')

//   const handleSearchFilterChange = (event) => {
//     console.log(event.target.value)
//     setSearchFilter(event.target.value)
//   }

//   const ShowButton = ({setSearchFilter}) => {
//     return setSearchFilter.map(countries => {
//       return (
//         <div key={countries.name}>
//           {countries.name} <button value={countries.name} onClick={handleSearchFilterChange}>show</button>
//         </div>
//       )
//     })
//   }

//   useEffect(() => {
//     console.log('effect')
//     axios.get('https://restcountries.com/v3.1/all').then(response => {
//         console.log('promise fulfilled')
//         setCountries(response.data)
//       })
//   }, [])

//   return (
//     <div>
//       find countries <input value={searchFilter} onChange={handleSearchFilterChange} />
//       <CountriesInformation setCountries={setCountries} setSearchFilter={setSearchFilter}/>
//       <ShowButton setCountries={setCountries} setSearchFilter={setSearchFilter}/>
//     </div>
//   )
// }

// export default App

// 2.12
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({countries}) => {
  if (countries.length > 10)
  return (
  <div>
    Too many matches, specify another filter
  </div>
  )
  return (
    countries.map(countries => {
      return(
        <Countries countries={countries} />
      )
    })
  )
}

const countriesInformation = ({setCountries, setSearchFilter}) => {
  if (setCountries.length === 1) {
    const countries = setCountries[0]
    return (
      <div>
        <h1>{countries.name}</h1>
        <div>Capital {countries.capital}</div>
        <div>Population {countries.population}</div>
        <h1>Languages</h1>
        <ul>
            {countries.languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ul>
      </div>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')


  const handleSearchFilterChange = (event) => {
    console.log(event.target.value)
    setSearchFilter(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      find countries <input value={searchFilter} onChange={handleSearchFilterChange} />
      <countriesInformation setCountries={setCountries} setSearchFilter={setSearchFilter}/>
    </div>
  )
}

export default App