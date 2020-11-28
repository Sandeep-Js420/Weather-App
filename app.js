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


const url='http://api.weatherstack.com/current?access_key=c548fbf2bfe9142ecf3873789034cb57&query=20.2961,85.8245&units=s';
request({url:url,json:true},(error,response)=>{
    // console.log(response);
     if(error){
         console.log(`unable to connect internet ! plz check your internet connection`);

     }else if (response.body.error){
         console.log(`unable to find location!`)
     }else{
        const data =response.body;
    //chalenge 0.0.1
    console.log(`${data.current.weather_descriptions} The current temperature of ${data.location.name} is 
    ${data.current.temperature} degree celcius and humidity is  ${data.current.humidity}`);
     }
    
})

//////////////////////////////////////////////////////////////////////////////////////////////////
//Making http request to mapbox api for getting the logitude and latitude
/////////////////////////////////////////////////////////////////////////////////////////////////

// const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/45ar.json?access_token=pk.eyJ1IjoicmVhY3Qtbm9kZS1qczIwMjAiLCJhIjoiY2todzEycjF1MGtlZDMxbW9wbXc3ZHFweCJ9.en8oY1Rqig5PI_331neBBA"

// request({url:geocodeUrl,json:true},(error,response)=>{
//     // console.log(response.body);
// //Handling the error...version 0.0.001
// if(error){
//     console.log(`Unable to connect the internet service!check your internet connection`);

// } else if(response.body.features.length===0){
//     console.log(`invalid Address! please place proper address`)
// } else{
//     const langitude=response.body.features[0].center[1];
//     const latitude=response.body.features[0].center[0];
//     console.log(langitude,latitude);

// }  
// });

