import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TaxResult {
    annualTaxAmount: number;
}

@Injectable({
    providedIn: 'root',
})
export class TaxService {
    private apiUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    calculateTax(income: number): Observable<TaxResult> {
        return this.http.post<TaxResult>(`${this.apiUrl}/api/tax/calculate`, { income });
    }
}
