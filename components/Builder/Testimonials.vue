<script>
import {gql} from 'nuxt-graphql-request/utils';

export default {
  name: "Testimonials",
  data() {
    return {
      testimonials:[]
    }
  },
  created() {
    this.getTestimonials();
  },
  methods:{
   async getTestimonials(){
      const {$graphql} = useNuxtApp();
      const query = gql`query testimonials {
  testimonials {
    nodes {
      content
      title
      configuration {
        position
      }
    }
  }
}
`;
      const {data} = await useAsyncData('testimonials', async () => {
        const data = await $graphql.default.request(query);
        return data;
      });
      this.testimonials = data.value?.testimonials?.nodes ?? [];
    }
  }
}


</script>

<template>

  <div class="row" v-if="testimonials?.length">
    <div class="col-xs-12 col-sm-12">
      <div class="p-20"></div>

      <!-- Testimonials -->
      <div class="block-title">
        <h2>{{ $t('testimonials') }}</h2>
      </div>

      <Swiper id="testimonials_1" class="testimonials"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="2"
          :loop="true"

          :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
      >
        <SwiperSlide v-for="slide in testimonials">
          <!-- Testimonial 1 -->
          <div class="testimonial-item">
            <!-- Testimonial Content -->
            <div class="testimonial-content">
              <!-- Picture -->
              <div class="testimonial-picture">
                <img src="~/assets/img/testimonials/testimonial-1.jpg" alt="Billy Adams"/>
              </div>
              <!-- /Picture -->

              <!-- Testimonial Text -->
              <div class="testimonial-text" v-html="slide.content">

              </div>
              <!-- /Testimonial Text -->

              <!-- Testimonial author information -->
              <div class="testimonial-author-info">
                <h5 class="testimonial-author">{{slide.title}}</h5>
                <p class="testimonial-firm">{{ slide.configuration?.position }}</p>
              </div>
              <!-- /Testimonial author information -->

              <div class="testimonial-icon">
                <i class="fa fa-quote-left"></i>
              </div>

              <div class="testimonial-icon-big">
                <i class="fa fa-quote-right"></i>
              </div>
            </div>
            <!-- /Testimonial Content -->
          </div>
          <!-- End of Testimonial 1 -->
        </SwiperSlide>
      </Swiper>
      <!-- /Testimonials -->


    </div>
  </div>
</template>

<style scoped>

</style>
