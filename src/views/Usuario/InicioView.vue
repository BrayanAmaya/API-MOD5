<template>
    <div v-if="$route.params.id = local">
       <NavbarUsuario />
        <InicioUsuario />
        <VueFooter />
    </div>

    <div v-else>
        <LoginView />
    </div>

</template>

<script>
import NavbarUsuario from '@/components/Usuario/NavbarUsuario.vue';
import VueFooter from '@/components/Usuario/VueFooter.vue';
import LoginView from '../LoginView.vue';
import InicioUsuario from '@/components/Usuario/InicioUsuario.vue';


export default {
    name: 'InicioUsuario',
    components: {
        NavbarUsuario,
        VueFooter,
        InicioUsuario,
        LoginView
    },
    data: () => ({
        local: ''
    }),
    created() {
        let claves = Object.keys(localStorage)

        claves.forEach(clave => {
            localStorage.getItem(clave)
            this.local = clave
        });
    },
}

</script>
