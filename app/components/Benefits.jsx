import React, { Component } from 'react'

function Benefits() {
  return (
    <div className="tile is-ancestor marginTile">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title benefits">Remember what you did</p>
          <div className="content">
            <p>With MeDaily, you can write a brief summary about what you did on a particular day, without keeping a diary.</p>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title benefits">A Daily Log</p>
          <div className="content">
            <p>How long did you sleep? Did you exercise? Keep a daily log of your activities, all in one place.</p>
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p className="title benefits">Discover Trends</p>
          <div className="content">
            <p>With our software, discover trends so that you can be your most productive and happy self.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Benefits