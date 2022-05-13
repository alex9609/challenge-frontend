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
<div class="main d-flex justify-content-center">
    <div class="row">
        <div class="col content-main d-flex align-items-center">
          <p>
            Hola {name} , lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida viverra nisi nec cursus.
          </p>
        </div>
        <div class="col">
        </div>
      </div>
</div>
<footer>
  <Footer></Footer>
</footer>
<style>
    .main{
        height: 90%;
        background-image: url("/images/photoMainPage.png");
    }
     .content-main{
        padding-left: 50px;
        width: 40%;
        text-align: justify;
        font-size: 1.5rem;
        font-family: 'Nunito',sans-serif;
        font-weight: bold;
        color: white;
    }
</style>