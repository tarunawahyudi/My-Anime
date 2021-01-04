class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.fragment = this.attachShadow({mode: "closed"});
        this.render();
    }

    set eventHandler(e) {
        this._eventHandler = e
    }

    render() {
        this.fragment.innerHTML = 
        `

        <style>

            .search-container {
                max-width: 700px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 10px;
                display: flex;
                top: 10px;
                background-color: #C70039;
                margin: 0 auto;
                margin-bottom: 5vh;
                margin-top: 5vh;
            }
            
            .search-container > input {
                width: 100%;
                padding: 16px;
                border: 0;
                font-weight: bold;
                background: none;
                color: #fff;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #fff;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: #fff;
                font-weight: normal;
            }
            
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    padding: 5px;
                }
            
            }

            </style>

            <div id="search-container" class="search-container">
                <input placeholder="Search Anime" id="searchElement" type="search">
            </div>
        `;
    }
}

customElements.define('search-bar', SearchBar);