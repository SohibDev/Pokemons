var pokemonArray = pokemons;

var elList = document.querySelector(".list");

for (let i = 0; i < pokemonArray.length; i++) {
  var newLi = document.createElement("li");
  newLi.classList.add("item");

  var newH2 = document.createElement("h2");
  newH2.textContent = pokemonArray[i].name;
  newLi.appendChild(newH2);

  var newImg = document.createElement("img");
  newImg.src = pokemonArray[i].img;
  newImg.width = "200";
  newLi.appendChild(newImg);

  var ability = document.createElement("p");
  ability.textContent = pokemonArray[i].type.join(" ");
  newLi.appendChild(ability);

  var weight = document.createElement("p");
  weight.textContent = pokemonArray[i].weight;
  newLi.appendChild(weight);

  var height = document.createElement("p");
  height.textContent = pokemonArray[i].height;
  newLi.appendChild(height);

  elList.appendChild(newLi);
}
