import DaCard from '../components/DaCard.svelte';

export default {
  title: 'direction-aware-ui/DaCard',
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
    mediaAlt: { control: 'text' }
  }
};

const Template = (props) => ({
  Component: DaCard,
  props
});

export const Plain = Template.bind({});
Plain.args = {
  rotateX: 10,
  rotateY: 10,
  color: '#444',
  width: '350px',
  bgColor: '#fff',
  perspective: '600px',
  avatarBrdWidth: '1rem',
  avatarBrdColor: '#eee',
  mediaAlt: "Media image",
  title: 'Title goes here',
  avatarAlt: "DaCard avatar image",
  avatarSrc: 'https://via.placeholder.com/80',
  mediaSrc: "https://via.placeholder.com/350x180?text=Media+image",
  description: 'Supporting text include text like an article summary or a restaurant description.'
};

export const Avatar = Template.bind({});
Avatar.args = {
  rotateX: 10,
  rotateY: 10,
  color: '#444',
  width: '350px',
  bgColor: '#fff',
  perspective: '600px',
  avatarBrdWidth: '1rem',
  avatarBrdColor: '#eee',
  title: 'Believe in grip',
  avatarAlt: "Believe in grip",
  avatarSrc: 'https://brianypliu.com/assets/icons/manifest-icon-512.png',
  description: 'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.'
};

export const Media = Template.bind({});
Media.args = {
  rotateX: 10,
  rotateY: 10,
  color: '#444',
  width: '350px',
  bgColor: '#fff',
  perspective: '600px',
  avatarBrdWidth: '1rem',
  avatarBrdColor: '#eee',
  title: 'Believe in grip',
  avatarAlt: "Believe in grip",
  mediaSrc: "https://i.picsum.photos/id/1051/4928/3264.jpg?hmac=-O25O5Q9z7LI8gDrUkTUmDJir4F9cp1RadCwShIDGms",
  avatarSrc: 'https://brianypliu.com/assets/icons/manifest-icon-512.png',
  description: 'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.'
};
