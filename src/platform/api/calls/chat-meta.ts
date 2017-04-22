import { RequestHelper, API_URLS } from '../../base';
import { ChatMeta } from '../types';
import { ChatMetaResponse } from '../responses';
import * as _ from 'lodash';
const protocol = 'https';
const operatorUrl = `${protocol}://${API_URLS['chat_meta']}`;

const query = (authHeader: any): Promise<ChatMetaResponse> => {
    return RequestHelper.get(`${operatorUrl}`, authHeader)
           .then(data => {
               return <ChatMetaResponse>{
                chat_metas: data
               };
           });
};


export const ChatMetas = {
    query
};
