import Task from '../components/Task.vue';

export default {
  title: 'Task',
  component: Task,
}

const Template = (args) => ({
  components: { Task },
  setup() {
    return { args };
  },
  template: '<Task v-bind="args" />'
})

export const TaskItem = Template.bind({});

TaskItem.args = {
  task: {
    id: "1",
    text: "Doctors Appointment",
    day: "March 5th at 2:30pm",
    reminder: true
  },
}
