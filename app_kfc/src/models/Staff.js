import { Person } from "./Person";

export class Staff extends Person {
    constructor(id, name, firstname, age, profession){
        super(id, name, firstname, age);
        this.profession = profession
    }
}