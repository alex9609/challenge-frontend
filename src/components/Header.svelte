<script>
    import { getAuth, signOut } from "firebase/auth";
    const cerrarsesion = async() =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        navigate('/',replace(true))
        }).catch((error) => {
        });
    };
</script>
<div class="header">
    <div class=row>
        <div class="col-12 d-flex justify-content-end">
            <button class="btn d-flex align-items-start" on:click={cerrarsesion}>
                <p>|</p>
                Logout
                <i class="fa-solid fa-circle"></i>
            </button>
        </div>
    </div>
</div>

<style>
    .header{
        background-color: #1D252D;
        height: 35px;
    }
    .btn{
        color: white;
        font-size: 15px;
    }
   p{
       margin-right: 10px;
   }

    i{
        color: red;
        font-size: 8px;
        margin-left: 10px;
    }

    .row{
        margin-right: 10%;
        margin-left: 10%;
        height: 35px;
    }
</style>