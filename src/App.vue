<template>
  <div class="m-10 mt-10 p-5 relative z-10 bg-white rounded-xl shadow-xl ring-1 ring-gray-900/5 overflow-hidden my-auto xl:mt-18">
      <Header 
        @btn-click="toggleAddTask"
        title="Tony's Task Tracker"
        :showAddTask="showAddTask"
      />
      <div v-if="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
      <Tasks
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask" 
        :tasks="tasks" 
      />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async addTask(task) {
      const response = await fetch('api/tasks/', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await response.json();
      
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      if (confirm('Are you sure you want to delete this?')) {
        const response = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        
        if (response.status === 200) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } else {
          alert('Error Deleting Task');
        }
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const response = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updateTask),
      })

      const data = await response.json();

      this.task = this.tasks.map(task => {
        if (task.id === id) {
          task.reminder = data.reminder; 
        }
      });
    },
    async fetchTasks() {
      const response = await fetch('api/tasks')
      const data = await response.json();
      return data;
    },
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`)
      const data = await response.json();
      return data;
    }
  },
  async created() {
    this.tasks = await this.fetchTasks();
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }
</style>
