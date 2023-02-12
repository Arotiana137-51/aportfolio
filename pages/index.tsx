import type {  GetStaticProps } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience_front from "../components/Experience_front";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import { Experience, PageInfo, Skill, Project } from "../typing";
import { fetchPageinfo } from "../utils/fetchPageinfo";
import { fetchExperience } from "../utils/fetchExperiences";
import { fetchSkils } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
};



const Home = ({ pageInfo, experiences, skills, projects }: Props) => {

  return (
    <div className=" bg-teal-900 h-screen text-white space-y-25 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  ">
      
      <Head>
        <title>Arotiana &apos;s portfolio</title>
      </Head>

     
      <Header />

       
      <section id="hero" className="snap-start">
         <Hero pageInfo ={pageInfo}/> 
      </section>
 
       
      <section id="about" className="snap-center">
         <About pageInfo ={pageInfo} /> 
      </section>

    
      <section id="experience" className="snap-center">
         <Experience_front experiences= {experiences} /> 
      </section>

      <section id="skills" className="snap-start">
        <Skills skills ={skills} />
      </section>

      <section id="projects" className="snap-start">
            <Projects projects={projects} />  
      </section>

      <section id="contact" className="snap-start">
         <ContactMe /> 
      </section>    
    </div>
  );
};

export default Home;


 export const getStaticProps:GetStaticProps<Props> = async () => {
  
  const skills: Skill[] = await fetchSkils();
  const projects: Project[] = await fetchProjects();
  const pageInfo: PageInfo = await fetchPageinfo();
  const experiences: Experience[] = await fetchExperience();   

/*   const skills = undefined;
  const projects= undefined;
  const pageInfo = undefined;
  const experiences = undefined; */

  
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
    },
    revalidate:100,
   
  };
}; 
 