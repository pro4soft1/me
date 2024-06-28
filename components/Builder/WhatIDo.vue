<script>
import CanDoList from "~/components/Builder/card/CanDoList.vue";

export default {
  name: "WhatIDo",
  components: {CanDoList},
  props: {
    data: Object
  },
  computed: {
    arrayPart1() {
      if (this.data?.whatIDo?.length) {
        return this.data?.whatIDo?.slice(0, this.data?.whatIDo?.length / 2);
      }
    },
    arrayPart2() {
      if (this.data?.whatIDo?.length) {
        return this.data?.whatIDo?.slice(this.data?.whatIDo?.length / 2, this.data?.whatIDo?.length);
      }
    }
  }
}


</script>

<template>
  <!-- Services -->
  <div class="row">
    <div class="col-xs-12 col-sm-12">
      <div class="p-50"></div>

      <div class="block-title">
        <h2>{{ $t('what_i_do') }}</h2>
      </div>
    </div>
  </div>

  <div class="row">
    <can-do-list :items-list="arrayPart1"></can-do-list>
    <can-do-list :items-list="arrayPart2"></can-do-list>
  </div>
  <!-- /Services -->
</template>

<style scoped>

</style>
