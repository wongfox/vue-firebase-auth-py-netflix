<template>
    <div>
        <div class="">
            <!--<h3 class="mt-5">Sesión Iniciada por:</h3>
            <p>{{ usuario.email }}</p>-->

            <div class="pelicula-principal">
                <div class="contenedor">
                    <h3 class="titulo">Interestellar</h3>
                    <p class="descripcion">
                        Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.
                    </p>
                    <button role="button" class="boton"><i class="fas fa-play"></i>Reproducir</button>
                    <button role="button" class="boton"><i class="fas fa-info-circle"></i>Más información</button>
                </div>
            </div>
            <div class="peliculas-recomendadas contenedor">
                <div class="contenedor-titulo-controles">
                    <h3>Películas de Terror</h3>
                </div>
            </div>
            <section class="contenedor">
                <div class="row">
                    <div>
                        <img v-for="(movie, index) of movies" :key="index" 
                            :src="movie.Poster" 
                            class="col-25"/>
                    </div>
                    <footer>
                        <div ref="infinitescrolltrigger"></div>
                        <div class="circle-loader m-auto" v-if="showloader"></div>
                    </footer>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'Inicio',
    data() {
        return {
            movies: [],
            currentPage: 0,
            maxPerPage: 10,
            totalResults: 100,
            showloader: false
        }
    },
    computed:{
        ...mapState(['usuario']),
        pageCount() {
            return Math.ceil(this.totalResults/this.maxPerPage);
        }
    },
    methods: {
        async getMovie() {
            await axios.get(`http://www.omdbapi.com/?s=terror&page=${this.currentPage}&apikey=d9fe1bcf`)
            .then((respuesta) => {
                console.log(respuesta.data.Search);
                let aMovie = respuesta.data.Search;
                this.movies = this.movies.concat(aMovie);
                this.showloader = false;
            });
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
                        this.showloader = true;
                        this.currentPage += 1;
                        this.getMovie();
                    }
                });
            });

            observer.observe(this.$refs.infinitescrolltrigger);
        }
    },
    created() {
        //this.getMovie()
    },
    mounted() {
        this.scrollTrigger();
    }
}
</script>

<style>
/* ---- ----- ----- Pelicula Principal ----- ----- ----- */
.contenedor {
	width: 90%;
	margin: auto;
}
.pelicula-principal {
	font-size: 16px;
	min-height: 40.62em;
	color: #fff;
	background: linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url(../assets/backdrop.jpg);
	background-position: center center;
	background-size: cover;
	margin-bottom: 3.12em;
	display: flex;
	align-items: end;
    margin-top: 83px;
    text-align: left;
}
.pelicula-principal .contenedor {
	margin: 0 auto;
	margin-bottom: 6.25em;
}
.pelicula-principal .titulo {
	font-weight: 600;
	font-size: 3.12em;
	margin-bottom: 0.4em;
}
.pelicula-principal .descripcion {
	font-weight: normal;
	font-size: 1em;
	line-height: 1.75em;
	max-width: 50%;
	margin-bottom: 1.25em;
}
.pelicula-principal .boton {
	background: rgba(0,0,0, 0.5);
	border: none;
	border-radius: 0.31em;
	padding: 0.93em 1.87em;
	color: #fff;
	margin-right: 1.25em;
	cursor: pointer;
	transition: .3s ease all;
	font-size: 1.12em;
}
.pelicula-principal .boton:hover {
	background: #fff;
	color: #000;
}
.pelicula-principal .boton i {
	margin-right: 1.25em;
}
/* ---- ----- ----- Contenedor Titulo y Controles ----- ----- ----- */
.contenedor-titulo-controles {
	display: flex;
	justify-content: space-between;
	align-items: end;
}
.contenedor-titulo-controles h3 {
	color: #fff;
	font-size: 30px;
}
.col-25 {
    width: 19%;
    display: inline-block;
    vertical-align: top;
    margin: 0 5px;
}
.col-25 img {
    width: 100%;
}
footer {
    position: relative;
    width: 400px;
    height: 100px;
}
footer #scroll-trigger {
    height: 50px;
}
footer .circle-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, .2);
    border-top: 5px solid #FFF;
    animation: animate 1.5s infinite linear;
}
@keyframes animate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>