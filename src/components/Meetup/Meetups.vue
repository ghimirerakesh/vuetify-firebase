<template>
  <div class="meetups">
    <v-container>
      <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
        <v-flex xs12 sm10 md8 offset-sm1 offset-sm2>
          <v-card class="info">
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-img
                    :src="meetup.imageUrl"
                    aspect-ratio="2.75"
                  ></v-img>
                </v-flex>
                <v-flex xs7 sm8 md9>
                  <v-card-title primary-title>
                    <div>
                      <h5>{{meetup.title}}</h5>
                      <div>{{meetup.date}}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat :to="'/meetups/' + meetup.id">
                      <v-icon left>arrow_forward</v-icon>
                      View Meetups
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style>
.meetups{
  margin-top: 5%;
}
</style>
<script>
export default{
  computed: {
      meetups (){
        return this.$store.getters.loadedMeetups
      }
  }
}
</script>