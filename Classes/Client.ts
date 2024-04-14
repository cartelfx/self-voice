import { Client, Intents, ClientOptions } from 'discord.js-selfbot-v13';

import { joinVoiceChannel, VoiceConnectionStatus } from "@discordjs/voice";



interface VoiceOptions extends ClientOptions {

    token: string[];

    channel: string;

    guild: string;

    intents: (Intents | keyof typeof Intents)[];

}



class VOICE extends Client {

    private tokens: string[];

    private channel: string;

    private guild: string;

    private intents: (Intents | keyof typeof Intents)[];



    constructor(options: VoiceOptions) {

        super(options);

        this.tokens = options.token;

        this.channel = options.channel;

        this.guild = options.guild;

        this.intents = options.intents;

    }



    public async _fetch(): Promise<void> {

        for (const token of this.tokens) {

            try {

                await this.login(token);

                console.log(`${this.user?.username} isimli tokene giriş yapıldı.`);

                await this.test(this.guild, this.channel);

            } catch (error) {

                console.error(`${token}: Giriş Yapılamadı`, error);

            }

        }

    }



    private async test(guildId: string, channelId: string): Promise<void> {

        const guild = this.guilds.cache.get(guildId);

        if (!guild) {

            console.error(`${guildId} sunucu bulunamadı.`);

            return;

        }



        const channel = guild.channels.cache.get(channelId);

        if (!channel || channel.type !== 'GUILD_VOICE') {

            console.error(`${channelId} ses kanalı bir ses kanalı olmadığından giriş yapılamadı.`);

            return;

        }



        try {

            const connection = joinVoiceChannel({

                channelId: channel.id,

                guildId: guildId,

                adapterCreator: guild.voiceAdapterCreator,

                selfDeaf: false,

                selfMute: true,

            });



            connection.on(VoiceConnectionStatus.Ready, () => {

                console.log(`${this.user?.username} isimli token ${channel.name} isimli ses kanalına katıldı.`);

            });

        } catch (error) {

            console.error(`${this.user?.username} isimli token ${channel.name} kanalına giriş yapamadı.`);

            process.exit();

        }

    }

}



export { VOICE };
