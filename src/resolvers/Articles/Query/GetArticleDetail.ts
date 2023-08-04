import { knx } from "src/connections/CreateKnexConnectios"

export const GetArticleDetail = async (_, { id }: { id: number }, { }) => {
    const article = await knx("articles").where({ id }).first();
    return article;
}