const request=require('request');

const WeatherData=function(longitude,latitude,callback){
    
    const weatherApiUrl='http://api.weatherstack.com/current?access_key=c548fbf2bfe9142ecf3873789034cb57&query='+longitude +','+latitude+''
     
    request({url:weatherApiUrl,json:true},(error,{body}={})=>{
         if (error){
             callback(`unable to connect internet ! plz check your internet connection`,undefined);
         }else if(body.error){
            callback(`unable to find location`,undefined)
         }else{
             callback(undefined, `the current location is `+body.location.name+' ' + body.current.weather_descriptions[0]+'. it is currently '+body.current.temperature +' degree out');
         }
    })
}

module.exports=WeatherData;