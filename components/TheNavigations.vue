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
<style></style>
<script>
</script>