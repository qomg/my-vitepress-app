# ArkUI组件

[导读](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-components-summary.md)

## 行列与分栏

* Column

    > 沿垂直方向布局的容器组件。

* ColumnSplit

    > 垂直方向分隔布局容器组件，将子组件纵向布局，并在每个子组件之间插入一根横向的分割线。

* Row

    > 沿水平方向布局的容器组件。

* RowSplit

    > 水平方向分隔布局容器组件，将子组件横向布局，并在每个子组件之间插入一根纵向的分割线。

* SideBarContainer

    > 提供侧边栏可以显示和隐藏的侧边栏容器组件，通过子组件定义侧边栏和内容区，第一个子组件表示侧边栏，第二个子组件表示内容区。

## 堆叠Flex与栅格

* Stack

    > 堆叠容器组件，子组件按照顺序依次入栈，后一个子组件覆盖前一个子组件。

* Flex

    > 以弹性方式布局子组件的容器组件。

* GridRow

    > 栅格容器组件，仅可以和栅格子组件(GridCol)在栅格布局场景中使用。

* GridCol

    > 栅格子组件，必须作为栅格容器组件(GridRow)的子组件使用。

* RelativeContainer

    > 相对布局组件，用于复杂场景中元素对齐的布局。

## 列表与宫格

* List

    > 列表包含一系列相同宽度的列表项，适合连续、多行呈现同类数据，例如图片和文本。

* ListItem

    > 用来展示具体列表项，必须配合List来使用。

* ListItemGroup

    > 用来展示分组列表项的组件，必须配合List组件来使用。

* Grid

    > 网格容器组件，由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。

* GridItem

    > 网格容器中单项内容容器。

## 滚动与滑动

* Scroll

    > 可滚动的容器组件，当子组件的布局尺寸超过父组件的尺寸时，内容可以滚动。

* Swiper

    > 滑块视图容器组件，提供子组件滑动轮播显示的能力。

* WaterFlow

    > 瀑布流容器组件，由“行”和“列”分割的单元格所组成，通过容器自身的排列规则，将不同大小的“项目”自上而下，如瀑布般紧密布局。

## 导航

* Navigator

    > 路由容器组件，提供路由跳转能力。

<!-- * Navigation

    > 一般作为Page页面的根容器，通过属性设置来展示页面的标题栏、工具栏、导航栏等。 -->

* NavRouter

    > 导航组件，默认提供点击响应处理，不需要开发者自定义点击事件逻辑。

<!-- * NavDestination

    > 作为NavRouter组件的子组件，用于显示导航内容区。 -->

* Stepper

    > 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。

<!-- * StepperItem

    > Stepper组件的子组件。 -->

* Tabs

    > 通过页签进行内容视图切换的容器组件，每个页签对应一个内容视图。

* TabContent

    > 仅在Tabs组件中使用，对应一个切换页签的内容视图。

## 按钮与选择

* Button

    > 按钮组件，可快速创建不同样式的按钮。

* Toggle

    > 组件提供勾选框样式、状态按钮样式及开关样式。

* Checkbox

    > 提供多选框组件，通常用于某选项的打开或关闭。

<!-- * CheckboxGroup

    > 多选框群组，用于控制多选框全选或者不全选状态。

* CalendarPicker

    > 提供下拉日历弹窗，可以让用户选择日期。 -->

* DatePicker

    > 选择日期的滑动选择器组件。

* TextPicker

    > 滑动选择文本内容的组件。

* TimePicker

    > 滑动选择时间的组件。

* Radio

    > 单选框，提供相应的用户交互选择项。

* Rating

    > 提供在给定范围内选择评分的组件。

* Select

    > 提供下拉选择菜单，可以让用户在多个选项之间选择。

* Slider

    > 滑动条组件，通常用于快速调节设置值，如音量调节、亮度调节等应用场景。

* Counter

    > 计数器组件，提供相应的增加或者减少的计数操作。

## 文本与输入

* Text

    > 显示一段文本的组件。

* Span

    > 作为Text组件的子组件，用于显示行内文本片段的组件。

* Search

    > 搜索框组件，适用于浏览器的搜索内容输入框等应用场景。

* TextArea

    > 多行文本输入框组件，当输入的文本内容超过组件宽度时会自动换行显示。

* TextInput

    > 单行文本输入框组件。

* PatternLock

    > 图案密码锁组件，以九宫格图案的方式输入密码，用于密码验证场景。
    >
    > 手指在PatternLock组件区域按下时开始进入输入状态，手指离开屏幕时结束输入状态完成密码输入。

* RichText

    > 富文本组件，解析并显示HTML格式文本。

* RichEditor

    > 支持图文混排和文本交互式编辑的组件。

## 图片视频与媒体

* Image

    > 图片组件，支持本地图片和网络图片的渲染展示。

* ImageAnimator

    > 提供逐帧播放图片能力的帧动画组件，可以配置需要播放的图片列表，每张图片可以配置时长。

* Video

    > 用于播放视频文件并控制其播放状态的组件。

* PluginComponent

    > 提供外部应用组件嵌入式显示功能，即外部应用提供的UI可在本应用内显示。

* XComponent

    > 用于EGL/OpenGLES和媒体数据写入。

## 信息展示

* DataPanel

    > 数据面板组件，用于将多个数据占比情况使用占比图进行展示。

* Gauge

    > 数据量规图表组件，用于将数据展示为环形图表。

* LoadingProgress

    > 用于显示加载动效的组件。

* Marquee

    > 跑马灯组件，用于滚动展示一段单行文本，仅当文本内容宽度超过跑马灯组件宽度时滚动。

* Progress

    > 进度条组件，用于显示内容加载或操作处理等进度。

* QRCode

    > 用于显示单个二维码的组件。

* TextClock

    > 通过文本将当前系统时间显示在设备上。支持不同时区的时间显示，最高精度到秒级。

* TextTimer

    > 通过文本显示计时信息并控制其计时器状态的组件。

## 空白与分隔

* Blank

    > 空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。
    >
    > 仅当父组件为Row/Column时生效。

* Divider

    > 分隔器组件，分隔不同内容块/内容元素。

## 画布与图形绘制

* Canvas

    > 提供画布组件，用于自定义绘制图形。

* Circle

    > 用于绘制圆形的组件。

* Ellipse

    > 椭圆绘制组件。

* Line

    > 直线绘制组件。

* Polyline

    > 折线绘制组件。

* Polygon

    > 多边形绘制组件。

* Path

    > 路径绘制组件，根据绘制路径生成封闭的自定义形状。

* Rect

    > 矩形绘制组件。

* Shape

    > 作为绘制组件的父组件，实现类似SVG的效果，父组件中会描述所有绘制组件均支持的通用属性。

## 其他

* ScrollBar

    > 滚动条组件，用于配合可滚动组件使用，如List、Grid、Scroll等。

* Badge

    > 可以附加在单个组件上用于信息标记的容器组件。

* AlphabetIndexer

    > 可以与容器组件联动用于按逻辑结构快速定位容器显示区域的索引条组件。

* Panel

    > 可滑动面板，提供一种轻量的内容展示窗口，方便在不同尺寸中切换。

* Refresh

    > 可以进行页面下拉操作并显示刷新动效的容器组件。

* AbilityComponent

    > 独立显示Ability的容器组件。

* RemoteWindow

    > 远程控制窗口组件，可以通过此组件控制应用窗口，提供启动退出过程中控件动画和应用窗口联动动画的能力。

* FormComponent

    > 提供卡片组件，实现卡片的显示功能。

* FormLink

    > 提供静态卡片事件交互功能。

* Hyperlink

    > 超链接组件，组件宽高范围内点击实现跳转。

* Menu

    > 以垂直列表形式显示的菜单。

* MenuItem

    > 用来展示菜单Menu中具体的item菜单项。

* MenuItemGroup

    > 用来展示菜单MenuItem的分组。

* UIExtensionComponent

    > 在页面中嵌入显示带UI界面的Ability扩展的容器组件。

## 安全控件

* LocationButton

    > 位置控件，用户通过点击该位置控件，可以临时获取精准定位权限，而不需要权限弹框授权确认。

* PasteButton

    > 粘贴控件，用户通过点击该粘贴控件，可以临时获取读取剪贴板权限，而不会触发toast提示。

* SaveButton

    > 保存控件，用户通过点击该保存控件，可以临时获取存储权限，而不需要权限弹框授权确认。

## 高级组件

* @ohos.arkui.advanced.Chip (操作块组件)

    > 操作块，用于搜索框历史记录或者邮件发送列表等场景。

* @ohos.arkui.advanced.ComposeListItem (列表)

    > 列表包含一系列相同宽度的列表项。
    >
    > 内容包括适合连续、多行呈现同类数据的组合，例如图片和文本。

* @ohos.arkui.advanced.ComposeTitleBar (头像和单双行文本标题栏)

    > 一种普通标题栏，支持设置标题、头像（可选）和副标题（可选），可用于一级页面、二级及其以上界面配置返回键。

* @ohos.arkui.advanced.Counter (计数器组件)

    > Counter是用于精确调节数值的组件。

* @ohos.arkui.advanced.Dialog (弹出框)

    > 弹出框是一种模态窗口，通常用于在保持当前的上下文环境时，临时展示用户需关注的信息或待处理的操作，用户在模态弹出框内完成上述交互任务。
    >
    > 模态弹出框需要用户进行交互才能够退出模态模式。

    ```typescript
    import { TipsDialog, SelectDialog, ConfirmDialog, AlertDialog, LoadingDialog } from '@ohos.arkui.advanced.Dialog'
    ```

* @ohos.arkui.advanced.EditableTitleBar (编辑页面标题栏)

    > 编辑型标题栏，适用于多选界面或者内容的编辑界面，一般采取左叉右勾的形式。

* @ohos.arkui.advanced.ExceptionPrompt (异常提示)

    > 异常提示，适用于有异常需要提示异常内容的情况。

* @ohos.arkui.advanced.Filter (多条件筛选)

    > 多条件筛选，帮助用户在大量信息中找到所需内容，应结合具体场景选择合适筛选方式。
    >
    > 多条件筛选控件由筛选器与悬浮条构成，悬浮条可下拉展示悬浮筛选器。
    >
    > 筛选器样式可分为多行可折叠类型与多行列表类型，并可以在筛选器最后一行附加快捷筛选器。

* @ohos.arkui.advanced.GridObjectSortComponent (网格对象的编辑排序)

    > 网格对象的编辑排序是用于网格对象的编辑、拖动排序、新增和删除。

* @ohos.arkui.advanced.ProgressButton (下载按钮)

    > 文本下载按钮，可显示具体下载进度。

* @ohos.arkui.advanced.Popup (气泡组件)

    > Popup是用于显示特定样式气泡。

* @ohos.arkui.advanced.SegmentButton (分段按钮)

    > 分段按钮组件，包含页签类分段按钮、单选类分段按钮、多选类分段按钮。

* @ohos.arkui.advanced.SelectionMenu (文本选择菜单)

    > 文本选择菜单，适用于富文本组件通过bindSelectionMenu绑定自定义文本选择菜单，建议绑定鼠标右键或者鼠标选中方式弹出，不支持作为普通组件单独使用。

* @ohos.arkui.advanced.SelectTitleBar (下拉菜单标题栏)

    > 下拉菜单标题栏包含一个下拉菜单，可用于页面之间的切换；可用于一级页面、二级及其以上界面（配置返回键）。

* @ohos.arkui.advanced.SplitLayout (上下结构布局)

    > 上下结构布局介绍了常用的页面布局样式。主要分为上下文本和上下图文两种类型。

* @ohos.arkui.advanced.SubHeader (子标题)

    > 子标题，用于列表项顶部，将该组列表划分为一个区块，子标题名称用来概括该区块内容。也可以用于内容项顶部，子标题名称用来概括该区块内容。

* @ohos.arkui.advanced.SwipeRefresher (内容加载)

    > 内容加载指获取内容并加载出来，常用于衔接展示下拉加载的内容。

* @ohos.arkui.advanced.TabTitleBar (页签型标题栏)

    > 页签型标题栏，用于页面之间的切换。仅一级页面适用。

* @ohos.arkui.advanced.ToolBar (工具栏)

    > 工具栏用于展示针对当前界面内容的操作选项，在界面底部显示。底部最多显示5个入口，超过则收纳入“更多”子项中，在最右侧显示。

* @ohos.arkui.advanced.TreeView (树视图)

    > 树视图作为一种分层显示的列表，适合显示嵌套结构。拥有父列表项和子列表项，可展开或折叠。用于效率型应用，如备忘录、电子邮件、图库中的侧边导航栏中。

## 弹窗

* 警告弹窗 (AlertDialog)
* 列表选择弹窗 (ActionSheet)
* 自定义弹窗 (CustomDialog)
* 日历选择器弹窗 (CalendarPickerDialog)
* 日期滑动选择器弹窗 (DatePickerDialog)
* 时间滑动选择器弹窗 (TimePickerDialog)
* 文本滑动选择器弹窗 (TextPickerDialog)

## 动画

* 属性动画 (animation)

    > 组件的某些通用属性变化时，可以通过属性动画实现渐变过渡效果，提升用户体验。
    >
    > 支持的属性包括width、height、backgroundColor、opacity、scale、rotate、translate等。
    >
    > 布局类改变宽高的动画，内容都是直接到终点状态，例如文字、Canvas的内容、linearGradient等，如果要内容跟随宽高变化，可以使用renderFit属性配置。

* 显式动画 (animateTo)

    > 提供全局animateTo显式动画接口来指定由于闭包代码导致的状态变化插入过渡动效。
    >
    > 同属性动画，布局类改变宽高的动画，内容都是直接到终点状态，例如文字、Canvas的内容、linearGradient等，如果要内容跟随宽高变化，可以使用renderFit属性配置。

* 关键帧动画 (keyframeAnimateTo)

    > 在UIContext中提供keyframeAnimateTo接口来指定若干个关键帧状态，实现分段的动画。
    >
    > 同属性动画，布局类改变宽高的动画，内容都是直接到终点状态，例如文字、Canvas的内容、linearGradient等，如果要内容跟随宽高变化，可以使用renderFit属性配置。

* 转场动画

    1. 页面间转场 (pageTransition)
    2. 组件内转场 (transition)
    3. 共享元素转场 (sharedTransition)
    4. 组件内隐式共享元素转场 (geometryTransition)

* 路径动画 (motionPath)

    > 设置组件进行位移动画时的运动路径。

* 粒子动画 (Particle)

    > 粒子动画是在一定范围内随机生成的大量粒子产生运动而组成的动画。
    >
    > 动画元素是一个个粒子，这些粒子可以是圆点、图片。通过对粒子在颜色、透明度、大小、速度、加速度、自旋角度等维度变化做动画，来营造一种氛围感，比如下雪的动效，雪花飘舞就相当于一个个雪花粒子在做动画。
    >
    > 粒子动画的效果通过Particle组件展现。

* 显式动画立即下发 (animateToImmediately)(系统接口)

    > animateToImmediately接口用来提供显式动画立即下发功能。
    >
    > 同时加载多个属性动画的情况下，使用该接口可以立即执行闭包代码中状态变化导致的过渡动效。

## 参考

* [错误码](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/errorcode-animator.md)
* [自定义组件的生命周期](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md)
* [像素单位](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-pixel-units.md)
* [枚举说明](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-appendix-enums.md)
* [类型定义](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-types.md)