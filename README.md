# microFrontEnd-ReactJs-SingleSpa
build micro frontEnd ReactJs App using Single-Spa

This App contain 5 Applications:
1. container-app
2. nav-bar-app
3. app-page-one
4. app-page-two
5. app-page-three

stepBystep create microFrontEnd-React-app using single-spa:
1. create Directory microFrontEnd-app
    
            npx create-single-spa
          
2. create container app:
      select "single-spa root config "
      
3. create 4 microFrontEnd apps:
      select "single-spa application/parcel"
4. assemble all the app together, in the container app open index.ejs

              <script type="systemjs-importmap">
                  {
                    "imports": {
                      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.5/lib/system/single-spa.min.js",
                      "react": "https://unpkg.com/react@16/umd/react.production.min.js",
                      "react-dom": "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
                      "react-router-dom": "https://unpkg.com/react-router-dom@5.2.0/umd/react-router-dom.min.js"
                    }
                  }


               <script type="systemjs-importmap">
                  {
                    "imports": {
                      "@thiethaa/root-config": "//localhost:9000/thiethaa-root-config.js",
                      "@thiethaa/nav-bar": "//localhost:9001/thiethaa-nav-bar.js",
                      "@thiethaa/page-one": "//localhost:9002/thiethaa-page-one.js",
                      "@thiethaa/page-two": "//localhost:9003/thiethaa-page-two.js",
                      "@thiethaa/page-two": "//localhost:9004/thiethaa-page-three.js"
                    }
                  }
              </script>


5. run the applications
    container : 
            
                npm start
    navbar:
              
                npm start -- --port 9001
   
    app-page-one:
              
                npm start -- --port 9002
   
    app-page-two:
              
                npm start -- --port 9003
    
   app-page-three:
              
                npm start -- --port 9004
