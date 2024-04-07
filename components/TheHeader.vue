<template>
    <!--===== Header Html Start =====-->
    <div class="top-header">
        <div class="container">
            <div class="row">
                <p class="text-center">Shipping All Over Bangladesh!! The Pure Taste Of Nature.</p>
            </div>
        </div>
    </div>
    <header class="header">
        <div class="container-fluid p-60">
            <div class="row align-items-center">
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="logo">
                        <a href="#"><img src="../assets/img/HE-Logo-Green.png" alt=""></a>
                    </div>
                    <nav>
                        <ul class="navigation d-flex ">
                            <li><NuxtLink :to="{name:'index'}">HOME</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">STORE</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">NEW ARRIVALS</NuxtLink>
                            <span class="menu-label menu-label-secondary">NEW</span>
                            </li>
                            <li><NuxtLink :to="{name:'index'}">OFFERS</NuxtLink></li>
                            <li><NuxtLink :to="{name:'index'}">CONTACT US</NuxtLink></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-6 d-flex align-items-center">
                    <div class="tc-search-form">
                        <form class="search-form">
                            <input type="text" class="s" placeholder="Search for products">
                            <button type="submit" class="search-submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <ul class="tc-cart d-flex">
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg></a></li>
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg></a></li>
                        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <!--===== Header Html End =====-->
    <div>

    </div>
</template>
<style>

.header{
    background-color: #fff;
}
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
                width: 0;
                height: 2px;
                transition: width 0.4s cubic-bezier(.19,1,.22,1);
                background: var(--tc-primary-color);
            }
            &:hover::after{
               width: 100%;
            }
        }
        & .menu-label{
            position: absolute;
            bottom: 93%;
            z-index: 1;
            display: inline-block;
            margin-inline-start: -30px;
            padding: 2px 4px;
            border-radius: 1px;
            background-color: var(--tc-alternative);
            color: #fff;
            vertical-align: middle;
            text-transform: uppercase;
            white-space: nowrap;
            font-weight: 600;
            font-size: 9px;
            font-family: var(--wd-text-font);
            line-height: 12px;
            &::before{
                content: "";
                top: 100%;
                position: absolute;
                inset-inline-start: 10px;
                border: 4px solid var(--tc-alternative);
                border-bottom-color: transparent !important;
                border-inline-end-color: transparent !important;
                border-inline-end-width: 7px;
                border-inline-start-width: 0;
            }
        }
    }
}


.tc-search-form{
    margin-left: 200px;
    & .search-form{
        position: relative;
        height: 42px;
        /* border: 1px solid var(--tc-primary-color); */
        & input{
            padding: 0 15px;
            width: 556px;
            height: 46px;
            border: 2px solid rgba(40, 108, 66, 1);
            border-radius: 5px;
            background-color: transparent;
            box-shadow: none;
            color: #777;
            vertical-align: middle;
            font-size: 14px;
            transition: border-color .5s ease;
        }

        & .search-submit{
            padding: 0;
            right: 12px;
            bottom: -2px;
            border: none;
            color: #777;
            inset-block: 0;
            box-shadow: none;
            font-weight: 400;
            position: absolute;
            background-color: transparent;
            &:hover svg{
                opacity: .7;
            }
        }
    }
}

.tc-cart{
    padding: 0;
    & li{
        margin-left: 18px;
        & a {
            color: #333;
            &:hover{
                color: var(--tc-gray);
            }
        }
    }
}


</style>
<script></script>