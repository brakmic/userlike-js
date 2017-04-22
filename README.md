# JavaScript Bindings for [Userlike](https://www.userlike.com/en/) API

This is an experimental library written in TypeScript for accessing publicly available [Userlike](https://www.userlike.com/en/public/tutorial/api/intro) APIs.

## Structure 

![image](https://image.ibb.co/gEPt0k/userlike_structure.png)

There are several DTO classes located unter *types*. For example, the [ChatMetaResponse](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/responses/chat-meta.response.ts) contains an array of [ChatMeta](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/chat-meta.ts) instances with several sub-classes, like [Message](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/message.ts), [MessagesAndEvents](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/messages-and-event.ts), [Organization](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/organization.ts), [Note](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/note.ts) etc.

*Currently, ChatMeta and Operator APIs are implemented. Other types will follow soon.*

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

## Chat Client Configuration

Although not being a part of the public API the [ChatClient](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/chat-client/index.ts#L3) class offers some interesting insights into the structure of the chat widget that can be integrated into own web pages. I discovered it accidentally while reading the code of the chat client widget. To create such a widget go to your Dashboard and select `Config/Widgets`. Then configure your chat widget and select `Install/JavaScript Widget Code`. As a response you'll get an embeddable script-tag. Just use the *src* part to load the script data in your browser.

![widget-config](https://img3.picload.org/image/rcllaill/get_chat_client_code.png)   

Your browser will show you a script containing similar data like in the screenshot below:

![script-data](https://img3.picload.org/image/rcllaila/chat_client_config.png)

Now copy the base64-encoded string from `data` property and decode it [here](https://www.base64decode.org/).  

The output will look like this:

![client_config_json](https://img5.picload.org/image/rclloggw/chat_config_json.png)

To get a nicely formatted JSON like above just go to [JSONformatter](https://jsonformatter.curiousconcept.com/).

The Chat Client classes and their properties reflect the original JavaScript structures with one exception: the [property](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/chat-client/theme.ts#L15) `chat_operator_text_color` in [Theme](https://github.com/brakmic/userlike-js/blob/master/src/platform/api/interfaces/chat-client/theme.ts#L1) class. In the original (decoded) source this property contains a white space and is named `chat_operator_text color`. I suppose that they access this property only via bracket notation so the white space is not a real problem.  

However, these classes are currently not in use. I'm using them only to learn a bit about their chat widget (*and maybe hack it in the future...who knows?*)

## License 

[MIT](https://github.com/brakmic/userlike-js/blob/master/LICENSE)

