<script lang="ts">
	import Tailwind from "../Tailwind.svelte";
	import Header from '../HeaderFooter/Header.svelte';
	import Footer from '../HeaderFooter/Footer.svelte';
	import Charts from '../Chart.svelte';
	import SearchR from '../Components/SearchReddit.svelte';
	export let name: String;

</script>

<Tailwind />
<div class="bg-gray-700 px-4 py-2 rounded">Hello Tailwind!</div>

<main>
	<h1>{name}!</h1>
</main>

<Charts/>
<SearchR/>
<Header/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>