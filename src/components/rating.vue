<template>
<div class="bg-blue text-white text-center">
    <div class="container pb-5">
        <div class="owl-container pt-3">
            <div class="owl-carousel owl-theme owl-loaded owl-drag" id="owl2">
                <div class="owl-stage-outer">
                    <div class="owl-stage">
                        <div class="owl-item">

                            <div class="item">
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

                        </div>
                        <div class="owl-item">

                            <div class="item">
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
                                <h5 class="my-blue-color">JOHNY WESMULLAR</h5>
                                <p class="smaller">CEO, Biotech Inc.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br>
                                and scrambled it to make a type specimen book. It has survived not only five centuries.</p>  
                            </div>

                        </div>
                        <div class="owl-item">

                            <div class="item">
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
                                <h5 class="my-blue-color">Hans Mattin-Lassei</h5>
                                <p class="smaller">CEO, Apple.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type <br>
                                and scrambled it to make a type specimen book. It has survived not only five centuries.</p>  
                            </div>

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

.bg-blue {
    background-color: #0e153de5;
}

.owl-item {
    position: relative !important;
}


    @media (min-width: 1200px) { 
    /* PREV */
    .owl-carousel .owl-nav button.owl-prev {
        position: absolute!important;
        top: 62% !important;
        left: -5rem !important;
    }

    /* NEXT */
    .owl-carousel .owl-nav button.owl-next {
        position: absolute !important;
        top: 12% !important;
        right: -5rem !important;
    }
    }

</style>