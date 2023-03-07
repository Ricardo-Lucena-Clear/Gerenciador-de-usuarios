class UserController {
    constructor(formId, tableId){
        this.formE1 = document.getElementById(formId);
        this.tableId = document.getElementById(tableId);

        this.onSubmit();
    }

    onSubmit (){
        this.formE1.addEventListener("submit", event => {

            event.preventDefault();

            let user = this.getValues();

            this.addLine(user);
        
        });
    }

    getValues(){
        let user = {};
           
     [...this.formE1.elements].forEach(function (fields, index) {

            if (fields.name =="gender") {
                
                if (fields.checked){
                    user[fields.name]= fields.value;
                }
                
        
            } else {
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
        <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
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