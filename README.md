# redoodle
Implement a basic copy of Doodle as a Django + ReactJS exercise.


## Run project:

This project uses ReactJS and SASS, each of which needs a pre-processor. Below are instructions for one potential development workflow in Visual Studio Code:


### First time: 

1. Install the Babel pre-processor (For ReactJS, compile JSX to JS):

In redoodle/ :
npm install babel-cli@6 babel-preset-react-app@3

2. Install the Live Sass Compiler VSC extension (compile SCSS to CSS):
https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass


#### For each Django app:

1. Under static/[app name] create src/jsx, src/scss, out/css, out/js folders for raw and compiled JS(X) and S(CSS) files respectively.

2. Configure the Live Sass Compiler extension:

*In the app folder* (not the redoodle project folder) add a .vscode folder, and inside the folder a settings.json file with the content below, where [app name] was replaced appropriately in the savePath setting.

{
  "liveSassCompile.settings.formats":[
     {
         "format": "expanded",
         "extensionName": ".css",
         "savePath": "/static/[app name]/out/css"
     }
 ],
 "liveSassCompile.settings.excludeList": [
    "**/node_modules/**",
    ".vscode/**"
 ],
 "liveSassCompile.settings.generateMap": true,
 "liveSassCompile.settings.autoprefix": [
     "> 1%",
     "last 2 versions"
 ]
}

### Each time working on a specific Django app:

1. Start the Django server:

*In the project folder*:
python3 manage.py runserver

2. Start the Babel pre-processor (JSX -> JS):

*In the project folder*:
npx babel --watch [app name]/static/[app name]/src/jsx --out-dir [app name]/static/[app name]/out/js --presets react-app/prod 

e.g. 
npx babel --watch polls/static/polls/src/jsx --out-dir polls/static/polls/out/js --presets react-app/prod 

3. Open *the app folder* (not the redoodle project folder) in VSC

4. Start the SASS pre-processor (SCSS -> CSS):
In the bottom ribbon of VSC click "Watch Sass"





