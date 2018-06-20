
declare module com {
    export module lijunhuayc {
        export module upgrade {
            export module helper {

                export class UpgradeHelper {
                    // 
                    constructor(builder: any);

                    static checkWithConfigure(activity: any, upgradeUrl: string, isAutoStartInstall: boolean,
                        isQuietDownload: boolean, isCheckPackageName: boolean, isAboutChecking: boolean, delay: number): void;
                }
            }
        }
    }
}


export class UpgradeHelper {
    private isAutoStartInstall: boolean;
    private isQuietDownload: boolean;
    private isCheckPackageName: boolean;
    private isAboutChecking: boolean;
    private delay: number;

    // 
    constructor() {
        this.isAutoStartInstall = true;
        this.isQuietDownload = false;
        this.isCheckPackageName = true;
        this.isAboutChecking = false;
        this.delay = 0;
    }


    public setAutoStartInstall(isAutoStartInstall: boolean): void {
        this.isAutoStartInstall = isAutoStartInstall;
    }


    public setQuietDownload(isQuietDownload: boolean): void {
        this.isQuietDownload = isQuietDownload;
    }


    public setCheckPackageName(isCheckPackageName: boolean): void {
        this.isCheckPackageName = isCheckPackageName;
    }


    public setAboutChecking(isAboutChecking: boolean): void {
        this.isAboutChecking = isAboutChecking;
    }


    public setDelay(delay: number): void {
        this.delay = delay;
    }


    // 开始检测，需要确保app 的 Activity已经生成
    public check(upgradeUrl: string, activity?: any): void {
        if (activity) {
            com.lijunhuayc.upgrade.helper.UpgradeHelper.checkWithConfigure(activity, upgradeUrl,
                this.isAutoStartInstall, this.isQuietDownload, this.isCheckPackageName,
                this.isAboutChecking, this.delay);
        } else {
            com.lijunhuayc.upgrade.helper.UpgradeHelper.checkWithConfigure(null, upgradeUrl,
                this.isAutoStartInstall, this.isQuietDownload, this.isCheckPackageName,
                this.isAboutChecking, this.delay);
        }
    }
}

