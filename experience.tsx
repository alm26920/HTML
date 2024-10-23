import styles from './leadership.css';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2>Leadership and Experience</h2>
      <dl>
        <dt>Information Security Intern at <a href="https://www.tfin.com" target="_blank">Triumph Financial</a></dt><dd>June 2024-July 2024</dd>
        <dt>UGA Men's Club Volleyball President</dt><dd>May 2023-Present</dd>
        <dt>Head Volleyball Coach at Metro Volleyball Club</dt><dd>July 2023-Present</dd>
        <dt>Lifeguard and CPI Instructor at UGA</dt><dd>September 2021-April 2022</dd>
      </dl>
    </section>
  );
}
