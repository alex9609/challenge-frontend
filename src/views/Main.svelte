<script>
    import Navbar from "../components/Navbar.svelte"
    import Header from "../components/header.svelte";
    import MainProducts from "../components/MainProducts.svelte";
    import Footer from "../components/Footer.svelte";

</script>
<div class="contain">
    <header>
        <Header></Header>
    </header>
    <nav>
        <Navbar></Navbar>
    </nav>
    <main>
        <MainProducts></MainProducts>
    </main>
</div>
<footer>
    <Footer></Footer>
</footer>
<style>
    main{
        height: 90%;
        background-image: url("/images/BackgroundHome.png");
        background-attachment: calc();
        background-size: 100%;
    }
    

</style>
