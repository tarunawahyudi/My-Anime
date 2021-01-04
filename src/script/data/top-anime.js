class TopAnime {

    static showAnime() {
        
        return fetch(`https://api.jikan.moe/v3/top/anime`)
            .then(response => response.json())
            .then(responseJSON => {
                if(responseJSON.top) {
                    return Promise.resolve(responseJSON.top)
                } else {
                    return Promise.reject(`anime not found`)
                }
            })
    }
}

export default TopAnime;