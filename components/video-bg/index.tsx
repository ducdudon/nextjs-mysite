'use client';
import { Video } from './styled';

export default function VideoBg() {
  return (
    <Video muted autoPlay loop>
      <source
        src='https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video5.mp4'
        type='video/mp4'
      />
    </Video>
  );
}
