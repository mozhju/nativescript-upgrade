# nativescript-ichi-mqtt

upgrade for NativeScript.

## Supported platforms

- Android (any device with Android 4.4 and higher)

There is no support for iOS yet!

## Installing

```
tns plugin add nativescript-upgrade
```

## Usage

Here is a TypeScript example:

```js
import {UpgradeHelper} from "nativescript-upgrade";

// new Mqtt Client
var upgradeHelper = new UpgradeHelper();
upgradeHelper.check("http://www.upgrade.com/upgrade?version=3");

```



