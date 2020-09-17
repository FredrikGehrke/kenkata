
<template>
<div class="position-relative">
    <div class="bg-gray col-8 bg rounded-lg"></div>
    <div class="bg-blue col-6 my-5 position-absolute text-white cont position relative rounded-lg">
        <div class="date position-absolute bg-lightBlue px-3">
            <p class="h2">29</p>
            <p> MAR </p>
            </div>
        <div class="text position-absolute">
            <p>By <a href="#" class="text-white">Adam Moore</a></p>
            <p class="my-blue-color">A beautiful scenery in the world we are missing</p>
            <div>
            <!-- <tag :text="'Travel'" class="mr-2" />
            <tag :text="'Fashion'" /> -->
            </div>
            <button class="btn WHITE-BTN my-blue-color mb-4">Read more</button>
        </div>
    </div>
</div>
</template>

<script>

    export default {
    components :{
    
    }
}
</script>

<style lang="scss"scoped>

.owl-dots {
    margin-top: 3rem !important; 
}

.bg-gray {
    background: #CCCCCC;
}

.bg-blue {
    background: var(--darkerBlue);
}

.bg-lightBlue {
    background: var(--ownBlue);
}

.cont{
    right:0;
    top:0;
    bottom:0;
    transition: all 0.2s ease;
    min-width:260px;

    &:hover{
        transform:scale(1.1)translateX(-9px);
    }
}

.bg{
    height:400px;
    // height: 100%;
}

.date{
    top:0;
    left:30px;
}
.text{
    text-align: left;
    bottom:0;
    left:30px;
    right:50px;
}
</style>

