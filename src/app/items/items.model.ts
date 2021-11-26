import { formatDate } from '@angular/common';
export class Items {
  id: number;
  code:number;
  description: string;
  measurementUnit: string;
  value: Float32Array;
  supplierId: number;
  supplier:string;
  minQuantity: number;


  constructor(items) {
    {
      this.id          = items.id||'';
      this.code        = items.code||'';
      this.description = items.description ||'';
      this.measurementUnit = items.measurementUnit || '';
      this.value = items.value || '';
      this.supplierId = items.supplierId || '';
      this.minQuantity = items.minQuantity || '';
      this.supplier          = items.supplier||'';
    }
  }

}
