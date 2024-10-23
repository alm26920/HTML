import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; <a href="contact.html">Andrew Murdoch</a>
      <a href="https://www.linkedin.com/in/andrew-murdoch-313ab9273/" target="_blank">
        <i className="fab fa-linkedin"></i>
      </a>
    </footer>
  );
}
