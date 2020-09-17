<template>
<div class="text-center">
    <div class="container pb-5">

    <div class="row">
        <div class="col-12">
            <div class="d-flex flex-row justify-content-center text-center">
                <h1 class="pr-2 font-weight-bold">LATEST <span class="my-blue-color">BLOG</span></h1>
            </div>
            <div class="d-flex justify-content-center">
                <img src="../assets/wave.png" alt="">
            </div>
            <div class="d-flex justify-content-center pt-3 text-center">
                <p>Read our latest posts about our events and trending news</p>
            </div>
        </div>
    </div>

    <div class="bg-blue text-white text-center">
        
        <carousel class="carousel mx-auto position-relative mt-5 pt-3" :margin="15" :autoplay="true" :nav="false" :autoplayHoverPause="true" :responsive="{0:{items:1}, 992: {items: 2}}"> 

            <blogComponent class="w-auto mb-4" />
            <blogComponent class="w-auto" />
            <blogComponent class="w-auto" />
            <blogComponent class="w-auto" />
            <blogComponent class="w-auto" />
            <blogComponent class="w-auto" />

            <template slot="next">
                <span class="next position-absolute border px-3 rounded-circle d-none d-lg-block"><i class="fas fa-angle-right"></i></span>
            </template>
            <template slot="prev">
                <span class="prev position-absolute border px-3 rounded-circle d-none d-lg-block"><i class="fas fa-angle-left"></i></span>
            </template>

        </carousel>

    </div>


                        
                        

    </div>
</div>
    
</template>

<script>
import blogComponent from '@/components/blogComponent.vue'
import carousel from 'vue-owl-carousel'

export default {
    name: 'blog',
    components: {
        blogComponent,
        carousel
    }
}
</script>

<style scoped>

.my-width-p-Travel {
    width: 62px;
}

.bg-clr {
    background: #20D3C2;
    width: 25%;
}

.date-pos {
    top: 11.5%;
    right: 6%;
}

.text-left {
    font-size: 12px;
} h1 {
    font-size: 22px;
} p {
    margin-bottom: 5px;
} .WHITE-BTN {
    padding: 4px 10px 4px 10px;
}

.owl-item {
    position: relative !important;
}


@media (min-width: 992px) {

    .bg-clr {
        background: #20D3C2;
        width: 30%;
    }

    .date-pos {
        top: 11.9%;
        right: 8.2%;
    }

    .text-left {
        font-size: 16px;
    } h1 {
        font-size: 2.5rem;
    } p {
        margin-bottom: 16px;
    } .WHITE-BTN {
        padding: 8px 20px 8px 20px;
    }

}


    @media (min-width: 1200px) { 

    .bg-clr {
        background: #20D3C2;
        width: 35%;
    }

    .date-pos {
        top: 12%;
        right: 14.3%;
    }



    }

</style>