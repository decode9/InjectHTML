const injectHTML = async (injectPath, element) => {
  try {
    const response = await fetch(injectPath);
    if (!response.ok) return
    const text = await response.text()
    element.innerHTML += text
  } catch (error) {
    console.log(error)
  }
}
const executeInject = async () => {
  await injectHTML('/templates/header.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/banner.html', document.getElementById('bodyInject'))
  await injectHTML('/templates/sectionImageText.html', document.getElementById('bodyInject'))
}

executeInject()