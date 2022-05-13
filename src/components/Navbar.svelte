<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { navigate } from "svelte-routing";
    const auth = getAuth();
    let name = '';
    onAuthStateChanged(auth, (user) => {
    if (user) {
        name = user.displayName;
    } else {
        navigate('/',{replace:true});
    }
  });
</script>
<br>
<br>
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img class="navbar-img" src="/images/bvc.png" alt="">
        </a>
          <ul class="navbar-nav d-flex justify-content-start">
            <li class="nav-item active">
                <a class="products nav-link" href="/">Productos</a>
            </li>
            <li class="nav-item active">
                <span class="pipe" >|</span>
            </li>
          </ul>
          <div class="saludo d-flex flex-column">
                <h3>Hola</h3>
                <p>{name}</p>
          </div>
    </div>
</nav>
<style>
    .navbar{
        padding-right: 20px;
        padding-left: 100px;
        height:12%;
        background-color: black;
    }
    .navbar-img{
        width: 50%;
    }
    .nav-item a{
        padding-left: 20px;
        padding-right: 20px;
        text-decoration: none;
        font-size: 22px;
        font-weight: bold;
        color: white;
    }
    .nav-item a:hover{
        color: white;
        text-decoration: underline;
    }
    .saludo{
        text-align: end;
        color: white;
        
    }
    .saludo h3{
        font-size: 20px;
    }
    .saludo p{
        font-size: 15px;
    }
    .nav-item .pipe{
        font-size: 30px;
        font-weight: bold;
        color:#0c496e;
    }
</style>