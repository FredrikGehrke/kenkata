<template>
    <div class="navbar navbar-dark my-blue topNav">
        <div class="container">
            <div class="d-flex">
                <div class="dropdown mt-2">
                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ENG <i class="fas fa-chevron-down smaller"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div id="USD" class="dropdown ml-3 mt-2">
                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        USD <i class="fas fa-chevron-down smaller"></i>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div> 
                <div class="white-pillar">
                    <img id="Line" class="ml-3" src="../assets/Line1.png" alt="">
                </div>
            </div>
            
            <div class="d-flex flex-right">
                <div class="mt-2">
                    <a href="">Newsletter</a>
                </div>
                <div class="white-pillar">
                    <img id="Line" class="ml-3" src="../assets/Line1.png" alt="">
                </div>
                <div class="mt-2 ml-3">
                    <a href="">Contact us</a>
                </div>
                <div class="white-pillar">
                    <img id="Line" class="ml-3" src="../assets/Line1.png" alt="">
                </div>
                <div class="mt-2 ml-3">
                    <a href="">FAQs</a>
                </div>
                <div class="white-pillar">
                    <img id="Line" class="ml-3" src="../assets/Line1.png" alt="">
                </div>
                <div class="mt-2 ml-3 white">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram ml-2"></i>
                    <i class="fab fa-facebook ml-2"></i>
                    <i class="fas fa-envelope ml-2"></i>
                    <i class="fab fa-google-plus-g ml-2"></i>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.white {
    color: white !important; 
}

.smaller {
    font-weight: 400;
    font-size: 14px;
}

.white-pillar {
    margin: 0;
    padding: 0;
}

.topNav a {
    color: white !important; 
}

.topNav {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

</style>