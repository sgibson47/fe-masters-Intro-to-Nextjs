// this config file doesn't get complied by Babel, so we can't use import statements
// use require() instead 
const { PHASE_DEVELOPMENT_SERVER} = require('next/constants')

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
        return {
            // spread the default
            ...defaultConfig,
            // then add any modifications you'd like
            // e.g. 
            // webpack: {
            //     plugins: [new BundleAnalyzerPlugin()]
            //   }
            // then next will merge your stuff
            // Scott encourages us to not modify arguments in JS in general
        };
    }

    return defaultConfig;
}

