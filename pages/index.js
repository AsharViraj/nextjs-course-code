import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>The Home Page</h1>
      <ul>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/clients">Clients</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
      </ul>
    </div>
  )
}
