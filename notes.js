const fs = require('fs')
const chalk = require('chalk')


// Function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()

    // check if same title is used before using a shorter arrow function
    // const duplicateNotes = notes.filter((note) => note.title === title)

    // another way of doing it, is to use find() instead of filter()
    const duplicateNote = notes.find((note) => note.title === title)
    
    //debugger - used for debugging purposes

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// Function to save the notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Function to remove the notes
const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length !== notes.length){
    console.log(chalk.bold.inverse.green('Note removed!')) 
    saveNotes(notesToKeep)
    } else {
        console.log(chalk.bold.inverse.red('No note found!'))
    }
}

// Function to load the notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

// Function to List All Notes' Titles
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.italic.yellowBright('Your notes: '))
    notes.forEach((note) => {
        console.log('title is: ' + note.title)
    })
}

// Function to Read a Note by the Title
const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)
    if(findNote){
        console.log('The title is: ' + chalk.italic.green.inverse(findNote.title) + '. While the body is: ' + findNote.body)
    } else {
        console.log(chalk.red.inverse('No Note Found By the Title!'))
    }
}

// What do we want to export to app.js
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote 
}