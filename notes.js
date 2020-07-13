const chalk = require('chalk');
const fs = require('fs')

const addNote = function (title, body) {
  
    const notes = loadNotes() 

    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } 
    else {
        console.log(chalk.red.inverse("Note already added!"))
    }

}

const removeNote = title => {

    const notes = loadNotes()

    const noteToRemove = notes.find(note => note.title === title)
     
    if (noteToRemove) {
        notes.splice(notes.indexOf(noteToRemove), 1)
        saveNotes(notes)
        console.log(chalk.green.inverse(`Note "${title}" was removed.`))
    } 
    else {
        console.log(chalk.red.inverse("There's no note with this title."))
    }
}

const listNotes = () => {

    const notes = loadNotes()
    
    console.log(chalk.inverse("Listing all your notes..."))
    notes.forEach(note => console.log(`Title: ${note.title}`));
}

const readNote = (title) => {

    const notes = loadNotes()

    const noteToShow = notes.find(note => note.title === title)

    if (noteToShow) {
        console.log(chalk.inverse(`${noteToShow.title}`) + `\n${noteToShow.body}`)
    }

    else {
        console.log(chalk.red.inverse("No note found."))
    }

}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}