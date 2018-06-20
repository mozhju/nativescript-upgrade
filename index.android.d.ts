

export declare class UpgradeHelper {
    constructor();    

    public setAutoStartInstall(isAutoStartInstall: boolean): void;

    public setQuietDownload(isQuietDownload: boolean): void;

    public setCheckPackageName(isCheckPackageName: boolean): void;

    public setAboutChecking(isAboutChecking: boolean): void;

    public setDelay(delay: number): void;

    check(upgradeUrl: string, activity?: any): void;
}
