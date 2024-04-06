<template>
    <!--===== Header Html Start =====-->
    <div class="top-header">
        <div class="container">
            <div class="row">
                <p class="text-center">Shipping All Over Bangladesh!! The Pure Taste Of Nature.</p>
            </div>
        </div>
    </div>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="logo">
                        <a href="#"><img src="../assets/img/HE-Logo-Green.png" alt=""></a>
                    </div>
                    <nav>
                        <ul class="navigation d-flex ">
                            <li><NuxtLink :to="{name:'index'}">HOME</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">STORE</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">NEW ARRIVALS</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">OFFERS</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">CONTACT US</NuxtLink></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-6">
                    <form role="search" method="get" class="searchform">
                        <input type="text" class="s" placeholder="Search for products">
                        <button type="submit" class="searchsubmit">
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                    <i class="bi bi-person"></i>
                </div>
            </div>
        </div>
    </header>
    <!--===== Header Html End =====-->
    <div>

    </div>
</template>
<style>
.top-header{
    padding: 12px;
    background-color: #2a431c;
    & p{
        margin: 0;
        font-size: 12px;
        color: rgba(255,255,255,0.8);
    }
}

.logo{
    width: 118px;
    height: 70px;
    & a{
        & img{
            width: 100%;
            height: 100%;
        }
    }
}

.navigation{
    & li{
        margin-left: 15px;
        & a{
            position: relative;
            font-size: 13px;
            font-weight: 700;
            color: var(--tc-black-color);
            &:hover{
                color: var(--tc-black-hover);
            }
            &::after{
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 5px;
            height: 2px;
            background-color: var(--tc-primary-color);
            transition: width 0.4s cubic-bezier(.19,1,.22,1);
            }
        }
    }
}


</style>
<script></script>