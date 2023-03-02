import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css"
        />{" "}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              var _kmq = _kmq || [];
              var _kmk = _kmk || 'dbb3dc546cb1e8602af6a6a80558264598ab6edb';
              function _kms(u){
                setTimeout(function(){
                  var d = document, f = d.getElementsByTagName('script')[0],
                  s = d.createElement('script');
                  s.type = 'text/javascript'; s.async = true; s.src = u;
                  f.parentNode.insertBefore(s, f);
                }, 1);
              }
              _kms('//i.kissmetrics.io/i.js');
              _kms('//scripts.kissmetrics.io/' + _kmk + '.2.js');
          `,
          }}
          id="kissmetrics"
          type="text/javascript"
          strategy="afterInteractive"
        ></Script>
      </Head>
      <body>
        <Main />
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
          strategy="afterInteractive"
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
        <NextScript />
      </body>
    </Html>
  );
}
