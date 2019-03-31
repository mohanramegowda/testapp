import { Pipe } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Pipe({
    name: "authentication",
    pure: false
})

export class AuthenticationPipe {

    constructor(
        private authenticationService: AuthenticationService
    ) {

    }

    transform(
        value: string,
        fallback: string,
        forceHttps: boolean = false
    ): string {
        if (this.authenticationService.currentUserValue) {
            // authorised so return true
            return "Logout";
        }
        return "Sign in/Register";
    }
}