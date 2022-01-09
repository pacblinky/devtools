<template>
<header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">DevTools</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link to="/" class="nav-link">Intro</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/avawpns" class="nav-link">availableWeapons</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/mapcycle">Mapcycles</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/weaponcfg" class="nav-link">Weapons config</router-link>
            </li>
          <li class="nav-item">
              <router-link to="/customcmd" class="nav-link">Custom commands</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <br>
    <router-view />
</template>

<script>
export default {
    name: "App",
}
</script>