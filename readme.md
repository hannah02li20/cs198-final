TO CONNECT TO MONGODB

1) open a new terminal
2) type "mongosh"

3) open another terminal
4) go to mongodb, database, connect
5) choose connect with mongodb shell
6) copy the string they give, for me it's
        mongosh "mongodb+srv://cluster0.ln4upv6.mongodb.net/myFirstDatabase" --apiVersion 1 --username hannah02li20
        and replace the databse name with test, so:
        mongosh "mongodb+srv://cluster0.ln4upv6.mongodb.net/test" --apiVersion 1 --username hannah02li20
        and use your own username
7) copy mongosh "mongodb+srv://cluster0.ln4upv6.mongodb.net/test" --apiVersion 1 --username hannah02li20 into the terminal and hit enter

8) open another new terminal
9) run node index.js

10) go to postman
11) POST localhost:4000/user/signup
        with 
    {
    "username":"bob",
    "email":"bob@gmail.com",
    "password":"bob123"
    }

    in the body
    
11) it should work now