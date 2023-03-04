# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:
#Firebase ProGuard rules
-keep class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
    *** VERSION;
    *** PARCELABLE_CREATOR;
}

#Firebase Firestore
-keepnames class com.google.firebase.firestore.FieldValue {
    *** DELETE;
    *** ARRAY_UNION;
    *** ARRAY_REMOVE;
}

#Firebase Realtime Database
-keepattributes Signature
-keepattributes *Annotation*
-keep class com.google.firebase.database.** {
    *;
}

#Firebase Authentication
-keepattributes Signature
-keepattributes *Annotation*
-keep class com.google.firebase.auth.** {
    *;
}

#Firebase Analytics
-keep class com.google.android.gms.measurement.AppMeasurement {
    public *;
}
-keep class com.google.android.gms.measurement.internal.** {
    public *;
}

#Firebase Crashlytics
-keepattributes SourceFile,LineNumberTable
-keep class com.google.firebase.crashlytics.** {
    *;
}
-keep class com.google.android.gms.tasks.OnSuccessListener { *; }

#Firebase Cloud Messaging
-keep class com.google.firebase.messaging.** {
  *;
}
-dontwarn com.google.android.gms.**
