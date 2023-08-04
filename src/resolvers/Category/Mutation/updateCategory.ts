import { knx } from "src/connections/CreateKnexConnectios";
import { CategortyInput } from "src/types/Categories";
export const Updatecategory =async(_,{id,input}:{id:number,input:CategortyInput},{})=>{
const {category_name}=input;
const updateCategory =await knx("category").update({category_name}).where({id})
if(updateCategory){
    return true;
}else{
    return false;
}
}