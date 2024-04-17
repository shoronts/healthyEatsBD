<template>
    <div>
        <section class="page-header position-relative ">
            <div class="page-header-bg" style="background-image: url('/img/bg/main-section-scaled-1.jpg')"></div>
            <div class="container">
                <div class="page-inner text-center">
                    <h1 class="page-title">Contact us</h1>
                    <ul class="d-flex justify-content-center ">
                        <li><NuxtLink :to="{name:'index'}">Home </NuxtLink></li>
                        <li> / </li>
                        <li> Current page</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
.page-header{
    padding: 25px 0;
}
.page-inner{
    & .page-title{
        font-size: 78px;
        line-height: 1.2;
        font-family: var(--tc-signika-font);
    }
    & ul{
        & li{
            margin: 0px 3px;
            font-size: 11px;
            font-weight: 600;
            color: #242424;
            text-transform: uppercase;
            font-family: var(--tc-lato-font);
            & :hover{
                color: #777;
            }
        }
    }
}
</style>
<script>

</script>