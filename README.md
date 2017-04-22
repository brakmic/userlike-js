# JavaScript Bindings for [Userlike](https://www.userlike.com/en/) API

This is an experimental library written in TypeScript for accessing publicly available [Userlike](https://www.userlike.com/en/public/tutorial/api/intro) APIs.

## Structure 

![image](https://image.ibb.co/iSMhak/structure.png)

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


## License 

[MIT](https://github.com/brakmic/userlike-js/blob/master/LICENSE)

