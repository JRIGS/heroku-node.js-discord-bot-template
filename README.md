



##



# **Discord Bot Template (Node.js build using Heroku)**
##

## Table of contents<img src="https://thumbs.dreamstime.com/b/checklist-icon-transparent-isolated-white-background-your-web-mobile-app-design-133862662.jpg" width="30" alt="accessibility text">

* [General Info](#General-Info)
* [Technologies](#Technologies)
* [Create/Add Bot](#Create/Add-Bot)
* [Setup](#Setup)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Conclusion](#Conclusion)

##

## General Info <img src="https://www.pngitem.com/pimgs/m/542-5427182_pencil-emoji-png-transparent-png.png" width="30" alt="accessibility text">
<p> If you have had difficulties learning how to host a discord bot using node.js with Heroku, then I have created a template that will hopefully help you host a discord bot 24/7 for free using heroku(550 free dyno hours each month)</p> 

##

## Technologies
#### Dependencies:

##### [discord.js Library (v13.3.1)](https://discord.js.org/#/)
##### [dotenv (v10.0.0)](https://www.npmjs.com/package/dotenv)

#### Engines:

###### [node (v17.2.0)](https://nodejs.org/en/about/)
###### [npm](https://docs.npmjs.com/)

##

# Start Here:

## Create/Add Bot <img src="https://www.vhv.rs/dpng/d/560-5605966_discord-bot-logo-discord-png-transparent-png.png" width="30" alt="accessibility text">

##### 1.) Create a new application @ https://discord.com/developers/applications
##### 2.) Go to Bot Tab and bring your app to life by adding a bot user
##### 3a.) Go to General information tab and copy your APPLICATION ID
##### 3b.) Head to https://discordapi.com/permissions.html select the permissions you want the bot to have
##### 3c.) Paste your APPLICATION ID in the CLIENT ID field to generate an invite link, click it and add the bot to a server

##

## Setup <img src="https://www.pngfind.com/pngs/m/48-486091_tools-icon-png-free-settings-cogwheels-transparent-png.png" width="25" alt="accessibility text">

##### Make sure you have the current version of [Node.js](https://nodejs.org/en/) installed then open terminal
##### Download the ZIP and delete the .git folder to create your own REPO or:
```
$ git clone https://github.com/JRIGS/heroku-node.js-discord-bot-template.git # or clone your own fork
$ cd heroku-node.js-discord-bot-template
$ npm install
```
##

## Testing <img src="https://www.pinclipart.com/picdir/big/534-5348075_transparent-cpr-clipart-testing-icon-png-download.png" width="25" alt="accessibility text">
#### To test if the bot is setup correctly follow these steps:
##### 1.) Return to your discord development portal and click the "bot" tab, reveal your token and copy it (Do not share this with anyone)
##### 2.) In your project access the .env file and edit CLIENT_TOKEN by pasting your token in the placeholder
######  (Example) CLIENT_TOKEN = 12K3NFI.12J9IO3KDNA.SPOE-NJKASNDON
##### 3.) File -> Save/Save All
##### 4.) $ node . (Launch node to verify bot is online)
##### 5.) If successful the console should log "Bot is online!"
##### *Delete your token from .env after testing, especially if you plan to host/publicize your work. Heroku provides Config Vars/Hidden Keys in deployment*

##

## Deployment <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/deploy_120090.png" width="30" alt="accessibility text">
##### 1.) Head to the [Heroku Website](https://id.heroku.com/login) to Sign up/Login
##### 2.) Access your app [dashboard](https://dashboard.heroku.com/apps) -> Navigate to the New tab -> Create new app -> Enter Name -> Create
##### 3.) In your new app head to the Deploy tab and then choose your deployment method. I will be using GitHub for this tutorial.
##### 4.) Connect to Github, Enable Automatic Deploys, Select the correct repository with the bot project on it, Deploy Branch
##### 5.) Although the app said it was successfully deployed it is not quite ready yet. By default Heroku will run a npm build when deployed, which will result in the bot crashing after a minute. The solution is in our [Procfile](https://devcenter.heroku.com/articles/procfile) file, this enables us to switch our build type in deployment.
##### 5a.) To make it run 24/7 head to your Resources tab in your Heroku App and edit the npm build switch off, and then enable our new worker "node index.js" on, this will prevent the crash that would regulary occur in the default npm build
##### 6.) You will need to create your own key which heroku provid to access your personalized token from discord.
##### Fields should be filled out as follows:
##### 6.)in your Heroku App navigate to Settings -> Config Vars -> Reveal Config Vars
##### Fields should be filled out as follows:
##### KEY = CLIENT_TOKEN
###### Or whatever you renamed it in the project on client.login()
##### VALUE = bot token generated from the discord developer portal
###### Refer to step 1 in Testing to find it again
##### Once fields are filled out, click the add button to confirm
##### 7.) To confirm the bot was successfully hosted, click the more button -> view logs
##### 7a.) If all the steps were followed correctly your app should redeploy and the log should look something like this:
```
2021-12-16T01:45:11.060451+00:00 heroku[worker.1]: State changed from crashed to starting
2021-12-16T01:45:13.369881+00:00 heroku[worker.1]: Starting process with command `node index.js`
2021-12-16T01:45:13.970939+00:00 heroku[worker.1]: State changed from starting to up
2021-12-16T01:45:14.743531+00:00 app[worker.1]: Bot is online! 
```
##

## Conclusion <img src="https://library.kissclipart.com/20191116/ryw/kissclipart-brain-icon-science-icon-29eedbb4529d8f94.png" width="30" alt="accessibility text">
######
##### Congratulations you have successfully hosted a discord bot 24/7 for free (550 free dyno hours each month), although the bot does not have any functions besides just running, it is a great place to start for new learners interested in developing discord bots.
