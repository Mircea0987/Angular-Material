import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatCardModule,
  MatExpansionModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
