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

// // 2.7 come back to 
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

//   const addNewName = (event) => {
//     event.preventDefault()
//     const existingPerson = persons.find(persons => persons.name === newName)
//     if (existingPerson) {
//       (window.confirm(`${newName} is already added to phonebook`))
//     }
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
//      <Persons persons={persons} addNewName={addNewName}/>
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

// 2.10
import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    return
  }

  const addNewName = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(persons => persons.name === newName)
    if (existingPerson) {
      (window.confirm(`${newName} is already added to phonebook`))
    }
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  const addPhone = (event) => {
    event.preventDefault()
    const phoneObject = {
      phone: newPhone,
    }
    setPersons(persons.concat(phoneObject))
    setNewPhone('')
    return
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
      <Filter onFilter={Filter}/>
      <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          name: <input value={newPhone} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     <Persons persons={persons} addNewName={addNewName}/>
    </div>
  )
}

export default App