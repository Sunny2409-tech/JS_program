const myMap = new Map();
myMap.set("IN", "India")
myMap.set("US", "United State");
myMap.set("FR", "France")

for (const mapEntry of myMap) {
    console.log("MapEntry : ",mapEntry)
}

for (const [key] of myMap) {
    console.log("Only Keys : "+key)
}

for (const [mykey,myvalue] of myMap) {
    console.log("KEY : ",mykey," - VALUE :",myvalue)
}

for(const keys of myMap.keys()){
    console.log("KEYS : ",keys)
}
