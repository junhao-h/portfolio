import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { singleProjectData } from "../data/singleProjectData";
import ProjectVideo from "../components/projects/ProjectVideo";

const ProjectSingle = () => {
  const { id } = useParams();
  const pagedata = singleProjectData[id] ?? null;
  console.log("12: ", pagedata);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        <ProjectHeader singleProjectData={pagedata} />
        <ProjectGallery singleProjectData={pagedata} />
        <ProjectInfo singleProjectData={pagedata} />
        <ProjectVideo singleProjectData={pagedata} />
        <ProjectRelatedProjects singleProjectData={pagedata} />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;
