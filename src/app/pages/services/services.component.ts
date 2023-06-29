import { Component } from '@angular/core';
import { MasterService } from './service/master.service';

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
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  tableData: Order[] =[];
  sumData: Sum[] = [];
  cols: any[] =[];

  constructor () {
  }

  ngOnInit() {
    this.cols = [
      {
        field: 'id',
        header: ''
      },
      {
        field: 'description',
        header: 'Description'
      },
      {
        field: 'qty',
        header: 'Qty'
      },
      {
        field: 'unite',
        header: 'Unite'
      },
      {
        field: 'price',
        header: 'Price'
      },
      {
        field: 'discount',
        header: 'Discount'
      },
      {
        field: 'amount',
        header: 'Amount'
      },
      {
        field: 'subtotal',
        header: 'Subtotal'
      },
      {
        field: 'tax',
        header: 'Tax'
      },
      {
        field: 'total',
        header: 'Total'
      }
    ];
    this.tableData = [
      {
        id: 1,
        description:'Enclouser',
        qty: '2,480',
        unit: 'ea',
        price: '79.99 USD',
        discount: '0.00 USD 0.0%',
        amount: '198,375.20 USD'
      },
      {
        id: 2,
        description:'Enclouser',
        qty: '12',
        unit: 'ea',
        price: '79.99 USD',
        discount: '0.00 USD 0.0%',
        amount: '959.88 USD'
      },
      {
        id: 3,
        description:'Enclouser',
        qty: '1,480',
        unit: 'ea',
        price: '15.15 USD',
        discount: '0.00 USD 0.0%',
        amount: '22,422.00 USD'
      }
    ]
    this.sumData = [
    {
        subtotal: '221,757,08 USD',
        tax: '13.859.82 USD',
        total: '235,616,90 USD'
    }
  ]
  }

  private popupCenter(url: string, title: string, w: number, h: number) {
    // Fixes dual-screen position                             Most browsers      Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, title,
      `
      ModalPopUp,
      scrollbars=no,
      resizable=no,
      width=${w / systemZoom},
      height=${h / systemZoom},
      top=${top},
      left=${left},
      modal=yes
      `
    )
    newWindow?.focus();
    return newWindow;
  }


  public Print(html: string) {
    var win = window.open();
    win?.document.write(html);

    var document_focus = false; 
    setTimeout(function () {
      win?.window.print();
      win?.window.close();
    }, 650);
  }

  public printLayer1(htmlString: string) {
    let generator = this.popupCenter('#', 'printWindow', 950, 700);
    //window.open(",'printWindow',",'_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no, left=50%, width=900, height=700, visible=none');
    generator?.document.write(htmlString);
    setTimeout(function () {
      generator?.document.close();
      generator?.print();
      generator?.close();
    }, 2750);
  }

}

