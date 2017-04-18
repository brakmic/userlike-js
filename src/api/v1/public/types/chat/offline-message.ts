import { ChatWidget } from './chat-widget';
import { Organization } from './organization';

export interface OfflineMessage {
	loc_city: string;
	topic: string;
	browser_version: string;
	message: string;
	id: number;
	data_privacy?: any;
	client_name: string;
	custom?: any;
	chat_widget: ChatWidget;
	status: string;
	loc_lon: number;
	visits: number;
	loc_country: string;
	marked_read: boolean;
	browser_os: string;
	url: string;
	created_at: string;
	browser_name: string;
	loc_lat: number;
	client_email: string;
	has_screenshot: boolean;
	organization: Organization;
	page_impressions: number;
}
