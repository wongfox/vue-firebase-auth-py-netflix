import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
var firebase = require("firebase/app");

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: '',
        error: '',
    },
    mutations: {
        setUsuario(state, nuevoUsuario) {
            state.usuario = nuevoUsuario
        },
        setError(state, error) {
            state.error = error
        }
    },
    actions: {
        crearUsuario({commit}, usuario) {
            firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.pass1)
                .then((res) => {
                    let usuarioNuevo = {
                        email: res.user.email,
                        uid: res.user.uid
                    }
                    commit('setUsuario', usuarioNuevo);

                    router.push('/'); //redirecionamos al usuario creado
                })
                .catch((err) => {
                    commit('setError', err.code)
                });
        },
        ingresoUsuario({commit}, usuario) {
            firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.pass)
                .then((res) => {
                    let usuarioIngreso = {
                        email: res.user.email,
                        uid: res.user.uid
                    }
                    commit('setUsuario', usuarioIngreso);
                    router.push({
                        name: 'Inicio'
                    });
                })
                .catch(function (err) {
                    commit('setError', err.message)
                });
        },
        detectarUsuario({commit}, usuario) {
            if (usuario == null) {
                commit('setUsuario', null);
            } else {
                let usuarioIngreso = {
                    email: usuario.email,
                    uid: usuario.uid
                }
                commit('setUsuario', usuarioIngreso);
            }
        },
        cerrarSesion({commit}) {
            firebase.auth().signOut();
            commit('setUsuario', null);
            router.push('/');
        }
    },
    modules: {},
    getters: {
        usuarioExiste(state) {
            //console.log(state.usuario);
            if (state.usuario === null || state.usuario === '' || state.usuario == undefined) {
                return false;
            }
            return true;
        }
    }
})