<script setup lang="ts">
const route = useRoute()

const {data: page} = await useAsyncData(route.path, () =>
    queryCollection('projects').path(route.path).first()
)

if (!page.value) throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description,
  ogImage: page.value?.image,
  twitterImage: page.value?.image,
  twitterCard: 'summary_large_image'
})

const projectLink = computed(() => `${window?.location}`)

</script>

<template>
  <main class="min-h-[calc(100vh))] mt-20 px-2">
    <div class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
        <div class="lg:col-span-10">

          <ULink
              to="/projects"
              class="text-sm flex items-center gap-1">
            <UIcon name="lucide:chevron-left"/>
            Projects
          </ULink>

          <div class="flex flex-col gap-3 mt-8">

            <div class="flex text-sm text-muted items-center justify-center gap-2">
              Released on {{ page.year }}.
            </div>

            <img
                :src="page.image"
                :alt="page.title"
                loading="lazy"
                class="self-center rounded-lg w-full md:max-w-md h-auto object-cover object-center"
            >

            <h1 class="text-3xl text-center font-medium max-w-3xl mx-auto mt-4">
              {{ page.title }}
            </h1>

            <p class="text-muted text-center max-w-2xl mx-auto">
              {{ page.description }}
            </p>
          </div>

          <div class="mt-8 pb-24 space-y-12 max-w-3xl mx-auto">
            <div class="prose">
              <ContentRenderer
                  v-if="page.body"
                  :value="page"
              />
            </div>

            <div class="flex items-center justify-end gap-2 text-sm text-muted">
              <UButton
                  size="md"
                  variant="outline"
                  color="neutral"
                  label="Copy link"
                  icon="lucide:link-2"
                  @click="copyToClipboard(projectLink, 'Project link copied to clipboard.')"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  </main>
</template>