import RemoveGlobalCLI from './\_remove-global-cli.md';

## 安装依赖

必须安装的依赖有：Node、JDK 和 Android Studio。

虽然你可以使用`任何编辑器`来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。

### Node

参照 Node 官方的[Linux 安装指南](https://nodejs.org/en/download/package-manager/)来安装 Node 14 以上的版本。

安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。

> 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，react native 不能正常识别！

```
# 使用nrm工具切换淘宝源
npx nrm use taobao

# 如果之后需要切换回官方源可使用
npx nrm use npm
```

### Yarn

[Yarn](http://yarnpkg.com)是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。

```
npm install -g yarn
```

安装完 yarn 之后就可以用 yarn 代替 npm 了，例如用`yarn`代替`npm install`命令，用`yarn add 某第三方库名`代替`npm install 某第三方库名`。

### Watchman

参照[Watchman 的安装说明](https://facebook.github.io/watchman/docs/install.html#buildinstall)来从源码来编译和安装 Watchman。

> [Watchman](https://facebook.github.io/watchman/docs/install.html)是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（metro 可以快速捕捉文件的变化从而实现实时刷新）。

### Java Development Kit

React Native 需要 Java Development Kit [JDK] 11。你可以在命令行中输入
`javac -version`（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。如果版本不合要求，则可以去[Temurin](https://adoptium.net/?variant=openjdk11&jvmVariant=hotspot)或[Oracle JDK](https://www.oracle.com/java/technologies/downloads/#java11)上下载(后者下载需注册登录)。

> 低于 0.67 版本的 React Native 需要 JDK 1.8 版本（官方也称 8 版本）。

### Android 开发环境

如果你之前没有接触过 Android 的开发环境，那么请做好心理准备，这一过程相当繁琐。请`万分仔细`地阅读下面的说明，严格对照文档进行配置操作。

> 译注：请注意！！！国内用户`必须必须必须`有稳定的代理软件，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些代理软件可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那么 99% 就是无法正常连接网络

#### 1. 安装 Android Studio

[首先下载和安装 Android Studio](https://developer.android.google.cn/studio/)，国内用户可能无法打开官方链接，可自行使用搜索引擎搜索可用的下载链接。安装界面中选择"Custom"选项，确保选中了以下几项：

- `Android SDK`
- `Android SDK Platform`
- `Android Virtual Device`

然后点击"Next"来安装选中的组件。

> 如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件。

安装完成后，看到欢迎界面时，就可以进行下面的操作了。

#### 2. 安装 Android SDK

Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是`Android 13 (Tiramisu)`版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android 5 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。

你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击"Configure"，然后就能看到"SDK Manager"。

> SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是**Appearance & Behavior** → **System Settings** → **Android SDK**。

在 SDK Manager 中选择"SDK Platforms"选项卡，然后在右下角勾选"Show Package Details"。展开`Android 13 (Tiramisu)`选项，确保勾选了下面这些组件（重申你必须使用稳定的代理软件，否则可能都看不到这个界面）：

- `Android SDK Platform 33`
- `Intel x86 Atom_64 System Image`（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）

然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的`33.0.0`版本。你可以同时安装多个其他版本。

最后点击"Apply"来下载和安装这些组件。

#### 3. 配置 ANDROID_HOME 环境变量

React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。

具体的做法是把下面的命令加入到 shell 的配置文件中。如果你的 shell 是 zsh，则配置文件为`~/.zshrc`，如果是 bash 则为`~/.bash_profile`（可以使用`echo $0`命令查看你所使用的 shell。）：

```shell
# 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

使用`source $HOME/.zshrc`命令来使环境变量设置立即生效（否则重启后才生效）。可以使用`echo $ANDROID_HOME`检查此变量是否已正确设置

> 请确保你正确指定了 Android SDK 路径。你可以在 Android Studio 的"Preferences"菜单中查看 SDK 的真实路径，具体是**Appearance & Behavior** → **System Settings** → **Android SDK**

## 创建新项目

<RemoveGlobalCLI />

使用 React Native 内建的命令行工具来创建一个名为"AwesomeProject"的新项目。这个命令行工具不需要安装，可以直接用 node 自带的`npx`命令来使用：

```shell
npx react-native init AwesomeProject
```

如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考[集成到现有原生应用](integration-with-existing-apps.md)。

### [可选参数] 指定版本或项目模板

你可以使用`--version`参数（注意是`两`个杠）创建指定版本的项目。例如：

```shell
npx react-native init AwesomeProject --version X.XX.X
```

还可以使用`--template`来使用一些社区提供的模板，例如带有`TypeScript`配置的：

```shell
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

## 准备 Android 设备

你需要准备一台 Android 设备来运行 React Native Android 应用。这里所指的设备既可以是真机，也可以是模拟器。后面我们所有的文档除非特别说明，并不区分真机或者模拟器。Android 官方提供了名为 Android Virtual Device（简称 AVD）的模拟器。此外还有很多第三方提供的模拟器如[Genymotion](https://www.genymotion.com/download)、BlueStack 等。一般来说官方模拟器免费、功能完整，但性能较差。第三方模拟器性能较好，但可能需要付费，或带有广告。

### 使用 Android 真机

你也可以使用 Android 真机来代替模拟器进行开发，只需用 usb 数据线连接到电脑，然后遵照[在设备上运行](running-on-device.md)这篇文档的说明操作即可。

### 使用 Android 模拟器

你可以使用 Android Studio 打开项目下的"android"目录，然后可以使用"AVD Manager"来查看可用的虚拟设备，它的图标看起来像下面这样：

![Android Studio AVD Manager](assets/GettingStartedAndroidStudioAVD.png)

如果你刚刚才安装 Android Studio，那么可能需要先[创建一个虚拟设备](https://developer.android.com/studio/run/managing-avds.html)。点击"Create Virtual Device..."，然后选择所需的设备类型并点击"Next"，然后选择**S** API Level 31 image.

> 译注：请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。

> 建议先开启[虚拟加速技术](https://developer.android.com/studio/run/emulator-acceleration.html#vm-linux)以提高模拟器性能。

然后点击"Next"和"Finish"来完成虚拟设备的创建。现在你应该可以点击虚拟设备旁的绿色三角按钮来启动它了。然后我们可以尝试运行应用了。

## 编译并运行 React Native 应用

确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行`yarn android`或者`yarn react-native run-android`：

```
cd AwesomeProject
yarn android
# 或者
yarn react-native run-android
```

此命令会对项目的原生部分进行编译，同时在另外一个命令行中启动`Metro`服务对 js 代码进行实时打包处理（类似 webpack）。`Metro`服务也可以使用`yarn start`命令单独启动。

如果配置没有问题，你应该可以看到应用自动安装到设备上并开始运行。注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟。此过程`严重依赖稳定的代理软件`，否则将频繁遭遇链接超时和断开，导致无法运行。

也可以尝试阿里云提供的[maven 镜像](https://help.aliyun.com/document_detail/102512.html?spm=a2c40.aliyun_maven_repo.0.0.361865e90r2x4b)，将`android/build.gradle`中的`jcenter()`和`google()`分别替换为`maven { url 'https://maven.aliyun.com/repository/jcenter' }`和`maven { url 'https://maven.aliyun.com/repository/google' }`（注意有多处需要替换）。

`npx react-native run-android`只是运行应用的方式之一。你也可以在 Android Studio 中直接运行应用。

> 译注：建议在`run-android`成功后再尝试使用 Android Studio 启动。请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。

> 如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头`仔细对照文档检查`，然后可以看看[问题讨论区](https://github.com/reactnativecn/react-native-website/issues)。不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新。但请注意**_千万不要_**执行 bundle 命令，那样会导致代码完全无法刷新。

### 修改项目

现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

- 使用你喜欢的文本编辑器打开`App.js`并随便改上几行
- 按两下 R 键，或是在开发者菜单中选择 _Reload_，就可以看到你的最新修改。

### 完成了！

恭喜！你已经成功运行并修改了你的第一个 React Native 应用

<center><img src="https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/GettingStartedCongratulations.png" width="150"></img></center>

## 接下来？

如果你想把 React Native 集成到现有的原生项目中，则请参考[集成到现有原生应用](integration-with-existing-apps.md)。

如果你想从头开始学习 React Native 开发，可以从[简介](getting-started.md)文档开始。
