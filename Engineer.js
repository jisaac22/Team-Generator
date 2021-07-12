// require employee class for extension
const Employee = require('./Employee');

class Enginer extends Employee {
    constructor (name, id, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return Enginer.name;
    }
};

module.exports = Enginer;