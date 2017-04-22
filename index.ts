const config = require('./src/config.json');
const jsBase64 = require('js-base64').Base64;
import * as _ from 'lodash';
import { Api } from './src';
import UserlikeApi from './src/init/main';

let api: Api.Interfaces.IUserlike;

const display = (obj: any): void => {
    console.log(obj);
};

const displayCollection = (objects: any): void => {
    _.each(objects, obj => {
        console.log(obj);
    });
};

const queryChatMetas = (): Promise<any> => {
    console.log(`Query Chat List\r\n`);
    return api.chatMetas().then((response: Api.Responses.ChatMetaResponse) => {
        console.log(`Response received containing ${response.chat_metas[0].messages_and_events.length} messages and events.\r\n`);
        displayCollection(response.chat_metas);
    });
};

const queryOperator = (): Promise<any> => {
    console.log(`Querying Operator\r\n`);
    return api.operators().then((response: Api.Responses.OperatorResponse) => {
        console.log(`Response received containing ${response.operators.length} operators.\r\n`);
        displayCollection(response.operators);
    });
};


class Client {
    constructor() {
        this.setup();
    }
    public run() {
        // queryChatMetas();
        queryOperator();
    }
    private setup() {
        api = new UserlikeApi(config.debugAuthKey);
    }
}

const client = new Client();
client.run();

