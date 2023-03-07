var nome = document.querySelector ("#exampleInputName");
var gender = document.querySelectorAll ("#form-user-create [name=gender]");
var birth = document.querySelector ("#exampleInputBirth");
var country = document.querySelector ("#exampleInputCountry");
var email = document.querySelector ("#exampleInputEmail");
var password = document.querySelector ("#exampleInputPassword");
var photo = document.querySelector ("#exampleInputFile");
var admin = document.querySelector ("#exampleInputAdmin");

var fields = document.querySelectorAll ("#form-user-create [name]");
fields.forEach (function(fields, index){

    if (fields.name =="gender"){
        
        if (fields.checked){
            console.log("sim", fields);
        }
        

    } else {
        console.log("nao");
    }
    
   // console.log(fields,index);
})
