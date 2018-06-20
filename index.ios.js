"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UpgradeHelper = (function () {
    function UpgradeHelper() {
    }
    

    UpgradeHelper.prototype.setAutoStartInstall = function(isAutoStartInstall) {
        throw "Not implemented";
    }


    UpgradeHelper.prototype.setQuietDownload = function(isQuietDownload) {
        throw "Not implemented";
    }


    UpgradeHelper.prototype.setCheckPackageName = function(isCheckPackageName) {
        throw "Not implemented";
    }


    UpgradeHelper.prototype.setAboutChecking = function(isAboutChecking) {
        throw "Not implemented";
    }


    UpgradeHelper.prototype.setDelay = function(delay) {
        throw "Not implemented";
    }


    // 开始检测，需要确保app 的 Activity已经生成
    UpgradeHelper.prototype.check = function(upgradeUrl, activity) {
        throw "Not implemented";
    }


    return UpgradeHelper;
}());
exports.UpgradeHelper = UpgradeHelper;
//# sourceMappingURL=index.ios.js.map