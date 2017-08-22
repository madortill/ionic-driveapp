#!/bin/bash
APK_PATH="./platforms/android/build/outputs/apk/"
APK_UNSIGNED_NAME="android-release-unsigned.apk"
KEYSTORE_PATH="E:/Code/AndroidKeystores/driveapp.keystore"
FINISHED_APK_PATH="E:/Code/Production/driveapp.apk"

echo -e "Enter alias: \c"
read android_alias
ionic cordova build android --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYSTORE_PATH $APK_PATH$APK_UNSIGNED_NAME $android_alias
rm $FINISHED_APK_PATH
zipalign.exe -v 4 $APK_PATH$APK_UNSIGNED_NAME $FINISHED_APK_PATH