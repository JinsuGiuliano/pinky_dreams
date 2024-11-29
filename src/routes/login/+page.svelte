<script>

	import { goto } from "$app/navigation";

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
            <input id="email" type="email" placeholder="email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text">Contraseña</span>
            </label>
            <input id="password" type="password" placeholder="contraseña" class="input input-bordered" required />
            <div class="label">
              <button type="button" class="label-text-alt link link-hover">olvidaste la contraseña?</button>
            </div>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" 
            on:click={()=>goto('/courses')}
            >Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  </div>