import { knx } from "src/connections/CreateKnexConnectios";

export const RemoveArticle = async(_,{id}:{id:number},{})=>{
    const removeArticle =await knx("articles").del().where({id});
    if(removeArticle){
        return true;

    }else {
        return false;
    }
}