// function uploadProject(){
//     let stateValue = true;// boolean value for if project is submitted or not
//     return new Promise (function(resolve, reject){
//          //resolve(stateValue);      // shows promise state as fulfilled
            // resolve(stateValue);   
//         // reject();        // shows promise state as rejected
//     });
// }

// console.log(uploadProject());


// function uploadProject(){
//     return new Promise(function(resolve, reject){
//         let state = true;
//         if(state)
//             resolve();
//         else
//             reject();
//     })
// }

// console.log(uploadProject());

// uploadProject().then(function(projectState){
//     console.log("Good Job!");
// }).catch(function(){
//     console.log("Try again.");
// })

// There can be multiple then (executed sequentially) but only one catch

// function projectUpload()
// {
//     fetch("https://randomuser.me/api/").then((data)=>{
//         var res = data.json();  // converts data to JSON
//         // console.log(res);  // won't work since in the fetch function, we are fetching data, and no multitasking allowed!!
//         return res;  //response of promise

//     }).then((res)=>{
//         console.log(res);
//         console.log(res.results[0]);
//         // console.log(res.results[0].name);
//         // let user = res.results[0];
        
//         // let {first, last, title} = user.name;

//         // console.log(`Name : ${title} ${first} ${last}`);
//     }).catch((err)=>{
//         console.log("Someting went wrong", err);
//     });
// }

// projectUpload();

/*  28/11/2024  */
// function uploadProject(){
//     fetch("https://randomuser.me/api/").then((data)=>{
//         var res = data.json();
//         return res;
//     }).then((res)=>{
//         // console.log(res); 
//         /* output: {results: Array(1), info: {…}}
//         info
//         : 
//         {seed: '08c56ad0c7c2225f', results: 1, page: 1, version: '1.4'}
//         results
//         : 
//         [{…}]
//         [[Prototype]]: Object
//         */
//        var user = res.results[0];
//        var fullName = "Name: " +user.name.title+ " " +user.name.first+ " " +user.name.last;
//        document.getElementById('name').innerText = fullName

//        var photo = user.picture.large;
//        document.getElementById("profile-pic").src = photo;
//        console.log(photo);
//     }).catch((err)=>{
//         console.log("ERROR IN API");
//     });
// }
// uploadProject();

// console.log(uploadProject());
// uploadProject();


// 03-12-2024


// function uploadProject(){
//     return new Promise(function(resolve, reject){
//         // Do not resolve or reject the promise immediately to keep it pending
//         let state = false;
//         if(state)
//             resolve("Completed");
//         else
//             reject("Incomplete");
//     });
// }

// console.log(uploadProject());

// uploadProject().then(function(){
//     console.log("Good Job");    
// }).catch(function(){
//     console.log("Try Again!")
// });

function uploadProject(){
    fetch('https://randomuser.me/api').then((data)=>{
        var res = data.json();  // To convert data to json format
        return res;
    }).then((res)=>{
        // console.log(res);
        var user = res.results[0];
        console.log(user);
        var fullName = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`
        console.log(fullName)

        // let {title, first, last} = user.name
        // console.log(`Name: ${title} ${first} ${last}`);

        // document.getElementById('name').innerHTML = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;

        document.getElementById('name').innerHTML = fullName;

        var photo = user.picture.large;

        document.getElementById('profile-pic').src = photo;

        console.log(photo);
    }).catch((err)=>{
        console.error("ERROR IN API");  
    })
}

uploadProject();