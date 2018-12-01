#Geektrust: A golden crown

This repo hosts the solution for Geek Trust problem, A Golden Crown from A Tame of thrones.
The problem statement can be found [here.](https://www.geektrust.in/coding-problem/backend/tame-of-thrones)

##How to run
The solution is published in npm registry in the name `gt-golden-crown`.

[Link to the NPM home page can be found here](gt-golden-crown)


The script can be run by
```
npx gt-golden-crown send-messages
```
Which will basically reads the user input and sends the messages to each kingdom provides the result.

### For development
Install dependencies:
```
npm install
```
To run tests:
```
npm run test
```
To run the program locally
```
npm link
npm link gt-golden-crown
npm gt-golden-crown send-messages
```

**NOTE:** Required node version: >=9.3.0

##Sample Input Output
```
Who is the ruler of Southeros?
Ouput: None
Allies of Ruler?
Output: None
Input Messages to kingdoms from King Shan:
Input: Air, “oaaawaala”
Input: Land, “a1d22n333a4444p”
Input: Ice, “zmzmzmzaztzozh”
Who is the ruler of Southeros?
Output: King Shan
Allies of Ruler?
Output: Air, Land, Ice
```

###Todo:

[ ] Check for repeated characters from the emblem in the message.
