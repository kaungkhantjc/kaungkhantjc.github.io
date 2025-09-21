<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="flex flex-col min-h-screen sm:border-x border-default max-w-4xl mx-auto">
      <AppHeader :links="navLinks" />

      <main class="flex-1">
        <slot />
      </main>

      <AppFooter />
    </UContainer>
  </div>
</template>
