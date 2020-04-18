<template>
<router-link :to="{ name: 'event-show', params: { id: event.id } }">
  <div>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
    <BaseIcon name="users" />
    <span>{{ event.attendees.length }} attending</span>
  </div>
</router-link>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue';

export default {
  components: {
    BaseIcon,
  },
  props: {
    event: Object,
  }
}
</script>

<style lang="scss" scoped>

</style>