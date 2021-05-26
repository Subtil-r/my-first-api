

//list all recipes with input name
fetch(' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    //loop to show all array elements
    for(var i = 0; i < data.drinks.length ; i++){
    console.log(data.drinks[i].strDrink);}
  })

  //list all recipes by input letter
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c')
.then(response => response.json())
.then((data) => {
  console.log(data);
  //loop to show all array elements
  for(var i = 0; i < data.drinks.length ; i++){
  console.log(data.drinks[i].strDrink);}
})

//list all recipes by input ingredient
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
.then(response => response.json())
.then((data) => {
  console.log(data);
  //loop to show all array elements
  for(var i = 0; i < data.drinks.length ; i++){
    console.log(data.drinks[i].strDrink);}
})

