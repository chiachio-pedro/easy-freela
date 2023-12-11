import styles from "../../styles/Navbar.module.css";

import { useRouter } from "next/router";
import Link from "next/link";

type NavItemProps = {
  href: string;
  title: string;
};

export function NavItem({ href, title }: NavItemProps) {
  const { pathname } = useRouter();

  return (
    <li
      className={styles.navbar_links_itens}
      style={{ color: pathname === href ? "#58d5d3" : "#fff" }}
    >
      <Link className={styles.navbar_links} href={href}>
        {title}
      </Link>
    </li>
  );
}
