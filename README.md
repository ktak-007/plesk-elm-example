# Develop Plesk Extension with elm

## How to start

1. Add extension's stub as usual
2. Go to the project dir: `cd <ext-dir>`
3. Add elm to the project: `yarn add elm --dev`
4. Init elm project: `yarn run elm init`
5. Create the directory for elm sources: `mkdir src/forntend`
6. Open elm.json and edit "source-directories" value to point to new frontend dir
7. Take a sample: https://guide.elm-lang.org
8. Make command to check Elm w/o Plesk integration: `yarn run elm make src/frontend/Main.elm --output=src/htdocs/js/main.js`
