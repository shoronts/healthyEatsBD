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
        <div class="desktop-header">
            <div class="container-fluid p-60">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-flex align-items-center">
                        <div class="logo">
                            <a href="#"><img src="../public/img/he-logo-green.png" alt=""></a>
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
                                   <LazyIcon class="header-icon" name="ic:round-search" />
                                </button>
                            </form>
                        </div>
                        <ul class="tc-cart d-flex">
                            <li><NuxtLink href="#" data-bs-toggle="offcanvas" data-bs-target="#useroffcanvasRight" aria-controls="offcanvasRight">
                                <LazyIcon class="header-icon" name="ph:user-light" /></NuxtLink></li>
                            <li><NuxtLink href="#">
                                <LazyIcon class="header-icon" name="mdi:cards-heart-outline" /></NuxtLink></li>
                            <li class="shop-cart"><NuxtLink href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <LazyIcon class="header-icon" name="ri:shopping-cart-line" />    
                            <i>0</i></NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="responsive-header d-none">
            <div class="responsive-container d-flex justify-content-between ">
                <div class="navigation-menu">
                    <button type="submit" class="search-submit">
                      <LazyIcon class="header-icon" name="material-symbols:menu-rounded" /> Menu
                    </button>
                </div>
                <div class="responsive-logo">
                    <NuxtLink href="#"><img src="../public/img/he-logo-green.png" alt=""></NuxtLink>
                </div>
                <div class="tc-cart">
                    <li class="shop-cart"><NuxtLink href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <LazyIcon class="header-icon" name="ri:shopping-cart-line" /><i>0</i>
                        </NuxtLink>
                    </li>
                </div>
            </div>
        </div>
        <div class="tc-responsive-toolbar">
            <div class="container">
                <div class="tc-bottom-cart tc-cart toolbar d-flex ">
                    <li><NuxtLink href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <LazyIcon class="header-icon" name="ion:storefront-outline" />
                        <span class="tc-cart-label">Store</span>
                        </NuxtLink>
                    </li>
                    <li><NuxtLink href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <LazyIcon class="header-icon shop-cart" name="ri:shopping-cart-line" />
                          <i>0</i>
                          <span class="tc-cart-label">Cart</span>
                        </NuxtLink>
                    </li>
                    <li><NuxtLink href="#">
                           <LazyIcon class="header-icon" name="mdi:cards-heart-outline" />
                           <span class="tc-cart-label">Wish List</span>
                        </NuxtLink>
                    </li>
                    <li><NuxtLink href="#" data-bs-toggle="offcanvas" data-bs-target="#useroffcanvasRight" aria-controls="offcanvasRight">
                            <LazyIcon class="header-icon" name="ph:user-light" />
                            <span class="tc-cart-label">My Account</span>
                        </NuxtLink>
                    </li>
                </div>
            </div>
        </div>
        <!-- shop canvas -->
        <div class="offcanvas offcanvas-end tc-shop-offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header tc-offcanvas-header justify-content-between">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h5>
                <button type="button"  data-bs-dismiss="offcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg> Close</button>
            </div>
            <hr>
            <div class="offcanvas-body tc-offcanvas-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
                <p>No products in the cart .</p>
                <a href="#" class="tc-btn-1">Return To Shop</a>
            </div>
        </div>

        <!-- user canvas -->
        <div class="offcanvas offcanvas-end tc-shop-offcanvas" tabindex="-1" id="useroffcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header tc-offcanvas-header justify-content-between">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Sing In</h5>
                <button type="button"  data-bs-dismiss="offcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg> Close</button>
            </div>
            <hr>
            <div class="offcanvas-body user-offcanvas">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username or email address *</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1"> Remember me</label>
                    </div>
                    <button type="submit" class="tc-btn-1">SING IN</button>
                </form>
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
    flex-wrap: wrap;
    & li{
        margin-left: 15px;
        position: relative;
        & a{
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

.header-icon{
    width: 22px;
    height: 45px;
}


.tc-search-form{
    margin-left: 200px;
    flex: 1 1 auto;
    & .search-form{
        position: relative;
        height: 42px;
        /* border: 1px solid var(--tc-primary-color); */
        & input{
            padding: 0 15px;
            width: 100%;
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
    & .shop-cart{
        position: relative;
        & i{
            position: absolute;
            top: 7px;
            inset-inline-end: -6px;
            z-index: 1;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: var(--tc-primary-color);
            color: #fff;
            text-align: center;
            letter-spacing: 0;
            font-weight: 400;
            font-size: 9px;
            line-height: 15px;
            }
    }
    & li{
        margin-left: 18px;
        & a {
            color: #333;
            &:hover{
                color: var(--tc-gray);
            }
            & .tc-cart-label{
                display: block;
                color: black;
            }
        }
    }
}

.tc-shop-offcanvas{
    padding-left: 0!important;
    padding-right: 0!important;
    .tc-offcanvas-header{
        & h5{
            font-size: 18px;
        }
        & button{
            border: none;
            outline: none;
            background: none;
            font-size: 14px;
        }
        hr{
            margin-top: 0;
        }
    }
    .tc-offcanvas-body{
        text-align: center;
        & svg{
            margin-bottom: 20px;
            color: rgba(0,0,0, 0.07);
            line-height: 1;
            content: "\f147";
            font-family: "woodmart-font";
        }
        & p{
            font-size: 14px;
            display: block;
            margin-bottom: 20px;
            color: #242424;
            font-weight: 600;
            line-height: 1.4;
        }
        & a{
            text-transform: uppercase;
        }
    }

    .user-offcanvas{
        & button{
            width: 100%;
        }
    }
}





</style>
<script>





</script>