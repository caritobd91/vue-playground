<template>
  <div>
    <h1>
      Event List
    </h1>

    <event-card
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
import axios from 'axios'
import EventCard from '@/components/EventCard.vue'

export default {
  data() {
    return {
      events: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events')
      .then( response => {
        this.events = response.data
        console.log(response.data)
      })
      .catch(error => {
        console.log('There was an error:' + error.response)
      })
  },
  components: {
    EventCard,
  }
}
</script>
