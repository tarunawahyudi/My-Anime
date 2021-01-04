class HeroBanner extends HTMLElement {
    constructor() {
        super();
        this.baseurl = "https://api.jikan.moe/v3";
        this.fragment = this.attachShadow({mode: "closed"});
        this.render();
    }

    render() {

            this.fragment.innerHTML = 
            `
                <style>
                    #header {
                        background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), url('../assets/img/aot.jpg');
                        background-position: top;
                        background-repeat: no-repeat;
                        background-size: cover;
                        height: auto;
                        padding: 150px 150px
                    }
                    h1 {
                        color: white;
                        font-family: Arial;
                    }

                    p {
                        color: white;
                    }

                    a#download {
                        display: block;
                        text-align: center;
                        width: 150px;
                        margin: 0px auto;
                        padding: 20px;
                        color: white;
                        text-transform: uppercase;
                        font-family: Arial;
                        border: 1px solid #fff;
                        text-decoration: none;
                        border-radius: 10px;
                    }

                    @media screen and (max-width: 992px) {
                        #header {
                            padding: 100px 100px
                        }
                      }

                    @media screen and (max-width: 600px) {
                        #header {
                            padding: 50px 50px
                        }
                      }

                    
                </style>

                <div id="header">
                    <h1>Shingeki no Kyojin: The Final Season.</h1>
                    <p>With Eren and company now at the shoreline and the threat of Marley
                    looming, what’s next for the Scouts and their quest to unravel the
                    mysteries of the Titans, humanity, and more?</p>
                </div>
            `;
        }
}

customElements.define("hero-banner", HeroBanner);