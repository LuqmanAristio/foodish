class navigasiBar extends HTMLElement{
    
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1>Foodish</h1>
        <ul>
            <li><a href="" id="home">Home</a></li>
            <li><a href="" id="about">About</a></li>
            <li><a href="" id="category">Category</a></li>
            <li><a href="" id="search">Search</a></li>
        </ul>
        <button class="barResponsive">
            <i class="fa-solid fa-bars" id="hamburger"></i>
        </button>`;
    }
    
}

customElements.define('nav-bar', navigasiBar);