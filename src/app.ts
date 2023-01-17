 const url = "https://api.thecatapi.com/v1/images/search?limit=200"
 const cat = document.createElement("img") as HTMLImageElement;
 cat.className = ("catImg");

 const p = fetch(url)
 .then(response => {
    return response.json();
 }).then(catFinder => {
    showCat(catFinder);


 });


 function showCat(kitten: any){
    let btn = document.querySelector(".glow-on-hover") as HTMLButtonElement;
    btn.addEventListener("click", (event) => {
        
         let randomNr = Math.floor(Math.random() * kitten.length);
         
         const catsDiv = document.querySelector(".container") as HTMLElement;
         catsDiv.innerHTML = "";
         catsDiv.style.display = "block";
         cat.src = kitten[randomNr].url;
         catsDiv.append(cat);
    })

 } 


    












    
// const catsDiv = document.querySelector(".container") as HTMLElement;

// console.log("Loading Cats...");
// const url = "https://api.thecatapi.com/v1/images/search?limit=10"
// const prom = fetch(url)
//     .then(response => {
//         return response.json()
//     }).then(catsArray => {
//         console.log(catsArray);
//         logCat(catsArray)
//     })

// function logCat(cats: any) {
//     console.log("Cat loaded", cats[0]);
//     const cat = document.createElement("img");
//     cat.src = cats[0].url;
//     catsDiv.append(cat);
// }