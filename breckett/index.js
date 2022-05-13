const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

(async () => {
  const html = `<!DOCTYPE html>
 <!-- saved from url=(0627)https://www.beckett.com/grading/card-lookup?item_type=BGS&item_id=0013706892&g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&hiddenRecaptcha=&submit=Submit&submit=Submit -->
 <html lang="en" class=" js no-touch csstransforms csstransforms3d csstransitions svg"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 
 <meta name="viewport" content="width=device-width, initial-scale=1">	
 <title>Beckett Grading</title>
 <link rel="stylesheet" href="./0013706892_files/bootstrap.css" type="text/css" media="all">
 <link rel="stylesheet" href="./0013706892_files/font-awesome.min.css" type="text/css" media="all">
 <link href="./0013706892_files/css" rel="stylesheet"> 
 <link href="./0013706892_files/css(1)" rel="stylesheet"> 
 
 <link rel="stylesheet" href="./0013706892_files/bkstyle.css" type="text/css" media="all">
 <link rel="stylesheet" href="./0013706892_files/responsive.css" type="text/css" media="all">
 <link rel="stylesheet" href="./0013706892_files/style.css" type="text/css" media="all">
 
 
 <script src="./0013706892_files/765297846911601" async=""></script><script async="" src="./0013706892_files/fbevents.js"></script><script type="text/javascript" async="" src="./0013706892_files/e9639540-8967-45cc-871b-48657a1b5982.js"></script><script type="text/javascript" async="" src="./0013706892_files/js"></script><script async="" src="./0013706892_files/gtm.js"></script><script async="" src="./0013706892_files/analytics.js"></script><script src="./0013706892_files/jquery.min.js"></script>
 <script src="./0013706892_files/bootstrap.min.js"></script>
 <link rel="stylesheet" href="./0013706892_files/jquery.bxslider.css">
 <script src="./0013706892_files/jquery.bxslider.min.js"></script>
 <script type="text/javascript" src="./0013706892_files/8508.js" async="async"></script>
 <script>
 
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
     })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
     ga('create', 'UA-205841-16', 'auto');
                 ga('require', 'displayfeatures');
     ga('send', 'pageview');
     ga('set', '&uid', 'visitor'); // Set the user ID using signed-in user_id.
 
 </script>
 
 <script async="async" src="./0013706892_files/gpt.js"></script>
 <script>
   var googletag = googletag || {};
   googletag.cmd = googletag.cmd || [];
 </script>
 
 <script>
   googletag.cmd.push(function() {
         googletag.pubads().enableSingleRequest();
         googletag.pubads().setTargeting('Sub_Category', []).setTargeting('Cat', ['']).setTargeting('url', ['grading/cardlookup']).setTargeting('search', []).setTargeting('Page', []);
     googletag.enableServices();
   });
 </script>
 
 <script>
 $(document).ready(function(){
     $(".mobile-nav-btn .fa").click(function(){
         $(this).parent().parent().parent().toggleClass("open");
     });
 });
 </script>
   <script>
     $(document).ready(function(){
       $('.slider').bxSlider({	
       slideWidth: 375,  
       maxSlides:3,
       infiniteLoop: false,
           touchEnabled: false
       });
     });
   </script>
         <script src="./0013706892_files/validate.min.js"></script>
         
                         <link rel="stylesheet" href="./0013706892_files/home-2.css">
                                     <link rel="stylesheet" href="./0013706892_files/rs_grading.css">
             
 <meta property="og:type" content="article">
 <meta property="og:title" content="Beckett Grading Services">
 <meta property="og:url" content="/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha;=&amp;submit=Submit&amp;submit=Submit">
 <meta property="og:description" content="Beckett: Online Sports &amp; Non Sports Cards Collectibles and Price Guide Subscription.">
 <meta property="og:site_name" content="BECKETT">
 <meta property="og:image" content="https://www.beckett.com/images/logo.png?w=141">
 <meta property="og:image:width" content="141">
 <meta property="og:image:height" content="80">
 <meta property="og:locale" content="en_US">
 <!--------- start Schema code ------->
 <script type="application/ld+json">
         {
                     "@context": "http://schema.org",
                     "@type": "Organization",
                     "name": "Beckett Collectibles",
                     "description": "Beckett is the world's most trusted source for collectible enthusiasts and a distinguished publisher of monthly collectible magazines, provides vital market information in the sports card and collectibles markets.",
                     "image": "http://www.beckettmedia.com/catalog/view/theme/default/images/logo.png",
                     "logo": "http://www.beckettmedia.com/catalog/view/theme/default/images/logo.png",
                     "url": "https://www.beckett.com",
                     "telephone": "855-777-2325",
                     "sameAs": ["https://twitter.com/beckettcollect","https://www.linkedin.com/company/beckett-collectibles","https://www.facebook.com/beckettcollect","https://www.youtube.com/c/BeckettCollectibles","https://www.instagram.com/beckettcollect/","https://en.wikipedia.org/wiki/Beckett_Media","https://www.crunchbase.com/organization/beckett-media"],
                     "address": {
                                     "@type": "PostalAddress",
                                     "streetAddress": "4653 McEwen road",
                                     "addressLocality": "Dallas, Texas",
                                     "postalCode": "75244",
                                     "addressCountry": "US"
                     }
         }
 </script><!--------- end Schema code ------->
 <!-- Google Tag Manager -->
 <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-MKJ4MQF');</script>
 <!-- End Google Tag Manager -->
 <meta http-equiv="origin-trial" content="AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="><meta http-equiv="origin-trial" content="Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><meta http-equiv="origin-trial" content="A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="><script src="./0013706892_files/pubads_impl_2022051001.js" async=""></script><iframe src="./0013706892_files/index.html" marginheight="0" marginwidth="0" scrolling="no" style="display: none; border: 0px;" width="0px" height="0px"></iframe><script id="yui__dyn_0" type="text/javascript" src="./0013706892_files/ServiceGetConfig"></script><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style><style class="acsb-initial-css acsb-styles">.acsb-trigger{position:fixed;display:none !important;visibility:visible;cursor:pointer;box-sizing:border-box;opacity:1;line-height:1;outline:none 0 !important;overflow:visible !important;background-color:#146ff8;z-index:999999999999;-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-trigger *{box-sizing:border-box !important}.acsb-trigger:hover,.acsb-trigger:focus{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.acsb-trigger:hover .acsb-remove,.acsb-trigger:focus .acsb-remove{opacity:1}.acsb-trigger:active{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}.acsb-trigger.acsb-active{opacity:0;visibility:hidden;-webkit-transform:scale(1.5);-moz-transform:scale(1.5);-ms-transform:scale(1.5);-o-transform:scale(1.5);transform:scale(1.5)}.acsb-trigger.acsb-ready{display:block !important}.acsb-trigger.acsb-hidden{display:none !important}.acsb-trigger.acsb-hidden.acsb-ready{display:none !important}.acsb-trigger.acsb-trigger-hidden{display:none !important;visibility:hidden !important;pointer-events:none !important}.acsb-trigger.acsb-trigger-hidden.acsb-ready{display:none !important}.acsb-trigger.acsb-trigger-position-x-left{left:20px;right:auto}.acsb-trigger.acsb-trigger-position-x-left.acsb-mobile{left:10px}.acsb-trigger.acsb-trigger-position-x-right{right:20px;left:auto}.acsb-trigger.acsb-trigger-position-x-right.acsb-mobile{right:10px}.acsb-trigger.acsb-trigger-position-y-bottom{top:auto;bottom:20px}.acsb-trigger.acsb-trigger-position-y-bottom.acsb-mobile{bottom:10px}.acsb-trigger.acsb-trigger-position-y-top{top:20px;bottom:auto}.acsb-trigger.acsb-trigger-position-y-top.acsb-mobile{top:10px}.acsb-trigger.acsb-trigger-position-y-center{top:0;bottom:0;margin:auto 0}.acsb-trigger.acsb-trigger-size-small{width:30px;height:30px}.acsb-trigger.acsb-trigger-size-small .acsb-entity{width:27px;height:27px;font-size:28px}.acsb-trigger.acsb-trigger-size-medium{width:45px;height:45px}.acsb-trigger.acsb-trigger-size-big{width:65px;height:65px}.acsb-trigger.acsb-actions-active .acsb-actions-active-icon{display:block}.acsb-trigger .acsb-actions-active-icon{display:none;position:absolute;bottom:0;left:-5px;width:22px;height:22px;border-radius:50%;line-height:1;border:solid 2px #146ff8;background-color:#fff !important}.acsb-trigger .acsb-actions-active-icon svg{position:absolute;width:11px;height:11px;line-height:1;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-moz-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.acsb-trigger .acsb-actions-active-icon svg path{fill:#146ff8 !important}.acsb-trigger .acsb-trigger-icon{position:static !important}.acsb-trigger .acsb-trigger-icon svg,.acsb-trigger .acsb-trigger-icon img,.acsb-trigger .acsb-trigger-icon .acsb-entity{position:absolute;max-width:65% !important;max-height:65% !important;overflow:visible !important;top:0;left:0;bottom:0;right:0;margin:auto;visibility:visible;opacity:1}.acsb-trigger .acsb-trigger-icon svg path,.acsb-trigger .acsb-trigger-icon svg g,.acsb-trigger .acsb-trigger-icon svg circle,.acsb-trigger .acsb-trigger-icon svg rect,.acsb-trigger .acsb-trigger-icon img path,.acsb-trigger .acsb-trigger-icon img g,.acsb-trigger .acsb-trigger-icon img circle,.acsb-trigger .acsb-trigger-icon img rect,.acsb-trigger .acsb-trigger-icon .acsb-entity path,.acsb-trigger .acsb-trigger-icon .acsb-entity g,.acsb-trigger .acsb-trigger-icon .acsb-entity circle,.acsb-trigger .acsb-trigger-icon .acsb-entity rect{fill:#fff !important}.acsb-trigger .acsb-trigger-icon .acsb-entity{width:35px;height:35px;max-width:none !important;max-height:none !important;font-size:28px;color:#fff;text-align:center}.acsb-trigger .acsb-remove{position:absolute;text-align:center;line-height:0;left:-10px;top:-10px;border:solid 2px #fff;border-radius:30px;width:25px;height:25px;opacity:0;-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-trigger .acsb-remove svg,.acsb-trigger .acsb-remove img{position:absolute;width:11px;height:11px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-moz-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);-o-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.acsb-trigger .acsb-remove svg path,.acsb-trigger .acsb-remove img path{fill:#fff !important}.acsb-hide .acsb-navigator-wrapper{display:none !important}.acsb-navigator{position:fixed;display:none !important;width:320px;max-width:85% !important;max-height:85vh;overflow-x:hidden;overflow-y:auto;top:20px;left:20px;border-radius:10px;text-align:left;direction:ltr;opacity:0;text-transform:none;outline:none !important;box-sizing:border-box !important;pointer-events:none;box-shadow:0 0 10px rgba(0,0,0,.1) !important;line-height:1;letter-spacing:0;font-family:Arial,Helvetica Neue,Helvetica,sans-serif !important;z-index:100000000000000020 !important;scrollbar-color:#ccc transparent;scrollbar-width:thin}.acsb-navigator::-webkit-scrollbar{width:7px}.acsb-navigator::-webkit-scrollbar-track{border-radius:50px;background-color:transparent}.acsb-navigator::-webkit-scrollbar-thumb{background-color:#ccc;border-radius:50px}.acsb-navigator:before{position:fixed;visibility:hidden;opacity:0;top:0;left:0;width:100%;height:100%;pointer-events:none;background-color:rgba(0,0,0,.3);z-index:-1;content:"";-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-navigator.acsb-ready{display:block !important}@media screen and (max-width: 500px){.acsb-navigator.acsb-ready{display:none !important}}.acsb-navigator.acsb-focused{pointer-events:auto !important;opacity:1 !important;z-index:100000000000000020 !important;-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-navigator.acsb-focused:before{visibility:visible;opacity:1}.acsb-navigator.acsb-focused .acsb-navigator-label .acsb-navigator-icon.acsb-chevron{display:none}.acsb-navigator.acsb-focused .acsb-navigator-label .acsb-navigator-icon.acsb-close{display:block}.acsb-navigator.acsb-focused .acsb-navigator-options,.acsb-navigator.acsb-focused .acsb-navigator-search{display:block}.acsb-navigator.acsb-rtl{text-align:right;direction:rtl}.acsb-navigator.acsb-rtl .acsb-navigator-label{padding-right:15px;padding-left:30px}.acsb-navigator.acsb-rtl .acsb-navigator-label .acsb-navigator-icon{right:auto;left:15px}.acsb-navigator.acsb-rtl .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-links{justify-content:center}.acsb-navigator.acsb-rtl .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-links .acsb-navigator-given-link{margin:0 10px}.acsb-navigator.acsb-rtl .acsb-navigator-options .acsb-navigator-search .acsb-navigator-search-icon{left:15px;right:auto}.acsb-navigator *{box-sizing:border-box !important}.acsb-navigator .acsb-sr-only{position:absolute;left:0 !important;top:0 !important;width:100% !important;height:100% !important;z-index:-1 !important}.acsb-navigator .acsb-navigator-label{display:flex;flex-wrap:wrap;position:relative;width:100%;padding:15px;align-items:center;background-color:#fff;color:#1f2533;z-index:1}.acsb-navigator .acsb-navigator-label .acsb-navigator-title{display:block;width:100%;font-size:18px;font-weight:bold;color:#1f2533;line-height:1}.acsb-navigator .acsb-navigator-label .acsb-navigator-explanation{display:block;width:100%;margin-top:10px;font-size:13px;color:#1f2533;line-height:1}.acsb-navigator .acsb-navigator-label .acsb-navigator-icon{position:absolute;top:20px;right:15px;outline:none !important;-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-navigator .acsb-navigator-label .acsb-navigator-icon.acsb-chevron{display:block}.acsb-navigator .acsb-navigator-label .acsb-navigator-icon.acsb-close{display:none}.acsb-navigator .acsb-navigator-label .acsb-navigator-icon:focus,.acsb-navigator .acsb-navigator-label .acsb-navigator-icon:hover{border:none 0 !important}.acsb-navigator .acsb-navigator-label .acsb-navigator-icon i{font-size:18px;color:#1f2533}.acsb-navigator .acsb-navigator-label .acsb-navigator-icon [data-acsb-lazy-load]{width:15px;height:15px}.acsb-navigator .acsb-navigator-search{display:none;position:relative;width:100%;margin:0;padding:0 15px;border:none 0;background-color:#fff}.acsb-navigator .acsb-navigator-search form{margin:0 !important}.acsb-navigator .acsb-navigator-search input.acsb-navigator-search-input{display:block !important;width:100% !important;height:40px !important;border-radius:5px !important;font-size:13px !important;font-weight:normal !important;color:#3e465d !important;font-family:Arial,Helvetica Neue,Helvetica,sans-serif !important;background:#fff !important;outline:none 0 !important;border:solid 2px #e3e8fb !important;padding:0 15px !important;margin:0 !important;-webkit-appearance:textfield !important}.acsb-navigator .acsb-navigator-search input.acsb-navigator-search-input:focus,.acsb-navigator .acsb-navigator-search input.acsb-navigator-search-input:hover{border:solid 2px #146ff8 !important}.acsb-navigator .acsb-navigator-search input.acsb-navigator-search-input::placeholder{color:#3e465d !important;font-size:13px !important}.acsb-navigator .acsb-navigator-search input.acsb-navigator-search-input::-webkit-input-placeholder{color:#3e465d !important;font-size:13px !important}.acsb-navigator .acsb-navigator-search input.acsb-navigator-search-input::-moz-placeholder{color:#3e465d !important;font-size:13px !important}.acsb-navigator .acsb-navigator-search .acsb-navigator-search-icon{position:absolute;top:14px;right:30px;left:auto;font-size:12px;color:#1f2533}.acsb-navigator .acsb-navigator-search .acsb-navigator-search-icon [data-acsb-lazy-load]{width:12px;height:12px}.acsb-navigator .acsb-navigator-search .acsb-navigator-search-results{display:block;color:#1f2533;font-size:13px;font-weight:bold;text-align:center;margin-top:7px}.acsb-navigator .acsb-navigator-options{display:none;position:relative;padding:15px;background-color:#f7fcff;z-index:1}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group{display:block;margin:0 !important;padding:0 !important;margin-bottom:15px !important}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group:last-child{margin-bottom:0}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group li{display:block !important;list-style:none !important;margin:0 !important;padding:0 !important}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group li:last-child .acsb-navigator-option{border-bottom:none 0 !important}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group .acsb-navigator-option{display:block;padding:10px 15px;font-size:13px;color:#1f2533;cursor:pointer;overflow:hidden;line-height:1.3;border:none 0 !important;border-bottom:solid 1px #e3e8fb !important;background-color:#fff;outline:none !important;-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group .acsb-navigator-option:hover,.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group .acsb-navigator-option:focus{padding-left:20px;padding-right:20px;background-color:#146ff8;color:#fff;border:none 0 !important;border-bottom:solid 1px #e3e8fb !important;outline:none !important}.acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group .acsb-navigator-option:active{opacity:.7}body.acsb-keyboard-navigation .acsb-skip-links.acsb-ready .acsb-skip-link{display:flex !important}body.acsb-keyboard-navigation .acsb-skip-links.acsb-ready .acsb-skip-link[data-acsb-skip-link=keynav]{display:none !important}.acsb-skip-links{display:none !important;position:fixed;top:0;left:0;z-index:100000000000000020 !important}.acsb-skip-links:before{position:fixed;visibility:hidden;opacity:0;top:0;left:0;width:100%;height:100%;pointer-events:none;background-color:rgba(0,0,0,.3);z-index:-1;content:"";-webkit-transition:all .15s ease;-moz-transition:all .15s ease;-o-transition:all .15s ease;transition:all .15s ease}.acsb-skip-links.acsb-active:before{visibility:visible;opacity:1}.acsb-skip-links.acsb-ready{display:block !important}@media screen and (max-width: 700px){.acsb-skip-links.acsb-ready.acsb-skip-link-hide-mobile{display:none !important}}.acsb-skip-link{display:inline-flex !important;width:auto !important;height:auto !important;max-width:85% !important;min-width:200px !important;position:fixed !important;justify-content:center !important;align-items:center !important;top:50px !important;left:20px !important;text-align:center !important;padding:13px 20px !important;border-radius:50px !important;text-decoration:none !important;background-color:#fff !important;color:#1f2533 !important;font-size:16px !important;text-shadow:0 0 #27272d !important;font-weight:normal !important;white-space:nowrap !important;cursor:pointer !important;opacity:0 !important;pointer-events:none !important;z-index:100000000000000020 !important;font-family:Arial,Helvetica,sans-serif !important;line-height:1 !important;direction:ltr !important;clip:rect(0, 0, 0, 0) !important;border:solid 3px rgba(19,110,248,.8);outline:solid 0 #639af9 !important;box-shadow:0 0 0 5px rgba(19,110,248,.3) !important;-webkit-transition:top .22s ease;-moz-transition:top .22s ease;-o-transition:top .22s ease;transition:top .22s ease}.acsb-skip-link:focus{top:20px !important;opacity:1 !important;pointer-events:auto !important;clip:auto !important}.acsb-skip-link div{display:inline-flex !important;margin-left:30px !important;font-size:10px !important;text-transform:uppercase !important;text-align:center !important;line-height:.9 !important;justify-content:center !important;align-items:center !important;border-radius:50px !important;background-color:#146ff8 !important;padding:5px 10px !important;color:#fff !important}@media screen and (max-width: 500px){.acsb-skip-link div{display:none !important}}.acsb-skip-link div .acsb-symbol{display:block !important;font-size:15px !important;margin-right:3px !important;line-height:1 !important;font-family:Arial,Helvetica,sans-serif !important}.acsb-skip-link [data-acsb-lazy-load]{width:18px;height:18px}@media screen and (max-width: 500px){.acsb-skip-link{font-size:14px;padding:12px 20px;white-space:normal}}.acsb-body-focuser{position:fixed;left:0;top:0;width:5px;height:5px;opacity:0 !important}.acsb-body-focuser:focus{outline:none !important;box-shadow:0 0 0 transparent !important}.acsb-sr-only{display:block !important;position:absolute !important;left:0 !important;top:0 !important;margin:-1px 0 0 -1px !important;padding:0 !important;width:1px !important;height:1px !important;font-weight:normal !important;font-size:15px !important;line-height:1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;border:0 !important;outline:0 !important;cursor:text !important;text-transform:capitalize !important;color:#000 !important;background:#fff !important}
 </style></head>
 <body>
 <!-- Google Tag Manager (noscript) -->
 <span role="button" class="acsb-sr-only acsb-skip-link" data-acsb="sr-trigger" data-acsb-sr-only="true" data-acsb-force-visible="true" aria-label=" Use Website In a Screen-Reader Mode " aria-pressed="false"></span><div class="acsb-skip-links acsb-force-visible acsb-ready" role="region" aria-label="Skip Links" data-acsb="skipLinks" style="display: none;"> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#acsbContent" data-acsb-skip-link="content" class="acsb-skip-link"> Skip to Content <div aria-hidden="true"><span class="acsb-symbol">↵</span>ENTER</div> </a> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#acsbMenu" data-acsb-skip-link="menu" class="acsb-skip-link"> Skip to Menu <div aria-hidden="true"><span class="acsb-symbol">↵</span>ENTER</div> </a> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#acsbFooter" data-acsb-skip-link="footer" class="acsb-skip-link"> Skip to Footer <div aria-hidden="true"><span class="acsb-symbol">↵</span>ENTER</div> </a>
 </div><noscript><iframe src=https://www.googletagmanager.com/ns.html?id=GTM-MKJ4MQF
 height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
 <!-- End Google Tag Manager (noscript) -->
 
         <style>
 .newsletter-success {
     color: #34a21a;
     display: none;
     font-size: 12px;
     padding: 0 5px;
     vertical-align: top;
 }
 .newsletter-error {
     color: #f97979;
     display: none;
     font-size: 12px;
     padding: 5px 9px 3px;
     vertical-align: top;
     line-height: 25px;
     text-align: left;
 }
     .horsTop {background: #1a8cd5; font-weight: normal; color: #fff; padding: 8px 15px; font-size: 15px; text-align: center;}
     .horsTop strong {display: inline-block;}
     #google_center_div{display:block;}
 
 
 
 </style>
     
 
 <div id="page-wrap" class="wide">
     <div class="bk-page-header">
       <div class="header-wrap header bk-header-90">
         <div class="top-bar">
           <div class="bkwrapper container">
             <div class="top-nav clearfix">
               <div class="socialTop">
                                     <ul>
                                         <li><a target="" href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit"><img src="./0013706892_files/1523014986fb-icon.jpg" alt=" "></a></li>
                                         <li><a target="" href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit"><img src="./0013706892_files/1523015077tw-icons.jpg" alt=""></a></li>
                                         <li><a target="" href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit"><img src="./0013706892_files/1523015158insta-icon.jpg" alt=""></a></li>
                                     </ul>
                 </div>
                 <div class="subSnowT" id="newsletter_div">
                     <div class="subSearch">
                               <input type="text" class="inpCon" placeholder="Email Address" name="email" id="email">
       <button type="submit" class="sBtn subscribe_newsletter">Subscribe</button>
                     </div>
                     <span class="newsletter-success"></span>
                     <span class="newsletter-error"></span>
                 </div>
                 <div class="clearMob"></div>
                 <div class="menuGradingTop">
                     <div class="lwa lwa-template-modal bk-template-modal">  
                   </div>
                     
                   <div class="bk-template-modal">
                     <a class="lwa-links-modal bk-links-modal pd-left-0" href="https://www.beckett.com/grading/team">Contact</a>
                     </div>
                     <div class="line-bar">&nbsp;</div>
                     <div class="bk-template-modal">
                     <a class="lwa-links-modal bk-links-modal pd-left-0" href="https://marketplace.beckett.com/beckettshield_1407">Buy Card Sleeves Here <span class="newTip">NEW</span></a>
                     </div>
                     <div class="line-bar">&nbsp;</div>
                   <div class="bk-template-modal">
                     <a class="lwa-links-modal bk-links-modal pd-left-0" href="https://www.beckett.com/grading-and-authentication-store-locator">Grading &amp; Authentication Store Locator</a>
                     </div>
                 </div>
               
                 
                 <div class="clearfix"></div>
 <script type="text/javascript">
 $('#email').keypress(function(event) {
     if (event.keyCode == 13) {
         event.preventDefault();
     }
 });
 
 function validateEmail(email) {
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
 }
 
 $('.subscribe_newsletter').click(function(){
     $('.newsletter-success').html('');
     $('.newsletter-error').html('');
     $(this).prop('disabled', true);
     var email = $('#email').val().trim() || null;
     if (validateEmail(email)){
          $.post('https://www.beckett.com/homepage/subscribe?source=grading',
         { email : email })
         .done(function(response) {
             var res = JSON.parse(response);
             $('.newsletter-success').append(res.msg);
             $('.newsletter-success').show();
             //alert( res.msg );
             document.getElementById('email').value=null;
           })
         .fail(function(response) {
             //alert( "Error occured,Please try again." );
             $('.newsletter-error').html('Error occured,Please try again.');
             $('.newsletter-error').show();
             document.getElementById('email').value=null;
           });
     }else{
          //alert('Please enter a valid Email Id.');
          $(this).prop('disabled', false);
         $('.newsletter-error').html('Please enter a valid Email Id.');
         $('.newsletter-error').show();
         document.getElementById('email').value=null;
     }
     $(this).prop('disabled', false);
 });
 </script>
             </div>
             <!--top-nav--> 
           </div>
         </div>
         <!--top-bar--> 
         <!-- nav open -->
         <nav class="main-nav">
           <div class="main-nav-inner bkwrapper container">
             <div class="main-nav-container clearfix">
               <div class="main-nav-wrap">
                 <div class="mobile-menu-wrap"> <a class="mobile-nav-btn" id="nav-open-btn"><i class="fa fa-bars"></i></a> </div>
                 <!-- logo open -->
                 <div class="logo">
                     <a href="https://www.beckett.com/"><img src="./0013706892_files/1523020198logo.jpg" alt="Beckett"></a>
                 </div>
                                 <!-- logo close -->
                 <div id="main-menu" class="menu-main-menu-container">
                   <ul id="menu-main-menu-1" class="menu">
                     <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-921 current_page_item menu-item-931"><a href="https://www.beckett.com/grading">Home</a></li>
                     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-919"><a href="https://www.beckett.com/grading/pop-report">Pop Report</a></li>
                     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-919"><a href="https://www.beckett.com/grading/card-lookup">Card Lookup</a></li>
                     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-916"><a href="https://www.beckett.com/grading/about">About</a></li>
                     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-920"><a href="https://www.beckett.com/grading/services-and-pricing">Services &amp; Pricing</a></li>
                     <!--<li class="popup_msg  menu-item menu-item-type-custom menu-item-object-custom menu-item-917"><a target="_blank" href="https://www.beckett.com/images/BGS_subform.pdf">Submission  Forms</a></li>-->
                     <li class="popup_msg  menu-item menu-item-type-custom menu-item-object-custom menu-item-917 submenu"><a target="_blank" href="https://www.beckett.com/grading/submission-forms">Submission  Form <!--<i class="fa fa-sort-desc"></i>--></a>
 
                     </li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-918"><a href="https://www.beckett.com/grading/orders">My Orders</a></li>
                     <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-918"><a href="https://www.beckett.com/grading/holidays">BGS Holiday</a></li>
                   </ul>
                 </div>
                 <!--<div class="ajax-search-wrap">
                   <div id="ajax-form-search" class="ajax-search-icon"><i class="fa fa-search"></i></div>
                   <form class="ajax-form" method="get" action="https://www.beckett.com/grading_new">
                     <fieldset>
                       <input id="search-form-text" type="text" class="field" name="s" autocomplete="off" value="" placeholder="Search and hit enter..">
                     </fieldset>
                   </form>
                   <div id="ajax-search-result"></div>
                 </div>-->
               </div>
             </div>
           </div>
           <!-- main-nav-inner --> 
         </nav>
         <!-- nav close --> 
       </div>
     </div>
     <!-- backtop open -->
     <div id="back-top"><i class="fa fa-long-arrow-up"></i></div>
     <!-- backtop close -->
 <!---------PopUp HTML Start Temporary code------------------->
 
 <!--<div class="popup2 popup-main popup " style="display: hide;">
     <div class="cnt223" >
         <div class="pop-header">
             <h1 class="text-center">Important Notice</h1>
         </div>
         <div class="popup-body opacityGrading">
             <div class="col-xs-12">
                 <p>Due to a historic number of orders/cards being submitted, and our growing wait times with our non-guaranteed service level, Beckett Grading will temporarily suspend their <strong>10-day service</strong> level, starting <strong>June 7, 2018</strong>.  Our goal with this move is to work on our extensive backlog that continues to grow daily, and examine cards in the manner they need to be examined.<p>
         <p>We apologize for the extended delays in getting your orders back recently and hope this move will go a long way in resolving that issue.  We will update the submission form and website when the 10-day level is again being offered,  but until further notice all submissions will need to go under one of the other three levels.  Thank you for your business and we appreciate your patience during this time.  If you have any questions about this, please contact us at <a href="mailto:grading@beckett.com">grading@beckett.com</a>.</p>
                 
             </div>
         </div>
 
         <div class="x" id="x"></div>
     </div>
 </div>-->
 <script type="text/javascript">
     $(function () {
         $(".popup_msg").click(function(){
             var cookie_value = readCookie('service_term_removal_popup_1');
             if(cookie_value == 1){
                 return falie;
             }
             createCookie('service_term_removal_popup_1',1,1)
             var overlay = $('<div id="overlay"></div>');
             overlay.show();
                 overlay.appendTo(document.body);
                 $('.popup2').show();
                 $('.close').click(function () {
                     $('html, body').css('overflowY', 'auto');
                     $('.popup2').hide();
                     overlay.appendTo(document.body).remove();
                     return false;
                 });
                 $('.x').click(function () {
                     $.post("index.php?route=common/home/ajax_fantasy_track", {src: 'close'}, function (data) {
                         $('html, body').css('overflowY', 'auto');
                     });
                     $('.popup2').hide();
                     overlay.appendTo(document.body).remove();
                     return false;
                 });
                 $('#fantasy_image').click(function () {
                     $.post("index.php?route=common/home/ajax_fantasy_track", {src: 'clicked'}, function (data) {
                     });
                 });
         });
    
   }); 
   
  function createCookie(name,value,days) {
     if (days) {
         var date = new Date();
         date.setTime(date.getTime()+(days*24*60*60*1000));
         var expires = "; expires="+date.toGMTString();
     }
     else var expires = "";
     document.cookie = name+"="+value+expires+"; path=/";
 }
 
 function readCookie(name) {
     var nameEQ = name + "=";
     var ca = document.cookie.split(';');
     for(var i=0;i < ca.length;i++) {
         var c = ca[i];
         while (c.charAt(0)==' ') c = c.substring(1,c.length);
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
     }
     return null;
 }
 
 function eraseCookie(name) {
     createCookie(name,"",-1);
 }
 </script>		<script src="./0013706892_files/jquery.ui.core.js"></script>
 <script src="./0013706892_files/jquery.ui.datepicker.js"></script>
 <div class="col-md-12 col-sm-12 col-xs-12">
     <div class="row top-head-bg">
         <h1>Card Details</h1></div>
 </div>
 </div><script type="text/javascript" id="">(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="//commondatastorage.googleapis.com/code.snapengage.com/js/e9639540-8967-45cc-871b-48657a1b5982.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();</script>
 
 <script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","765297846911601");fbq("track","PageView");</script>
 <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=765297846911601&amp;ev=PageView&amp;noscript=1"></noscript>
 
 <script type="text/javascript" id="" src="./0013706892_files/merge.123167.js"></script><div id="designstudio" style="font-size:16px;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);display:none;z-index:100003;position:fixed;height:30.875em;width:20.25em;right:0;float:right;bottom:0;"><div id="draggable" style="width:calc(100% - 5.9375em);left:0;top:0;position:absolute;height:3em;z-index:13000;margin-top:12px;margin-left:12px;cursor:move;"></div><iframe id="designstudio-iframe" translate="no" style="-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);display:block;position:absolute;border:none;width:100%;height:100%;" name="designstudio-frame" title="Live Chat Box" src="./0013706892_files/saved_resource.html"></iframe></div><div id="designstudio-minimize" style="position:fixed;z-index:999998;display:none;" tabindex="0"><iframe id="iframe-minimize" translate="no" style="border:none;display:block;font-size:14px;" name="designstudio-minimize-frame" title="Live Chat Button" tabindex="-1" scrolling="no" src="./0013706892_files/saved_resource(1).html"><div id="minimize-content"><div id="minimize-notify" class=" minimize-notify-right-avatar minimize-notify-bottom"><span id="minimize-notify-counter"></span></div><div id="minimize-avatar-container" class=" right bottom"><img id="minimize-avatar" alt="minimized chat"></div><div id="minimize-svg" class=" right bottom"><div id="svg-container"><svg viewBox="0 0 600 600"><defs><filter id="dropshadow" height="140%"><fegaussianblur in="SourceAlpha" stddeviation="15"></fegaussianblur><feoffset result="offsetblur" dx="10" dy="10"></feoffset><fecomponenttransfer><fefunca type="linear" slope="0.8"></fefunca></fecomponenttransfer><femerge><femergenode></femergenode><femergenode in="SourceGraphic"></femergenode></femerge></filter></defs><g id="comments-o" class="designstudio-container"><circle class="designstudio-circle" cx="50%" cy="50%" r="260" fill="#00a65a" linejoin="round" stroke="#ffffff" stroke-width="0" fill-opacity="1" position="absolute"></circle><path class="designstudio-icon" fill="#ffffff" d="M704 1152q-153 0 -286 -52t-211.5 -141t-78.5 -191q0 -82 53 -158t149 -132l97 -56l-35 -84q34 20 62 39l44 31l53 -10q78 -14 153 -14q153 0 286 52t211.5 141t78.5 191t-78.5 191t-211.5 141t-286 52zM704 1280q191 0 353.5 -68.5t256.5 -186.5t94 -257t-94 -257 t-256.5 -186.5t-353.5 -68.5q-86 0 -176 16q-124 -88 -278 -128q-36 -9 -86 -16h-3q-11 0 -20.5 8t-11.5 21q-1 3 -1 6.5t0.5 6.5t2 6l2.5 5t3.5 5.5t4 5t4.5 5t4 4.5q5 6 23 25t26 29.5t22.5 29t25 38.5t20.5 44q-124 72 -195 177t-71 224q0 139 94 257t256.5 186.5 t353.5 68.5zM1526 111q10 -24 20.5 -44t25 -38.5t22.5 -29t26 -29.5t23 -25q1 -1 4 -4.5t4.5 -5t4 -5t3.5 -5.5l2.5 -5t2 -6t0.5 -6.5t-1 -6.5q-3 -14 -13 -22t-22 -7q-50 7 -86 16q-154 40 -278 128q-90 -16 -176 -16q-271 0 -472 132q58 -4 88 -4q161 0 309 45t264 129 q125 92 192 212t67 254q0 77 -23 152q129 -71 204 -178t75 -230q0 -120 -71 -224.5t-195 -176.5z" transform="scale(.195, -.195) translate(600, -2000)"></path></g></svg></div></div><div id="minimize-messages" class=" message-left bottom"></div></div></iframe></div><style id="design-studio-animate">.designstudio-animated {-webkit-animation-duration: .5s;animation-duration: .5s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}@keyframes designstudio-fadeOut {from {opacity: 1;}to {opacity: 0;}}.designstudio-fadeOut {animation-name: designstudio-fadeOut;}@-webkit-keyframes designstudio-fadeInUp {from {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}@keyframes designstudio-fadeInUp {from {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}.designstudio-fadeInUp {-webkit-animation-name: designstudio-fadeInUp;animation-name: designstudio-fadeInUp;}@-webkit-keyframes designstudio-fadeInDown {from {opacity: 0;-webkit-transform: translate3d(0, -100%, 0);transform: translate3d(0, -100%, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}@keyframes designstudio-fadeInDown {from {opacity: 0;-webkit-transform: translate3d(0, -100%, 0);transform: translate3d(0, -100%, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}.designstudio-fadeInDown {-webkit-animation-name: designstudio-fadeInDown;animation-name: designstudio-fadeInDown;}@-webkit-keyframes designstudio-fadeInLeft {from {opacity: 0;-webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}@keyframes designstudio-fadeInLeft {from {opacity: 0;-webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}.designstudio-fadeInLeft {-webkit-animation-name: designstudio-fadeInLeft;animation-name: designstudio-fadeInLeft;}@-webkit-keyframes designstudio-fadeInRight {from {opacity: 0;-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}@keyframes designstudio-fadeInRight {from {opacity: 0;-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}to {opacity: 1;-webkit-transform: none;transform: none;}}.designstudio-fadeInRight {-webkit-animation-name: designstudio-fadeInRight;animation-name: designstudio-fadeInRight;}@-webkit-keyframes designstudio-fadeOutUp {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(0, -100%, 0);transform: translate3d(0, -100%, 0);}}@keyframes designstudio-fadeOutUp {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(0, -100%, 0);transform: translate3d(0, -100%, 0);}}.designstudio-fadeOutUp {-webkit-animation-name: designstudio-fadeOutUp;animation-name: designstudio-fadeOutUp;}@-webkit-keyframes designstudio-fadeOutDown {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}}@keyframes designstudio-fadeOutDown {from {opacity: 1; }to {opacity: 0;-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);}}.designstudio-fadeOutDown {-webkit-animation-name: designstudio-fadeOutDown;animation-name: designstudio-fadeOutDown;}@-webkit-keyframes designstudio-fadeOutLeft {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0);}}@keyframes designstudio-fadeOutLeft {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(-100%, 0, 0);transform: translate3d(-100%, 0, 0);}}.designstudio-fadeOutLeft {-webkit-animation-name: designstudio-fadeOutLeft;animation-name: designstudio-fadeOutLeft;}@-webkit-keyframes designstudio-fadeOutRight {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}}@keyframes designstudio-fadeOutRight {from {opacity: 1;}to {opacity: 0;-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);}}.designstudio-fadeOutRight {-webkit-animation-name: designstudio-fadeOutRight;animation-name: designstudio-fadeOutRight;}@-webkit-keyframes designstudio-slideInDown {from {-webkit-transform: translate3d(0, -100% , 0);transform: translate3d(0, -100% , 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}@keyframes designstudio-slideInDown {from {-webkit-transform: translate3d(0, -100% , 0);transform: translate3d(0, -100% , 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}.designstudio-slideInDown {-webkit-animation-name: designstudio-slideInDown;animation-name: designstudio-slideInDown;}@-webkit-keyframes designstudio-slideInLeft {from {-webkit-transform: translate3d(-100% , 0, 0);transform: translate3d(-100% , 0, 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}@keyframes designstudio-slideInLeft {from {-webkit-transform: translate3d(-100% , 0, 0);transform: translate3d(-100% , 0, 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}.designstudio-slideInLeft {-webkit-animation-name: designstudio-slideInLeft;animation-name: designstudio-slideInLeft;}@-webkit-keyframes designstudio-slideInRight {from {-webkit-transform: translate3d(100% , 0, 0);transform: translate3d(100% , 0, 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}@keyframes designstudio-slideInRight {from {-webkit-transform: translate3d(100% , 0, 0);transform: translate3d(100% , 0, 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}.designstudio-slideInRight {-webkit-animation-name: designstudio-slideInRight;animation-name: designstudio-slideInRight;}@-webkit-keyframes designstudio-slideInUp {from {-webkit-transform: translate3d(0, 100% , 0);transform: translate3d(0, 100% , 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}}@keyframes designstudio-slideInUp {from {-webkit-transform: translate3d(0, 100% , 0);transform: translate3d(0, 100% , 0);visibility: visible;}to {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}} .designstudio-slideInUp {-webkit-animation-name: designstudio-slideInUp;animation-name: designstudio-slideInUp;}</style><div id="designstudio-button" class="designstudio-button" style="position: fixed; z-index: 999998; font-size: 14px; bottom: 0px; right: 0%;"><button id="transparent-button" class="transparent-button" type="button" style="background: transparent !important; border: none !important; cursor: pointer !important; position: absolute !important; left: 0 !important; top: 0 !important; bottom: 0 !important; right: 0 !important; width: 100% !important; height: 100% !important; display: block !important; text-indent: -99999px !important; text-align: left !important; padding: 0 !important; overflow: hidden !important; z-index: 1 !important; border-radius: 0 !important; margin: 0 !important; -webkit-appearance: none !important; box-shadow: none !important; line-height: 100% !important; ">Live Chat</button><iframe id="iframe-designstudio-button" translate="no" style="border:none;display:block;" name="designstudio-button-frame" title="Live Chat Button" tabindex="-1" scrolling="no" class="iframe-button-text designstudio-animated designstudio-slideInUp" height="34" width="105" src="./0013706892_files/saved_resource(2).html"></iframe></div>
 <div class="clearfix"></div>
 <div id="grading" class="container">
     <div class="span-25 last">
         <div class="main-box">
 
 
             
             <div class="main_content_area" style="overflow:auto;">
                                         <h2>Card Serial Number: 0013706892</h2>
                         <table class="cardDetail" width="100%" border="1" cellspacing="0" cellpadding="5">
                             <tbody><tr>
                                 <td width="20%"><b>Set Name</b>
                                 </td><td width="1%">:</td>
                                 <td width="79%"> 1998 Pokemon 3D Blue Poker</td>
                             </tr>
                             <tr>
                             <td><b>Player Name</b></td><td>:</td><td>Meowth</td>
                             </tr>
                              <tr>
                             <td><b>Date Graded</b></td><td>:</td><td>Tuesday, February 08, 2022</td>
                              </tr>
                                                          <tr>
                                 <td><b>Centering Grade</b></td><td>:</td><td>9.5</td>
                             </tr>
                             <tr>
                             <td><b>Corner Grade</b></td><td>:</td><td>9.5</td>
                             </tr>
                              <tr>
                             <td><b>Edges Grade</b></td><td>:</td><td>9.5</td>
                             </tr>
                             <tr>
                                 <td><b>Surfaces Grade</b></td><td>:</td><td>9.0</td>
                             </tr>
                             <tr>
                                 <td><b>Autograph Grade</b></td><td>:</td><td>0.0</td>
                             </tr>
                                                          <tr>
                                 <td><b>Final Grade</b></td><td>:</td><td>9.5</td>
                             </tr>
                                                         <tr>
                                 <td><b>Total Graded Cards In POP Report</b></td><td>:</td><td>0</td>
                             </tr>
                             <tr>
                                 <td><b>Cards Graded Above This Card</b></td><td>:</td><td>0</td>
                             </tr>
                                                    </tbody></table>
                         <br> <br>
                                                <spam style="color:#428bca"><u><b>POP Report:</b> </u> </spam><br>
                         <br>
                         <div style="overflow:auto;">
                         <table class="cardDetail" width="100%" border="1" cellspacing="0" cellpadding="5">
                             <tbody><tr>
                                 <td><b>Set</b></td>
                                 <td><b>Player</b></td>
                                 <td><b>#</b></td>
                                 <td><b>1.0</b></td>
                                 <td><b>1.5</b></td>
                                 <td><b>2.0</b></td>
                                 <td><b>2.5</b></td>
                                 <td><b>3.0</b></td>
                                 <td><b>3.5</b></td>
                                 <td><b>4.0</b></td>
                                 <td><b>4.5</b></td>
                                 <td><b>5.0</b></td>
                                 <td><b>5.5</b></td>
                                 <td><b>6.0</b></td>
                                 <td><b>6.5</b></td>
                                 <td><b>7.0</b></td>
                                 <td><b>7.5</b></td>
                                 <td><b>8.0</b></td>
                                 <td bgcolor="silver"><b>8.5</b></td>
                                 <td bgcolor="silver"><b>9.0</b></td>
                                 <td bgcolor="gold"><b>9.5</b></td>
                                 <td bgcolor="gold"><b>10.0</b></td>
                                 <td bgcolor="black"><span style="color:gold;font-weight:bold;">10</span></td>
                                 <td><b>Total</b></td>
                             </tr>
                             <tr>
                                                                 <td><a href="https://www.beckett.com//grading/set_item_listing_grade?set_id=0&amp;price_item_id=&amp;item_attr_id=&amp;final_grade=all&amp;limit=500" target="_blank"> 1998 Pokemon 3D Blue Poker</a></td>
                                 <td>
                                     Meowth                                </td>
                                 <td>NNO</td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td>0</td>
                             </tr>
                         </tbody></table>
                         </div>
                                                             </div>
             <div class="clearfix"></div>
         </div>
     </div>
 </div>		<div class="footer footerModified">
     <div class="container">
         <div class="footerMenu">
             <ul>
                 <li><a href="https://www.beckett.com/subscribe">Newsletter Sign-up</a></li>
                 <li><a href="https://registry.beckett.com/">Graded Card Registry</a></li>
                 <li><a href="https://www.beckett.com/grading/submission-location">Submission Locations</a></li>
                 <li><a href="https://www.beckett.com/grading/team">Contact</a></li>
                 <li><a href="https://www.beckett.com/careers">Work with us</a></li>
             </ul>
             <ul>
                 <li><strong>Beckett Products:</strong></li>
                 <li><a href="https://www.beckett-authentication.com/" target="_blank">Beckett Authentication Services</a></li>
                 <li><a href="https://www.cbcscomics.com/" target="_blank">Comic Book Certification Service (CBCS)</a></li>
                 <li><a href="https://www.beckett.com/opg" target="_blank">Beckett Online Price Guide</a></li>
                 <li><a href="https://marketplace.beckett.com/" target="_blank">Beckett Marketplace</a></li>
                 <li><a href="http://www.beckettmedia.com/" target="_blank">Beckett Magazines</a></li>
                 <li><a href="https://www.beckett.com/news/category/beckett-plus" target="_blank">Beckett <i class="fa fa-plus-circle" aria-hidden="true"></i></a></li>
             </ul>
         </div>
     </div>
     <div class="footer-lower">
           <div class="container">
             <div class="footer-inner clearfix">
                   <div class="copTxt">Copyright © 2022, Beckett Collectibles, LLC. All rights reserved</div>
             </div>
           </div>
     </div>
 </div>
 
 <script type="text/javascript" src="./0013706892_files/theme_plugins.js"></script> 
 <script type="text/javascript" src="./0013706892_files/onviewport.js"></script> 
 <script type="text/javascript" src="./0013706892_files/customjs.js"></script>
 
 <!-- Cookie Policy Start -->
 <style>
     .cookieTkd{z-index:999999;position:fixed;left:0;bottom:0;background: rgba(241,241,241,.97);padding:20px 30px;width:100%;-webkit-box-shadow:0 0 8px 0 #ccc;box-shadow:0 0 8px 0 #ccc}
     .cookieTkd .td-excerpt{padding-right:135px;margin:0;font-size:12px;color:#000}
     .cookieTkd .td-excerpt a{color:#ff661c;text-decoration:underline;}
     .cookieTkd .td-read-more{position:absolute;right:30px;top:50%;margin:-15px 0 0 0}
     .cookieTkd .td-read-more a{width:30px;height:30px;display:inline-block;color:#fff;font-size:16px;border-radius:50%;text-align:center;padding:5px 0}
     .cookieTkd .td-read-more a:nth-child(1){background: #00a65a;transition:0.2s ease;}
     .cookieTkd .td-read-more a:nth-child(2){background: #b6b6b6;margin-left: 25px;transition:0.3s ease;}
     .cookieTkd .td-read-more a:nth-child(1):hover{background:#018f4e;}
     .cookieTkd .td-read-more a:nth-child(2):hover{background:#000;}
     .cookieTkd .td-read-more a.acceptBtn{width: auto; font-size:14px;border-radius: 4px;padding: 5px 10px;}
     @media (max-width:991px){
         .cookieTkd {text-align: center;padding: 15px;}
         .cookieTkd .td-excerpt {padding-right: 0;}
         .cookieTkd .td-read-more{position: static;margin: 10px 0 0 0;}
     }
 </style>
 <div class="cookieTkd">
                 <div class="td-excerpt">We use cookies to help personalize content, tailor and measure ads, and provide a safer experience. By navigating the site, you agree to the use of cookies to collect information. Read our <a href="https://www.beckett.com/privacy">Cookie Policy</a>.<br>
                 </div>
                 <div class="td-read-more">
                     <a href="javascript:void(0)" class="okBtn acceptBtn">Accept &amp; Close</a>
                     <!--<a href="javascript:void(0)" class="okBtn">&#10004;</a>
                     <a href="javascript:void(0)" class="CloseBtn">&#10006;</a>-->
                 </div>
                 </div><script type="text/javascript">
     var name = 'cookie_denied'
     var cookie_confirmed = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
     var name = 'cookie_confirmation'
     var cookie_denied = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
     if(cookie_confirmed || cookie_denied || localStorage.getItem("cookie_confirmation"))
     {
       jQuery('.cookieTkd').remove();  
     }
 
     jQuery(document).ready(function(){
 
         jQuery(".okBtn").on("click",function(){
 
         jQuery('.cookieTkd').remove();
         // jQuery.cookie("ds_feedback", 1,{ expires : 10 });
         var d = new Date;
         d.setTime(d.getTime() + 24*60*60*1000*1000);
         document.cookie = "cookie_confirmation" + "=" + '1' + ";path=/;expires=" + d.toGMTString() + '; domain=.beckett.com';
         localStorage.setItem("cookie_confirmation", "1");
         });
 
          jQuery('.CloseBtn').click(function(){
             document.cookie = "cookie_denied" + "=" + '1; path=/; domain=.beckett.com';
             jQuery('.cookieTkd').remove();
         });
     });
 </script>
 <!-- Cookie Policy End -->
     <script>(function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, language : 'en', position : 'left', leadColor : '#3672b7', triggerColor : '#e98e3d', triggerRadius : '50%', triggerPositionX : 'left', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'left', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 160, triggerRadius : '50%' } }); }; e.appendChild(s); }());</script>
   
 
 <div class="acsb-trigger acsb-bg-lead acsb-trigger-size-medium acsb-trigger-position-x-left acsb-trigger-position-y-bottom acsb-ready" tabindex="0" role="button" style="display: none; inset: auto auto 20px 20px; border-radius: 50%;" aria-label="Open accessibility options, statement and help" data-acsb="trigger"> <span class="acsb-trigger-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 131.3" enable-background="new 0 0 100 131.3" xml:space="preserve"><path d="M71.6,131.3c1,0,2.1-0.3,3.1-0.8c3.9-1.8,5.5-6.2,3.6-10.1c0,0-14.3-32.7-16.9-44.7c-1-4.2-1.6-15.3-1.8-20.5c0-1.8,1-3.4,2.6-3.9l32-9.6c3.9-1,6.2-5.5,5.2-9.4c-1-3.9-5.5-6.2-9.4-5.2c0,0-29.6,9.6-40.3,9.6c-10.4,0-39.8-9.4-39.8-9.4c-3.9-1-8.3,0.8-9.6,4.7c-1.3,4.2,1,8.6,5.2,9.6l32,9.6c1.6,0.5,2.9,2.1,2.6,3.9c-0.3,5.2-0.8,16.4-1.8,20.5c-2.6,12-16.9,44.7-16.9,44.7c-1.8,3.9,0,8.3,3.6,10.1c1,0.5,2.1,0.8,3.1,0.8c2.9,0,5.7-1.6,6.8-4.4l15.3-31.2l14.6,31.4C66.1,129.7,68.7,131.3,71.6,131.3z"></path> <circle style="fill: #fff;" cx="50.3" cy="14.6" r="14.6"></circle></svg></span><span class="acsb-actions-active-icon"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 105 79" style="enable-background:new 0 0 105 79;" xml:space="preserve"> <g>	<path d="M12.6,38.9C6,31.9-4.7,42.6,2.3,49.2c8.7,9,17.3,18.3,26.3,27c4,3.7,7,3.7,10.7,0l63.6-63.3	c6.7-7-3.7-17.6-10.7-10.7L34.3,60.2L12.6,38.9z"></path>
 </g>
 </svg> </span>
 </div><div class="acsb-widget acsb-widget-position-left acsb-ready" style="display: none;" tabindex="-1" role="dialog" aria-label="Accessibility Adjustments" aria-modal="true" aria-hidden="true" data-acsb="widget"> <div class="acsb-main" data-acsb="main"> <div class="acsb-header acsb-flex"> <div class="acsb-start"> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#" role="button" tabindex="0" class="acsb-header-option acsb-header-option-close" data-acsb-option="close" aria-label="Close Accessibility Interface"> <i class="acsbi-close"></i> </a> </div> <a role="button" href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#" tabindex="0" aria-label="English" class="acsb-language acsb-header-option-language" data-acsb-option="language" data-acsb-popup-trigger="acsb-language-popup"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/en.svg" data-acsb-lazy-load-options="alt=English"></span> </span> <span class="acsb-language-text">English</span> <i class="acsbi-chevron_down"></i> </a>
 </div> <div class="acsb-hero"> <span class="acsb-hero-title">Accessibility Adjustments</span> <div class="acsb-hero-actions acsb-flex"> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#" class="acsb-hero-action" role="button" tabindex="0" data-acsb-option="reset"> <i class="acsbi-reset"></i> <span>Reset Settings</span> </a> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#" class="acsb-hero-action" role="button" data-acsb-option="statement"> <i class="acsbi-bullhorn"></i> <span>Statement</span> </a> <a href="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#" class="acsb-hero-action" role="button" tabindex="0" data-acsb-popup-trigger="acsb-hide-popup"> <i class="acsbi-hide"></i> <span>Hide Interface</span> </a> </div>
 </div> <div class="acsb-search"> <form class="acsb-form" data-acsb-search="form" enctype="multipart/form-data" action="https://www.beckett.com/grading/card-lookup?item_type=BGS&amp;item_id=0013706892&amp;g-recaptcha-response=03AGdBq24RuPhGOgtUBscSQRLTZJS9k3czGoZe3FomoNQoi54Bof7LSkQDQTVyPnKrQ6NiOR0yCWfFGuLvA9vau5cmAHDeuW7IzpuLH0h7MJuYaB84Wudyh0KS1_vYxok7mZ-ReIN4V4iYpa7-gvnDndNqjiz1yuHTaVi9JWreOSuqTC21x-FwCA3Oe3GiII1ir-bckVIfWRjQK3_i9DSSSGvy192LMh0F-wUeaELXSIRW8fE405W4vQhePJrjhA6kysDph6GEdP_x34X9o6Z0kMK9PvlW1xN99wzHF-sHXcy1pXVD36DmNJqMw_X6OKoimy82ilm7jDC3rFgpjVmfyr9IQHZVU723FKAqit2kCmy2MniMO7XcMQ2dKxXUneZRlPfwKtBfuNGBULqV_SX61JxE6xWVmmLBe9OiyeMydL_tRNitEUZEcWkzvW0YE-zNGrHORjL3dK9mM1VhWK1-vcegKM9iigKCSQ&amp;hiddenRecaptcha=&amp;submit=Submit&amp;submit=Submit#" method="POST"> <input type="text" tabindex="0" name="acsb_search" autocomplete="off" placeholder="Unclear content? Search in dictionary..." aria-label="Unclear content? Search in dictionary..."> <i class="acsbi-search"></i> <i class="acsbi-chevron_down"></i> </form> <div class="acsb-search-results-wrapper" data-acsb-search-results="wrapper"> <span role="button" tabindex="0" data-acsb-search-results="close" aria-label="Close" class="acsb-search-close"> <i class="acsbi-close"></i> </span> <div class="acsb-search-results" data-acsb-search-results="list"></div> </div>
 </div> <div class="acsb-main-options"> <div class="acsb-actions"> <div class="acsb-actions-box acsb-actions-box-profiles" data-acsb-actions-box="profiles"> <div class="acsb-actions-title">Choose the right accessibility profile for you</div> <div class="acsb-profiles"> <div class="acsb-profile acsb-profile-seizures" tabindex="0" role="button" aria-pressed="false" data-acsb-action="seizuresProfile"> <div class="acsb-profile-toggle" aria-hidden="true"> <div class="acsb-toggle acsb-toggle-off"> <span class="acsb-toggle-option acsb-toggle-option-off">OFF</span> <span class="acsb-toggle-option acsb-toggle-option-on">ON</span> </div> </div> <div class="acsb-profile-content"> <span class="acsb-profile-name">Seizure Safe Profile</span> <span class="acsb-profile-text">Clear flashes &amp; reduces color</span> <i class="acsbi-vibrate"></i> </div> <div class="acsb-profile-description"> This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations. </div> <i class="acsb-profile-connected acsbi-chain"></i> </div> <div class="acsb-profile acsb-profile-vision" tabindex="0" role="button" aria-pressed="false" data-acsb-action="visionProfile"> <div class="acsb-profile-toggle" aria-hidden="true"> <div class="acsb-toggle acsb-toggle-off"> <span class="acsb-toggle-option acsb-toggle-option-off">OFF</span> <span class="acsb-toggle-option acsb-toggle-option-on">ON</span> </div> </div> <div class="acsb-profile-content"> <span class="acsb-profile-name">Vision Impaired Profile</span> <span class="acsb-profile-text">Enhances website's visuals</span> <i class="acsbi-eye"></i> </div> <div class="acsb-profile-description"> This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others. </div> <i class="acsb-profile-connected acsbi-chain"></i> </div> <div class="acsb-profile acsb-profile-adhd" tabindex="0" role="button" aria-pressed="false" data-acsb-action="adhdProfile"> <div class="acsb-profile-toggle" aria-hidden="true"> <div class="acsb-toggle acsb-toggle-off"> <span class="acsb-toggle-option acsb-toggle-option-off">OFF</span> <span class="acsb-toggle-option acsb-toggle-option-on">ON</span> </div> </div> <div class="acsb-profile-content"> <span class="acsb-profile-name">ADHD Friendly Profile</span> <span class="acsb-profile-text">More focus &amp; fewer distractions</span> <i class="acsbi-target"></i> </div> <div class="acsb-profile-description"> This profile significantly reduces distractions, to help people with ADHD and Neurodevelopmental disorders browse, read, and focus on the essential elements of the website more easily. </div> <i class="acsb-profile-connected acsbi-chain"></i> </div> <div class="acsb-profile acsb-profile-cognitive" tabindex="0" role="button" aria-pressed="false" data-acsb-action="cognitiveProfile"> <div class="acsb-profile-toggle" aria-hidden="true"> <div class="acsb-toggle acsb-toggle-off"> <span class="acsb-toggle-option acsb-toggle-option-off">OFF</span> <span class="acsb-toggle-option acsb-toggle-option-on">ON</span> </div> </div> <div class="acsb-profile-content"> <span class="acsb-profile-name">Cognitive Disability Profile</span> <span class="acsb-profile-text">Assists with reading &amp; focusing</span> <i class="acsbi-thought"></i> </div> <div class="acsb-profile-description"> This profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements of the website more easily. </div> <i class="acsb-profile-connected acsbi-chain"></i> </div> <div class="acsb-profile acsb-profile-motor" tabindex="0" role="button" aria-pressed="false" data-acsb-action="motorProfile"> <div class="acsb-profile-toggle" aria-hidden="true"> <div class="acsb-toggle acsb-toggle-off"> <span class="acsb-toggle-option acsb-toggle-option-off">OFF</span> <span class="acsb-toggle-option acsb-toggle-option-on">ON</span> </div> </div> <div class="acsb-profile-content"> <span class="acsb-profile-name">Keyboard Navigation (Motor)</span> <span class="acsb-profile-text">Use website with the keyboard</span> <i class="acsbi-navigation"></i> </div> <div class="acsb-profile-description"> This profile enables motor-impaired persons to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements.<br><br><strong>Note:</strong> This profile prompts automatically for keyboard users. </div> <i class="acsb-profile-connected acsbi-chain"></i> </div> <div class="acsb-profile acsb-profile-blind" tabindex="0" role="button" aria-pressed="false" data-acsb-action="motorProfile"> <div class="acsb-profile-toggle" aria-hidden="true"> <div class="acsb-toggle acsb-toggle-off"> <span class="acsb-toggle-option acsb-toggle-option-off">OFF</span> <span class="acsb-toggle-option acsb-toggle-option-on">ON</span> </div> </div> <div class="acsb-profile-content"> <span class="acsb-profile-name">Blind Users (Screen Reader)</span> <span class="acsb-profile-text">Optimize website for screen-readers</span> <i class="acsbi-voice"></i> </div> <div class="acsb-profile-description"> This profile adjusts the website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is software that is installed on the blind user’s computer and smartphone, and websites should ensure compatibility with it. <br><br><strong>Note:</strong> This profile prompts automatically to screen-readers. </div> <i class="acsb-profile-connected acsbi-chain"></i> </div> </div> </div> <div class="acsb-actions-box acsb-actions-box-textAdjustments" data-acsb-actions-box="textAdjustments"> <div class="acsb-actions-title">Content Adjustments</div> <div class="acsb-actions-group"> <div class="acsb-action-box acsb-action-box-zoom acsb-action-box-big " tabindex="0" data-acsb-action="zoom" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="zoom" data-acsb-action-specific-element="body" data-acsb-action-specific-increment="25"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-zoom"></i> <span class="acsb-box-title">Content Scaling</span> </div> <div class="acsb-big-box-element acsb-big-box-element-range"> <div class="acsb-range" data-acsb-range-slider=""> <div class="acsb-range-plus acsb-range-button acsb-bg-lead" data-acsb-range-action="increase" role="button" tabindex="0" aria-label="Increase"> <i class="acsbi-chevron_up"></i> </div> <div class="acsb-range-base acsb-color-lead" data-acsb-range-current-number="" data-acsb-range-default="Default"> Default </div> <div class="acsb-range-minus acsb-range-button acsb-bg-lead" data-acsb-range-action="decrease" tabindex="0" aria-label="Decrease" role="button"> <i class="acsbi-chevron_down"></i> </div>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-readableFont " role="button" aria-pressed="false" tabindex="0" data-acsb-action="readableFont" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-font"></i> <span class="acsb-box-title">Readable Font</span> </div> </div> <div class="acsb-action-box acsb-action-box-emphasizeTitles " role="button" aria-pressed="false" tabindex="0" data-acsb-action="emphasizeTitles" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-heading"></i> <span class="acsb-box-title">Highlight Titles</span> </div> </div> <div class="acsb-action-box acsb-action-box-emphasizeLinks " role="button" aria-pressed="false" tabindex="0" data-acsb-action="emphasizeLinks" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-link"></i> <span class="acsb-box-title">Highlight Links</span> </div> </div> <div class="acsb-action-box acsb-action-box-magnifier " role="button" aria-pressed="false" tabindex="0" data-acsb-action="magnifier" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-magnifier"></i> <span class="acsb-box-title">Text Magnifier</span> </div> </div> <div class="acsb-action-box acsb-action-box-fontSize acsb-action-box-big " tabindex="0" data-acsb-action="fontSize" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="font-size" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-size"></i> <span class="acsb-box-title">Adjust Font Sizing</span> </div> <div class="acsb-big-box-element acsb-big-box-element-range"> <div class="acsb-range" data-acsb-range-slider=""> <div class="acsb-range-plus acsb-range-button acsb-bg-lead" data-acsb-range-action="increase" role="button" tabindex="0" aria-label="Increase"> <i class="acsbi-chevron_up"></i> </div> <div class="acsb-range-base acsb-color-lead" data-acsb-range-current-number="" data-acsb-range-default="Default"> Default </div> <div class="acsb-range-minus acsb-range-button acsb-bg-lead" data-acsb-range-action="decrease" tabindex="0" aria-label="Decrease" role="button"> <i class="acsbi-chevron_down"></i> </div>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-textAlignCenter " role="button" aria-pressed="false" tabindex="0" data-acsb-action="textAlignCenter" data-acsb-action-group="textAlign" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-text_center"></i> <span class="acsb-box-title">Align Center</span> </div> </div> <div class="acsb-action-box acsb-action-box-lineHeight acsb-action-box-big " tabindex="0" data-acsb-action="lineHeight" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="line-height" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0.1"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-line_height"></i> <span class="acsb-box-title">Adjust Line Height</span> </div> <div class="acsb-big-box-element acsb-big-box-element-range"> <div class="acsb-range" data-acsb-range-slider=""> <div class="acsb-range-plus acsb-range-button acsb-bg-lead" data-acsb-range-action="increase" role="button" tabindex="0" aria-label="Increase"> <i class="acsbi-chevron_up"></i> </div> <div class="acsb-range-base acsb-color-lead" data-acsb-range-current-number="" data-acsb-range-default="Default"> Default </div> <div class="acsb-range-minus acsb-range-button acsb-bg-lead" data-acsb-range-action="decrease" tabindex="0" aria-label="Decrease" role="button"> <i class="acsbi-chevron_down"></i> </div>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-textAlignLeft " role="button" aria-pressed="false" tabindex="0" data-acsb-action="textAlignLeft" data-acsb-action-group="textAlign" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-text_left"></i> <span class="acsb-box-title">Align Left</span> </div> </div> <div class="acsb-action-box acsb-action-box-letterSpacing acsb-action-box-big " tabindex="0" data-acsb-action="letterSpacing" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="letter-spacing" data-acsb-action-specific-element="" data-acsb-action-specific-increment="2"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-space"></i> <span class="acsb-box-title">Adjust Letter Spacing</span> </div> <div class="acsb-big-box-element acsb-big-box-element-range"> <div class="acsb-range" data-acsb-range-slider=""> <div class="acsb-range-plus acsb-range-button acsb-bg-lead" data-acsb-range-action="increase" role="button" tabindex="0" aria-label="Increase"> <i class="acsbi-chevron_up"></i> </div> <div class="acsb-range-base acsb-color-lead" data-acsb-range-current-number="" data-acsb-range-default="Default"> Default </div> <div class="acsb-range-minus acsb-range-button acsb-bg-lead" data-acsb-range-action="decrease" tabindex="0" aria-label="Decrease" role="button"> <i class="acsbi-chevron_down"></i> </div>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-textAlignRight acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="textAlignRight" data-acsb-action-group="textAlign" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-text_right"></i> <span class="acsb-box-title">Align Right</span> </div> </div> </div> </div> <div class="acsb-actions-box acsb-actions-box-colorAdjustments" data-acsb-actions-box="colorAdjustments"> <div class="acsb-actions-title">Color Adjustments</div> <div class="acsb-actions-group"> <div class="acsb-action-box acsb-action-box-darkContrast " role="button" aria-pressed="false" tabindex="0" data-acsb-action="darkContrast" data-acsb-action-group="contrast" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-dark"></i> <span class="acsb-box-title">Dark Contrast</span> </div> </div> <div class="acsb-action-box acsb-action-box-lightContrast " role="button" aria-pressed="false" tabindex="0" data-acsb-action="lightContrast" data-acsb-action-group="contrast" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-light"></i> <span class="acsb-box-title">Light Contrast</span> </div> </div> <div class="acsb-action-box acsb-action-box-monochrome " role="button" aria-pressed="false" tabindex="0" data-acsb-action="monochrome" data-acsb-action-group="contrast" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-monochrome"></i> <span class="acsb-box-title">Monochrome</span> </div> </div> <div class="acsb-action-box acsb-action-box-highSaturation " role="button" aria-pressed="false" tabindex="0" data-acsb-action="highSaturation" data-acsb-action-group="contrast" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-saturation"></i> <span class="acsb-box-title">High Saturation</span> </div> </div> <div class="acsb-action-box acsb-action-box-textColor acsb-action-box-big " tabindex="0" data-acsb-action="textColor" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-picker"></i> <span class="acsb-box-title">Adjust Text Colors</span> </div> <div class="acsb-big-box-element acsb-big-box-element-color">
 <div class="acsb-color-box"> <span data-acsb-color="#0076B4" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Blue" data-acsb-tooltip="Change Color to Blue" style="background-color: #0076B4 !important;"> </span> <span data-acsb-color="#7A549C" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Purple" data-acsb-tooltip="Change Color to Purple" style="background-color: #7A549C !important;"> </span> <span data-acsb-color="#C83733" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Red" data-acsb-tooltip="Change Color to Red" style="background-color: #C83733 !important;"> </span> <span data-acsb-color="#D07021" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Orange" data-acsb-tooltip="Change Color to Orange" style="background-color: #D07021 !important;"> </span> <span data-acsb-color="#26999F" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Teal" data-acsb-tooltip="Change Color to Teal" style="background-color: #26999F !important;"> </span> <span data-acsb-color="#4D7831" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Green" data-acsb-tooltip="Change Color to Green" style="background-color: #4D7831 !important;"> </span> <span data-acsb-color="#ffffff" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to WHITE" data-acsb-tooltip="Change Color to WHITE" style="background-color: #ffffff !important;"> </span> <span data-acsb-color="#000000" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Black" data-acsb-tooltip="Change Color to Black" style="background-color: #000000 !important;"> </span> <div class="disable" role="button" tabindex="0" data-acsb-color="disable"> Cancel </div>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-highContrast " role="button" aria-pressed="false" tabindex="0" data-acsb-action="highContrast" data-acsb-action-group="contrast" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-contrast"></i> <span class="acsb-box-title">High Contrast</span> </div> </div> <div class="acsb-action-box acsb-action-box-titleColor acsb-action-box-big " tabindex="0" data-acsb-action="titleColor" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-picker"></i> <span class="acsb-box-title">Adjust Title Colors</span> </div> <div class="acsb-big-box-element acsb-big-box-element-color">
 <div class="acsb-color-box"> <span data-acsb-color="#0076B4" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Blue" data-acsb-tooltip="Change Color to Blue" style="background-color: #0076B4 !important;"> </span> <span data-acsb-color="#7A549C" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Purple" data-acsb-tooltip="Change Color to Purple" style="background-color: #7A549C !important;"> </span> <span data-acsb-color="#C83733" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Red" data-acsb-tooltip="Change Color to Red" style="background-color: #C83733 !important;"> </span> <span data-acsb-color="#D07021" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Orange" data-acsb-tooltip="Change Color to Orange" style="background-color: #D07021 !important;"> </span> <span data-acsb-color="#26999F" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Teal" data-acsb-tooltip="Change Color to Teal" style="background-color: #26999F !important;"> </span> <span data-acsb-color="#4D7831" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Green" data-acsb-tooltip="Change Color to Green" style="background-color: #4D7831 !important;"> </span> <span data-acsb-color="#ffffff" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to WHITE" data-acsb-tooltip="Change Color to WHITE" style="background-color: #ffffff !important;"> </span> <span data-acsb-color="#000000" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Black" data-acsb-tooltip="Change Color to Black" style="background-color: #000000 !important;"> </span> <div class="disable" role="button" tabindex="0" data-acsb-color="disable"> Cancel </div>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-lowSaturation " role="button" aria-pressed="false" tabindex="0" data-acsb-action="lowSaturation" data-acsb-action-group="contrast" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-invert"></i> <span class="acsb-box-title">Low Saturation</span> </div> </div> <div class="acsb-action-box acsb-action-box-backgroundColor acsb-action-box-big " tabindex="0" data-acsb-action="backgroundColor" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-picker"></i> <span class="acsb-box-title">Adjust Background Colors</span> </div> <div class="acsb-big-box-element acsb-big-box-element-color">
 <div class="acsb-color-box"> <span data-acsb-color="#0076B4" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Blue" data-acsb-tooltip="Change Color to Blue" style="background-color: #0076B4 !important;"> </span> <span data-acsb-color="#7A549C" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Purple" data-acsb-tooltip="Change Color to Purple" style="background-color: #7A549C !important;"> </span> <span data-acsb-color="#C83733" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Red" data-acsb-tooltip="Change Color to Red" style="background-color: #C83733 !important;"> </span> <span data-acsb-color="#D07021" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Orange" data-acsb-tooltip="Change Color to Orange" style="background-color: #D07021 !important;"> </span> <span data-acsb-color="#26999F" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Teal" data-acsb-tooltip="Change Color to Teal" style="background-color: #26999F !important;"> </span> <span data-acsb-color="#4D7831" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Green" data-acsb-tooltip="Change Color to Green" style="background-color: #4D7831 !important;"> </span> <span data-acsb-color="#ffffff" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to WHITE" data-acsb-tooltip="Change Color to WHITE" style="background-color: #ffffff !important;"> </span> <span data-acsb-color="#000000" class="acsb-color-selection" role="button" tabindex="0" aria-label="Change Color to Black" data-acsb-tooltip="Change Color to Black" style="background-color: #000000 !important;"> </span> <div class="disable" role="button" tabindex="0" data-acsb-color="disable"> Cancel </div>
 </div> </div> </div> </div> </div> <div class="acsb-actions-box acsb-actions-box-orientationAdjustments" data-acsb-actions-box="orientationAdjustments"> <div class="acsb-actions-title">Orientation Adjustments</div> <div class="acsb-actions-group"> <div class="acsb-action-box acsb-action-box-mute " role="button" aria-pressed="false" tabindex="0" data-acsb-action="mute" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-mute"></i> <span class="acsb-box-title">Mute Sounds</span> </div> </div> <div class="acsb-action-box acsb-action-box-hideImages " role="button" aria-pressed="false" tabindex="0" data-acsb-action="hideImages" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-image"></i> <span class="acsb-box-title">Hide Images</span> </div> </div> <div class="acsb-action-box acsb-action-box-readMode acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="readMode" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-keyboard"></i> <span class="acsb-box-title">Read Mode</span> </div> </div> <div class="acsb-action-box acsb-action-box-readingGuide acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="readingGuide" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-bookmark"></i> <span class="acsb-box-title">Reading Guide</span> </div> </div> <div class="acsb-action-box acsb-action-box-usefulLinks acsb-action-box-big " tabindex="0" data-acsb-action="usefulLinks" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-links"></i> <span class="acsb-box-title">Useful Links</span> </div> <div class="acsb-big-box-element acsb-big-box-element-selecter"> <div class="acsb-selecter" data-acsb-selecter="usefulLinks"> <select aria-label="Useful Links"> <option selected="" disabled="" value="acsbDefault">Select an option</option> <option value="homepage">Home</option> <option value="top">Header</option> <option value="bottom">Footer</option> <option value="content">Main Content</option> </select>
 </div> </div> </div> <div class="acsb-action-box acsb-action-box-stopAnimations " role="button" aria-pressed="false" tabindex="0" data-acsb-action="stopAnimations" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-vibrate"></i> <span class="acsb-box-title">Stop Animations</span> </div> </div> <div class="acsb-action-box acsb-action-box-readingMask acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="readingMask" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-overlay"></i> <span class="acsb-box-title">Reading Mask</span> </div> </div> <div class="acsb-action-box acsb-action-box-emphasizeHover acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="emphasizeHover" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-mouse"></i> <span class="acsb-box-title">Highlight Hover</span> </div> </div> <div class="acsb-action-box acsb-action-box-emphasizeFocus " role="button" aria-pressed="false" tabindex="0" data-acsb-action="emphasizeFocus" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-focus"></i> <span class="acsb-box-title">Highlight Focus</span> </div> </div> <div class="acsb-action-box acsb-action-box-bigBlackCursor acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="bigBlackCursor" data-acsb-action-group="cursor" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-cursor_full"></i> <span class="acsb-box-title">Big Black Cursor</span> </div> </div> <div class="acsb-action-box acsb-action-box-bigWhiteCursor acsb-action-box-hide-mobile" role="button" aria-pressed="false" tabindex="0" data-acsb-action="bigWhiteCursor" data-acsb-action-group="cursor" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <i class="acsb-box-icon acsbi-cursor"></i> <span class="acsb-box-title">Big White Cursor</span> </div> </div> </div> </div> <div class="acsb-actions-box acsb-actions-box-hiddenAdjustments" data-acsb-actions-box="hiddenAdjustments"> <div class="acsb-actions-title">HIDDEN_ADJUSTMENTS</div> <div class="acsb-actions-group"> <div class="acsb-action-box acsb-action-box-keynav " role="button" aria-pressed="false" tabindex="0" data-acsb-action="keynav" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <span class="acsb-box-title">Keyboard Navigation</span> </div> </div> <div class="acsb-action-box acsb-action-box-accessMode " role="button" aria-pressed="false" tabindex="0" data-acsb-action="accessMode" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <span class="acsb-box-title">Accessible Mode</span> </div> </div> <div class="acsb-action-box acsb-action-box-screenReader " role="button" aria-pressed="false" tabindex="0" data-acsb-action="screenReader" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <span class="acsb-box-title">Screen Reader Adjustments</span> </div> </div> <div class="acsb-action-box acsb-action-box-readMode " role="button" aria-pressed="false" tabindex="0" data-acsb-action="readMode" data-acsb-action-group="" data-acsb-action-message="" data-acsb-action-css-property="" data-acsb-action-specific-element="" data-acsb-action-specific-increment="0"> <div class="acsb-action-box-content"> <span class="acsb-box-title">Read Mode</span> </div> </div> </div> </div> </div> </div> </div> <div class="acsb-footer acsb-flex acsb-flex-center" data-acsb-footer="true"> <a rel="noopener" data-acsb-footer-link="true" href="https://accessibe.com/?utm_medium=link&amp;utm_source=widget" target="_blank"> Web Accessibility Solution By accessiBe </a>
 </div><div class="acsb-popup acsb-language-popup" tabindex="0" data-acsb-popup="acsb-language-popup"> <div class="acsb-popup-close-wide" data-acsb-popup-close="acsb-language-popup"></div> <div class="acsb-popup-content" role="dialog"> <span class="acsb-popup-close" tabindex="0" role="button" aria-label="Close" data-acsb-popup-close="acsb-language-popup"> <i class="acsbi-close"></i> </span> <div class="acsb-popup-content-holder" data-acsb-popup-content-holder=""> <div class="acsb-language-selection"> <span class="acsb-popup-title">Choose the Interface Language</span> <div class="acsb-languages acsb-flex"> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="en"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/en.svg" data-acsb-lazy-load-options="alt=English"></span> </span> <span class="acsb-language-text">English</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="es"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/es.svg" data-acsb-lazy-load-options="alt=Español"></span> </span> <span class="acsb-language-text">Español</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="de"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/de.svg" data-acsb-lazy-load-options="alt=Deutsch"></span> </span> <span class="acsb-language-text">Deutsch</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="pt"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/pt.svg" data-acsb-lazy-load-options="alt=Português"></span> </span> <span class="acsb-language-text">Português</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="fr"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/fr.svg" data-acsb-lazy-load-options="alt=Français"></span> </span> <span class="acsb-language-text">Français</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="it"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/it.svg" data-acsb-lazy-load-options="alt=Italiano"></span> </span> <span class="acsb-language-text">Italiano</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="he"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/he.svg" data-acsb-lazy-load-options="alt=עברית"></span> </span> <span class="acsb-language-text">עברית</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="tw"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/tw.svg" data-acsb-lazy-load-options="alt=繁體中文"></span> </span> <span class="acsb-language-text">繁體中文</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="ru"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/ru.svg" data-acsb-lazy-load-options="alt=Pусский"></span> </span> <span class="acsb-language-text">Pусский</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="ar"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/ar.svg" data-acsb-lazy-load-options="alt=عربى"></span> </span> <span class="acsb-language-text">عربى</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="ua"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/ua.svg" data-acsb-lazy-load-options="alt=عربى"></span> </span> <span class="acsb-language-text">عربى</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="nl"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/nl.svg" data-acsb-lazy-load-options="alt=Nederlands"></span> </span> <span class="acsb-language-text">Nederlands</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="zh"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/zh.svg" data-acsb-lazy-load-options="alt=繁體中文"></span> </span> <span class="acsb-language-text">繁體中文</span> </div> <div class="acsb-language" role="button" tabindex="0" data-acsb-language="ja"> <span class="acsb-language-flag"> <span data-acsb-lazy-load="https://web1.acsbapp.com/apps/app/dist/media/languages/ja.svg" data-acsb-lazy-load-options="alt=日本語"></span> </span> <span class="acsb-language-text">日本語</span> </div> </div>
 </div> </div> </div>
 </div><div class="acsb-popup acsb-statement-popup" tabindex="0" data-acsb-popup="acsb-statement-popup"> <div class="acsb-popup-close-wide" data-acsb-popup-close="acsb-statement-popup"></div> <div class="acsb-popup-content" role="dialog"> <span class="acsb-popup-close" tabindex="0" role="button" aria-label="Close" data-acsb-popup-close="acsb-statement-popup"> <i class="acsbi-close"></i> </span> <div class="acsb-popup-content-holder" data-acsb-popup-content-holder=""> <div class="acsb-statement"><strong class="acsb-title-main">Accessibility Statement</strong><strong class="acsb-title">Compliance status</strong>
 <p>We firmly believe that the internet should be available and accessible to anyone and are committed to providing a website that is accessible to the broadest possible audience, regardless of ability.</p>
 <p>To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.</p>
 <p>This website utilizes various technologies that are meant to make it as accessible as possible at all times. We utilize an accessibility interface that allows persons with specific disabilities to adjust the website’s UI (user interface) and design it to their personal needs.</p>
 <p>Additionally, the website utilizes an AI-based application that runs in the background and optimizes its accessibility level constantly. This application remediates the website’s HTML, adapts its functionality and behavior for screen-readers used by blind users, and for keyboard functions used by individuals with motor impairments.</p>
 <p>If you wish to contact the website’s owner please use the website's form</p>
 <strong class="acsb-title">Screen-reader and keyboard navigation</strong>
 <p>Our website implements the ARIA attributes (Accessible Rich Internet Applications) technique, alongside various behavioral changes, to ensure blind users visiting with screen-readers can read, comprehend, and enjoy the website’s functions. As soon as a user with a screen-reader enters your site, they immediately receive a prompt to enter the Screen-Reader Profile so they can browse and operate your site effectively. Here’s how our website covers some of the most important screen-reader requirements:</p>
 <ol>
 <li><strong class="acsb-title">Screen-reader optimization:&nbsp;</strong>we run a process that learns the website’s components from top to bottom, to ensure ongoing compliance even when updating the website. In this process, we provide screen-readers with meaningful data using the ARIA set of attributes. For example, we provide accurate form labels; descriptions for actionable icons (social media icons, search icons, cart icons, etc.); validation guidance for form inputs; element roles such as buttons, menus, modal dialogues (popups), and others.&nbsp;<br><br>Additionally, the background process scans all of the website’s images. It provides an accurate and meaningful image-object-recognition-based description as an ALT (alternate text) tag for images that are not described. It will also extract texts embedded within the image using an OCR (optical character recognition) technology. To turn on screen-reader adjustments at any time, users need only to press the Alt+1 keyboard combination. Screen-reader users also get automatic announcements to turn the Screen-reader mode on as soon as they enter the website.<br><br>These adjustments are compatible with popular screen readers such as JAWS, NVDA, VoiceOver, and TalkBack.<br><br></li>
 <li><strong class="acsb-title">Keyboard navigation optimization:&nbsp;</strong>The background process also adjusts the website’s HTML and adds various behaviors using JavaScript code to make the website operable by the keyboard. This includes the ability to navigate the website using the Tab and Shift+Tab keys, operate dropdowns with the arrow keys, close them with Esc, trigger buttons and links using the Enter key, navigate between radio and checkbox elements using the arrow keys, and fill them in with the Spacebar or Enter key.<br><br>Additionally, keyboard users will find content-skip menus available at any time by clicking Alt+2, or as the first element of the site while navigating with the keyboard. The background process also handles triggered popups by moving the keyboard focus towards them as soon as they appear, not allowing the focus to drift outside.<br><br>Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements.</li>
 </ol>
 <strong style="border-color: var(--mce-guidelines);"><span lang="EN-US">Disability profiles supported on our website</span></strong>
 <ul>
 <li><strong class="acsb-title">Epilepsy Safe Profile:</strong> this profile enables people with epilepsy to safely use the website by eliminating the risk of seizures resulting from flashing or blinking animations and risky color combinations.</li>
 <li><strong class="acsb-title">Vision Impaired Profile:</strong> this profile adjusts the website so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others.</li>
 <li><strong class="acsb-title">Cognitive Disability Profile:</strong> this profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements more easily.</li>
 <li><strong class="acsb-title">ADHD Friendly Profile</strong>: this profile significantly reduces distractions and noise to help people with ADHD, and Neurodevelopmental disorders browse, read, and focus on the essential elements more easily.</li>
 <li><strong class="acsb-title">Blind Users Profile (Screen-readers):</strong> this profile adjusts the website to be compatible with screen-readers such as JAWS, NVDA, VoiceOver, and TalkBack. A screen-reader is installed on the blind user’s computer, and this site is compatible with it.</li>
 <li><strong class="acsb-title">Keyboard Navigation Profile (Motor-Impaired):</strong> this profile enables motor-impaired persons to operate the website using the keyboard Tab, Shift+Tab, and the Enter keys. Users can also use shortcuts such as “M” (menus), “H” (headings), “F” (forms), “B” (buttons), and “G” (graphics) to jump to specific elements.</li>
 </ul>
 <strong class="acsb-title"><span lang="EN-US">Additional UI, design, and readability adjustments</span></strong>
 <ol>
 <li><strong class="acsb-title"><span lang="EN-US">Font&nbsp;adjustments </span>–</strong><span lang="EN-US">&nbsp;users can increase and decrease its size, change its family (type), adjust the spacing,&nbsp;alignment, line height,&nbsp;and more.</span></li>
 <li><span lang="EN-US"><strong class="acsb-title">Color&nbsp;adjustments –</strong>&nbsp;</span><span lang="EN-US">users can select various color contrast profiles such as light, dark, inverted, and monochrome. Additionally, users can swap color schemes of titles, texts, and backgrounds with over seven different coloring options.</span></li>
 <li><span lang="EN-US"><strong class="acsb-title">Animations –</strong>&nbsp;</span>epileptic users can stop all running animations with the click of a button. Animations controlled by the interface include videos, GIFs, and CSS flashing transitions.</li>
 <li><span lang="EN-US"><strong class="acsb-title">Content&nbsp;highlighting –</strong>&nbsp;</span><span lang="EN-US">users can choose to emphasize essential elements such as links and titles. They can also choose to highlight focused or hovered elements only.</span></li>
 <li><span lang="EN-US"><strong class="acsb-title">Audio muting&nbsp;–</strong>&nbsp;</span><span lang="EN-US">users with hearing devices may experience headaches or other issues due to automatic audio playing. This option lets users mute the entire website instantly.</span></li>
 <li><span lang="EN-US"><strong class="acsb-title">Cognitive&nbsp;disorders –</strong>&nbsp;</span><span lang="EN-US">we utilize a search engine linked to Wikipedia and Wiktionary, allowing people with cognitive disorders to decipher meanings of phrases, initials, slang, and others.</span></li>
 <li><strong class="acsb-title"><span lang="EN-US">Additional functions&nbsp;</span></strong><span lang="EN-US"><strong class="acsb-title">–</strong> we allow users to change cursor color and size, use a printing mode, enable a virtual keyboard, and many other functions.</span></li>
 </ol>
 <strong class="acsb-title">Assistive technology and browser compatibility</strong>
 <p>We aim to support as many browsers and assistive technologies as possible, so our users can choose the best fitting tools for them, with as few limitations as possible. Therefore, we have worked very hard to be able to support all major systems that comprise over 95% of the user market share, including Google Chrome, Mozilla Firefox, Apple Safari, Opera and Microsoft Edge, JAWS, and NVDA (screen readers), both for Windows and MAC users.</p>
 <strong class="acsb-title">Notes, comments, and feedback</strong>
 <p>Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an adequate technological solution to make them accessible. Still, we are continually improving our accessibility, adding, updating, improving its options and features, and developing and adopting new technologies. All this is meant to reach the optimal level of accessibility following technological advancements. If you wish to contact the website’s owner, please use the website's form</p></div> </div> </div>
 </div><div class="acsb-popup acsb-hide-popup" tabindex="0" data-acsb-popup="acsb-hide-popup"> <div class="acsb-popup-close-wide" data-acsb-popup-close="acsb-hide-popup"></div> <div class="acsb-popup-content" role="dialog"> <span class="acsb-popup-close" tabindex="0" role="button" aria-label="Close" data-acsb-popup-close="acsb-hide-popup"> <i class="acsbi-close"></i> </span> <div class="acsb-popup-content-holder" data-acsb-popup-content-holder=""> <div class="acsb-hide"> <span class="acsb-title">Hide Accessibility Interface?</span> <span class="acsb-text">Please note: If you choose to hide the accessibility interface, you won't be able to see it anymore, unless you clear your browsing history and data. Are you sure that you wish to hide the interface?</span> <div class="acsb-buttons"> <span role="button" tabindex="0" class="acsb-button acsb-button-colorized" data-acsb-option="hide">Accept</span> <span role="button" tabindex="0" class="acsb-button" data-acsb-popup-close="acsb-hide-popup">Cancel</span> </div>
 </div> </div> </div>
 </div><div class="acsb-popup acsb-message-popup" tabindex="0" data-acsb-popup="acsb-message-popup"> <div class="acsb-popup-close-wide" data-acsb-popup-close="acsb-message-popup"></div> <div class="acsb-popup-content" role="dialog"> <span class="acsb-popup-close" tabindex="0" role="button" aria-label="Close" data-acsb-popup-close="acsb-message-popup"> <i class="acsbi-close"></i> </span> <div class="acsb-popup-content-holder" data-acsb-popup-content-holder=""> <div class="acsb-popup-message-actual" data-acsb-popup-message-actual=""></div>
 <span class="acsb-button" data-acsb-popup-close="acsb-message-popup" role="button" tabindex="0"> Continue</span> </div> </div>
 </div><div class="acsb-loader" data-acsb-loader=""> <div class="acsb-loader-block acsb-bg-lead"> <span class="acsb-loader-actual"></span> <i class="acsbi-checkmark"></i> </div>
 </div>
 <div class="acsb-loader-overlay"></div></div><div data-acsb="blocker" data-acsb-option="close" class="acsb-widget-blocker acsb-ready" style="display: none;"></div><div data-acsb="processor" class="acsb-processor acsb-ready" style="display: none;"> <div class="acsb-loader" data-acsb-loader=""> <div class="acsb-loader-block"> <span class="acsb-loader-actual"></span> <span class="acsb-loader-content">Processing the data, please give it a few seconds...</span> </div> </div>
 </div><style type="text/css" class="acsb-dynamic-colors">body .acsb-widget .acsb-hero,
     body .acsb-widget .acsb-footer,
     body .acsb-widget .acsb-main:after,
     body .acsb-widget .acsb-range-button,
     body .acsb-widget .acsb-action-box.acsb-active,
     body .acsb-widget .acsb-action-box:active,
     body .acsb-widget .acsb-button:hover,
     body .acsb-widget .acsb-button:focus,
     body .acsb-widget .acsb-button.acsb-button-colorized,
     body .acsb-widget .acsb-loader .acsb-loader-block,
     body .acsb-widget .acsb-profile.acsb-active .acsb-profile-toggle .acsb-toggle:after,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-buttons .acsb-navigator-given-button:hover,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-buttons .acsb-navigator-given-button:focus,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group .acsb-navigator-option:hover,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-all-options .acsb-navigator-option-group .acsb-navigator-option:focus,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-buttons .acsb-navigator-given-button:hover {
         background-color: #3672b7 !important;
     }
 
     body .acsb-widget .acsb-action-box:active,
     body .acsb-widget .acsb-action-box:hover,
     body .acsb-widget .acsb-button,
     body .acsb-widget .acsb-button.acsb-button-colorized,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-search input.acsb-navigator-search-input:hover,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-search input.acsb-navigator-search-input:focus,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-buttons .acsb-navigator-given-button {
         border-color: #3672b7 !important;
     }
 
     body .acsb-widget .acsb-hero-action,
     body .acsb-widget .acsb-hero-action i,
     body .acsb-widget .acsb-range-base,
     body .acsb-widget .acsb-button,
     body .acsb-widget .acsb-profile:hover .acsb-profile-content i,
     body .acsb-widget .acsb-profile:focus .acsb-profile-content i,
     body .acsb-widget .acsb-profile:hover .acsb-profile-content .acsb-profile-name,
     body .acsb-widget .acsb-profile:focus .acsb-profile-content .acsb-profile-name,
     body .acsb-widget .acsb-profile:hover .acsb-profile-content .acsb-profile-text,
     body .acsb-widget .acsb-profile:focus .acsb-profile-content .acsb-profile-text,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-links .acsb-navigator-given-link:hover,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-links .acsb-navigator-given-link:focus,
     body .acsb-navigator .acsb-navigator-options .acsb-navigator-given-options .acsb-navigator-given-buttons .acsb-navigator-given-button {
         color: #3672b7 !important;
     }body .acsb-trigger {
         background-color: #e98e3d !important;
     }
     body .acsb-trigger .acsb-actions-active-icon svg path {
         fill: #e98e3d !important;
     }
     body .acsb-trigger .acsb-actions-active-icon {
         border-color: #e98e3d !important;
     }</style></body></html>`;
  //   const dom = new JSDOM(html);
  //   console.log(dom.window.document.querySelectorAll("table tbody tr"))
  //   //   const tds = Array.from(
  //   //     dom.window.document.querySelectorAll("table tbody tr")
  //   //   );
  //   //   const data = tds.map((td) => td.textContent);
  //   //   console.log("data", data);

  const dom = new JSDOM(html);
  const table = dom.window.document.getElementsByTagName("table");
  console.log("table", table);
})();