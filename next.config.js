// this config file doesn't get complied by Babel, so we can't use import statements
// use require() instead 
const { PHASE_DEVELOPMENT_SERVER} = require('next/constants')

// Plugins!
// generally named with____
// usually you will use them by wrapping your config object with the plugin
// e.g. 
//  const withSass = require('@zeit/next-sass')
//  module.exports = withSass(config)
// may have some arguments before, but almost always takes the config obj b/c this file has to return a config object

// Environemnt variables without plugins
// create a file called '.env' on the root of your directory
// then add .env to your .gitignore file so the info in it doesn't get checked into github
// then in this file: 
// module.exports ={
//     env:{
//         SECRET: -- here we'd load up the .env file
//     }
// }


// We'll use plugins to avoid the manual work of loading env vairable here and to keep our env variables secret
// we'll use 2 plugins next-env and dotenv-load (yarn add next-env dotenv-load --dev (load as a dev dependency b/c it's only going to be used for building))
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

// looks for a .env file, grabs every env variable in there, and injects them into the environment
dotenvLoad()

// creates the plugin with the now available environemtn variables injected into it
const withNextEnv = nextEnv()

// But what if I want to use multiple plugins? use withPlugins
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
// then wrap the dcongif object you return in withPlugins like this:
// module.exports = withPlugins([
//     withSass,
//     withNextEnv
//   ], config)
// it takes in 2 args -- 1) an array of plugins, 2) a config object



module.exports = (phase, {defaultConfig}) => {
    // phase is the current context in which the configuration is loaded
    // There are 4 Phases:
    // PHASE_EXPORT -- 
    // PHASE_PRODUCTION_BUILD -- 
    // PHASE_PRODUCTION_SERVER -- when it's live running on the prod server
    // PHASE_DEVELOPMENT_SERVER -- when you're developing 

    // this code will run when Next is running a dev server, i.e. when you run yarn dev
    if(phase === PHASE_DEVELOPMENT_SERVER){
        console.log("I'm in dev mode");

        // If you want a different config for this phase, 
        // you'd return your altered config object here
        return withPlugins(
            [ withNextEnv, withSass ],
            {...defaultConfig,
            // spread the default
            // then add any modifications you'd like
            // Scott encourages us to not modify arguments in JS in general
            }
        )
    }

    return withPlugins(
        [ withNextEnv, withSass ],
        {...defaultConfig}
    );
}

