<script lang="ts">
  import { users } from "../../data/users";


  let userName:string = '';
  let password:string = '';

  function login(){
    const user = users.find(user=>user.email === userName && user.password === password);
    if(user){
        window.location.href = '/cursos';
        localStorage.setItem('user', JSON.stringify(user))
    
    }else{
      alert('Usuario o contraseña incorrectos');
    }
  }

  function onEmailChange(e:Event){
    const target = e.target as HTMLInputElement;
    userName = target.value;
  }

  function onPasswordChange(e:Event){
    const target = e.target as HTMLInputElement;
    password = target.value;
  }

</script>
<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col  lg:w-1/2">
      <div class="text-center lg:text-left w-1/2">
        <h1 class="text-5xl font-bold">Ingresa ahora!</h1>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form class="card-body">
          <div class="form-control">
            <label class="label" for="email">
              <span class="label-text">Email</span>
            </label>
            <input id="email" type="email" placeholder="email" class="input input-bordered" required on:change={(e)=>onEmailChange(e)} />
          </div>
          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text">Contraseña</span>
            </label>
            <input id="password" type="password" placeholder="contraseña" class="input input-bordered" required on:change={(e)=>onPasswordChange(e)} />
            <div class="label">
              <button type="button" class="label-text-alt link link-hover">olvidaste la contraseña?</button>
            </div>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" 
            on:click={login}
            >Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  </div>