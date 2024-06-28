<script setup lang="ts">
// let slug = useRoute().params.name;
import AboutSection from "~/components/Builder/AboutSection.vue";
import WhatIDo from "~/components/Builder/WhatIDo.vue";
import {gql} from 'nuxt-graphql-request/utils';
import Testimonials from "~/components/Builder/Testimonials.vue";
import OurClients from "~/components/Builder/OurClients.vue";
import Facts from "~/components/Builder/Facts.vue";

const {$graphql} = useNuxtApp();
const props = defineProps({
  page_name: String
});
const query = gql`
  query getPage($name: String) {
  pages(where: {name: $name}) {
     nodes {
          id
          title
          pageBuilder {
            builder {
              fieldGroupName
              ... on PageBuilderBuilderAboutProfileLayout {
                description
                name
                position
                profileImage {
                  node {
                    sourceUrl(size: LARGE)
                  }
                }
                cvUrl {
                  node {
                    mediaItemUrl
                  }
                }
              }
              ... on PageBuilderBuilderWhatIDoLayout {
                whatIDo {
                  description
                  icon
                  title
                }
              }
              ... on PageBuilderBuilderFactsLayout {
                 limit
              }
              ... on PageBuilderBuilderClientsLayout {
                 limit
              }
              ... on PageBuilderBuilderTestimonialsLayout {
                 limit
              }
            }
          }
        }
  }
}
`;


const {data} = await useAsyncData('getPage', async () => {
  const data = await $graphql.default.request(query, {name: props.page_name});
  return data;
});
const Page = data?.value?.pages?.nodes[0]?.pageBuilder?.builder;
</script>

<template>
  <div v-if="Page?.length" v-for="section in Page">
    <AboutSection
        :key="section.fieldGroupName"
        :data="section"
        v-if="section.fieldGroupName ==='PageBuilderBuilderAboutProfileLayout'"/>

    <WhatIDo
        :key="section.fieldGroupName"
        v-if="section.fieldGroupName ==='PageBuilderBuilderWhatIDoLayout'"
        :data="section"/>

    <Testimonials
        :key="section.fieldGroupName"
        v-if="section.fieldGroupName ==='PageBuilderBuilderTestimonialsLayout'"/>

    <OurClients
        :key="section.fieldGroupName"
        v-if="section.fieldGroupName ==='PageBuilderBuilderClientsLayout'"
        :data="section"/>

    <Facts :key="section.fieldGroupName"
           v-if="section.fieldGroupName ==='PageBuilderBuilderFactsLayout'"
           :data="section"/>
  </div>


</template>

