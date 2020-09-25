<template>

    <div>

        <productDetails />

        <addReview />

        <shortInfoProduct class="mt-5"/>

        <alsoLikeCarousel />

        <relatedProducts />

    </div>

</template>

<script>

import productDetails from '@/components/products/productDetails.vue'
import addReview from '@/components/products/addReview.vue'
import shortInfoProduct from '@/components/shortInfoProduct.vue'
import alsoLikeCarousel from '@/components/products/alsoLikeCarousel.vue'
import relatedProducts from '@/components/products/relatedProducts.vue'

export default {
    name: 'Products',
    components: {
        productDetails,
        addReview,
        shortInfoProduct,
        alsoLikeCarousel,
        relatedProducts

    }
}
</script>

<style scoped>



</style>