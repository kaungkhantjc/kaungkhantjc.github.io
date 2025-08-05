<script setup lang="ts">
const {footer} = useAppConfig()
</script>

<template>
  <UFooter
      class="z-10 bg-default"
      :ui="{ left: 'text-xs' }">
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <template v-if="footer?.links">

        <UTooltip v-for="(link, index) of footer?.links" :key="index" :text="link['aria-label']">
          <UButton
              v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </UTooltip>

      </template>
    </template>
  </UFooter>
</template>
