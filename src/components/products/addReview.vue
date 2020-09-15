<template>
    <div class="mt-5">
        <div class="container">

            <div class="mb-5">
                <div class="d-flex">
                    <div class="blue-box">Description</div>
                    <div class="ml-2 blue-box">Additional Information</div>
                    <div class="ml-2 blue-box box-Active d-none d-sm-block">Reviews (2)</div>
                    <div class="ml-2 blue-box d-none d-sm-block">About Brand</div>
                </div>

                <hr class="mt-0 mb-0 hr-color">

                <!-- Displays on phone only -->
                <div class="d-flex d-sm-none">
                    <div class="blue-box-phone box-Active">Reviews (2)</div>
                    <div class="ml-2 blue-box-phone">About Brand</div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md">
                    <h6><span class="my-blue-color">2 reviews for</span> Gents Blue Lightweight Trainers</h6>   
                    <div class="d-flex flex-row">
                        <div class="p-2">
                            <img src="@/assets/grayBox.png" alt="">
                        </div>
                        <div class="p-2">
                            <div class="d-flex flex-column">
                                <div class="d-flex">
                                    <div class="mr-auto">
                                        <div class="gray-text"><span class="my-blue-color font-weight-bold">John Doe</span><span class="smaller-p"> - 24 July, 2020</span></div>
                                    </div>
                                    <div>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="far fa-star my-blue-color"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2">
                            <img src="@/assets/grayBox.png" alt="">
                        </div>
                        <div class="p-2">
                            <div class="d-flex flex-column">
                                <div class="d-flex">
                                    <div class="mr-auto">
                                        <div class="gray-text"><span class="my-blue-color font-weight-bold">William Cary</span><span class="smaller-p"> - 16 June, 2020</span></div>
                                    </div>
                                    <div>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="fas fa-star my-blue-color"></i>
                                        <i class="far fa-star my-blue-color"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md grayBG">
                    <form id="reviewForm">
                        <h4 class="my-blue-color">Add a review</h4>
                        <p class="gray-text mt-3">Your email address will not be published. Required fields are marked *</p>
                        <div class="d-flex flex-row">
                            <div>
                                Your rating<span class="my-blue-color">*</span>:
                            </div>
                            <div class="ml-4 gray-text ">
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div>
                        <div class="mt-3">
                            Your review<span class="my-blue-color">*</span>
                            <div class="form-group mt-2">
                                <textarea class="form-control" id="reviewText" rows="8"></textarea>
                                <div id="CannotMsgName" class="invalid-feedback">
                                    Please enter a review.
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name<span class="my-blue-color">*</span></label>
                            <input type="text" class="form-control" id="name" placeholder="">
                            <div id="CannotMsgName" class="invalid-feedback">
                                Please enter your name.
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email<span class="my-blue-color">*</span></label>
                            <input type="email" class="form-control" id="email" placeholder="">
                            <div class="invalid-feedback">
                                Please enter a correct email address, example: john.doe@hotmail.com
                            </div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkBox">
                            <label class="form-check-label" for="defaultCheck1">
                                Save my name, email, and website in this browser for the next time I comment.
                            </label>
                        </div>
                        <button type="submit" class="mt-3 btn WHITE-BTN font-weight-bold text-white">SUBMIT</button>
                        <div id="SubmittedMsg" class="valid-feedback">
                            
                        </div>
                    </form>
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

.hr-color {
    background: var(--ownBlue);
    height: 2px;
    width: 101.5%;
    border: none;
}

.blue-box {
    background: var(--darkerBlue);
    color: white;
    border-radius: 12px 12px 0 0;
    padding: 10px 20px 10px 20px;
}

.blue-box-phone {
    background: var(--darkerBlue);
    color: white;
    border-radius: 0px 0px 12px 12px;
    padding: 10px 20px 10px 20px;
    margin-bottom: 1rem;
}

.box-Active {
    background: var(--ownBlue);
}

.grayBG {
    background: #F6F6F6;
    padding: 1.5rem;
    border-radius: 12px;
}

.gray-text {
    color: #777777;
}

#reviewText {
    resize: none;
    border: none;
}

input {
    border: none;
}

.WHITE-BTN {
    background-color: var(--ownBlue);
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
} .WHITE-BTN:hover {
    color: black !important;
}

.smaller-p {
    font-size: 14px;
}

</style>