<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default max-w-4xl mx-auto">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
