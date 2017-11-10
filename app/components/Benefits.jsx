import React, { Component } from 'react';

function Benefits() {
  return (
    <div className="tile is-ancestor marginTile">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Stay Organized</p>
          <div className="content">
            <p>With MeDaily, you can write a brief summary on what you did on a particular day, without keeping a diary.</p>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Integration with Slack</p>
          <div className="content">
            <p>Integrate with Slack to easily enter daily summaries without logging into MeDaily.</p>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title">Upload Photos</p>
          <div className="content">
            <p>Upload photos and video and use MeDaily as an interactive photo album.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Benefits