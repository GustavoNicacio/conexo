import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  selectionGroup = 'gp1';
  buttonsSeleted = 0;
  constructor() {}
}
