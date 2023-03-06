import { Component } from "@angular/core";
import { fromEvent, interval, Observable } from "rxjs";
import {
    buffer,
    bufferCount,
    bufferTime,
    bufferToggle,
    bufferWhen,
} from "rxjs/operators";

@Component({
    selector: "app-filter-operators",
    templateUrl: "./filter-operators.component.html",
    styleUrls: ["./filter-operators.component.scss"],
})
export class TransformationComponent {
    //Buffer
    buffer() {
        const number$: Observable<number> = interval(1000);
        const showData = fromEvent(document.getElementById("button")!, "click");
        number$.pipe(buffer(showData)).subscribe(console.log);
    }

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
        const openingInterval$ = interval(5000);
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
}
