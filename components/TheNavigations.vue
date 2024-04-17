<template>
    <nav>
        <ul class="navigation d-flex ">
            <li>
                <NuxtLink :to="{ name: 'index' }">HOME</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="{ name: 'index' }">STORE</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="{ name: 'index' }">NEW ARRIVALS</NuxtLink>
                <span class="menu-label menu-label-secondary">NEW</span>
            </li>
            <li>
                <NuxtLink :to="{ name: 'index' }">OFFERS</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="{ name: 'contact' }">CONTACT US</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<style>
.navigation {
    flex-wrap: wrap;

    & li {
        margin-left: 15px;
        position: relative;

        & a {
            font-size: 13px;
            font-weight: 700;
            color: var(--tc-black-color);
            text-transform: uppercase;

            &:hover {
                color: var(--tc-black-hover);

            }

            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 0;
                height: 2px;
                transition: width 0.4s cubic-bezier(.19, 1, .22, 1);
                background: var(--tc-primary-color);
            }

            &:hover::after {
                width: 100%;
            }
        }

        & .menu-label {
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

            &::before {
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
</style>
<script>
</script>