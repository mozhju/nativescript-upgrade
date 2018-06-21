"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyUpgradeHelper = (function () {
    function MyUpgradeHelper() {
        this.isAutoStartInstall = true;
        this.isQuietDownload = false;
        this.isCheckPackageName = true;
        this.isAboutChecking = false;
        this.delay = 0;
    }
    

    MyUpgradeHelper.prototype.setAutoStartInstall = function(isAutoStartInstall) {
        this.isAutoStartInstall = isAutoStartInstall;
    }


    MyUpgradeHelper.prototype.setQuietDownload = function(isQuietDownload) {
        this.isQuietDownload = isQuietDownload;
    }


    MyUpgradeHelper.prototype.setCheckPackageName = function(isCheckPackageName) {
        this.isCheckPackageName = isCheckPackageName;
    }


    MyUpgradeHelper.prototype.setAboutChecking = function(isAboutChecking) {
        this.isAboutChecking = isAboutChecking;
    }


    MyUpgradeHelper.prototype.setDelay = function(delay) {
        this.delay = delay;
    }


    // 开始检测，需要确保app 的 Activity已经生成
    MyUpgradeHelper.prototype.check = function(upgradeUrl, activity) {
        var helper = new com.lijunhuayc.upgrade.helper.UpgradeHelper(null);
        if (activity) {
            helper.checkWithConfigure(activity, upgradeUrl, this.isAutoStartInstall,
                this.isQuietDownload, this.isCheckPackageName, this.isAboutChecking, this.delay);
        } else {
            helper.checkWithConfigure(null, upgradeUrl, this.isAutoStartInstall,
                this.isQuietDownload, this.isCheckPackageName, this.isAboutChecking, this.delay);
        }
    }

    return MyUpgradeHelper;
}());
exports.MyUpgradeHelper = MyUpgradeHelper;
//# sourceMappingURL=mqtt.android.js.map