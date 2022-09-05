package com.reactnativeunicorn;

import androidx.annotation.Nullable;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Context;
import android.util.AttributeSet;

import android.util.Log;
import android.view.View;
import android.view.ViewGroup;

public class UnicornView extends ViewGroup {

  public UnicornView(Context context) {
    super(context);
  }

  public UnicornView(Context context, @Nullable AttributeSet attrs) {
    super(context, attrs);
  }

  public UnicornView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
    super(context, attrs, defStyleAttr);
  }

  @Override
  protected void onLayout(boolean b, int i, int i1, int i2, int i3) {

  }
}
