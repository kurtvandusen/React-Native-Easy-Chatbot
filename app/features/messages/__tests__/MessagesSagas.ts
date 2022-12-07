import { put, call } from "redux-saga/effects";

import { createReplyMessage, getReply } from "../messagesHelpers";
import { sendMessageStart } from "../messagesSagas";
import { setMessages, setIsTyping } from "../messagesSlice";

describe("test messagesSagas", () => {
  it("Test saga sendMessageStart", () => {
    const testMessage = createReplyMessage("test");
    const generator = sendMessageStart({ payload: testMessage });
    expect(generator.next().value).toEqual(
      put({ type: setIsTyping, payload: true })
    );
    expect(generator.next().value).toEqual(
      put({ type: setMessages, payload: testMessage })
    );
    expect(generator.next().value).toEqual(call(getReply, testMessage));
    expect(generator.next().value).toEqual(
      put({ type: setMessages, payload: undefined })
    );
    expect(generator.next().value).toEqual(
      put({ type: setIsTyping, payload: false })
    );
  });
});
