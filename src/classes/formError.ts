export default class FormError{
  isError: boolean;
  testoError: boolean;
  testoErrorMsg: string;
  priorityError: boolean;
  priorityErrorMsg: string;
  constructor() {
    this.isError = false;
    this.testoError = false;
    this.testoErrorMsg = 'Inserisci una descrizione.';
    this.priorityError = false;
    this.priorityErrorMsg = 'Inserisci un numero compreso tra 1 e 5.';
  }
}
