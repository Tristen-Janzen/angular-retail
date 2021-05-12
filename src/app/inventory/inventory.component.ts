import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from '../model/product';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  //products$ : Observable<Product[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

      //this.products$ = this.http.get<Product[]>('/api/inventory');

  }

}
