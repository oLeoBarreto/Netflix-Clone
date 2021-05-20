import React, { useEffect, useState } from 'react';
import './App.css';
import movieDB from './movieDB';
import MovieList from'./components/MovieList';
import TrendingMovie from './components/TrendingMovie';
import Header from './components/Header';

export default() => {

  const [movieList, setMovieList] = useState([]);
  const [trendingData, setTrendingData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async() => {
      //Pegando a lista de filmes do categoria
      let list = await movieDB.getHomelist(); //Carrega e lista os filmes de cada categoria selecionada
      setMovieList(list);

      //Pegando os trending tops 
      let trending = list.filter(i=> i.slug === 'originals') //Filtro apenas os titulos originais 
      let random =  Math.floor(Math.random() * (trending[0].items.results.length - 1)); //Gera um numero aleatorio entre 0 e o total de Titulos
      let chosen = trending[0].items.results[random]; //Escolhe um items aleatorio
      let chosenInfo = await movieDB.getMovieInfo(chosen.id, 'tv');
      setTrendingData(chosenInfo);
      console.log(chosenInfo);
    }

    loadAll();
  },[]);

  useEffect(()=> {
    const scrollListner = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListner);

    return() =>{
      window.removeEventListener('scroll', scrollListner);
    }
  }, []);

  return(
    <div className="mainPage">
      <Header black={blackHeader}/>

      {trendingData && 
        <TrendingMovie item={trendingData}/>
      }

      <section className="list">
        {movieList.map((item, key) =>(
          <MovieList key={key} title={item.title} items={item.items}/>
        ))}    
      </section>
    </div>
  )
}