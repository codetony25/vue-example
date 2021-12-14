<template>
  <button 
    @click="onClick"
    :style="{backgroundColor: color}"
    :class="defaultClass"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      defaultClass: 'hover:bg-blue-400 bg-blue-500 group flex items-center rounded-md text-white text-sm font-medium pl-2 pr-2 py-2 shadow-sm'
    }
  },
  props: {
    /**
     * A comment can be added here and storybook will document it.
     */
    text: String,
    /**
     * What color the button should be. Default is blue.
     */
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click');
    }
  }
}
</script>
