//просто иду по условию, создаешь протатипы которые тебе говорят. Ничего сложного 
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = null
}

Book.prototype.isAvailable = function() {
    if(this.reader === null){
        return true
    }else {
        return false
    }
}

Book.prototype.takeBook = function (readerName){
    if(this.reader === null){
        this.reader = readerName;
        return true
    }else{
        return false
    }
}


Book.prototype.returnBook = function(){
    if(this.reader !== null){
        this.reader = null
        return true
    }else{
        return false
    }
}

Book.prototype.changeBookName = function(newBookName){
    this.name = newBookName
    if(this.name === newBookName){
        return true
    }else{
        return false
    }
}
Book.prototype.changeAuthorName = function (newAuthorName){
    this.author = newAuthorName
    if(this.author === newAuthorName){
        return true
    }else{
        return false
    }
}

Book.prototype.getCurrentReader = function (){
    if(this.reader === null){
        return null
    }else{
        return this.reader
    }

}