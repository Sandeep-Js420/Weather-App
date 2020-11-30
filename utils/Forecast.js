const request=require('request');

const WeatherData=function(longitude,latitude,callback){
    
    const weatherApiUrl='http://api.weatherstack.com/current?access_key=c548fbf2bfe9142ecf3873789034cb57&query='+longitude +','+latitude+''
     
    request({url:weatherApiUrl,json:true},(error,response)=>{
         if (error){
             callback(`unable to connect internet ! plz check your internet connection`,undefined);
         }else if(response.body.error){
            callback(`unable to find location`,undefined)
         }else{
             callback(undefined, `the current location is `+response.body.location.name+' ' + response.body.current.weather_descriptions[0]+'. it is currently '+response.body.current.temperature +' degree out');
         }
    })
}

module.exports=WeatherData;