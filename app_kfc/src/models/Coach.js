import { Staff } from "./Staff";

export class Coach extends Staff {
    constructor(id, name, firstname, age, profession, teams){
        super(id, name, firstname, age, profession);
        this.teams = teams
    }
}