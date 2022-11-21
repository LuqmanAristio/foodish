class dropdown extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="leftMenu">
            <i class="fa-solid fa-x" id="exit"></i>
            <ul>
                <li><a href="" id="home_">Home</a></li>
                <li><a href="" id="about_">About</a></li>
                <li><a href="" id=category_>Category</a></li>
                <li class="botMenu"><a href="" id=search_>Search</a></li>
            </ul>
        </div>
        <div class="rightMenu" id="exitSide"></div>`;
    }
    
}

customElements.define('dropdown-menu', dropdown);