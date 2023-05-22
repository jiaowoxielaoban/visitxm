import http from "./http";
const weatherApi = 'https://restapi.amap.com/v3/weather/weatherInfo?key=04e0a4356d54a59f73d82e66f6555188&city=350200&extensions=base&output=JSON'

// 获取当前气温
export const getWeather = ()=>{
    return new Promise((resolve, reject)=>{
        http.get(weatherApi).then(res =>{
            resolve(res)
        })
    })

}