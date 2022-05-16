<script>
    import Navbar from "../components/Navbar.svelte"
    import Header from "../components/header.svelte";
    import MainProducts from "../components/MainProducts.svelte";
    import ListProducts from "../components/ListProducts.svelte";
    import Footer from "../components/Footer.svelte";
    import { getAuth, signOut } from "firebase/auth";
    import { navigate } from "svelte-routing";

</script>
<div class="contain">
    <header>
        <Header></Header>
    </header>
    <nav>
        <Navbar></Navbar>
    </nav>
    <main>
        <!--<MainProducts></MainProducts>--> 
        <ListProducts></ListProducts>
  </main>
</div>

<style>
   
    
</style>
