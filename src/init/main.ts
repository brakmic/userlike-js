require('es6-promise').polyfill();
require('isomorphic-fetch');
import { Api } from '../api';
import * as _ from 'lodash';

class UserlikeApi implements Api.Public.IUserlike {
    private authHeader: any;
    constructor(private apiKey: string) {
        if (_.isNil(this.apiKey)) throw new Error('ApiKey is missing!');
        this.authHeader = { 'Authorization': `${this.apiKey}` };
    }
    public chatMetas(): Promise<Api.Public.ChatMetaResponse> {
        return Api.Calls.ChatMetas.query(this.authHeader);
    }
}

export default UserlikeApi;
