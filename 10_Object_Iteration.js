const myObject = {
    js : "JavaScript",
    rb : "Ruby",
    swift : "Swift by Apple",
    cpp : "C++"
}

for (const key in myObject) {
    console.log("KEYS : ", key)
}
for(const key in myObject){
    console.log(`${key} for Value : ${myObject[key]}`)
}

const programming = ["js", "rb","swift", "cpp"]
for(const key in programming){
    console.log("KEY : ",key)
    console.log("Values : ",programming[key])
}