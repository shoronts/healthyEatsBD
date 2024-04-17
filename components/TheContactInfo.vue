<template>
    <section class="contact-info-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 contact-left">
                  <div class="contact-info">
                    <div class="title-container">
                      <h4 class="info-title">COMPANY INFO</h4>
                    </div>
                    <p>Healthy Eats collects pure and fresh groceries directly <br>
                      from core farmers and serve you to your door </p>
                      <div class="title-container">
                        <h4 class="info-title">CONTACT US</h4>
                    </div>
                    <div class="row info-container">
                      <div class="col-md-6 info-box">
                        <div class="info-box-icon">
                          <LazyIcon class="icon" name="material-symbols-light:phone-iphone-outline" />
                        </div>
                        <div class="info-box-details">
                          <p><span style="color: #333333;">Phone:</span>+8801581044495 <br> 
                            <span style="color: #333333;">Email:</span>info@healthyeatsbd.com<br> 
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6 info-box">
                        <div class="info-box-icon">
                          <LazyIcon class="icon" name="material-symbols-light:phone-iphone-outline" />
                        </div>
                        <div class="info-box-details">
                          <p><span style="color: #333333;">Address:</span>Tejgaon, Dhaka 1215, Bangladesh 
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6 info-box">
                        <div class="info-box-icon">
                          <LazyIcon class="icon" name="material-symbols-light:phone-iphone-outline" />
                        </div>
                        <div class="info-box-details">
                          <p><span style="color: #333333;"><strong>Standard shipping</strong></span> <br> 
                            <span style="color: #333333;"><strong>on all orders.</strong></span>
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6 info-box">
                        <div class="info-box-icon">
                          <LazyIcon class="icon" name="material-symbols-light:phone-iphone-outline" />
                        </div>
                        <div class="info-box-details">
                          <p><span style="color: #333333;"><strong>Standard shipping</strong></span> <br> 
                            <span style="color: #333333;"><strong>on all orders.</strong></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 contact-right">
                  <div class="title-container">
                      <h4 class="info-title">SEND US AN EMAIL</h4>
                  </div>
                    <form  method="post" class="contact-form">
                        <div class="row gy-4">
                            <div class="col-md-6">
                            <label class="form-label">Your Name</label>
                              <input type="text" name="name" class="form-control" required="">
                            </div>
                            <div class="col-md-6 ">
                              <label class="form-label">Your Email</label>
                              <input type="email" class="form-control" name="email" required="">
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Phone Number</label>
                              <input type="text" class="form-control" name="subject" required="">
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Company</label>
                              <input type="text" class="form-control" name="subject" required="">
                            </div>
                            <div class="col-md-12">
                              <label class="form-label">Your Message</label>
                              <textarea class="form-control" name="message" rows="6" required=""></textarea>
                            </div>
                            <div class="col-md-12">
                              <button type="submit">ASK A QUESTION</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<style>

.contact-left{
  border-style: solid;
  border-width: 0px 1px 0px 0px;
  border-color: rgba(129,129,129,0.2);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 20px 40px 10px 10px;
}

.contact-right{
  padding: 20px 10px 10px 40px;
}

.contact-info{
  p{
    color: #777;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 20px;
    font-family: var(--tc-lato-font);
  }
}

.info-container{
  & .info-box{
    &-icon{
      width: 40px;
      height: 40px;
    }
  }
}


.title-container{
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.105);
  & .info-title{
    margin-bottom: -2px;
    padding-bottom: 10px;
    display: inline-block;
    font-family: var(--tc-signika-font);
    border-bottom: 2px solid #ccc;
  }
}


.form-label{
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
  color:#242424;
  font-weight: 400;
}

.contact-form input[type=text],
.contact-form input[type=email]{
    padding: 0 15px;
    max-width: 100%;
    width: 100%;
    height: 42px;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    background-color: transparent;
    box-shadow: none;
    color: #777;
    vertical-align: middle;
    font-size: 14px;
    transition: border-color .5s ease;
}

.contact-form textarea {
    padding: 0 15px;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 5px;
    background-color: transparent;
    box-shadow: none!important;
    color: #777;
    vertical-align: middle;
    font-size: 14px;
    transition: border-color .5s ease;
    min-height: 190px;
}


.contact-form button[type=submit]{
    padding: 5px 20px;
    min-height: 42px;
    font-size: 13px;
    outline: none;
    border: 0px solid transparent;
    border-radius: 0;
    box-shadow: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-family: var(--tc-lato-font);
    line-height: 1.2;
    cursor: pointer;
    transition: color .25s ease, background-color .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .25s ease;
    color: var(--btn-color, #3E3E3E);
    background-color: var(--btn-bgcolor, #F3F3F3);
}

</style>
<script></script>