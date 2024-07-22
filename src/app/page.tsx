import BeADonor from "./components/BeADonor";
import Contact from "./components/Contact";
import HomePage from "./components/Home";
import Projects from "./components/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <HomePage /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <BeADonor />
    </main>
  );
}
