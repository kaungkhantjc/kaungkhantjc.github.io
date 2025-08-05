<script setup lang="ts">
const colorMode = useColorMode()
const rotateCount = ref(0)

const nextTheme = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'))

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const startViewTransition = (event: MouseEvent) => {
  if (!document.startViewTransition) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(() => {
    switchTheme()
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: duration,
          easing: 'cubic-bezier(.76,.32,.29,.99)',
          pseudoElement: '::view-transition-new(root)'
        }
    )
  })
}

const handleClick = (event: MouseEvent) => {
  rotateCount.value += 1
  startViewTransition(event)
}
</script>

<template>
  <ClientOnly>
    <Motion
      :initial="{ rotate: 0 }"
      :animate="{ rotate: rotateCount * 360 }"
      :transition="{ duration: 0.5, type: 'tween' }"
    >
      <UButton
        :aria-label="`Switch to ${nextTheme} mode`"
        :icon="`lucide:${nextTheme === 'dark' ? 'sun': 'moon-star' }`"
        color="neutral"
        variant="ghost"
        size="lg"
        class="cursor-pointer rounded-full"
        @click="handleClick"
      />
    </Motion>
    <template #fallback>
      <div class="size-4" />
    </template>
  </ClientOnly>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}
::view-transition-old(root) {
  z-index: 1;
}
</style>
