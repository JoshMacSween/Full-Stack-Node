const url = require('url')

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

//Serialized Url
console.log(myUrl.href)
console.log(myUrl.toString())
//Host
console.log(myUrl.host) // with port
console.log(myUrl.hostname) // without port
//Pathname
console.log(myUrl.pathname)
//Serialized Query
console.log(myUrl.search)
console.log(myUrl.searchParams) // creates object from output
myUrl.searchParams.append('abc', '123') // added parameters to object
console.log(myUrl.searchParams)
//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
