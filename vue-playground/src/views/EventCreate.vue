<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEvent(1) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">
        {{ cat }}
      </li>
    </ul>
  </div>
</template>

<script>
// mapState allows you to map the state into computed
import { mapState } from "vuex";

export default {
  // NOTE: using spread operator ...mapState({}) allows you to add local computed properties
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    getEvent() {
      return this.$store.getters.getEventById;
    },
    ...mapState(["user", "categories"])
  }

  // NOTE: cleaner way to use mapState, this way it needs to use dot notation in the markup, instead of computed function name
  // computed: mapState({
  //   user: "user",
  //   categories: "categories"
  // })

  // NOTE: Using mapState to access the store data
  // computed: mapState({
  //   userName: state => state.user.name,
  //   userID: state => state.user.id,
  //   categories: state => state.categories
  // })

  // NOTE: How to access name and id from the store using computed properties without mapState:
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name;
  //   },
  //   userId() {
  //     return this.$store.state.user.id;
  //   }
  // }
};
</script>

<style lang="scss" scoped>

</style>