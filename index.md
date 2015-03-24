---
layout: default
baseurl: "."
---

<section class="m-lander-stripe">
    <div class="l-lander-stripe">&nbsp;</div>

    <div class="row">
      <div class="col-xs-6">
        <img class="lander-img" src="{{site.imgbaseurl | relative}}img/albert_blank_right_640.png">
      </div>

      <div class="col-xs-6">
         <div class="lander-title">
            <h1>AEVI SDK Documentation</h1>
            <h2>v{{ site.version }}</h2>
         </div>
      </div>
    </div>

</section>

The AEVI SDK for Albert provides a combination of Guides, Reference Documentation, Libraries, Simulators and Samples that enable you to build, or port, an Android app to run on the Albert Device. This includes the ability for an app to take payments and to print receipts, as well as other tickets, using the built-in printer.

<h1>Introduction</h1>
<div class="row">
  <div class="col-xs-6">
    <h4><a href="{{site.baseurl | relative}}introduction/albert-intro.html" class="h4">Albert Introduction</a></h4>
    <p>An introduction to Albert and its architecture</p>

    <h4><a href="{{site.baseurl | relative}}introduction/sdk-intro.html" class="h4">AEVI SDK Introduction</a></h4>
    <p>An introduction to the AEVI SDK</p>

    <h4><a href="{{site.baseurl | relative}}introduction/whats-new-2.html" class="h4">What's new in SDK Version 2</a></h4>
    <p>An overview of the changes introduced in SDK Version 2.0.0</p>

    <h4><a href="{{site.baseurl | relative}}introduction/sdk-install.html" class="h4">Installation Guide</a></h4>
    <p>Detailed instructions for installing and upgrading the AEVI SDK</p>

    <h4><a href="{{site.baseurl | relative}}introduction/sample-apps.html" class="h4">Sample Apps</a></h4>
    <p>Overview of the included sample Apps</p>
  </div>

  <div class="col-xs-6">
    <h4><a href="{{site.baseurl | relative}}introduction/api-compatibility.html" class="h4">API compatibility table</a></h4>
    <p>Table listing the APIs compatibility per bank</p>

    <h4><a href="{{site.baseurl | relative}}introduction/dev-lifecycle.html" class="h4">App Development lifecycle</a></h4>
    <p>An overview on how to create, test and support an App</p>

    <h4><a href="{{site.baseurl | relative}}introduction/platform-hardening.html" class="h4">Platform Hardening, Customisations &amp; Restrictions</a></h4>
    <p>An overview of changes made to the platform to ensure security &amp; integrity</p>

    <h4><a href="{{site.baseurl | relative}}introduction/aevi-emulator.html" class="h4">AEVI Emulator</a></h4>
    <p>Installing and using the AEVI hardened emulator to test Apps</p>

    <h4><a href="{{site.baseurl | relative}}introduction/albert-developer-device.html" class="h4">Albert Developer Device</a></h4>
    <p>Setting up an Albert Developer Device to test Apps</p>
  </div>
</div>

<h1>Guides</h1>
<div class="row">
  <div class="col-xs-6">
    <h4><a href="{{site.baseurl | relative}}guides/financial-transactions.html" class="h4">Introduction to Financial Transactions</a></h4>
    <p>An introduction to the various Financial Transactions available</p>

    <h4><a href="{{site.baseurl | relative}}guides/getting-started.html" class="h4">Getting started with the Payment API</a></h4>
    <p>A step-by-step guide on setting up a development environment and taking a payment using the Payment API</p>

    <h4><a href="{{site.baseurl | relative}}guides/app-integrity.html" class="h4">Maintaining App Integrity</a></h4>
    <p>Guidelines &amp; best practice for maintaining App integrity</p>

    <h4><a href="{{site.baseurl | relative}}guides/configuration-api.html" class="h4">Configuration and Status</a></h4>
    <p>Retrieve configuration information from the Payment Application and Terminal, as well as, query services for their state</p>

    <h4><a href="{{site.baseurl | relative}}guides/card-api.html" class="h4">Card Readers</a></h4>
    <p>Accessing non-payment Smart/Chip and Magstripe cards</p>

    <h4><a href="{{site.baseurl | relative}}guides/mail-api.html" class="h4">Mail Service</a></h4>
    <p>Sending emails for an app</p>

    <h4><a href="{{site.baseurl | relative}}guides/led-api.html" class="h4">LED Notification Service</a></h4>
    <p>Notifying the user by the use of LEDs</p>

  </div>

  <div class="col-xs-6">
    <h4><a href="{{site.baseurl | relative}}guides/user-authentication.html" class="h4">User Authentication</a></h4>
    <p>Guard sections of an app for certain user roles</p>

    <h4><a href="{{site.baseurl | relative}}guides/printing-api.html" class="h4">Print Service</a></h4>
    <p>Printing receipts and tickets from an app</p>

    <h4><a href="{{site.baseurl | relative}}guides/crashlog-api.html" class="h4">Crash Log Service</a></h4>
    <p>Information on using the Crash Log Service with a third party framework to capture telemetry, in the event of an app crash</p>

    <h4><a href="{{site.baseurl | relative}}guides/transactionlog-api.html" class="h4">Transaction Log Service</a></h4>
    <p>Adding entries to the Transaction Log from an app</p>

    <h4><a href="{{site.baseurl | relative}}guides/shared-preferences-api.html" class="h4">Shared Preferences Service</a></h4>
    <p>Synchronising configuration between the Developer portal and an app</p>

    <h4><a href="{{site.baseurl | relative}}guides/systembar.html" class="h4">System Bar</a></h4>
    <p>Using the system bar from an app</p>

    <h4><a href="{{site.baseurl | relative}}guides/camera-guide.html" class="h4">Using the Camera</a></h4>
    <p>Advice and tips for using the Camera on Albert</p>
  </div>
</div>

<h1>Reference</h1>
<div class="row">
  <div class="col-xs-6">
    <h4><a href="{{site.baseurl | relative}}reference/javadocs.html" class="h4">API Reference</a></h4>
    <p>Reference Documentation for the APIs</p>

    <h4><a href="{{site.baseurl | relative}}reference/device-specifications.html" class="h4">Device specification</a></h4>
    <p>Detailed specifications for the Hardware</p>

    <h4><a href="{{site.baseurl | relative}}reference/release-notes.html" class="h4">Release notes</a></h4>
    <p>Release notes and version history for the SDK</p>

    <h4><a href="{{site.baseurl | relative}}reference/permissions-and-manifest.html" class="h4">Permissions and Manifest changes</a></h4>
    <p>Details on various Platform permissions and changes made to the Android Manifest file</p>
  </div>

  <div class="col-xs-6">
    <h4><a href="{{site.baseurl | relative}}reference/transaction-results.html" class="h4">Transaction Results</a></h4>
    <p>A detailed overview of the properties returned for a Payment transaction</p>

    <h4><a href="{{site.baseurl | relative}}reference/aevi-eula.html" class="h4">Terms of Use</a></h4>
    <p>AEVI SDK and Emulator Terms of Use</p>

    <h4><a href="{{site.baseurl | relative}}reference/support.html" class="h4">Getting Support</a></h4>
    <p>Your options for getting Help &amp; Support on the SDK</p>
  </div>
</div>


