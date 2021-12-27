import styles from "./Post.module.scss";
import { Post } from "../../Build/PostBase";

const PostItem = (props: { post: Post }) => {
    if (props.post.title.length) {
        return <div className={styles.container__post}>
            <div className={styles.title}>
                <p className={styles.container__p}><strong>Category:</strong>{props.post.category}</p>
                <p className={styles.container__p}><strong>TItle:</strong>{props.post.title}</p>
            </div>
            <div className={"text"}>
                <p>{props.post.text}</p>
            </div>
        </div>;
    }
    return <div />;
}

export default PostItem;