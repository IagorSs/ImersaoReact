# IR FLIX

## Project build in ImersaoReact by Alura

## Prerequisites

### Node.JS

You can download and install in [this link](https://nodejs.org/en/download/).

### Yarn

For this program I use Yarn, but the package.json also accepts npm if you prefer and have more experience.

Download and install Yarn by [this link](https://classic.yarnpkg.com/en/docs/install/)

## Installing

* Copy this repositorie with `$ git clone https://github.com/IagorSs/ImersaoReact.git`
* Open the folder in command prompt with `$ cd ImersaoReact`
* Execute the command `$ yarn` and wait the installation finish

## Available Scripts

To run the complete application, with local JSON database and website, you can run:

'''
yarn dev
'''

This command run and open the application in [http://localhost:3000](http://localhost:3000)<br/>
The database will run in [http://localhost:8080](http://localhost:8080) (this is not acessible directly, just with path /videos or /categorias)<br/>
The changes adding videos or categories will be maintained in JSON local database, to reset you can copy the content in 'src/data/seed_db.json' to db.json

In the project directory, in addition to the script above, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
