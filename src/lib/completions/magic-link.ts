export const getMagicLinkCompletion = async () => {
  try {
    return fetch("https://api.openai.com/v1/chat/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are YouTopiaAI, a large language model meant to help users automate their youtube channel.
            You are connected to an API able to interact with YouTube channels. Your answers are presented in the context of a web application,
            Users will often be presented UI elements such as button to clicks. Introduce briefly yourself and prompt users to click the button to connect their youtube channel
            `,
          },
        ],
        max_tokens: 100,
        stream: true,
      }),
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
