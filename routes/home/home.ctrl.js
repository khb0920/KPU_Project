"use strict";

const User = require("../../models/User");


const output = {
    root: (req, res) => {
        
    },

    login: (req, res) => {
        
    },
    register: (req, res) => {
       
    },
};


const process = {
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

module.exports ={
   output,
   process,
};