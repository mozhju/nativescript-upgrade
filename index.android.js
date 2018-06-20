"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpgradeHelper = (function () {
    function UpgradeHelper() {
        this.isAutoStartInstall = true;
        this.isQuietDownload = false;
        this.isCheckPackageName = true;
        this.isAboutChecking = false;
        this.delay = 0;
    }
    

    UpgradeHelper.prototype.setAutoStartInstall = function(isAutoStartInstall) {
        this.isAutoStartInstall = isAutoStartInstall;
    }


    UpgradeHelper.prototype.setQuietDownload = function(isQuietDownload) {
        this.isQuietDownload = isQuietDownload;
    }


    UpgradeHelper.prototype.setCheckPackageName = function(isCheckPackageName) {
        this.isCheckPackageName = isCheckPackageName;
    }


    UpgradeHelper.prototype.setAboutChecking = function(isAboutChecking) {
        this.isAboutChecking = isAboutChecking;
    }


    UpgradeHelper.prototype.setDelay = function(delay) {
        this.delay = delay;
    }


    // 开始检测，需要确保app 的 Activity已经生成
    UpgradeHelper.prototype.check = function(upgradeUrl, activity) {
        var upgradeHelper = new com.lijunhuayc.upgrade.helper.UpgradeHelper();
        if (activity) {
            upgradeHelper.checkWithConfigure(activity, upgradeUrl, this.isAutoStartInstall,
                    this.isQuietDownload, this.isCheckPackageName, this.isAboutChecking,
                    this.delay);
        } else {
            upgradeHelper.checkWithConfigure(null, upgradeUrl, this.isAutoStartInstall,
                    this.isQuietDownload, this.isCheckPackageName, this.isAboutChecking,
                    this.delay);
        }
    }

    return UpgradeHelper;
}());
exports.UpgradeHelper = UpgradeHelper;
//# sourceMappingURL=mqtt.android.js.map