import { formatDate } from '@angular/common';
export class Contacts {
  id: number;
  name: string;
  inCharge: string;
  cnpj: string;
  stateIdentifier: string;


  constructor(contacts) {
    {
      this.id = contacts.id ||'';
      this.name = contacts.name || '';
      this.inCharge = contacts.inCharge || '';
      this.cnpj = contacts.cnpj || '';
      this.stateIdentifier = contacts.stateIdentifier || '';
    }
  }

}
