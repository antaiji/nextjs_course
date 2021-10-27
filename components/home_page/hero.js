import Image from "next/image";

import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/yuki.jpg"
          alt="Yuki cat photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Yuki</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Next.js and Gatsby
      </p>
    </section>
  );
}

export default Hero;
