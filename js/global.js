const navSelected = {
  '/': 'navHome',
  '/quienes-somos': 'navQuienesSomos'
}

const selectNavigation = () => {
  const navSelect = navSelected[window.location.pathname] || null
  if (navSelect) {
    const element = document.getElementById(navSelect)
    element.className += ' navItemSelected'
  }
}

setTimeout(() => { selectNavigation() }, 800)
