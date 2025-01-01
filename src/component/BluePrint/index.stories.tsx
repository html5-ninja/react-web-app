import { Meta, StoryFn } from '@storybook/react';
import BluePrint from '.';

export default {
  title: 'Components/BluePrint',
  component: BluePrint,
  tags: ['autodocs'], // Enables auto-generated documentation for this component
  argTypes: {
    title: { control: 'text' }, // Add control for the title prop
    subtitle: { control: 'text' }, // Add control for the subtitle prop
  },
} as Meta;

// Template with args
const Template: StoryFn = (args) => (
  <BluePrint title={''} subtitle={''} {...args} />
);

// Default story with initial args
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  title: 'Hello Storybook', // Initial value for title
  subtitle: 'Tailwind is awesome!', // Initial value for subtitle
};
Default.parameters = {
  docs: {
    description: {
      story:
        'This component is a blue print for a React web app. It is a simple component folder and updated as needed.',
    },
  },
};
