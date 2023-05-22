import http from "./http";

// 获取旅游资讯列表
export const getArticleList= async()=>{
    const res = await http.get('/inquire/getArticleList')
    // console.log(res)
    return res.data;
}

// 获取旅游资讯 文章详情
export const getArticleDetail= async(id)=>{
    const res = await http.post('/inquire/getArticleList/getArticleDetail', {id: id})
    console.log(res)
    return res.data;
}