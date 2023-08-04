import { knx } from "src/connections/CreateKnexConnectios";

export const GetAllArticles = async()=>{
    const articles= await knx("articles");
    return articles;
}