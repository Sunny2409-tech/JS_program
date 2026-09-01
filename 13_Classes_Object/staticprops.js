class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }

    static createId(){  //we use the static keyword when we want a method or property to belong to the class itself, rather than to objects (instances) created from that class.
        return `12345`  // Here we wouldnt be able to call createId() method with reference. like hitesh.createId()
    }
}

//Here static method cannot be called using reference or object.
// const hitesh = new User("SunnyKumar")
// console.log(hitesh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe();
// console.log(iphone.createId());   //Error as we have created static method so it cant be called using object.
// console.log(User.createId());    // We can call this method using class name only
