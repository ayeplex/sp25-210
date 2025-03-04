const titleRef = document.getElementById("title");
console.log(titleRef);

const itemsRef = document.getElementsByClassName("item");
console.log(itemsRef);

const altTitleRef = document.querySelector("#title");
console.log(altTitleRef);

const itemsAltRef = document.querySelectorAll(".item");
console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body > ul");
console.log(ulRef.innerHTML);

titleRef.innerHTML = "DOM Manipulation >:)";
ulRef.innerHTML = "";

const melons = ["cantaloupe", "watermelon", "muskmelon", "Regular Melon", "Blind Melon", "Honeydew"];

for (let index = 0; index < melons.length; index++) {
    ulRef.innerHTML += `<li>${melons[index]}</li>`;
}

titleRef.style.backgroundColor = "red";
titleRef.style.color = "#00ff00";
titleRef.style.fontSize = "32px";
