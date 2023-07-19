# Welcome to uniplugger-example

This project shows a simple use case for the Uniplugger library

# Install

Just clone or downlod the project.
Then navigate to the folder, and `npm install`

# How to Use

Navigate to the folder, then `npm run start`
This will build and launch the example application, and you will see the output from the two plugins.

## Quick Overview

At a minimum, there are generally 3 parts to a plugin arcitecture:

1. **The main application.** This is your main application that will use the plugins. The plugins will be discovered and loaded at run time when specified.
2. **The plugin.** This is the piece of functionality that is abstracted out of the application for use.
3. **The contract.** Your application needs to know what your plugin is offering, and your plugin needs to agree to provide the specifies functionality.

> Take a look at the [uniplugger](https://github.com/bradws/uniplugger) project if you want to dive a little deeper.

# Feedback Welcome

Thoughts, comments, bugs & feature requestes are welcome :)
