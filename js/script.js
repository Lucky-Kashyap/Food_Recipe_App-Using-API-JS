


const recipe_food = (foodname) => {

    async function fetchdata() {
        try {
            let val1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`);
            let data = await val1.json();

            console.log(data);
            if (data.meals) {

                let show = document.querySelector(".image-box");

                show.classList.remove("hide");
                let image = data.meals[0].strMealThumb;
                let name = data.meals[0].strMeal;
                let para = data.meals[0].strCategory;
                let measure = data.meals[0].strMeasure1;

                let recipe_page = data.meals[0].strYoutube;

                document.querySelector(".image").setAttribute("src", image);

                document.querySelector(".heading").textContent = name;

                document.querySelector(".paragraph").textContent = para;
                document.querySelector(".measure"
                ).textContent = measure;
                document.querySelector(".recipe-page").style.display = "block";
                document.querySelector(".recipe-page").setAttribute("href", recipe_page);

                let image1 = data.meals[1].strMealThumb;
                let name1 = data.meals[1].strMeal;
                let para1 = data.meals[1].strCategory;
                let measure1 = data.meals[1].strMeasure1;

                let recipe_page1 = data.meals[1].strYoutube;

                document.querySelector(".image1").setAttribute("src", image1);
                document.querySelector(".heading1").textContent = name1;

                document.querySelector(".paragraph1").textContent = para1;
                document.querySelector(".measure1"
                ).textContent = measure1;
                document.querySelector(".recipe-page1").style.display = "block";
                document.querySelector(".recipe-page1").setAttribute("href", recipe_page1);

                let image2 = data.meals[2].strMealThumb;
                let name2 = data.meals[2].strMeal;
                let para2 = data.meals[2].strCategory;
                let measure2 = data.meals[2].strMeasure1;

                let recipe_page2 = data.meals[2].strYoutube;

                document.querySelector(".image3").setAttribute("src", image2);
                document.querySelector(".heading3").textContent = name2;

                document.querySelector(".paragraph3").textContent = para2;
                document.querySelector(".measure3"
                ).textContent = measure2;
                document.querySelector(".recipe-page3").style.display = "block";
                document.querySelector(".recipe-page3").setAttribute("href", recipe_page2);

                let image3 = data.meals[3].strMealThumb;
                let name3 = data.meals[3].strMeal;
                let para3 = data.meals[3].strCategory;
                let measure3 = data.meals[3].strMeasure1;

                let recipe_page3 = data.meals[3].strYoutube;

                document.querySelector(".image4").setAttribute("src", image3);
                document.querySelector(".heading4").textContent = name3;

                document.querySelector(".paragraph4").textContent = para3;
                document.querySelector(".measure4"
                ).textContent = measure3;
                document.querySelector(".recipe-page4").style.display = "block";
                document.querySelector(".recipe-page4").setAttribute("href", recipe_page3);


                document.querySelector(".invalid_output").innerHTML = "";  
            }
            else {
                
                document.querySelector(".invalid_output").innerHTML = "Sorry we don't find your food";

                let hide = document.querySelector(".image-box");

                hide.classList.add("hide");

                

                
            }

        }
        catch (e) {
            
        }
    }
    fetchdata();
};



let button = document.querySelector(".btn");

button.addEventListener('click', () => {
    console.log("Buton Clicked");

    let foodname = document.querySelector(".search-input").value;

    recipe_food(foodname);
})
