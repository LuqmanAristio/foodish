class bestCategory extends HTMLElement{

    set categorie(categorie) {
        this._categorie = categorie;
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1>${this._categorie.name}</h1>
        <img src="${this._categorie.imageSrc}" alt="">
        <p>${this._categorie.description}</p>`;
    }
    
}

customElements.define('category-list', bestCategory);