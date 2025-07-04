
const express = require('express')
const app = express()

app.use(express.json())

persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/api/persons', (request, response) => {
    response.json(persons)
})
    
app.get('/api/info', (request, response) => {
    const number = persons.length
    const date = new Date()
    response.send(
   ` <h1>Phonebook has info for ${number} people</h1>
   <h3> ${date} </h3> `    )
}
)

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)    
    // console.log(persons)
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.post('/api/persons', (request, response) => {
    person = request.body

    
    person.id = getRandomInt(10000)
    persons = persons.concat(person)

    console.log(persons)

})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

