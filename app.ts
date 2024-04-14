import { VOICE } from "./Classes/Client";

import { tokens, channel, guild } from './settings';

const cartel = new VOICE({

    token: tokens,

    channel: channel,

    guild: guild,

    intents: ["ALL"]

});



cartel._fetch();
