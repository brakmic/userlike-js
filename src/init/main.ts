require('es6-promise').polyfill();
require('isomorphic-fetch');
import { Api } from '../platform';
import * as _ from 'lodash';

class UserlikeApi implements Api.Interfaces.IUserlike {
    private authHeader: any;
    constructor(private apiKey: string) {
        if (_.isNil(this.apiKey)) throw new Error('ApiKey is missing!');
        this.authHeader = { 'Authorization': `${this.apiKey}` };
    }
    public chatMetas(): Promise<Api.Responses.ChatMetaResponse> {
        return Api.Calls.ChatMetas.query(this.authHeader);
    }
    public operators(): Promise<Api.Responses.OperatorResponse> {
        return Api.Calls.Operators.query(this.authHeader);
    }
}

export default UserlikeApi;
