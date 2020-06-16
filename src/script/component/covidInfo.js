import './covidItem.js';

class CovidInfo extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set covidInfo(covidInfo) {
        this._covidInfo = covidInfo;
        this.render();
    }
  
    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                user-select: none;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
    
    render() {
        this.shadowDOM.innerHTML = "" ;
        for (let [key,num] of Object.entries(this._covidInfo)) {
            const covidItemElement = document.createElement("covid-item");
            num.value ? covidItemElement.covid = {num,key} : null
            this.shadowDOM.appendChild(covidItemElement);
        }
    }
 }
  
 customElements.define("covid-info", CovidInfo);