"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const unreadMail = parseInt(jQuery("span[title*='Inbox'] + span + span").first().text(), 10);
    Franz.setBadge(unreadMail);
  };
  Franz.loop(getMessages);
};
