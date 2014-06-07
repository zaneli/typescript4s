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

/// <reference path="ts4s.lib6.d.ts" />

interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    new (): SVGPathSegLinetoVerticalAbs;
}

interface MSStorageExtensions {
    remainingSpace: number;
}

interface SVGStyleElement extends SVGElement, SVGLangSpace {
    media: string;
    type: string;
    title: string;
}
declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new (): SVGStyleElement;
}

interface MSCurrentStyleCSSProperties extends MSCSSProperties {
    blockDirection: string;
    clipBottom: string;
    clipLeft: string;
    clipRight: string;
    clipTop: string;
    hasLayout: string;
}
declare var MSCurrentStyleCSSProperties: {
    prototype: MSCurrentStyleCSSProperties;
    new (): MSCurrentStyleCSSProperties;
}

interface MSHTMLCollectionExtensions {
    urns(urn: any): Object;
    tags(tagName: any): Object;
}

interface Storage extends MSStorageExtensions {
    length: number;
    getItem(key: string): any;
    [key: string]: any;
    setItem(key: string, data: string): void;
    clear(): void;
    removeItem(key: string): void;
    key(index: number): string;
    [index: number]: any;
}
declare var Storage: {
    prototype: Storage;
    new (): Storage;
}

interface HTMLIFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    /**
      * Sets or retrieves whether the frame can be scrolled.
      */
    scrolling: string;
    /**
      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
      */
    marginHeight: string;
    /**
      * Sets or retrieves the left and right margin widths before displaying the text in a frame.
      */
    marginWidth: string;
    /**
      * Sets or retrieves the amount of additional space between the frames.
      */
    frameSpacing: any;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
    frameBorder: string;
    /**
      * Sets or retrieves whether the user can resize the frame.
      */
    noResize: boolean;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
    vspace: number;
    /**
      * Retrieves the object of the specified.
      */
    contentWindow: Window;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
    src: string;
    /**
      * Sets or retrieves the frame name.
      */
    name: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    /**
      * Specifies the properties of a border drawn around an object.
      */
    border: string;
    /**
      * Retrieves the document object of the page or frame.
      */
    contentDocument: Document;
    /**
      * Sets or retrieves the horizontal margin for the object.
      */
    hspace: number;
    /**
      * Sets or retrieves a URI to a long description of the object.
      */
    longDesc: string;
    /**
      * Sets the value indicating whether the source file of a frame or iframe has specific security restrictions applied.
      */
    security: any;
    /**
      * Raised when the object has been completely received from the server.
      */
    onload: (ev: Event) => any;
}
declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new (): HTMLIFrameElement;
}

interface TextRangeCollection {
    length: number;
    item(index: number): TextRange;
    [index: number]: TextRange;
}
declare var TextRangeCollection: {
    prototype: TextRangeCollection;
    new (): TextRangeCollection;
}

interface HTMLBodyElement extends HTMLElement, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {
    scroll: string;
    ononline: (ev: Event) => any;
    onblur: (ev: FocusEvent) => any;
    noWrap: boolean;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    text: any;
    onerror: (ev: Event) => any;
    bgProperties: string;
    onresize: (ev: UIEvent) => any;
    link: any;
    aLink: any;
    bottomMargin: any;
    topMargin: any;
    onafterprint: (ev: Event) => any;
    vLink: any;
    onbeforeprint: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onload: (ev: Event) => any;
    rightMargin: any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    leftMargin: any;
    onstorage: (ev: StorageEvent) => any;
    createTextRange(): TextRange;
}
declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new (): HTMLBodyElement;
}

interface DocumentType extends Node {
    name: string;
    notations: NamedNodeMap;
    systemId: string;
    internalSubset: string;
    entities: NamedNodeMap;
    publicId: string;
}
declare var DocumentType: {
    prototype: DocumentType;
    new (): DocumentType;
}

interface SVGRadialGradientElement extends SVGGradientElement {
    cx: SVGAnimatedLength;
    r: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    fx: SVGAnimatedLength;
    fy: SVGAnimatedLength;
}
declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new (): SVGRadialGradientElement;
}

interface MutationEvent extends Event {
    newValue: string;
    attrChange: number;
    attrName: string;
    prevValue: string;
    relatedNode: Node;
    initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}
declare var MutationEvent: {
    prototype: MutationEvent;
    new (): MutationEvent;
    MODIFICATION: number;
    REMOVAL: number;
    ADDITION: number;
}

interface DragEvent extends MouseEvent {
    dataTransfer: DataTransfer;
    initDragEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;
}
declare var DragEvent: {
    prototype: DragEvent;
    new (): DragEvent;
}

interface HTMLTableSectionElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {
    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
    align: string;
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
    rows: HTMLCollection;
    /**
      * Removes the specified row (tr) from the element and from the rows collection.
      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
      */
    deleteRow(index?: number): void;
    /**
      * Moves a table row to a new position.
      * @param indexFrom Number that specifies the index in the rows collection of the table row that is moved.
      * @param indexTo Number that specifies where the row is moved within the rows collection.
      */
    moveRow(indexFrom?: number, indexTo?: number): Object;
    /**
      * Creates a new row (tr) in the table, and adds the row to the rows collection.
      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
      */
    insertRow(index?: number): HTMLElement;
}
declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new (): HTMLTableSectionElement;
}

interface DOML2DeprecatedListNumberingAndBulletStyle {
    type: string;
}

interface HTMLInputElement extends HTMLElement, MSDataBindingExtensions {
    /**
      * Sets or retrieves the width of the object.
      */
    width: string;
    status: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
    form: HTMLFormElement;
    /**
      * Gets or sets the starting position or offset of a text selection.
      */
    selectionStart: number;
    indeterminate: boolean;
    readOnly: boolean;
    size: number;
    loop: number;
    /**
      * Gets or sets the end position or offset of a text selection.
      */
    selectionEnd: number;
    /**
      * Sets or retrieves the URL of the virtual reality modeling language (VRML) world to be displayed in the window.
      */
    vrml: string;
    /**
      * Sets or retrieves a lower resolution image to display.
      */
    lowsrc: string;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
    vspace: number;
    /**
      * Sets or retrieves a comma-separated list of content types.
      */
    accept: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Sets or retrieves the state of the check box or radio button.
      */
    defaultChecked: boolean;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Returns the value of the data at the cursor's current position.
      */
    value: string;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
    useMap: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
    border: string;
    dynsrc: string;
    /**
      * Sets or retrieves the state of the check box or radio button.
      */
    checked: boolean;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
    hspace: number;
    /**
      * Sets or retrieves the maximum number of characters that the user can enter in a text control.
      */
    maxLength: number;
    /**
      * Returns the content type of the object.
      */
    type: string;
    /**
      * Sets or retrieves the initial contents of the object.
      */
    defaultValue: string;
    /**
      * Retrieves whether the object is fully loaded.
      */
    complete: boolean;
    start: string;
    /**
      * Creates a TextRange object for the element.
      */
    createTextRange(): TextRange;
    /**
      * Sets the start and end positions of a selection in a text field.
      * @param start The offset into the text field for the start of the selection.
      * @param end The offset into the text field for the end of the selection.
      */
    setSelectionRange(start: number, end: number): void;
    /**
      * Makes the selection equal to the current object.
      */
    select(): void;
}
declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new (): HTMLInputElement;
}

interface HTMLAnchorElement extends HTMLElement, MSDataBindingExtensions {
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rel: string;
    /**
      * Contains the protocol of the URL.
      */
    protocol: string;
    /**
      * Sets or retrieves the substring of the href property that follows the question mark.
      */
    search: string;
    /**
      * Sets or retrieves the coordinates of the object.
      */
    coords: string;
    /**
      * Contains the hostname of a URL.
      */
    hostname: string;
    /**
      * Contains the pathname of the URL.
      */
    pathname: string;
    Methods: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    protocolLong: string;
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
    href: string;
    /**
      * Sets or retrieves the shape of the object.
      */
    name: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
    /**
      * Sets or retrieves the language code of the object.
      */
    hreflang: string;
    /**
      * Sets or retrieves the port number associated with a URL.
      */
    port: string;
    /**
      * Contains the hostname and port values of the URL.
      */
    host: string;
    /**
      * Contains the anchor portion of the URL including the hash sign (#).
      */
    hash: string;
    nameProp: string;
    urn: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rev: string;
    /**
      * Sets or retrieves the shape of the object.
      */
    shape: string;
    type: string;
    mimeType: string;
    /** 
      * Returns a string representation of an object.
      */
    toString(): string;
}
declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new (): HTMLAnchorElement;
}

interface HTMLParamElement extends HTMLElement {
    /**
      * Sets or retrieves the value of an input parameter for an element.
      */
    value: string;
    /**
      * Sets or retrieves the name of an input parameter for an element.
      */
    name: string;
    /**
      * Sets or retrieves the content type of the resource designated by the value attribute.
      */
    type: string;
    /**
      * Sets or retrieves the data type of the value attribute.
      */
    valueType: string;
}
declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new (): HTMLParamElement;
}

interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    x: SVGAnimatedLength;
    height: SVGAnimatedLength;
}
declare var SVGImageElement: {
    prototype: SVGImageElement;
    new (): SVGImageElement;
}

interface SVGAnimatedNumber {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new (): SVGAnimatedNumber;
}

interface PerformanceTiming {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
    msFirstPaint: number;
    unloadEventEnd: number;
    fetchStart: number;
    requestStart: number;
    domInteractive: number;
    navigationStart: number;
    connectEnd: number;
    loadEventEnd: number;
    connectStart: number;
    responseEnd: number;
    domLoading: number;
    redirectEnd: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    toJSON(): any;
}
declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new (): PerformanceTiming;
}

interface HTMLPreElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    /**
      * Sets or gets a value that you can use to implement your own width functionality for the object.
      */
    width: number;
    /**
      * Indicates a citation by rendering text in italic type.
      */
    cite: string;
}
declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new (): HTMLPreElement;
}

interface EventException {
    code: number;
    message: string;
    toString(): string;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}
declare var EventException: {
    prototype: EventException;
    new (): EventException;
    DISPATCH_REQUEST_ERR: number;
    UNSPECIFIED_EVENT_TYPE_ERR: number;
}

interface MSNavigatorDoNotTrack {
    msDoNotTrack: string;
}

interface NavigatorOnLine {
    onLine: boolean;
}

interface WindowLocalStorage {
    localStorage: Storage;
}

interface SVGMetadataElement extends SVGElement {
}
declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new (): SVGMetadataElement;
}

interface SVGPathSegArcRel extends SVGPathSeg {
    y: number;
    sweepFlag: boolean;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: boolean;
}
declare var SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    new (): SVGPathSegArcRel;
}

interface SVGPathSegMovetoAbs extends SVGPathSeg {
    y: number;
    x: number;
}
declare var SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    new (): SVGPathSegMovetoAbs;
}

interface SVGStringList {
    numberOfItems: number;
    replaceItem(newItem: string, index: number): string;
    getItem(index: number): string;
    clear(): void;
    appendItem(newItem: string): string;
    initialize(newItem: string): string;
    removeItem(index: number): string;
    insertItemBefore(newItem: string, index: number): string;
}
declare var SVGStringList: {
    prototype: SVGStringList;
    new (): SVGStringList;
}

interface XDomainRequest {
    timeout: number;
    onerror: (ev: Event) => any;
    onload: (ev: Event) => any;
    onprogress: (ev: any) => any;
    ontimeout: (ev: Event) => any;
    responseText: string;
    contentType: string;
    open(method: string, url: string): void;
    create(): XDomainRequest;
    abort(): void;
    send(data?: any): void;
}
declare var XDomainRequest: {
    prototype: XDomainRequest;
    new (): XDomainRequest;
}

interface DOML2DeprecatedBackgroundColorStyle {
    bgColor: any;
}

interface ElementTraversal {
    childElementCount: number;
    previousElementSibling: Element;
    lastElementChild: Element;
    nextElementSibling: Element;
    firstElementChild: Element;
}

interface SVGLength {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}
declare var SVGLength: {
    prototype: SVGLength;
    new (): SVGLength;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
    SVG_LENGTHTYPE_EXS: number;
}

interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new (): SVGPolygonElement;
}

interface HTMLPhraseElement extends HTMLElement {
    /**
      * Sets or retrieves the date and time of a modification to the object.
      */
    dateTime: string;
    /**
      * Sets or retrieves reference information about the object.
      */
    cite: string;
}
declare var HTMLPhraseElement: {
    prototype: HTMLPhraseElement;
    new (): HTMLPhraseElement;
}

interface NavigatorStorageUtils {
}

interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    y: number;
    y1: number;
    x2: number;
    x: number;
    x1: number;
    y2: number;
}
declare var SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    new (): SVGPathSegCurvetoCubicRel;
}

interface MSEventObj extends Event {
    nextPage: string;
    keyCode: number;
    toElement: Element;
    returnValue: any;
    dataFld: string;
    y: number;
    dataTransfer: DataTransfer;
    propertyName: string;
    url: string;
    offsetX: number;
    recordset: Object;
    screenX: number;
    buttonID: number;
    wheelDelta: number;
    reason: number;
    origin: string;
    data: string;
    srcFilter: Object;
    boundElements: HTMLCollection;
    cancelBubble: boolean;
    altLeft: boolean;
    behaviorCookie: number;
    bookmarks: BookmarkCollection;
    type: string;
    repeat: boolean;
    srcElement: Element;
    source: Window;
    fromElement: Element;
    offsetY: number;
    x: number;
    behaviorPart: number;
    qualifier: string;
    altKey: boolean;
    ctrlKey: boolean;
    clientY: number;
    shiftKey: boolean;
    shiftLeft: boolean;
    contentOverflow: boolean;
    screenY: number;
    ctrlLeft: boolean;
    button: number;
    srcUrn: string;
    clientX: number;
    actionURL: string;
    getAttribute(strAttributeName: string, lFlags?: number): any;
    setAttribute(strAttributeName: string, AttributeValue: any, lFlags?: number): void;
    removeAttribute(strAttributeName: string, lFlags?: number): boolean;
}
declare var MSEventObj: {
    prototype: MSEventObj;
    new (): MSEventObj;
}
