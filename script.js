function Library(title, author, pages,isRead){
    if(!new.target){
        throw Error('Please use the new keyword to acces this constructor')
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    if(isRead){
        this.status = 'read it before'
    }
    else{
        this.status = 'not read it yet'
    }

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status} `

    }
}

let power = new Library('Power','american guy',342,false)

console.log(power.info())

