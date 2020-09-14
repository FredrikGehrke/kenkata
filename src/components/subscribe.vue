<template>

    <div class="bg">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="text-black col-md-5 pt-5 pb-5">
                <h1 class="pr-2 font-weight-bold">SUBSCRIBE <span class="my-blue-color">NOW</span></h1>
                <p class="font-size">Signup for awesome news about our new products and 
                <br> know our special discounts on products.</p>
                <div class="input-group mb-3 position-relative">
                    <input type="text" class="form-control" placeholder="Enter email address" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <!-- <div class="input-group-append">
                        <button class="btn my-blue white" type="button">Subscribe</button>
                    </div> -->
                </div>
                <button class="btn my-blue white position-absolute" type="button">Subscribe</button>
            </div>
            <div class="col col-md-6">
                <img src="../assets/greyBGsub.png" alt="" class="img-fluid">
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

button {
    top: 165px;
    right: 19px;
}

input {
    border-radius: 50px;
}::placeholder {
    color: rgb(153, 153, 153) !important;
    font-size: 14px;
    margin-left: 2rem;
}

input.form-control {
    padding-left: 1rem;
}

.greyBG {
    background: #CCCCCC;
}

.btn {
    border-radius: 20px;
    padding: 3px 10px 3px 10px;
}

.font-size {
    font-size: 14px;
}
.bg {
    background-color: #F6F6F6;
}



</style>