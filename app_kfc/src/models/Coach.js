import { Staff } from "./Staff";

export class Coach extends Staff {
    constructor(name, firstname, age, profession, teams){
        super(name, firstname, age, profession);
        this.teams = teams
    }
}