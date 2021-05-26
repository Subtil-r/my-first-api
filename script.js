const resContainer = document.querySelector('.res_container')
const byList = document.querySelector('#btnList')
const byName = document.querySelector('#btnName')
const byIng = document.querySelector('#btnIngredient')

//list all recipes with input name
const lstName = (listName) => {
  resContainer.innerHTML = "" //cleans the previous result

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${listName}`)
    .then(response => response.json())
    .then((data) => {
      //loop to show all array elements
       for(var i = 0; i < data.drinks.length ; i++){
        let drinkName = `<h3>${data.drinks[i].strDrink}<\h3>`
        resContainer.insertAdjacentHTML('beforeend', drinkName)
      } 
    })

}

byName.addEventListener('click', (event) => {
  let input = document.querySelector('#iptSearch')
  lstName(input.value)
})



  //list all recipes by input letter
  const lstLetter = (listLetter) => {
    resContainer.innerHTML = "" //cleans the previous result
  
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${listLetter}`)
      .then(response => response.json())
      .then((data) => {
        //loop to show all array elements
         for(var i = 0; i < data.drinks.length ; i++){
          let drinkLetter = `<h3>${data.drinks[i].strDrink}<\h3>`
          resContainer.insertAdjacentHTML('beforeend', drinkLetter)
        } 
      })
  
  }
  
  byList.addEventListener('click', (event) => {
    let input = document.querySelector('#iptSearch')
    lstLetter(input.value)
  })


//list all recipes by input ingredient
const lstIngredient = (listIngredient) => {
  resContainer.innerHTML = "" //cleans the previous result

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${listIngredient}`)
    .then(response => response.json())
    .then((data) => {
      //loop to show all array elements
       for(var i = 0; i < data.drinks.length ; i++){
        let drinkIngredient = `<h3>${data.drinks[i].strDrink}<\h3>`
        resContainer.insertAdjacentHTML('beforeend', drinkIngredient)
      } 
    })

}

byIng.addEventListener('click', (event) => {
  let input = document.querySelector('#iptSearch')
  lstIngredient(input.value)
})




fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin`)
    .then(response => response.json())
    .then((data) => {
      //loop to show all array elements
       data.drinks.forEach(() => {
        let drinkIngredient = `<h3>${data.drinks[i].strDrink}<\h3>`
        console.log(drinkIngredient)
       )} 
    })