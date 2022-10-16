//1) create the user construction
//email, password, first name, last name, age , address, phone nuymber, payment, color


function User( email, password, first, last, age, address, phone, payment, color,){

    this.email = email;
    this.password = password;
    this.first = first;
    this.last = last;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

let ipnutEmail = $("#txtEmail").val();
let inputPassword = $("#txtPassword").val();
let inputFirst = $("#txtFirst").val();
let inputLast = $("#txtLast").val();
let inputAge = $("#txtAge").val();
let inputAddress = $("#txtAddress").val();
let inputPhone = $("#txtPhone").val();
let inputPayment = $("#tselPayment").val();
let inputColor = $("#selColor").val();



function register(){
    let user = new User(inputEmail,inputPassword,inputfirstname,inputlastname,inputAge,inputAddress,inputPhone,inputPayment,inputColor)
};

console.log