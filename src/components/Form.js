export default function Form() {
  return (
    <>
      <h1>Weather App</h1>
      <p>Add new Activity:</p>
      <form>
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
    </>
  );
}
