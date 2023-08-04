const executeInjectHome = async () => {
  await injectHTML('/templates/header.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/banner.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/sectionImageText.html', document.getElementById('bodyInject'))
}

executeInjectHome()