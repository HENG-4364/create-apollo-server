import { knx } from "src/connections/CreateKnexConnectios"

export const GetAllCategories =async()=>{
    const getAllCategories=await knx("category")
    return getAllCategories;
}