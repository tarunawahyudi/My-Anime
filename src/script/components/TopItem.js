class TopItem extends HTMLElement {
    
    onConnectedCallback() {
        this.render();
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    get idAnime() {
        this._idAnime = this._anime.mal_id;
    }

    render() {

        this.innerHTML = `

        
            <div class="animelist">

                    <div id="anime-${this._anime.mal_id}" class="cursor-pointer transform transition duration-200 relative md:p-2 hover:scale-95">
                        <img src="${this._anime.image_url}" class="rounded poster shadow-lg"> 
                        
                        <div class="p-1 font-semibold absolute top-0 rounded shadow-md text-white poster bg-blue-900">${this._anime.type}
                        <span class="text-xs border-l border-white pl-1">Rank: ${this._anime.rank}</span></div>
                    
                        <div class="text p-3">
                            <p class="text-sm md:text-base">${this._anime.title}</p>
                        </div>

                    </div>
            </div>
        
        `;
    }
}

customElements.define('top-item', TopItem);