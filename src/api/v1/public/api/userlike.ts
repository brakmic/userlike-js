import { ChatMetaResponse } from '../responses';

export interface IUserlike {
    // get ChatMeta
    chatMetas: () => Promise<ChatMetaResponse>;
}
