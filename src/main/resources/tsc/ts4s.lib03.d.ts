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

/// <reference path="ts4s.lib2.d.ts" />

interface HTMLAppletElement extends HTMLElement, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {
    width: number;
    /**
      * Sets or retrieves the Internet media type for the code associated with the object.
      */
    codeType: string;
    object: string;
    form: HTMLFormElement;
    code: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
      */
    archive: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Sets or retrieves a message to be displayed while an object is loading.
      */
    standby: string;
    /**
      * Sets or retrieves the class identifier for the object.
      */
    classid: string;
    /**
      * Sets or retrieves the shape of the object.
      */
    name: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
    useMap: string;
    /**
      * Sets or retrieves the URL that references the data of the object.
      */
    data: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: string;
    /**
      * Gets or sets the optional alternative HTML script to execute if the object fails to load.
      */
    altHtml: string;
    /**
      * Address of a pointer to the document this page or frame contains. If there is no document, then null will be returned.
      */
    contentDocument: Document;
    /**
      * Sets or retrieves the URL of the component.
      */
    codeBase: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own declare functionality for the object.
      */
    declare: boolean;
    /**
      * Returns the content type of the object.
      */
    type: string;
    /**
      * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
      */
    BaseHref: string;
}
declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new (): HTMLAppletElement;
}

interface TextMetrics {
    width: number;
}
declare var TextMetrics: {
    prototype: TextMetrics;
    new (): TextMetrics;
}

interface DocumentEvent {
    createEvent(eventInterface: string): Event;
}

interface HTMLOListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {
    /**
      * The starting number.
      */
    start: number;
}
declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new (): HTMLOListElement;
}

interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}
declare var SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    new (): SVGPathSegLinetoVerticalRel;
}

interface SVGAnimatedString {
    animVal: string;
    baseVal: string;
}
declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new (): SVGAnimatedString;
}

interface CDATASection extends Text {
}
declare var CDATASection: {
    prototype: CDATASection;
    new (): CDATASection;
}

interface StyleMedia {
    type: string;
    matchMedium(mediaquery: string): boolean;
}
declare var StyleMedia: {
    prototype: StyleMedia;
    new (): StyleMedia;
}

interface HTMLSelectElement extends HTMLElement, MSHTMLCollectionExtensions, MSDataBindingExtensions {
    options: HTMLSelectElement;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
    value: string;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
    form: HTMLFormElement;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Sets or retrieves the number of rows in the list box. 
      */
    size: number;
    /**
      * Sets or retrieves the number of objects in a collection.
      */
    length: number;
    /**
      * Sets or retrieves the index of the selected option in a select object.
      */
    selectedIndex: number;
    /**
      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
      */
    multiple: boolean;
    /**
      * Retrieves the type of select control based on the value of the MULTIPLE attribute.
      */
    type: string;
    /**
      * Removes an element from the collection.
      * @param index Number that specifies the zero-based index of the element to remove from the collection.
      */
    remove(index?: number): void;
    /**
      * Adds an element to the areas, controlRange, or options collection.
      * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
      * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection. 
      */
    add(element: HTMLElement, before?: any): void;
    /**
      * Retrieves a select object or an object from an options collection.
      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
      */
    item(name?: any, index?: any): any;
    /**
      * Retrieves a select object or an object from an options collection.
      * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
      */
    namedItem(name: string): any;
    [name: string]: any;
}
declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new (): HTMLSelectElement;
}

interface TextRange {
    boundingLeft: number;
    htmlText: string;
    offsetLeft: number;
    boundingWidth: number;
    boundingHeight: number;
    boundingTop: number;
    text: string;
    offsetTop: number;
    moveToPoint(x: number, y: number): void;
    queryCommandValue(cmdID: string): any;
    getBookmark(): string;
    move(unit: string, count?: number): number;
    queryCommandIndeterm(cmdID: string): boolean;
    scrollIntoView(fStart?: boolean): void;
    findText(string: string, count?: number, flags?: number): boolean;
    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
    getBoundingClientRect(): ClientRect;
    moveToBookmark(bookmark: string): boolean;
    isEqual(range: TextRange): boolean;
    duplicate(): TextRange;
    collapse(start?: boolean): void;
    queryCommandText(cmdID: string): string;
    select(): void;
    pasteHTML(html: string): void;
    inRange(range: TextRange): boolean;
    moveEnd(unit: string, count?: number): number;
    getClientRects(): ClientRectList;
    moveStart(unit: string, count?: number): number;
    parentElement(): Element;
    queryCommandState(cmdID: string): boolean;
    compareEndPoints(how: string, sourceRange: TextRange): number;
    execCommandShowHelp(cmdID: string): boolean;
    moveToElementText(element: Element): void;
    expand(Unit: string): boolean;
    queryCommandSupported(cmdID: string): boolean;
    setEndPoint(how: string, SourceRange: TextRange): void;
    queryCommandEnabled(cmdID: string): boolean;
}
declare var TextRange: {
    prototype: TextRange;
    new (): TextRange;
}

interface SVGTests {
    requiredFeatures: SVGStringList;
    requiredExtensions: SVGStringList;
    systemLanguage: SVGStringList;
    hasExtension(extension: string): boolean;
}

interface HTMLBlockElement extends HTMLElement, DOML2DeprecatedTextFlowControl {
    /**
      * Sets or retrieves the width of the object.
      */
    width: number;
    /**
      * Sets or retrieves reference information about the object.
      */
    cite: string;
}
declare var HTMLBlockElement: {
    prototype: HTMLBlockElement;
    new (): HTMLBlockElement;
}

interface CSSStyleSheet extends StyleSheet {
    owningElement: Element;
    imports: StyleSheetList;
    isAlternate: boolean;
    rules: MSCSSRuleList;
    isPrefAlternate: boolean;
    readOnly: boolean;
    cssText: string;
    ownerRule: CSSRule;
    href: string;
    cssRules: CSSRuleList;
    id: string;
    pages: StyleSheetPageList;
    addImport(bstrURL: string, lIndex?: number): number;
    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
    insertRule(rule: string, index?: number): number;
    removeRule(lIndex: number): void;
    deleteRule(index?: number): void;
    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
    removeImport(lIndex: number): void;
}
declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new (): CSSStyleSheet;
}

interface MSSelection {
    type: string;
    typeDetail: string;
    createRange(): TextRange;
    clear(): void;
    createRangeCollection(): TextRangeCollection;
    empty(): void;
}
declare var MSSelection: {
    prototype: MSSelection;
    new (): MSSelection;
}

interface HTMLMetaElement extends HTMLElement {
    /**
      * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
      */
    httpEquiv: string;
    /**
      * Sets or retrieves the value specified in the content attribute of the meta object.
      */
    name: string;
    /**
      * Gets or sets meta-information to associate with httpEquiv or name.
      */
    content: string;
    /**
      * Sets or retrieves the URL property that will be loaded after the specified time has elapsed. 
      */
    url: string;
    /**
      * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
      */
    scheme: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
}
declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new (): HTMLMetaElement;
}

interface SVGPatternElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired, SVGURIReference {
    patternUnits: SVGAnimatedEnumeration;
    y: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    patternContentUnits: SVGAnimatedEnumeration;
    patternTransform: SVGAnimatedTransformList;
    height: SVGAnimatedLength;
}
declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new (): SVGPatternElement;
}

interface SVGAnimatedAngle {
    animVal: SVGAngle;
    baseVal: SVGAngle;
}
declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new (): SVGAnimatedAngle;
}

interface Selection {
    isCollapsed: boolean;
    anchorNode: Node;
    focusNode: Node;
    anchorOffset: number;
    focusOffset: number;
    rangeCount: number;
    addRange(range: Range): void;
    collapseToEnd(): void;
    toString(): string;
    selectAllChildren(parentNode: Node): void;
    getRangeAt(index: number): Range;
    collapse(parentNode: Node, offset: number): void;
    removeAllRanges(): void;
    collapseToStart(): void;
    deleteFromDocument(): void;
    removeRange(range: Range): void;
}
declare var Selection: {
    prototype: Selection;
    new (): Selection;
}

interface SVGScriptElement extends SVGElement, SVGExternalResourcesRequired, SVGURIReference {
    type: string;
}
declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new (): SVGScriptElement;
}

interface HTMLDDElement extends HTMLElement {
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
    noWrap: boolean;
}
declare var HTMLDDElement: {
    prototype: HTMLDDElement;
    new (): HTMLDDElement;
}

interface MSDataBindingRecordSetReadonlyExtensions {
    recordset: Object;
    namedRecordset(dataMember: string, hierarchy?: any): Object;
}

interface CSSStyleRule extends CSSRule {
    selectorText: string;
    style: MSStyleCSSProperties;
    readOnly: boolean;
}
declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new (): CSSStyleRule;
}

interface NodeIterator {
    whatToShow: number;
    filter: NodeFilter;
    root: Node;
    expandEntityReferences: boolean;
    nextNode(): Node;
    detach(): void;
    previousNode(): Node;
}
declare var NodeIterator: {
    prototype: NodeIterator;
    new (): NodeIterator;
}

interface SVGViewElement extends SVGElement, SVGZoomAndPan, SVGFitToViewBox, SVGExternalResourcesRequired {
    viewTarget: SVGStringList;
}
declare var SVGViewElement: {
    prototype: SVGViewElement;
    new (): SVGViewElement;
}

interface HTMLLinkElement extends HTMLElement, LinkStyle {
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rel: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
    href: string;
    /**
      * Sets or retrieves the media type.
      */
    media: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
    rev: string;
    /**
      * Sets or retrieves the MIME type of the object.
      */
    type: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
    charset: string;
    /**
      * Sets or retrieves the language code of the object.
      */
    hreflang: string;
}
declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new (): HTMLLinkElement;
}

interface SVGLocatable {
    farthestViewportElement: SVGElement;
    nearestViewportElement: SVGElement;
    getBBox(): SVGRect;
    getTransformToElement(element: SVGElement): SVGMatrix;
    getCTM(): SVGMatrix;
    getScreenCTM(): SVGMatrix;
}

interface HTMLFontElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    /**
      * Sets or retrieves the current typeface family.
      */
    face: string;
}
declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new (): HTMLFontElement;
}

interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {
}
declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new (): SVGTitleElement;
}

interface ControlRangeCollection {
    length: number;
    queryCommandValue(cmdID: string): any;
    remove(index: number): void;
    add(item: Element): void;
    queryCommandIndeterm(cmdID: string): boolean;
    scrollIntoView(varargStart?: any): void;
    item(index: number): Element;
    [index: number]: Element;
    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
    addElement(item: Element): void;
    queryCommandState(cmdID: string): boolean;
    queryCommandSupported(cmdID: string): boolean;
    queryCommandEnabled(cmdID: string): boolean;
    queryCommandText(cmdID: string): string;
    select(): void;
}
declare var ControlRangeCollection: {
    prototype: ControlRangeCollection;
    new (): ControlRangeCollection;
}

interface MSNamespaceInfo extends MSEventAttachmentTarget {
    urn: string;
    onreadystatechange: (ev: Event) => any;
    name: string;
    readyState: string;
    doImport(implementationUrl: string): void;
}
declare var MSNamespaceInfo: {
    prototype: MSNamespaceInfo;
    new (): MSNamespaceInfo;
}

interface WindowSessionStorage {
    sessionStorage: Storage;
}

interface SVGAnimatedTransformList {
    animVal: SVGTransformList;
    baseVal: SVGTransformList;
}
declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new (): SVGAnimatedTransformList;
}

interface HTMLTableCaptionElement extends HTMLElement {
    /**
      * Sets or retrieves the alignment of the caption or legend.
      */
    align: string;
    /**
      * Sets or retrieves whether the caption appears at the top or bottom of the table.
      */
    vAlign: string;
}
declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new (): HTMLTableCaptionElement;
}

interface HTMLOptionElement extends HTMLElement, MSDataBindingExtensions {
    /**
      * Sets or retrieves the ordinal position of an option in a list box.
      */
    index: number;
    /**
      * Sets or retrieves the status of an option.
      */
    defaultSelected: boolean;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
    value: string;
    /**
      * Sets or retrieves the text string specified by the option tag.
      */
    text: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    form: HTMLFormElement;
    /**
      * Sets or retrieves a value that you can use to implement your own label functionality for the object.
      */
    label: string;
    /**
      * Sets or retrieves whether the option in the list box is the default item.
      */
    selected: boolean;
    create(): HTMLOptionElement;
}
declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new (): HTMLOptionElement;
}

interface HTMLMapElement extends HTMLElement {
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Retrieves a collection of the area objects defined for the given map object.
      */
    areas: HTMLAreasCollection;
}
declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new (): HTMLMapElement;
}

interface HTMLMenuElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {
    type: string;
}
declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new (): HTMLMenuElement;
}

interface MouseWheelEvent extends MouseEvent {
    wheelDelta: number;
    initMouseWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;
}
declare var MouseWheelEvent: {
    prototype: MouseWheelEvent;
    new (): MouseWheelEvent;
}

interface SVGFitToViewBox {
    viewBox: SVGAnimatedRect;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
}

interface SVGPointList {
    numberOfItems: number;
    replaceItem(newItem: SVGPoint, index: number): SVGPoint;
    getItem(index: number): SVGPoint;
    clear(): void;
    appendItem(newItem: SVGPoint): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    removeItem(index: number): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;
}
declare var SVGPointList: {
    prototype: SVGPointList;
    new (): SVGPointList;
}

interface SVGAnimatedLengthList {
    animVal: SVGLengthList;
    baseVal: SVGLengthList;
}
declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new (): SVGAnimatedLengthList;
}

interface Window extends EventTarget, MSEventAttachmentTarget, WindowLocalStorage, MSWindowExtensions, WindowSessionStorage, WindowTimers {
    ondragend: (ev: DragEvent) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    ondragover: (ev: DragEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onreset: (ev: Event) => any;
    onmouseup: (ev: MouseEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrag: (ev: DragEvent) => any;
    screenX: number;
    onmouseover: (ev: MouseEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    history: History;
    pageXOffset: number;
    name: string;
    onafterprint: (ev: Event) => any;
    onpause: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    top: Window;
    onmousedown: (ev: MouseEvent) => any;
    onseeked: (ev: Event) => any;
    opener: Window;
    onclick: (ev: MouseEvent) => any;
    innerHeight: number;
    onwaiting: (ev: Event) => any;
    ononline: (ev: Event) => any;
    ondurationchange: (ev: Event) => any;
    frames: Window;
    onblur: (ev: FocusEvent) => any;
    onemptied: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    oncanplay: (ev: Event) => any;
    outerWidth: number;
    onstalled: (ev: Event) => any;
    onmousemove: (ev: MouseEvent) => any;
    innerWidth: number;
    onoffline: (ev: Event) => any;
    length: number;
    screen: Screen;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onratechange: (ev: Event) => any;
    onstorage: (ev: StorageEvent) => any;
    onloadstart: (ev: Event) => any;
    ondragenter: (ev: DragEvent) => any;
    onsubmit: (ev: Event) => any;
    self: Window;
    document: Document;
    onprogress: (ev: any) => any;
    ondblclick: (ev: MouseEvent) => any;
    pageYOffset: number;
    oncontextmenu: (ev: MouseEvent) => any;
    onchange: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onerror: ErrorEventHandler;
    onplaying: (ev: Event) => any;
    parent: Window;
    location: Location;
    oncanplaythrough: (ev: Event) => any;
    onabort: (ev: UIEvent) => any;
    onreadystatechange: (ev: Event) => any;
    outerHeight: number;
    onkeypress: (ev: KeyboardEvent) => any;
    frameElement: Element;
    onloadeddata: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    window: Window;
    onfocus: (ev: FocusEvent) => any;
    onmessage: (ev: MessageEvent) => any;
    ontimeupdate: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    onselect: (ev: UIEvent) => any;
    navigator: Navigator;
    styleMedia: StyleMedia;
    ondrop: (ev: DragEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onended: (ev: Event) => any;
    onhashchange: (ev: Event) => any;
    onunload: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    screenY: number;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onload: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    oninput: (ev: Event) => any;
    performance: Performance;
    alert(message?: any): void;
    scroll(x?: number, y?: number): void;
    focus(): void;
    scrollTo(x?: number, y?: number): void;
    print(): void;
    prompt(message?: string, defaul?: string): string;
    toString(): string;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window;
    scrollBy(x?: number, y?: number): void;
    confirm(message?: string): boolean;
    close(): void;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
    showModalDialog(url?: string, argument?: any, options?: any): any;
    blur(): void;
    getSelection(): Selection;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
}
declare var Window: {
    prototype: Window;
    new (): Window;
}

interface SVGAnimatedPreserveAspectRatio {
    animVal: SVGPreserveAspectRatio;
    baseVal: SVGPreserveAspectRatio;
}
declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new (): SVGAnimatedPreserveAspectRatio;
}

interface MSSiteModeEvent extends Event {
    buttonID: number;
    actionURL: string;
}
declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new (): MSSiteModeEvent;
}

interface DOML2DeprecatedTextFlowControl {
    clear: string;
}

interface StyleSheetPageList {
    length: number;
    item(index: number): CSSPageRule;
    [index: number]: CSSPageRule;
}
declare var StyleSheetPageList: {
    prototype: StyleSheetPageList;
    new (): StyleSheetPageList;
}

interface MSCSSProperties extends CSSStyleDeclaration {
    scrollbarShadowColor: string;
    scrollbarHighlightColor: string;
    layoutGridChar: string;
    layoutGridType: string;
    textAutospace: string;
    textKashidaSpace: string;
    writingMode: string;
    scrollbarFaceColor: string;
    backgroundPositionY: string;
    lineBreak: string;
    imeMode: string;
    msBlockProgression: string;
    layoutGridLine: string;
    scrollbarBaseColor: string;
    layoutGrid: string;
    layoutFlow: string;
    textKashida: string;
    filter: string;
    zoom: string;
    scrollbarArrowColor: string;
    behavior: string;
    backgroundPositionX: string;
    accelerator: string;
    layoutGridMode: string;
    textJustifyTrim: string;
    scrollbar3dLightColor: string;
    msInterpolationMode: string;
    scrollbarTrackColor: string;
    scrollbarDarkShadowColor: string;
    styleFloat: string;
    getAttribute(attributeName: string, flags?: number): any;
    setAttribute(attributeName: string, AttributeValue: any, flags?: number): void;
    removeAttribute(attributeName: string, flags?: number): boolean;
}
declare var MSCSSProperties: {
    prototype: MSCSSProperties;
    new (): MSCSSProperties;
}

interface HTMLCollection extends MSHTMLCollectionExtensions {
    /**
      * Sets or retrieves the number of objects in a collection.
      */
    length: number;
    /**
      * Retrieves an object from various collections.
      */
    item(nameOrIndex?: any, optionalIndex?: any): Element;
    /**
      * Retrieves a select object or an object from an options collection.
      */
    namedItem(name: string): Element;
    [name: number]: Element;
}
declare var HTMLCollection: {
    prototype: HTMLCollection;
    new (): HTMLCollection;
}

interface SVGExternalResourcesRequired {
    externalResourcesRequired: SVGAnimatedBoolean;
}

interface HTMLImageElement extends HTMLElement, MSImageResourceExtensions, MSDataBindingExtensions, MSResourceMetadata {
    /**
      * Sets or retrieves the width of the object.
      */
    width: number;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
    vspace: number;
    /**
      * The original height of the image resource before sizing.
      */
    naturalHeight: number;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
    align: string;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
    useMap: string;
    /**
      * The original width of the image resource before sizing.
      */
    naturalWidth: number;
    /**
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Sets or retrieves the height of the object.
      */
    height: number;
    /**
      * Specifies the properties of a border drawn around an object.
      */
    border: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
    hspace: number;
    /**
      * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
      */
    longDesc: string;
    /**
      * Contains the hypertext reference (HREF) of the URL.
      */
    href: string;
    /**
      * Sets or retrieves whether the image is a server-side image map.
      */
    isMap: boolean;
    /**
      * Retrieves whether the object is fully loaded.
      */
    complete: boolean;
    create(): HTMLImageElement;
}
