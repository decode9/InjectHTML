const executeInjectQuienesSomos = async () => {
  await injectHTML('/templates/header.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/banner.html', document.getElementById('bodyInject'))
}

executeInjectQuienesSomos()