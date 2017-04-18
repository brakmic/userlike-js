# JavaScript Bindings for [Userlike](https://www.userlike.com/en/) API

This is an experimental library written in TypeScript for accessing publicly availables [Userlike](https://www.userlike.com/en/public/tutorial/api/intro) APIs.

## Structure 

![image](https://image.ibb.co/iSMhak/structure.png)

There are several DTO classes located unter *types*. Take into account that most of the classes are just simple interfaces that describe certain parts of publicly accessible structures. For example, the response for *chat_meta* contains an array of [ChatMeta](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/chat-meta.ts) instances that comprise of several sub-classes, like [Message](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/message.ts), [MessagesAndEvents](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/messages-and-event.ts), [Organization](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/organization.ts), [Note](https://github.com/brakmic/userlike-js/blob/master/src/api/v1/public/types/chat/note.ts). 

## Installation

`npm install`

or 

`yarn install`

## Building

To start the demonstration from `index.ts` type `npm run start:client`.

## License 

[MIT](https://github.com/brakmic/userlike-js/blob/master/LICENSE)

