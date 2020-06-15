<template>
    <div>
        <div class="container-main">
            <img class="fondo" src="../assets/netflix-fondo.jpg">
            <div class="container-background">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="our-story-card-text hero-card">
                                <h1 id="" class="title" data-uia="hero-title">
                                    Programas y películas sin límite y mucho más.
                                </h1>
                                <h2 id="" class="subtitle" data-uia="subtitle">
                                    Disfruta donde quieras. Cancela en cualquier momento.
                                </h2>
                                <div class="row">
                                    <div class="col-md-9 col-sm-12 m-auto">
                                        <form class="cta-form email-form" data-uia="email-form" method="GET">
                                            <div class="email-form-lockup">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder="Email" 
                                                        aria-label="Recipient's username" aria-describedby="button-addon2">
                                                    <div class="input-group-append">
                                                        <router-link class="btn btn-outline-secondary btn-red" type="button" :to="{name: 'Register'}"
                                                        id="button-addon2">PROBAR AHORA <img class="img-flecha" src="../assets/flecha.png" alt=""></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 class="email-form-title">
                                                ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                                            </h3>
                                        </form>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    img.fondo {
        width: 100%;
        height: 100%;
    }
    .container-main {
        height: 100vh;
    }
    .container-background {
        background: rgb(0,0,0);
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(37,28,28,0.4962359943977591) 100%, rgba(0,212,255,1) 100%);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: absolute;
    }
    .title {
        position: relative;
        width: 100%;
        padding: 75px 0;
        max-width: 950px;
        margin: 0 auto;
        text-align: center;
        z-index: 1;
    }
    .hero-card .title {
        font-size: 4rem;
        font-weight: 600;
        color: #FFF;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 14%;
        padding-bottom: 2px;
    }
    .hero-card .subtitle {
        font-size: 1.625rem;
        margin: 1rem auto;
        font-weight: 400;
        font-family: Arial, Helvetica, sans-serif;
        color: #FFF;
    }
    .hero-card h1, .hero-card h2 {
        max-width: 640px;
        margin: 0 auto;
    }
    input {
        min-width: 500px;
        height: 70px!important;
        border: none;
    }
    .btn-red {
        color: #fff;
        background-color: #e50914;
        -webkit-box-shadow: 0 1px 0 rgba(0,0,0,.45);
        -moz-box-shadow: 0 1px 0 rgba(0,0,0,.45);
        box-shadow: 0 1px 0 rgba(0,0,0,.45);
        border: none;
        font-size: 1.875rem;
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 14px;
    }
    .img-flecha {
        position: relative;
        top: -3px;
    }
    .email-form-title {
        max-width: none;
        padding: 0;
        font-size: 1.15rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: #FFF;
    }
</style>