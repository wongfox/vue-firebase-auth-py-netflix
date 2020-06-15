<template>
  <div id="app">
      <div class="container-fluid nav-main"> 
            <b-navbar toggleable="lg" type="dark" class="mt-2">
                <b-navbar-brand href="/" class="logo">
                    <img src="logo.png">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :to="{name: 'Login'}" v-if="!usuarioExiste" class="btn-login">Iniciar sesión</b-nav-item>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto" v-if="usuarioExiste">
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <em class="text-danger user">User</em>
                            </template>
                            <b-dropdown-item @click="cerrarSesion">Cerrar Sesion</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
      <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["cerrarSesion"])
  },
  computed: {
    ...mapGetters(["usuarioExiste"])
  }
};
</script>

<style>
:root {
	--rojo: #E50914;
	--fondo: #141414;
}
body {
  background: #141414 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--fondo);
	font-family: 'Open Sans', sans-serif;
}
.nav-link::after {
  color: #F00;
}
.nav-main {
  position: fixed;
  z-index: 10;
  top: 0;
  background: #000;
}
.btn-login .nav-link{
    background-color: #e50914;
    line-height: normal;
    padding: 7px 17px !important;
    font-weight: 400;
    font-size: 1rem;
    color: #FFF !important;
    border-radius: 3px;
}
</style>
