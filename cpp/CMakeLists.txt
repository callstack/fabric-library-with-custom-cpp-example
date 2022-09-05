cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

add_compile_options(
        -fexceptions
        -frtti
        -std=c++17
        -Wall
        -Wpedantic
        -Wno-gnu-zero-variadic-macro-arguments)

file(GLOB unicorn_SRC CONFIGURE_DEPENDS unicorn/*.cpp)
add_library(unicorn STATIC ${unicorn_SRC})

target_include_directories(unicorn PUBLIC .)