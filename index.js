var fields = document.querySelectorAll ("#form-user-create[name]");
var user = {};

document.getElementById("form-user-create").addEventListener("submit", function(event){
    event.preventDefault();


fields.forEach (function(fields, index){

    if (fields.name =="gender"){
        
        if (fields.checked){
            user.gender
        }
        

    } else {
        user[fields.name] = fields.value;
    }
    
})
console.log(user);
})

