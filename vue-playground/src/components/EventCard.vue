<template>
<router-link :to="{ name: 'event-show', params: { id: 1 } }">
  <div>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <span>{{ event.attendees.length }} attending</span>
  </div>
</router-link>
</template>

<script>
  export default {
    data() {
      return {
        event: {
          id: 1,
          title: 'Park Cleanup',
          date: 'Tuesday',
          time: '6:00',
          attendees: [
            { id: 'abc123', name: 'Adam' },
            { id: 'de456', name: 'Gregg' },
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>