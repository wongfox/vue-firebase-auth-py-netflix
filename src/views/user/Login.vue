<template>
    <div>
        <div class="container-main">
            <img class="fondo" src="../../assets/netflix-fondo.jpg">
            <div class="container-background">
                <b-container>
                    <h3 class="text-center my-4">Ingreso de usuario</h3>
                    <b-row align-h="center">
                        <b-col cols="3">
                            <form @submit.prevent="ingresoUsuario(usuario)">
                                <input type="email" size="sm" placeholder="email" class="my-1" autocomplete="off"
                                    v-model.lazy="usuario.email">

                                <input type="password" size="sm" placeholder="password" class="my-1"
                                    v-model="usuario.pass">

                                <b-button type="submit" class="mt-3 btn-login" size="sm">Ingresar</b-button>
                            </form>
                            <br>
                            <span class="text-danger font-small" v-if="error">Usuario o contraseña no valida.</span>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: 'Login',
    data() {
        return {
            usuario: {
                email: '',
                pass: ''
            }
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario'])
    },
    computed: {
        ...mapState(['error'])
    }
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
    h3 {
        margin-top: 120px !important;
        color: #FFF;
        font-size: 1.5rem;
    }
    form {
        background: rgba(0,0,0,0.5);
        padding: 25px;
    }
    .btn-login {
        background-color: #e50914;
        border-color: #e50914;
        width: 100%;
    }
</style>