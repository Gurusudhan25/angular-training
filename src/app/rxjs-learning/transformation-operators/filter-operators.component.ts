/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from "@angular/core";
import { interval, Observable, of } from "rxjs";
import {
    bufferCount,
    bufferTime,
    bufferToggle,
    bufferWhen,
    pluck,
    reduce,
} from "rxjs/operators";

export interface IData {
    name: string;
    age: number;
}

@Component({
    selector: "app-filter-operators",
    templateUrl: "./filter-operators.component.html",
    styleUrls: ["./filter-operators.component.scss"],
})
export class TransformationComponent {
    //buffer count
    buffercount() {
        const number$: Observable<number> = interval(1000);
        number$.pipe(bufferCount(3)).subscribe(console.log);
    }

    //Buffertime
    bufferTime() {
        const number$: Observable<number> = interval(1000);
        number$.pipe(bufferTime(5000)).subscribe(console.log);
    }

    //BufferToggle
    bufferToggle() {
        const openingInterval$ = interval(2000);
        const closingInterval$ = () => {
            return interval(3000);
        };
        const number$: Observable<number> = interval(1000);
        number$
            .pipe(bufferToggle(openingInterval$, closingInterval$))
            .subscribe(console.log);
    }

    //BufferWhen
    bufferWhen() {
        const when = () => interval(5000);
        const number$: Observable<number> = interval(1000);
        number$.pipe(bufferWhen(when)).subscribe(console.log);
    }

    //pluck operator
    pluck() {
        const source: Observable<IData> = of(
            { name: "gurusudhan", age: 21 },
            { name: "Ravi", age: 21 }
        );
        source.pipe(pluck("name")).subscribe(console.log);
    }

    reduce() {
        const source = of(1, 2, 3, 4);
        const summ = source.pipe(reduce((acc, curr) => acc + curr));
        summ.subscribe(console.log);
        source.subscribe(console.log);
    }
}
