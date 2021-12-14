export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#fff',
      },
      {
        name: 'fox dark',
        value: '#1b1b1b',
      },
      {
        name: 'fox light',
        value: '#3F3F3F'
      }
    ],
  },
}