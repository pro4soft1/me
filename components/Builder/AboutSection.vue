<script>
export default {
  name: "AboutSection",
  props: {
    data: Object
  },
  computed: {
    backgroundImage() {
      return {
        backgroundImage: `url(${this.data?.profileImage?.node?.sourceUrl})`
      }
    },

    cvUrl() {
      return this.data?.cvUrl?.node?.mediaItemUrl;
    }
  }
}
</script>

<template>
  <div class="row">
    <div class=" col-xs-12 col-sm-12">
      <div class="home-content">
        <div class="row flex-v-align">

          <div class="col-sm-12 col-md-5 col-lg-5">
            <div class="home-photo">
              <div class="hp-inner" :style="backgroundImage">
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-7 col-lg-7">
            <div class="home-text hp-left">
              <div class="owl-carousel text-rotation">
                <div class="item">
                  <h4>{{ data?.position }}</h4>
                </div>

              </div>

              <h1>{{ data?.name }}</h1>
              <p>{{ data?.description }}</p>

              <div class="home-buttons">
                <nuxt-link :to="data?.cvUrl?.node?.mediaItemUrl" target="_blank" class="btn btn-primary">{{ $t('download_cv') }}</nuxt-link>
                <nuxt-link :to="localePath('/contact')"  class="btn btn-secondary">{{$t('contact')}}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


