import { Component } from "@angular/core";
import { catchError, map, Observable, of, retry, throwError } from "rxjs";

@Component({
    selector: "app-error-handling",
    templateUrl: "./error-handling.component.html",
    styleUrls: ["./error-handling.component.scss"],
})
export class ErrorHandlingComponent {
    catchError() {
        const errorObs = throwError("This is error Observale");
        const handleError = errorObs.pipe(
            catchError(() => of("Error handled here"))
        );
        handleError.subscribe((data) => {
            console.log(data);
        });
    }

    simpleCatchError() {
        const dataSource = of(1, 2, 3, 4, 5);
        dataSource
            .pipe(
                map((n) => {
                    if (n == 5) throw "Error";
                    return n;
                }),
                catchError((data) => of("five"))
            )
            .subscribe((data) => {
                console.log(data);
            });
    }

    retryError() {
        const just: Observable<number> = of(1, 2, 3, 4);
        just.pipe(
            map((n) => {
                if (n === 4) throw "Error";
                return n;
            }),
            retry(1)
        ).subscribe({
            next(data) {
                console.log(data + "...");
            },
            error(data) {
                console.log(`${data} Retried 1 time couldn't get it`);
            },
        });
    }
}
