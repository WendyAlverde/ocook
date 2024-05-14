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
  import Tips from './lib/pages/Tips.svelte'
  import LogForm from './lib/pages/LogForm.svelte'
  import LegalNotice from './lib/pages/LegalNotice.svelte'
  import NotFound from './lib/pages/404.svelte'

  const routes = {
      "/": Home,
      "/recipes": Recipes,
      "/reviews": Reviews,
      "/aboutus": AboutUs,
      "/tips": Tips,
      "/logform": LogForm,
      "/legalNotice": LegalNotice,
      "*": NotFound,
  }
</script>

  <Header />
    <Router {routes} />
  <Footer />