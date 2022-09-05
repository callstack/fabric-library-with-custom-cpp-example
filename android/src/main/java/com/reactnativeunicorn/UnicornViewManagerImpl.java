package com.reactnativeunicorn;

import com.facebook.react.uimanager.ThemedReactContext;
import android.graphics.Color;

public class UnicornViewManagerImpl {

  public static final String NAME = "UnicornView";

  public static UnicornView createViewInstance(ThemedReactContext context) {
    return new UnicornView(context);
  }

  public static void setColor(UnicornView view, String color) {
    view.setBackgroundColor(Color.parseColor(color));
  }
}
