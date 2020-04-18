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
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'

export default {
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
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
