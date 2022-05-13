<script>
  import Footer from "../components/Footer.svelte";
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
  let producto ={
      nombreProducto:'',
      idProducto:'',
      tipoProducto:''
  }
  function guardarProducto(){
      if((producto.nombreProducto.trim() == '' || producto.tipoProducto.trim() == '' || producto.idProducto == false)){
        alert("Todos los campos son obligatorios")
      }else{
          console.log(producto)
          limpiar();
      }
  }
  function limpiar(){
      producto.nombreProducto = '',
      producto.tipoProducto = '',
      producto.idProducto = ''
  }
</script>

<div class="main d-flex justify-content-center row">
  <div class="col d-flex justify-content-center">
    <h2 class="p-3">Productos</h2>
    <button
      class="m-3 create btn btn-primary justify-content-center"
      data-bs-toggle="modal"
      data-bs-target="#modalCreationProducts">Crear nuevo</button
    >
  </div>
  <div class="col" />
</div>
<!--Modal-->
<div
  class="modal fade"
  id="modalCreationProducts"
  tabindex="-1"
  aria-labelledby="modal-title"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-title">Registrar producto</h5>
        <button
          type="button"
          class="close btn-close"
          data-bs-dismiss="modal"
          arial-label="close"
        />
      </div>
      <div class="modal-body">
          <label for="modal-text" class="form-label">Nombre producto</label>
          <input type="text" class="form-control" id="modal-text" 
          placeholder="Nombre producto" bind:value={producto.nombreProducto} required>
          <label for="modal-number" class="form-label">Id producto</label>
          <input type="number" class="form-control" id="modal-number"
           placeholder="id"  bind:value={producto.idProducto} required>
          <label for="modal-select" class="form-label">Tipo de producto</label>
          <select class="form-select" aria-label="Default select example" bind:value={producto.tipoProducto} required>
            <option value="Renta fija">Renta fija</option>
            <option value="Renta variable">Renta variable</option>
            <option value="Derivados">Derivados</option>
          </select>
      </div>
      <div class="modal-footer">
          <button class="guardar btn btn-primary" on:click={guardarProducto}
          >Guardar</button>
          <button class="cancelar btn btn-danger" 
          data-bs-dismiss="modal" on:click={limpiar}>Cancelar</button>
      </div>
    </div>
  </div>
</div>
<footer>
  <Footer />
</footer>

<style>
  .main {
    background-color: #02111a;
  }
  h2 {
    color: white;
    font-weight: bold;
  }
  .create {
    height: 50px;
    background-color: #00b5e2;
    font-weight: bold;
    border: none;
  }

  .modal-content{
      background-color: rgb(4, 28, 44);
      color: white;
  }
  .close{
      background-color: white;
      border-radius: 50%;
      border: none;
      opacity: 70%;
  }
  .guardar{
      background-color:white;
      color: #02111a;
      font-weight: bold;
      font-family: 'Nunito',sans-serif;
      border: none;
  }
  .guardar:hover{
      background-color: rgb(0, 60, 113);
      color: white;
      font-weight: bold;
      font-family: 'Nunito',sans-serif;
      border: none;
  }

  .cancelar{
      font-weight: bold;
  }
</style>
