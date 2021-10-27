import PostsGrid from "./posts_grid";
import styles from "./all_posts.module.css";

function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
