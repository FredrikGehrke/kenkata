<template>

    <div>

        <productDetails />

        <addReview />

    </div>

</template>

<script>

import productDetails from '@/components/products/productDetails.vue'
import addReview from '@/components/products/addReview.vue'

export default {
    name: 'Products',
    components: {
        productDetails,
        addReview
    }
}
</script>

<style scoped>


</style>