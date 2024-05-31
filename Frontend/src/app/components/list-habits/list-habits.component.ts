import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HabitService } from '../../services/habit.service';
import { habit } from '../../interfaces/habit';

@Component({
  selector: 'app-list-habits',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-habits.component.html',
  styleUrls: ['./list-habits.component.css']
})
export class ListHabitsComponent implements OnInit{
 
  habits: habit[] = [];
  errorMessage: string = '';

  constructor(private habitService: HabitService) { }

  ngOnInit(): void {
    this.habitService.getHabits().subscribe(
      (data: habit[]) => {
        this.habits = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}

