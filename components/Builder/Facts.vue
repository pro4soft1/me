<script>
import {gql} from "nuxt-graphql-request/utils";

export default {
  name: 'Facts',
  data() {
    return {
      facts: []
    }
  },
  created() {
    this.loadfacts();
  },
  methods: {
    async loadfacts() {
      const {$graphql} = useNuxtApp();
      const query = gql`query getFacts {
                          facts {
                            nodes {
                              fatcConfig {
                                count
                              }
                              title
                            }
                          }
                        }
`;
    const {data}=  await useAsyncData('facts', async () => {
        const data = await $graphql.default.request(query);
        return data;
      });
      this.facts = data.value?.facts?.nodes ?? [];

    }
  }
}


</script>

<template>
  <!-- Fun Facts -->
  <div class="row">
    <div class="col-xs-12 col-sm-12">
      <div class="block-title">
        <h2>{{ $t('fun_facts') }}</h2>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-3" v-if="facts" v-for="fact in facts">
      <div class="lm-info-block gray-default">
        <i class="linecons linecons-heart"></i>
        <h4>{{ fact.title }}</h4>
        <span class="lm-info-block-value">{{ fact.fatcConfig.count ? fact.fatcConfig.count : 0 }}</span>
        <span class="lm-info-block-text"></span>
      </div>
    </div>
  </div>
  <!-- /Fun Facts -->

  <div class="p-40"></div>
</template>

<style scoped>

</style>
