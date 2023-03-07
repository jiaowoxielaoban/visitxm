//导入request.js
import http from './http'
//可以按需导出
//获取商品列表  方法一  返回一个请求的方法
export const getProduct=(params)=>http.get("/product/",{params});
//获取商品详情
export const getProductDetail=(id)=>http.get(`/product/${id}`);
//方法二 在api文件里出来异步请求
export const getCategory=async()=>{
    const res=await request.get(`/category/`);
    return res.data.results;
};