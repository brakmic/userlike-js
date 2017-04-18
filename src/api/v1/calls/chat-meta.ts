import { RequestHelper, API_URLS } from '../../base';
import { ChatMeta, ChatMetaResponse } from '../public';
import * as _ from 'lodash';
const protocol = 'https';
const chatMetaUrl = `${protocol}://${API_URLS['chat_meta']}`;

const query = (authHeader: any): Promise<ChatMetaResponse> => {
    return RequestHelper.get(`${chatMetaUrl}`, authHeader)
           .then(data => {
               return <ChatMetaResponse>{
                chat_metas: data
               };
           });
};


export const ChatMetas = {
    query
};

