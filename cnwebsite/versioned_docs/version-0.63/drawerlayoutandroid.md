---
id: drawerlayoutandroid
title: DrawerLayoutAndroid
---

封装了 Android 平台`DrawerLayout`的 React 组件。抽屉（通常用于导航切换）是通过`renderNavigationView`方法渲染的，并且 DrawerLayoutAndroid 的直接子视图会成为主视图（用于放置内容）。导航视图一开始在屏幕上并不可见，不过可以从`drawerPosition`指定的窗口侧面拖拽出来，并且抽屉的宽度可以使用`drawerWidth`属性来指定。

> 译注：此组件仅能在 Android 上使用。我们推荐使用跨平台的[react-navigation](https://reactnavigation.org/)中的 DrawerNavigation 来代替此组件。

## 示例

```SnackPlayer name=DrawerLayoutAndroid%20Component%20Example&supportedPlatforms=android
import React, { useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const App = () => {
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
        <Text style={{ margin: 10, fontSize: 15 }}>
          DrawerLayoutAndroid example
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={{ margin: 10, fontSize: 15 }}>
          Drawer on the {drawerPosition}! Swipe from the side to see!
        </Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  }
});

export default App;
```

---

# 文档

## Props

继承所有[View 的 Props](view#props).

### `renderNavigationView`

被拉入的导航视图的内容。

| 类型     | 必需 |
| -------- | ---- |
| function | 是   |

---

### `onDrawerClose`

导航视图被关闭后的回调函数。

| 类型     | 必需 |
| -------- | ---- |
| function | 否   |

---

### `drawerPosition`

设置导航视图从屏幕的哪一边拉入。

| 类型                                                                      | 必需 |
| ------------------------------------------------------------------------- | ---- |
| enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right) | 否   |

---

### `drawerWidth`

设置导航视图从窗口边缘拉入的视图的宽度。

| 类型   | 必需 |
| ------ | ---- |
| number | 否   |

---

### `keyboardDismissMode`

设置拖动过程中是否隐藏软键盘

- 'none' (默认)，拖动时不隐藏软键盘。
- 'on-drag'，拖动时隐藏软键盘。

| 类型                    | 必需 |
| ----------------------- | ---- |
| enum('none', 'on-drag') | 否   |

---

### `drawerLockMode`

设置导航视图的锁定模式。有 3 种状态：

- unlocked (默认)，不锁定，导航视图可以响应打开和关闭操作；
- locked-closed，导航视图保持关闭，不能用手势打开；
- locked-open，导航视图保持打开，不能用手势关闭，但仍然可以通过程序打开或关闭。 (`openDrawer`/`closeDrawer`).

| 类型                                             | 必需 |
| ------------------------------------------------ | ---- |
| enum('unlocked', 'locked-closed', 'locked-open') | 否   |

---

### `onDrawerOpen`

导航视图被打开后的回调函数。

| 类型     | 必需 |
| -------- | ---- |
| function | 否   |

---

### `onDrawerSlide`

导航视图发生交互时的回调函数。

| 类型     | 必需 |
| -------- | ---- |
| function | 否   |

---

### `onDrawerStateChanged`

导航视图的状态发生变化时的回调函数。有 3 种状态：

- idle, 导航视图没有发生任何交互；
- dragging, 导航视图正在发生交互；
- settling，导航视图正在发生交互，并且导航视图正在完成其关闭或打开的动画。

| 类型     | 必需 |
| -------- | ---- |
| function | 否   |

---

### `drawerBackgroundColor`

设置导航视图的背景颜色。默认值为白色。如果你想设置导航视图的不透明度，请使用 rgba。例如：

```
return (
  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
  </DrawerLayoutAndroid>
);
```

| 类型               | 必需 |
| ------------------ | ---- |
| [color](colors.md) | 否   |

---

### `statusBarBackgroundColor`

使抽屉占满整个屏幕，并设置状态栏颜色(支持 API21+/安卓系统 5.0 以上)
使导航视图占满整个屏幕，并设置状态栏背景，允许他在状态栏上打开。仅在 API 21 及以上版本有效。

| 类型               | 必需 |
| ------------------ | ---- |
| [color](colors.md) | 否   |

## 方法

### `openDrawer()`

```jsx
openDrawer();
```

打开导航视图。

---

### `closeDrawer()`

```jsx
closeDrawer();
```

关闭导航视图。

---

##### 本文档贡献者：[sunnylqm](https://github.com/search?q=sunnylqm&type=Users)(90.35%), [troy](https://github.com/search?q=troy&type=Users)(9.65%)
