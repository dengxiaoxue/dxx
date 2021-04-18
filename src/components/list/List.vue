<template>
  <div class="order-list" v-infinite-scroll="load" style="overflow:auto">
    <slot></slot>
  </div>
</template>
<script>
import ListItem from './ListItem.vue'
export default {
  components: { ListItem },
  name:"List",
  methods: {
      load () {
        
      }
    }
}
</script>
<style scoped>

</style>