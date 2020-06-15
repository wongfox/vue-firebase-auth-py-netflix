<template>
    <div>
        <h3 class="mt-5 mb-4"> Registro de usuario</h3>
        <div class="container">
            <div class="row">
                <div class="col-md-4 m-auto">
                    <form @submit.prevent="crearUsuario(usuario)">
                        <input 
                            type="email" 
                            class="form-control mb-1"
                            placeholder="Ingrese email"
                            v-model="usuario.email"
                        >
                        <input 
                            type="password"
                            class="form-control mb-1"
                            placeholder="Ingrese contraseña"
                            v-model="usuario.pass1"
                        >
                        <input 
                            type="password" 
                            class="form-control mb-3"
                            placeholder="Repita contraseña"
                            v-model="usuario.pass2"
                        >
                        <button type="submit" class="btn-register btn" :disabled="!desactivar">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'Register',
    data(){
        return {
            usuario: {
                email: '',
                pass1: '',
                pass2: ''
            }
        }
    },
    methods: {
        ...mapActions(['crearUsuario'])
    },
    computed: {
        ...mapState(['error']),
        desactivar() {
            return (this.usuario.pass1 === this.usuario.pass2) && (this.usuario.pass1 !== '');
        }
    }
}
</script>

<style scoped>
    h3 {
        margin-top: 120px !important;
        color: #FFF;
        font-size: 1.5rem;
    }
    form {
        background: rgba(0,0,0,0.5);
        padding: 25px;
    }
    .btn-register {
        background-color: #e50914;
        border-color: #e50914;
        width: 100%;
        color: #FFF;
    }
</style>