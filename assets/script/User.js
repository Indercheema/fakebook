'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

class User {
    #id;
    #name;
    #userName;
    #email;
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id;
    }
    set id(val){
        this.#id = val;
    }

    get name(){
        return this.#name;
    }
    set name(val){
        this.#name = val;
    }
    get userName(){
        return this.#userName;
    }
    set userName(val){
        this.#userName = val;
    }
    get email(){
        return this.#email;
    }
    set email(val){this.#email = val;
    }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }
    get pages(){
        return this.#pages;
    }
    set pages(val){
        this.#pages = val;
    }

    get groups(){
        return this.#groups;
    }
    set groups(val){
        this.#groups = val;
    }
    get canMonetize(){
        return this.#canMonetize;
    }
    set canMonetize(val){
        this.#canMonetize = true;
    }

    getInfo() {
        return `Name: ${this.name} Id: ${this.id} Username: ${this.userName}; Email: ${this.email}; My Pages: ${this.pages.length}; My Groups: ${this.groups.length}; canMonetize = ${this.canMonetize} `;
    }

}

 export { User, Subscriber };