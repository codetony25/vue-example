import AddTask from '../components/AddTask.vue';

export default {
  title: 'Add Task',
  component: AddTask,
}

const Template = (args) => ({
  components: { AddTask },
  setup() {
    return { args };
  },
  template: '<AddTask v-bind="args" />'
})

export const AddTaskStory = Template.bind({});
