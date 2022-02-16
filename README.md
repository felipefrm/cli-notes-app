<h1 align="center"> 
  CLI Notes App
</h1>

<p align="center">
  <a href="#about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How To Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-contribute">How To Contribute</a>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/felipe-melo-a78504186/">
    <img alt="Made by felipefrm" src="https://img.shields.io/badge/made%20by-felipefrm-%2304D361">
  </a>
</p>

<a id="about"></a>

## 💬 About 

The CLI Notes App is a command line based note-taking application developed during <a href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/">The Complete Node.js Developer Course</a> on Udemy Platform. The project was built using yargs, this package helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

<a id="technologies"></a>

## 🧰 Technologies and tools
This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Yargs](http://yargs.js.org/)
- [Validator](https://www.npmjs.com/package/validator)

<a id="how-to-run"></a>

## :information_source: How To Run

```sh
  # Clone this repository
  $ git clone https://github.com/felipefrm/cli-notes-app.git

  # Go into the repository
  cd cli-notes-app

  # install dependencies
  $ npm install

  # add a new note
  $ node app.js add --title "note title here" --body "note body here"

  # remove a note
  $ node app.js remove --title "note title here"

  # list all notes
  $ node app.js list

  # read the body of a specific note
  $ node app.js read --title "note title here"

  # get help
  $ node app.js --help
```

<a id="how-to-contribute"></a>

## 🤔 How to contribute

-  Make a fork;
-  Create a branch with your feature: `git checkout -b my-feature`;
-  Commit changes: `git commit -m 'feat: My new feature'`;
-  Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

<h4 align="center">
    Made by  <a href="https://www.linkedin.com/in/felipe-melo-a78504186/" target="_blank">Felipe Melo</a>
</h4>