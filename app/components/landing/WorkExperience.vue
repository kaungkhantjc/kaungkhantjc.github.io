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
        {{ page.experience.title }}
      </h2>
    </Motion>

    <div class="text-base sm:text-lg text-muted text-center text-balance mt-3">
      <div class="flex flex-col gap-2">

        <Motion
            v-for="(experience, index) in page.experience.items"
            :key="index"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.4 + 0.2 * index }"
            :in-view-options="{ once: true }"
            class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">{{ experience.date }}</p>

          <USeparator/>

          <UPopover arrow mode="hover" :content="{align: 'center', side: 'right', sideOffset: 8}">
            <template #content>
              <div class="p-2 inline-flex text-xs font-medium rounded-md ">
                {{ experience.company.name }}
              </div>
            </template>

            <ULink
                class="flex items-center gap-2"
                :to="experience.company.url ?? ''"
                target="_blank">
              <span class="text-sm">{{ experience.title }}</span>

              <div class="inline-flex items-center gap-1">

                <UIcon v-if="experience.company?.icon" :name="experience.company?.icon"/>

                <div v-if="experience.company?.logo">
                  <UAvatar class="size-4 object-contain" :src="experience.company?.logo"
                           :alt="experience.company.name"/>
                </div>
              </div>
            </ULink>
          </UPopover>

        </Motion>
      </div>
    </div>
  </section>
</template>