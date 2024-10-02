async function getPizza() {
const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
const data = await response.json();
console.log(data);

const pizza = data.recipes;

//console.log(pizza.source_url);

const result = pizza.map(function(pizzaitem){
return `<div class="pizzaitem">
    <h2>${pizzaitem.title}</h2>
    <img src=${pizzaitem.image_url} alt=${pizzaitem.title}>
</div>`;

}).join('');

document.querySelector(".container .row").innerHTML=result;

}

// "title": "Deep Dish Fruit Pizza",
//"image_url": "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",


getPizza();
