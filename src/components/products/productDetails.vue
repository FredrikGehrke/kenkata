<template>
    <div>
        <div class="bg-blue">
            <div class="container">
                <div class="pt-5 pb-5 text-white d-flex align-items-center justify-content-between">
                    <div class="my-blue-color">
                        <p class="mb-0">Home <span class="text-white">/</span> Shop <span class="text-white">/</span> Shoes <span class="text-white">/ Gents Blue Lightweight Trainers</span></p>
                    </div>
                    <div class="text-white justify-content-end align-items-center d-none d-md-flex">
                        <img class="white" src="@/assets/Bexim.png" alt=""  height="50px">
                        <p class="mb-0 ml-4"> <i class="fas fa-chevron-left fa-2x font-weight"></i> <i class="ml-2 fas fa-th-large fa-2x"></i> <i class="font-weight fas fa-chevron-right fa-2x ml-2"></i></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container text-black mt-5 pt-5">
            <div class="row">
                    <div class="d-flex flex-row">
                        <div class="p-2">
                            <img class="img-fluid gray" src="@/assets/bigShoe.png" alt="">
                        </div>
                        <div class="d-none d-md-flex flex-column">
                            <div class="pt-2"><img class="img-fluid gray" src="@/assets/smallShoe.png" alt=""></div>
                            <div class="pt-3"><img class="img-fluid gray" src="@/assets/smallShoe.png" alt=""></div>
                            <div class="pt-3"><img class="img-fluid gray" src="@/assets/smallShoe.png" alt=""></div>
                            <div class="pt-3"><img class="img-fluid gray" src="@/assets/smallShoe.png" alt=""></div>
                        </div>
                    </div>
                <div class="col pt-2">
                    <h3 class="my-blue-color">Gents Blue Lightweight Trainers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
                    <hr class="mt-4">
                    <div class="d-flex flex-row mt-4">
                        <h4 class="my-blue-color">$190.00</h4>
                        <div class="ml-3 line">$220.00</div>
                        <div class="ml-3"><img  class="img-fluid" src="@/assets/InStock.png" alt=""><span class="ml-2">In stock</span></div>
                    </div>
                    <div class="d-flex flex-row mt-3">
                        <button class="btn my-btn border-left">-</button>
                        <div class="quantity">3</div>
                        <button class="btn my-btn border-right">+</button>
                        <button class="btn my-blue text-white ml-5 addBtn"><i class="far fa-shopping-cart"></i> Add to cart</button>
                    </div>
                    <p class="mt-4">Category: <span class="my-blue-color">Shoes</span></p>
                    <div class="d-flex">
                        <p>Tags: </p>
                        <p class="my-border ml-3">Fashion</p>
                        <p class="my-border ml-3">Shoes</p>
                        <p class="my-border ml-3">Sneakers</p>
                    </div>
                    <div class="d-flex">
                        <p class="mb-0 mt-1">Share: </p>
                        <button class="media-buttons bg-insta-icon"><i class="fab fa-instagram"></i></button>
                        <button class="media-buttons bg-twitter-icon"><i class="fab fa-twitter"></i></button>
                        <button class="media-buttons bg-pinterest-icon"><i class="fab fa-pinterest"></i></button>
                        <button class="media-buttons bg-facebook-icon"><i class="fab fa-facebook-f"></i></button>
                        <button class="media-buttons bg-mail-icon"><i class="fas fa-envelope"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.bg-insta-icon {
    background-color: #3b5999;
}
.bg-twitter-icon {
    background-color: #619aee;
}
.bg-pinterest-icon {
    background-color: #d40808;
}
.bg-facebook-icon {
    background-color: #3f61f5;
}
.bg-mail-icon {
    background-color: #34c997;
}

.media-buttons {
    margin: 0 6px;
    padding-left: 5px;
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50px;
    color: white;
}

.my-border {
    border: 1px solid rgb(77, 77, 77);
    padding: 0 5px 0 5px;
}

.addBtn {
    border-radius: 20px;
    padding-left: 1rem;
    padding-right: 1rem;
}.addBtn:hover{
    color: black !important;
}

.quantity {
    border: 1px solid gray;
    padding: 5px 10px 5px 10px;
}

.border-left {
    border-radius: 6px 0 0 6px;
}
.border-right {
    border-radius: 0 6px 6px 0;
}

.my-btn {
    padding: 5px 10px 5px 10px;
    background: transparent;
    border: 1px solid gray;
}.my-btn:hover {
    background: var(--ownBlue);
    color: white;
    border: 1px solid var(--ownBlue);
}

.line {
    color: #AAAAAA;
    text-decoration: line-through;
}

img:hover {
    border: 1px solid var(--ownBlue);
}

.gray {
    background: #F6F6F6;
    border-radius: 6px;
    border: 1px solid #F6F6F6;
}

.font-weight {
    font-weight: 100;
}.font-weight:hover {
    color: var(--ownBlue);
}

.bg-blue {
    background: #0E153D;
}

.white{
    background: white;
    padding: 10px 20px 10px 20px;
    border-radius: 6px;
}

</style>