<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { twMerge } from 'tailwind-merge'

// Define a type for the component's UI configuration for better type-safety.
type UIConfig = {
  wrapper: string
  container: string
  left: string
  center: string
  right: string
}

// Default Tailwind CSS classes based on the rendered HTML from Nuxt UI Pro.
// The max-width `max-w-7xl` corresponds to the standard `--ui-container` variable.
const config: UIConfig = {
  wrapper: 'relative',
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
  left: 'flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1',
  center: 'mt-3 lg:mt-0 lg:order-2 flex items-center justify-center',
  right: 'lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3'
}

const props = defineProps({
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<Partial<UIConfig>>,
    default: () => ({})
  }
})

// This computed property merges the default classes with any overrides
// you provide via the `ui` and `class` props. It uses `twMerge` to
// intelligently combine Tailwind classes, just like Nuxt UI does.
const ui = computed<UIConfig>(() => ({
  wrapper: twMerge(config.wrapper, props.class),
  container: twMerge(config.container, props.ui.container),
  left: twMerge(config.left, props.ui.left),
  center: twMerge(config.center, props.ui.center),
  right: twMerge(config.right, props.ui.right),
}))
</script>

<template>
  <footer :class="ui.wrapper">
    <div :class="ui.container">
      <div
          v-if="$slots.right"
          :class="ui.right"
      >
        <slot name="right" />
      </div>

      <div
          v-if="$slots.center"
          :class="ui.center"
      >
        <slot name="center" />
      </div>

      <div
          v-if="$slots.left"
          :class="ui.left"
      >
        <slot name="left" />
      </div>
    </div>
  </footer>
</template>