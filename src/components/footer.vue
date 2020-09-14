<template>
    <div>

        <div class="container" >
            <div class="row my-margin">
                <div class="col-12 col-md-4 col-xl mb-4">
                    <img class="mx-auto d-block" src="../assets/Bexim.png" alt="">
                </div>
                <div class="col-12 col-md-4 col-xl mb-4">
                    <img class="mx-auto d-block" src="../assets/Lighton.png" alt="">
                </div>
                <div class="col-12 col-md-4  col-xl mb-4">
                    <img class="mx-auto d-block" src="../assets/Dismis.png" alt="">
                </div>
                <div class="col-12 col-md  col-xl mb-4">
                    <img class="mx-auto d-block" src="../assets/Rosimo.png" alt="">
                </div>
                <div class="col-12 col-md  col-xl ">
                    <img class="mx-auto d-block" src="../assets/Dallas.png" alt="">
                </div>

            </div>
        </div>


        <div class="footerBG relative">
            <div class="container ">
                <div class="row pt-5 pb-5">
                    <div class="col col-md-6 col-xl-3">
                        <a class="navbar-brand" id="brand" href="#">
                            <img src="../assets/Logo-white.png" alt="">
                        </a>
                        <p class="mt-3 smaller-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                            enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec 
                            maximus justo eu nisl convallis iaculis. Aenean laoreet.
                        </p>
                        <p class="mb-0">Follow us
                            <img class="ml-5" src="../assets/blueLine.png" alt="">
                        </p>
                        <div class="mt-2 white">
                            <i class="fab fa-twitter my-blue-color"></i>
                            <i class="fab fa-instagram ml-3 my-blue-color"></i>
                            <i class="fab fa-facebook ml-3 my-blue-color"></i>
                            <i class="fas fa-envelope ml-3"></i>
                            <i class="fab fa-google-plus-g ml-3 my-blue-color"></i>
                        </div>
                    </div>

                    <div class="col col-md-6 col-xl-3 mt-2">
                        <h6 class="my-blue-color mb-3">CONTACT INFO</h6>
                        <p class="my-blue-color mb-1">Address:</p>
                        <p class="smaller-p">Solna Business Park
                            <br>
                            Feni-2500, Stockholm
                        </p>
                        <p class="my-blue-color mb-1">Phone:</p>
                        <p class="smaller-p">+08-123456789
                            <br>
                            +08-123456789
                        </p>
                        <p class="my-blue-color mb-1">Email:</p>
                        <p class="smaller-p">support@website.com
                            <br>
                            info@website.com
                        </p>
                    </div>
                    <div class="col col-sm-4 col-md-6 col-xl-3 mt-2">
                        <h6 class="my-blue-color mb-3">USEFUL LINKS</h6>
                        <p class="mb-2 smaller-p white"><a href="">Privacy Policy</a></p>
                        <p class="mb-2 smaller-p white"><a href="" id="special-a">Terms & Conditions</a></p>
                        <p class="mb-2 smaller-p white"><a href="">Contact Us</a></p>
                        <p class="mb-2 smaller-p white"><a href="">Our Sitemap</a></p>
                        <p class="mb-2 smaller-p white"><a href="">Latest News</a></p>
                        <p class="mb-2 smaller-p white"><a href="">Returns</a></p>
                    </div>

                    <div class="col-12 col-sm-8 col-md-6 col-xl-3 mt-2">
                        <h6 class="my-blue-color mb-3">RECENT INSTAGRAM</h6>
                        <div>
                            <img class="" src="../assets/Instagram-1.png" alt="">
                            <img class="ml-2" src="../assets/Instagram-1.png" alt="">
                            <img class="ml-2" src="../assets/Instagram-1.png" alt="">
                        </div>
                        <div>
                            <img class="mt-2" src="../assets/Instagram-1.png" alt="">
                            <img class="mt-2 ml-2 my-absolute" src="../assets/instagram-blue.png" alt="">
                            <i class="fab fa-instagram ml-3 pr-3 my-relative"></i>
                            <img class="mt-2 ml-5" src="../assets/Instagram-1.png" alt="">
                        </div>
                        <div>
                            <img class="mt-2" src="../assets/Instagram-1.png" alt="">
                            <img class="mt-2 ml-2" src="../assets/Instagram-1.png" alt="">
                            <img class="mt-2 ml-2" src="../assets/Instagram-1.png" alt="">
                        </div>
                    </div>

                    <a id="topBtn" href="#" class="btn btn-light btn-lg back-to-top" role="button"><i class="fas fa-long-arrow-alt-up"></i></a>

                </div>

            </div>
        </div>
        <hr id="hr" class="mb-0 mt-0">
        <div class="copyrightBG">
            <div class="container">
                <div class="row pt-4 pb-3">
                    <div class="col-12 col-md-6 mt-2 mb-2 text-center">© Copyright 2020 KenKata</div>
                    <div class="col-12 col-md-6 mb-2">
                        <img class="img-fluid float-right" src="../assets/PaymentSystem.png" alt="">
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

.relative {
    position: relative;
}

#topBtn{
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 22px;
  width: 50px;
  height: 50px;
  background: var(--ownBlue);
  color: white;
  border: none;
  cursor: pointer;
  /* display: none; */
}
button {
    outline: 0 !important;
}


.my-margin {
    margin-top: 6rem;
    margin-bottom: 5rem;
}

#hr {
    background-color: rgb(59, 59, 59);
}

.my-absolute {
    position: absolute;
}

.my-relative {
    position: relative;
    top: 4px;
    left: 25px;
}

#special-a {
    text-decoration: underline;
    color: var(--ownBlue)
}
#special-a:hover {
    color: white;
}

a {
    color: white;
}

a:hover {
    text-decoration: none;
    color: var(--ownBlue)
}

.smaller-p {
    font-size: 15px;
}

.footerBG {
    background-image: url('../assets/footerBG.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
}

.copyrightBG {
    background-image: url('../assets/copyrightBG.png');
    width: 100%;
    background-size: cover;
    color: white; 
    background-repeat: no-repeat;
    background-position: top;
}

@media (min-width: 576px) {  

    .text-center {
        text-align: left !important;
    }
}

</style>