import { Project } from "../typing";
import { groq} from "next-sanity";
import { sanityClient } from "../sanity";


export const fetchProjects= async() =>{

    const query =groq`
    *[_type=="project"]{
        ...,
        technologies[]->
    }
    `;

    const data = await sanityClient.fetch(query);
    const project : Project[] = data;
    
    return project;

};