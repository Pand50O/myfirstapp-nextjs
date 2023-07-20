import Link from "next/link";
import Image from "next/image";
import styles from './NavMenu.module.css';
import { SignInButton } from "@/components/buttons";

export default function Navmenu() {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>
        <Image
          src="/next.svg"
          width={144}
          height={20}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'about'}>About</Link>
        </li>
        <li>
          <Link href={'blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'users'}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  )
}