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

/// <reference path="ts4s.lib5.d.ts" />

declare var Document: {
    prototype: Document;
    new (): Document;
}

interface MessageEvent extends Event {
    source: Window;
    origin: string;
    data: any;
    initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;
}
declare var MessageEvent: {
    prototype: MessageEvent;
    new (): MessageEvent;
}

interface SVGElement extends Element {
    onmouseover: (ev: MouseEvent) => any;
    viewportElement: SVGElement;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    onfocusout: (ev: FocusEvent) => any;
    onfocusin: (ev: FocusEvent) => any;
    xmlbase: string;
    onmousedown: (ev: MouseEvent) => any;
    onload: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    onclick: (ev: MouseEvent) => any;
    ownerSVGElement: SVGSVGElement;
    id: string;
}
declare var SVGElement: {
    prototype: SVGElement;
    new (): SVGElement;
}

interface HTMLScriptElement extends HTMLElement {
    /**
      * Sets or retrieves the status of the script.
      */
    defer: boolean;
    /**
      * Retrieves or sets the text of the object as a string. 
      */
    text: string;
    /**
      * Retrieves the URL to an external file that contains the source code or data.
      */
    src: string;
    /** 
      * Sets or retrieves the object that is bound to the event script.
      */
    htmlFor: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
    /**
      * Sets or retrieves the MIME type for the associated scripting engine.
      */
    type: string;
    /**
      * Sets or retrieves the event for which the script is written. 
      */
    event: string;
}
declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new (): HTMLScriptElement;
}

interface HTMLTableRowElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {
    /**
      * Retrieves the position of the object in the rows collection for the table.
      */
    rowIndex: number;
    /**
      * Retrieves a collection of all cells in the table row.
      */
    cells: HTMLCollection;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
    borderColorLight: any;
    /**
      * Retrieves the position of the object in the collection.
      */
    sectionRowIndex: number;
    /**
      * Sets or retrieves the border color of the object.
      */
    borderColor: any;
    /**
      * Sets or retrieves the height of the object.
      */
    height: any;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
    borderColorDark: any;
    /**
      * Removes the specified cell from the table row, as well as from the cells collection.
      * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
      */
    deleteCell(index?: number): void;
    /**
      * Creates a new cell in the table row, and adds the cell to the cells collection.
      * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
      */
    insertCell(index?: number): HTMLElement;
}
declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new (): HTMLTableRowElement;
}

interface CanvasRenderingContext2D {
    miterLimit: number;
    font: string;
    globalCompositeOperation: string;
    msFillRule: string;
    lineCap: string;
    msImageSmoothingEnabled: boolean;
    lineDashOffset: number;
    shadowColor: string;
    lineJoin: string;
    shadowOffsetX: number;
    lineWidth: number;
    canvas: HTMLCanvasElement;
    strokeStyle: any;
    globalAlpha: number;
    shadowOffsetY: number;
    fillStyle: any;
    shadowBlur: number;
    textAlign: string;
    textBaseline: string;
    restore(): void;
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    save(): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    measureText(text: string): TextMetrics;
    isPointInPath(x: number, y: number, fillRule?: string): boolean;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    rotate(angle: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    translate(x: number, y: number): void;
    scale(x: number, y: number): void;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    lineTo(x: number, y: number): void;
    getLineDash(): Array<number>;
    fill(fillRule?: string): void;
    createImageData(imageDataOrSw: any, sh?: number): ImageData;
    createPattern(image: HTMLElement, repetition: string): CanvasPattern;
    closePath(): void;
    rect(x: number, y: number, w: number, h: number): void;
    clip(fillRule?: string): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    moveTo(x: number, y: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    fillRect(x: number, y: number, w: number, h: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    stroke(): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    setLineDash(segments: Array<number>): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    beginPath(): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
}
declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new (): CanvasRenderingContext2D;
}

interface MSCSSRuleList {
    length: number;
    item(index?: number): CSSStyleRule;
    [index: number]: CSSStyleRule;
}
declare var MSCSSRuleList: {
    prototype: MSCSSRuleList;
    new (): MSCSSRuleList;
}

interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new (): SVGPathSegLinetoHorizontalAbs;
}

interface SVGPathSegArcAbs extends SVGPathSeg {
    y: number;
    sweepFlag: boolean;
    r2: number;
    x: number;
    angle: number;
    r1: number;
    largeArcFlag: boolean;
}
declare var SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    new (): SVGPathSegArcAbs;
}

interface SVGTransformList {
    numberOfItems: number;
    getItem(index: number): SVGTransform;
    consolidate(): SVGTransform;
    clear(): void;
    appendItem(newItem: SVGTransform): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    removeItem(index: number): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
}
declare var SVGTransformList: {
    prototype: SVGTransformList;
    new (): SVGTransformList;
}

interface HTMLHtmlElement extends HTMLElement {
    /**
      * Sets or retrieves the DTD version that governs the current document.
      */
    version: string;
}
declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new (): HTMLHtmlElement;
}

interface SVGPathSegClosePath extends SVGPathSeg {
}
declare var SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    new (): SVGPathSegClosePath;
}

interface HTMLFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {
    /**
      * Sets or retrieves the width of the object.
      */
    width: any;
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
      * Sets or retrieves the border color of the object.
      */
    borderColor: any;
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
      * Retrieves the object of the specified.
      */
    contentWindow: Window;
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
    height: any;
    /**
      * Retrieves the document object of the page or frame.
      */
    contentDocument: Document;
    /**
      * Specifies the properties of a border drawn around an object.
      */
    border: string;
    /**
      * Sets or retrieves a URI to a long description of the object.
      */
    longDesc: string;
    /**
      * Raised when the object has been completely received from the server.
      */
    onload: (ev: Event) => any;
    /**
      * Sets the value indicating whether the source file of a frame or iframe has specific security restrictions applied.
      */
    security: any;
}
declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new (): HTMLFrameElement;
}

interface SVGAnimatedLength {
    animVal: SVGLength;
    baseVal: SVGLength;
}
declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new (): SVGAnimatedLength;
}

interface SVGAnimatedPoints {
    points: SVGPointList;
    animatedPoints: SVGPointList;
}

interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
}
declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new (): SVGDefsElement;
}

interface HTMLQuoteElement extends HTMLElement {
    /**
      * Sets or retrieves the date and time of a modification to the object.
      */
    dateTime: string;
    /**
      * Sets or retrieves reference information about the object.
      */
    cite: string;
}
declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new (): HTMLQuoteElement;
}

interface CSSMediaRule extends CSSRule {
    media: MediaList;
    cssRules: CSSRuleList;
    insertRule(rule: string, index?: number): number;
    deleteRule(index?: number): void;
}
declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new (): CSSMediaRule;
}

interface WindowModal {
    dialogArguments: any;
    returnValue: any;
}

interface XMLHttpRequest extends EventTarget {
    responseBody: any;
    status: number;
    readyState: number;
    responseText: string;
    responseXML: Document;
    ontimeout: (ev: Event) => any;
    statusText: string;
    onreadystatechange: (ev: Event) => any;
    timeout: number;
    onload: (ev: Event) => any;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    create(): XMLHttpRequest;
    send(data?: any): void;
    abort(): void;
    getAllResponseHeaders(): string;
    setRequestHeader(header: string, value: string): void;
    getResponseHeader(header: string): string;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
}
declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new (): XMLHttpRequest;
    LOADING: number;
    DONE: number;
    UNSENT: number;
    OPENED: number;
    HEADERS_RECEIVED: number;
}

interface HTMLTableHeaderCellElement extends HTMLTableCellElement {
    /**
      * Sets or retrieves the group of cells in a table to which the object's information applies.
      */
    scope: string;
}
declare var HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    new (): HTMLTableHeaderCellElement;
}

interface HTMLDListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {
}
declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new (): HTMLDListElement;
}

interface MSDataBindingExtensions {
    dataSrc: string;
    dataFormatAs: string;
    dataFld: string;
}

interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}
declare var SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    new (): SVGPathSegLinetoHorizontalRel;
}

interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {
    ry: SVGAnimatedLength;
    cx: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
}
declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new (): SVGEllipseElement;
}

interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {
    target: SVGAnimatedString;
}
declare var SVGAElement: {
    prototype: SVGAElement;
    new (): SVGAElement;
}

interface SVGStylable {
    className: SVGAnimatedString;
    style: CSSStyleDeclaration;
}

interface SVGTransformable extends SVGLocatable {
    transform: SVGAnimatedTransformList;
}

interface HTMLFrameSetElement extends HTMLElement {
    ononline: (ev: Event) => any;
    /**
      * Sets or retrieves the border color of the object.
      */
    borderColor: any;
    /**
      * Sets or retrieves the frame heights of the object.
      */
    rows: string;
    /**
      * Sets or retrieves the frame widths of the object.
      */
    cols: string;
    /**
      * Fires when the object loses the input focus.
      */
    onblur: (ev: FocusEvent) => any;
    /**
      * Sets or retrieves the amount of additional space between the frames.
      */
    frameSpacing: any;
    /**
      * Fires when the object receives focus.
      */
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    onerror: (ev: Event) => any;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
    frameBorder: string;
    onresize: (ev: UIEvent) => any;
    name: string;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onoffline: (ev: Event) => any;
    border: string;
    onunload: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onload: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onstorage: (ev: StorageEvent) => any;
}
declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new (): HTMLFrameSetElement;
}

interface Screen {
    width: number;
    deviceXDPI: number;
    fontSmoothingEnabled: boolean;
    bufferDepth: number;
    logicalXDPI: number;
    systemXDPI: number;
    availHeight: number;
    height: number;
    logicalYDPI: number;
    systemYDPI: number;
    updateInterval: number;
    colorDepth: number;
    availWidth: number;
    deviceYDPI: number;
    pixelDepth: number;
}
declare var Screen: {
    prototype: Screen;
    new (): Screen;
}

interface Coordinates {
    altitudeAccuracy: number;
    longitude: number;
    latitude: number;
    speed: number;
    heading: number;
    altitude: number;
    accuracy: number;
}
declare var Coordinates: {
    prototype: Coordinates;
    new (): Coordinates;
}

interface NavigatorGeolocation {
    geolocation: Geolocation;
}

interface NavigatorContentUtils {
}

interface EventListener {
    (evt: Event): void;
}

interface SVGLangSpace {
    xmllang: string;
    xmlspace: string;
}

interface DataTransfer {
    effectAllowed: string;
    dropEffect: string;
    clearData(format?: string): boolean;
    setData(format: string, data: string): boolean;
    getData(format: string): string;
}
declare var DataTransfer: {
    prototype: DataTransfer;
    new (): DataTransfer;
}

interface FocusEvent extends UIEvent {
    relatedTarget: EventTarget;
    initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;
}
declare var FocusEvent: {
    prototype: FocusEvent;
    new (): FocusEvent;
}

interface Range {
    startOffset: number;
    collapsed: boolean;
    endOffset: number;
    startContainer: Node;
    endContainer: Node;
    commonAncestorContainer: Node;
    setStart(refNode: Node, offset: number): void;
    setEndBefore(refNode: Node): void;
    setStartBefore(refNode: Node): void;
    selectNode(refNode: Node): void;
    detach(): void;
    getBoundingClientRect(): ClientRect;
    toString(): string;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    insertNode(newNode: Node): void;
    collapse(toStart: boolean): void;
    selectNodeContents(refNode: Node): void;
    cloneContents(): DocumentFragment;
    setEnd(refNode: Node, offset: number): void;
    cloneRange(): Range;
    getClientRects(): ClientRectList;
    surroundContents(newParent: Node): void;
    deleteContents(): void;
    setStartAfter(refNode: Node): void;
    extractContents(): DocumentFragment;
    setEndAfter(refNode: Node): void;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}
declare var Range: {
    prototype: Range;
    new (): Range;
    END_TO_END: number;
    START_TO_START: number;
    START_TO_END: number;
    END_TO_START: number;
}

interface SVGPoint {
    y: number;
    x: number;
    matrixTransform(matrix: SVGMatrix): SVGPoint;
}
declare var SVGPoint: {
    prototype: SVGPoint;
    new (): SVGPoint;
}

interface MSPluginsCollection {
    length: number;
    refresh(reload?: boolean): void;
}
declare var MSPluginsCollection: {
    prototype: MSPluginsCollection;
    new (): MSPluginsCollection;
}

interface SVGAnimatedNumberList {
    animVal: SVGNumberList;
    baseVal: SVGNumberList;
}
declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new (): SVGAnimatedNumberList;
}

interface SVGSVGElement extends SVGElement, SVGStylable, SVGZoomAndPan, DocumentEvent, SVGLangSpace, SVGLocatable, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired {
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    contentStyleType: string;
    onzoom: (ev: any) => any;
    y: SVGAnimatedLength;
    viewport: SVGRect;
    onerror: (ev: Event) => any;
    pixelUnitToMillimeterY: number;
    onresize: (ev: UIEvent) => any;
    screenPixelToMillimeterY: number;
    height: SVGAnimatedLength;
    onabort: (ev: UIEvent) => any;
    contentScriptType: string;
    pixelUnitToMillimeterX: number;
    currentTranslate: SVGPoint;
    onunload: (ev: Event) => any;
    currentScale: number;
    onscroll: (ev: UIEvent) => any;
    screenPixelToMillimeterX: number;
    setCurrentTime(seconds: number): void;
    createSVGLength(): SVGLength;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    unpauseAnimations(): void;
    createSVGRect(): SVGRect;
    checkIntersection(element: SVGElement, rect: SVGRect): boolean;
    unsuspendRedrawAll(): void;
    pauseAnimations(): void;
    suspendRedraw(maxWaitMilliseconds: number): number;
    deselectAll(): void;
    createSVGAngle(): SVGAngle;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    createSVGTransform(): SVGTransform;
    unsuspendRedraw(suspendHandleID: number): void;
    forceRedraw(): void;
    getCurrentTime(): number;
    checkEnclosure(element: SVGElement, rect: SVGRect): boolean;
    createSVGMatrix(): SVGMatrix;
    createSVGPoint(): SVGPoint;
    createSVGNumber(): SVGNumber;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    getElementById(elementId: string): Element;
}
declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new (): SVGSVGElement;
}

interface HTMLLabelElement extends HTMLElement, MSDataBindingExtensions {
    /**
      * Sets or retrieves the object to which the given label object is assigned.
      */
    htmlFor: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    form: HTMLFormElement;
}
declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new (): HTMLLabelElement;
}

interface MSResourceMetadata {
    protocol: string;
    fileSize: string;
    fileUpdatedDate: string;
    nameProp: string;
    fileCreatedDate: string;
    fileModifiedDate: string;
    mimeType: string;
}

interface HTMLLegendElement extends HTMLElement, MSDataBindingExtensions {
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    align: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    form: HTMLFormElement;
}
declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new (): HTMLLegendElement;
}

interface HTMLDirectoryElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
}
declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new (): HTMLDirectoryElement;
}

interface SVGAnimatedInteger {
    animVal: number;
    baseVal: number;
}
declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new (): SVGAnimatedInteger;
}

interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {
}
declare var SVGTextElement: {
    prototype: SVGTextElement;
    new (): SVGTextElement;
}

interface SVGTSpanElement extends SVGTextPositioningElement {
}
declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new (): SVGTSpanElement;
}

interface HTMLLIElement extends HTMLElement, DOML2DeprecatedListNumberingAndBulletStyle {
    /**
      * Sets or retrieves the value of a list item.
      */
    value: number;
}
declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new (): HTMLLIElement;
}
