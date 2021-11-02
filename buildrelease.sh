#!/bin/bash
APK_PATH="D:/projects/under_development/app_ionic-driveapp/platforms/android/app/build/outputs/bundle/release/"
APK_UNSIGNED_NAME="app-release.aab"
KEYSTORE_PATH="E:/Code/AndroidKeystores/driveapp8.keystore"
FINISHED_APK_PATH="E:/Code/Production/driveapp.aab"

echo -e "Enter alias: \c"
read android_alias
ionic cordova build android --release -- -- --packageType=bundle
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYSTORE_PATH $APK_PATH$APK_UNSIGNED_NAME $android_alias
rm $FINISHED_APK_PATH
zipalign.exe -v 4 $APK_PATH$APK_UNSIGNED_NAME $FINISHED_APK_PATH
read -p "Press enter to continue"