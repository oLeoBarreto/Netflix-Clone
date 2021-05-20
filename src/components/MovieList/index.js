import React, {useState}from 'react';
import './movieList.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default({title, items}) => {
    const[scrollX, setScrollX] = useState(0);

    const handleLeft = () =>{  //Evento para navegar entre os titulos da lista
        let x =  scrollX + Math.round(window.innerWidth / 2); //Para ir para esquerda, onde feito o scroll da metade da tela do usario
        if(x > 0){ //caso a medida de X for 0 chegou ao final
            x = 0;
        }
        setScrollX(x);
    }

    const handleRight = () => {
        let x =  scrollX - Math.round(window.innerWidth / 2);
        let listW =  items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className="movieList">
            <h2>{title}</h2>
            <div className="NavIcon-left" onClick={handleLeft}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="NavIcon-right" onClick={handleRight}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="listArea">
                <div className="listRow" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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