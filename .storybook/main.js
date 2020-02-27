module.exports = {
  stories: ['../src/**/story.[tj]sx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    // '@storybook/preset-typescript',
    '',
  ],
};
