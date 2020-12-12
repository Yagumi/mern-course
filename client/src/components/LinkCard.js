import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>
        <span>Your link:</span> 
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        <span>From:</span> 
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        <span>Clicks count:</span> 
        <strong>{link.clicks}</strong>
      </p>
      <p>
        <span>Creation date:</span> 
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
}