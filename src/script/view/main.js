import '../component/navBar.js';
import '../component/dropdown.js';
import '../component/bestCategoryList.js';
import '../component/foodResult.js';
import bestCategory from '../component/categoryListed.js';
import DataSource from '../data/data-source.js';
import $ from "jquery";

const main = () =>{

    // BUTTON ONCLICK
    const homePage = document.getElementById("_home");
    const aboutPage = document.getElementById("_about");
    const categoryPage = document.getElementById("_category");
    const searchPage = document.getElementById("_search");
    const infoBasic = document.getElementById("basicInfo");

    const listCategories = document.querySelector('.categoryList');
    const searchForm = document.querySelector('#searchArea');
    const submitSearch = document.getElementById('submitSearch');
    const foodListElement = document.querySelector('food-result');

    // SCROLL FUNCTION
    window.onscroll = () => {
        if(window.scrollY > 100){
            $("nav-bar").addClass("onScroll");
        }
        else{
            $("nav-bar").removeClass("onScroll");
        }
    };

    // ON CLICK FUNCTION WITH JQUERY

    $('#explore').click(()=>{
        event.preventDefault();
        infoBasic.scrollIntoView();
    });

    $("#hamburger").click(()=>{
        $("dropdown-menu").addClass("active");
    });

    $("#exit").click(()=>{
        $("dropdown-menu").removeClass("active");
    });


    $("#exitSide").click(()=>{
        $("dropdown-menu").removeClass("active");
    });

    $('#home').click(()=>{
        event.preventDefault();
        homePage.scrollIntoView();
    });

    $('#about').click(()=>{
        event.preventDefault();
        aboutPage.scrollIntoView();
    });

    $('#category').click(()=>{
        event.preventDefault();
        categoryPage.scrollIntoView();
    });

    $('#search').click(()=>{
        event.preventDefault();
        searchPage.scrollIntoView();
    });

    $('#home_').click(()=>{
        event.preventDefault();
        $("dropdown-menu").removeClass("active");
        homePage.scrollIntoView();
    });

    $('#about_').click(()=>{
        event.preventDefault();
        $("dropdown-menu").removeClass("active");
        aboutPage.scrollIntoView();
    });

    $('#category_').click(()=>{
        event.preventDefault();
        $("dropdown-menu").removeClass("active");
        categoryPage.scrollIntoView();
    });

    $('#search_').click(()=>{
        event.preventDefault();
        $("dropdown-menu").removeClass("active");
        searchPage.scrollIntoView();
    });

    $('#letsTry').click(()=>{
        event.preventDefault();
        searchPage.scrollIntoView();
    });

    // LOAD DATA FUNCTION
    bestCategory.forEach( item =>{
        const newCategorie = document.createElement('category-list');
        newCategorie.categorie = item;

        listCategories.appendChild(newCategorie);
    })

    const onButtonSearchClicked = async () => {
        try {
          const result = await DataSource.searchFood(searchForm.value);
          renderResult(result);
        } catch (message) {
          fallbackResult(message);
        }
      };

    submitSearch.addEventListener("click", onButtonSearchClicked);

    const renderResult = results => {
        foodListElement.foods = results;
    };

    const fallbackResult = message => {
        foodListElement.renderError(message);
      };

}

export default main;
