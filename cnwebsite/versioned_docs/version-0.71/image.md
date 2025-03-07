---
id: image
title: Image
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem'; import constants from '@site/core/TabsConstants';

用于显示多种不同类型图片的 React 组件，包括网络图片、静态资源、临时的本地图片、以及本地磁盘上的图片（如相册）等。

下面的例子分别演示了如何显示从本地缓存、网络甚至是以`'data:'`的 base64 uri 形式提供的图片。

> 请注意对于网络和 base64 数据的图片需要手动指定尺寸！

## 示例

<Tabs groupId="syntax" defaultValue={constants.defaultSyntax} values={constants.syntax}>
<TabItem value="functional">

```SnackPlayer name=Function%20Component%20Example

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;
```

</TabItem>
<TabItem value="classical">

```SnackPlayer name=Class%20Component%20Example

import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.logo}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}

export default DisplayAnImage;
```

</TabItem>
</Tabs>

你可以给图片添加`style`属性：

<Tabs groupId="syntax" defaultValue={constants.defaultSyntax} values={constants.syntax}>
<TabItem value="functional">

```SnackPlayer name=Function%20Component%20Example

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
    </View>
  );
}

export default DisplayAnImageWithStyle;
```

</TabItem>
<TabItem value="classical">

```SnackPlayer name=Class%20Component%20Example

import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch'
  }
});

class DisplayAnImageWithStyle extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.stretch}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
      </View>
    );
  }
}

export default DisplayAnImageWithStyle;
```

</TabItem>
</Tabs>

## 在 Android 上支持 GIF 和 WebP 格式图片

默认情况下 Android 是不支持 GIF 和 WebP 格式的。你需要在`android/app/build.gradle`文件中根据需要手动添加以下模块：

```
dependencies {
  // 如果你需要支持Android4.0(API level 14)之前的版本
  implementation 'com.facebook.fresco:animated-base-support:1.3.0'

  // 如果你需要支持GIF动图
  implementation 'com.facebook.fresco:animated-gif:2.5.0'

  // 如果你需要支持WebP格式，包括WebP动图
  implementation 'com.facebook.fresco:animated-webp:2.5.0'
  implementation 'com.facebook.fresco:webpsupport:2.5.0'

  // 如果只需要支持WebP格式而不需要动图
  implementation 'com.facebook.fresco:webpsupport:2.5.0'
}
```

---

# 文档

## Props

### `accessible`

当此属性为 true 时，表示此图片是一个启用了无障碍功能的元素。

| 类型 | 默认值 |
| ---- | ------- |
| bool | `false` |

---

### `accessibilityLabel`

设置一段文字。当用户与图片交互时，读屏器（无障碍功能）会朗读你所设置的这段文字。

| 类型   |
| ------ |
| string |

---

### `blurRadius`

blurRadius(模糊半径)：为图片添加一个指定半径的模糊滤镜。

| 类型   |
| ------ |
| number |

> 提示： 在 iOS 上 `blurRadius`最好不要低于`5`

---

### `capInsets` <div class="label ios">iOS</div>

当图片被缩放的时候，capInsets 指定的角上的尺寸会被固定而不进行缩放，而中间和边上其他的部分则会被拉伸。这在制作一些可变大小的圆角按钮、阴影、以及其它资源的时候非常有用（译注：这就是常说的九宫格或者.9 图。了解更多信息，可以参见[苹果官方文档](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImage_Class/index.html#//apple_ref/occ/instm/UIImage/resizableImageWithCapInsets)。

| Type         |
| ------------ |
| [Rect](rect) |

---

### `defaultSource`

在读取图片时默认显示的图片。

| 类型                             |
| -------------------------------- |
| [ImageSource](image#imagesource) |

> **注意：** 在 Android 的 debug 版本上本属性不会生效（但在 release 版本中会生效）。

---

### `fadeDuration` <div class="label android">Android</div>

渐入的动画持续时间。

| Type   | Default |
| ------ | ------- |
| number | `300`   |

---

### `loadingIndicatorSource`

Similarly to `source`, this property represents the resource used to render the loading indicator for the image, displayed until image is ready to be displayed, typically after when it got downloaded from network.

| Type                                                  |
| ----------------------------------------------------- |
| [ImageSource](image#imagesource) (`uri` only), number |

---

### `onError`

当加载错误的时候调用此回调函数。

| Type |
| ---- |

| function(`{ nativeEvent: { error } }`) => void

---

### `onLayout`

当元素加载或者布局改变的时候调用。

| Type                                         |
| -------------------------------------------- |
| function([LayoutEvent](layoutevent)) => void |

---

### `onLoad`

加载成功完成时调用此回调函数。

**Example:** `onLoad={({nativeEvent: {source: {width, height}}}) => setImageRealSize({width, height})}`

| Type                                                              |
| ----------------------------------------------------------------- |
| ({ nativeEvent: [ImageLoadEvent](image#imageloadevent) }) => void |

---

### `onLoadEnd`

加载结束后，不论成功还是失败，调用此回调函数。

| Type               |
| ------------------ |
| function() => void |

---

### `onLoadStart`

加载开始时调用。

示例：`onLoadStart={(e) => this.setState({loading: true})}`

| Type               |
| ------------------ |
| function() => void |

---

### `onPartialLoad` <div class="label ios">iOS</div>

如果图片本身支持逐步加载，则逐步加载的过程中会调用此方法。“逐步加载”的具体定义与具体的标准和实现有关。

| Type               |
| ------------------ |
| function() => void |

---

### `onProgress`

下载进度的回调事件。

| Type                                                   |
| ------------------------------------------------------ |
| function(`{ nativeEvent: { loaded, total } }`) => void |

---

### `progressiveRenderingEnabled` <div class="label android">Android</div>

When true, enables progressive jpeg streaming. https://frescolib.org/docs/progressive-jpegs.html

| Type | Default |
| ---- | ------- |
| bool | `false` |

---

### `resizeMethod` <div class="label android">Android</div>

当图片实际尺寸和容器样式尺寸不一致时，决定以怎样的策略来调整图片的尺寸。默认为`auto`。

- `auto`: 使用启发式算法来在`resize`和`scale`中自动决定。

- `resize`: 在图片解码之前，使用软件算法对其在内存中的数据进行修改。当图片尺寸比容器尺寸大得多时，应该优先使用此选项。

- `scale`: 对图片进行缩放。和`resize`相比，`scale`速度更快（一般有硬件加速），而且图片质量更优。在图片尺寸比容器尺寸小或者只是稍大一点时，应该优先使用此选项。

关于`resize`和`scale`的详细说明请参考<http://frescolib.org/docs/resizing.html>。

| Type                                  | Default  |
| ------------------------------------- | -------- |
| enum(`'auto'`, `'resize'`, `'scale'`) | `'auto'` |

---

### `resizeMode`

决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。默认值为`cover`。

- `cover`: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。**译注**：这样图片完全覆盖甚至超出容器，容器中不留任何空白。

- `contain`: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。**译注**：这样图片完全被包裹在容器中，容器中可能留有空白。

- `stretch`: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。

- `repeat`: 重复平铺图片直到填满容器。图片会维持原始尺寸，但是当尺寸超过容器时会在保持宽高比的前提下缩放到能被容器包裹。

- `center`: 居中不拉伸。

| Type                                                              | Default   |
| ----------------------------------------------------------------- | --------- |
| enum(`'cover'`, `'contain'`, `'stretch'`, `'repeat'`, `'center'`) | `'cover'` |

---

### `source`

图片源数据（远程 URL 地址或本地数据）。

This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best `uri` to display based on the measured size of the image container. A `cache` property can be added to control how networked request interacts with the local cache. (For more information see [Cache Control for Images](images#cache-control-ios-only)).

目前原生支持的图片格式有`png`、`jpg`、`jpeg`、`bmp`、`gif`、`webp`、`psd` (仅 iOS)。此外 iOS 还支持几种 RAW 格式。请参考 Apple 的官方文档来了解目前支持哪些相机型号的 raw 格式(对于 iOS 13 请访问 https://support.apple.com/en-us/HT210191)。

| Type                             |
| -------------------------------- |
| [ImageSource](image#imagesource) |

---

### `style`

| Type                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Image Style Props](image-style-props#props), [Layout Props](layout-props#props), [Shadow Props](shadow-props#props), [Transforms](transforms#props) |

---

### `testID`

一个唯一的资源标识符，用来在自动测试脚本中标识这个元素。

| 类型   |
| ------ |
| string |

---

## 方法

### `abortPrefetch()` <div class="label android">Android</div>

```jsx
Image.abortPrefetch(requestId);
```

中断预加载操作。

**参数：**

| 名称                                                       | 类型   | 说明                |
| ---------------------------------------------------------- | ------ | ------------------- |
| requestId <div class="label basic required">Required</div> | number | prefetch()返回的 id |

---

### `getSize()`

```jsx
Image.getSize(uri, success, [failure]);
```

在显示图片前获取图片的宽高(以像素为单位)。如果图片地址不正确或下载失败,此方法也会失败。

要获取图片的尺寸,首先需要加载或下载图片(同时会被缓存起来)。这意味着理论上你可以用这个方法来预加载图片，虽然此方法并没有针对这一用法进行优化，而且将来可能会换一些实现方案使得并不需要完整下载图片即可获取尺寸。所以更好的预加载方案是使用下面那个专门的预加载方法。

此方法不能用于静态图片资源。

**参数：**

| 名称    | 类型     | 必需 | 说明                             |
| ------- | -------- | ---- | -------------------------------- |
| uri     | string   | 是   | 图片地址                         |
| success | function | 是   | 成功的回调函数，返回图片宽高数据 |
| failure | function | 否   | 失败的回调函数                   |

---

### `getSizeWithHeaders()`

```jsx
Image.getSizeWithHeaders(uri, headers, success, [failure]);
```

Retrieve the width and height (in pixels) of an image prior to displaying it with the ability to provide the headers for the request. This method can fail if the image cannot be found, or fails to download.

In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.

**参数：**

| 名称    | 类型     | 必需 | 说明                                                                                                 |
| ------- | -------- | ---- | ---------------------------------------------------------------------------------------------------- |
| uri     | string   | 是   | 图片地址                                                                                             |
| headers | object   | 是   | 请求的 headers                                                                                       |
| success | function | 是   | The function that will be called if the image was successfully found and width and height retrieved. |
| failure | function | 否   | The function that will be called if there was an error, such as failing toto retrieve the image.     |

---

### `prefetch()`

```jsx
Image.prefetch(url);
```

预加载一个远程图片(将其下载到本地磁盘缓存)。

**参数：**

| 名称 | 类型   | 必需 | 说明           |
| ---- | ------ | ---- | -------------- |
| url  | string | 是   | 图片的远程地址 |

---

### `queryCache()`

```jsx
Image.queryCache(urls);
```

查询图片缓存状态。根据图片 URL 地址返回缓存状态，比如"disk"（缓存在磁盘文件中）或是"memory"（缓存在内存中）。

**参数：**

| 名称 | 类型  | 必需 | 说明                            |
| ---- | ----- | ---- | ------------------------------- |
| urls | array | 是   | 要查询缓存状态的图片 URL 数组。 |

---

### `resolveAssetSource()`

```jsx
Image.resolveAssetSource(source);
```

Resolves an asset reference into an object which has the properties `uri`, `width`, and `height`.

**参数：**

| 名称                                                    | 类型                                     | 说明                                                                           |
| ------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| source <div class="label basic required">Required</div> | [ImageSource](image#imagesource), number | 静态图片引用语法`require('./image.jpg')`所返回的资源 id 或是一个`ImageSource`. |

> `ImageSource`是一个对象，其结构为`{ uri: '<http location || file path>' }`

## 类型定义

### ImageCacheEnum <div class="label ios">iOS</div>

Enum which can be used to set the cache handling or stategy for the potentially cached responses.

| Type                                                               | Default     |
| ------------------------------------------------------------------ | ----------- |
| enum(`'default'`, `'reload'`, `'force-cache'`, `'only-if-cached'`) | `'default'` |

- `default`: Use the native platforms default strategy.
- `reload`: The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request.
- `force-cache`: The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source.
- `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.

### ImageLoadEvent

Object returned in the `onLoad` callback.

| Name   | Type   | Description                         |
| ------ | ------ | ----------------------------------- |
| source | object | The [source object](#source-object) |

#### Source Object

**Properties:**

| Name   | Type   | Description                                                  |
| ------ | ------ | ------------------------------------------------------------ |
| width  | number | The width of loaded image.                                   |
| height | number | The height of loaded image.                                  |
| uri    | string | A string representing the resource identifier for the image. |

### ImageSource

| Type                             |
| -------------------------------- |
| object, array of objects, number |

**Properties (if passing as object or array of objects):**

| <div className="wideColumn">Name</div> | Type                                       | Description                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| uri                                    | string                                     | A string representing the resource identifier for the image, which could be an http address, a local file path, or the name of a static image resource.                              |
| width                                  | number                                     | Can be specified if known at build time, in which case the value will be used to set the default `<Image/>` component dimension.                                                     |
| height                                 | number                                     | Can be specified if known at build time, in which case the value will be used to set the default `<Image/>` component dimension.                                                     |
| scale                                  | number                                     | Used to indicate the scale factor of the image. Defaults to `1.0` if unspecified, meaning that one image pixel equates to one display point / DIP.                                   |
| bundle<div class="label ios">iOS</div> | string                                     | The iOS asset bundle which the image is included in. This will default to `[NSBundle mainBundle]` if not set.                                                                        |
| method                                 | string                                     | The HTTP Method to use. Defaults to `'GET'` if not specified.                                                                                                                        |
| headers                                | object                                     | An object representing the HTTP headers to send along with the request for a remote image.                                                                                           |
| body                                   | string                                     | The HTTP body to send with the request. This must be a valid UTF-8 string, and will be sent exactly as specified, with no additional encoding (e.g. URL-escaping or base64) applied. |
| cache<div class="label ios">iOS</div>  | [ImageCacheEnum](image#imagecacheenum-ios) | Determines how the requests handles potentially cached responses.                                                                                                                    |

**If passing a number:**

- `number` - opaque type returned by something like `require('./image.jpg')`.
