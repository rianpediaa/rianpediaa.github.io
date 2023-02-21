/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

ProdukArray =[
  {
    "img":"",
    "produk":"Unchek GG",
    "harga":"Rp1.000-Rp20.000"
  },
  {
    "img":"",
    "produk":"Web Phising",
    "harga":"Rp2.000-Rp20.000"
  },
  {
    "img":"",
    "produk":"Jasteb Fresh",
    "harga":"Rp4.000-Rp20.000"
  },
  {
    "img":"",
    "produk":"Script Web P No Whm",
    "harga":"Rp10.000"
  }
]

//console.log(ProdukArray.length)

for (let i = 0; i < ProdukArray.length; i++) {
  console.log(ProdukArray[i]['produk'])
  
  document.getElementById("produk").innerHTML +=`<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${ProdukArray[i]['produk']}</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    <!-- Product price-->
                                    ${ProdukArray[i]['harga']}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="https://wa.me/6285701449359/?text=*Assalamualaikum*,bang mau beli *${ProdukArray[i]['produk']}*">Beli Sekarang</a></div>
                            </div>
                        </div>
                    </div>`
}