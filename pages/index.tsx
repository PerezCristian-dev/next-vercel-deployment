import { Inter } from "@next/font/google";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1>
        Ir a <Link href="/about">About</Link>
      </h1>
      <p>Home Page</p>
    </MainLayout>
  );
}
