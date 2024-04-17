<template>
    <footer>
        <div class="footer-top">
            <div class="footer-bg" style="background-image: url('/img/bg/footer-bg.jpg')"></div>

            <div class="footer-container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 footer-logo">
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

                    <div class="col-lg-3 col-md-6 link-4">
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
    margin-right: 70px;
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
</style>
<script></script>