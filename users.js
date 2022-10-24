function displayusers(usersArray){
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        tr=`
        <td>${user.email}</td>
        <td>${user.first}</td>
        <td>${user.last}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        `; //create new html row
        
    
    //travel the array of users
        //get the user

        //create the html row

    //append the  user into the table
    $("#users-table").append(tr);
}
}

function init(){
    console.log("Listing users...");
    let users = readUsers(); // getting the users from the LS
    displayusers(users);//display the users
}
window.onload=init;