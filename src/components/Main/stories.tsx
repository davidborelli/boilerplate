import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Example Basic',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
}

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Example Default',
  description: 'An example of how to set default props'
}
