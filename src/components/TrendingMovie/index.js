import React from 'react';
import './trendingMovie.css';

export default({item}) =>{

    let year = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name );
    }

    let overview = item.overview;
    if (overview.length > 200){
        overview = overview.substring(0, 210)+'...';
    }

    return(
        <section className="Trending" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(http://image.tmdb.org./t/p/original${item.backdrop_path})`
        }}>
            <div className="vertical-fade">
                <div className="horizontal-fade">
                    <div className="title">{item.name}</div>
                    <div className="info">
                        <div className="score">{item.vote_average} Points</div>
                        <div className="date">{year.getFullYear()}</div>
                        <div className="seasons">{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="overview">{overview}</div>
                    <div className="buttom">
                        <a href={`/watch/${item.id}`} className="playBtn">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="addBtn">+ Minha lista</a>
                    </div>
                    <div className="genres"><strong>Generos:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>   
    );  
}