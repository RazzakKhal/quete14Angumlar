export class User {
    
    name;
    mail;
    password;
    street;
    city;
    postCode;

    constructor(name : string | null, mail : string | null, password : string | null, street : string | null, city : string | null, postCode : string | null){
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.street = street;
        this.city = city;
        this.postCode = postCode;
        

    }

    
}
