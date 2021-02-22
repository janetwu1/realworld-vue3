<!-- src/layout/AppLayout.vue -->
<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <!-- <a class="nav-link active" href="/">Home</a> -->
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/articleCreate">
            <i class="ion-compose"></i>&nbsp;New Post
          </a> -->
          <router-link class="nav-link" to="/articleCreate">  <i class="ion-compose"></i>&nbsp;New Post</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/settings"><i class="ion-gear-a" ></i>&nbsp;Settings</router-link>
          <!-- <a class="nav-link" href="/settings">
            <i class="ion-gear-a" ></i>&nbsp;Settings
          </a> -->
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="/login">Sign up</a> -->
          <router-link class="nav-link" to="login">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <!-- 路由出口 -->
  <router-view />

  <footer>
    <div class="container">
      <a href="/" class="logo-font">conduit</a>
      <span class="attribution">
        An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
</template>
