import PostItem from "./post_item";
import styles from "./posts_grid.module.css";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
