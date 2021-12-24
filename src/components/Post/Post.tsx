import React from 'react';
import classes from './Post.module.scss';

function Post({ title, body }: { title: string; body: string }) {
  return (
    <div className={classes.article}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Post;