import * as _ from 'lodash';
import { RequestHelper } from '../../base';
import { IConfig } from '../public';
const jsBase64 = require('js-base64').Base64;

export class ApiAuth {
    private apiKeyBase64: string;
    private apiCleartext: string;
    constructor(private apiKey = undefined, private isDebugMode: boolean = true) {
       this.setup();
    }
    public getBase64Key() {
        return this.apiKeyBase64;
    }
    public getCleartextKey() {
        return this.apiCleartext;
    }
    public isRunningInDebugMode() {
        return this.isDebugMode;
    }
    private setup() {
         if (this.isDebugMode) {
            console.log(`Userlike API runs in debug mode.`);
        } else {
            console.log(`Userlike API runs in production mode.`);
        }
        if (_.isNil(this.apiKey)) {
            RequestHelper.get('config.json').then((config: IConfig) => {
                console.log(`Received config.json from server.`);
                if (this.isDebugMode) {
                    this.apiKeyBase64 = this.toBase64(config.debugAuthKey);
                    this.apiCleartext = config.debugAuthKey;
                } else {
                    this.apiKeyBase64 = this.toBase64(config.productionAuthKey);
                    this.apiCleartext = config.productionAuthKey;
                }
            });
        }
        console.log(`Using key: ${this.apiKey}`);
    }
    private toBase64(key: string): string {
        return jsBase64.encode(key);
    }
}
