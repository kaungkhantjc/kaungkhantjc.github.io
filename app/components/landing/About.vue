<script setup lang="ts">
import type {IndexCollectionItem} from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section class="flex flex-col">
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
      <h2 class="text-pretty tracking-tight text-highlighted text-left text-lg sm:text-lg lg:text-xl font-medium">
        {{ page.about.title }}
      </h2>
    </Motion>
    <Motion
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :animate="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.6 }"
    >
      <div class="text-balance text-left mt-3 text-sm sm:text-md lg:text-sm text-muted">
        {{ page.about.description }}
      </div>
    </Motion>
  </section>
</template>