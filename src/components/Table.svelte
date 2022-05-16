<script>
     let filtrar = "";
     export let products;
    $: if (filtrar === "Renta fija"){
        console.log("Renta fija")
    }else if (filtrar === "Renta variable") {
        console.log("Renta variable")
    }else if (filtrar === "Derivado"){
        console.log("Derivado")
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
          placeholder="Tipo producto"
          bind:value={filtrar}
         
        >
          <option value="Renta fija">Renta fija</option>
          <option value="Renta variable">Renta variable</option>
          <option value="Derivado">Derivado</option>
        </select>
      </div>
    </div>
    <div class="row">
        {#each products as prod}
             <div>{prod.idProduct} {prod.nameProduct} {prod.typeProduct}</div>
        {/each}
    </div>
    
  </div>

  <style>
      .table{
          background-color: blue;
          margin-left: 0;
      }
      .filtrar{
          color: white;
          font-weight: bold;
      }
      .select{
          background-color:#02111a;
          color: #00B5E2;
          border: none;
          border-radius: 5px;
          border-bottom: 3px #00B5E2;
      }


  </style>