<template>
    <div>
        <div class="margin">
            <div class="row black">
                <div class="col col-sm-6 col-md-6 col-xl mb-3">
                    <div class="d-flex flex-row bd-highlight pt-3 bg my-hover">
                        <div class="pl-4 pr-3 pt-3 bd-highlight">
                            <img src="../assets/Box.png" alt="">
                        </div>
                        <div class="p-2 bd-highlight">
                            <div class="my-blue-color font-weight-bold">
                                <h6>Free Shipping</h6>
                                <p class="black font-weight-normal mt-2">For a local customer, we provide free shipping facility</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-6 col-md-6 col-xl mb-3">
                    <div class="d-flex flex-row bd-highlight pt-3 bg my-hover">
                        <div class="pl-4 pr-3 pt-3 bd-highlight">
                            <img class="" src="../assets/24icon.png" alt="">
                        </div>
                        <div class="p-2 bd-highlight">
                            <div class="my-blue-color font-weight-bold">
                                <h6>24/7 support</h6>
                                <p class="black font-weight-normal mt-2">For any inquiry, we are available 24 hours every day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-6 col-md-6 col-xl mb-3">
                    <div class="d-flex flex-row bd-highlight pt-3 bg my-hover">
                        <div class="pl-4 pr-3 pt-3 bd-highlight">
                            <img src="../assets/paymentIcon.png" alt="">
                        </div>
                        <div class="p-2 bd-highlight">
                            <div class="my-blue-color font-weight-bold">
                                <h6>Online payment</h6>
                                <p class="black font-weight-normal mt-2">You can pay quickly and easily with our online payment system </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-6 col-md-6 col-xl mb-3">
                    <div class="d-flex flex-row bd-highlight pt-3 bg my-hover">
                        <div class="pl-4 pr-3 pt-3 bd-highlight">
                            <img src="../assets/Outline.png" alt="">
                        </div>
                        <div class="p-2 bd-highlight">
                            <div class="my-blue-color font-weight-bold">
                                <h6>Fast delivery</h6>
                                <p class="black font-weight-normal mt-2">We understand your urgency and we deliver in a fast way</p>
                            </div>
                        </div>
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

.my-hover:hover {
    color: white !important; 
} 

.my-hover:hover { background-color: #20D3C2; }
.my-hover:hover h6, .my-hover:hover p { color: white; }
.my-hover:hover img { filter: brightness(0) invert(1)}

.hover-color:hover {
    color: white !important;
}

.margin {
    margin-right: 30px;
    margin-left: 30px;
}

.bg {
    background-image: url('../assets/shortRectangle.png');
    border-radius: 12px;
}

p {
    font-size: 14px;
}

.black {
    color: black;
}


@media (min-width: 1600px) { 

    .margin {
        margin-right: 9rem;
        margin-left: 9rem;
    }

}

</style>
