import React from "react";
import { withRouter } from 'react-router-dom';
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <article className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }}
        className='background-image'
      />
      <div className="content">
        <h1 className="title">{ title.toUpperCase() }</h1>
        <span className="subtitle">COMPRE AGORA</span>
      </div>
    </article>
  );
};

export default withRouter(MenuItem);

