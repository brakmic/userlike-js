import { ChatConfig } from './chat-config';

export interface ChatWidget {
    app_key: string;
    widget_key: string;
    config: ChatConfig
};
