class UserController {
    constructor(formId, tableId){
        this.formE1 = document.getElementById(formId);
        this.tableId = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit (){
        this.formE1.addEventListener("submit", event => {

            event.preventDefault();

            let btn = this.formE1.querySelector("[type=submit]");

            btn.disabled = true;

            let values = this.getValues();

            this.getPhoto(). then(
                (content)=>{
            values.photo= content;
            this.addLine(values);

            this.formE1.reset();

            btn.disabled = false;

            }, 
           (e)=>{
                console.error(e);

            }
            );       
        });
    }
    
    getPhoto(){

        return new Promise ((resolve, reject)=>{
            let fileReader = new FileReader ();

            let elements = [...this.formE1.elements].filter(item=>{
                 if (item.name === 'photo'){
                     return item;
                 }
             });
     
             let file = elements[0].files[0];
     
             fileReader.onload = ()=>{
                 
             resolve(fileReader.result);
     
             }

             fileReader.onerror = (e)=>{
                reject(e);
             }

             if (file){
                fileReader.readAsDataURL(file);
             } else {
                resolve('dist/img/boxed-bg.jpg');
             }

        });
  
    }


    getValues(){
        let user = {};
        let isValid = true;
           
     [...this.formE1.elements].forEach(function (fields, index) {

        if (['name', 'email', 'password'].indexOf(fields.name) > -1 && !fields.value){

            fields.parentElement.classList.add('has-error');
            isValid = false;
        }

            if (fields.name =="gender") {
                
                if (fields.checked){
                    user[fields.name]= fields.value;
                }
                
        
            } else if (fields.name == "admin"){
                user[fields.name] = fields.checked;
            }
            else {
                user[fields.name] = fields.value;
            };
            
        })

        if (!isValid){
            return false;
        }
        
        return new User (
            user.name, 
            user.gender, 
            user.birth, 
            user.country, 
            user.email, 
            user.passaword, 
            user.photo, 
            user.admin
            );
       

    }
    
 addLine(dataUser) { 

    let tr = document.createElement('tr');

    tr.innerHTML =`
       <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
        <td>${dataUser.name}</td>
       <td>${dataUser.email}</td>
        <td>${(dataUser.admin) ? 'Sim' : 'Não'}</td>
       <td>${utils.dateformat(dataUser.register)}</td>
       <td>
           <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
           <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
       </td>
   
   `;
    this.tableId.appendChild(tr);

}
}