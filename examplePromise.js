// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found')
// }
//
// getTempCallback('Mumbai',function(err, temp){
//   if(err) console.log('error',err);
//   else console.log('Success', temp);
// });
//
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found man');
//     },1000);
//   });
// }
//
// getTempPromise('Mumbai').then(function(temp){
//   console.log('Success', temp);
// },function(err){
//   console.log('Error',err)
// });


// Challenge Area

function AddPromise(a, b){
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('Both arguments should be number');
    }
  });
}

AddPromise(1,2).then(function(sum){
  console.log("The sum is ",sum);
},function(err){
  console.log('Error',err);
})
