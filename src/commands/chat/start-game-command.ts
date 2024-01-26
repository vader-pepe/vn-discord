import { Command, CommandDeferType } from "../index.js";
import { Lang } from '../../services/index.js';
import { Language } from '../../models/enum-helpers/index.js';
import { ChatInputCommandInteraction, PermissionsString } from "discord.js";
import { EventData } from "../../models/internal-models.js";
import { StartGameCommandEnum } from "../../enums/start-game-command.js";
import { InteractionUtils } from "../../utils/interaction-utils.js";

export class StartGameCommand implements Command {
  public names = [Lang.getRef('chatCommands.start-game', Language.Default)];
  public deferType = CommandDeferType.HIDDEN;
  public requireClientPerms: PermissionsString[] = []
  public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
    let args = {
      command: intr.options.getString(
        Lang.getRef('arguments.command', Language.Default)
      ) as StartGameCommandEnum,
    };

    switch (args.command) {
      case StartGameCommandEnum.START:
        await InteractionUtils.send(intr, 'game started?')
        break;

      default:
        break;
    }
  }
}
