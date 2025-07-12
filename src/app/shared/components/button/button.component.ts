import { Component } from '@angular/core';
import { ButtonService } from '../../../core/button-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  selected = false;
  background = 'default';

  constructor(private buttonService: ButtonService) {}

  onSelect() {
    console.log('onSelected');
    this.selected = this.canBeSelecred();
    if (this.selected) {
      console.log('dentro do IF');
      switch (this.buttonService.selectionGroup) {
        case 'gp1': {
          this.background = 'selected_g1';
          console.log('case1');
          break;
        }
        case 'gp2': {
          this.background = 'selected_g2';
          console.log('case2');
          break;
        }

        case 'gp3': {
          this.background = 'selected_g3';
          console.log('case3');
          break;
        }

        case 'gp4': {
          this.background = 'selected_g4';
          console.log('case4');
          break;
        }

        default: {
          this.background = 'default';
          break;
        }
      }
    }
  }

  canBeSelecred(): boolean {
    this.buttonService.buttonsSeleted++;
    console.log('botoes Selecionados', this.buttonService.buttonsSeleted);
    return this.buttonService.buttonsSeleted <= 4;
  }
}
