//Import DotEnv module to load environment variables from a .env file.
require("dotenv").config();

//Import the Node Path module that allows to interact with file paths more easily.
const path = require("path");

//Import express framework to build the application.
const express = require("express");

//Import the Object Document Mapping(ODM) mongoose.
const mongoose = require("mongoose");

//Import helmet to secure the Express application by creating various http headers.
const helmet = require("helmet");

//Import the Cors package for providing a connect/express middleware.
const cors = require("cors");
