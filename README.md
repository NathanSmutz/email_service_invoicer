# Email Service Invoicer
A Single Page Web Application for creating and sending service invoices via your own email client.

![screenshot_20161015-145810](https://cloud.githubusercontent.com/assets/2293340/19413648/1f529cca-92e8-11e6-80f7-1de09a6df933.png | max-width="50%")
![screenshot_20161015-145825](https://cloud.githubusercontent.com/assets/2293340/19413665/643627d0-92e8-11e6-9803-fa6637f99231.png | max-width="50%")
![screenshot_20161015-150432](https://cloud.githubusercontent.com/assets/2293340/19413676/c4e44b98-92e8-11e6-9958-3e7094f44fb8.png | max-width="50%")

Go to the app here [Email Service Invoicer](https://nathansmutz.github.io/email_service_invoicer/)

This is a single page serverless application for creatinmg and sending service invoices via email.
It's aimed at helping people who perform services and repairs for regular clients.  The app remembers the client and the charge
associated with each item.
Once saved to a computer or device, the app should keep it's memory. It has functionality to save and import client/item data;
but this relies on an HTML5 feature which may not have seen adoption outside of Google's Crome browsers.

This project is written in Clojurescript, using the Reagent/Reagent-Forms libraries for managing the DOM (seriously great); and Alan Dipert's Storage-Atom
library for using local storage.  Bruce Hauman's amazing [Figwheel](https://github.com/bhauman/lein-figwheel) is used for developement.  See  
Run "lein figwheel" from the command line for instant reloading of your code in the browser.  See [Figwheel](https://github.com/bhauman/lein-figwheel) for the full skinny.

