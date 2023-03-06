import { Component, OnInit, Output } from "@angular/core";
import {
    Observable,
    from,
    of,
    defer,
    generate,
    fromEvent,
    interval,
    range,
    timer,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

@Component({
    selector: "app-creation-operators",
    templateUrl: "./creation-operators.component.html",
    styleUrls: ["./creation-operators.component.scss"],
})
export class CreationOperatorsComponent implements OnInit {
    public url = "https://63fa2035473885d837d8e04b.mockapi.io/listdata";
    public userData$: Observable<any> = ajax(this.url);
    public userData2$: Observable<any> = ajax.getJSON(this.url);
    @Output() public data: any;

    showajaxdata() {
        this.userData$.subscribe((value) => {
            console.log(value.status);
        });
    }
    showajaxdata2() {
        this.userData2$.subscribe((value) => {
            value.forEach((val: any) => {
                console.log(val.name);
            });
        });
    }
    ngOnInit(): void {
        //emits values of any type
        const source = of({ name: "Brian" }, [1, 2, 3], function hello() {
            return "Hello";
        });
        //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
        const subscribe = source.subscribe((val) => console.log(val));
    }

    //Observable that emits number for certain interval
    public usersActive$: Observable<number> = new Observable(
        (observer: any) => {
            let i = 1;
            const interval = setInterval(() => {
                observer.next(i);
                i = i + 1;
            }, 1000);

            return () => clearInterval(interval);
        }
    );

    logNumbers() {
        const subs = this.usersActive$.subscribe((data: any) => {
            console.log(data);
        });
        setInterval(() => {
            subs.unsubscribe();
        }, 11000);
    }

    // From Operator for array
    public arrayNumber = [2, 4, 6, 8, 10];
    public arraySource = from(this.arrayNumber);

    fromOperatorArray() {
        this.arraySource.subscribe((data) => {
            console.log(data);
        });
    }

    // From Operator for primse
    public promise: Promise<string> = new Promise((res, rej) => {
        try {
            res("Resolved");
        } catch {
            rej("Rejected");
        }
    });
    public promiseSource: Observable<string> = from(this.promise);

    fromOperatorPromise() {
        this.promiseSource.subscribe((data: string) => {
            console.log(data);
        });
    }

    //defer operator
    public deferPractice1 = of(new Date().toTimeString());

    public deferPractice2 = defer(() => of(new Date().toTimeString()));

    defer() {
        this.deferPractice1.subscribe((data) => {
            console.log("This is of operator data time object", data);
        });
        this.deferPractice2.subscribe((data) => {
            console.log("This is defer operator data time object", data);
        });
    }

    //fromEvent Operator
    fromEvent() {
        const source = fromEvent(document, "click");
        source
            .pipe(
                map((event) => {
                    console.log(`${event.timeStamp}`);
                })
            )
            .subscribe();
    }

    //Generate Operator
    generate() {
        const twoTable = generate(
            1,
            (s) => s <= 10,
            (s) => s + 1,
            (s) => s * 2
        ).subscribe(console.log);
    }

    //interval operator
    interval() {
        const intervalSource = interval(1000);
        const intervalsData = intervalSource.subscribe((data) => {
            console.log(data);
        });
        setInterval(() => {
            intervalsData.unsubscribe();
        }, 10000);
    }

    //Range Operator
    range() {
        const rangeSource = range(1, 10);
        rangeSource.subscribe((data) => {
            console.log(data * 9);
        });
    }

    //Timer Operator
    timer() {
        const timerSource = timer(1000);
        const timerSource2 = timer(1000, 2000);
        timerSource.subscribe((data) => {
            console.log(data);
        });
        const timerData = timerSource2.subscribe((data) => {
            console.log("In timesource 2", data);
        });
        setInterval(() => {
            timerData.unsubscribe();
        }, 10000);
    }
}
