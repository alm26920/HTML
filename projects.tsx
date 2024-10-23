import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.threeCol}>
        <div className={styles.card}>
          <img src="images/harvardart.jpg" alt="Project 1" width="250px" />
          <h3>Harvart Art Museum Search Engine</h3>
          <ul>
            <li>Java-based project with a GUI window for user interaction.</li>
            <li>Displays the most relevant artwork from Harvard Art Museum based on search terms.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <img src="images/pagerduty.jpg" alt="Project 2" width="250px" />
          <h3>Pager Duty On-Call Schedule</h3>
          <ul>
            <li>PowerShell script to retrieve on-call team members via the PagerDuty API.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <img src="images/freshservice.jpg" alt="Project 3" width="250px" />
          <h3>Fresh Service Ticket Tracking</h3>
          <ul>
            <li>PowerShell script to pull tickets and create a report for business analytics.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
