import React from 'react';

const IframeEmbedded = ({ link, title, height = "500px" }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        title={title}
        height={height}
        src={`${link}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeEmbedded;
