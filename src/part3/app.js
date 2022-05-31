// // 3.1
// const express = require('express')
// const app = express()

// let persons = [
//   { 
//     "id": 1,
//     "name": "Arto Hellas", 
//     "number": "040-123456"
//   },
//   { 
//     "id": 2,
//     "name": "Ada Lovelace", 
//     "number": "39-44-5323523"
//   },
//   { 
//     "id": 3,
//     "name": "Dan Abramov", 
//     "number": "12-43-234345"
//   },
//   { 
//     "id": 4,
//     "name": "Mary Poppendieck", 
//     "number": "39-23-6423122"
//   }
// ]

// app.get('/', (request, response) => {
//   response.send('<h1>Phonebook Backend</h1>')
// })

// app.get('/api/persons', (request, response) => {
//   response.json(persons)
// })

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// // 3.2
// const express = require('express')
// const app = express()

// let persons = [
//   { 
//     "id": 1,
//     "name": "Arto Hellas", 
//     "number": "040-123456"
//   },
//   { 
//     "id": 2,
//     "name": "Ada Lovelace", 
//     "number": "39-44-5323523"
//   },
//   { 
//     "id": 3,
//     "name": "Dan Abramov", 
//     "number": "12-43-234345"
//   },
//   { 
//     "id": 4,
//     "name": "Mary Poppendieck", 
//     "number": "39-23-6423122"
//   }
// ]

// app.get('/', (request, response) => {
//   response.send('<h1>Phonebook Backend</h1>')
// })

// app.get('/api/persons', (request, response) => {
//   response.json(persons)
// })

// app.get('/api/info', (request, response) => {
//   const currentDate = new Date(Date.now());
//   response.send(`<p>Phonebook has info for ${persons.length} people</p> <p> ${currentDate}</p>`)
// })

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// // 3.3
// const express = require('express')
// const app = express()

// let persons = [
//   { 
//     "id": 1,
//     "name": "Arto Hellas", 
//     "number": "040-123456"
//   },
//   { 
//     "id": 2,
//     "name": "Ada Lovelace", 
//     "number": "39-44-5323523"
//   },
//   { 
//     "id": 3,
//     "name": "Dan Abramov", 
//     "number": "12-43-234345"
//   },
//   { 
//     "id": 4,
//     "name": "Mary Poppendieck", 
//     "number": "39-23-6423122"
//   }
// ]

// app.get('/', (request, response) => {
//   response.send('<h1>Phonebook Backend</h1>')
// })

// app.get('/api/persons', (request, response) => {
//   response.json(persons)
// })

// app.get('/api/info', (request, response) => {
//   const currentDate = new Date(Date.now());
//   response.send(`<p>Phonebook has info for ${persons.length} people</p> <p> ${currentDate}</p>`)
// })

// app.get('/api/phonebook/:id', (request, response) => {
//   const id = request.params.id
//   const person = persons.find(persons => persons.id === id)
//   response.json(person)
// })

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

// 3.4
const express = require('express')
const app = express()

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Phonebook Backend</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/info', (request, response) => {
  const currentDate = new Date(Date.now());
  response.send(`<p>Phonebook has info for ${persons.length} people</p> <p> ${currentDate}</p>`)
})

app.get('/api/phonebook/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(persons => persons.id === id)
  response.json(person)
})

app.delete('/api/phonebook/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})