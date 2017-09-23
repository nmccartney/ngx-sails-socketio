import { SailsResponse, SailsInterceptorInterface } from "ngx-sails-socketio";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements SailsInterceptorInterface {

    constructor(private router: Router) {
    }

    canIntercept(response: SailsResponse): boolean {
        console.log("Auth: ", response);
        // Try playing with the return value
        return false;
    }
}
