import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={styles.content}>
        Ir a <Link href="/contact">Contact</Link>
      </h1>
      <p>About Page</p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
