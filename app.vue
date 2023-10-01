<script setup lang="ts">
const color = ref('')
function getColor(val: string) {
  color.value = val
  console.log(val, 'val')
}
</script>
<template>
  <nuxt-layout>
  </nuxt-layout>
  <basic-ts name="Likhita" :num=44 is-admin :copy="{ title: 'title', author: 'salina don', year: 45 }" @change="getColor">
    {{ color }}</basic-ts>
</template>
