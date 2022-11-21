class banner extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1>Good Food is a Good Mood</h1>
        <p style='margin-left:0;'>Explore many kind of food and recipe around 
            the world here easily!</p>
        <div class="searchBanner">
            <button id="explore">Explore Now !</button>
        </div>`;
    }
    
}

customElements.define('header-banner', banner);