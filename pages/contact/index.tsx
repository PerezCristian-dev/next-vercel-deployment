import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={styles.content}>
        Ir a <Link href="/pricing">Pricing</Link>
      </h1>
      <p>Contact Page</p>
    </MainLayout>
  );
}
