import styles from "./page.module.css";
import Link from "next/link";
import "./page.module.css";
import { Navbar } from '../app/components/navBar';


const HomePage = () => {
  const links = [
    {href: "/login", name : "Login"},
    {href: "/register", name : "Register"}
  ]
  return (
    <><div>
      <Navbar links={links} />
    </div><main className={styles.main}>
        <div>
          <h1 className={styles.h1}>Welcome to BlogSphere</h1>
          <p className={styles.introduction}>
            BlogSphere is your go-to destination for engaging and insightful posts. Whether you're interested in the latest news, personal stories, or in-depth articles on various topics, we have something for everyone. Explore our curated content, share your thoughts, and become part of a vibrant community of readers and writers.
          </p>
          <p className={styles.callToAction}>

            <span> to dive into our latest updates and featured articles.</span>
          </p>
        </div>
      </main></>
  );
}
export default HomePage;