import { Pipe, PipeTransform } from '@angular/core';

// Hands-On 3: Custom Pipe with PipeTransform
// CreditSuffixPipe appends 'credit(s)' to a number
// Usage: {{ course.credits | creditSuffix }}
// Output: "4 credits" or "1 credit"
@Pipe({
  name: 'creditSuffix',
  standalone: true
})
export class CreditSuffixPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1) {
      return `${value} credit`;
    }
    return `${value} credits`;
  }
}
