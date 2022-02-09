interface IModalMedia {
  type: 'video' | 'embed';
  src: string;
}

export default interface IProject {
  media: {
    splashSrc: string;
    fullMediaSrc: string;
    modalMedia: IModalMedia;
  };
  label: {
    text: string;
    color: string;
  };
  size: 'small' | 'large';
}
