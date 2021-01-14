# TDMS Demo Installation

This repository contains example of a TDMS installation directory. You can use it as a template when installing TDMS on your computer.

## Directory structure

#### application.properties

Main Spring Boot configuration of the application.

#### \stages

Stores known staging databases. They can be managed from the GUI.

#### \plugins

Contains plugins that will be loaded during startup. Each plugin is a jar containing extensions of TDMS functionality. Read more about extension development [here](https://github.com/imolcean/tdms). Plugin JARs should be placed in subdirectory \bin, while extension configs (optional) should go to \config.

#### \generation\lib

Contains so-called value libraries that can be used during generation process. Each value library is a JSON-serialised object. Value libraries can be accessed from Formula Generation Method, some of them (value lists) can also be used in Value List Generation Method.

#### \generation\script

JavaScript code that can be called from Formula Generation Method. This is useful when there is a generation script that is used often and you don't want to write it every time. Note that snippets should be stored as .js files.

#### \projects

Stores existing TDMS projects. Every project is stored in a separate subdirectory containing at least two elements:

1. Project descriptor (.tdm.json file). It contains information about internal databases, preselected extensions, schema update changelog location and data directory. Project descriptor can be created and modified from the GUI.
2. Data directory. Directory where data will be exported and from where it will be imported.
3. (Optional) Changelog directory. Directory where schema changelogs will be stored. Please note that there should be one main changelog that imports all the others. This main one should be pointed to from the project descriptor.
