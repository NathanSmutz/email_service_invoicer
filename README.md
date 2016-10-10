# Email Service Invoicer
A Single Page Web Application for creating and sending service invoices via email.

Go to the app here [Email Service Invoicer](https://nathansmutz.github.io/email_service_invoicer/)

This is a single page serverless application for creatinmg and sending service invoices via email.
It's aimed at helping people who perform services and repairs for regular clients.  The app remembers the client and the charge
associated with each item.
Once saved to a computer or device, the app should keep it's memory. It has functionality to save and import client/item data;
but this relies on an HTML5 feature which may not have seen adoption outside of Google's Crome browsers.

This project is written in Clojurescript, using the Reagent/Reagent-Forms libraries for managing the DOM (seriously great); and Alan Dipert's Storage-Atom
library for using local storage.  Bruce Hauman's amazing [Figwheel](https://github.com/bhauman/lein-figwheel) is used for developement.  See  
Run "lein figwheel" from the command line for instant reloading of your code in the browser.  See [Figwheel](https://github.com/bhauman/lein-figwheel) for the full skinny.

