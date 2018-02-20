Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  console.log('Overwrite of "visit" called with url', url)

  return originalFn(url, {
    // The bug: This hook is never getting called!
    onBeforeLoad (win) {
      win.mocked = 'mocked'
    }
  })
})
