<template>
  <div>
    <slot v-if="!doNotTrack"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        doNotTrack: (navigator.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1" || window.doNotTrack === "1")
      }
    }
  }
</script>
