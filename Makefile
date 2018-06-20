all: lib

java_build:
	cd EasyAndroidUpgrade && gradle build

lib: java_build
	cp EasyAndroidUpgrade/library/build/outputs/aar/library-release.aar platforms/android/Upgrade.aar
