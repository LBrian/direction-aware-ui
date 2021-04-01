import DaButton from '../packages/DaButton';

export default {
  title: 'DaButton',
  component: DaButton,
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['lg', 'sm', 'xs']
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'transparent',
          'primary',
          'secondary',
          'accent',
          'ghost',
          'link',
          'info',
          'success',
          'warning',
          'error'
        ]
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          '`DaButton` provides direction-aware feature on top of the general button component design pattern.'
      }
    }
  }
};

const Template = (props) => ({
  Component: DaButton,
  props
});

export const Glass = Template.bind({});
Glass.args = {
  color: 'transparent'
};
