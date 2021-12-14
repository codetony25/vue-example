import Button from '../components/Button.vue';

export default {
  title: 'Button',
  component: Button,
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />'
})

export const Default = Template.bind({});

Default.args = {
  text: 'Default'
}

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary',
  color: 'red'
}

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary',
  color: 'Green'
}
