import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [FormsModule, CommonModule],
})

export class SettingsComponent {
  shouldDisplay = true;
}