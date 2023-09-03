<template>
  <h1>{{ sayHi }}</h1>
</template>

<script lang="ts" setup>
defineProps<{ sayHi: string }>();
</script>
