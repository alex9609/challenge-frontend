<script>
    import {Link,navigate} from "svelte-routing";
    let src = "/images/bvc.png";
    import Login from "../components/Login.svelte"
    import Main from "./Main.svelte";
</script>
    <div class="contain d-flex justify-content-center align-content-center">
        <div class="container d-flex">
            <div class="container-login justify-content-center">
                <img class="bvcImage" src={src} alt="">
                <hr class="align-self-end">
                <p>Ta damos la bienvenida al módulo de administración.</p>
                <Login></Login>
            </div>
        </div>
    </div>
<style>
    :global(.contain) {
	width: 100%;
	height: 100%;
  }
    .contain{
        background-image:url("/images/BackgroundHome.png");
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
    }
    .container{
        width: 70%;
        display: flex;
        align-self: center;
        justify-content: center;
        align-content: center;
    }
    p{
        text-align: center;
        width: 70%;
        font-family: "nunito",sans-serif;
        font-weight: bold;
        color:white;
    }
    .bvcImage{
        width: 70%;
    }
    hr{
        height: 2%;
        width: 300px;
        border-radius: 5px;
        border-color: none;
        background-color: white;
        opacity: 100%;
        display: flex;
        display: flex;
        align-self: center;
        justify-content: center;
    }

    
</style>