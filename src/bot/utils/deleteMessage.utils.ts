import { Client, TextChannel } from "discord.js";

export async function deleteMessage(client: Client, req, res) {
  try {
    const fetchMessage = await client.channels.fetch(req.body.channelId);
    const msg = await (fetchMessage as TextChannel).messages
      .fetch(req.body.messageId)
      .catch((err) => {});
    if (msg) msg.delete();
    res.status(200).send({ message: "Successfully!" });
  } catch (error) {
    console.log(error);
  }
}
