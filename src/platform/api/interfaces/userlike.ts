import { ChatMetaResponse, OperatorResponse } from '../responses';

export interface IUserlike {
    chatMetas: () => Promise<ChatMetaResponse>;
    operators: () => Promise<OperatorResponse>;
}
