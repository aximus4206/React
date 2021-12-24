import React from 'react';
import classes from './Post.module.scss';

function Post({ title, body }: { title: string; body: string }) {
  return (
    <article className={classes.article}>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  )
}

export default Post;