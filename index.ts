const config = require('./src/config.json');
const jsBase64 = require('js-base64').Base64;
import * as _ from 'lodash';
import { Api } from './src/api';
import UserlikeApi from './src/init/main';

let api: Api.Public.IUserlike;

const display = (obj: any): void => {
    console.log(obj);
};

const displayCollection = (objects: any): void => {
    _.each(objects, obj => {
        console.log(obj);
    });
};

const queryChatMetas = (): Promise<any> => {
    console.log(`Querying Chat List\r\n`);
    return api.chatMetas().then((response: Api.Public.ChatMetaResponse) => {
        console.log(`Response received containing ${response.chat_metas[0].messages_and_events.length} messages and events.\r\n`);
        displayCollection(response.chat_metas);
    });
};


class Client {
    constructor() {
        this.setup();
    }
    public run() {
        queryChatMetas();
    }
    private setup() {
        api = new UserlikeApi(config.debugAuthKey);
    }
}

const client = new Client();
client.run();

