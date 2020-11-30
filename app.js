// //srction -6
// //using weatherstack api
const request = require("request")
const geocode=require('./utils/geocode');
const forecast=require('./utils/Forecast');



// geocode('Bhubaneswar',(error,data)=>{
//     console.log('Error :', error )
//     console.log(`response:`,data);

// })


// forecast( 20.26444,85.82806,(error,data)=>{
//     console.log(`Error:`, error);
//     console.log(`Response:`,data);
// })


//vdo 39 callBack chainning. - pass a function inside a callback fuction for desired output.
/** Target to show location and weather of that particular location 
 * Customizing the hard code in to dynamic passing the data .
 * 
 * */ 



//Now Apply this concept on Weather-app
//Goal use both destructuring and property short hand property in weather app
//use destructuring on app.js,Forecast.js,geocode.js
//use property shorthand in Forecast.js,and geocode.js
//test your work.



 const address=process.argv[2];

 if(!address){
     console.log(`please provide the address`);
 }else{
  
//Destructuring data object to {{longitude,latitude,location}}
 geocode(address,(error,{longitude,latitude,location}={})=>{
    
    // console.log('Error :', error )
    // console.log(`response:`,data);
   if(error){
       return console.log(error);
   }
  
    forecast( longitude,latitude,(error,forecastData)=>{
       
       if (error){
           return console.log(error)
       }
       
       console.log(location)
       console.log(`Response:`,forecastData);
    })
     
   })
 
}//else















//just refer to utils folder both file .....

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


// const url='http://api.weatherstack.com/current?access_key=c548fbf2bfe9142ecf3873789034cb57&query=20.2961,85.8245&units=s';
// request({url:url,json:true},(error,response)=>{
//     // console.log(response);
//      if(error){
//          console.log(`unable to connect internet ! plz check your internet connection`);

//      }else if (response.body.error){
//          console.log(`unable to find location!`)
//      }else{
//         const data =response.body;
//     //chalenge 0.0.1
//     console.log(`${data.current.weather_descriptions} The current temperature of ${data.location.name} is 
//     ${data.current.temperature} degree celcius and humidity is  ${data.current.humidity}`);
//      }
    
// })

//////////////////////////////////////////////////////////////////////////////////////////////////
//Making http request to mapbox api for getting the logitude and latitude
/////////////////////////////////////////////////////////////////////////////////////////////////

// const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/Bhubaneswar.json?access_token=pk.eyJ1IjoicmVhY3Qtbm9kZS1qczIwMjAiLCJhIjoiY2todzEycjF1MGtlZDMxbW9wbXc3ZHFweCJ9.en8oY1Rqig5PI_331neBBA"

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

//version 0.0.002 wrapping the geocode for reuse propuse means for different address we can performe that operation


// const geocode=function (address,callback){
//     const geocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/' +address +'.json?access_token=pk.eyJ1IjoicmVhY3Qtbm9kZS1qczIwMjAiLCJhIjoiY2todzEycjF1MGtlZDMxbW9wbXc3ZHFweCJ9.en8oY1Rqig5PI_331neBBA'
 
//    request({url:geocodeUrl,json:true},(error,response)=>{
//  if(error){
//      callback(`Unable to connect the internet service!check your internet connection`,undefined)
//  }else if(response.body.features.length===0){
//      callback(`invalid Address! please place proper address`,undefined)
//  }else{
//      callback(undefined,{
//           langitude:response.body.features[0].center[1],
//           latitude:response.body.features[0].center[0]
//      })
//  }
   
// })//request  

// }//geocode


