import styles from "./Newsletter.module.css";

type NewsletterProps = {
  title: string;
  /** Shorter heading shown on screens 768px wide and below. */
  mobileTitle?: string;
  description: string;
  substackUrl: string;
};

/** Newsletter sign-up section with an embedded Substack form. */
export default function Newsletter({
  title,
  mobileTitle,
  description,
  substackUrl,
}: NewsletterProps) {
  return (
    <section className={styles.newsletter}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {mobileTitle ? (
            <>
              <span className={styles.desktopOnly}>{title}</span>
              <span className={styles.mobileOnly}>{mobileTitle}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.embed}>
          <div className={styles.embedFrame}>
            <iframe
              src={substackUrl}
              title="Subscribe to the newsletter"
              className={styles.iframe}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
