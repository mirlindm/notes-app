# notes-app
Developed a simple application called "notes-app", which serves to store, remove, list all and specific notes in and from the data store, respectively. The application is built using Node.js only (including several NPM Packages , Node core modules as well as my own file).)

Instructions on how to run the application:

- Clone the repo to your local machine
- Open the notes-app folder in any editor or IDE (I used Visual Studio Code for development purposes)

- run the following command: node app.js
- In order to add a new note, run the command: node app.js add -title="Test Title" --body="Test Body"
- In order to remove an existing note, run the command: node app.js remove --title="Test Title"
- In order to list all the notes, run the command: node app.js list
- In order to read or list a specific note by the title, run the command: node app.js read --title="Test Title" (need to add a new note, since we have removed by running the remove command on the second step)


In case any of the npm packages is not loading, then you need to install them individually. The npm packages I used are: chalk, yarg, nodemon, validator.
All latest versions of the npm packages are used. They can be downloaded/installed from this website: https://www.npmjs.com/

Thank you!
