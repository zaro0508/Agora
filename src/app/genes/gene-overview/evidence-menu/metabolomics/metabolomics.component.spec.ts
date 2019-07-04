import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {
    GeneServiceStub,
    ChartServiceStub,
    ApiServiceStub,
    ActivatedRouteStub,
    mockInfo1,
    mockMetabolomics
} from '../../../../testing';

import { MetabolomicsComponent } from './metabolomics.component';
import { MoreInfoComponent } from '../../../../dialogs/more-info';

import { ApiService, GeneService } from '../../../../core/services';

import { MockComponent } from 'ng-mocks';

describe('Component: Metabolomics', () => {
    let component: MetabolomicsComponent;
    let fixture: ComponentFixture<MetabolomicsComponent>;
    let apiService: ApiServiceStub;
    let activatedRoute: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MetabolomicsComponent,
                MockComponent(MetabolomicsComponent)
            ],
            // The NO_ERRORS_SCHEMA tells the Angular compiler to ignore unrecognized
            // elements and attributes
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ApiService, useValue: new ApiServiceStub() },
                { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
                { provide: GeneService, useValue: new GeneServiceStub() }
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(MetabolomicsComponent);

        apiService = fixture.debugElement.injector.get(ApiService);
        activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
        activatedRoute.setParamMap({ id: mockInfo1.hgnc_symbol });

        component = fixture.componentInstance; // Component test instance
        component.metabolomics = mockMetabolomics;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});