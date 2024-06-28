<script setup lang="ts">
import {gql} from "nuxt-graphql-request/utils";
const {$graphql} = useNuxtApp();
const query = gql`query ourClients {
                  clients {
                    nodes {
                      title
                      featuredImage {
                        node {
                          mediaItemUrl
                        }
                      }
                    }
                  }
                }`;
const {data} = await useAsyncData('ourClients', async () => {
  const data = await $graphql.default.request(query);
  return data;
});
const clients = data.value?.clients?.nodes ?? [];
const getClientImage = (client: any) => {
  return client?.featuredImage?.node?.mediaItemUrl;
}
</script>
<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12">
      <div class="p-20"></div>
      <div class="p-40"></div>

      <!-- Clients Slider -->
      <div class="block-title">
        <h2>{{ $t('Clients') }}</h2>
      </div>
      <swiper id="clients_1"
              class="clients"
              slides-per-view="6"
              :modules="[SwiperAutoplay, SwiperEffectCreative]"
              :loop="true"
            :autoplay="true"
      >
        <swiper-slide v-for="client in clients">
          <div class="client-block">
            <a href="#" target="_blank" title="client.title">
              <nuxt-img :src="client?.featuredImage?.node?.mediaItemUrl"  :alt="client.title"/>
            </a>
          </div>
        </swiper-slide>
      </swiper>


      <div class="p-40"></div>

    </div>
  </div>
</template>

<style scoped>

</style>
