<template>
    <div>

        <div class="container pt-4 pb-4">
            <div class="row">
                <div class="col-12 col-xl-2">
                    <a class="navbar-brand" id="brand" href="#">
                        <img src="../assets/logo.png" alt="">
                    </a>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="input-group pt-phone">
                        <div class="col-5 col-md-6 col-xl-7 pr-0 pl-0">
                            <input id="searchBox" type="text" class="form-control" placeholder="Search products..." aria-label="Search products..." aria-describedby="basic-addon2">
                        </div>
                        <a class="form-control categoriesBox col-5 col-md-5 col-xl-5" href="#">
                            <div class="dropdown my-pt">
                                <a id="categoriesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <p>Categories <i class="fas fa-chevron-down smaller margin"></i></p>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </a>
                        <div class="input-group-append my-blue searchBtn ">
                            <button class="btn pr-3 pt-2" type="button"><i class="fas fa-search white smallerSearchBtn"></i></button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 d-flex">
                    <div class="my-pt-icons text-size margin-xl">
                        <i class="far fa-user icon-size mr-1"></i>My account
                    </div>
                    <div class="my-pt-icons ml-4">
                        <i class="far fa-heart icon-size"></i>
                    </div>
                    <div class="my-pt-icons ml-4">
                        <i class="fas fa-random mr-3 icon-size relativeShuffle"></i>
                        <span class="badge badge-pill my-blue white absoluteShuffle">0</span>
                    </div>
                    <div class="my-pt-icons ml-4 my-width">
                        <i class="fas fa-shopping-bag icon-size "></i> $0.00
                        <span class="badge badge-pill my-blue white absoluteCart">0</span>
                    </div>
                    <!-- <div class="my-pt-icons ml-4">
                        <i class="fas fa-shopping-bag icon-size"></i>$0.00
                        <span class="badge badge-pill my-blue white absoluteCart">0</span>
                    </div> -->
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

.text-size {
    font-size: 14px;
}

.pt-phone {
    padding-top: 1rem;; 
}

router-link {
    color: black !important;
}

a {
    text-decoration: none !important;
}

.nav-link {
    padding-bottom: 5px;
    color: black !important;
}

#BrowseBtn {
    padding: 0.1rem;
    border-radius: 0;
    /* padding-right: 4.3rem; */
}

.displayOnBig {
    display: none;
}

.margin {
    margin-left: 0rem !important;
}
.marginBrowse {
    margin-left: 5rem !important;
}
.margin-link {
    margin-left: 0.2rem !important;
}

.relativeShuffle {
    position: absolute;
}

.absoluteShuffle {
    position: relative;
    top: -15px;
    left: 10px;
    font-size: 10px;
}

.relativeCart {
    position: absolute;
}

.absoluteCart {
    position: relative;
    top: -15.9px;
    left: -58px;
    font-size: 10px;
}

.smallerSearchBtn {
    font-weight: 400;
    font-size: 18px;
    margin-left: -0.01rem;
}

.icon-size {
    font-weight: 400;
    font-size: 22px;
}

.searchBtn {
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}

#searchBox {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 14px;
    padding-left: 1.4rem;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
}::placeholder {
    color: rgb(153, 153, 153) !important;
}

#categoriesDropdown {
    color: black;
} 
#categoriesDropdown i {
    margin-left: 1rem;
    color: var(--ownBlue);
}

.my-pt {
    margin-top: -0.7rem !important;
}
.my-pt-icons {
    padding-top: 1rem !important;
}
.my-mr {
    padding-right: -5rem !important;
}

.categoriesBox {
    /* font-size: 14px; */
    padding-left: 0.5rem;
    padding-bottom: 1.4rem;
    padding-top: 1.4rem;
    padding-right: 0;
}

.white {
    color: white !important; 
}

.nav-item:hover {
    text-decoration: none;
}


.navbar-brand {
    padding: 0;
    padding-top: 0.3rem;
}

#navbarSupportedContent {
    padding-right: 0;
}


.active {
    position: relative;
}

.active::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.1rem;
    left: 9px;
    height: 4px;
    width: 70%;
    background-color: var(--ownBlue);
}

@media (min-width: 576px) { 

}

@media (min-width: 768px) { 

}

@media (min-width: 992px) { 
    .displayOnBig {
        display: block;
    }
}

@media (min-width: 1200px) { 

    .margin-xl {
        margin-left: 3.5rem;
    }

    .margin {
        margin-left: 0.75rem !important;
    }
    .pt-phone {
        padding-top: 0rem;; 
    }
}
</style>