import type { ISourceOptions } from 'tsparticles-engine';

export const triangles: ISourceOptions = {
  background: {
    // color: "#000000",
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    color: {
      value: '#00897D',
    },

    links: {
      distance: 125,
      enable: true,

      triangles: {
        enable: true,
        opacity: 0.01,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
    size: {
      value: 1,
    },
    shape: {
      type: 'triangles',
    },
  },
};
