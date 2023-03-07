class UserController {
    constructor(formId, tableId){
        this.formE1 = document.getElementById(formId);
        this.tableId = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit (){
        this.formE1.addEventListener("submit", event => {

            event.preventDefault();

            let values = this.getValues();

            this.getPhoto(). then(
                (content)=>{
            values.photo= content;
            this.addLine(values);

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
           
     [...this.formE1.elements].forEach(function (fields, index) {

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
    this.tableId.innerHTML= `
     <tr>
        <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
         <td>${dataUser.name}</td>
        <td>${dataUser.email}</td>
         <td>${dataUser.admin}</td>
        <td>${dataUser.birth}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>
    `;

}
}