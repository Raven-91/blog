import {Component, inject, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  private loaderService: LoaderService = inject(LoaderService);
  isShowed: boolean = false;

 ngOnInit(): void {
   this.loaderService.isShowed$.subscribe((isShowed: boolean): void => {
     this.isShowed = isShowed;
   })
 }
}
