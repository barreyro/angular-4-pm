import { Component } from '@angular/core';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent {
  pageTitle: string = 'Charity List';
  products: any[] = [
    {
        "productId": 1,
        "charityName": "Project Hope",
        "productCode": "WA-0048",
        "dateAdded": "November 05, 2017",
        "description": "Health and hope for tomorrow",
        "score": 93.20,
        "starRating": 4.0,
        "imageUrl": "http://m4health.pro/wp-content/uploads/blue-Project-HOPE-logo.jpg"
    },
    {
        "productId": 2,
        "charityName": "Direct Relief",
        "productCode": "CA-0023",
        "dateAdded": "October 12, 2017",
        "description": "Deliver a world of good",
        "score": 100.00,
        "starRating": 4.0,
        "imageUrl": "https://www.directrelief.org/content/uploads/DirectRelief_Logomark_RGB.png"
    }
  ];
}
