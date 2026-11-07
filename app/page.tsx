import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import styles from "./page.module.css";
import "./home.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero
        title="ryscheng Inc."
        subtitle="Real Estate and Technology"
      />
      <Newsletter
        title="Sign up for the newsletter"
        mobileTitle="Get In Touch"
        description="Stay up to date on the latest"
        substackUrl="https://ryscheng.substack.com/embed"
      />
    </main>
  );
}
