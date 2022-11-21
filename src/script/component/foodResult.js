import './foodList.js';

class foodResult extends HTMLElement {

  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() { 
    this.innerHTML = '';
    let limit = 0;
    this._foods.forEach( food => {
        if(limit < 9){
            const foodElement = document.createElement('food-list');
            foodElement.food = food;
            this.appendChild(foodElement);
            limit++;
        }
    });
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('food-result', foodResult);
