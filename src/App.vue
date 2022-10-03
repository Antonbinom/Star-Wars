<template>
	<div class="wrapper">
		<Header />
		<div class="wrapper-content">
			<div class="container">
				<router-view />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
	components: {Header, Footer},
};
</script>

<style lang="scss">

</style>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
