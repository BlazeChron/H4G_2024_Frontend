<template>
  <div>
    <span>{{event_name}}</span>
    <input type="checkbox" />
    <br>
    <span>{{description}}</span>
    <br>
    <time datetime="YYYY-MM-DD">{{reducedDate(start_time)}}</time> to 
    <time datetime="YYYY-MM-DD">{{reducedDate(end_time)}}</time> 
  </div>
</template>

<script>
  export default {
    props: {
      eid: {default: 0, type: Number},
      event_name: { default: "place", type: String},
      description: { default: "thing", type: String},
      start_time: { default: "time", type: String},
      end_time: { default: "time2", type: String},
    },
    data() {
      return {        
      };
    },
    methods: {
      reducedDate(date) {
        return date.split("T")[0];
      },
    }
  }
</script>
