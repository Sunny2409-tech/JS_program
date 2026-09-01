function setUsername(username){
    this.username = username;
    console.log("Called")
}

function createUser(username, email, password){
    // setUsername(username);   //It will not work
    setUsername.call(this, username);   //It is passing this of createUser to add username in createUser context.
    this.email = email
    this.password = password
}

const chai = new createUser("Sunny", "chai@gmail.com", "1234")

console.log(chai); 
//O/P - Called  createUser { email: 'chai@gmail.com', password: '1234' }. Here you can see username is not printed.
//Because once the setUserName() method call is completed it remove the context from callstack. That why at line 7 we have to explicity using setUsername.call(username)
//Also, The reason is this inside setUsername() is not the same this as inside createUser() when you call it





