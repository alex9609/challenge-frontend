<script>
	import {Router, Link, Route} from "svelte-routing";
	import Home from "./views/Home.svelte";
	import Main from "./views/Main.svelte";
	import ListProducts from "./components/ListProducts.svelte"
</script>
	<Router>
		<Route path="/">
			<Home></Home>
		</Route>
		<Route path="/Main">
			<Main></Main>
		</Route>
		<Route path="/ListProducts">
			<ListProducts></ListProducts>
		</Route>
	</Router>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
	:global(body) {
	font-family: 'Nunito',sans-serif;
    margin: 0;
    padding: 0;
	width: 100%;
	background-color:#02111A;
  }
</style>