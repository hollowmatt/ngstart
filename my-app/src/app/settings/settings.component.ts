import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports: [FormsModule],
})

export class SettingsComponent {
  settingOne = "peanut butter";
}