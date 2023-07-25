import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Whipflip",
              "image": "",
              "@id": "",
              "url": "https://whipflip.com",
              "telephone": "(888) 349-3189",
              "address": {
              "@type": "PostalAddress",
              "streetAddress": "1007 N Orange Street 4th Floor",
              "addressLocality": "Wilmington",
              "addressRegion": "DE",
              "postalCode": "19801",
              "addressCountry": "US"
              },
              "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.7465117,
              "longitude": -75.5491284
              },
              "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
              ],
              "opens": "09:00",
              "closes": "20:00"
              },{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "17:00"
              }]
              }
          `,
          }}
          type="application/ld+json"
        ></script>
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
