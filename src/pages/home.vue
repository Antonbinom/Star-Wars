<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div v-if="loading">
		<p>loading</p>
	</div>
	<div v-else>
		<table>
			<thead>
				<tr>
					<td>Name</td>
					<td>gender</td>
					<td>height</td>
					<td>mass</td>
					<td>birth year</td>
				</tr>
			</thead>
			<tbody>
					<tr v-for="(person, index) in people.results" :key="index">
						<td>{{person.name}}</td>
						<td>{{person.gender}}</td>
						<td>{{person.height}}</td>
						<td>{{person.mass}}</td>
						<td>{{person.birth_year}}</td>
					</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import DataService from '@/api/DataService'
import ResponseData from '@/types/ResponseData'
import People from '@/types/People'

export default defineComponent({
	setup() {

		const loading = ref(true as boolean)
		const people = ref({} as People)

		onMounted(() => getPeople())

		const getPeople = () => {
			DataService.getAll()
				.then((res: ResponseData) => {
					people.value = res.data
					loading.value = false
				})
				.catch(e => console.log(e))
			}

			return {
				loading,
				people,
			}
	},
})
</script>
