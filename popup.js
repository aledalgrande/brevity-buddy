document.addEventListener('DOMContentLoaded', async () => {
  try {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    const response = await browser.tabs.sendMessage(tabs[0].id, { action: 'summarize' });

    if (response && response.summary) {
      document.getElementById('summary').value = response.summary;
    } else {
      document.getElementById('summary').value = 'No summary available';
      console.error('Error: Invalid response', response);
    }
  } catch (error) {
    document.getElementById('summary').value = 'An error occurred';
    console.error('Error:', error);
  }
});
