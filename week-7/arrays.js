const favoriteReptiles = ["Gecko", "Komodo Dragon", "Bearded Dragon"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);

console.log(favoriteReptiles[0]);
console.log(favoriteReptiles[9]);

console.log(favoriteReptiles.length);

for (let index = 0; index < favoriteReptiles.length; index++) {
    console.log(favoriteReptiles[index]);
}

for (let i = favoriteReptiles.length - 1; i > -1; i--) {
    console.log("index:", i);
}
