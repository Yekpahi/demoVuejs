<script>
import NavLink from './NavLink.vue';
export default {
    components : {
        NavLink
    },
    props: {
    message : String,
  }
}
</script>

<template>
          <nav>
            <NavLink url="/" text="Accueil" />
            <NavLink url="/about" text="À propos" />
            <NavLink url="/contact" text="Contact" />
        </nav>
</template>

<style>
	a {
		text-decoration: none;
	}
</style>