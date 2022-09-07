/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#import "UnicornViewState.h"
#include "EventEmitters.h"
#include "Props.h"
#include <react/renderer/components/view/ConcreteViewShadowNode.h>
#include <react/renderer/core/LayoutContext.h>

namespace facebook {
namespace react {

JSI_EXPORT extern const char UnicornViewComponentName[];

/*
 * `ShadowNode` for <ScrollView> component.
 */
class JSI_EXPORT UnicornViewShadowNode final : public ConcreteViewShadowNode<
UnicornViewComponentName,
UnicornViewProps,
UnicornViewEventEmitter,
UnicornViewState> {
    
public:
    using ConcreteViewShadowNode::ConcreteViewShadowNode;
    
#pragma mark - LayoutableShadowNode
    
    void layout(LayoutContext layoutContext) override;
    Point getContentOriginOffset() const override;
    
private:
    void updateStateIfNeeded();
    void updateScrollContentOffsetIfNeeded();
};

} // namespace react
} // namespace facebook
