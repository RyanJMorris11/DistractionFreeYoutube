import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please search for a video.</div>;
  }
  const videoSrc = `https:/youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui segment">
        <h1>{video.snippet.title}</h1>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc}></iframe>
        </div>
        <br />
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
