# Yolo Web App

# Conventions
1. Variables are camelCased.
2. File and folder names start with small letters eg: "routes/home.js"
3. For custom styling (i.e. not using bootstrap) class names for elements must be snake_cased and prefixed by the folder and file name eg: "route_home_button". This is because all css files and jsx files are bundled together when the app is built.

# Pre Requisites

1. NPM and NodeJS

# Getting Start
(Note: When I say root folder I mean the highest level of the project in which you can see a client folder, and the server.js file)

1. Go to a convenient place in your computer and create an empty folder. 
2. Open your terminal (command line) with the path set inside this new folder. 
3. Use "git init" 
4. Then clone the repository using "git clone {$repository_link}"
##   Setting up the Frontend:
5. cd into the the project react folder (root/client)
6. run the command "npm i"

##   Setting up the Backend: 
8. cd into the the project root folder (frontend)
9. run the command "npm i"

# Running the project
## Just the front-end
Run the command "npm start" in the frontend/client folder to run just the frontend.
 
## Just the back-end
Run the command "npm start" in the root folder

## Run back-end and front-end concurrently
Run the command "npm run dev" in the root folder. Server will run on localhost:5000 by default. Open the frontend port, usually localhost:8080, if it does not open automatically.

# Creating Pull Requests

1. git fetch origin master
2. **If there are merge conflicts then fix them before proceeding**
3. git add .
4. git commit -m "some-message"
5. git push (updates your local branch)
6. Go to github.com/yoloventure/frontend and visit your branch.
7. Create a pull request using the online interface.
8. If there are merge conflicts resolve them online, or resolve locally and push to your branch again. 
9. Wait for heruko auto-deployment to complete and view it to check if the features you added work correctly. 

# Solutions to common set-up issues:
1. If you run into a "unable to resolve dependency tree" error during your npm installation, try to run "npm install --legacy-peer-deps" instead.
