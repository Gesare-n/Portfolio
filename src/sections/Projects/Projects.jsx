import styles from './ProjectsStyles.module.css';
import IoT from '../../assets/IoT.png';
import art from '../../assets/art.png';
import  health from '../../assets/health.png';
import gaming from '../../assets/gaming.png';
import cars from '../../assets/cars.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={IoT}
          link="https://github.com"
          h3="  IoT"
          p="Internet Of Things"
        />
        <ProjectCard
          src={art}
          link="https://github.com/Gesare-n/AfroArtHub"
          h3="Art"
          p="AfroArt Hub App"
        />
        <ProjectCard
          src={health}
          link="https://github.com/Gesare-n/Immunization-App"
          h3="Health"
          p="Immunization App"
        />
        <ProjectCard
          src={gaming}
          link="https://github.com/Gesare-n/Game-Haven"
          h3="Gaming"
          p="Game Haven "
        />
        <ProjectCard
          src={cars}
          link="https://github.com/Gesare-n/Car-Renting-Platform"
          h3="Cars"
          p="Luxoride"
        />
        
      </div>
    </section>
  );
}

export default Projects;
