import { CommandSay } from "./commands/CommadSay";
import Command from "./commands/Command";
import { CommandMenu } from "./commands/CommandMenu";

const commands: Command[] = [
    new CommandSay(),
    new CommandMenu()
];

export default commands