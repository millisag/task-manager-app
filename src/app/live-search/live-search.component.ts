import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-live-search',
  imports: [],
  templateUrl: './live-search.component.html',
  styleUrl: './live-search.component.css'
})
export class LiveSearchComponent {
searchQuery = signal('');
names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

get filteredNames() {
}
}