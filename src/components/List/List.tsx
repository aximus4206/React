import React from 'react';
import Post from '../Post/Post';
import { PostInterface } from '../../Build/Interface';
import classes from './List.module.scss';

function List({ Posts }: { Posts: PostInterface[] }) {
  return (
    <ul className={classes.listStyle}>
      {Posts.map((post: PostInterface) => {
        return (
          <li key={post.id}>
            <Post title={post.title} body={post.body} />
          </li>
        )
      })
      }
    </ul>
  )
}

export default List;