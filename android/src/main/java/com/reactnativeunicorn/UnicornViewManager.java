package com.reactnativeunicorn;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.ReactStylesDiffMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.viewmanagers.UnicornViewManagerDelegate;
import com.facebook.react.viewmanagers.UnicornViewManagerInterface;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

@ReactModule(name = UnicornViewManagerImpl.NAME)
public class UnicornViewManager extends ViewGroupManager<UnicornView> implements UnicornViewManagerInterface<UnicornView> {
  private final ViewManagerDelegate<UnicornView> mDelegate;

  public UnicornViewManager(ReactApplicationContext context) {
    mDelegate = new UnicornViewManagerDelegate(this);
  }

  @Nullable
  @Override
  public Object updateState(@NonNull UnicornView view, ReactStylesDiffMap props, StateWrapper stateWrapper) {
    view.getFabricViewStateManager().setStateWrapper(stateWrapper);
    return super.updateState(view, props, stateWrapper);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<UnicornView> getDelegate() {
    return mDelegate;
  }

  @Override
  public String getName() {
    return UnicornViewManagerImpl.NAME;
  }

  @Override
  public UnicornView createViewInstance(ThemedReactContext context) {
    UnicornView view = UnicornViewManagerImpl.createViewInstance(context);
    return view;
  }

  @ReactProp(name = "color")
  public void setColor(UnicornView view, String color) {
    UnicornViewManagerImpl.setColor(view, color);
  }

  @Override
  public void changeBackgroundColor(UnicornView view, String color) {
    UnicornViewManagerImpl.setColor(view, color);
  }

  @Override
  public void receiveCommand(UnicornView root, String commandId, ReadableArray args) {
    mDelegate.receiveCommand(root, commandId, args);
  }
}
