import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
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
          strategy="lazyOnload"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
