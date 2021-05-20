const API_KEY = '9d882d8af9270abef6ca6ab3100ac6da';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`); //Faz o requerimento dos Filmes/Series 
    const json = await req.json(); //Resultado do requerimento e mandado para o JSON e retorna o valor
    return json;
}

export default{
    getHomelist: async() => { //Funcao Json para requerimento dos items de um genero
        return[
            {
                slug: 'originals',
                title: 'Netflix originals',
                items: await basicFetch(`/discover/tv?with_network=8&language=pt-BR&api_key=${API_KEY}`) //matriz das Series/Filmes originais Netflix 
            }, 
            {
                slug: 'recommend',
                title: 'Recommended for you',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) //matriz das Series/Filmes recomendadas
            },
            {
                slug: 'Tops',
                title: 'Top movies',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) //matriz dos Filmes mais bem avaliados  
            },
            {
                slug: 'action',
                title: 'Action movies and series',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) //matriz dos Filmes de acao

            },
            {
                slug: 'Horror',
                title: 'Horror movies and series',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) //matriz dos Filmes de terror
            },
            {
                slug: 'drama',
                title: 'Drama movies and series',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) //matriz dos Filmes de drama
            },
            {
                slug: 'comedy',
                title: 'Comedy movies and series',
                items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`) //matriz dos Filmes de comedy
            },
            {
                slug: 'Romance',
                title: 'Action movies and series',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) //matriz dos Filmes de romance
            },
            {
                slug: 'documentary',
                title: 'Top documentarys',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) //matriz dos documentarios
            },
            
        ];
    },
    getMovieInfo: async(movieId, type) => { //Funcao para pegar as informacoes de um determinado Titulo
        let info = {};

        if(movieId) {
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`); 
                break;
                default:
                    info = null;
                break; 
            }
        }
        return info;
    }
}