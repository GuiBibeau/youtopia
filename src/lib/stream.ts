import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

/**
 * The function creates a readable stream from a response object and parses the data to extract text.
 * @param {Response} res - The `res` parameter is a `Response` object, which is typically returned from
 * a network request made using the `fetch()` function in JavaScript. It represents the response to
 * that request, including the status code, headers, and body of the response.
 * @returns A ReadableStream object is being returned.
 */
export const getTextStreamFromResponse = (res: Response) => {
  let counter = 0;
  const decoder = new TextDecoder();

  return new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";
            if (counter < 2 && (text.match(/\n/) || []).length) {
              // this is a prefix character (i.e., "\n\n"), do nothing
              return;
            }
            const queue = text;
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            // maybe parse error
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse);
      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });
};
