<script setup lang="ts">
const {data: page} = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description,
  ogImage: '/__og-image__/index.jpg',
  twitterImage: '/__og-image__/index.jpg',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <div class="flex flex-col items-center">

    <LandingHero :page="page"/>

    <div class="grid lg:grid-cols-2 gap-4 lg:gap-8 mt-6 max-w-3xl">
      <LandingAbout :page="page"/>
      <LandingWorkExperience :page="page"/>
    </div>

    <section class="flex flex-col isolate gap-8 mt-6 max-w-3xl">
      <template v-for="(techStack, index) of page.techStacks" :key="index">
        <LandingTechStack :tech-stack="techStack"/>
      </template>
    </section>

    <section class="flex flex-col isolate mt-10 w-full max-w-3xl">
      <Motion
          :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
          :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
          :transition="{
          duration: 0.6,
          delay: 0.05
        }"
      >
        <h2 class="mb-4 text-pretty tracking-tight text-highlighted text-left text-lg sm:text-lg lg:text-xl font-medium">
          Featured projects
        </h2>
      </Motion>

      <section class="flex flex-col isolate gap-8 max-w-3xl">
        <template v-for="(project, index) of page.featuredProjects" :key="index">
          <LandingFeaturedProject :project="project" :index="index"/>
        </template>
      </section>

    </section>

  </div>
</template>