<template><br><br><br>
    <div class="container">   
        <div class="card card-container">
            <h2 class="title">TECH HOUSING</h2>
            <h5 class="subtitle">Inicia sesión en tu cuenta.</h5>
            <img id="profile-img" class="profile-img-card" src="https://smartemployee.gbm.net/www/assets/img/user.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" v-model="email" class="form-control" placeholder="Correo electronico" required
                    autofocus>
                <input type="password" v-model="password" class="form-control" placeholder="Contraseña" required>

                <button class="btn btn-primary" @click.prevent="evaluar">Ingresar</button>

            </form><!-- /form -->
        </div><!-- /card-container -->
        
    </div><!-- /container -->
    <br><br>
</template>

<script>

import { ref } from '@vue/reactivity'
import { watchEffect } from "@vue/runtime-core";
export default {
    name: "App",

    data() {
        const email = ref('')
        const password = ref('')
        return {
            email: email.value,
            password: password.value,
           
        }
    },
    methods: {
        evaluar: function () {
            axios({
                method: 'post',
                url: 'http://api_airbnb.test/auth/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            }).then(response => llamar(response.data.access_token)).catch(function (error) {
               swal("¡Error!", "Ingresa los datos correctamente", "error");

              }
            )

            const llamar = (token) => {

                axios.get('http://api_airbnb.test/usuarios', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }

                }).then(response => {
                    if (localStorage.getItem(token)) {
                        token = JSON.parse(localStorage.getItem(token));
                    }
                    watchEffect(() => {
                        localStorage.setItem(token, JSON.stringify(token));
                    });
                    console.log(response.data),
                        //  variable = JSON.parse(localStorage.getItem(token));
                        this.$router.push('/inicio/' + token)
                })
            }

        }
    }
}

</script>


<style>
.card-container.card {
    max-width: 400px;
    padding: 60px 60px;
    margin-right: auto;
}

.card {
    background-color: #F7F7F7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.form-signin input[type=email],
.form-signin input[type=password],
.form-signin input[type=text],
.form-signin button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    z-index: 1;
    position: relative;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>