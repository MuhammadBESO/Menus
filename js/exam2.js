
async function getCategoriesinfo() {

    var res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
   var finalres = await res.json();
   console.log(finalres.categories);


for (let i = 0; i < finalres.categories.length; i++) {


   document.querySelector(".categorie_page").innerHTML+=`
   
          <div class="col-md-3">
           <div onclick="getCategoriesid(${i}),showDivForOneSecond()"  class="position-relative meal_container overflow-hidden">
            <img class="img_main_page w-100 rounded-3 position-relative" src="${finalres.categories[i]. strCategoryThumb}" alt="" srcset="">
            <div class="meal_layer position-absolute  ps-2">
                <h3 class="categories_name"  >${finalres.categories[i].strCategory}</h3>
                <p >${finalres.categories[i].strCategoryDescription}</p>
            </div>
           </div>
    </div>
   `


}
}
getCategoriesinfo()
function getCategoriesid(index) {
    // console.log( document.querySelector(".categories_name")[index]);
    // console.log(index);
    var x =document.querySelectorAll(".categories_name")
    getCategoriesDetails(x[index].innerText);

   
  
 }
 async function getCategoriesDetails(index){
    var res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c="+index
    );
    var finalres = await res.json();
    console.log(finalres);
    document.querySelector(".categorie_page").classList.add("d-none")
    for (let i = 0; i < finalres.meals.length; i++) {
        document.querySelector(".categories_page_dishes").innerHTML += `
    
          <div class="col-md-3">
           <div onclick="getCategorieIdDishes(${i}),showDivForOneSecond()"  class="position-relative meal_container overflow-hidden">
            <img class="img_main_page w-100 rounded-3 position-relative" src="${finalres.meals[i].strMealThumb}" alt="" srcset="">
            <div class="meal_layer position-absolute d-flex align-items-center ps-2">
                <h3 class="w">${finalres.meals[i].strMeal}</h3>
            </div>
           </div>
    </div>
   `;
}
 }
 async function getCategorieIdDishes(index) {
    var x =document.querySelectorAll(".w")
    console.log(x[index].innerText);
    var res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="+x[index].innerText
    );
    var finalres = await res.json();
console.log(finalres.meals[0]);
    getCategorieDetailsDishes(finalres.meals[0].idMeal)
  }
  async function getCategorieDetailsDishes(i) {
    var res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+ i
    );
    let finalres = await res.json();
    console.log(finalres.meals[0]);
    const ingrediants = [];
    const measures = [];
    for (let i = 0; i < 20; i++) {
      const ingrediant = finalres.meals[0][`strIngredient${i}`];
      const measure = finalres.meals[0][`strMeasure${i}`];
      if (ingrediant && ingrediant.trim() !== "") {
        ingrediants.push(ingrediant);
      }
      if (measure && measure.trim() !== "") {
        measures.push(measure);
      }
    }
    console.log(measures[0] + ingrediants[0]);
  
    document.querySelector(".categories_container").classList.add("d-none");
    document.querySelector(".categorie_page").classList.add("d-none");
  
    document.querySelector(".meal_details_sec ").classList.remove("d-none");
    document.querySelector(".meal_detail").innerHTML = `
    <div class="row">
        <div class="col-md-4">
            <img class="w-100 rounded-3 " src="${finalres.meals[0].strMealThumb}" alt="" srcset="">
            <h2>${finalres.meals[0].strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${finalres.meals[0].strInstructions}</p>
                <h3 class="fw-bolder">Area : ${finalres.meals[0].strArea}</h3>
                <h3  class="fw-bolder">Category :${finalres.meals[0].strCategory} </h3>
                <h3 class="fw-bolder" >Recipes :</h3>
                <ul class="ul_list list-unstyled  d-flex flex-wrap ">
               
                    
                    
                </ul>
                <h3 class="fw-bolder" >Tags :</h3>
                <ul class="ps-0 tags d-flex flex-wrap">
             
             
                </ul>
                <a class="btn btn-success"target="_blank" href="${finalres.meals[0].strSource}">Source</a>
                <a class="btn btn-danger" target="_blank" href="${finalres.meals[0].strYoutube}">Youtube</a>
        </div>
       </div>
    `;
   
  let x= finalres.meals[0].strTags
  let m=Array.from(x)
  let arr2 = x.split(',')
  console.log(arr2);
  for (let i = 0; i < arr2.length ; i++) {
    const li = document.createElement("li"); 
    li.innerHTML = arr2[i];
    document.querySelector(".tags ").appendChild(li);
    li.classList.add("alert-danger")
    li.classList.add("m-2")
    li.classList.add("p-1")
    li.classList.add("rounded-3")
    li.classList.add("d-flex")
    li.classList.add("fs-6")
    li.classList.add("fw-normal")
  }
    for (let i = 0; i < measures.length && ingrediants.length; i++) {
        const li = document.createElement("li"); 
        li.innerHTML = measures[i] + ingrediants[i];
        document.querySelector(".ul_list").appendChild(li);
        li.classList.add("alert-info")
        li.classList.add("m-2")
        li.classList.add("p-1")
        li.classList.add("rounded-3")
        li.classList.add("d-flex")
      
       
       
      
        li.style.height="fit-content"
    
        li.style.width="fit-content"
    }
  }
 
 $(".meal_layer").on("click",function(){
//   var x=  $(".categories_name").text()
    console.log("x");
 })
















$(".open-close-icon").on("click", function () {
    const icon = $(".open-close-icon");
    const sideNav = $(".side-nav-menu");
    if (icon.hasClass("fa-bars")) {
        sideNav.animate({ left: "0px" }, 500);
        icon.removeClass("fa-bars").addClass("fa-x");
        $(" li").each(function (index) {
            $(this)
                .delay(index * 100)
                .animate({ top: "0px" }, 500);
        });
    } else if (icon.hasClass("fa-x")) {
        sideNav.animate({ left: "-256.562px" }, 500);
        icon.removeClass("fa-x").addClass("fa-bars");
        $(".li-links").animate({ top: "300px" }, 500);
    }
});
function showSearchInputs() {
    window.location.href = "search.html";
    searchByname()
    searchByCharacter()
}

function showCategories() {
    window.location.href = "categories.html";
    getCategoriesinfo()();
}
function getArea() {
    window.location.href = "area.html";
    areaData();
}
function getIngredients() {
    window.location.href = "ingredient.html";
    areaData();
}
function showContacts(){
    window.location.href = "contact.html";
    validateForm() 
}
function showDivForOneSecond() {
    const myDiv = document.getElementById('myDiv');
    myDiv.style.display = 'block'; // Show the div

    setTimeout(() => {
        myDiv.style.display = 'none'; // Hide the div after 1 second
    }, 700); // 1000 milliseconds = 1 second
}
window.onload = showDivForOneSecond()

