import '../components/HeroBanner.js';
import '../components/SearchBar.js';
import TopAnime from '../data/top-anime.js';
import '../components/TopList.js';

const main = ()=> {

    document.querySelector('hero-banner');
    document.querySelector('search-bar');
    
    const topList = document.querySelector('top-list');

    TopAnime.showAnime().then(result => topList.animes = result);

}

export default main;