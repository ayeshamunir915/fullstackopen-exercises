import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App



// import { useState } from 'react'

// const App = () => {
//   //2.9
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', number: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
//   ])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')

//   const addName = (event) => {
//     event.preventDefault()
//     const nameObject = {
//       content: newName,
//     }
//     setPersons(persons.concat(nameObject))
//     //Part 2.7 is the alert supposed to be like this?
//     window.alert({newName} + ' is already added to phonebook');
//   }

// const handleNewNameChange = (event) => {
//   console.log(event.target.value)
//   setNewName(event.target.value)
// }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       // part 2.8
//       /*<div> name: <input /></div>
//       <div> number: <input /></div>*/

//       // part 2.9
//       <div> filter shown with: <input /></div>
//       <h3>add a new</h3>
//       <form>
//         <div>name: <input /></div>
//         <div>number: <input /></div>
//         <div><button type="submit" onSubmit={addName}>add</button></div>
//       </form>
//       <h2>Numbers</h2>
//       console.log({newName} + {newNumber})
//     </div>
//   )
// }

// export default App