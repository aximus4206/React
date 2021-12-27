import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Posts, { Post } from "../../Build/PostBase";
import PostItem from '../Post/Post';
import styles from "./PostCat.module.scss"

const Container: React.FC = () => {
  let temp: Post = {
    category: "",
    title: "",
    text: ""
  }
  let [selectedItem, setSelectedItem]: [Post, Dispatch<SetStateAction<Post>>] = useState(temp);

  const filter = (event: ChangeEvent<HTMLInputElement>) => {
    let temp = Posts.find(post => post.category === (event.target!).value)!;
    setSelectedItem(temp)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>
        {Posts.map(post => {
          return (<div key={post.category}><label>
            {post.category}
            <input type="radio" name="category" value={post.category} onChange={filter} />
          </label>
          </div>)
        })}
      </div>
      {<PostItem post={selectedItem} />}
    </div>
  );
}

export default Container;