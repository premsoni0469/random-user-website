function displayData(){
    fetch('https://randomuser.me/api').then((data)=>{
        var res = data.json();
        return res;
    }).then((res)=>{
        var user = res.results[0];

        var userProfile = user.picture.large
        document.getElementById('profile-pic').src = userProfile;


        var fullName = `${user.name.title} ${user.name.first} ${user.name.last}`

        document.getElementById('user').addEventListener("mouseover", ()=>{ 
            document.getElementById('userTitle').innerHTML = `Hi, my name is`;
            document.getElementById('detail').innerHTML = `${fullName}`;
        })
        document.getElementById('userTitle').innerHTML = `Hi, my name is`
        document.getElementById('detail').innerHTML = `${fullName}`;

        var emailID = `${user.email}`;
        // console.log(emailID);

        document.getElementById('envelope').addEventListener("mouseover", ()=>{ 
            document.getElementById('userTitle').innerHTML = `My email address is`;
            document.getElementById('detail').innerHTML = `${emailID}`;
        })

        var full_dob = `${user.dob.date}`;
        // console.log(full_dob);

        var dob = full_dob.slice(0, 10);
        // console.log(dob);
        // output: 2004-12-08

        var y = dob.slice(0, 4);
        var m = dob.slice(5, 7);
        var d = dob.slice(8, 10);

        console.log(`${d}/${m}/${y}`);
        document.getElementById('calendar').addEventListener("mouseover", ()=>{ 
            document.getElementById('userTitle').innerHTML = `My birthday is`;
            document.getElementById('detail').innerHTML = `${d}/${m}/${y}`;
        })

        var phone = `${user.phone}`;

        document.getElementById('call').addEventListener("mouseover", ()=>{ 
            document.getElementById('userTitle').innerHTML = `My phone number is`;
            document.getElementById('detail').innerHTML = `${phone}`;
        })

        var address = `${user.location.street.number} ${user.location.street.name}`   
        
        document.getElementById('map').addEventListener("mouseover", ()=>{ 
            document.getElementById('userTitle').innerHTML = `My  address is`;
            document.getElementById('detail').innerHTML = `${address}`;
        })

        var password = `${user.login.password}`;

        document.getElementById('lock').addEventListener("mouseover", ()=>{ 
            document.getElementById('userTitle').innerHTML = `My password is`;
            document.getElementById('detail').innerHTML = `${password}`;
        })
    })
}

displayData();