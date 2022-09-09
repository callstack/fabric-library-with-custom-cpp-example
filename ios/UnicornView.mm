#ifdef RCT_NEW_ARCH_ENABLED
#import "UnicornView.h"

#import "../cpp/react/renderer/components/unicorn/ComponentDescriptors.h"
#import "../cpp/react/renderer/components/unicorn/EventEmitters.h"
#import "../cpp/react/renderer/components/unicorn/Props.h"
#import "../cpp/react/renderer/components/unicorn/RCTComponentViewHelpers.h"

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface UnicornView () <RCTUnicornViewViewProtocol>

@end

@implementation UnicornView {
    UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<UnicornViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const UnicornViewProps>();
    _props = defaultProps;

    _view = [[UIView alloc] init];

    self.contentView = _view;
  }

  return self;
}

- (void)updateState:(const facebook::react::State::Shared &)state oldState:(const facebook::react::State::Shared &)oldState {
    NSLog(@"Update State");
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<UnicornViewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<UnicornViewProps const>(props);

    if (oldViewProps.color != newViewProps.color) {
        NSString * colorToConvert = [[NSString alloc] initWithUTF8String: newViewProps.color.c_str()];
        [_view setBackgroundColor:[self hexStringToColor:colorToConvert]];
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> UnicornViewCls(void)
{
    return UnicornView.class;
}

- hexStringToColor:(NSString *)stringToConvert
{
    NSString *noHashString = [stringToConvert stringByReplacingOccurrencesOfString:@"#" withString:@""];
    NSScanner *stringScanner = [NSScanner scannerWithString:noHashString];
    
    unsigned hex;
    if (![stringScanner scanHexInt:&hex]) return nil;
    int r = (hex >> 16) & 0xFF;
    int g = (hex >> 8) & 0xFF;
    int b = (hex) & 0xFF;
    
    return [UIColor colorWithRed:r / 255.0f green:g / 255.0f blue:b / 255.0f alpha:1.0f];
}

- (void)changeBackgroundColor:(nonnull NSString *)color {
    [_view setBackgroundColor:[self hexStringToColor:color]];
}


- (void)handleCommand:(const NSString *)commandName args:(const NSArray *)args
{
  RCTUnicornViewHandleCommand(self, commandName, args);
}


@end
#endif
