import { Person } from "./Person";

export class Player extends Person {
    constructor(id, name, firstname, age, position, team){
        super(id, name, firstname, age);
        this.position = position;
        this.team = team
    }
}