const express = require('express')
const app = express()
// parse server and dashboard
var ParseServer = require('parse-server').ParseServer;
var api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
    cloud: './cloud/main.js', // Path to your Cloud Code
    appId: 'myAppId',
    masterKey: 'myMasterKey', // Keep this key secret!
    fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});
//
var ParseDashboard = require('parse-dashboard');
var dashboard = new ParseDashboard({
    "apps": [
      {
        "serverURL": "http://localhost:1337/parse",
        "appId": "myAppId",
        "masterKey": "myMasterKey",
        "appName": "MyApp"
      }
    ]
});
app.use('/dashboard', dashboard);
//

app.use(express.urlencoded())
// simple request
app.get('/', function (req, res) {
  res.send('Hello World')
})
 

app.post('/api/signup', (req, res) => { // req.body = { username: 'ali', pass: 'thisispass' }
    console.log(req.query);
    var p1 = signUp(req.query.email, req.query.password);
    p1.then(value => {
        res.status(201).send({"message": "user has been created."}); // Success!
      }, reason => {
        let header_status = 400;
        if (reason.code==202) {
            header_status = 409;
        } else if (reason.code == 125) {
            header_status == 400;
        }
        res.status(header_status).send(reason); // Error!
    });

    
})



async function signUp(mail, userpass) {
    //check pass len
    if(userpass.length < 5) {
        let messageErr = {code:125 ,message:"filed `password`.length should be gt 5"};
        return Promise.reject(messageErr);
    }

    Parse.User.enableUnsafeCurrentUser()
    const user = new Parse.User();
    user.set("username", mail);
    user.set("email", mail);
    user.set("password", userpass); //"my pass" thisispass
    

    // other fields can be set just like with Parse.Object
    //user.set("phone", "415-392-0202");
    try {
        await user.signUp();
        return "Hooray! Let them use the app now.";
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        let messageErr = {code:error.code ,message:error.message};
        return Promise.reject(messageErr);
    }

}

async function signin(username, userpass) {
    if(false) { // todo username is not email
        let messageErr = {code:201 ,message:"filed `email` is not valid"};
        return Promise.reject(messageErr);
    } else if (false) { //todo request length
        let messageErr = {code:201 ,message:"Request Length should be 2"};
        return Promise.reject(messageErr);
    }
    Parse.User.enableUnsafeCurrentUser()
    try {
        const user = await Parse.User.logIn(username, userpass);
        return user.getEmail();
    } catch (error) {
        // Show the error message somewhere and let the user try again.
        let messageErr = {code:error.code ,message:error.message};
        return Promise.reject(messageErr);
    }
    
}

app.post('/api/signin', (req,res) =>{
    console.log(req.query);
    var p1 = signin(req.query.email, req.query.password);
    p1.then(value => {
        // todo token
        res.send(value); // Success!
      }, reason => {
          console.log(reason);
        let header_status = 400;
        if (reason.code==201) {
            header_status = 400;
        } else if (reason.code == 101) {
            header_status == 401;
        }
        res.status(header_status).send(reason); // Error!
    });

})

app.post('/api/getuser', (req,res) =>{
    const currentUser = Parse.User.current();
    if (currentUser) {
        console.log('herreee');
        res.send(currentUser);
    } else {
        console.log('not herreee');
        res.send('no user');
    }

})




app.listen(3000)