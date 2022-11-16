# Example fabric library with custom cpp state implementation

## ⚠️⚠️⚠️ UPDATE ⚠️⚠️⚠️

This repository has been archived in favour of official [solution](https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/component-with-state#fabric-component-implement-cxx-state). Thanks to great efforts from the core team this temporary repository is no longer necessary.

## Description

Probably you will not need this template, since fabric is responsible for whole synchronous measurements under the hood. But in some cases, your native component would like to update its frames in synchronous [way](https://reactnative.dev/architecture/render-pipeline). Right now, codegen does not support generating a new state based on typescript implementation, hence custom state implementation must be added manually. Linking custom cpp can be tricky, so together with [@cortinico](https://github.com/cortinico) we prepared a showcase, so you can reuse this approach in your library. This example has been built on top of [bob-builder](https://github.com/callstack/react-native-builder-bob)

More context you can find [here](https://github.com/reactwg/react-native-new-architecture/discussions/71#discussioncomment-3606598)

## How to generate shared cpp code

- run [codegen](https://reactnative.dev/docs/new-architecture-library-android#1-extend-or-implement-the-code-generated-native-interfaces) `./gradlew generateCodegenArtifactsFromSchema` in android folder
- copy everything under `build/generated/source/codegen/jni/react/renderer/components/yourlib` into [cpp](https://github.com/callstack/fabric-library-with-custom-cpp/tree/main/cpp) folder
- pass `interfaceOnly` [flag](https://github.com/callstack/fabric-library-with-custom-cpp/blob/main/src/UnicornViewNativeComponent.ts#L23)
- run codegen once again
- implement cpp state

## How to link custom cpp state in RN 70?

### Android

Here you can see how to make it:
[link](https://github.com/callstack/fabric-library-with-custom-cpp/commit/5e1b0f2171490a435b540271588b34ca98287801). Instead of `AndroidMkPath` , please add `CMakePath` to [react-native.config.js](https://github.com/callstack/fabric-library-with-custom-cpp-example/blob/main/react-native.config.js#L6)

### iOS

Replace `s.source_files = "ios/**/*.{h,m,mm}"` with `s.source_files = "ios/**/*.{h,m,mm}", "cpp/**/*.{h,cpp}"` inside `yourLib.podspec` file and change imports inside `.mm` [file](https://github.com/callstack/fabric-library-with-custom-cpp/commit/12561736b58837cd4783f55c3af20e67b40219c3#diff-9d18bbaec12252e635b26e515dd1616123b8b02def6291bfefceb645f4e5264fL4)
