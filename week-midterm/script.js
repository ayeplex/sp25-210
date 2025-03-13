document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "My First Fire", image: "midterm-images/product1.jpg" },
        { name: "Handy Hand", image: "midterm-images/product2.jpg" },
        { name: "NapSock", image: "midterm-images/product3.jpg" },
        { name: "Toilet Meadow", image: "midterm-images/product4.jpg" },
        { name: "Pudding Pouch", image: "midterm-images/product5.jpg" }
    ];

    const container = document.getElementById("product-container");

    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;
        container.appendChild(div);
    }
});
