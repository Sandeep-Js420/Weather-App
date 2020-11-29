const request=require('request');

const geocode=function (address,callback){
    const geocodeUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicmVhY3Qtbm9kZS1qczIwMjAiLCJhIjoiY2todzEycjF1MGtlZDMxbW9wbXc3ZHFweCJ9.en8oY1Rqig5PI_331neBBA'
 
  request({url:geocodeUrl,json:true},(error,response)=>{
      if(error){
          callback(`Coluld connect to internet! please check your connection `,undefined);
      }else if(response.body.features.lenght===0){
          callback(`please Enter valid address! `,undefined)
      }else{
          callback(undefined,{
              longitude:response.body.features[0].center[1],
              latitude:response.body.features[0].center[0]
          });//callback
      }//else
  }) //request 
 
}//geocode

// export default module=geocode;
module.exports=geocode