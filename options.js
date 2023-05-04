document.getElementById('options-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const apiKey = document.getElementById('api-key').value;
  await browser.storage.local.set({ apiKey });
  alert('API Key saved');
});

(async () => {
  const { apiKey } = await browser.storage.local.get('apiKey');
  if (apiKey) {
    document.getElementById('api-key').value = apiKey;
  }
})();
