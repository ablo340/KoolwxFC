import { Person } from "./Person";

export class Player extends Person {
    constructor(name, firstname, age, position, team){
        super(name, firstname, age);
        this.position = position;
        this.team = team
    }
}