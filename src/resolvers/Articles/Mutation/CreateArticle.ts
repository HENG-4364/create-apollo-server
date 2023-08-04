import { knx } from "src/connections/CreateKnexConnectios";
import { ArticleInput } from "src/types/Articles";

export const CreateArticle = async(_,{input}:{input:ArticleInput},{})=>{
const {title,summary,description,image,category_id,updated_at,created_at}= input;
 const createArticle = await knx("articles").insert({title,summary,description,image,category_id,updated_at,created_at})
 if(createArticle){
    return true;

 }else{
    return false;
 }
}