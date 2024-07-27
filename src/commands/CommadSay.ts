import { Message } from "whatsapp-web.js";
import Command from "./Command";

export class CommandSay extends Command{
    
    constructor(){
        super('say', 'ini adalah command say', ['say2'])
    }

    execute(msg: Message, args: string[]): void {
        if(args.length < 1){
            msg.reply('mohon masukan kata kata!')
            return;
        }
        msg.reply(args.join(' '))
    }
    
}


