import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {imageUrl: require('@/assets/logo.png'),id:'dansjfhi3u2iy2iwun',title:'Meetup in Newyork',date:'2017-07-17'},
            {imageUrl: require('@/assets/logo.svg'),id:'sjdanfjkdfsjfh2h37',title:'Meetup in Paris',date:'2017-07-17'} 
        ],
        user: {
            id: 'dajeoaweu123e',
            registeredMeetups: ['sjdanfjkdfsjfh2h37']
        }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters){
            return getters.loadedMeetups.slice(0,5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetupId
                })
            }
        }
    }
})