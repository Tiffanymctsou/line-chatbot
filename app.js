require('dotenv').config();
const { CHANNEL_SECRET, CHANNEL_ACCESS_TOKEN } = process.env;
const line = require('@line/bot-sdk');
const express = require('express');
const app = express();
const { searchBegin, latestProduct, latestDiscount, customerService } = require('./template');

const config = {
    channelAccessToken: CHANNEL_ACCESS_TOKEN,
    channelSecret: CHANNEL_SECRET
};

app.post('/linewebhook', line.middleware(config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});

const client = new line.Client({
    channelAccessToken: CHANNEL_ACCESS_TOKEN,
});

let isChatting = false; // to check whether customer service is ongoing

function handleEvent(event) {
    const type = event.type;
    if (!isChatting || type === 'postback') {
        switch (type) {
        case 'message': {
            if (event.message.text === '開始查詢' || event.message.text === '回主選單' || event.message.text === '點錯了') {
                client.replyMessage(event.replyToken, searchBegin);
            }
            break;
        }
        case 'postback': {
            const action = event.postback.data;
            if (action) {
                switch (action) {
                case 'latestProduct': {
                    client.replyMessage(event.replyToken, latestProduct).then(() => {
                        console.log('Latest Products Sent!');
                    }).catch((err) => {
                        console.log(err.response.data);
                    });
                    break;
                }
                case 'latestDiscount': {
                    client.replyMessage(event.replyToken, latestDiscount).then(() => {
                        console.log('Latest Discount Sent!');
                    }).catch((err) => {
                        console.log(err.response.data);
                    });
                    break;
                }
                case 'customerService': {
                    client.replyMessage(event.replyToken, customerService).then(() => {
                        isChatting = true;
                        console.log('Customer Service Called!');
                    }).catch((err) => {
                        console.log(err.response.data);
                    });
                    break;
                }
                }
            }
            break;
        }
        }
    } else if (isChatting) {
        console.log(event.message.type);
        if (event.message.text === '開始查詢') {
            isChatting = false;
            client.replyMessage(event.replyToken, searchBegin).then(() => {
                console.log('Search Bot Called!');
            }).catch((err) => {
                console.log(err.response.data);
            });
            
        } else if (event.message.type === 'text') {
            console.log(event);
            isChatting = false;
            client.replyMessage(event.replyToken, {
                type: "text",
                text: `你好 ${event.message.text}，請問你想查詢什麼？`,
                quickReply: {
                    items: [
                        {
                            type: "action",
                            action: {
                                type: "message",
                                label: "會員積分",
                                text: "會員積分"
                            }
                        },
                        {
                            type: "action",
                            action: {
                                type: "message",
                                label: "退／換貨",
                                text: "退／換貨"
                            }
                        },
                        {
                            type: "action",
                            action: {
                                type: "message",
                                label: "點錯了",
                                text: "點錯了"
                            }
                        }
                    ]
                }
            }).then(() => {
                console.log(isChatting);
            }).catch((err) => {
                console.log(err.response.data);
            });
        } else {
            client.replyMessage(event.replyToken, {type: 'sticker', packageId: "11537", stickerId: "52002744"})
                .then(() => {
                    console.log(isChatting);
                }).catch((err) => {
                    console.log(err.response.data);
                });
        }
    }
}

app.listen(3001, () => {
    console.log('Bot Ready!');
});



