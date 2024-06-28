<script>
export  default {
  name: "CanDoList",
  props: {
    itemsList: Object
  }
}
</script>

<template>
  <div class="col-xs-12 col-sm-6">
    <div class="info-list-w-icon">

      <div class="info-block-w-icon" v-for="item in itemsList" v-if="itemsList?.length">
        <div class="ci-icon">
          <i class="linecons linecons-pen"></i>
        </div>

        <div class="ci-text">
          <h4>{{item.title}}</h4>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
