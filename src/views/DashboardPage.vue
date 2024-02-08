<template>
  <div>
    <DashboardEventCard />
    <DashboardFeedbackCard /> 
    <DashboardRequestCertCard /> 
  </div>
</template>

<script>
  import DashboardEventCard from "../components/DashboardEventCard.vue";
  import DashboardFeedbackCard from "../components/DashboardFeedbackCard.vue";
  import DashboardRequestCertCard from "../components/DashboardRequestCertCard.vue";
  export default {
    components: {
      DashboardEventCard, 
      DashboardFeedbackCard, 
      DashboardRequestCertCard,
    },
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>
