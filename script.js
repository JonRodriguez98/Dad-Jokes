const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()
jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
const config = {
  headers: {
    "Accept": "application/json"
  }
}
  //  fetch("https://icanhazdadjoke.com", config)
  //  .then((res) => res.json())
  //  .then((data) => {jokeEl.innerHTML = data.joke})


  /*more modern way instead of using .then you make the function asynchronous using the async key
  word in front of the function, then you do the .thens in steps and place them into variables like
  so. Variable res holds the initial fetched data, add the await so that the code doesn't move to
  line 22 without waiting for the response first. Then on line 23 it will assign the json data
  from that initial response to a new variable called data. Data can now be accessed like an object
  in Java. The object has an attribute joke which is what we want to display. So we call the
  joke attribute from data object "data.joke" and assign that value to the HTML inside the
  element of jokeEl which has an id of joke in our HTML file. */
  const res = await fetch("https://icanhazdadjoke.com", config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke

  }
