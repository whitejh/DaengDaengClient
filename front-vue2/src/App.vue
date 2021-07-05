<template>
	<div>
		<Header v-if="chatcheck" />
		<router-view :key="$route.fullPath"/>




		<Footer v-if="chatcheck" />
	</div>
</template>

<script>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
export default {
	mounted() {
		if (window.location.pathname === '/chat') {
			this.chatcheck = false;
			console.log(window.location.pathname);


			
		} else this.chatcheck = true;
	},
	data() {
		return {
			chatcheck: true,
		};
	},
	components: {
		Header,
		Footer,
	},
	methods: {
	},
};
</script>

<style scoped>
.offcanvas-wrapper {
	z-index: 5;
}
.v-navigation-drawer__content {
	z-index: 1;
}
.toolbar {
	z-index: 3;
}
</style>
