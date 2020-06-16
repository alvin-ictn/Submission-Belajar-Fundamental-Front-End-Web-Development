class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            display: flex;
            position: sticky;
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 20px;
            border-radius: 15px;
            top: 15px;
            background-color: white;
        }
       
        .search-container > input {
            width: 75%;
            padding: 20px;
            border: 0;
            border-bottom: 1px solid burlywood;
            font-weight: bold;
        }
       
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid burlywood;
        }
       
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
       
        .search-container >  input::placeholder {
            color: burlywood;
            font-weight: normal;
        }
       
        .search-container > button {
            width: 23%;
            margin-left: auto;
            padding: 16px;
            background-color: burlywood;
            color: white;
            font-size:1em;
            font-weight:bolder;
            border: 0;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 7px #ce954b;
            border-radius:6px;
        }
       
        .search-container > button:focus {
            outline:0px;
        }

        .search-container > button:active {
            position: relative;
            top:7px;
            box-shadow: none;
        }

        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
       
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
       
            .search-container > button {
                width: 100%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search Country Here" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("country-search", SearchBar);