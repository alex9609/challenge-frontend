<script>
import Table from "./Table.svelte"

let products = [];
let cargarProductos = async () =>{
        //Pedir la respuesta en formato json
        await fetch("http://localhost:8081/product/consult")
        .then(res => res.json()).catch(console.log)
        .then((datosRespuesta) => { //Me devuelve los datos respuesta
			products = datosRespuesta; //Almaceno los datos en un arreglo
			//console.log(products); //Imprimir el array de empleados
		}).catch(console.log) //Impresion de los rerores si hay errores
}

  let producto = {
    idProduct: "",
    nameProduct: "",
    typeProduct: "",
  };
  async function guardarProducto() {
    if (
      producto.idProduct == false ||
      producto.nameProduct.trim() == "" ||
      producto.typeProduct.trim() == ""
    ) {
      alert("Todos los campos son obligatorios");
    } else {
            console.log(producto)
            const response =  await fetch("http://localhost:8081/product/createProduct", {
              method: "POST",
              body: JSON.stringify(producto),
              headers:{
                'Content-Type': 'application/json'
             }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));;
            console.log(response);

      limpiar();
      cargarProductos();
    }
  }
  function limpiar() {
      (producto.idProduct = "");
    (producto.nameProduct = ""),
      (producto.typeProduct = "")
  }
  cargarProductos();
</script>

<div class="headerProduct col-lg-10 col-md-8 col-sm-12 d-flex justify-content-start ">
  <h2 class="p-3">Productos</h2>
  <button
    class="create btn"
    data-bs-toggle="modal"
    data-bs-target="#modalCreationProducts">Crear nuevo</button
  >
</div>
<Table {products}></Table>

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
        <input
          type="text"
          class="form-control"
          id="modal-text"
          placeholder="Nombre producto"
          bind:value={producto.nameProduct}
          required
        />
        <label for="modal-number" class="form-label">Id producto</label>
        <input
          type="number"
          class="form-control"
          id="modal-number"
          placeholder="id"
          bind:value={producto.idProduct}
          required
        />
        <label for="modal-select" class="form-label">Tipo de producto</label>
        <select
          class="form-select"
          aria-label="Default select example"
          bind:value={producto.typeProduct}
          required
        >
          <option value="Renta fija">Renta fija</option>
          <option value="Renta variable">Renta variable</option>
          <option value="Derivado">Derivados</option>
        </select>
      </div>
      <div class="modal-footer">
        <button class="guardar btn btn-primary" on:click={guardarProducto}
          >Guardar</button
        >
        <button
          class="cancelar btn btn-danger"
          data-bs-dismiss="modal"
          on:click={limpiar}>Cancelar</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  
  .modal-content {
    background-color: rgb(4, 28, 44);
    color: white;
  }
  .close {
    background-color: white;
    border-radius: 50%;
    border: none;
    opacity: 70%;
  }
  .guardar {
    background-color: white;
    color: #02111a;
    font-weight: bold;
    font-family: "Nunito", sans-serif;
    border: none;
  }
  .guardar:hover {
    background-color: rgb(0, 60, 113);
    color: white;
    font-weight: bold;
    font-family: "Nunito", sans-serif;
    border: none;
  }

  .cancelar {
    font-weight: bold;
  }
  h2{
    color: white;
    font-weight: bold;
  }
  .create{
    color: white;
    background-color: #00B5E2;
    margin-left: 30%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
</style>
