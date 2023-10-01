<script setup lang="ts">

const color = ref('black')
// runtime declaration
// const props = defineProps({
//   name: {
//     type: String,
//     required: false
//   }
// })

// const props = defineProps<{
//   name: string,
//   gender?: string,
//   num: number
//   isAdmin: boolean
// }>()

// get default values in props
interface Props {
  msg?: string,
  labels?: string[]
}
// const props = withDefaults(defineProps<Props>(),
// {
//   msg: 'hellonepal',
//   labels: () => ['one', 'two']
// })

// complex props types
interface Book {
  title: string,
  author: string,
  year: number
}
const props = defineProps<{
  copy: Book
}>()

// emit
const emit = defineEmits<{
  myEvent: (data: string) => true
}>()
// async fetch() {
//     const response = await this.$axios.get('/posts')
//     console.log(response.data)
//   }
</script>

<template>
  <div>
    hota: {{ props.copy }}
    <br />
    <!-- gender: {{ props.labels }} -->
    <br />
    <!-- admin: {{ props.isAdmin }} -->
  </div>
</template>
