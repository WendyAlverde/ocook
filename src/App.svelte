<script>
  // import router
  import Router from 'svelte-spa-router'
  // import components
  import Header from './lib/components/Header.svelte'
  import Footer from './lib/components/Footer.svelte'
  // import pages
  import Home from './lib/pages/Home.svelte'
  import Recipes from './lib/pages/Recipes.svelte'
  import Reviews from './lib/pages/Reviews.svelte'
  import AboutUs from './lib/pages/AboutUs.svelte'
  import LogForm from './lib/pages/LogForm.svelte'
  import NotFound from './lib/pages/404.svelte'

  const routes = {
      "/": Home,
      "/recipes": Recipes,
      "/reviews": Reviews,
      "/aboutus": AboutUs,
      "/logform": LogForm,
      "*": NotFound,
  }
</script>


  <Header />
  <Router {routes} />
  <Footer />