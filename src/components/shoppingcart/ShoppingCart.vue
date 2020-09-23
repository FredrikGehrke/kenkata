<template>
    <div class="background">

        <shoppingCartProduct /> <!-- v-for="product in shoppingCart" :key="product.id" :item="product" -->


        <div class="cart-item"> <!-- v-if="shoppingCart.length < 1" -->
            <div class="p-2 d-flex justify-content-center align-items-center">
                <div class="d-flex align-items-center">
                    Your cart is empty
                </div>
            </div>
            <div class="dropdown-divider"></div>
        </div>

        <div class="p-2 d-flex justify-content-between align-items-center">
            <div>
                <div class="total-price">
                    Total: <span class="ml-1"> ${{ shoppingCartTotal }}</span>
                </div>
                <small class="text-muted">including VAT</small>
            </div>
            <button class="btn checkout-btn" v-on:click.stop="">CHECKOUT </button>
        </div>

    </div>
</template>

<script>
import shoppingCartProduct from './ShoppingCartProduct'


export default {
    name: 'ShoppingCart',
    components: {
        shoppingCartProduct
    },
    // computed: {
    //     ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
    // }

}
</script>

<style scoped>

    .background {
        background: #36333311;
    }

    .checkout-btn {
        background-color: var(--ownBlue);
        border-radius: 25px;
        height: 50px;
        width: 30%;
        color: #fff;
    }

    .total-price {
        font-size: 1.1em;
    }
</style>