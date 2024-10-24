function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userCommandElement = document.querySelector("#prompt");
  let apiKey = "b5f67t0d61o0400c417eac73b698a670";
  let apiPrompt = `Generate a quatrain poem about ${userCommandElement.value}`;
  let apiContext =
    "You are the best poet in the world who is an expert in writing quatrains. Write quatrains in basic HTML format and put a <br /> between each line and dont write any html or backticks";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  //let poemElement = document.querySelector("#poem");
  // poemElement.style.display = "block";

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a poem about ${userCommandElement.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
