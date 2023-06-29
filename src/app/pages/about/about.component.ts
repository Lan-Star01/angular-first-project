import { Component } from '@angular/core';


interface Order {
  id?: number;
  description?: string;
  qty?: string;
  unit?: string;
  price?: string;
  discount?: string;
  amount?: string;
}
interface Sum {
  subtotal?: string;
  tax?: string;
  total?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


}
