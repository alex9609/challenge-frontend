<script>
    import Navbar from "../components/Navbar.svelte"
    import MainProducts from "../components/MainProducts.svelte";
    import ListProducts from "../components/ListProducts.svelte";
    import Footer from "../components/Footer.svelte";
    import { getAuth, signOut } from "firebase/auth";
    import { navigate } from "svelte-routing";

    const cerrarsesion = async() =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        navigate('/',replace(true))
        }).catch((error) => {
        });
    };
</script>
<div class="contain">
    <button class="btn btn-primary" on:click={cerrarsesion}>Cerrar sesion</button>
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
