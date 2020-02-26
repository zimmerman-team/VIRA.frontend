// import { addDecorator } from '@storybook/react';
// import { StoryWrapper } from '../src/app/utils/StoryWrapper';

module.exports = {
  stories: ['../src/**/story.[tj]sx'],
  addons: [
    '@storybook/preset-create-react-app',
    // '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
  ],
  // decorators: [storyFn => <div>{storyFn()}</div>],
};

// addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);
