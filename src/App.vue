<template>
  <v-app id="inspire">
    <v-toolbar
      class="purple accent-4"
      fixed
      dark
      app
      clipped-right
    >
      <v-toolbar-side-icon 
      @click.stop="drawer = !drawer"
      class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Toolbar</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn 
          flat 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.link"
          >
            <v-icon>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data (){
      return{
        drawer: false,
        menuItems: [
          {icon: 'supervisor_account', title: 'View Meetups',link: '/meetups'},
          {icon: 'room', title: 'Organize Meetup',link: '/meetup/new'},
          {icon: 'person', title: 'Profile',link:'/profile'},
          {icon: 'face', title: 'Sign Up',link:'/signup'},
          {icon: 'lock_open', title: 'Sign In',link:'/signin'}
        ]
      }  
    }
  }
</script>
