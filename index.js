
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

app.post('/api/notes', (request, response) => {


    const note = request.body
    console.log(note)
    response.json(persons)
})

app.post('/api/notess', (request, response) => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => Number(n.id))) 
    : 0

  const note = request.body
  note.id = String(maxId + 1)

  persons = persons.concat(note)

  response.json(note)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

