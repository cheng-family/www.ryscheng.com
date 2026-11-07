import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
  subtitle: string;
};

/** Full-bleed hero with a darkened city-lights background image. */
export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
