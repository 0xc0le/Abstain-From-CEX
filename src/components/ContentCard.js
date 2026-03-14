/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

function ContentCard({ title, eyebrow, icon, className, children }) {
  return (
    <section className={className}>
      {(eyebrow || icon) && (
        <div className="content-card-eyebrow-row">
          {icon && <span className="content-card-icon">{icon}</span>}
          {eyebrow && <span className="content-card-eyebrow">{eyebrow}</span>}
        </div>
      )}
      <h2 className="content-card-title">{title}</h2>
      <div className="content-card-body">{children}</div>
    </section>
  );
}

ContentCard.defaultProps = {
  eyebrow: '',
  icon: null,
  className: 'content-card'
};

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  eyebrow: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ContentCard;
