<template>
    <div>
        <div class="greyBG">
            <header class="main-head container pt-4 pb-4">
                <div class="row">
                    <div class="col-4">
                        <h3 class="my-blue-color font-weight-bold">Shop</h3>
                        <p>Home / <span class="greyer">Shop</span></p>
                    </div>
                    <div class="col-3 text-white justify-content-end align-items-center d-none d-md-flex">
                        <p class="mb-0 blue-bg ">Show: 9 / <span class="my-blue-color">12</span> / 18 / 24</p>
                    </div>
                    <div class="col-6 col-md-2 text-white d-flex justify-content-end align-items-center">
                        <p class="mb-0 blue-bg-boxes"><i class="ml-2 fas fa-bars fa-2x"></i><i class="ml-2 fas fa-th-large fa-2x"></i><i class="ml-2 fas fa-th fa-2x my-blue-color"></i></p>
                    </div>
                    <div class="col-3 text-white justify-content-end align-items-center d-none d-md-flex">
                        <div class="dropdown blue-bg-sorting">
                            <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <p class="mb-0">Default sorting <i class="ml-5 fas fa-chevron-down smaller my-blue-color"></i></p>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Messy sorting</button>
                                <button class="dropdown-item" type="button">Alphabetical</button>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>


        <div class="wrapper container">

            <nav class="main-nav">
                <p class="my-blue-color font-weight-bold">Product Categories</p>
                <ul class="text-black">
                    <li class="d-flex justify-content-between">
                        <a href="" class="pl-0">Men's</a>
                        <span class="box">18</span>
                    </li>
                    <li class="d-flex justify-content-between mt-2">
                        <a href="" class="pl-0">Women's</a>
                        <span class="box">23</span>
                    </li>
                    <li class="d-flex justify-content-between mt-2">
                        <a href="" class="pl-0">Kids</a>
                        <span class="box">32</span>
                    </li>
                    <li class="d-flex justify-content-between mt-2">
                        <a href="" class="pl-0">Hats</a>
                        <span class="box">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-2">
                        <a href="" class="pl-0 my-blue-color">Sunglasses</a>
                        <span class="box bg-blue">15</span>
                    </li>
                    <li class="d-flex justify-content-between mt-2">
                        <a href="" class="pl-0">Shoes</a>
                        <span class="box">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-2">
                        <a href="" class="pl-0">Watches</a>
                        <span class="box">20</span>
                    </li>
                </ul>
                <form>
                    <div class="form-group">
                        <label for="formControlRange"><p class="my-blue-color font-weight-bold mt-5 mb-0">Filter by Price</p></label>
                        <input type="range" class="form-control-range" id="formControlRange">
                        <p>Price: $0 - $10,000 <button class="btn text-white font-weight-bold ml-4">Filter</button></p>
                    </div>
                </form>
                <p class="my-blue-color font-weight-bold mt-5">Filter by Color</p>
                <ul class="text-black">
                    <li class="d-flex justify-content-between">
                        <a href="" class="pl-0"><i class="fas fa-square"></i> Black</a>
                        <span class="box">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0"><i class="gray fas fa-square"></i> Gray</a>
                        <span class="box">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0"><i class="red fas fa-square"></i> Red</a>
                        <span class="box">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0"><i class="green fas fa-square"></i> Green</a>
                        <span class="box bg-blue">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0"><i class="orange fas fa-square"></i> Orange</a>
                        <span class="box">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0"><i class="brown fas fa-square"></i> Brown</a>
                        <span class="box">12</span>
                    </li>
                </ul>
                <p class="my-blue-color font-weight-bold mt-5">Filter by Size</p>
                <ul class="text-black">
                    <li class="d-flex justify-content-between">
                        <a href="" class="pl-0">XS</a>
                        <span class="box">18</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0">S</a>
                        <span class="box">23</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0">M</a>
                        <span class="box">32</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0">XL</a>
                        <span class="box bg-blue">12</span>
                    </li>
                    <li class="d-flex justify-content-between mt-1">
                        <a href="" class="pl-0">XXL</a>
                        <span class="box">15</span>
                    </li>
                </ul>
                <p class="my-blue-color font-weight-bold mt-5">Filter by Brand</p>
                <ul class="text-black">
                    <li class="d-flex justify-content-between">
                        <span class="small-img"><img src="@/assets/Bexim.png" alt="" width="70px" height="18px"></span>
                        <span class="small-img ml-4"><img src="@/assets/Lighton.png" alt="" width="70px" height="18px"></span>
                    </li>
                    <li class="d-flex justify-content-between">
                        <span class="small-img"><img src="@/assets/Dismis.png" alt="" width="70px" height="18px"></span>
                        <span class="small-img ml-4"><img src="@/assets/Rosimo.png" alt="" width="70px" height="18px"></span>
                    </li>
                    <li class="d-flex justify-content-between">
                        <span class="small-img"><img src="@/assets/Dallas.png" alt="" width="70px" height="18px"></span>
                        <span class="small-img ml-4"><img src="@/assets/Bexim.png" alt="" width="70px" height="18px"></span>
                    </li>
                </ul>
                <p class="my-blue-color font-weight-bold mt-5">Product Status</p>
                <ul class="text-black">
                    <li class="d-flex">
                        <a href="" class="pl-0"><i class="box-border far fa-square mr-1"></i> On Sale</a>
                    </li>
                    <li class="d-flex mt-1">
                        <a href="" class="pl-0"><i class="box-border far fa-square mr-1"></i> In Stock</a>
                    </li>
                </ul>
                <p class="my-blue-color font-weight-bold mt-5">Top Rated Products</p>   
                <div class="d-flex flex-row">
                    <div class="p-2 bg-grey">
                        <img src="@/assets/smallProduct.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="d-flex flex-column">
                            <div class="">Circle pattern girls....</div>
                            <div class="">                            
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="far fa-star my-blue-color"></i>
                            </div>
                            <div class="font-weight-bold">$190</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row mt-4">
                    <div class="p-2 bg-grey">
                        <img src="@/assets/smallProduct.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="d-flex flex-column">
                            <div class="">Circle pattern girls....</div>
                            <div class="">                            
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="far fa-star my-blue-color"></i>
                            </div>
                            <div class="font-weight-bold">$190</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row mt-4">
                    <div class="p-2 bg-grey">
                        <img src="@/assets/smallProduct.png" alt="">
                    </div>
                    <div class="p-2">
                        <div class="d-flex flex-column">
                            <div class="">Circle pattern girls....</div>
                            <div class="">                            
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="fas fa-star my-blue-color"></i>
                                <i class="far fa-star my-blue-color"></i>
                            </div>
                            <div class="font-weight-bold">$190</div>
                        </div>
                    </div>
                </div>

            
            </nav>
            <article class="content product-grid">

             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>
             <div class="item bg-grey mx-auto">
                <img class="hover-me product-image" src="@/assets/smallThumb.png" alt="" width="267.33px">
                <div class="new-box white">
                <p class="mb-0 pt-p">NEW</p>
                </div>                      
                <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="my-mt-box mr-auto ">
                    <p class="mb-2">Circle pattern girls shirt</p>
                    <p class="border pl-2 my-width-p">Fashion</p>
                    <p class="line-through mb-2">$200.00</p>
                    <h4 class="my-blue-color">$150.00</h4>
                    </div>
                    <div class="mr-4 mt-4 white-bg">
                    <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                    <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                    <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i></a>
                    </div>
                </div>
                </div>
                <p class="bgCBlue">Circle pattern girls shirt</p>
            </div>

            <div class="d-none d-xl-block">
                
            </div>

            <div class="justify-content-center align-items-center d-flex minus-margin">
                <i class="fas fa-chevron-left arrows"></i>
                <p class="mb-0 ml-3 mr-3">
                    <span class="mr-2">8</span>
                    <span class="my-blue-color ml-2 mr-2">9</span>
                    <span class="mr-2">10</span>
                    <span class="mr-2">...</span>
                    <span class="mr-2">24</span>
                    <span class="mr-2">25</span>
                    <span class="mr-1">26</span>
                </p>
                <i class="fas fa-chevron-right arrows"></i>
            </div>

            </article> 

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.minus-margin {
    margin-top: -12rem;
}

.arrows {
    font-size: 38px;
    font-weight: 100;
    border-radius: 50px;
    color: rgb(214, 214, 214); 
    padding: 12px 22px 12px 20px;
    border: 1px solid rgb(214, 214, 214);
} .arrows:hover {
    color: white;
    background: var(--ownBlue);
    cursor: pointer;
    border: 1px solid var(--ownBlue);
}

.product-image {
    margin: auto;
}

.my-mt-box {
    margin-top: 10rem;
}

.my-show {
    background-color: #0e153de5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: none;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}

.product-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 300px;
    gap: 20px;
}

.box-border {
    color: #AAAAAA;
}

.small-img {
    margin-top: 10px;
    border: 1px solid #E3E3E3;
    border-radius: 6px;
    padding: 2px 20px 6px 20px;
}

.gray {
    color: #E3E3E3;
}
.red {
    color: #FF2D2D;
}
.green {
    color: #64CB83;
}
.orange {
    color: #FFAA00;
}
.brown {
    color: #542323;
}

.btn {
    background: var(--ownBlue);
    padding: 0px 15px 0px 15px;
    border-radius: 20px;
}

.bg-blue {
    background: var(--ownBlue);
    color: white;
    border: 1px solid var(--ownBlue) !important;
}

a {
    text-decoration: none;
    color: black;
} a:hover {
    color: var(--ownBlue)
}

.box {
    border: 1px solid grey;
    border-radius: 6px;
    padding: 0 4px;
}

.blue-bg {
    background: #0E153D;
    border-radius: 8px;
    padding: 15px 20px 15px 20px;
}

.blue-bg-boxes {
    background: #0E153D;
    border-radius: 8px;
    padding: 10px 20px 10px 20px;
        width: 100%;
}

.blue-bg-sorting {
    background: #0E153D;
    border-radius: 8px;
    padding: 15px 30px 15px 30px;
    width: 100%;
}

.greyer {
    color: #AAAAAA;
}

.greyBG {
    background: #F6F6F6;
}
.wrapper {
    /* max-width: 1080px; */
    margin: 0 auto;
}

.wrapper > * {
    /* background-color: #ffec99; */
    border-radius: 5px;
    padding: 0px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.main-head {
    grid-area: header;
}
.content {
    grid-area: content;
}
.main-nav {
    grid-area: nav;
}


.wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-areas: 
            "header"
            "nav"
            "content"
}

@media (min-width: 500px) {
    .wrapper {
        grid-template-columns: 1fr 3fr;
        grid-template-areas: 
            "header  header"
            "nav     nav"
    }
    nav ul {
        display: flex;
        justify-content: space-between;
    }
}
@media (min-width: 700px) {
    .wrapper {
        grid-template-columns: 1fr 4fr;
        grid-template-areas: 
            "header header"
            "nav    content"
    }
    nav ul {
        flex-direction: column;
    }
}
@media (min-width: 1024px) {
    .product-grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media (min-width: 1200px) {
    .product-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}



</style>