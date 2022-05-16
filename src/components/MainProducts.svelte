<script>
    import Footer from "../components/Footer.svelte";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { navigate } from "svelte-routing";
      const auth = getAuth();
      let name = ''
      onAuthStateChanged(auth, (user) => {
      if (user) {
          name = user.displayName;
      } else {
          navigate('/',{replace:true});
      }
    });    
</script>
<div class="main  d-flex align-items-center">
    <div class="row">
        <div class="texto col-7 d-flex justify-content-center align-items-center">
          <p class="text-center">
            Hola {name} , lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida viverra nisi nec cursus.
          </p>
        </div>
        <div class="col-5"></div>
    </div>
</div>
<style>
  .main{
    height: 100%;
  }
  .row{
    margin-left: 10%;
    margin-right: 10%;
    min-height: 100%;
  }

  .texto{
    font-size: 30px;
    font-weight: bold;
    color: white;
  }

    
</style>