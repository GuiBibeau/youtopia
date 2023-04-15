
export const getChannelInfoCompletion = async (channelInfo: string) => {
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
            You are connected to an API able to interact with YouTube channels.
             This is the result of your research in stringified JSON. The user is non technical and does not talk dev lingo
            ---
            ${channelInfo}
            ---

            Explain to the user that you will now brainstorm with them.
            Give them a quick summary about what you know from their channel and state the channel's name. Don't mention JSon
            After the summary, ask them if they are ready to start automating the channel with you.
            `,
          }
        ],
        stream: true,
      }),
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
