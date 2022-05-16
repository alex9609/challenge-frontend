<script>
     let filtrar = "";
     export let products;
     let cargarProductos = async () =>{
        await fetch("http://localhost:8081/product/consult/"+filtrar)
        .then(res => res.json()).catch(console.log)
        .then((datosRespuesta) => { //Me devuelve los datos respuesta
			products = datosRespuesta; //Almaceno los datos en un arreglo
		  }).catch(console.log) //Impresion de los rerores si hay errores
  }
    $: if (filtrar === "Renta fija"){
        cargarProductos();
    }else if (filtrar === "Renta variable") {
        cargarProductos();
    }else if (filtrar === "Derivado"){
        cargarProductos();
    }else{
      cargarProductos();
    }

</script>
<!--Table-->
<div class="row table">
    <div class="row">
      <div class="col col-lg-4 col-md-6 organice  flex-row bd-highlight mb-3">
        <p class="filtrar">Filtrar por:</p>
        <select
          class="select form-select"
          aria-label="Default select example"
          bind:value={filtrar}
          
        >
          <option selected value="">Tipo de producto</option>
          <option value="Renta fija">Renta fija</option>
          <option value="Renta variable">Renta variable</option>
          <option value="Derivado">Derivado</option>
        </select>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 ">
          <table class="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Id</th>
                <th>Tipo producto</th>
              </tr>
            </thead>
            <tbody>
              {#each products as prod}
              <tr>
                <td class="nameProduct">{prod.nameProduct}</td>
                <td>{prod.idProduct}</td>
                <td>{prod.typeProduct}</td>
              </tr>
              {/each}
            </tbody>
          </table>
      </div>
    </div>
</div>

  <style>
      .table{
          border-top: none;
          margin-left: 0;
      }
      .filtrar{
          color: white;
          font-weight: bold;
      }
      .select{
          background-color:#02111a;
          color: #00B5E2;
          border-radius: 5px;
          border-top: 13px;
         
      }
      th{

        font-weight: bold;
      }
      td,th{
        text-align: center;
        color: white;
      }

      .nameProduct{
        color: #00B5E2;
      }

  </style>