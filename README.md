# How to link custom cpp files in RN 70?

## Android

Linking custom cpp to Android lib is kinda difficult. Here you can how to make it:
[link](https://github.com/troZee/react-native-cpp-autolinking/commit/5e1b0f2171490a435b540271588b34ca98287801)

## iOS

Replace

```
s.source_files = "ios/**/*.{h,m,mm}"
```

with

```
s.source_files = "ios/**/*.{h,m,mm}", "cpp/**/*.{h,cpp}"

```

In podspec file
