import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService {
    backendUrl = 'https://agular-tutorial.firebaseio.com/data';

    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        //return this.http.post(this.backendUrl, servers, { headers: headers });
        return this.http.put(this.backendUrl, servers, { headers: headers });
    }

    getServers() {
        return this.http.get(this.backendUrl).map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FETCHED' + server.name;
                }
                return data;
            }).catch((error: Response) => {
                return Observable.throw('Something went wrong');
            });
    }

    getAppName() {
        return this.http.get('https://agular-tutorial.firebaseio.com/appName.json').map(
            (response: Response) => {
                return response.json()
            }
        );
    }
}