/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from "@angular/core";
import {
    AsyncSubject,
    BehaviorSubject,
    ReplaySubject,
    Subject,
    interval,
} from "rxjs";
import { scan, map, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: "app-subjects",
    templateUrl: "./subjects.component.html",
    styleUrls: ["./subjects.component.scss"],
})
export class SubjectsComponent {
    //No defualt value is there so subscribers get value after value emitt
    subject() {
        const source: Subject<number> = new Subject();
        source.next(12); //This value is emmitted before subscribing so it is not taken
        source.subscribe(console.log);
        source.subscribe(console.log);
        source.next(2);
        source.subscribe(console.log);
        source.next(1);
    }

    //It has one defualt value which the first subscriber get as value
    behaviourSubject() {
        const source: BehaviorSubject<number> = new BehaviorSubject(1);
        source.subscribe(console.log);
        source.next(2);
        source.subscribe(console.log);
        source.next(3);
        source.subscribe(console.log);
    }

    //The emitted values are replayed until the next emittion
    replaySubject() {
        const source: ReplaySubject<number> = new ReplaySubject();
        source.next(1);
        source.next(2);
        source.subscribe(console.log);
        source.subscribe(console.log);
        source.next(3);
        source.subscribe(console.log);
    }

    /*In this Subject subscriber gets value only when the 
    subject gets complete and emits only the last emiited val */
    asyncSubject() {
        const source: AsyncSubject<number> = new AsyncSubject();
        source.next(1);
        source.subscribe(console.log);
        source.next(2);
        source.subscribe(console.log);
        source.complete();
    }

    scanOperator() {
        let final = {};
        const subject = new Subject();
        subject
            .pipe(scan((acc, curr) => Object.assign({}, acc, curr), {}))
            .subscribe((data) => (final = data));
        subject.next({ name: "Joe" });
        subject.next({ age: 30 });
        subject.next({ favoriteLanguage: "JavaScript" });
        console.log(final);
    }

    just() {
        const scanObs = interval(1000)
            .pipe(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                scan((acc: any, curr: any) => [curr], []),
                map((r) => r[Math.floor(Math.random() * r.length)]),
                distinctUntilChanged()
            )
            .subscribe(console.log);
    }
}
