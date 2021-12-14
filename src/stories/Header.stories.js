import Header from '../components/Header.vue';
import '../../.storybook/utils.css';

export default {
  title: 'Header',
  component: Header,
}

const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header v-bind="args" />'
})

export const HeaderClosed = Template.bind({});

HeaderClosed.args = {
  title: "Tony's Task Manager",
  showAddTask: false
}

export const HeaderOpen = Template.bind({});

HeaderOpen.args = {
  title: 'Reminder Application',
  showAddTask: true
}
