import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Meetups from '@/components/Meetup/Meetups.vue'
import CreateMeetup from '@/components/Meetup/CreateMeetup.vue'
import Profile from '@/components/User/Profile.vue'
import SignIn from '@/components/User/SignIn.vue'
import SignUp from '@/components/User/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
  ]
})
