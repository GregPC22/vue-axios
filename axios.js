


const obtenerPeliculasPopularidad = async() =>{
    let peliculas = '';
try { 
    const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9e71305dbbe670cb4f0f24ff3e095ae7&language=es-MX&`)
console.log(respuesta);

if(respuesta.status === 200){

    
    respuesta.data.results.forEach(pelicula => {peliculas +=  `
            <div class="pelicula">
             <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}</h3>
            </div>
        `;
    });

    document.getElementById('contenedor').innerHTML = peliculas;

    
} else {
    console.log('Hubo un error y no sabemos que paso');
}



} catch (error) {   
    console.log(error);
} 
}


const obtenerPeliculasTopRated = async() =>{
    let peliculas = '';
    try { 
        const respuesta = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=9e71305dbbe670cb4f0f24ff3e095ae7&language=es-MX&`)
    console.log(respuesta);
    
    if(respuesta.status === 200){
    
        
        respuesta.data.results.forEach(pelicula => {peliculas +=  `
                <div class="pelicula">
                 <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
            `;
        });
    
        document.getElementById('contenedor').innerHTML = peliculas;
    
        
    } else {
        console.log('Hubo un error y no sabemos que paso');
    }
    
    
    
    } catch (error) {   
        console.log(error);
    } 
    }

    const obtenerPeliculasProximamente = async() =>{
     let peliculas = '';  
        try { 
            const respuesta = await axios.get
            (`https://api.themoviedb.org/3/movie/upcoming?
            api_key=9e71305dbbe670cb4f0f24ff3e095ae7&
            language=es-MX&`)
        console.log(respuesta);
        
        if(respuesta.status === 200){
        
            
            respuesta.data.results.forEach(pelicula => {peliculas +=  `
                    <div class="pelicula">
                     <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                `;
            });
        
            document.getElementById('contenedor').innerHTML = peliculas;
        
            
        } else {
            console.log('Hubo un error y no sabemos que paso');
        }
        
        
        
        } catch (error) {   
            console.log(error);
        } 
        }



