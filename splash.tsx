import styles from './splash.module.css';

export default function Splash() {
  return (
    <section className={styles.splash}>
      <h1><p>Andrew Murdoch</p></h1>
      <img src="Images/amurdoch.jpg" width="350" height="350" alt="Andrew Murdoch"/>
      <p>3291 Normandy Circle NE Marietta, GA 30062 &nbsp; &bull; &nbsp; 770-374-7453 &nbsp; &bull; &nbsp; amurdoch0220@gmail.com</p>
      <p>I am a curious and motivated individual striving to gain experience in the field of cybersecurity...</p>
    </section>
  );
}
