import { Observable } from "rxjs";

export function preInitalizer() {
    return new Observable((obs) => {
        console.log("In Observable");
        obs.next(1);
    }).subscribe();
}

export function sayHello() {
    return new Promise((resolve: any, reject) => {
        console.log("In intializer");
        resolve();
    });
}

export default { sayHello, preInitalizer };
