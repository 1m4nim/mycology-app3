import { Link } from "react-router-dom";
import styles from "./StartWindow.module.css";
import HomeLink from "./HomeLink";

function SearchButton({ title }: { title: string }) {
  return <button className={styles.button}>{title}</button>;
}

export default function StartWindow() {
  return (
    <div className={styles.container}>
      <div>
        <HomeLink />
        <h1 className={styles.start}>菌類観察を始めていこう！</h1>
        <Link to="/Identify">
          <SearchButton title="search" />
        </Link>
      </div>
    </div>
  );
}
