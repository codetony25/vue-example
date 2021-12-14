<template>
  <header class="flex justify-between items-center mb-4">
    <h1 class="font-semibold text-gray-900 text-3xl">{{title}}</h1>
    <Button 
      @btn-click="$emit('btn-click')" 
      :text="showAddTask ? 'Close' : 'Add Task'" 
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  emits: ['btn-click']
}
</script>
