const randomFoodEl = document.getElementById("random-food");
const favMealEl = document.getElementById("fav-meal");
const cookingMethod = document.getElementById("cooking-method")




fetchMealByRandom();
addFavMeal();


async function fetchMealByRandom() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const randomMealData = await response.json();
    const randomMeal = randomMealData.meals[0]
    

    loadRandomMeal(randomMeal, random = true)

}

async function fetchMealById(id) {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
    const mealData = await response.json();
    
    const meal = mealData.meals[0]
    
    return meal
}






async function fetchMealByTerm(term) {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
    const responseData = await response.json();
    console.log(responseData)
    const meal = responseData.meals
    return meal
}


function loadRandomMeal(mealData, Random){
    const randomMeal = document.createElement('div');
    randomMeal.classList.add("random-food");
    randomMeal.innerHTML = 
    //  `${Random? `<h6>Random food</h6>` : ''}
    `<img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <div>
        <span>${mealData.strMeal}</span>
        <span class="pointer" id="heart"><i class="fa fa-heart"></i></span>
    </div>`
    randomFoodEl.appendChild(randomMeal);
   
    const likeBtn = randomMeal.querySelector('#heart');
    
    likeBtn.addEventListener("click", function() {
        if (likeBtn.classList.contains('like')) {
            removeMealFromLS(mealData.idMeal)
            likeBtn.classList.remove('like')
        } else {
            addMealToLS(mealData.idMeal)
            likeBtn.classList.add('like')
            
        }
        addFavMeal();
        
    })
        
   

}

async function addFavMeal() {
    favMealEl.innerHTML = ""
    const mealIds = getMealFromLS();
    
    for (let i=0; i<mealIds.length; i++) {
        mealId = mealIds[i];
        
        meal = await fetchMealById(mealId);
        
        loadFavMeal(meal)
        
        
    }
    
    
    
}


function loadFavMeal(mealData) {
    
    const favFood = document.createElement('li');
    favFood.classList.add('fav-meal')
    favFood.innerHTML = `<img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    <span>${mealData.strMeal}</span>
    <i class="far fa-times-circle cross" id="cross"></i>`

    favMealEl.appendChild(favFood)
    
    const btn = favFood.querySelector('#cross');
    
    btn.addEventListener("click", () => {
        console.log('clicked')
        removeMealFromLS(mealData.idMeal)
        
        console.log(mealData.idMeal)
        
        addFavMeal()
    })
    

}

function loadMealBySearch() {
    const searchBtn = document.getElementById("search-btn")
    const searchTerm = document.getElementById("search-term")
    
    
    searchBtn.addEventListener("click", async () => {
        randomFoodEl.innerHTML = " "

        const searchedWord = searchTerm.value
        
        const searchedMeals = await fetchMealByTerm(searchedWord);

        if (searchedMeals) {
            searchedMeals.forEach((searchedmeal) => {
                loadRandomMeal(searchedmeal)
            })
        }
        
    })
    
    
}
loadMealBySearch() 

function addMealToLS(mealId) {
    const mealIds = getMealFromLS();
    localStorage.setItem("meals", JSON.stringify([...mealIds, mealId]))

}

function removeMealFromLS(mealId) {
    const mealIds = getMealFromLS();
    localStorage.setItem("meals", JSON.stringify(mealIds.filter((id)=> id != mealId)))
    
}

function getMealFromLS() {
    const mealIds = JSON.parse(localStorage.getItem("meals"));
    
    return mealIds == null?[]: mealIds
}

//close food inso when pressed on the cross



function popupMealInfo() {
    favMealEl.addEventListener("click", () => {
        cookingMethod.classList.remove('hidden')
        loadMealInfo(meal)
    })

    
}

function loadMealInfo(mealData) {
    console.log(mealData)
    const cookingInfo = document.createElement('div');
    cookingInfo.classList.add('cooking-info');
    cookingInfo.innerHTML = `
        <h5>${mealData.strMeal}</h5>
        <span id="close-food-info"><i class="far fa-times-circle"></i></span>
      
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" class="cooking-info-img">
        ${ingredients.map(ingredient => {
            <ul>
           <li>ingredriant/ <small>measure 3gm</small></li>
           <li>ingedriant1/ <small>measure 3gm</small></li>
           <li>ingedriant1/ <small>measure 3gm</small></li>
           <li>ingedriant1/ <small>measure 3gm</small></li>
          
       </ul>
        })}
       
       <p>${mealData.strInstructions}</p>`
       
       
    cookingMethod.appendChild(cookingInfo);

    const closeFoodInfo = document.getElementById("close-food-info");
    
    closeFoodInfo.addEventListener("click", () => {
        cookingMethod.classList.add('hidden')
    })
    const ingredients = []
    for(let i=0; i<20; i++) {
        if(mealData['strIngredient'+i]) {
            ingredients.push(mealData['strIngredient'+i])
        } 
    }
    console.log(ingredients)
}
popupMealInfo()
