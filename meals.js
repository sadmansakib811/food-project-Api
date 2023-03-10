const loadMeals = (searchText)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML ='';
    meals.forEach(meal=>{
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${meal.strMeal}</h3>
                      <h5>Recipe:</h5>
                      <p class="card-text">${meal.strInstructions}</p>
                    </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);
        
    })
    
}

const searchMeal = ()=>{
    const searchField = document.getElementById('search-field').value;
    loadMeals(searchField)
}
loadMeals('chicken');