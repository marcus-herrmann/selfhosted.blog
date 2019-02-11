<template>
  <div class="wrapper">
    <header>
      <logo/>
    </header>
    <main role="main" class="container">
      <intro/>
      <how-tos/>
      <ssg/>
    </main>
    <site-footer/>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import Intro from "~/components/Intro.vue";
  import HowTos from "~/components/HowTos.vue";
  import Ssg from "~/components/Ssg.vue";
  import SiteFooter from "~/components/SiteFooter.vue";

  export default {
    components: {
      Logo,
      Intro,
      HowTos,
      Ssg,
      SiteFooter
    }
  };
</script>

<style>

  /* ibm-plex-sans-regular - latin */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Sans'), local('IBMPlexSans'),
    url('/fonts/ibm-plex-sans-v2-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */ url('/fonts/ibm-plex-sans-v2-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* ibm-plex-sans-700 - latin */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'),
    url('/fonts/ibm-plex-sans-v2-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */ url('/fonts/ibm-plex-sans-v2-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html {
    background-color: #470319;
  }

  h2 {
    margin-bottom: 1em;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 1rem;
    }

    a,
    p {
      font-size: .85rem;
    }

    a {
      line-height: 1.5;
    }
  }

  blockquote {
    font-style: italic;
    margin: 1rem;
  }

  blockquote:before {
    content: '» ';
  }

  blockquote:after {
    content: '«';
  }

  header {
    background: #fff;
    min-height: 5rem;
    position: relative;
    margin-bottom: 3rem;
  }

  header:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 2rem;
    bottom: -2rem;
    background: #fff;
    z-index: -1;
    transform: skewY(-2deg);
  }

  .container {
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.72;
    font-size: 1.1rem;
    color: #fff;
  }

  .container li {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 700px) {
    .container li {
      line-height: 1.4;
    }
  }

  .section {
    margin-bottom: 2rem;
    transform: skewY(-2deg);
    display: flex;
    justify-content: center;
  }

  .section__inner {
    max-width: 54rem;
    padding-left: 2rem;
    padding-right: 2rem;
    transform: skewY(2deg);
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
  }

  .section--highlighted {
    background: rgba(255, 255, 255, .1);
  }

  ol,
  ul,
  p {
    margin: 1rem 0;
  }

  ol,
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ol.text-list,
  ul.text-list {
    padding-left: 15px;
  }

  .text-list li {
    list-style-type: none;
    position: relative;
    margin-bottom: 0.75em;
  }

  .text-list li:before {
    content: '•';
    display: inline-block;
    position: absolute;
    left: -.8em;
    color: #d9dd77;
  }

  a {
    color: #fff;
    font-weight: bold;
    transition: color .25s;
  }

  a:hover,
  a:focus {
    color: #6bdbd7;
  }

  @media screen and (max-width: 700px) {

    header {
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 1rem;
    }

    header::after {
      bottom: -.5rem;
    }

    h2 {
      margin-bottom: .5em;
    }

    .logo-icon {
      margin-top: 0;
      margin-bottom: 0;
    }

    .section {
      margin-bottom: 0;
      padding-bottom: 2rem;
    }

    .section__inner {
      margin: 3rem auto 0;
    }

    .container {
      padding-bottom: 4rem;
    }

  }

</style>
