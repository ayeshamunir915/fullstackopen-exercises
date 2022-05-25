const Persons = ({persons}) => {
    return (
      persons.map(person => {
        return (
        <div key={person.name}>
          {person.name}
        </div>
        )
      })
    )
  }

  export default Persons