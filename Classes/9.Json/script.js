const petsData = [
    {
        name: "Duke",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<b>Fish</b>"],
        birthYear: 2017,
        photo: "https://i.ytimg.com/vi/f5cMwOUPPFI/hqdefault.jpg"
    },
    {
        name: "Zelda",
        species: "Dog",
        favFoods: ["Chicken", "Meat", "<b>biscuit</b>"],
        birthYear: 2015,
        photo: "https://68.media.tumblr.com/71d493696f915f0ce1cfd11e3e6bfea7/tumblr_ojs6hlEyGi1s4yg05o1_1280.jpg"
    },
    {
        name: "Meosalot",
        species: "Cat",
        favFoods: ["catnip", "celery", "<b>tuna</b>"],
        birthYear: 2008,
        photo: "https://cutetropolis.com/wp-content/uploads/DQUaQnqW4AAtUu0.jpg"
    }
];

let age = (p_Year) => {
    let age =  new Date().getFullYear() - p_Year;
    return (age === 1) ? `1 Year old`
    : (age === 0) ? `The Pet is a Baby`
    : `${age} years old`;
}

let foods = (p_food) => {
    return `
    <h4> Favorite Foods </h4>
    <ul class="foods-list">
    ${p_food.map((food) => `<li>${food}</li>`).join(``)}
    </ul>
    `
}

let petTemplate = (pet) => {
    return `
    <div class="animal"> 
        <img class="pet-photo" src="${pet.photo}">
        <div class="content">
            <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span> </h2>
            <p> <b> Age: </b> ${age(pet.birthYear)} </p>
            ${(pet.favFoods.length != 0) ? foods(pet.favFoods) : `The pet has no Favorite foods`}
        </div>
    </div>
`
}

document.querySelector(".app").innerHTML = `
<h1> We Have ${petsData.length} pets</h1>
${petsData.map(petTemplate).join(`<br>`)}
`