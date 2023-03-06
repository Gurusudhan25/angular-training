import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TransformationComponent } from "./filter-operators.component";

describe("FilterOperatorsComponent", () => {
    let component: TransformationComponent;
    let fixture: ComponentFixture<TransformationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TransformationComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TransformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
