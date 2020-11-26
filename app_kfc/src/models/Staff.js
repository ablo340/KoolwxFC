import { Person } from "./Person";

export class Staff extends Person {
    constructor(name, firstname, age, profession){
        super(name, firstname, age);
        this.profession = profession
    }
}