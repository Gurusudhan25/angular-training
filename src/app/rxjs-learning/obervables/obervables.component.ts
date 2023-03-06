import { Component, OnInit } from "@angular/core";
import { Observable, map } from "rxjs";

@Component({
    selector: "app-obervables",
    templateUrl: "./obervables.component.html",
    styleUrls: ["./obervables.component.scss"],
})
export class ObervablesComponent implements OnInit {
    public page$: Observable<number> = new Observable();
    public users: number[] = [];

    ngOnInit() {
        this.page$ = new Observable((observer) => {
            try {
                observer.next(1);
                observer.complete();
            } catch {
                observer.error("Something went wrong");
            }
        });
    }

    subscribeToPage() {
        this.page$.subscribe((users: number) => {
            this.users.push(users);
        });
        this.page$.subscribe({
            next(value: number) {
                console.log(value);
            },
            error(err) {
                console.error("something wrong occurred: " + err);
            },
            complete() {
                console.log("done");
            },
        });
        this.page$
            .pipe(map((val: number) => val + 1))
            .subscribe((userNumber) => {
                console.log(userNumber);
            });
    }
}
