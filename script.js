`use strict`;
fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jokeData) => {
    const jokeTxt = jokeData.attachments[0].text;
    const jokeElement = document.getElementById(`jokeElement`);

    jokeElement.innerHTML = jokeTxt;
  });
