import { knx } from "src/connections/CreateKnexConnectios";
import { ArticleInput } from "src/types/Articles";

export const UpdateAtricle =async(_,{id,input}:{id:number,input:ArticleInput},{})=>{
    const {title,summary,description,image,category_id,updated_at,created_at}= input;
    const updateArticle = await knx("articles").update({title,summary,description,image,category_id,updated_at,created_at}).where({id});
    if(updateArticle){
        return true;

    }else{
        return false;
    }
}