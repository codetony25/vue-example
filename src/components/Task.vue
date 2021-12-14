<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <font-awesome-icon class="text-red" @click="$emit('delete-task', task.id)" icon="times" />
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  }
}
</script>

<style scoped>
  .task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  .task.reminder {
    border-left: 5px solid green;
  }
  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>