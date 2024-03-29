import Image from "next/dist/client/image";

import styles from "./post_header.module.css";

function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
