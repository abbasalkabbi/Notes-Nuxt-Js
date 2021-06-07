<template>
  <div>
    <nav>
      <ul>
        <li>
          <Nuxt-link to="/"> Create Notes</Nuxt-link>
        </li>
        <li>
          <Nuxt-link to="/Notes"> My Notes</Nuxt-link>
        </li>
      </ul>
    </nav>
    <Nuxt />
  </div>
</template>
<style>
nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.589);
}
nav ul {
  list-style: none;
}
nav ul li {
  float: left;
}
nav ul li a {
  text-decoration: none;
  color: #fff;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #fff;
}
.nuxt-link-exact-active {
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #fff;
  background: #000;
}
</style>
