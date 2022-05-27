// // 2.6
// import { useState } from 'react'

// const Persons = ({persons}) => {
//   return (
//     persons.map(person => {
//       return (
//       <div key={person.name}>
//         {person.name}
//       </div>
//       )
//     })
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       name: newName,
//     }
  
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     return
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={handleNameChange}/>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//      <Persons persons={persons} />
//     </div>
//   )
// }

// export default App

// // 2.7
// import { useState } from 'react'

// const Persons = ({persons}) => {
//   return (
//     persons.map(persons => {
//       return (
//       <div key={persons.name}>
//         {persons.name}
//       </div>
//       )
//     })
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newPhone, setNewPhone] = useState('')

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       name: newName,
//     }
//     const currentName = persons.find(persons => persons.name === newName)
//     if (currentName) {
//       (window.alert(`${newName} is already added to phonebook`))
//     }
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     return
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={handleNameChange}/>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//      <Persons persons={persons} addNewName={addName}/>
//     </div>
//   )
// }

// export default App

// // 2.8
// import { useState } from 'react'

// const Persons = ({persons}) => {
//   return (
//     persons.map(person => {
//       return (
//       <div key={person.name}>
//         {person.name}
//       </div>
//       )
//     })
//   )
// }

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newPhone, setNewPhone] = useState('')

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       name: newName,
//     }
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     return
//   }

//   const addNewName = (event) => {
//     event.preventDefault()
//     const existingPerson = persons.find(persons => persons.name === newName)
//     if (existingPerson) {
//       (window.confirm(`${newName} is already added to phonebook`))
//     }
//   }

//   const handleNumberChange = (event) => {
//     console.log(event.target.value)
//     setNewPhone(event.target.value)
//   }

//   const addPhone = (event) => {
//     event.preventDefault()
//     const phoneObject = {
//       phone: newPhone,
//     }
//     setPersons(persons.concat(phoneObject))
//     setNewPhone('')
//     return
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//         <div>
//           name: <input value={newName} onChange={handleNameChange}/>
//         </div>
//         <div>
//           name: <input value={addPhone} onChange={handleNumberChange}/>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//      <Persons persons={persons} addNewName={addNewName}/>
//     </div>
//   )
// }

// export default App

// // 2.9
// import { useState } from 'react'

// const Persons = ({persons}) => {
//   return (
//     persons.map(person => {
//       return (
//       <div key={person.name}>
//         {person.name}
//       </div>
//       )
//     })
//   )
// }

// const Filter = ({ onFilter }) => {
//   return (
//     <div>
//       filter shown with <input onChange={onFilter} />
//     </div>
//   );
// };

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newPhone, setNewPhone] = useState('')

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       name: newName,
//     }
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     return
//   }

//   const addNewName = (event) => {
//     event.preventDefault()
//     const existingPerson = persons.find(persons => persons.name === newName)
//     if (existingPerson) {
//       (window.confirm(`${newName} is already added to phonebook`))
//     }
//   }

//   const handleNumberChange = (event) => {
//     console.log(event.target.value)
//     setNewPhone(event.target.value)
//   }

//   const addPhone = (event) => {
//     event.preventDefault()
//     const phoneObject = {
//       phone: newPhone,
//     }
//     setPersons(persons.concat(phoneObject))
//     setNewPhone('')
//     return
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//       <Filter onFilter={Filter}/>
//       <h2>Add a new</h2>
//         <div>
//           name: <input value={newName} onChange={handleNameChange}/>
//         </div>
//         <div>
//           name: <input value={newPhone} onChange={handleNumberChange}/>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//      <Persons persons={persons} addNewName={addNewName}/>
//     </div>
//   )
// }

// export default App

// // 2.10
// import { useState } from 'react'
// import Persons from './components/Persons'
// import PersonForm from './components/PersonForm'
// import Filter from './components/Filter'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas' }
//   ]) 
//   const [newName, setNewName] = useState('')
//   const [newPhone, setNewPhone] = useState('')

//   const handleNameChange = (event) => {
//     console.log(event.target.value)
//     setNewName(event.target.value)
//   }

//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       name: newName,
//     }
//     setPersons(persons.concat(nameObject))
//     setNewName('')
//     return
//   }

//   const addNewName = (event) => {
//     event.preventDefault()
//     const existingPerson = persons.find(persons => persons.name === newName)
//     if (existingPerson) {
//       (window.confirm(`${newName} is already added to phonebook`))
//     }
//   }

//   const handleNumberChange = (event) => {
//     console.log(event.target.value)
//     setNewPhone(event.target.value)
//   }

//   const addPhone = (event) => {
//     event.preventDefault()
//     const phoneObject = {
//       phone: newPhone,
//     }
//     setNewPhone(persons.concat(phoneObject))
//     setNewPhone('')
//     return
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form onSubmit={addName}>
//       <Filter onFilter={Filter}/>
//       <h2>Add a new</h2>
//       <PersonForm name={newName} phone={newPhone} />
//       </form>
//       <h2>Numbers</h2>
//      <Persons persons={persons} addNewName={addNewName} addPhone={addPhone}/>
//     </div>
//   )
// }

// export default App

// 2.8
import { useState } from 'react'

const Persons = ({persons}) => {
  return (
    persons.map(person => {
      return (
      <div key={person.name.id}>
          name={person.name}
        </div>
      )
    })
  )
}

const Numbers = ({numbers}) => {
  console.dir(numbers)
  return (
    numbers.map(number => {
      return (
        <div key={number.number.id}>
          number={number.number}
        </div>
      )
    })
  )
}

const NameNumbers = () => {
  return(
    <div>
      <NameNumbers Persons={Persons} Numbers={Numbers}/>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [numbers, setNumbers] = useState([
    { number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  // const [phone, setPhone] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    const currentName = persons.find(persons => persons.name === newName)
    if (currentName) {
      (window.alert(`${newName} is already added to phonebook`))
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      number: newNumber,
    }
    setNumbers(numbers.concat(numberObject))
    setNewNumber('')
  }

  const addNameNumber = (event) => {
    addName(event)
    addNumber(event)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     {/* <Persons persons={persons} addNewName={addName} numbers={numbers} addNumber={addNumber}/>
     <Numbers numbers={numbers} addNumber={addNumber}/> */}
     <NameNumbers addNewName={addName} addNumber={addNumber}/>
    </div>
  )
}

export default App