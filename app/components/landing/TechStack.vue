<script setup lang="ts">
import type {IndexCollectionItem} from '@nuxt/content'

defineProps<{
  techStack: IndexCollectionItem
}>()
</script>

<template>

  <Motion
      :initial="{ opacity: 0, transform: 'translateY(20px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.3 }"
      :in-view-options="{ once: true }">

    <div class="flex flex-col">
      <h2 class="text-pretty tracking-tight text-highlighted text-left text-lg sm:text-lg lg:text-xl font-medium">
        {{ techStack.title }}
      </h2>

      <div class="grid lg:grid-cols-12 gap-4 lg:gap-8">
        <div class="col-span-12 lg:col-span-6">
          <div class="flex flex-wrap mt-4 gap-2">
            <UButton v-for="(technology, index) of techStack.technologies" :key="index"
                     v-bind="{ size: 'sm', color: 'neutral', variant: 'soft', target: '_blank',
                           icon: technology.logo ? null : technology.icon,
                           avatar: technology.logo ? { src: technology.logo, class: 'rounded' } : null,
                           to: technology.url }">
              {{ technology.name }}
            </UButton>
          </div>
        </div>

        <ul class="col-span-12 lg:col-span-6 list-disc list-inside text-sm sm:text-md lg:text-sm text-muted">
          <li class="mb-1" v-for="(description, index) of techStack.descriptions" :key="index">{{ description }}
          </li>
        </ul>
      </div>

    </div>

  </Motion>

</template>