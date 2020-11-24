// //srction -6
// //using weatherstack api
// const request=require('request');
// const url='http://api.weatherstack.com/current?access_key=c548fbf2bfe9142ecf3873789034cb57&query=20.2961,85.8245';

// request({url:url},(error,response)=>{
// //console.log(response.body);
// const data=JSON.parse(response.body);
// console.log(`current Temp of bbsr is ${data.current.temperature}`);
// })

// ////////////////////////////////////////////////////////////////////
// Making a HTTP request & customizing Http request 
///////////////////////////////////////////////////////////////////

const request = require("request")
const url='http://api.weatherstack.com/current?access_key=c548fbf2bfe9142ecf3873789034cb57&query=20.2961,85.8245';
request({url:url,json:true},(error,response)=>{
    // console.log(response);
    const data =response.body;
    //chalenge 0.0.1
    console.log(`${data.current.weather_descriptions} The current temperature of ${data.location.name} is 
    ${data.current.temperature} degree celcius and humidity is  ${data.current.humidity}`);
})