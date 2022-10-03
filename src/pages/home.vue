<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<p>home</p>
</template>

<script lang="ts">
import DataService from '@/api/DataService'
import ResponseData from '@/type/ResponseData'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
	setup() {
		onMounted(() => getPeople())

		const getPeople = () => {
			DataService.getAll()
				.then((res: ResponseData) => console.log(res.data))
				.catch(e => console.log(e.message))
		}
	},
})
</script>
