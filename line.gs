const ACCESS_TOKEN ="5yedKNtCyxYUt6y+lrmTeo6y+IMD7Vb8IGYWUYFMvJWAHziLOkwbLzxHE7SYQ9jkZrhhF2eL/OB4XjLapErPy5cnu2HtmHXCrpzVS0ImISbj7VHxkgocI0VtQLRSvOlE4G7rQMmr+zT2qiL4q+DJWAdB04t89/1O/w1cDnyilFU=";

const bot = new LineBotSdk.client(ACCESS_TOKEN);
function doPost(e) { bot.call(e, callback) };
function callback(e) {
  if (e.type == 'message') {
    const { type, text } = e.message;
    if (type == "text") {
      if (["サービス内容について", "来店予約について"].includes(text)) sendLastMessage(e);
    }
  }
  if (e.type == "postback") {
    const { data } = e.postback;
    if (data == "tap_richmenu") questionnaire(e);
  }
};

function questionnaire(e) {
  let messages = [];
  messages.push(bot.textMessage(
    `ご連絡ありがとうございます。\nご相談をスムーズに進めるため、ご質問させていただきます。`
  ));
  messages.push(bot.textMessage(`今回はどのようなご相談でしょうか？`));
  messages[1]["quickReply"] = {
    "items": [
      {
        "action": {
          "type": "message",
          "label": "サービス内容について",
          "text": "サービス内容について",
        }
      },
      {
        "action": {
          "type": "message",
          "label": "来店予約について",
          "text": "来店予約について",
        }
      },
    ]
  }
  bot.replyMessage(e, messages);
}

function sendLastMessage(e) {
  let messages = [];
  messages.push(bot.textMessage(`ご回答ありがとうございます\n後ほど担当者からご返信させていただきます。`));
  bot.replyMessage(e, messages);
}
