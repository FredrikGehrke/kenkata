<template>
<div class="bg-blue text-white text-center">
    <div class="container pb-5">
        
        <carousel class="carousel mx-auto position-relative mt-5 pt-3" :margin="15" :autoplay="true" :nav="false" :autoplayHoverPause="true" :responsive="{0:{items:1}}"> 

            <div class="w-auto">
                <div class="mb-5 pt-1 d-flex justify-content-center">
                    <img src="../assets/Quote.png" style="width:10%">
                </div>
                <div class="mb-4 pt-1 d-flex justify-content-center">
                    <img src="../assets/testimonial.png" style="width:20%">
                </div>
                <div class="d-flex justify-content-center mt-3 mb-4">
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="far fa-star my-blue-color"></i>
                </div> 
                <h5 class="my-blue-color">Tommy Mattin-Lassei</h5>
                <p class="smaller">CEO, ABB.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br>
                and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            </div>
            
            <div class="w-auto">
                <div class="mb-5 pt-1 d-flex justify-content-center">
                    <img src="../assets/Quote.png" style="width:10%">
                </div>
                <div class="mb-4 pt-1 d-flex justify-content-center">
                    <img src="../assets/testimonial.png" style="width:20%">
                </div>
                <div class="d-flex justify-content-center mt-3 mb-4">
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="far fa-star my-blue-color"></i>
                </div> 
                <h5 class="my-blue-color">Tommy Mattin-Lassei</h5>
                <p class="smaller">CEO, ABB.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br>
                and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            </div>

            <div class="w-auto">
                <div class="mb-5 pt-1 d-flex justify-content-center">
                    <img src="../assets/Quote.png" style="width:10%">
                </div>
                <div class="mb-4 pt-1 d-flex justify-content-center">
                    <img src="../assets/testimonial.png" style="width:20%">
                </div>
                <div class="d-flex justify-content-center mt-3 mb-4">
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="fas fa-star my-blue-color"></i>
                    <i class="far fa-star my-blue-color"></i>
                </div> 
                <h5 class="my-blue-color">Tommy Mattin-Lassei</h5>
                <p class="smaller">CEO, ABB.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br>
                and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            </div>

            <template slot="next">
                <span class="next position-absolute border px-3 rounded-circle d-none d-lg-block"><i class="fas fa-angle-right"></i></span>
            </template>
            <template slot="prev">
                <span class="prev position-absolute border px-3 rounded-circle d-none d-lg-block"><i class="fas fa-angle-left"></i></span>
            </template>

        </carousel>

    </div>
</div>
    
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    components: {
        carousel
    }
}
</script>

<style scoped>

.bg-blue {
    background-color: #0e153de5;
}

</style>