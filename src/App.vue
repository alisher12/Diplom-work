<template>
  <v-app style="background-color:black; color:white">
  <v-app-bar 
    app dark
    color="#162130"   
    shrink-on-scroll
    prominent
    src="https://images.unsplash.com/photo-1600348748641-9d79d688b31d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    fade-img-on-scroll
    min-width="40px"
    min-height="60px"
  >
    <v-app-bar-nav-icon 
      @click="drawer = true"
       class="hidden-md-and-up"
    ></v-app-bar-nav-icon>
    <v-toolbar-title style="cursor:pointer" :to="'/'">PcBuilder</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down"
      v-for="link in links" :key="link.title"
    >
      <v-btn text class="mr-3"
      :to="link.url"
      >
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down"
      v-if="checkUser"
    >
      <v-btn text class="mr-2"
        :to="'/login'"
        @click="logout"
      >

        <v-icon left>mdi-exit-to-app</v-icon>
          Выход
      </v-btn>
      <v-divider></v-divider>
    </v-toolbar-items>
     
  </v-app-bar>

  <v-navigation-drawer 
    v-model="drawer"
    temporary
    fixed
  >
    <v-list>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item 
          v-for="link in links" :key="link.title"
          :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>

        </v-list-item> 
        <v-list-item
          v-if="checkUser"
          @click='logout'
          :to="'/login'"
        >
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>


  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
     
      <v-card-title class="teal">
        <strong class="subheading">Присоединяйтесь к нам в социальных сетях!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="white--text pt-0">
        <v-layout>
          
        </v-layout>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>PcBuilder</strong>© Alisher Asanbekov
      </v-card-text>
    </v-card>
  </v-footer>
  <template v-if="error">
    <v-snackbar
      :timeout="5000"
      @input="closeError"
      :value="true"
      color="error"
      elevation="24"
    >
    <v-icon left>
      mdi-error
    </v-icon>
    <span class="text-h6">
    {{error}}
    </span>
    <v-spacer></v-spacer>
    <v-btn 
        @click.native="closeError"
      >
        Закрыть
      </v-btn>    
    </v-snackbar>
  </template>

</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logoutUser')
    },
    closeError(){
      this.$store.dispatch('clearError')
    }
  },
  computed:{
    error(){
      return this.$store.getters.error
    },
    checkUser(){
      return this.$store.getters.checkUser
    },
    links(){
      if(this.checkUser){
        return [
          {title:'Главная',icon:'mdi-home',url:'/'},
          {title:'Конфигуратор',icon:'mdi-tools',url:'/builder'},
          {title:'Контакты',icon:'mdi-book',url:'/contacts'},
          {title:'Процесс сборки', icon:'mdi-information',url:'/tutorial'}
        ]
      }
      return [
        {title:'Главная',icon:'mdi-home',url:'/'},
        {title:'Конфигуратор',icon:'mdi-tools',url:'/builder'},
        {title:'Контакты',icon:'mdi-book',url:'/contacts'},
        {title:'Вход',icon: 'mdi-export',url:'/login'},
        {title:'Регистрация', icon:'mdi-lock',url:'/registration'},
        {title:'Процесс сборки', icon:'mdi-information',url:'/tutorial'}
      ]
    }
  }
}
</script>