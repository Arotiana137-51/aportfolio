import { PageInfo } from "../typing";
import { groq} from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchPageinfo= async() =>{

     const query =groq`
    *[ _type == "pageInfo"][0]
    `;

    const data = await sanityClient.fetch(query);
    
    const pageInfo : PageInfo = data;

    return pageInfo;

};