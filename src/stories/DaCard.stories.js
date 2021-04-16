import DaCard from '../packages/DaCard';

export default {
  title: 'DaCard',
  component: DaCard,
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    color: { control: 'color' },
    bgColor: { control: 'color' },
    avatarSrc: { control: 'text' },
    rotateX: { control: 'number' },
    rotateY: { control: 'number' },
    description: { control: 'text' },
    perspective: { control: 'text' },
    avatarBrdWidth: { control: 'text' },
    avatarBrdColor: { control: 'text' },
    avatarAlt: { control: 'text' },
    mediaSrc: { control: 'text' },
    mediaAlt: { control: 'text' },
    layout: {
      control: {
        type: 'select',
        options: ['figure']
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          '`DaCard` provides direction-aware feature on top of the general Card component design pattern. Assign `children` to `DaCard` to have customized content.'
      }
    }
  }
};

const Template = (props) => ({
  Component: DaCard,
  props
});

export const Avatar = Template.bind({});
Avatar.args = {
  width: '350px',
  perspective: '600px',
  title: 'Da-Card',
  avatarAlt: 'Da-Card',
  avatarSrc: 'https://brianypliu.com/assets/images/avatar.png',
  description:
    'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.'
};

export const Media = Template.bind({});
Media.args = {
  width: '350px',
  perspective: '600px',
  title: 'Da-Card',
  avatarAlt: 'Da-Card',
  mediaSrc:
    'https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU',
  avatarSrc: 'https://brianypliu.com/assets/images/avatar.png',
  description:
    'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.'
};

export const FigureLayout = Template.bind({});
FigureLayout.args = {
  rotateX: 10,
  rotateY: 10,
  color: '#fff',
  width: '600px',
  bgColor: '#fff',
  layout: 'figure',
  perspective: '600px',
  avatarBrdWidth: '1rem',
  avatarBrdColor: '#eee',
  title: 'Da-Card',
  mediaSrc:
    'https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU',
  description:
    'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.'
};

export const FigureLayoutAvatar = Template.bind({});
FigureLayoutAvatar.args = {
  rotateX: 10,
  rotateY: 10,
  color: '#fff',
  width: '600px',
  bgColor: '#fff',
  layout: 'figure',
  perspective: '600px',
  avatarBrdWidth: '1rem',
  avatarBrdColor: '#eee',
  title: 'Da-Card',
  avatarSrc: 'https://brianypliu.com/assets/images/avatar.png',
  mediaSrc:
    'https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU',
  description:
    'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.'
};
