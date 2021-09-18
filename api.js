// const loadSingleuser=()=> {
//     fetch ('https://randomuser.me/api/')
//     .then(res=>res.json())
//     .then(data => displaySingleUser(data.results))
    
// }

// loadSingleuser()
// const displaySingleUser=user=>{
//     console.log(user)
// }




//meal db
const toggleSpinner =displaystyle=>{
    document.getElementById('spinner').style.display=displaystyle;
}
const toggleSearchResult =displaystyle=>{
    document.getElementById('meals').style.display=displaystyle;
}

const searchMeal =()=>{
    const searchText = document.getElementById("search-field").value;
    loadMeals(searchText);
    document.getElementById("search-field").value='';

//display spinner
toggleSpinner('block');
toggleSearchResult('none')




}

const loadMeals =searchText=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>displayMeals(data.meals))

}

const displayMeals =  meals => {
    
    console.log(meals)
 const container = document.getElementById('meals');
container.textContet =''

 meals?.forEach(meal => {
     const div = document.createElement('div');
     div.innerHTML=`<h1>${meal.strMeal}<h1>
     <button onclick="loadmealDetail('${meal.strMeal}')">click me</button>`;
     container.appendChild(div);
 });
 toggleSpinner('none');
 toggleSearchResult('block')
}



const loadmealDetail = mealName=> {
    console.log(mealName)
}