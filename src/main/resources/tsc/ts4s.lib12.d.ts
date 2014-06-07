/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference path="ts4s.lib11.d.ts" />

interface FileReader extends MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
}
declare var FileReader: {
    prototype: FileReader;
    new (): FileReader;
}

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

interface Blob {
    type: string;
    size: number;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
    msClose(): void;
}
declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
}

interface ApplicationCache extends EventTarget {
    status: number;
    ondownloading: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    onupdateready: (ev: Event) => any;
    oncached: (ev: Event) => any;
    onobsolete: (ev: Event) => any;
    onerror: (ev: ErrorEvent) => any;
    onchecking: (ev: Event) => any;
    onnoupdate: (ev: Event) => any;
    swapCache(): void;
    abort(): void;
    update(): void;
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}
declare var ApplicationCache: {
    CHECKING: number;
    UNCACHED: number;
    UPDATEREADY: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
}

interface FrameRequestCallback {
    (time: number): void;
}

interface XMLHttpRequest {
    response: any;
    withCredentials: boolean;
    onprogress: (ev: ProgressEvent) => any;
    onabort: (ev: any) => any;
    responseType: string;
    onloadend: (ev: ProgressEvent) => any;
    upload: XMLHttpRequestEventTarget;
    onerror: (ev: ErrorEvent) => any;
    onloadstart: (ev: any) => any;
}

interface PopStateEvent extends Event {
    state: any;
    initPopStateEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, stateArg: any): void;
}

interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    style: CSSStyleDeclaration;
}

interface MSFileSaver {
    msSaveBlob(blob: any, defaultName?: string): boolean;
    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
}

interface MSStream {
    type: string;
    msDetachStream(): any;
    msClose(): void;
}

interface MediaError {
    msExtendedCode: number;
}

interface HTMLFieldSetElement {
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    validationMessage: string;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    validity: ValidityState;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    willValidate: boolean;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
}

interface MSBlobBuilder {
    append(data: any, endings?: string): void;
    getBlob(contentType?: string): Blob;
}
declare var MSBlobBuilder: {
    prototype: MSBlobBuilder;
    new (): MSBlobBuilder;
}

interface HTMLElement {
    onmscontentzoom: (ev: any) => any;
    oncuechange: (ev: Event) => any;
    spellcheck: boolean;
    classList: DOMTokenList;
    onmsmanipulationstatechanged: (ev: any) => any;
    draggable: boolean;
}

interface DataTransfer {
    types: DOMStringList;
    files: FileList;
}

interface DOMSettableTokenList extends DOMTokenList {
    value: string;
}

interface IDBFactory {
    open(name: string, version?: number): IDBOpenDBRequest;
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
}

interface Range {
    createContextualFragment(fragment: string): DocumentFragment;
}

interface HTMLObjectElement {
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
    validationMessage: string;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
    validity: ValidityState;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
    willValidate: boolean;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
    checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
    setCustomValidity(error: string): void;
}

interface MSPointerEvent extends MouseEvent {
    width: number;
    rotation: number;
    pressure: number;
    pointerType: any;
    isPrimary: boolean;
    tiltY: number;
    height: number;
    intermediatePoints: any;
    currentPoint: any;
    tiltX: number;
    hwTimestamp: number;
    pointerId: number;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}
declare var MSPointerEvent: {
    MSPOINTER_TYPE_PEN: number;
    MSPOINTER_TYPE_MOUSE: number;
    MSPOINTER_TYPE_TOUCH: number;
}

interface DOMException {
    name: string;
    INVALID_NODE_TYPE_ERR: number;
    DATA_CLONE_ERR: number;
    TIMEOUT_ERR: number;
}
//declare var DOMException: {
//    INVALID_NODE_TYPE_ERR: number;
//    DATA_CLONE_ERR: number;
//    TIMEOUT_ERR: number;
//}

interface MSManipulationEvent extends UIEvent {
    lastState: number;
    currentState: number;
    initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
}
declare var MSManipulationEvent: {
    MS_MANIPULATION_STATE_STOPPED: number;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_INERTIA: number;
}

interface FormData {
    append(name: any, value: any, blobName?: string): void;
}
declare var FormData: {
    prototype: FormData;
    new (form?: HTMLFormElement): FormData;
}

interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollection;
}

interface SVGFEImageElement extends SVGElement, SVGLangSpace, SVGFilterPrimitiveStandardAttributes, SVGURIReference, SVGExternalResourcesRequired {
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

interface AbstractWorker extends EventTarget {
    onerror: (ev: ErrorEvent) => any;
}

interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    operator: SVGAnimatedEnumeration;
    in2: SVGAnimatedString;
    k2: SVGAnimatedNumber;
    k1: SVGAnimatedNumber;
    k3: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    k4: SVGAnimatedNumber;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}
declare var SVGFECompositeElement: {
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
}

interface ValidityState {
    customError: boolean;
    valueMissing: boolean;
    stepMismatch: boolean;
    rangeUnderflow: boolean;
    rangeOverflow: boolean;
    typeMismatch: boolean;
    patternMismatch: boolean;
    tooLong: boolean;
    valid: boolean;
}

interface HTMLTrackElement extends HTMLElement {
    kind: string;
    src: string;
    srclang: string;
    track: TextTrack;
    label: string;
    default: boolean;
}

interface MSApp {
    createFileFromStorageFile(storageFile: any): File;
    createBlobFromRandomAccessStream(type: string, seeker: any): Blob;
    createStreamFromInputStream(type: string, inputStream: any): MSStream;
    terminateApp(exceptionObject: any): void;
    createDataPackage(object: any): any;
    execUnsafeLocalFunction(unsafeFunction: MSUnsafeFunctionCallback): any;
    getHtmlPrintDocumentSource(htmlDoc: any): any;
    addPublicLocalApplicationUri(uri: string): void;
    createDataPackageFromSelection(): any;
}
declare var MSApp: MSApp;

interface HTMLVideoElement {
    msIsStereo3D: boolean;
    msStereo3DPackingMode: string;
    onMSVideoOptimalLayoutChanged: (ev: any) => any;
    onMSVideoFrameStepCompleted: (ev: any) => any;
    msStereo3DRenderMode: string;
    msIsLayoutOptimalForPlayback: boolean;
    msHorizontalMirror: boolean;
    onMSVideoFormatChanged: (ev: any) => any;
    msZoom: boolean;
    msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
    msFrameStep(forward: boolean): void;
}

interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
}

interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    diffuseConstant: SVGAnimatedNumber;
}

interface MSCSSMatrix {
    m24: number;
    m34: number;
    a: number;
    d: number;
    m32: number;
    m41: number;
    m11: number;
    f: number;
    e: number;
    m23: number;
    m14: number;
    m33: number;
    m22: number;
    m21: number;
    c: number;
    m12: number;
    b: number;
    m42: number;
    m31: number;
    m43: number;
    m13: number;
    m44: number;
    multiply(secondMatrix: MSCSSMatrix): MSCSSMatrix;
    skewY(angle: number): MSCSSMatrix;
    setMatrixValue(value: string): void;
    inverse(): MSCSSMatrix;
    rotateAxisAngle(x: number, y: number, z: number, angle: number): MSCSSMatrix;
    toString(): string;
    rotate(angleX: number, angleY?: number, angleZ?: number): MSCSSMatrix;
    translate(x: number, y: number, z?: number): MSCSSMatrix;
    scale(scaleX: number, scaleY?: number, scaleZ?: number): MSCSSMatrix;
    skewX(angle: number): MSCSSMatrix;
}
declare var MSCSSMatrix: {
    prototype: MSCSSMatrix;
    new (text?: string): MSCSSMatrix;
}

interface Worker extends AbstractWorker {
    onmessage: (ev: any) => any;
    postMessage(message: any, ports?: any): void;
    terminate(): void;
}
declare var Worker: {
    prototype: Worker;
    new (stringUrl: string): Worker;
}

interface HTMLIFrameElement {
    sandbox: DOMSettableTokenList;
}

declare var onmspointerdown: (ev: any) => any;
declare var animationStartTime: number;
declare var onmsgesturedoubletap: (ev: any) => any;
declare var onmspointerhover: (ev: any) => any;
declare var onmsgesturehold: (ev: any) => any;
declare var onmspointermove: (ev: any) => any;
declare var onmsgesturechange: (ev: any) => any;
declare var onmsgesturestart: (ev: any) => any;
declare var onmspointercancel: (ev: any) => any;
declare var onmsgestureend: (ev: any) => any;
declare var onmsgesturetap: (ev: any) => any;
declare var onmspointerout: (ev: any) => any;
declare var msAnimationStartTime: number;
declare var applicationCache: ApplicationCache;
declare var onmsinertiastart: (ev: any) => any;
declare var onmspointerover: (ev: any) => any;
declare var onpopstate: (ev: PopStateEvent) => any;
declare var onmspointerup: (ev: any) => any;
declare function msCancelRequestAnimationFrame(handle: number): void;
declare function matchMedia(mediaQuery: string): MediaQueryList;
declare function cancelAnimationFrame(handle: number): void;
declare function msIsStaticHTML(html: string): boolean;
declare function msMatchMedia(mediaQuery: string): MediaQueryList;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function msRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function btoa(rawString: string): string;
declare function atob(encodedString: string): string;
declare var msIndexedDB: IDBFactory;
declare var indexedDB: IDBFactory;
declare var console: Console;


/////////////////////////////
/// IE11 DOM APIs 
/////////////////////////////


interface StoreExceptionsInformation extends ExceptionInformation {
    siteName?: string;
    explanationString?: string;
    detailURI?: string;
}

interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
    arrayOfDomainStrings?: Array<string>;
}

interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
    arrayOfDomainStrings?: Array<string>;
}

interface AlgorithmParameters {
}

interface MutationObserverInit {
    childList?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    subtree?: boolean;
    attributeOldValue?: boolean;
    characterDataOldValue?: boolean;
    attributeFilter?: Array<string>;
}

interface ExceptionInformation {
    domain?: string;
}

interface MsZoomToOptions {
    contentX?: number;
    contentY?: number;
    viewportX?: string;
    viewportY?: string;
    scaleFactor?: number;
    animate?: string;
}

interface DeviceAccelerationDict {
    x?: number;
    y?: number;
    z?: number;
}

interface DeviceRotationRateDict {
    alpha?: number;
    beta?: number;
    gamma?: number;
}

interface Algorithm {
    name?: string;
    params?: AlgorithmParameters;
}

interface NavigatorID {
    product: string;
    vendor: string;
}

interface HTMLBodyElement {
    onpageshow: (ev: PageTransitionEvent) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
}

interface MSExecAtPriorityFunctionCallback {
    (...args: any[]): any;
}

interface MSWindowExtensions {
    captureEvents(): void;
    releaseEvents(): void;
}

interface MSGraphicsTrust {
    status: string;
    constrictionActive: boolean;
}

interface AudioTrack {
    sourceBuffer: SourceBuffer;
}

interface DragEvent {
    msConvertURL(file: File, targetType: string, targetURL?: string): void;
}

interface SubtleCrypto {
    unwrapKey(wrappedKey: ArrayBufferView, keyAlgorithm: any, keyEncryptionKey: Key, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    encrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    importKey(format: string, keyData: ArrayBufferView, algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    wrapKey(key: Key, keyEncryptionKey: Key, keyWrappingAlgorithm: any): KeyOperation;
    verify(algorithm: any, key: Key, signature: ArrayBufferView, buffer?: ArrayBufferView): CryptoOperation;
    deriveKey(algorithm: any, baseKey: Key, derivedKeyType: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    digest(algorithm: any, buffer?: ArrayBufferView): CryptoOperation;
    exportKey(format: string, key: Key): KeyOperation;
    generateKey(algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
    sign(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
    decrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
}

interface Crypto extends RandomSource {
    subtle: SubtleCrypto;
}

interface VideoPlaybackQuality {
    totalFrameDelay: number;
    creationTime: number;
    totalVideoFrames: number;
    droppedVideoFrames: number;
}

interface GlobalEventHandlers {
    onpointerenter: (ev: PointerEvent) => any;
    onpointerout: (ev: PointerEvent) => any;
    onpointerdown: (ev: PointerEvent) => any;
    onpointerup: (ev: PointerEvent) => any;
    onpointercancel: (ev: PointerEvent) => any;
    onpointerover: (ev: PointerEvent) => any;
    onpointermove: (ev: PointerEvent) => any;
    onpointerleave: (ev: PointerEvent) => any;
}

interface Window extends GlobalEventHandlers {
    onpageshow: (ev: PageTransitionEvent) => any;
    ondevicemotion: (ev: DeviceMotionEvent) => any;
    devicePixelRatio: number;
    msCrypto: Crypto;
    ondeviceorientation: (ev: DeviceOrientationEvent) => any;
    doNotTrack: string;
    onmspointerenter: (ev: any) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    onmspointerleave: (ev: any) => any;
}

interface Key {
    algorithm: Algorithm;
    type: string;
    extractable: boolean;
    keyUsage: string[];
}

interface TextTrackList extends EventTarget {
    onaddtrack: (ev: any) => any;
}

interface DeviceAcceleration {
    y: number;
    x: number;
    z: number;
}

interface Console {
    count(countTitle?: string): void;
    groupEnd(): void;
    time(timerName?: string): void;
    timeEnd(timerName?: string): void;
    trace(): void;
    group(groupTitle?: string): void;
    dirxml(value: any): void;
    debug(message?: string, ...optionalParams: any[]): void;
    groupCollapsed(groupTitle?: string): void;
    select(element: Element): void;
}

interface MSNavigatorDoNotTrack {
    removeSiteSpecificTrackingException(args: ExceptionInformation): void;
    removeWebWideTrackingException(args: ExceptionInformation): void;
    storeWebWideTrackingException(args: StoreExceptionsInformation): void;
    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
    confirmWebWideTrackingException(args: ExceptionInformation): boolean;
}

interface HTMLImageElement {
    crossOrigin: string;
    msPlayToPreferredSourceUri: string;
}

interface HTMLAllCollection extends HTMLCollection {
    namedItem(name: string): Element;
    //[name: string]: Element;
}

interface MSNavigatorExtensions {
    language: string;
}

interface AesGcmEncryptResult {
    ciphertext: ArrayBuffer;
    tag: ArrayBuffer;
}

interface HTMLSourceElement {
    msKeySystem: string;
}

interface CSSStyleDeclaration {
    alignItems: string;
    borderImageSource: string;
    flexBasis: string;
    borderImageWidth: string;
    borderImageRepeat: string;
    order: string;
    flex: string;
    alignContent: string;
    msImeAlign: string;
    flexShrink: string;
    flexGrow: string;
    borderImageSlice: string;
    flexWrap: string;
    borderImageOutset: string;
    flexDirection: string;
    touchAction: string;
    flexFlow: string;
    borderImage: string;
    justifyContent: string;
    alignSelf: string;
    msTextCombineHorizontal: string;
}

interface NavigationCompletedEvent extends NavigationEvent {
    webErrorStatus: number;
    isSuccess: boolean;
}

interface MutationRecord {
    oldValue: string;
    previousSibling: Node;
    addedNodes: NodeList;
    attributeName: string;
    removedNodes: NodeList;
    target: Node;
    nextSibling: Node;
    attributeNamespace: string;
    type: string;
}

interface Navigator {
    pointerEnabled: boolean;
    maxTouchPoints: number;
}

interface Document extends MSDocumentExtensions, GlobalEventHandlers {
    msFullscreenEnabled: boolean;
    onmsfullscreenerror: (ev: any) => any;
    onmspointerenter: (ev: any) => any;
    msFullscreenElement: Element;
    onmsfullscreenchange: (ev: any) => any;
    onmspointerleave: (ev: any) => any;
    msExitFullscreen(): void;
}

interface MimeTypeArray {
    length: number;
    item(index: number): Plugin;
    [index: number]: Plugin;
    namedItem(type: string): Plugin;
    //[type: string]: Plugin;
}

interface HTMLMediaElement {
    /**
      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
      */
    msPlayToPreferredSourceUri: string;
    onmsneedkey: (ev: MSMediaKeyNeededEvent) => any;
    /**
      * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
      */
    msKeys: MSMediaKeys;
    msGraphicsTrustStatus: MSGraphicsTrust;
    msSetMediaKeys(mediaKeys: MSMediaKeys): void;
    addTextTrack(kind: string, label?: string, language?: string): TextTrack;
}

interface TextTrack {
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
}

interface KeyOperation extends EventTarget {
    oncomplete: (ev: any) => any;
    onerror: (ev: any) => any;
    result: any;
}

interface DOMStringMap {
}

interface DeviceOrientationEvent extends Event {
    gamma: number;
    alpha: number;
    absolute: boolean;
    beta: number;
    initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number, beta: number, gamma: number, absolute: boolean): void;
}

interface MSMediaKeys {
    keySystem: string;
    createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array): MSMediaKeySession;
    isTypeSupported(keySystem: string, type?: string): boolean;
}
declare var MSMediaKeys: {
    prototype: MSMediaKeys;
    new (): MSMediaKeys;
}

interface MSMediaKeyMessageEvent extends Event {
    destinationURL: string;
    message: Uint8Array;
}

interface MSHTMLWebViewElement extends HTMLElement {
    documentTitle: string;
    width: number;
    src: string;
    canGoForward: boolean;
    height: number;
    canGoBack: boolean;
    navigateWithHttpRequestMessage(requestMessage: any): void;
    goBack(): void;
    navigate(uri: string): void;
    stop(): void;
    navigateToString(contents: string): void;
    captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;
    capturePreviewToBlobAsync(): MSWebViewAsyncOperation;
    refresh(): void;
    goForward(): void;
    navigateToLocalStreamUri(source: string, streamResolver: any): void;
    invokeScriptAsync(scriptName: string, ...args: any[]): MSWebViewAsyncOperation;
    buildLocalStreamUri(contentIdentifier: string, relativePath: string): string;
}

interface NavigationEvent extends Event {
    uri: string;
}

interface Element extends GlobalEventHandlers {
    onlostpointercapture: (ev: PointerEvent) => any;
    onmspointerenter: (ev: any) => any;
    ongotpointercapture: (ev: PointerEvent) => any;
    onmspointerleave: (ev: any) => any;
    msZoomTo(args: MsZoomToOptions): void;
    setPointerCapture(pointerId: number): void;
    msGetUntransformedBounds(): ClientRect;
    releasePointerCapture(pointerId: number): void;
    msRequestFullscreen(): void;
}

interface RandomSource {
    getRandomValues(array: ArrayBufferView): ArrayBufferView;
}

interface XMLHttpRequest {
    msCaching: string;
    msCachingEnabled(): boolean;
    overrideMimeType(mime: string): void;
}

interface SourceBuffer extends EventTarget {
    updating: boolean;
    appendWindowStart: number;
    appendWindowEnd: number;
    buffered: TimeRanges;
    timestampOffset: number;
    audioTracks: AudioTrackList;
    appendBuffer(data: ArrayBuffer): void;
    remove(start: number, end: number): void;
    abort(): void;
    appendStream(stream: MSStream, maxSize?: number): void;
}

interface MSInputMethodContext extends EventTarget {
    oncandidatewindowshow: (ev: any) => any;
    target: HTMLElement;
    compositionStartOffset: number;
    oncandidatewindowhide: (ev: any) => any;
    oncandidatewindowupdate: (ev: any) => any;
    compositionEndOffset: number;
    getCompositionAlternatives(): string[];
    getCandidateWindowClientRect(): ClientRect;
    hasComposition(): boolean;
    isCandidateWindowVisible(): boolean;
}

interface DeviceRotationRate {
    gamma: number;
    alpha: number;
    beta: number;
}

interface PluginArray {
    length: number;
    refresh(reload?: boolean): void;
    item(index: number): Plugin;
    [index: number]: Plugin;
    namedItem(name: string): Plugin;
    //[name: string]: Plugin;
}

interface MSMediaKeyError {
    systemCode: number;
    code: number;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
    MS_MEDIA_KEYERR_CLIENT: number;
}
declare var MSMediaKeyError: {
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
    MS_MEDIA_KEYERR_CLIENT: number;
}

interface Plugin {
    length: number;
    filename: string;
    version: string;
    name: string;
    description: string;
    item(index: number): MimeType;
    [index: number]: MimeType;
    namedItem(type: string): MimeType;
    //[type: string]: MimeType;
}

interface HTMLFrameSetElement {
    onpageshow: (ev: PageTransitionEvent) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
}

interface Screen extends EventTarget {
    msOrientation: string;
    onmsorientationchange: (ev: any) => any;
    msLockOrientation(orientation: string): boolean;
    msLockOrientation(orientations: string[]): boolean;
    msUnlockOrientation(): void;
}

interface MediaSource extends EventTarget {
    sourceBuffers: SourceBufferList;
    duration: number;
    readyState: string;
    activeSourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    endOfStream(error?: string): void;
    isTypeSupported(type: string): boolean;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
}
declare var MediaSource: {
    prototype: MediaSource;
    new (): MediaSource;
}

interface MediaError {
    MS_MEDIA_ERR_ENCRYPTED: number;
}
//declare var MediaError: {
//    MS_MEDIA_ERR_ENCRYPTED: number;
//}

interface SourceBufferList extends EventTarget {
    length: number;
    item(index: number): SourceBuffer;
    [index: number]: SourceBuffer;
}

interface XMLDocument extends Document {
}

interface DeviceMotionEvent extends Event {
    rotationRate: DeviceRotationRate;
    acceleration: DeviceAcceleration;
    interval: number;
    accelerationIncludingGravity: DeviceAcceleration;
    initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict, accelerationIncludingGravity: DeviceAccelerationDict, rotationRate: DeviceRotationRateDict, interval: number): void;
}

interface MimeType {
    enabledPlugin: Plugin;
    suffixes: string;
    type: string;
    description: string;
}

interface PointerEvent extends MouseEvent {
    width: number;
    rotation: number;
    pressure: number;
    pointerType: any;
    isPrimary: boolean;
    tiltY: number;
    height: number;
    intermediatePoints: any;
    currentPoint: any;
    tiltX: number;
    hwTimestamp: number;
    pointerId: number;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
}

interface MSDocumentExtensions {
    captureEvents(): void;
    releaseEvents(): void;
}

interface HTMLElement {
    dataset: DOMStringMap;
    hidden: boolean;
    msGetInputContext(): MSInputMethodContext;
}

interface MutationObserver {
    observe(target: Node, options: MutationObserverInit): void;
    takeRecords(): MutationRecord[];
    disconnect(): void;
}
declare var MutationObserver: {
    prototype: MutationObserver;
    new (callback: (arr: MutationRecord[], observer: MutationObserver)=>any): MutationObserver; 
}

interface AudioTrackList {
    onremovetrack: (ev: PluginArray) => any;
}

interface HTMLObjectElement {
    /**
      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
      */
    msPlayToPreferredSourceUri: string;
    /**
      * Gets or sets the primary DLNA PlayTo device.
      */
    msPlayToPrimary: boolean;
    /**
      * Gets or sets whether the DLNA PlayTo device is available.
      */
    msPlayToDisabled: boolean;
    readyState: number;
    /**
      * Gets the source associated with the media element for use by the PlayToManager.
      */
    msPlayToSource: any;
}

interface HTMLEmbedElement {
    /**
      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
      */
    msPlayToPreferredSourceUri: string;
    /**
      * Gets or sets the primary DLNA PlayTo device.
      */
    msPlayToPrimary: boolean;
    /**
      * Gets or sets whether the DLNA PlayTo device is available.
      */
    msPlayToDisabled: boolean;
    readyState: string;
    /**
      * Gets the source associated with the media element for use by the PlayToManager.
      */
    msPlayToSource: any;
}
