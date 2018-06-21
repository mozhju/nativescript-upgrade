

export class MyUpgradeHelper {

    // 
    constructor()
    {
    }
    

    public setAutoStartInstall(isAutoStartInstall: boolean): void {
        throw "Not implemented";
    }


    public setQuietDownload(isQuietDownload: boolean): void {
        throw "Not implemented";
    }


    public setCheckPackageName(isCheckPackageName: boolean): void {
        throw "Not implemented";
    }


    public setAboutChecking(isAboutChecking: boolean): void {
        throw "Not implemented";
    }


    public setDelay(delay: number): void {
        throw "Not implemented";
    }


    // 开始检测，需要确保app 的 Activity已经生成
    public check(upgradeUrl: string, activity?: any): void {
        throw "Not implemented";
    }
    
}

