import { Component } from "@angular/core";
import { fromEvent, Observable, interval, of, from, timer } from "rxjs";
import {
    debounce,
    distinctUntilChanged,
    filter,
    take,
    takeUntil,
    throttleTime,
    audit,
    skip,
    skipUntil,
    skipWhile,
} from "rxjs/operators";

@Component({
    selector: "app-filtering-operators",
    templateUrl: "./filtering-operators.component.html",
    styleUrls: ["./filtering-operators.component.scss"],
})
export class FilteringOperatorsComponent {
    debounce() {
        const source$: Observable<number> = interval(1000);
        source$
            .pipe(debounce((value) => interval(value * 200)))
            .subscribe(console.log);
    }

    distinctUntil() {
        const source$: Observable<number> = of(1, 2, 3, 3, 4, 4, 5, 1, 3, 3, 6);
        source$
            .pipe(distinctUntilChanged())
            .subscribe((data) => console.log(data));
    }

    SimpledistinctUntil() {
        const source$: Observable<number> = of(1, 2, 13, 3, 4, 44, 5, 11);
        source$
            .pipe(
                distinctUntilChanged((prev: number, curr: number) => {
                    return 1 === curr - prev;
                })
            )
            .subscribe((data) => console.log(data));
    }

    filter() {
        const arrayVal: number[] = [1, 3, 4, 6, 5, 2, 18, 15];
        const source$: Observable<number> = from(arrayVal);
        source$
            .pipe(filter((data) => data % 2 === 0))
            .subscribe((data) => console.log(data));
    }

    take() {
        const source$ = of(2, 3, 4, 5, 6, 7, 8);
        source$.pipe(take(2)).subscribe(console.log);
    }

    takeUntil() {
        const source$ = interval(1000);
        source$.pipe(takeUntil(timer(5000))).subscribe(console.log);
    }

    throttleTime() {
        const source$ = interval(1000);
        source$.pipe(throttleTime(5000)).subscribe(console.log);
    }

    audit() {
        const clicks: Observable<number> = interval(100);
        clicks
            .pipe(audit(() => interval(1000)))
            .subscribe((x) => console.log(x));
    }

    skip() {
        const source$ = of(1, 2, 3, 4, 5, 6);
        source$.pipe(skip(2)).subscribe(console.log);
    }

    skipUntil() {
        const source$ = interval(1000);
        source$.pipe(skipUntil(timer(3000))).subscribe(console.log);
    }

    skipWhile() {
        const source$ = interval(1000);
        source$.pipe(skipWhile((val) => val < 5)).subscribe(console.log);
    }
}
