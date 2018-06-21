"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyUpgradeHelper = (function () {
    function MyUpgradeHelper() {
    }
    

    MyUpgradeHelper.prototype.setAutoStartInstall = function(isAutoStartInstall) {
        throw "Not implemented";
    }


    MyUpgradeHelper.prototype.setQuietDownload = function(isQuietDownload) {
        throw "Not implemented";
    }


    MyUpgradeHelper.prototype.setCheckPackageName = function(isCheckPackageName) {
        throw "Not implemented";
    }


    MyUpgradeHelper.prototype.setAboutChecking = function(isAboutChecking) {
        throw "Not implemented";
    }


    MyUpgradeHelper.prototype.setDelay = function(delay) {
        throw "Not implemented";
    }


    // 开始检测，需要确保app 的 Activity已经生成
    MyUpgradeHelper.prototype.check = function(upgradeUrl, activity) {
        throw "Not implemented";
    }


    return MyUpgradeHelper;
}());
exports.MyUpgradeHelper = MyUpgradeHelper;
//# sourceMappingURL=index.ios.js.map