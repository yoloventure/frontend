# Yolo Web App

# Conventions
Variables are camelCased.
File and folder names start with small letters eg: "routes/home.js"
For custom styling (i.e. not using bootstrap) class names for elements must be snake_cased and prefixed by the folder and file name eg: "route_home_button". This is because all css files and jsx files are bundled together when the app is built.

# Pre Requisites

1. NPM and NodeJS

# Getting Start

1. clone the repository in your host
   Just For Frontend:
2. cd into the the project react folder (frontend/client)
3. run the command "npm i"
4. run the command "npm start" to run just the frontend.
   Backend: (You all should do both upper and lower steps)
5. cd into the the project root folder (frontend)
6. run the command "npm i"
7. run the command "npm run dev". Server will run on localhost:5000 by default. Open the frontend port, usually localhost:8080, if it does not open automatically.

# Creating Pull Requests

1. git fetch origin master
2. **If conflicts then fix them and then,**
3. git add .
4. git commit -m "some-message"
5. git push (updates your local branch)
6. Go to github.com/yoloventure/frontend and visit your branch.
7. Create a pull request using the online interface.
8. If there are merge conflicts resolve them online, or resolve locally and push to your branch again. 
9. Wait for heruko auto-deployment to complete and view it to check if the features you added work correctly. 
