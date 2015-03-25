## Compatibility matrix for Albert

The table below shows the platform software versions that were used on the Albert during the SDK release tests
and are therefore compatible with the SDK release shown.

SDK Version | AEVI Services Version | Payment Application | Albert OS Version |
----------- | --------------------- | ------------------- | ----------------- |
2.3.0       | 1.8.3.1               | 1.3.40              | 6.23 - patch 2    |
2.2.0       | 1.8.1                 | 1.3.39              | 6.23 - patch 2    |
2.1.0       | 1.8.0                 | 1.3.38              | 6.23              |
2.1.0       | 1.7.0.4               | 1.3.37              | 6.23              |
2.0.1       | 1.6.0.1               | 1.3.36              | 6.22              |
------------| --------------------- | ------------------- | ----------------- |

## Compatibility matrix for AEVI emulator

The table below shows the AEVI emulator software versions that were used during the SDK release tests.

SDK Version | AEVI Emulator Version |
----------- | --------------------- |
2.3.0       | 2.0.0                 |
2.2.0       | 2.0.0                 |
2.1.0       | 2.0.0                 |
2.0.1       | 2.0.0                 |
----------- | --------------------- |


## Version 2.3.0 (Feb 27th 2015)

Changes and fixes:

* New TokenRequest type added to request token from payment application for the purpose of repeat payments or subscriptions
* Updates to PaymentAppConfiguration to include a flag indicating if the payment application can support accessibility mode
* Updates to AEVIRequest to include flag for accessibility mode
* Altered logic of AEVI sample application to disable pre-auth complete and reversal buttons when they can't be used
* AEVI sample application now shows accessibility mode flag in configuration screen
* Additional card types added to CardType; OTHER_DEBIT, OTHER_CREDIT, OTHER_CHARGE
* Complete documentation restyle; Javadocs now embedded within main SDK documentation will allow for better integration
* Other minor documentation changes

Known Issues:

* The Albert OS 6.23 does not yet include support for Deposit or Token requests therefore they fail if attempted on an Albert device
* Emulator and generic device do not display correct error messaging when ToTheMovies app is unable to print the ticket
* The Device Simulator does not detect when the external Bixolon printer is out of paper.
* A Tip amount is not allowed in a PaymentRequest Call when Tipping is disabled on the Payment App
* Printer Compatibility does not detect when the Printer Module is not installed on the Device

## Version 2.2.0 (Jan 30th 2015)

Changes and fixes:

* Updates to AEVIRequest object to implement new printing methods for single receipt functionality
* Bug fix ToTheMovies (non-gradle) build
* Bug fix ToTheMovies to display messages correctly during printing errors
* Removed the maven build example from the samples.
* Minor documentation enhancements
* Added `*-albert.apk` files to the release archive to allow sample apps and payment simulator to be installed directly onto the Albert
* Fixed toast message on payment sample reversal to be consistent
* Renamed `AeviApi-release.aar` to `AeviApi-2.2.0.aar` for consistency
* Added Albert guide to documentation
* Added compatibility tables to release notes (see above)
* Fixed Payment Simulator bug on Albert. Selected merchant and transaction types are now updated correctly.
* Bug fix in compatibility setting for TerminalConfiguration
* Better messaging in MagStripe section of AEVISample application
* Added email logging to DeviceSimulator

Known Issues:

* Emulator and generic device do not display correct error messaging when ToTheMovies app is unable to print the ticket
* The Device Simulator does not detect when the external Bixolon printer is out of paper.
* A Tip amount is not allowed in a PaymentRequest Call when Tipping is disabled on the Payment App
* Printer Compatibility does not detect when the Printer Module is not installed on the Device

## Version 2.1.0 (November 28th 2014)

Changes and fixes:

* Updates to the Payment API including: Support for Deposit Transactions; Filtering by CardType, AccountType and CardEntryType; Support for custom parameters in a FinancialRequest
* Updates to the PaymentAppConfiguration API including: Support for Integrated and Standalone Modes; Extending the API to return Merchant Names in addition to IDs
* Updates to the LED API enabling comprehensive LED sequencing
* Updates to the AEVISample App to support the enhancements to the LED and Payment APIs
* Updates to the DeviceSimulator and PaymentSimulator to support the new APIs
* Fixes to the Device Simulator (& Albert) Authentication services to return RESULT_CANCELED when the cancel button is pressed
* Various bug fixes and improvements
* Minor documentation enhancements
* Amendments to the End User License Agreement
* Restyled JavaDocs

Known Issues:

* All SDK 2.x.x Releases require Albert OS Release 6.23.0 or later
* DeviceSimulator Email implementation does not work correctly on the Emulator
* A Tip amount is not allowed in a PaymentRequest Call when Tipping is disabled on the Payment App
* Printer Compatibility does not detect when the Printer Module is not installed on the Device

## Version 2.0.1 (November 5th 2014)

Changes and fixes:

* Fix to restore crash and transaction log functionality of the AEVI Device Simulator
* Updates to the ToTheMovies App sample code and associated documentation to support patched WebView component
* Various documentation corrections after internal review
* Various minor enhancements to Sample Apps
* Various documentation and code fixes following feedback received from CBA from 1.x.x releases of the SDK

Known Issues:

* AEVISample is not able to detect when the Payment Simulator has been installed in the wrong order. This will be resolved prior to the next planned release.
* Albert OS Release 6.22.0 does not support the Authentication API. Further information is available in the release notes for the OS Release.
* Albert OS Release 6.22.0 does not support Web based Applications such as ToTheMovies. Further information is available in the release notes for the OS Release.
* Maven build of ToTheMovies application is no longer functional as Maven does not support Android SDK versions above 15
* Both ToTheMovies apps can crash when printing a receipt if the printer has not been used since boot. This will be resolved in the next release.

## Version 2.0.0 (October 31st 2014)

Changes and fixes:

* Updates to SDK and corresponding APIs to support the new Albert Security Architecture (see section What's New in Release 2.0)
* There is no backward compatibility with Version 1.x of the SDK. All Apps will require minor refactoring and recompilation against SDK 2.0.0. Please refer to the section: What's New in Release 2.0.
* The AEVI Simulator has now been split into 2 separate simulators: AEVI Device Simulator and AEVI Payment Simulator. It is now possible to install the Payment Simulator on an Albert Device for testing purposes.
* Enhancements to the Simulator to display Transaction Logs
* Enhancements to the Mail Compatibility API to indicate when an eMail Account is configured.
* Enhancements to the MOTO Compatibility API to indicate when MOTO Services are enabled by the Bank.
* Various documentation corrections and enhancements as a result of feedback from CBA and internal Review

Known Issues:

* Documentation inconsistencies may exist following extensive changes as a result of implementing the New Security Architecture. A full document review is planned prior to the next release
* Certain observations raised by CBA in recent feedback have not been assessed or incorporated into this release. These will be assessed and any required changes shall be incorporated into the next release.
* AEVISample is not able to detect when the Payment Simulator has been installed in the wrong order. This will be resolved prior to the next planned release.
* Albert OS Release 6.22.0 does not support the Authentication API. Further information is available in the release notes for the OS Release.
* Albert OS Release 6.22.0 does not support Web based Applications such as ToTheMovies. Further information is available in the release notes for the OS Release.

## Version 1.3.0 (September 30th 2014)

Changes and fixes:

* Updates to the Authentication API to enable Authentication to occur against specific roles
* Provision of a new guide on using the Camera
* Fixes to enable the ToTheMovies and ToTheMovies-Classic Samples to work
* Enhancements and Bug Fixes to the Simulator including: enabling the display of Crashlog data; enable the display of `string set` data stored via SharedPreferences; validation on Merchant and Currency configuration to prevent incorrect configuration
* Various documentation corrections and enhancements as a result of feedback from CBA and internal Review

Known Issues:

* `TerminalConfiguration.getTerminalConfiguration()` JavaDocs documentation needs to be updated with information on Exceptions that can be thrown.

## Version 1.2.4 (August 15th 2014)

Changes and fixes:

* Enhancements to the AEVI-Simulator and AEVI-Sample apps to improve usability and stability
* Updates to the Emulator documentation to align with the first release of the Emulator
* Minor bugfix to the AEVI-Simulator to enable System Bar button hiding on the Emulator
* Various documentation improvements following a detailed review by CBA
* Updates to the Gradle, Maven and Eclipse build scripts for the sample projects
* Minor updates to terms and conditions removing references to Pi and AppBank and fixing some typographical issues

Known Issues:

* The 'To the Movies' samples do not work on the Albert Device or the Emulator due to a restriction in using SHA-1 Hash Algorithms for Payment relevant Apps (as part of the Trusted Communications manager design). This persistent issue will be investigated as part of the next release (v1.2.5).
* The AEVI Simulator does not prevent incorrect configuration by the user of the Merchant and Currency settings. This long-standing issue will be resolved in the next release (v1.2.5).
* The AEVI Simulator SharedPreferences view does not display `string sets`. This issue will be resolved in the next release (v1.2.5).

