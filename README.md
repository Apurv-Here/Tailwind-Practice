# Repository to pratice Tailwindcss concepts

# Tailwind CSS Setup



## Tailwind CSS setup to generate just the final css for hosting

### The main focus of this repository is just to get the css file for our html in one bundle - CSS/output.css


### Follow these steps to get started with tailwindcss:

1. Install node or npm globally.


2. Initialize the package.json file

```bash
npm init -y      
```

3. Install tailwind as a dev dependency and will create node modules folder which has all the dependencies and you can see that in your packagae.json in dev dependencies.

```bash
npm install -D tailwindcss      
```


4. Create the tailwind.config.js file

```bash
npx tailwindcss init     
```


5. We have to tell tailwind where to look for utility classes so we will change the content as content: ["*", "./src/backend/homepage.js"]. * means all and we have to specify to use tailwind css classes in our javascript files as well. We can specify certain folder only also according to our need. Eg:

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./src/backend/homepage.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}     
```

6. Create a input.css file in the source folder or root. This will be responsible just for the development and we have to generate the final file from this input file. Add these below lines in input.css. These are the layers of tailwind. The CLI will compile this file and it will also compile your custom css. 

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;  
```

7. Go to package.json and add the path to input.css wherever that is, can be in your root or src, give the whole relative path and it will generate a final css. 
npx tailwindcss -i ./src/frontend/CSS/input.css - This line will take input.css and compile the tailwindcss layers and all the utility classes and aslo all your custom css into the output.css which is denoted by - ./src/frontend/CSS/input.css -o ./CSS/output.css. 

```bash
"scripts": {
    "build": "npx tailwindcss -i ./src/frontend/CSS/input.css -o ./CSS/output.css",
    "watch": "npx tailwindcss -i ./src/frontend/CSS/input.css -o ./CSS/output.css --watch"
  }, 
```

OR

```bash
{
  "name": "tailwind-hosting",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "npx tailwindcss -i ./src/frontend/CSS/input.css -o ./CSS/output.css",
    "watch": "npx tailwindcss -i ./src/frontend/CSS/input.css -o ./CSS/output.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "tailwindcss": "^3.1.8"
  }
}
```

8. Create an index.html in root only. Include the output.css, i.e. /CSS/output.css

```bash
<link rel="stylesheet" href="/CSS/output.css"> 
```

9. Do the npm build

```bash
npm run build
```

10. To start working on your project do the npm run watch

```bash
npm run watch
```

11. Start the live server and you are good to go. Remember, /CSS/output.css is your main file which you have to include for hosting.
    




