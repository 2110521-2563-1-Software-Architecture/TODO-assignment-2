const axios = require("axios");
axios.defaults.baseURL = "http://localhost:3000"
var path = {
    listBooks : "/list",
    insertBook : "/insert",
    getBook : "/get",
    deleteBook : "/delete",
}
function listBooks(){
    axios.get(path.listBooks)
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        if(error.status){
            console.log(error)
        } else{
            console.log(error.code)
        }
    })
}
function insertBook(id,title,author){
    var book = {
        id: parseInt(id),
        title: title,
        author: author
    }
    axios.post(path.insertBook,book)
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        if(error.status){
            console.log(error)
        } else{
            console.log(error.code)
        }
    })
}
function getBook(id){
    axios.get(path.getBook,{
        params: {
          id: id
        }
      })
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        if(error.status){
            console.log(error)
        } else{
            console.log(error.code)
        }
    })
}
function deleteBook(id){
    axios.delete(path.deleteBook,{id:id})
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        if(error.status){
            console.log(error)
        } else{
            console.log(error.code)
        }
    })
}

var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();
if (command == 'list')
    listBooks();
else if (command == 'insert')
    insertBook(process.argv[0], process.argv[1], process.argv[2]);
else if (command == 'get')
    getBook(process.argv[0]);
else if (command == 'delete')
    deleteBook(process.argv[0]);


