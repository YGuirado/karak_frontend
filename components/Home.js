import styles from '../styles/Home.module.css';
import Link from 'next/link';


function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Karak!
        </h1>
        <Link href="/maptest"> Map </Link>
        <Link href="/inventorytest"> Inventory </Link>
      </main>
    </div>
  );
}

export default Home;
