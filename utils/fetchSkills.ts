import { Skill } from "../typing";
import { groq} from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchSkils= async()=>{

    const query =groq`
    *[_type=="skill"]
   `;
   
    const data = await sanityClient.fetch(query)
    const skills : Skill[] = data;


    return skills;

};