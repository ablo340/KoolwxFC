import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const url = "http://localhost:8081/";

export default function getAllTeams(){
    var response;
    ajax.getJSON(url)
        .pipe(
            map(response => response),
            catchError(error => of(error)
            )
    );
    return response;
} 