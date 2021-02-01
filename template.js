const searchBegin = {
    type: "template",
    altText: "請問有什麼能夠幫助你的嗎？",
    template: {
        type: "buttons",
        text: "你好，我是機器人",
        actions: [
            {
                type: "postback",
                label: "最新商品",
                data: "latestProduct",
                displayText: "最新商品"
            },
            {
                type: "postback",
                label: "最新優惠",
                data: "latestDiscount",
                displayText: "最新優惠"
            },
            {
                type: "postback",
                label: "找客服",
                data: "customerService",
                displayText: "找客服"
            }
        ]
    }
};

const latestProduct = {
    type: 'template',
    altText: '最新商品',
    template: {
        type: 'carousel',
        columns: [{
            thumbnailImageUrl: 'https://img3.momoshop.com.tw/goodsimg/0006/069/392/6069392_R.jpg?t=1589711409%22',
            title: '【TT KOTEMEIN波特嫚】黑波妞黑面膜系列(30片)',
            text: 'TWD$704',
            defaultAction: {
                type: 'uri',
                label: '查看商品',
                uri: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=6069392'
            },
            actions: [{
                type: 'uri',
                label: '查看商品',
                uri: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=6069392',
            }, {
                type: 'message',
                label: '回主選單',
                text: '回主選單'
            }]
        }, {
            thumbnailImageUrl: 'https://img1.momoshop.com.tw/goodsimg/0007/903/703/7903703_R.jpg?t=1611574593',
            title: '【Avene 雅漾】舒護活泉水300ml4入組(原廠貨)',
            text: 'TWD$849',
            defaultAction: {
                type: 'uri',
                label: '查看商品',
                uri: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7903703'
            },
            actions: [{
                type: 'uri',
                label: '查看商品',
                uri: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=7903703',
            }, {
                type: 'message',
                label: '回主選單',
                text: '回主選單'
            }]
        },
        {
            thumbnailImageUrl: 'https://img4.momoshop.com.tw/goodsimg/0008/297/996/8297996_R.jpg?t=1609486896',
            title: '【Avene 雅漾】舒護活泉水300ml4入組(原廠貨)',
            text: 'TWD$1,999',
            defaultAction: {
                type: 'uri',
                label: '查看商品',
                uri: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8297996'
            },
            actions: [{
                type: 'uri',
                label: '查看商品',
                uri: 'https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8297996',
            }, {
                type: 'message',
                label: '回主選單',
                text: '回主選單'
            }]
        }]
    }
};

const latestDiscount = [{
    type: "image",
    originalContentUrl: "https://b.ecimg.tw/items/DGBJHC1900AQ4UP/000001_1611828366.jpg",
    previewImageUrl: "https://b.ecimg.tw/items/DGBJHC1900AQ4UP/000001_1611828366.jpg"
}, {
    type: "template",
    altText: "最新優惠",
    template: {
        type: "buttons",
        text: "Switch 藍紅主機 +《精選遊戲》x2 超值組",
        actions: [{
            type: 'uri',
            label: '查看優惠',
            uri: 'https://24h.pchome.com.tw/prod/DGBJHC-1900AQ4UP',
        }, {
            type: 'message',
            label: '回主選單',
            text: '回主選單'
        }]
    }
}];

const customerService = {
    type: 'text',
    text: '你好，請問怎樣稱呼？'
};


module.exports = {
    searchBegin,
    latestProduct,
    latestDiscount,
    customerService
};