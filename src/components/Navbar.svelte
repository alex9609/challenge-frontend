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
<nav class="contain-nav">
    <div class="row">
        <div class="col-2 d-flex align-items-center">
            <a  href="/Main">
                <img class="bvc-image" src="/images/bvc.png" alt="">
            </a>
        </div>
        <div class="col-8 d-flex align-items-center">
            <ul class="main-menu d-flex justify-content-start ">
                <li>
                    <a class="enlaces products" href="/ListProducts">Productos</a>
                </li>
                <span>|</span>
                <li>
                    <span class="enlaces" >About us</span>
                </li>
                <span>|</span>
                <li>
                    <span class="enlaces" >Work with us</span>
                </li>
              </ul>
        </div>
        <div class="col-2 user text-end">
                <h3>Hola</h3>
                <p>{name}</p>
        </div>
    </div>
</nav>

<style>
    .contain-nav{
        background-color: #02111a;
    }
    .row{
        margin-left: 10%;
        margin-right: 10%;
    }
    .bvc-image{
        width: 95px;
        height: 60px;
    }

    li{
        margin-right: 4%;
    }

    .main-menu{
        list-style: none;
        width: 100%;
    }

    .enlaces{
        text-decoration: none;
        color: #00B5E2;
        font-weight: bold;
        font-size: 25px;
    }
    span{
        font-size: 25px;
        color: white;
        margin-right: 20px;
    }

    .user{
        color: white;
    }

    p{
        font-weight: bold;
    }


</style>