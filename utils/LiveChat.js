import Script from "next/script";
import { useRouter } from "next/router";
import React from "react";

function LiveChat() {
  const { asPath } = useRouter();
  if (!asPath.includes("/valuate")) {
    return (
      <>
        <Script
          id="livechatinc"
          dangerouslySetInnerHTML={{
            __html: `
        window.__lc = window.__lc || {};
        window.__lc.license = 12262323;
        (function() {
          var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
          lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
        })();
        `,
          }}
          type="text/javascript"
          strategy="lazyOnload"
        ></Script>
        <noscript>
          <a
            href="https://www.livechatinc.com/chat-with/12262323/"
            rel="nofollow"
          >
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechatinc.com/?welcome"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </>
    );
  } else {
    return <></>;
  }
}

export default LiveChat;
