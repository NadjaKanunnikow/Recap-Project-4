export default function Form() {
  return (
    <div>
      <header className="App-header">Add new Activity:</header>
      <form className="App">
        <label aria-labelledby="name" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" name="name"></input>
        <label aria-labelledby="checkbox" htmlFor="checkbox">
          Good-weather activity:
        </label>
        <input name="checkbox" id="checkbox" type="checkbox"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
