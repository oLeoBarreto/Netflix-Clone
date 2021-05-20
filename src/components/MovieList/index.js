import React from 'react';
import './movieList.css';

export default({title, items}) => {
    return(
        <div className="movieList">
            <h2>{title}</h2>
            <div className="listArea">
                <div className="listRow">
                    {items.results.length > 0 && items.results.map((item, key) =>(
                        <div key={key} className="itemRow">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}