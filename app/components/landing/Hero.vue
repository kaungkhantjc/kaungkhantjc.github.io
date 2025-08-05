<script setup lang="ts">
import type {IndexCollectionItem} from '@nuxt/content'

const {footer} = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div class="mt-25">
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
      <UTooltip text="Kaung Khant Kyaw">
        <UAvatar
            class="size-30 shadow-sm border border-zinc-100 ring ring-offset-4 ring-gray-200 dark:border-zinc-700 dark:ring-zinc-700 dark:ring-offset-black"
            src="/avatar.jpg" alt="Kaung Khant Kyaw"/>
      </UTooltip>
    </Motion>
  </div>

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
          delay: 0.1
        }"
  >
    <div class="max-w-md mt-6">
      <h1 class="mt-6 text-center text-xl leading-tight md:text-2xl font-bold tracking-tight">
        {{ page.title }}
      </h1>
    </div>
  </Motion>

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
          delay: 0.3
        }"
  >
    <p class="mt-4 max-w-xl text-center text-md md:text-lg text-muted-foreground leading-relaxed">
      {{ page.description }}
    </p>

    <div class="flex justify-center mt-6 gap-4">
      <template v-if="footer?.links">

        <UTooltip v-for="(link, index) of footer?.links" :key="index" :text="link['aria-label']">
          <UButton
              v-bind="{ size: 'md', color: 'neutral', variant: 'outline', ...link }"
          />
        </UTooltip>

      </template>
    </div>

  </Motion>
</template>