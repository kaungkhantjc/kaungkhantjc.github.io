<script setup lang="ts">
import type {IndexCollectionItem} from '@nuxt/content'

// Accept the index prop
defineProps<{
  project: IndexCollectionItem
  index: number
}>()
</script>

<template>

  <Motion
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.3 }"
      :in-view-options="{ once: true }">
    <div class="flex rounded-lg">
      <div
          class="relative flex flex-col flex-1 gap-x-8 gap-y-4 lg:flex-row p-0 sm:p-0"
          :class="[index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']">

        <ULink :to="project.url">
          <img
              loading="lazy"
              :src="project.image"
              :alt="project.name"
              class="object-cover w-full h-35 lg:w-92 lg:h-68 object-top rounded-lg border-2 border-zinc-200 dark:border-zinc-700">

        </ULink>

        <div class="flex flex-col flex-1 items-start max-sm:order-last">
          <div class="inline-flex items-center mb-2.5"><span class="text-sm text-muted">{{ project.year }}</span>
          </div>
          <div class="flex-1">
            <ULink :to="project.url">
              <div class="text-base text-pretty font-semibold text-highlighted">{{ project.name }}</div>
            </ULink>
            <div class="text-[15px] text-pretty text-muted mt-1">
              {{ project.description }}
            </div>

            <div class="mt-2 flex flex-wrap gap-2">
              <UButton v-for="(tag, index) of project.tags" :key="index" target="_blank"
                       v-bind="{ size: 'xs', color: 'neutral', variant: 'outline', to: tag.url }">
                {{ tag.name }}
              </UButton>
            </div>

          </div>
          <div class="mt-2 flex flex-wrap">
            <UButton :to="project.url" variant="link" size="md" color="info">View details</UButton>
            <UButton v-for="(link, index) of (project.extraLinks ?? [])" :key="index" :to="link.url" variant="link"
                     size="md" color="info"
                     trailing-icon="lucide:external-link" target="_blank">
              {{ link.title }}
            </UButton>
          </div>
        </div>

      </div>
    </div>
  </Motion>

</template>