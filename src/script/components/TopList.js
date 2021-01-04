import './TopItem.js';

class TopList extends HTMLElement {
    
    onConnectedCallback() {

    } 

    set animes(animes) {
        this._animes = animes;
        this.render();
    }

    render() {

        this.innerHTML = "";
        
        const heading = document.createElement("h1");
        const content = document.createElement("div");
        content.setAttribute("class", "grid grid-cols-2 md:grid-cols-6 gap-3");

        this.appendChild(heading);
        this.appendChild(content);

        heading.innerHTML = "<span style='color: #C70039'>Top</span> Anime";
        heading.setAttribute("class", "text-center text-3xl font-bold my-8")

        this._animes.slice(0, 12).forEach(anime => {
            const cardItem = document.createElement('top-item');
            cardItem.anime = anime
            content.appendChild(cardItem);
        })
    }

}

customElements.define('top-list', TopList);