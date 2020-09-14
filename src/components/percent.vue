<template>

    <div class="bg">
        <div class="container my-d-flex d-flex justify-content-between align-items-center">
            <div class="left bg-blue text-center px-5 text-white">
                <h1><strong>30%</strong> <small class="font-weight-bold">OFF</small></h1>
                <p class="font-size">FOR NEW CUSTOMER</p>
                <button class="btn my-btn">SHOP INFO</button>
            </div>
            <div class="right col-md-5 text-white">
                <p>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
                <button class="btn WHITE-BTN">LEARN MORE</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.left {
    padding: 7rem 0;
}

.right p {
    font-size: 14px;
}

.font-size {
    font-size: 14px;
}
.bg {
    background-color: #CCCCCC;
}

.bg-blue {
    background-color: var(--ownBlue);
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
    color: var(--darkerBlue);
}

</style>