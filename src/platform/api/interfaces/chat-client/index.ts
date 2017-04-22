import { ChatConfig } from './chat-config';

export interface ChatClient {
    app_key: string;
    widget_key: string;
    config: ChatConfig
};
