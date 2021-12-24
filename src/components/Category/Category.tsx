import React from 'react';
import { PostInterface } from '../../Build/Interface';
import * as categories from '../../Build/Constants';
import Post from '../Post/Post';
import classes from './Category.module.scss';


function Category({ Posts }: { Posts: PostInterface[] }) {
  const AllCategories: string[] = Object.values(categories);
  return (
    <ul className={classes.listCategory}>
      {AllCategories.map(category => (
        <li key={category}>
          <h2 className={classes.topicInfo}>{category}</h2>
          {Posts.map((post: PostInterface) => {
            if (category === post.category) {
              return (
                <Post key={post.id} title={post.title} body={post.body} />
              )
            }
            return null;
          })}
        </li>
      ))}
    </ul>
  )
}

export default Category;