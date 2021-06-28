<template>
     <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-layout justify-center>
        <v-card width="400" class="mx-auto mt-5 mb-4">
            <v-toolbar flat color="deep-purple" dark>
                <v-toolbar-title>
                    Вход
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form v-model="valid" ref="form" validation>
                    <v-text-field 
                        label="Почта" 
                        prepend-icon="mdi-account-circle"
                        v-model="email"
                        :rules='emailRules'
                    />
                    <v-text-field 
                        :type="showPassword ? 'text' : 'password'" 
                        label="Пароль"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        v-model="password"
                        counter
                        :rules='passwordRules'
                    />
                </v-form>
            </v-card-text>
            
            <v-card-actions class="mb-2">
                <v-btn 
                    @click="onSubmit"
                    :disabled='!valid'
                    block
                    color="primary"
                    elevation="2"
                    outlined
                    rounded
                >Войти</v-btn>
            </v-card-actions>
            <v-divider></v-divider>
            <v-alert class="mt-5"
                color='info'
                text
            >
                <v-row
                    align="center"
                    no-gutters
                >
                    <span>Нужен аккаунт?</span>
                    <v-spacer></v-spacer>
                    <v-col class="shrink">
                    <v-btn
                        color="info"
                        outlined
                        small 
                        :to="'/registration'"  
                    >
                        Зарегистрироваться
                    </v-btn>
                    </v-col>
                </v-row>
            </v-alert>

        </v-card>
    </v-layout>
    </v-parallax>
</template>

<script>
export default {
    data() {
        return {
            valid:false,
            showPassword: false,
            email:'',
            emailRules:[
                v => !!v || 'Необходимо заполнить E-mail',
                v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным',
            ],
            password:'',
            passwordRules:[
                v => !!v || 'Необходимо заполнить пароль',
                v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов',
            ],
        }
    },
    methods: {
        onSubmit(){
            if(this.$refs.form.validate()){
                const user = {
                    email:this.email,
                    password:this.password
                }
                this.$store.dispatch('loginUser', user)
                    .then(()=>{
                        console.log('Login!');
                        this.$router.push('/')
                    })
                    .catch(err => {
                        console.log('not Login!');
                        console.log(err.message);
                    })


                this.$refs.form.resetValidation()
                console.log(user);
            }
        }
    },
}
</script>