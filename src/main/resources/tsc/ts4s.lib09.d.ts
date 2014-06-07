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

/// <reference path="ts4s.lib8.d.ts" />

interface DOML2DeprecatedBorderStyle {
    border: string;
}

interface NamedNodeMap {
    length: number;
    removeNamedItemNS(namespaceURI: string, localName: string): Attr;
    item(index: number): Attr;
    [index: number]: Attr;
    removeNamedItem(name: string): Attr;
    getNamedItem(name: string): Attr;
    setNamedItem(arg: Attr): Attr;
    getNamedItemNS(namespaceURI: string, localName: string): Attr;
    setNamedItemNS(arg: Attr): Attr;
}
declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new (): NamedNodeMap;
}

interface MediaList {
    length: number;
    mediaText: string;
    deleteMedium(oldMedium: string): void;
    appendMedium(newMedium: string): void;
    item(index: number): string;
    [index: number]: string;
    toString(): string;
}
declare var MediaList: {
    prototype: MediaList;
    new (): MediaList;
}

interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new (): SVGPathSegCurvetoQuadraticSmoothAbs;
}

interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    y: number;
    x2: number;
    x: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new (): SVGPathSegCurvetoCubicSmoothRel;
}

interface SVGLengthList {
    numberOfItems: number;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    getItem(index: number): SVGLength;
    clear(): void;
    appendItem(newItem: SVGLength): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    removeItem(index: number): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
}
declare var SVGLengthList: {
    prototype: SVGLengthList;
    new (): SVGLengthList;
}

interface ProcessingInstruction extends Node {
    target: string;
    data: string;
}
declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new (): ProcessingInstruction;
}

interface MSWindowExtensions {
    status: string;
    onmouseleave: (ev: MouseEvent) => any;
    screenLeft: number;
    offscreenBuffering: any;
    maxConnectionsPerServer: number;
    onmouseenter: (ev: MouseEvent) => any;
    clipboardData: DataTransfer;
    defaultStatus: string;
    clientInformation: Navigator;
    closed: boolean;
    onhelp: (ev: Event) => any;
    external: External;
    event: MSEventObj;
    onfocusout: (ev: FocusEvent) => any;
    screenTop: number;
    onfocusin: (ev: FocusEvent) => any;
    showModelessDialog(url?: string, argument?: any, options?: any): Window;
    navigate(url: string): void;
    resizeBy(x?: number, y?: number): void;
    item(index: any): any;
    resizeTo(x?: number, y?: number): void;
    createPopup(arguments?: any): MSPopupWindow;
    toStaticHTML(html: string): string;
    execScript(code: string, language?: string): any;
    msWriteProfilerMark(profilerMarkName: string): void;
    moveTo(x?: number, y?: number): void;
    moveBy(x?: number, y?: number): void;
    showHelp(url: string, helpArg?: any, features?: string): void;
}

interface MSBehaviorUrnsCollection {
    length: number;
    item(index: number): string;
}
declare var MSBehaviorUrnsCollection: {
    prototype: MSBehaviorUrnsCollection;
    new (): MSBehaviorUrnsCollection;
}

interface CSSFontFaceRule extends CSSRule {
    style: CSSStyleDeclaration;
}
declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new (): CSSFontFaceRule;
}

interface DOML2DeprecatedBackgroundStyle {
    background: string;
}

interface TextEvent extends UIEvent {
    inputMethod: number;
    data: string;
    locale: string;
    initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}
declare var TextEvent: {
    prototype: TextEvent;
    new (): TextEvent;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_VOICE: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
}

interface DocumentFragment extends Node, NodeSelector, MSEventAttachmentTarget, MSNodeExtensions {
}
declare var DocumentFragment: {
    prototype: DocumentFragment;
    new (): DocumentFragment;
}

interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new (): SVGPolylineElement;
}

interface SVGAnimatedPathData {
    pathSegList: SVGPathSegList;
}

interface Position {
    timestamp: number;
    coords: Coordinates;
}
declare var Position: {
    prototype: Position;
    new (): Position;
}

interface BookmarkCollection {
    length: number;
    item(index: number): any;
    [index: number]: any;
}
declare var BookmarkCollection: {
    prototype: BookmarkCollection;
    new (): BookmarkCollection;
}

interface PerformanceMark extends PerformanceEntry {
}
declare var PerformanceMark: {
    prototype: PerformanceMark;
    new (): PerformanceMark;
}

interface CSSPageRule extends CSSRule {
    pseudoClass: string;
    selectorText: string;
    selector: string;
    style: CSSStyleDeclaration;
}
declare var CSSPageRule: {
    prototype: CSSPageRule;
    new (): CSSPageRule;
}

interface HTMLBRElement extends HTMLElement {
    /**
      * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
      */
    clear: string;
}
declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new (): HTMLBRElement;
}

interface MSNavigatorExtensions {
    userLanguage: string;
    plugins: MSPluginsCollection;
    cookieEnabled: boolean;
    appCodeName: string;
    cpuClass: string;
    appMinorVersion: string;
    connectionSpeed: number;
    browserLanguage: string;
    mimeTypes: MSMimeTypesCollection;
    systemLanguage: string;
    javaEnabled(): boolean;
    taintEnabled(): boolean;
}

interface HTMLSpanElement extends HTMLElement, MSDataBindingExtensions {
}
declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new (): HTMLSpanElement;
}

interface HTMLHeadElement extends HTMLElement {
    profile: string;
}
declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new (): HTMLHeadElement;
}

interface HTMLHeadingElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
    align: string;
}
declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new (): HTMLHeadingElement;
}

interface HTMLFormElement extends HTMLElement, MSHTMLCollectionExtensions {
    /**
      * Sets or retrieves the number of objects in a collection.
      */
    length: number;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    /**
      * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
      */
    acceptCharset: string;
    /**
      * Sets or retrieves the encoding type for the form.
      */
    enctype: string;
    /**
      * Retrieves a collection, in source order, of all controls in a given form.
      */
    elements: HTMLCollection;
    /**
      * Sets or retrieves the URL to which the form content is sent for processing.
      */
    action: string;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Sets or retrieves how to send the form data to the server.
      */
    method: string;
    /**
      * Sets or retrieves the MIME encoding for the form.
      */
    encoding: string;
    /**
      * Fires when the user resets a form.
      */
    reset(): void;
    /**
      * Retrieves a form object or an object from an elements collection.
      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is a Number, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
      */
    item(name?: any, index?: any): any;
    /**
      * Fires when a FORM is about to be submitted.
      */
    submit(): void;
    /**
      * Retrieves a form object or an object from an elements collection.
      */
    namedItem(name: string): any;
    [name: string]: any;
}
declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new (): HTMLFormElement;
}

interface SVGZoomAndPan {
    zoomAndPan: number;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}
declare var SVGZoomAndPan: {
    prototype: SVGZoomAndPan;
    new (): SVGZoomAndPan;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
    SVG_ZOOMANDPAN_DISABLE: number;
}

interface HTMLMediaElement extends HTMLElement {
    /**
      * Gets the earliest possible position, in seconds, that the playback can begin.
      */
    initialTime: number;
    /**
      * Gets TimeRanges for the current media resource that has been played.
      */
    played: TimeRanges;
    /**
      * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
      */
    currentSrc: string;
    readyState: any;
    /**
      * The autobuffer element is not supported by Internet Explorer 9. Use the preload element instead.
      */
    autobuffer: boolean;
    /**
      * Gets or sets a flag to specify whether playback should restart after it completes.
      */
    loop: boolean;
    /**
      * Gets information about whether the playback has ended or not.
      */
    ended: boolean;
    /**
      * Gets a collection of buffered time ranges.
      */
    buffered: TimeRanges;
    /**
      * Returns an object representing the current error state of the audio or video element.
      */
    error: MediaError;
    /**
      * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
      */
    seekable: TimeRanges;
    /**
      * Gets or sets a value that indicates whether to start playing the media automatically.
      */
    autoplay: boolean;
    /**
      * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
      */
    controls: boolean;
    /**
      * Gets or sets the volume level for audio portions of the media element.
      */
    volume: number;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    /**
      * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
      */
    playbackRate: number;
    /**
      * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
      */
    duration: number;
    /**
      * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
      */
    muted: boolean;
    /**
      * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
      */
    defaultPlaybackRate: number;
    /**
      * Gets a flag that specifies whether playback is paused.
      */
    paused: boolean;
    /**
      * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
      */
    seeking: boolean;
    /**
      * Gets or sets the current playback position, in seconds.
      */
    currentTime: number;
    /**
      * Gets or sets the current playback position, in seconds.
      */
    preload: string;
    /**
      * Gets the current network activity for the element.
      */
    networkState: number;
    /**
      * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
      */
    pause(): void;
    /**
      * Loads and starts playback of a media resource.
      */
    play(): void;
    /**
      * Fires immediately after the client loads the object.
      */
    load(): void;
    /**
      * Returns a string that specifies whether the client can play a given media resource type.
      */
    canPlayType(type: string): string;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}
declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new (): HTMLMediaElement;
    HAVE_METADATA: number;
    HAVE_CURRENT_DATA: number;
    HAVE_NOTHING: number;
    NETWORK_NO_SOURCE: number;
    HAVE_ENOUGH_DATA: number;
    NETWORK_EMPTY: number;
    NETWORK_LOADING: number;
    NETWORK_IDLE: number;
    HAVE_FUTURE_DATA: number;
}

interface ElementCSSInlineStyle {
    runtimeStyle: MSStyleCSSProperties;
    currentStyle: MSCurrentStyleCSSProperties;
    doScroll(component?: any): void;
    componentFromPoint(x: number, y: number): string;
}

interface DOMParser {
    parseFromString(source: string, mimeType: string): Document;
}
declare var DOMParser: {
    prototype: DOMParser;
    new (): DOMParser;
}

interface MSMimeTypesCollection {
    length: number;
}
declare var MSMimeTypesCollection: {
    prototype: MSMimeTypesCollection;
    new (): MSMimeTypesCollection;
}

interface StyleSheet {
    disabled: boolean;
    ownerNode: Node;
    parentStyleSheet: StyleSheet;
    href: string;
    media: MediaList;
    type: string;
    title: string;
}
declare var StyleSheet: {
    prototype: StyleSheet;
    new (): StyleSheet;
}

interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    startOffset: SVGAnimatedLength;
    method: SVGAnimatedEnumeration;
    spacing: SVGAnimatedEnumeration;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}
declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new (): SVGTextPathElement;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_METHODTYPE_ALIGN: number;
}

interface HTMLDTElement extends HTMLElement {
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
    noWrap: boolean;
}
declare var HTMLDTElement: {
    prototype: HTMLDTElement;
    new (): HTMLDTElement;
}

interface NodeList {
    length: number;
    item(index: number): Node;
    [index: number]: Node;
}
declare var NodeList: {
    prototype: NodeList;
    new (): NodeList;
}

interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}

interface XMLSerializer {
    serializeToString(target: Node): string;
}
declare var XMLSerializer: {
    prototype: XMLSerializer;
    new (): XMLSerializer;
}

interface PerformanceMeasure extends PerformanceEntry {
}
declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new (): PerformanceMeasure;
}

interface SVGGradientElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGExternalResourcesRequired, SVGURIReference {
    spreadMethod: SVGAnimatedEnumeration;
    gradientTransform: SVGAnimatedTransformList;
    gradientUnits: SVGAnimatedEnumeration;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}
declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new (): SVGGradientElement;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    SVG_SPREADMETHOD_REPEAT: number;
}

interface NodeFilter {
    acceptNode(n: Node): number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}
declare var NodeFilter: {
    prototype: NodeFilter;
    new (): NodeFilter;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_ENTITY: number;
    SHOW_DOCUMENT: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    FILTER_REJECT: number;
    SHOW_CDATA_SECTION: number;
    FILTER_ACCEPT: number;
    SHOW_ALL: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_TEXT: number;
    SHOW_ELEMENT: number;
    SHOW_COMMENT: number;
    FILTER_SKIP: number;
    SHOW_ATTRIBUTE: number;
    SHOW_DOCUMENT_FRAGMENT: number;
}

interface SVGNumberList {
    numberOfItems: number;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    getItem(index: number): SVGNumber;
    clear(): void;
    appendItem(newItem: SVGNumber): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    removeItem(index: number): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
}
declare var SVGNumberList: {
    prototype: SVGNumberList;
    new (): SVGNumberList;
}

interface MediaError {
    code: number;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
}
declare var MediaError: {
    prototype: MediaError;
    new (): MediaError;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MEDIA_ERR_DECODE: number;
}

interface HTMLFieldSetElement extends HTMLElement {
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    form: HTMLFormElement;
}
declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new (): HTMLFieldSetElement;
}

interface HTMLBGSoundElement extends HTMLElement {
    /**
      * Sets or gets the value indicating how the volume of the background sound is divided between the left speaker and the right speaker.
      */
    balance: any;
    /**
      * Sets or gets the volume setting for the sound. 
      */
    volume: any;
    /**
      * Sets or gets the URL of a sound to play.
      */
    src: string;
    /**
      * Sets or retrieves the number of times a sound or video clip will loop when activated.
      */
    loop: number;
}
declare var HTMLBGSoundElement: {
    prototype: HTMLBGSoundElement;
    new (): HTMLBGSoundElement;
}

interface HTMLElement extends Element, ElementCSSInlineStyle, MSEventAttachmentTarget, MSNodeExtensions {
    onmouseleave: (ev: MouseEvent) => any;
    onbeforecut: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    onmove: (ev: MSEventObj) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onhelp: (ev: Event) => any;
    ondragleave: (ev: DragEvent) => any;
    className: string;
    onfocusin: (ev: FocusEvent) => any;
    onseeked: (ev: Event) => any;
    recordNumber: any;
    title: string;
    parentTextEdit: Element;
    outerHTML: string;
    ondurationchange: (ev: Event) => any;
    offsetHeight: number;
    all: HTMLCollection;
    onblur: (ev: FocusEvent) => any;
    dir: string;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    ondeactivate: (ev: UIEvent) => any;
    ondatasetchanged: (ev: MSEventObj) => any;
    onrowsdelete: (ev: MSEventObj) => any;
    sourceIndex: number;
    onloadstart: (ev: Event) => any;
    onlosecapture: (ev: MSEventObj) => any;
    ondragenter: (ev: DragEvent) => any;
    oncontrolselect: (ev: MSEventObj) => any;
    onsubmit: (ev: Event) => any;
    behaviorUrns: MSBehaviorUrnsCollection;
    scopeName: string;
    onchange: (ev: Event) => any;
    id: string;
    onlayoutcomplete: (ev: MSEventObj) => any;
    uniqueID: string;
    onbeforeactivate: (ev: UIEvent) => any;
    oncanplaythrough: (ev: Event) => any;
    onbeforeupdate: (ev: MSEventObj) => any;
    onfilterchange: (ev: MSEventObj) => any;
    offsetParent: Element;
    ondatasetcomplete: (ev: MSEventObj) => any;
    onsuspend: (ev: Event) => any;
    readyState: any;
    onmouseenter: (ev: MouseEvent) => any;
    innerText: string;
    onerrorupdate: (ev: MSEventObj) => any;
    onmouseout: (ev: MouseEvent) => any;
    parentElement: HTMLElement;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onvolumechange: (ev: Event) => any;
    oncellchange: (ev: MSEventObj) => any;
    onrowexit: (ev: MSEventObj) => any;
    onrowsinserted: (ev: MSEventObj) => any;
    onpropertychange: (ev: MSEventObj) => any;
    filters: Object;
    children: HTMLCollection;
    ondragend: (ev: DragEvent) => any;
    onbeforepaste: (ev: DragEvent) => any;
    ondragover: (ev: DragEvent) => any;
    offsetTop: number;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    onbeforecopy: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    innerHTML: string;
    onmouseover: (ev: MouseEvent) => any;
    lang: string;
    uniqueNumber: number;
    onpause: (ev: Event) => any;
    tagUrn: string;
    onmousedown: (ev: MouseEvent) => any;
    onclick: (ev: MouseEvent) => any;
    onwaiting: (ev: Event) => any;
    onresizestart: (ev: MSEventObj) => any;
    offsetLeft: number;
    isTextEdit: boolean;
    isDisabled: boolean;
    onpaste: (ev: DragEvent) => any;
    canHaveHTML: boolean;
    onmoveend: (ev: MSEventObj) => any;
    language: string;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    style: MSStyleCSSProperties;
    isContentEditable: boolean;
    onbeforeeditfocus: (ev: MSEventObj) => any;
    onratechange: (ev: Event) => any;
    contentEditable: string;
    tabIndex: number;
    document: Document;
    onprogress: (ev: any) => any;
    ondblclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: MouseEvent) => any;
    onloadedmetadata: (ev: Event) => any;
    onafterupdate: (ev: MSEventObj) => any;
    onerror: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onresizeend: (ev: MSEventObj) => any;
    onplaying: (ev: Event) => any;
    isMultiLine: boolean;
    onfocusout: (ev: FocusEvent) => any;
    onabort: (ev: UIEvent) => any;
    ondataavailable: (ev: MSEventObj) => any;
    hideFocus: boolean;
    onreadystatechange: (ev: Event) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    onloadeddata: (ev: Event) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    outerText: string;
    disabled: boolean;
    onactivate: (ev: UIEvent) => any;
    accessKey: string;
    onmovestart: (ev: MSEventObj) => any;
    onselectstart: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    oncut: (ev: DragEvent) => any;
    onselect: (ev: UIEvent) => any;
    ondrop: (ev: DragEvent) => any;
    offsetWidth: number;
    oncopy: (ev: DragEvent) => any;
    onended: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onrowenter: (ev: MSEventObj) => any;
    onload: (ev: Event) => any;
    canHaveChildren: boolean;
    oninput: (ev: Event) => any;
    dragDrop(): boolean;
    scrollIntoView(top?: boolean): void;
    addFilter(filter: Object): void;
    setCapture(containerCapture?: boolean): void;
    focus(): void;
    getAdjacentText(where: string): string;
    insertAdjacentText(where: string, text: string): void;
    getElementsByClassName(classNames: string): NodeList;
    setActive(): void;
    removeFilter(filter: Object): void;
    blur(): void;
    clearAttributes(): void;
    releaseCapture(): void;
    createControlRange(): ControlRangeCollection;
    removeBehavior(cookie: number): boolean;
    contains(child: HTMLElement): boolean;
    click(): void;
    insertAdjacentElement(position: string, insertedElement: Element): Element;
    mergeAttributes(source: HTMLElement, preserveIdentity?: boolean): void;
    replaceAdjacentText(where: string, newText: string): string;
    applyElement(apply: Element, where?: string): Element;
    addBehavior(bstrUrl: string, factory?: any): number;
    insertAdjacentHTML(where: string, html: string): void;
}
declare var HTMLElement: {
    prototype: HTMLElement;
    new (): HTMLElement;
}

interface Comment extends CharacterData {
    text: string;
}
declare var Comment: {
    prototype: Comment;
    new (): Comment;
}

interface PerformanceResourceTiming extends PerformanceEntry {
    redirectStart: number;
    redirectEnd: number;
    domainLookupEnd: number;
    responseStart: number;
    domainLookupStart: number;
    fetchStart: number;
    requestStart: number;
    connectEnd: number;
    connectStart: number;
    initiatorType: string;
    responseEnd: number;
}
declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new (): PerformanceResourceTiming;
}

interface CanvasPattern {
}
declare var CanvasPattern: {
    prototype: CanvasPattern;
    new (): CanvasPattern;
}

interface HTMLHRElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    /**
      * Sets or retrieves the width of the object.
      */
    width: number;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
      */
    noShade: boolean;
}
declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new (): HTMLHRElement;
}
