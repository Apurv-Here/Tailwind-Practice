# Website Link - 

# Repository to pratice Tailwindcss concepts

# Tailwind CSS Setup



```bash
  npm init -y      // This initializes the directory as a node project
```
```bash
  npm install -D tailwindcss postcss autoprefixer vite      // Installs required packages
```
```bash
  npx tailwindcss init -p
```
```bash
  Create a CSS file "input.css" and add it to your html and also add these lines in css
  
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
```bash
  In your tailwind.config.js replace content[], with content["*"]
```
```bash
  remove "test": "echo \"Error: no test specified\" && exit 1" and
  add 
  "start": "vite",
  "build": "vite build" 
  in script tag in package.json
```
```bash
  npm run build      // This create a dest folder with index.html 
  and asset, use this dest folder to host the site
```




## Documentation

    


