import { IOptions, ISourceOptions, MoveDirection } from 'tsparticles-engine';

export const snow: ISourceOptions = {
  background: {
    // color: "#333",
  },
  particles: {
    move: {
      direction: 'bottom',
      enable: true,
      random: false,
      straight: false,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 10 },
    },
    wobble: {
      distance: 20,
      enable: true,
      speed: {
        min: -5,
        max: 5,
      },
    },
  },
};
