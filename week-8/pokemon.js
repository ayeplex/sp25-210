function showAlert() {
  alert("annoying message");
}

const confirmBtnRef = document.querySelector("#confirmBtn");

function showConfirm() {
  console.log(confirm("You are Roboto, right?"));
}

confirmBtnRef.onclick = showConfirm;
document.querySelector("#alertBtn").onclick = showAlert;

function showPrompt() {
  const userInput = prompt("What's your favorite flavor of ice cream?", "vanilla");
  console.log(userInput);
}

document.querySelector("#promptBtn").onclick = showPrompt;

const starterPokemon = [
  {
    name: "Bulbasaur",
    img: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    name: "Charmander",
    img: "https://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    name: "Squirtle",
    img: "https://img.pokemondb.net/artwork/squirtle.jpg"
  }
];

function startJourney() {
  document.querySelector("#journeyRef").innerHTML = 
    "<p>YOU ARE SO EXCITED, TODAY YOU GET YOUR FIRST POKEMON! SITTING IN FRONT OF YOU ARE THREE POKEBALLS: BULBASAUR, CHARMANDER, SQUIRTLE. CHOOSE YOUR POKEMON!</p>";

  starterPokemon.forEach(pokemon => {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.innerHTML = `
      <h3>${pokemon.name}</h3>
      <img src="${pokemon.img}" alt="${pokemon.name}" style="width: 150px;">
    `;
    document.querySelector("#journeyRef").appendChild(pokemonDiv);
    console.log(pokemon.name); // Log each Pokémon's name here
  });
}

document.querySelector("#journeyBtn").onclick = startJourney;
