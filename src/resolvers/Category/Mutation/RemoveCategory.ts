import { knx } from "src/connections/CreateKnexConnectios";

export const RemoveCategory=async(_,{id}:{id:number},{})=>{
const removeCategory =await knx("category").del().where({id});
if(removeCategory){
    return true;
}else {
    return false;
}
}