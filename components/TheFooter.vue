<template>
    <footer>
        <div class="footer-top">
            <div class="footer-bg" style="background-image: url('/img/bg/footer-bg.jpg')"></div>
            <div class="footer-container row">
                <div class="col-lg-4 col-md-4 footer-logo">
                    <NuxtLink :to="{ name: 'index' }"><img src="/img/footer-logo.png" alt="Footer Logo" loading="lazy"
                            decoding="async">
                    </NuxtLink>
                    <p>Healthy Eats collects pure and fresh groceries directly from core farmers and serve you to
                        your doorstep.</p>
                </div>
                <div class="border-line"></div>
                <div class="col-lg-2 col-md-2 footer-links link-2">
                    <ul>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Contact Us
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Privacy Policy
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Terms of Services
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Refund Policy
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-2 footer-links link-3">
                    <ul class="pt">
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Contact Us
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Privacy Policy
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Terms of Services
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ name: 'index' }">
                                <LazyIcon class="" name="iconamoon:arrow-right-2-bold" />Refund Policy
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="border-line"></div>
                <div class="col-lg-3 col-md-3 link-4">
                    <div class="footer-contact">
                        <h6>Contact</h6>
                        <p>info@healthyeatsbd.com <br>
                            +8801581 044 495 <br>
                            Timing: 10am to 7pm (Sunday to Saturday)
                        </p>
                    </div>
                    <div class="footer-contact">
                        <h6>Address</h6>
                        <p>Tejgaon, Dhaka – 1215, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center align-items-center copyright">
            © Copyright <strong>Healthy Eats BD</strong><span>- 2024 |</span> All rights reserved.
        </div>
    </footer>
</template>
<style>
.footer-container {
    max-width: 1750px;
    margin: 0 auto;

    & .border-line {
        display: none;
    }
}

.footer-contact {
    & p{
        color: #fff;
        font-size: 14px;
        font-weight: 400;
    }

    h6{
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        font-family: sans-serif;
        margin-bottom: 20px;
    }
}

.footer-top {
    padding: 100px 0px 90px 0px;
    position: relative;

    & .footer-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        z-index: -1;
    }
}

.footer-logo {
    text-align: center;
    padding-right: 75px;

    & a {
        width: 340px;
        height: 200px;
        display: inline-block;

        & img {
            width: 100%;
            height: 100%;
        }
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        margin-top: 22px;
    }
}


.link-2{
    margin-right: 40px;
}

.link-4{
    margin-left: 10px!important;

}

.footer-links {
   & ul {
        display: grid;
        margin-left: 0;
        /* justify-content: center; */
        li {
            margin-bottom: 4px!important;
            a {
                color: #fff;
                font-size: 14px;
                font-weight: 400;
                font-family: sans-serif;

                svg {
                    width: 21px;
                    height: 35px;
                }

                &:hover {
                    color: var(--tc-alternative);
                }
            }
        }
    }

}

.social-links {
    h6 {
        color: #fff;
    }

    p {
        color: #fff;
        font-size: 14px;
        margin: 24px 0px;
    }
}

.copyright {
    font-size: 14px;
    padding: 20px;
    background: var(--tc-alternative);
}


@media all and (max-width: 1400px){
    .footer-container {
        max-width: 1370px !important;
        margin: 0 auto;
    } 
}

@media all and (max-width: 1200px){
    .footer-container {
        max-width: 1170px !important;
         margin: 0 auto;
    } 
}

@media all and (max-width: 1026px) {

   


    .footer-container {
        max-width: 945px !important;
        margin: 0 auto;
    }

    .footer-logo {
        text-align: center;
        padding-right: 75px;

        & a {
            width: 150px !important;
            height: 90px !important;

            & img {
                width: 100%;
                height: 100%;
            }
        }
    }

    ul {
        padding-left: 0 !important;
    }

    .link-2,
    .link-3 {
        padding-left: 0 !important;
    }

    .link-4 {
        margin-left: 0 !important;
    }
}

@media all and (max-width: 992px){
    .footer-container {
        max-width: 960px !important;
        margin: 0 auto;
    } 
}

@media all and (max-width: 768px){

        .footer-container {
        max-width: 650px !important;
        margin: 0 auto;
    }

    .footer-links {
        display: flex;
        width: 45% !important;

        ul {
            padding-left: 0 !important;
        }
    }

        .border-line {
        width: 100%;
        height: 1px;
        display: block !important;
        margin: 45px 0px;
        background: var(--tc-alternative);
    }


    .footer-logo {
        padding-right: 0 !important;

        & a {
            width: 250px !important;
            height: 150px !important;

            & img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .link-2 {
        margin-right: 0 !important;
    }

    .link-3 {
        padding-left: 55px !important;
    }
}

@media all and (max-width: 546px){
    .footer-container {
        max-width: 540px !important;
        margin: 0 auto;
    } 
}

@media all and (max-width: 480px){

        .footer-container {
        max-width: 430px !important;
        margin: 0 auto;
    }

    .link-2 {
        margin-right: 30px !important;
    }

    .link-3 {
        padding-left: 45px !important;
    }
}

@media all and (max-width: 340px){
    .footer-container {
        max-width: 280px !important;
        margin: 0 auto;
    }

    .footer-logo {
        padding-right: 0 !important;

        & a {
            width: 145px !important;
            height: 85px !important;

            & img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .link-2 {
        margin-right: 0px !important;
    }

    .link-3 {
        padding-left: 15px !important;
    }
}


</style>
<script></script>