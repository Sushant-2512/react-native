class MyCustomView extends View {

    public void onReceiveNativeEvent() {
       WritableMap event = Arguments.createMap();
       event.putString("message", "MyMessage");
       ReactContext reactContext = (ReactContext)getContext();
       reactContext
           .getJSModule(RCTEventEmitter.class)
           .receiveEvent(getId(), "topChange", event);}
    }

public class ReactImageManager extends SimpleViewManager<MyCustomView> {

    public static final String REACT_CLASS = "RCTImageView";
    ReactApplicationContext mCallerContext;

    public ReactImageManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public ReactImageView createViewInstance(ThemedReactContext context) {
        return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);
    }

    @ReactProp(name = "src")
    public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {
        view.setSource(sources);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(ReactImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {
        view.setScaleType(ImageResizeMode.toScaleType(resizeMode));
    }

    @Override
    public List<ViewManager> createViewManagers(
            ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new ReactImageManager(reactContext));
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(
                "topChange",
                MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onChange")))
                .build();

    }

}

    