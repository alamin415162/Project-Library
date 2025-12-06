// declare a contructor function to construct book objects
function Book(title, author, pages, isRead) {
    // validating input
    if (!new.target) {
        throw Error('Please use the new keyword to acces this constructor')
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    // checking the status
    if (isRead) {
        this.state = 'read it before'
    }
    else {
        this.state = 'not read it yet'
    }
    // a method to print info about the book
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.state} `

    }
}


// declare a function to display books in the library array
function displayBooks(arr, containerId){
    try {
        // validate inputs
        if(!Array.isArray(arr)){
            throw new Error('First argument must be array')
        }

        const container = document.getElementById(containerId)
        if(!container){
            throw new Error(`no element is found with id ${containerId}`)
        }
        // loop throw the array and display
        arr.forEach((obj, index) =>{
            if(typeof obj !== 'object' || obj == null){
                console.warn(`skiping invalid item at index ${index}`)
                return;
            }
            
            const div = document.createElement('div')
            const para = document.createElement('p')
            para.textContent = `Title: ${obj.title}`
            const para1 = document.createElement('p')
            para1.textContent = `Author: ${obj.author}`
            const para2 = document.createElement('p')
            para2.textContent = `Pages: ${obj.pages}`
            const para3 = document.createElement('p')
            para3.textContent = `State: ${obj.state}`
            div.appendChild(para)
            div.appendChild(para1)
            div.appendChild(para2)
            div.appendChild(para3)
            container.appendChild(div)
        })


    }catch{
        console.error(error.message)
    }
}


// constructing some placeholder book object from the prototype Book
const book1 = new Book('relativity', 'albert', 221, true)
const book2 = new Book('magnetism', 'faraday', 311, false)
const book3 = new Book('force Law', 'lorenz', 122, true)
const book4 = new Book('laser', 'gemechu', 125, true)

const myLibrary = [book1,book2,book3,book4];




// function to add inputs into the array library
function addTo(title, author, pages, state) {
    let book = new Book(title, author, pages, state)
    myLibrary.push(book)
}

// call functions in the script
const myDialog = document.getElementById('myDialog')
const showBtn = document.getElementById('showBtn')
const cancel = document.getElementById('cancel')
const submit = document.getElementById('submit')




showBtn.addEventListener('click', ()=>{
    myDialog.showModal()
})

cancel.addEventListener('click', () =>{
    myDialog.close('closed')
})
submit.addEventListener('click', () =>{
    myDialog.close()
})

myDialog.addEventListener('close', () =>{
    console.log(myDialog.returnValue)
})



addTo('science','tecno', 322, true)
displayBooks(myLibrary, 'shelf')





