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
         let listIng = "";
         
         for(var j = 1; j < 16; j++){
          let keyIng = "strIngredient" + j;
          let valueIngredient = data.drinks[i][keyIng];
          let keyQtd = "strMeasure" + j;
          let valueQtd = data.drinks[i][keyQtd];
          if (valueIngredient != null){
            if (valueQtd != null){
              listIng += valueQtd + " " + valueIngredient + "<br>";
            }
          } 
        }

        let drinkCard = `<div class="card_drink">
        <div class="card_drink_nameimg">
         <p class="card_drink_name">${data.drinks[i].strDrink}</p>
         <img src="${data.drinks[i].strDrinkThumb}" alt="" class="card_drink_image">
        </div>
        <div class="card_drink_inginst">
          <div class="card_drink_ing">
           <p >${listIng}</p>
          </div>
          <div class="card_drink_inst">
            <p>${data.drinks[i].strInstructions}</p>
          </div>
        </div>
      </div>`

      
      
        
        resContainer.insertAdjacentHTML('beforeend', drinkCard)
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
          let listIng = "";
          
          for(var j = 1; j < 16; j++){
           let keyIng = "strIngredient" + j;
           let valueIngredient = data.drinks[i][keyIng];
           let keyQtd = "strMeasure" + j;
           let valueQtd = data.drinks[i][keyQtd];
           if (valueIngredient != null){
             if (valueQtd != null){
               listIng += valueQtd + " " + valueIngredient + "<br>";
             }
           } 
         }
 
         let drinkCard = `<div class="card_drink">
         <div class="card_drink_nameimg">
          <p class="card_drink_name">${data.drinks[i].strDrink}</p>
          <img src="${data.drinks[i].strDrinkThumb}" alt="" class="card_drink_image">
         </div>
         <div class="card_drink_inginst">
           <div class="card_drink_ing">
            <p >${listIng}</p>
           </div>
           <div class="card_drink_inst">
             <p>${data.drinks[i].strInstructions}</p>
           </div>
         </div>
       </div>`
 
       
       
         
         resContainer.insertAdjacentHTML('beforeend', drinkCard)
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
        let listIng = "";
        
        for(var j = 1; j < 16; j++){
         let keyIng = "strIngredient" + j;
         let valueIngredient = data.drinks[i][keyIng];
         let keyQtd = "strMeasure" + j;
         let valueQtd = data.drinks[i][keyQtd];
         if (valueIngredient != null){
           if (valueQtd != null){
             listIng += valueQtd + " " + valueIngredient + "<br>";
           }
         } 
       }

       let drinkCard = `<div class="card_drink">
       <div class="card_drink_nameimg">
        <p class="card_drink_name">${data.drinks[i].strDrink}</p>
        <img src="${data.drinks[i].strDrinkThumb}" alt="" class="card_drink_image">
       </div>
       <div class="card_drink_inginst">
         <div class="card_drink_ing">
          <p >${listIng}</p>
         </div>
         <div class="card_drink_inst">
           <p>${data.drinks[i].strInstructions}</p>
         </div>
       </div>
     </div>`

     
     
       
       resContainer.insertAdjacentHTML('beforeend', drinkCard)
     }  
    })

}

byIng.addEventListener('click', (event) => {
  let input = document.querySelector('#iptSearch')
  lstIngredient(input.value)
})


