class AppBar extends HTMLElement {
    constructor() {
        super();
        this.fragment = this.attachShadow({mode: "closed"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.fragment.innerHTML = 
            `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #111D5E;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }

            h1 {
                padding: 0.5em;
                font-family: 'Helvetica Neue';
            }

            span {
                color: #C70039;
            }

            </style>

            <h1><span>MY</span>ANIME</h1>
            
        `;
    }
}

customElements.define("app-bar", AppBar);