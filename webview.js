"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const login = document.querySelectorAll('div .signInImageHeader').length;
    if (login == "0") {
      const messageCount = parseInt(jQuery("span[title*='Inbox'] + span + span").first().text(), 10);
      Franz.setBadge(messageCount);
    }
    else {
      Franz.setBadge(login);
    }
  };
  Franz.loop(getMessages);
};
