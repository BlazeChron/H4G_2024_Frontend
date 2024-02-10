<template>
  <div>
    <ul>
      <li>
        <DashboardEventForm v-show="checkNPO()" />
      </li>
      <li>
        <EventList />
      </li>
    </ul>
  </div>
</template>

<script>
  import DashboardEventForm from "../components/DashboardEventForm.vue"
  import EventList from "../components/EventComponents/EventList.vue"
  import { isNPO } from "../scripts/BackendComms"
  export default {
    components: {
      DashboardEventForm,
      EventList,
    },
    data() {
      return {
      };
    },
    methods: {
      checkNPO() {
        return isNPO();
      },
      beforeMount() {
        console.log(isNPO());
        this.showing = isNPO() ? true : false;
      },
    },
  }
</script>

<style>
  ul {
    list-style: none;
  }
</style>
