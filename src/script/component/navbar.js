class TopNav extends HTMLElement {
  constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: "open"});
  }

  connectedCallback(){
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
              display: block;
              width: 100%;
              background-color: burlywood;
              color: white;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              text-align:center;
          }
          h2 {
              padding: 16px;
          }
      </style>
      <h2>Covid APP</h2>`;
  }
}

class BottomNav extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            :host {
                display: flex;
                position:fixed;
                flex-direction:column;
                justify-content: space-around;
                text-align:center;
                bottom:0;
                height:50px;
                width: 100%;
                background-color: burlywood;
                color: white;
                box-shadow: 4px 0 px 0 rgba(0, 0, 0, 0.2);
            }
            h3 {
                padding: 16px;
                font-size:1em;
            }
        </style>
        <h3>Copyright © 2020 - Alvin Mantovani. All right reserved.</h3>`;
    }
  }

customElements.define("top-nav", TopNav);
customElements.define("bottom-nav", BottomNav);