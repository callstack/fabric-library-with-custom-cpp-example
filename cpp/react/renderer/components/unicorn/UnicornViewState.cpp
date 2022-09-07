//
//  UnicornViewState.c
//  React-Codegen
//
//  Created by troZee on 22/08/2022.
//

#include "UnicornViewState.h"

namespace facebook {
namespace react {

Size UnicornViewState::getContentSize() const {
  return contentBoundingRect.size;
}

} // namespace react
} // namespace facebook
