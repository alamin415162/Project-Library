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
    // this.info = function () {
    //     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.state} `

    // }
}


// declare a function to display books in the library array

let runtimes = 0; //count how many time a function called
function displayBooks(arr, containerId) {
    try {
        // validate inputs
        if (!Array.isArray(arr)) {
            throw new Error('First argument must be array')
        }

        const container = document.getElementById(containerId)
        if (!container) {
            throw new Error(`no element is found with id ${containerId}`)
        }
        // loop throw the array and display
        runtimes++
        arr.forEach((obj, index) => {
            if (typeof obj !== 'object' || obj == null) {
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
            const rmvBtn = document.createElement('button')
            rmvBtn.textContent = 'remove'
            rmvBtn.className = 'remove'
            const cgState = document.createElement('button')
            cgState.textContent = 'State'
            cgState.className = 'change-state'
            div.appendChild(para)
            div.appendChild(para1)
            div.appendChild(para2)
            div.appendChild(para3)
            div.appendChild(rmvBtn)
            div.appendChild(cgState)
            container.appendChild(div)

        })
    } catch {
        console.error(error.message)
    }
}

function displayAddedBook(lastBook) {
    const container = document.getElementById('shelf')
    const div = document.createElement('div')
    const rmvBtn = document.createElement('button')
    rmvBtn.textContent = 'remove'
    const cgState = document.createElement('button')
    cgState.textContent = 'State'
    rmvBtn.className = 'remove'
    cgState.className = 'change-state'
    Object.keys(lastBook).forEach(key => {
        const para = document.createElement('p')
        para.textContent = `${key}: ${lastBook[key]}`
        div.appendChild(para)
        container.appendChild(div)
    })
    div.appendChild(rmvBtn)
    div.appendChild(cgState)
    container.appendChild(div)

}

// constructing some placeholder book object from the prototype Book
const book1 = new Book('relativity', 'albert', 221, true)
const book2 = new Book('magnetism', 'faraday', 311, false)
const book3 = new Book('force Law', 'lorenz', 122, true)
const book4 = new Book('laser', 'gemechu', 125, true)

const myLibrary = [book1, book2, book3, book4];




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



cancel.addEventListener('click', (e) => {
    e.preventDefault()
    myDialog.close('cancel')
})
const form = document.getElementById('myForm')

showBtn.addEventListener('click', () => {
    form.reset()
    myDialog.showModal()

})
let result;
myDialog.addEventListener('close', () => {
    result = myDialog.returnValue
    if (result == 'submit') {
        const formData = new FormData(form)
        console.log('-----Form Inspection------')
        const titleOf = formData.get('title')
        const authorOf = formData.get('author')
        const pagesOf = formData.get('pages')
        const stateOf = formData.get('state')
        console.log(`author: ${titleOf}`)
        console.log(`author: ${authorOf}`)
        console.log(`author: ${pagesOf}`)
        console.log(`author: ${stateOf}`)
        addTo(titleOf, authorOf, pagesOf, stateOf)
        displayAddedBook(myLibrary.at(-1))
    } else if (result == 'cancel') {
        console.log('dialog cancelled')
    } else {
        console.log('dialog dismissed')
    }
})

function checkSubmission() {
    console.log(result)
    if (result == 'submit') {
        console.log('submitted')
    }
    // }else if(myDialog.returnValue == 'cancel'){
    //     console.log('cancelled')
    // }else if(myDialog.returnValue == '') {
    //     console.log('return value not assigned')
    // }else {
    //     console.log('dismissed')
    // }
}


const btns = document.querySelectorAll('.remove')
btns.forEach(button => {
    button.addEventListener('click', () => {
        console.log('remove button clicked')
    })
})

console.log(runtimes)
if (runtimes == 0) {
    displayBooks(myLibrary, 'shelf')
}


