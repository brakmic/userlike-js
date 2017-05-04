# JavaScript Bindings for [Userlike](https://www.userlike.com/en/) API

This is an experimental library written in TypeScript for accessing publicly available [Userlike](https://www.userlike.com/en/public/tutorial/api/intro) APIs.

## Structure 

![image](https://image.ibb.co/gEPt0k/userlike_structure.png)

There are several DTO classes located unter *types*. For example, the [ChatMetaResponse](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/responses/chat-meta.response.ts#L3) contains an array of [ChatMeta](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/chat/chat-meta.ts#L8) instances with several sub-classes, like [Message](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/message/message.ts#L1), [MessagesAndEvent](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/message/messages-and-event.ts#L1), [Organization](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/common/organization.ts#L1), [Note](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/chat/note.ts#L1) etc.

|  Classes   |
|----|
| [ChatMeta](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/chat/chat-meta.ts)   |
| [Message](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/message/message.ts)   |
| [Operator](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/types/operator/operator.ts)   |

| Interfaces |
|---|
| [Userlike](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/userlike.ts) |
| [ChatWidget](https://github.com/brakmic/userlike-js/tree/master/src/platform/api/interfaces/chat-widget) => *see also* [Config](#chat-widget-configuration)|


## Installation

`npm install`

or 

`yarn install`

## Running

To run the demo from [index.ts](https://github.com/brakmic/userlike-js/blob/master/index.ts#L21) type `npm run start:client`.

Don't forget to put your API keys into [src/config.json](https://github.com/brakmic/userlike-js/blob/master/src/config.json).

Your console output would then look like this:

![console output](https://picload.org/image/rcolacai/chat_meta.png)

To get a key you have to [register](https://www.userlike.com/en/pricing) first. There's a free, 14-day-limited subscription available. 

## Tests

`npm test`

![userlike_tests](https://picload.org/image/rcllwdwi/userlike_tests.png)

## Chat Widget Configuration

Although not a part of the public API the [ChatWidget](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/chat-widget/index.ts#L3) class offers some interesting insights into the structure of the chat widget that can be integrated into own web pages. I discovered it accidentally while reading the automatically generated code of the chat client. To create this widget go to your Dashboard and select `Config/Widgets`. After you've configured it select `Install/JavaScript Widget Code`. An embeddable script-tag will show up. Now, open the URL from *src* in your browser.

![widget-config](https://img3.picload.org/image/rcllaill/get_chat_client_code.png)   

You'll get a script similar to this one:

![script-data](https://img3.picload.org/image/rcllaila/chat_client_config.png)

In the next step copy the base64-encoded string from `data` property and decode it [here](https://www.base64decode.org/). 

You'll receive an output containing JSON data:

![client_config_json](https://img5.picload.org/image/rclloggw/chat_config_json.png)

To get your data nicely formatted just go to [JSONformatter](https://jsonformatter.curiousconcept.com/).

The Chat Widget classes and their properties reflect the original JavaScript structures with one exception: the [property](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/chat-widget/theme.ts#L15) `chat_operator_text_color` in [Theme](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/chat-widget/theme.ts#L1) class. In the original (decoded) source it contains a white space: 

`chat_operator_text color`

I suppose that they access it only via bracket notation so the white space is not a real problem.  

However, these classes are currently not in use. I'm using them only to learn a bit about their chat widget (*and maybe hack it in the future...who knows?*)

## License 

[MIT](https://github.com/brakmic/userlike-js/blob/master/LICENSE)

