import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Message, EmbedBuilder, Client } from "discord.js";
import { UtilsService } from "src/bot/utils/utils.service";
import { DataSource, Repository } from "typeorm";
import { CommandLine, CommandLineClass } from "../../base/command.base";
import { TABLE } from "../../constants/table";
import { ReportService } from "./report.service";

const messHelpDaily =
  "```" +
  "*report daily" +
  "\n" +
  "*report weekly" +
  "\n" +
  "*report daily dd/MM/YYYY" +
  "```";

@CommandLine({
  name: "report",
  description: "report",
})
export class OrderCommand implements CommandLineClass {
  constructor(
    private reportService: ReportService,
    private utilsService: UtilsService
  ) {}

  async execute(message: Message, args, client: Client) {
    try {
      // if (args[0] === "daily") {
      //   if (args[1]) {
      //     const day = args[1].slice(0, 2);
      //     const month = args[1].slice(3, 5);
      //     const year = args[1].slice(6);

      //     const fomat = `${month}/${day}/${year}`;
      //     const dateTime = new Date(fomat);
      //     if (
      //       !/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/.test(
      //         args[1]
      //       )
      //     ) {
      //       return message.channel.send(messHelpDaily);
      //     }
      //     await reportDaily(dateTime, message, args, client, guildDB);
      //   } else {
      //     await reportDaily(null, message, args, client, guildDB);
      //   }
      // } else if (args[0] === "weekly") {
      //   for (const day of getTimeWeekMondayToFriday(new Date().getDay())) {
      //     await reportDaily(day, message, args, client, guildDB);
      //   }
      // } else if (args[0] === "mention") {
      //   await reportMention(message, args, client, guildDB);
      // } else if (args[0] === "checkcamera") {
      //   await reportCheckCamera(message, args, client, guildDB);
      // } else if (args[0] === "wfh" && args[1] === "complain") {
      //   await reportCompalinWfh(message, args, client, guildDB);
      // } else if (args[0] === "wfh") {
      //   await reportWfh(message, args, client, guildDB);
      // } else if (args[0] === "msgcount") {
      //   await reportMessageCount(message, args, client, guildDB);
      // } else if (args[0] === "quiz") {
      //   await reportScore(message, args, client, guildDB);
      // } else if (args[0] === "womenday") {
      //   await reportWomenDay(message);
      // } else if (args[0] === "order") {
      //   await reportOrder(message);
      // } else if (args[0] === "opentalk") {
      //   await reportOpentalk(message);
      // } else if (args[0] === "komuweekly") {
      //   await handleKomuWeeklyReport(message, args, client, guildDB);
      // } else if (args[0] === "tracker") {
      //   await reportTracker(message, args, client);
      // } else if (args[0] === "holiday") {
      //   await reportHoliday(message, args, client);
      // } else if (args[0] === "ts") {
      //   await reportCheckout(message, args, client);
      // } else if (args[0] === "help") {
      //   return message
      //     .reply(
      //       "```" +
      //         "*report options" +
      //         "\n" +
      //         "options  " +
      //         "\n" +
      //         [
      //           { name: "daily", des: "show daily today" },
      //           { name: "weekly", des: "show daily weekly" },
      //           { name: "mention", des: "show check mention day" },
      //           { name: "checkcamera", des: "show checkcamera day" },
      //           {
      //             name: "wfh ",
      //             des: "show user don't reply to bot ",
      //           },
      //           {
      //             name: "wfh complain",
      //             des: "show user don't reply to bot & pm confirm",
      //           },
      //           {
      //             name: "msgcount",
      //             des: "show top 20 count message",
      //           },
      //           {
      //             name: "quiz",
      //             des: "show top 10 quiz",
      //           },
      //           {
      //             name: "komuweekly",
      //             des: "show Komu weekly report",
      //           },
      //           {
      //             name: "tracker",
      //             des: "show report tracker today",
      //           },
      //           {
      //             name: "holiday",
      //             des: "show report holiday",
      //           },
      //           {
      //             name: "ts",
      //             des: "show report timesheet",
      //           },
      //         ]
      //           .map((item) => `- ${item.name} : ${item.des}`)
      //           .join("\n") +
      //         "```"
      //     )
      //     .catch(console.error);
      // } else {
      //   return message
      //     .reply("```" + "*report help" + "```")
      //     .catch(console.error);
      // }
    } catch (err) {
      console.log(err);
    }
  }
}