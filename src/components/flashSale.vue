<template>
    <div class="bg">
        <div class="container d-xl-flex justify-content-between align-items-center pb-5">
            <div class="left bg-blue text-center px-5 pt-5 text-white ">
                <h1><strong>FLASH</strong><br><strong>SALE</strong></h1>
                <p class="font-size">UP TO 50% OFF</p>
            </div>
            <div class="right col-md-12 col-xl-6 text-white text-center d-flex m-right p-md justify-content-center">
                <div class="d-flex flex-column">
                    <div class="d-flex">
                        <div class="d-md-flex">
                            <div class="my-circle mr-md-4 mt-md-4">
                            <h2 class="my-blue-color mb-0 mt-3">7</h2>
                            <p class="black mb-3">Days</p>
                            </div>
                            <div class="my-circleBig mt-3 mt-md-4">
                            <h2 class="my-blue-color mb-0 mt-3">23</h2>
                            <p class="black mb-3">Hours</p>
                            </div>
                        </div>
                        <div class="ml-4 d-md-flex">
                            <div class="my-circleBig mr-md-4 mt-md-4">
                            <h2 class="my-blue-color mb-0 mt-3">46</h2>
                            <p class="black mb-3">Minutes</p>
                            </div>
                            <div class="my-circleBig mt-3 mt-md-4">
                            <h2 class="my-blue-color mb-0 mt-3">12</h2>
                            <p class="black mb-3">Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div>                    
                        <button class="btn WHITE-BTN mt-4">SHOP NOW</button>
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

.my-circle {
    background: white;
    width: 95px;
    border-radius: 100px;
    border: 2px dotted var(--ownBlue);
}

.my-circleBig {
    background: white;
    width: 95px;
    border-radius: 100px;
    border: 2px dotted var(--ownBlue);
}

.black {
    color: black;
}

.left {
    padding: 7rem 0;
}

h1 {
    font-size: 50px;
}

.right p {
    font-size: 14px;
}

.font-size {
    font-size: 22px;
    font-weight: 600;
}
.bg {
    background-color: var(--darkerBlue);
}

.bg-blue {
    background-image: url('../assets/flashSale.png');
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
}

.WHITE-BTN {
    color: var(--ownBlue);
    font-weight: 600;
}

.my-btn {
    background-color: var(--darkerBlue);
    color: white;
    font-weight: 600;
    border-radius: 30px;
    padding: 8px 20px 8px 20px;
}
.my-btn:hover {
    background-color: white;
    color: #0E153D;
}

</style>