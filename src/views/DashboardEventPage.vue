<template>
  <div>
    <DashboardEventForm v-show="checkNPO()" />
  </div>
</template>

<script>
  import DashboardEventForm from "../components/DashboardEventForm.vue"
  import { isNPO } from "../scripts/BackendComms"
  export default {
    components: {
      DashboardEventForm,
    },
    data() {
      return {
        startEventID: 1,
        endEventID:
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
