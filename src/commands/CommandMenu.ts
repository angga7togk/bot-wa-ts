import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandMenu extends Command{

    constructor() {
        super('menu', 'ini command menu', ['help'])
    }

    execute(msg: Message, args: string[]): void {
        msg.reply('ini adalah menu')
    }
    
}