<template lang="pug">
  ul
    li
      router-link(:to="{ name: 'component1' }") Component 1
    li
      router-link(:to="{ name: 'component2' }") Component 2
</template>
<script>
  export default {
    updated() {

    }
  }
</script>

