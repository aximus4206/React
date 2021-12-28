import React, { MouseEvent, useState } from 'react';
import Posts, { Post } from "../../Build/PostBase";
import PostItem from '../Post/Post';
import styles from "./PostCat.module.scss"

const Container: React.FC = () => {
  let [selectedItem, setSelectedItem] = useState<Post[]>(Posts);

  const filter = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedItem(Posts.filter(post => post.category === event.currentTarget.dataset.value))
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>

        <button className={styles.cat_btn} onClick={filter} data-value={'JavaScript'}>JavaScript</button>

        <button className={styles.cat_btn}  onClick={filter} data-value={'PHP'}>PHP</button>

        <button className={styles.cat_btn} onClick={filter} data-value={'HTML'}>HTML</button>
      </div>
      {selectedItem.map(post => {
        return <PostItem key={post.id} post={post} />
      })}
    </div>
  );
}

export default Container;