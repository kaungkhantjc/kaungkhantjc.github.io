<script setup lang="ts">
const {data: page} = await useAsyncData('about', () => {
  return queryCollection('about').first()
})

if (!page.value) {
  throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
}

const {global} = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
  ogImage: '/__og-image__/about.jpg',
  twitterImage: '/__og-image__/about.jpg',
  twitterCard: 'summary_large_image'
})

</script>

<template>
  <div class="flex flex-col">

    <div class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 sm:gap-y-24 pt-18 sm:pt-24 lg:pt-32 lg:grid-cols-2 lg:items-center lg:flex sm:flex-row items-center">
      <div>
        <h1 class="tracking-tight font-bold text-highlighted max-w-xl text-pretty text-xl sm:text-2xl lg:text-3xl !mx-0 text-left">
          {{ page.title }}
        </h1>

        <div class="text-md max-w-2xl sm:text-md text-muted text-pretty mt-6 !mx-0 text-left">
          {{ page.description }}
        </div>
      </div>

      <UAvatar
          class="sm:rotate-4 size-30 rounded-sm shadow-sm border border-zinc-100 ring ring-offset-4 ring-gray-200 dark:border-zinc-700 dark:ring-zinc-700 dark:ring-offset-black"
          src="/avatar.jpg" alt="Kaung Khant Kyaw"/>

    </div>

    <div class="my-6 mx-8 flex justify-center sm:justify-start">
      <UButton
          label="Email me"
          :to="`mailto:${global.email}`"
      />
    </div>


    <div class="prose w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <MDC
          :value="page.content"
          unwrap="p"
      />
    </div>

  </div>
</template>