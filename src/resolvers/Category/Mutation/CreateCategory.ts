import { knx } from "src/connections/CreateKnexConnectios";
import { CategortyInput } from "src/types/Categories";

export const CreateCategory =async(_,{input}:{input:CategortyInput},{})=>{
    const {category_name}=input;
    const createCategory =await knx("category").insert({category_name})
    if(createCategory){
        return true;
    }else{
        return false;
    }
} 