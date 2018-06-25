package com.lijunhuayc.upgrade.helper;

import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.text.TextUtils;
import android.util.Log;

import com.lijunhuayc.upgrade.model.LocalAppInfo;
import com.lijunhuayc.upgrade.model.UpgradeConfig;
import com.lijunhuayc.upgrade.network.NetworkUtils;
import com.lijunhuayc.upgrade.utils.MyToast;
import com.lijunhuayc.upgrade.utils.SharedPreferencesUtils;

import java.lang.reflect.Method;

/**
 * Desc:
 * Created by ${junhua.li} on 2016/10/21 18:21.
 * Email: lijunhuayc@sina.com
 */
public class UpgradeHelper {
    private static final String TAG = UpgradeHelper.class.getSimpleName();
    private Context mContext;
    private UpgradeConfig config;
    private boolean isRegisterBR;
    private BroadcastReceiver broadcastReceiver;

    public UpgradeHelper(Builder builder) {
        if (builder != null) {
            this.mContext = builder.getContext();
            this.config = builder.getConfig();
            LocalAppInfo.init(mContext);
            MyToast.init(mContext);
            SharedPreferencesUtils.init(mContext);
        }
    }

    public Application getApplication()  {
        try {
            Class<?> mClass = Class.forName("android.app.ActivityThread");
            Method currentActivityThread = mClass.getMethod("currentActivityThread");
            Method getApplication = mClass.getMethod("getApplication");

            Object activityThread = currentActivityThread.invoke(null);

            return (Application) getApplication.invoke(activityThread);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public void checkWithConfigure(Context mContext, String upgradeUrl, boolean isAutoStartInstall,
         boolean isQuietDownload, boolean isCheckPackageName, boolean isAboutChecking, long delay)
    {
        if (mContext == null) {
            this.mContext = getApplication().getApplicationContext();
        } else {
            this.mContext = mContext;
        }

        LocalAppInfo.init(this.mContext);
        MyToast.init(this.mContext);
        SharedPreferencesUtils.init(this.mContext);

        this.config = new UpgradeConfig();
        this.config.setUpgradeUrl(upgradeUrl);
        this.config.setAutoStartInstall(isAutoStartInstall);
        this.config.setQuietDownload(isQuietDownload);
        this.config.setCheckPackageName(isCheckPackageName);
        this.config.setAboutChecking(isAboutChecking);//关于页面手动检测更新需要设置isAboutChecking(true), 启动时检测设为false
        this.config.setDelay(delay);

        check();
    }

    public void check() {
        if (NetworkUtils.isNetworkAvailable(mContext)) {
            if (null != broadcastReceiver && isRegisterBR) {
                mContext.unregisterReceiver(broadcastReceiver);
                isRegisterBR = false;
            }
            new CheckAsyncTask(mContext).setConfig(config).execute();
        } else {
            if (!isRegisterBR) {
                broadcastReceiver = new BroadcastReceiver() {
                    @Override
                    public void onReceive(Context context, Intent intent) {
                        check();
                    }
                };
                IntentFilter intentFilter = new IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION);
                mContext.registerReceiver(broadcastReceiver, intentFilter);
                isRegisterBR = true;
            }
        }
    }

    public static class Builder {
        private static final String TAG = Builder.class.getSimpleName();
        private Context mContext;
        private UpgradeConfig config;

        public Builder(Context mContext) {
            this.mContext = mContext.getApplicationContext();
            config = new UpgradeConfig();
        }

        Context getContext() {
            return mContext;
        }

        UpgradeConfig getConfig() {
            return config;
        }

        public Builder setUpgradeUrl(String upgradeUrl) {
            if (TextUtils.isEmpty(upgradeUrl)) {
                throw new IllegalArgumentException("The URL is invalid.");
            }
            this.config.setUpgradeUrl(upgradeUrl);
            return this;
        }

        private Builder setAutoStartInstall(boolean autoStartInstall) {
            this.config.setAutoStartInstall(autoStartInstall);
            return this;
        }

        public Builder setQuietDownload(boolean quietDownload) {
            this.config.setQuietDownload(quietDownload);
            return this;
        }

        public Builder setCheckPackageName(boolean checkPackageName) {
            this.config.setCheckPackageName(checkPackageName);
            return this;
        }

        public Builder setIsAboutChecking(boolean aboutChecking) {
            this.config.setAboutChecking(aboutChecking);
            return this;
        }

        public Builder setDelay(long delay) {
            this.config.setDelay(delay);
            return this;
        }

        public UpgradeHelper build() {
            return new UpgradeHelper(this);
        }

    }
}
