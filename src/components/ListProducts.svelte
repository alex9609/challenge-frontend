<script>
  import CreateProduct from "./CreateProduct.svelte"
  import Footer from "./Footer.svelte";
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

<div class="main row">
  <CreateProduct></CreateProduct>
</div>
<footer>
  <Footer/>
</footer>
<style>
  .main{
    min-height: 100%;
  }
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
