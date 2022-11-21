class foodList extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="${this._food.strMealThumb}" class="imageFood">
            <h1>${this._food.strMeal}</h1>
            <p>${this._food.strArea}</p>
            <h3><a href="${this._food.strYoutube}" target="_blank">See Video</a></h3>
        `;
    }
    
}

customElements.define('food-list', foodList);