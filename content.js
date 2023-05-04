browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'summarize') {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <your API key here>',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {role: "system", content: "summarize the content I give you in max 200 words, by using a title and bullet points"},
              {role: "user", content: `summarize the following content in max 200 words, by using a title and bullet points\n${document.body.innerText}`}
            ],
            max_tokens: 300,
            temperature: 0
          })
      });
      const data = await response.json();
      return { summary: data.choices[0].message.content.trim() };
    } catch (error) {
      console.error('Error:', error);
    }
    return true;
  }
});
