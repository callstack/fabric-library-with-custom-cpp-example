# Example fabric library with custom cpp state implementation

## Description

Probably you will not need this template, since fabric is responsible for whole synchronous measurements under the hood. But in some cases, your native component would like to update its frames in synchronous [way](https://reactnative.dev/architecture/render-pipeline). Right now, codegen does not support generating a new state based on typescript implementation, hence custom state implementation must be added manually. Linking custom cpp can be tricky, so together with [@cortinico](https://github.com/cortinico) we prepared a showcase, so you can reuse that approach in your library. This example has been built on top of [bob-builder](https://github.com/callstack/react-native-builder-bob)

More context you can find [here](https://github.com/reactwg/react-native-new-architecture/discussions/71#discussioncomment-3606598)

## How to generate shared cpp code

- run [codegen](https://reactnative.dev/docs/new-architecture-library-android#1-extend-or-implement-the-code-generated-native-interfaces) `./gradlew generateCodegenArtifactsFromSchema` in android folder
- copy everything under `build/generated/source/codegen/jni/react/renderer/components/yourlib` into [cpp](https://github.com/troZee/react-native-cpp-autolinking/tree/nc/custom-cpp-sources/cpp) folder
- Pass `interfaceOnly` [flag](https://github.com/troZee/react-native-cpp-autolinking/blob/nc/custom-cpp-sources/src/UnicornViewNativeComponent.ts#L23)
- Implement your cpp state

## How to link custom cpp state in RN 70?

### Android

Here you can see how to make it:
[link](https://github.com/troZee/react-native-cpp-autolinking/commit/5e1b0f2171490a435b540271588b34ca98287801)

### iOS

Replace `s.source_files = "ios/**/*.{h,m,mm}"` with `s.source_files = "ios/**/*.{h,m,mm}", "cpp/**/*.{h,cpp}"` inside `yourLib.podspec` file

And change imports inside `.mm` [file](https://github.com/troZee/react-native-cpp-autolinking/commit/12561736b58837cd4783f55c3af20e67b40219c3#diff-9d18bbaec12252e635b26e515dd1616123b8b02def6291bfefceb645f4e5264fL4)
