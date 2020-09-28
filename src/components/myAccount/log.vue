<template>
  <div class="col-6 bg-white">
    <form class="px-4 pt-4">
      <h1>Login</h1>
      <div class="form-group">
        <label>Username or email </label><a style="color:#20d3c2">*</a>
        <input type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label>Password </label><a style="color:#20d3c2">*</a>
        <input type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">LOG IN</button>
      <div class="container mt-4 mb-3">
        <div class="d-flex justify-content-between">
          <div>
            <input
              type="checkbox"
              class="from-check-input"
              id="dropdownCheck"
            />
            <label class="from-check-label ml-2" for="dropdownCheck"
              >Remember me</label
            >
          </div>
          <a class="" href="#" style="color: #20d3c2"
            >Lost your password?</a>
          
        </div>
        <div class="d-flex justify-content-between">
          <hr />
          <p>OR LOGIN WITH</p>
          <hr />
        </div>
        <div class="justify-content-between d-flex">
          <button type="button" class="egen-klass" style="background-color: #3b5998">
            Facebook
          </button>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" style="color:blue" class="feac">
              <path id="Facebook" d="M111.633,149H93.371A3.369,3.369,0,0,0,90,152.369v18.262A3.369,3.369,0,0,0,93.371,174h9.007l.015-8.934h-2.321a.548.548,0,0,1-.548-.546l-.011-2.88a.548.548,0,0,1,.548-.55h2.317v-2.783c0-3.229,1.972-4.987,4.853-4.987h2.364a.548.548,0,0,1,.548.548V156.3a.548.548,0,0,1-.547.548h-1.451c-1.567,0-1.87.744-1.87,1.837v2.409h3.442a.548.548,0,0,1,.544.612l-.341,2.88a.548.548,0,0,1-.544.483h-3.086L106.274,174h5.359A3.369,3.369,0,0,0,115,170.631V152.369A3.369,3.369,0,0,0,111.633,149Z" transform="translate(-90.002 -149)" fill="#fff"/>
            </svg> -->

          <button type="button" class="egen-klass">Google</button>
    
        <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            class="google"
          >
            <g
              id="Google_icon"
              data-name="Google icon"
              transform="translate(-702 -889)"
            >
              <rect
                id="Rectangle_635"
                data-name="Rectangle 635"
                width="25"
                height="25"
                rx="2"
                transform="translate(702 889)"
                fill="#fff"
              />
              <g id="G" transform="translate(657.369 762.86)">
                <path
                  id="Fill-8"
                  d="M115.646,180.54a9.274,9.274,0,0,0-.134-1.585h-7.358v3h4.214a3.606,3.606,0,0,1-1.558,2.368v1.949h2.515a7.62,7.62,0,0,0,2.321-5.734"
                  transform="translate(-51.062 -41.796)"
                  fill="#4285f4"
                />
                <path
                  id="Fill-10"
                  d="M62.53,207.131a7.469,7.469,0,0,0,5.171-1.882L65.186,203.3a4.732,4.732,0,0,1-7.036-2.471H55.559v2.008a7.8,7.8,0,0,0,6.971,4.3"
                  transform="translate(-5.438 -60.77)"
                  fill="#34a853"
                />
                <path
                  id="Fill-12"
                  d="M52.712,168.161a4.672,4.672,0,0,1,0-2.983V163.17H50.121a7.784,7.784,0,0,0,0,7Z"
                  transform="translate(0 -28.103)"
                  fill="#fabb05"
                />
                <path
                  id="Fill-14"
                  d="M62.53,133.858a4.237,4.237,0,0,1,2.993,1.169h0L67.75,132.8a7.5,7.5,0,0,0-5.22-2.03,7.8,7.8,0,0,0-6.971,4.294l2.591,2.008a4.666,4.666,0,0,1,4.38-3.217"
                  transform="translate(-5.438 0)"
                  fill="#e94235"
                />
              </g>
            </g>
        </svg> -->
    
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.bg-white {
  background-color: #f6f6f6 !important;
  border: none;
}
h1 {
  font-size: 24;
}
/* .px-4 .py-3 {
  font-size: 16px;
  border: none;
} */
hr {
  width: 150px;
  color: #aaaaaa;
  font-weight: 200;
}
.btn {
  font-size: 18px;
  border: none;
  border-radius: 20px;
  width: 100%;
  background-color: #20d3c2;
}
.text-muted {
  color: #20d3c2;
}
.egen-klass {
  background-color: #4285f4;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 48%;
}
p {
  font: Roboto 24px sold;
}
.fab {
  margin-left: 30px;
  left: 0px;
}
.google
{
  margin-left:435px;
  position: absolute;
  margin-bottom: 6px;
  bottom: 0;
}
.fab
{
  margin-left:80px;
  position: absolute;
  margin-bottom: 6px;
  bottom: 0;
}
.feac
{
  margin-right:580px;
  position: absolute;
  margin-bottom: 6px;
  bottom: 0;
}

</style>
