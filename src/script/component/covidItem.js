class CovidItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set covid(covid) {
        this._covidval = covid.num;
        this._covidkey = covid.key
        this.render();
    }
  
    render() {
       this.shadowDOM.innerHTML = `
           <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: flex;
                   flex-grow: 1;
                   margin: 0 3vw;
                   justify-content: center;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .covid-info {
                   padding: 18px;
                   text-align:center
               }
              
               .covid-info > h2, .covid-info > h3 {
                   font-weight: lighter;
               }
              
               hr {
                   height:5px
               }

               .confirmed {
                    background-color: #0984e3;
               }

               .deaths {
                    background-color: #d63031;
               }

               .recovered {
                    background-color: #00b894;
                }
           </style>
           <div class="covid-info">
               <h2>${this._covidkey}</h2>
               <hr class="${this._covidkey}">
               <h3>${this._covidval.value}</h3>
           </div>`;
   }
 }
  
 customElements.define("covid-item", CovidItem);