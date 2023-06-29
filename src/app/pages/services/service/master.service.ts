import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  orderInfo = [
    {
      'Description': 'Enclouser',
      'Qty': '2,480',
      'Unite': 'ea',
      'price': '79.99 USD',
      'discount': '0.00 USD 0.0%',
      'lineAmount': '198,375.20 USD'
    },
    {
      'Description': 'Enclouser',
      'Qty': '12',
      'Unite': 'ea',
      'price': '79.99 USD',
      'discount': '0.00 USD 0.0%',
      'lineAmount': '959.88 USD'
    },{
      'Description': 'Binding posts',
      'Qty': '1,480',
      'Unite': 'ea',
      'price': '15.15 USD',
      'discount': '0.00 USD 0.0%',
      'lineAmount': '22,422.20 USD'
    }
    
  ]

  constructor() { }

  GetOrderData(){
    return this.orderInfo;
  }
}
