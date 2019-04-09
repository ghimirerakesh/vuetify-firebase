<template>
  <div class="home">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn lage router to="/meetups" class="info" dark>Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
          <v-btn lage router to="/meetup/new" class="info" dark>Organize Meetups</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-carousel style="cursor:pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{meetup.title}}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-layout>
       <v-layout row wrap class="mt-2">
        <v-flex xs12 class="text-xs-center">
          <p>Join our awesome meetups!</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default{
    computed: {
      meetups (){
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup(id){
        this.$router.push('/meetups/'+id)
      }
    }
  }
</script>
<style scoped>
.home{
  margin-top: 5%;
}   
.title{
  position: absolute;
  bottom: 50px;
  background: white;
  padding: 30px;
  font-size: 0.9rem;
}
</style>
