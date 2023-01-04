import React from 'react';

const YoutubeEmbed = ({ link, title, height }) => {
  return (
    <iframe
      width="100%"
      title={title}
      height={height}
      src={`https://www.youtube.com/embed/${link}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeEmbed;
