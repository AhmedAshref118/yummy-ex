

$(function() {
    $('.loader').fadeOut(1000, function() {
        $('.loading').slideUp(1000, function() {
            $('body').css('overflow', 'auto'); 
        });
    });
});
// ------------------------------------


$("aside i").on('click', function() {
    $('.nav-tab').animate({width:'toggle'}  ,  1000 )
});

// -------------------







// -----------------------------------------
let allRecipes = [];

async function fetchApi() {
    
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`); 
        let data = await request.json();
        allRecipes = data.meals; 
        displayData();
    
}

function displayData() {
    let cartoona = ``;
    for (let i = 0; i < allRecipes.length; i++) {
        cartoona += `
         <div class="col-sm-12 col-lg-3 ">
            <div class="nav-img  rounded-3 " >
                <img src="${allRecipes[i].strMealThumb}" class="w-100" alt="">
                <div class="imag-layer">
                    <div class="text-center">
                        <h6 class="text-meal" >${allRecipes[i].strMeal}</h6>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    document.getElementById('rowData').innerHTML = cartoona; 
}

fetchApi();

// ------------------------------------

let navbarMenu = document.querySelectorAll('.navbar-menu'); 
for (let i = 0; i < navbarMenu.length; i++) {
    navbarMenu[i].addEventListener('click', function(e) {
        e.target.getAttribute('data-catogry');
    });
}

// ----------------

// async function getDetails(id){

// }let request = fetch()


//-----------------------



let allcategories = []; 

async function categorieApi() {
    
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let data = await request.json();
        allcategories = data.categories; 
        catagorieData();
    }


function catagorieData() {
    let cartoona = ``;
    for (let i = 0; i < allcategories.length; i++) {
        cartoona += `
            <div class="col-sm-12 col-lg-3">
            <div class="nav-img rounded-3">
                <img src="${allcategories[i].strCategoryThumb}" class="w-100" alt="">
                <div class="imag-layer">
                    <div class="text-center">
                        <h6 class="text-meal">${allcategories[i].strCategory}</h6>
                        <p>${allcategories[i].strCategoryDescription.substring(0,150) }</p>
                    </div>
                </div>
            </div>
        </div>`;
    }
    document.getElementById('categoriesdata').innerHTML = cartoona;
}

categorieApi();


// ---------------------------


let allarea = []; 

async function areaApi() {
    
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let data = await request.json();
        allarea = data.meals; 
        areaData();
}

function areaData() {
    let cartoona = ``;
    for (let i = 0; i < allarea.length; i++) {
        cartoona += `
                 <div class="col-sm-12 col-lg-3">
                <div class="nav-img rounded-3 ">
                        <div class="text-center text-light">
                            <i class=" icon fas fa-house-laptop w-75 h-75"></i> <!-- Correct FontAwesome class -->
                            <h6 class="text-meal">${allarea[i].strArea}</h6>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    document.getElementById('areadata').innerHTML = cartoona; 
}

areaApi();

// -------------------------------




let allIngredients = []; 



async function ingredientsApi() {
    
        let request = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let data = await request.json();
        allIngredients = data.meals; 
        ingreddientsData();
}

function ingreddientsData() {
    let cartoona = ``;
    for (let i = 0; i < allIngredients.length; i++) {
        cartoona += `
               <div class="col-sm-12 col-lg-3">
                        <div class="text-center text-light ">
                            <i class="fa-solid fa-drumstick-bite"></i>
                            <h6 class="text-meal">${allIngredients[i].strIngredient}</h6>
                                <p>${allIngredients[i].strDescription }</p>
                        

                        </div>
                    </div>`;
    }
    document.getElementById('ingredientsdata').innerHTML = cartoona; 
}

ingredientsApi();

// -- // -----------------------substring(0,150) مش راضيه تشتغل









