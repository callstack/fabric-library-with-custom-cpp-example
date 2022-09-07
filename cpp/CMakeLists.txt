cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

add_compile_options(
        -fexceptions
        -frtti
        -std=c++17
        -Wall
        -Wpedantic
        -Wno-gnu-zero-variadic-macro-arguments)

file(GLOB unicorn_SRCS CONFIGURE_DEPENDS *.cpp react/renderer/components/unicorn/*.cpp)
add_library(react_codegen_unicorn SHARED ${unicorn_SRCS})

target_include_directories(react_codegen_unicorn PUBLIC . react/renderer/components/unicornview)

target_link_libraries(
  react_codegen_unicorn
  fbjni
  folly_runtime
  glog
  jsi
  react_codegen_rncore
  react_debug
  react_nativemodule_core
  react_render_core
  react_render_debug
  react_render_graphics
  react_render_mapbuffer
  rrc_view
  turbomodulejsijni
  yoga
)

target_compile_options(
  react_codegen_unicorn
  PRIVATE
  -DLOG_TAG=\"ReactNative\"
  -fexceptions
  -frtti
  -std=c++17
  -Wall
)