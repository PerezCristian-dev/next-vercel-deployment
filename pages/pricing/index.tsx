import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from "../../styles/Home.module.css"

export default function Index (){
  return (
    <MainLayout>
    <h1>Pricing Page</h1>
    <h1 className={styles.content}>
      Ir a <Link href="/">Home</Link>
    </h1>
    <p>Pricing Page</p>
  </MainLayout>
  )
}
