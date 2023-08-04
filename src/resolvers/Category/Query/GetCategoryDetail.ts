import { knx } from "src/connections/CreateKnexConnectios"

export const GetCategoryDetail = async(_,{id}:{id:number},{})=>{
    const getCategoryDetail =await knx("category").where({id}).first();
    return getCategoryDetail;

}
