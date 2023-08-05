const executeInjectHome = async () => {
  await injectHTML('/templates/header-test.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/banner.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/sectionImageText.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/sectionText.html', document.getElementById('bodyInject'))
}

executeInjectHome()