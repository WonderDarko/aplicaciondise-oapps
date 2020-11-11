import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pictures: any[]= [
    {id: 1, url: '../assets/fashion/people-2603521_1280.jpg'},
    {id: 2, url: '../assets/fashion/girl-1828536_1280.jpg'},
  ];

  pictures2: any[]= [
    {id: 1, url: '../assets/fashion/StockSnap_MLKTKQ3YYF.jpg'},
    {id: 2, url: '../assets/fashion/StockSnap_LXEOAF38NZ.jpg'},
    {id: 3, url: '../assets/fashion/StockSnap_VD0V2OMVTJ.jpg'},
    {id: 4, url: '../assets/fashion/StockSnap_37CB0NNMNC.jpg'},
    {id: 5, url: '../assets/fashion/StockSnap_QJD07H2OJU.jpg'},
    {id: 6, url: '../assets/fashion/StockSnap_LI39BZMA3U.jpg'},
  ];

  pictures3: any[]= [
    {id: 1, url: '../assets/fashion/living-room-1872192_1920.jpg'},
    {id: 2, url: '../assets/fashion/StockSnap_HIH67XC5G0.jpg'},
    {id: 3, url: '../assets/fashion/washing-machine-2668472_1920.jpg'},
    {id: 4, url: '../assets/fashion/kitchen-2165756_1920.jpg'},
  ];

  pictures4: any[]= [
    {id: 1, url: '../assets/fashion/StockSnap_H2G3Y61IGJ.jpg'},
    {id: 2, url: '../assets/fashion/StockSnap_POB23XD1WR.jpg'},
  ];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2.5,
    spaceBetween: 20
  };

  purses: any[]= [
    {id: 1, url: '../assets/purses/bag-2873899_1280.jpg'},
    {id: 2, url: '../assets/purses/bag-3068441_1280.jpg'},
    {id: 3, url: '../assets/purses/leather-1175154_1280.jpg'},
    {id: 4, url: '../assets/purses/model-993911_1280.jpg'},
    {id: 5, url: '../assets/purses/online-shopping-2650383_1280.jpg'},
    {id: 6, url: '../assets/purses/purse-1031547_1280.jpg'},
  ];

  headsets: any[]= [
    {id: 1, url: '../assets/purses/headphones-592196_640.jpg'},
    {id: 2, url: '../assets/purses/headphones-690685_1280.jpg'},
    {id: 3, url: '../assets/purses/headphones-2789078_1280.jpg'},
    {id: 4, url: '../assets/purses/girl-869213_1280.jpg'},
    {id: 5, url: '../assets/purses/dj-4595492_640.jpg'},
  ];

  beauty: any[]= [
    {id: 2, url: '../assets/purses/hair-5473077_640.jpg'},
    {id: 3, url: '../assets/purses/lipstick-2726998_1280.png'},
    {id: 4, url: '../assets/purses/make-up-1209798_1280.jpg'},
    {id: 5, url: '../assets/purses/makeup-2454659_1280.jpg'},
  ];

  constructor() {}

}
