const PersonForm = ({onSubmit, handleNameChange, handleNumberChange, newName, newPhone}) => {
    return (
      <form onSubmit={onSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    );
  };
  
  export default PersonForm