# LIVE News App in Next.js 13

* Next.js 13 has so many new features one of the new ones useRouter in come from ```"next/navigation" ``` do not use next.js 12 router here it will affect the code. 

* Here we use to get data from the database using Graphql query so we package ```npm i graphql-request``` also you want package ```npm i graphql```

## Mediastack

* mediastack gives you a free news api.
    - it gives you 500 free API so you can get them from there for testing purposes.

## StepZen

* this middleware gives a connection between graphql so much easier.

* In here you want to install stepzen to your terminal add globally 
    -this is the one you want to run
```bash
npm install -g stepzen
````
    -  login your account it gives by stepzen guide 
    -  then copy the api from dashboard
    -  after that run ```stepzen init``` in your root directory terminal it will create stepzen config file for you.
    -
*  go to your stepzen account and gets your RestAPI added command.
    - this is a command ``` stepzen import curl ``` paste it your terminal.
    - then it asked the endpoint to connect to your stepzen (MediaStack url)
    - page the below URL to your terminal and accept another thing that they asked of you.
    ```http://api.mediastack.com/v1/news ? access_key = YOUR_ACCESS_KEY```
    - also you can add some option parameter there if you add those to filter out the data
    - after running the command on terminal to start stepzen ```stepzen start```

