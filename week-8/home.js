const petsUlRef = document.querySelector("#pets"); 

const pets = ["cats", "dog", "snake", "fox", "mouse", "bird"];
const images = [
    "https://www.himisspuff.com/wp-content/uploads/2016/08/gorgeous-pumpkin-lined-fall-wedding-aisle.jpg",
    "https://i.pinimg.com/originals/d0/25/73/d02573d07246776c308f3adfa8c12b0c.jpg",
    "https://i.pinimg.com/originals/0a/f6/09/0af60982710ac98fdc03b869b6468c8a.jpg",
    "https://i.pinimg.com/originals/ef/42/60/ef42601794d414ca1930a3b73bc648bf.jpg"
];

console.table(pets);

for (let i = 0; i < pets.length; i++) {
    const li = document.createElement("li"); 
    li.textContent = pets[i]; 
    
    const img = document.createElement("img");
    img.src = images[i] || ""; // Use the corresponding image or leave empty if none exists
    img.alt = pets[i];

    li.appendChild(img); 
    petsUlRef.appendChild(li);
}
