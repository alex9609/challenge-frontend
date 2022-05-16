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
  <!--Table-->
  <div class="row">
    <div class="row">
      <div class="col col-lg-4 col-md-6 organice  flex-row bd-highlight mb-3">
        <p class="filtrar">Filtrar por:</p>
        <select
          class="form-select"
          aria-label="Default select example"
         
        >
          <option selected>Tipo de producto</option>
          <option value="Renta fija">Renta fija</option>
          <option value="Renta variable">Renta variable</option>
          <option value="Derivados">Derivados</option>
        </select>
      </div>
    </div>
    <div class="col table container" />
  </div>
</div>

<footer>
  <Footer />
</footer>

<style>
  .main {
    background-color: red;
    /*background-color: #02111a;*/
    margin-left: 10%;
    margin-right: 10%;
  }
  p{
    color: white;
  }
</style>
