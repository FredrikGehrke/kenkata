<template>

    <div>

        <productDetails />

        <addReview />

        <shortInfoProduct class="mt-5"/>

    </div>

</template>

<script>

import productDetails from '@/components/products/productDetails.vue'
import addReview from '@/components/products/addReview.vue'
import shortInfoProduct from '@/components/shortInfoProduct.vue'

export default {
    name: 'Products',
    components: {
        productDetails,
        addReview,
        shortInfoProduct
    }
}
</script>

<style scoped>



</style>