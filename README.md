![](https://github.ccs.neu.edu/yifandai/TeamForWeb/blob/master/images/LOGO.png)

https://power-image.herokuapp.com/

# PowerImage
This repository contains the source code and content for powerImage public website.

# Description: 
Our group decided to build a website that can deal with several image processing works. We will make an interface for every users who want to process his/her images and they do not need to write any code but can just use it by push some bottons. We can offer the service such as: Add/Remove mosaic blur from the original images, classify large amount of image dataset, etc. We will use what we learn from the CS5610 to build the website and the database itself. And the image processing method we will use our own knowledge from deep learning or machine learning.

# Test our website on your local machine:
Install MongoDB with Homebrew
```
brew install mongodb
```
Clone the repo and build on your local machine:
```
git clone https://github.ccs.neu.edu/yifandai/TeamForWeb.git
npm install
ng build
```
Run mongodb:
```
sudo mongod
```
Run server:
```
node server.js
```
Finally, you can open the browser and go to: 
```
localhost:3000
```
