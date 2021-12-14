<template>
   <form @submit="onSubmit" class="mb-6">
    <div class="my-5">
      <label>Task</label>
      <input 
        class="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-3 ring-1 ring-gray-200 shadow-sm" 
        v-model="text" type="text" name="text" 
        placeholder="Add Task" 
      />
    </div>
    <div class="my-5">
      <label class="pb-10">Day & Time</label>
      <input
        class="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-3 ring-1 ring-gray-200 shadow-sm"
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="my-5 flex items-center justify-between">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <input 
      type="submit" 
      value="Save Task"
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full cursor-pointer" 
    />
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert('Please add a task!')
      }

      const newTask = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }

      this.$emit('add-task', newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
</script>

