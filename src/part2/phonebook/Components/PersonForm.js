const PersonForm = ({newName, setNewName, newPhone, setNewPhone, handleNameChange, handlePhoneChange}) => {
  return (
      <form>
      <div>
        name: <input value={newName} setNewName={setNewName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newPhone} setNewPhone={setNewPhone} onChange={handlePhoneChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm