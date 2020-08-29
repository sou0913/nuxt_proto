<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Demo</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/auth">認証(firebaseui)demo</b-nav-item>
        <b-nav-item to="/regex">正規表現demo</b-nav-item>
        <b-nav-item to="/regexAdmin">正規表現管理</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
