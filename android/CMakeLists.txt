cmake_minimum_required(VERSION 3.13)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 11)

file(GLOB unicorn_SRC CONFIGURE_DEPENDS ../cpp/unicorn/*.cpp)
add_library(unicorn STATIC ${unicorn_SRC})

# Specifies a path to native header files.
include_directories(${unicorn_SRC})
