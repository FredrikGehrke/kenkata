<template>
    <div>

        <navTop class="displayOnBig"/>
    
        <navbarMiddle />

        <hr>

        <navbarBottom />
        
    </div>
</template>

<script>

import navTop from '@/components/navTop.vue'
import navbarMiddle from '@/components/navbarMiddle.vue'
import navbarBottom from '@/components/navbarBottom.vue'

export default {
    name: 'Navbar',
    components: {
        navTop,
        navbarMiddle,
        navbarBottom
    }
}
</script>


<style scoped>

hr {
    margin: 0;
}

.displayOnBig {
    display: none;
}

@media (min-width: 992px) { 
    .displayOnBig {
        display: block;
    }
}

</style>
