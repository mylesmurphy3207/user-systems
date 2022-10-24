function saveUser(newUser){
    console.log(newUser);
    let val = JSON.stringify(newUser);//convert the obj into string
    console.log(val);
    localStorage.setItem('user', val);
}
function readUsers(){
    let users = localStorage.getItem('user');// getting the users in the localStorage
    console.log(users);
    if(!users){ // NOt users?
    //if youn get here the LS is emptyy
        return []; //creating empty array
    }else{
        //if you get here the LS has users
        let list = JSON.parse(users);//parse the sers back into an array
        console.log(list);
        return list;
    }
}