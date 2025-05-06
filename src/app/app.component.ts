import { Component } from '@angular/core';
import {TaxResult, TaxService} from "./tax-service.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  income: number = 0;
  calculatedTax: number | null = null;

  constructor(private taxService: TaxService) {}

  public onIncomeChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.income = Number(inputElement.value);
  }

  public calculate(): void {
    this.taxService.calculateTax(this.income).subscribe((result: TaxResult) => {
      this.calculatedTax = result.annualTaxAmount;
    });
  }
}
