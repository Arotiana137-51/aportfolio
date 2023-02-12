import { Experience } from "../typing";
import { groq} from "next-sanity";
import { sanityClient } from "../sanity";


export const fetchExperience= async() =>{

const query =groq`
*[_type=="experience"]{
    ...,
    technologies[]->
}
`;
    const data= await sanityClient.fetch(query);
    const experiences : Experience[] = data;

    return experiences;

};