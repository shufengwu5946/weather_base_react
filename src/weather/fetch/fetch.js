// let config = require('./_city.json');
import config from './_city.json';
export default function getWeatherByCity(city,func) {
    let cityCode = getCityCode(city);
    // console.log(`code${cityCode}`);
    
    if(!cityCode){
        alert('城市不存在');
    }else{
        fetch(`http://t.weather.sojson.com/api/weather/city/${cityCode}`, {
        method: 'get'
    }).then(handleResponse)
        .then(data => {
            func(data);
        })
        .then(error => {
            console.log(error);
        })
    }
    
}

function handleResponse(response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
        return handleJSONResponse(response)
    } else {
        throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
}

function handleJSONResponse(response) {
    return response.json()
        .then(json => {
            if (response.ok) {
                return json;
            } else {
                return Promise.reject(Object.assign({}, json, {
                    status: response.status,
                    statusText: response.statusText
                }))
            }
        })
}

function getCityCode(city){
    
    for(let i=0;i<config.length;i++){
        if(city === config[i].city_name){
            
            return config[i].city_code;
        }
    }
    return "";
    
}