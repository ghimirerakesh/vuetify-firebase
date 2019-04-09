<template>
    <div class="meetup">
        <v-container>
            <v-layout ro wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title>
                            <h5 class="purple--text">{{meetup.title}}</h5>
                        </v-card-title>
                        <v-img
                            :src="meetup.imageUrl"
                            aspect-ratio="3"
                        ></v-img>
                        <v-card-text>
                            <div class="info--text">{{meetup.date}}</div>
                            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est nesciunt minus, fugiat natus ratione quod vero quia? Eaque sunt at expedita dolorum. At dolorem sit voluptatibus aliquid veniam culpa doloribus!</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="primary">Register</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<style>
    .meetup{
        margin-top: 5%;
    }
</style>
<script>
    export default{
        props:['id'],
        computed: {
            meetup () {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>
