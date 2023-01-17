"use strict";
const url = "https://api.thecatapi.com/v1/images/search?limit=50";
const cat = document.createElement("img");
cat.className = ("catImg");
const p = fetch(url)
    .then(response => {
    return response.json();
}).then(catFinder => {
    showCat(catFinder);
});
function showCat(kitten) {
    let btn = document.querySelector(".glow-on-hover");
    btn.addEventListener("click", (event) => {
        let randomNr = Math.floor(Math.random() * kitten.length);
        const catsDiv = document.querySelector(".container");
        catsDiv.innerHTML = "";
        catsDiv.style.display = "block";
        cat.src = kitten[randomNr].url;
        catsDiv.append(cat);
    });
}
