import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaxService } from './tax-service.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let mockTaxService: jasmine.SpyObj<TaxService>;

    beforeEach(async () => {
        mockTaxService = jasmine.createSpyObj('TaxService', ['calculateTax']);
        mockTaxService.calculateTax.and.returnValue(of({ annualTaxAmount: 1000 }));

        await TestBed.configureTestingModule({
            declarations: [AppComponent],
            providers: [{ provide: TaxService, useValue: mockTaxService }],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the component', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')).toBeTruthy(); // Adjust the selector based on your template
    });
});
