import { CreateArticle } from "./Articles/Mutation/CreateArticle";
import { RemoveArticle } from "./Articles/Mutation/RemoveArticle";
import { UpdateAtricle } from "./Articles/Mutation/UpdateAticle";
import { GetAllArticles } from "./Articles/Query/GetAllArticles";
import { GetArticleDetail } from "./Articles/Query/GetArticleDetail";
import { CreateCategory } from "./Category/Mutation/CreateCategory";
import { RemoveCategory } from "./Category/Mutation/RemoveCategory";
import { Updatecategory } from "./Category/Mutation/updateCategory";
import { GetAllCategories } from "./Category/Query/GetAllCategories";
import { GetCategoryDetail } from "./Category/Query/GetCategoryDetail";

export const Resolvers={
    Query:{
        Articles:GetAllArticles,
        article:GetArticleDetail,
        Categories:GetAllCategories,
        category:GetCategoryDetail,
    },
    Mutation:{
        CreateArticle:CreateArticle,
        UpdateArticle:UpdateAtricle,
        RemoveArticle:RemoveArticle,
        CreateCategory:CreateCategory,
        UpdateCategory:Updatecategory,
        RemoveCategory:RemoveCategory,
    }
}