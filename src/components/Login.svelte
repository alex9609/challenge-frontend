<script>
    import {provider} from "../firebase";
    import { getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
    import { navigate } from "svelte-routing";

    const procesarFormulario = async() =>{
        
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            navigate('/Main',{replace:true});          
        
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
       
    }
</script>
<div class="container-login-enlace">
    <div class="google">
        <button type="submit" on:click={procesarFormulario} class="btn-google">
            <img class=""src="/images/Google.png" alt="">
        </button>                    
        <button type="submit" on:click={procesarFormulario} class="btn btn-primary container-login-btngoogle">
            Ingresa con tu cuenta de google bvc
        </button>
    </div>
</div>
<style>
    .container-login-enlace{
        margin-top: 10%;
        align-items: center;
    }
    .container-login-btngoogle{
        text-decoration: none;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 14px;
        border: none;
    }
    .btn-google{
        height: 50px;
        width: 50px;
        text-decoration: none;
        align-self: center;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-size: 14px;
        border: none;
        border-radius: 50%;
    }
    .btn{
        background-color: #00B5E2;
        padding: 15px 10px 15px 10px;
    }
</style>