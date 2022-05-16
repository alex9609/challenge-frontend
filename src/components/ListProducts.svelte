<script>
  import CreateProduct from "./CreateProduct.svelte"
  import Header from "./header.svelte";
  import Footer from "./Footer.svelte";
  import Navbar from "./Navbar.svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { navigate } from "svelte-routing";
  
  const auth = getAuth();
  let name = "";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      name = user.displayName;
    } else {
      navigate("/", { replace: true });
    }
  });
</script>
<header>
  <Header></Header>
</header>
<nav>
  <Navbar></Navbar>
</nav>
<div class="main row">
  <CreateProduct></CreateProduct>
</div>
<footer>
  <Footer/>
</footer>
<style>
  
  .main {
    /*background-color: red;*/
    background-color: #02111a;
    margin-left: 10%;
    margin-right: 10%;
  }

  footer{
    margin-top: 10%;
    margin-bottom: 0px;
  }

</style>
