export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target[0].value;
    console.log("Name:", name);
    const isForGoodWeather = event.target[1].checked;
    console.log("A new Activity was submitted:", isForGoodWeather);

    const activityObject = { name: name, isForGoodWeather: isForGoodWeather };
    onAddActivity(activityObject);
  }
  // form.reset();
  //   input.focus();

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const name = event.target[0].value;
  //     console.log("Name:", name);
  //     const isForGoodWeather = event.target[1].checked;
  //     console.log("A new Activity was submitted:", isForGoodWeather);

  //     const activityObject = { name: name, isForGoodWeather: isForGoodWeather };

  // addActivity(activityObject);
  // }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        // onAddActivity={onAddActivity}
        className="App"
      >
        <h2 className="App-header">Add new Activity:</h2>
        <label aria-labelledby="name" htmlFor="name">
          Name:
        </label>
        <input type="text" id="name" name="name"></input>
        <label aria-labelledby="isForGoodWeather" htmlFor="checkbox">
          Good-weather activity:
        </label>
        <input name="checkbox" id="isForGoodWeather" type="checkbox"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
