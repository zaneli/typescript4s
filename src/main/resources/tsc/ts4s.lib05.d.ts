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

/// <reference path="ts4s.lib4.d.ts" />

interface Document extends Node, NodeSelector, MSEventAttachmentTarget, DocumentEvent, MSResourceMetadata, MSNodeExtensions {
    /**
      * Retrieves the collection of user agents and versions declared in the X-UA-Compatible
      */
    compatible: MSCompatibleInfoCollection;
    /**
      * Fires when the user presses a key.
      * @param ev The keyboard event
      */
    onkeydown: (ev: KeyboardEvent) => any;
    /**
      * Fires when the user releases a key.
      * @param ev The keyboard event
      */
    onkeyup: (ev: KeyboardEvent) => any;

    /**
      * Gets the implementation object of the current document. 
      */
    implementation: DOMImplementation;
    /**
      * Fires when the user resets a form. 
      * @param ev The event.
      */
    onreset: (ev: Event) => any;

    /**
      * Retrieves a collection of all script objects in the document.
      */
    scripts: HTMLCollection;

    /**
      * Fires when the user presses the F1 key while the browser is the active window. 
      * @param ev The event.
      */
    onhelp: (ev: Event) => any;

    /** 
      * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
      * @param ev The drag event.
      */
    ondragleave: (ev: DragEvent) => any;

    /**
      * Gets or sets the character set used to encode the object.
      */
    charset: string;

    /**
      * Fires for an element just prior to setting focus on that element.
      * @param ev The focus event
      */
    onfocusin: (ev: FocusEvent) => any;


    /** 
      * Sets or gets the color of the links that the user has visited.
      */
    vlinkColor: string;

    /**
      * Occurs when the seek operation ends. 
      * @param ev The event.
      */
    onseeked: (ev: Event) => any;

    security: string;

    /**
      * Contains the title of the document.
      */
    title: string;

    /**
      * Retrieves a collection of namespace objects.
      */
    namespaces: MSNamespaceInfoCollection;

    /**
      * Gets the default character set from the current regional language settings.
      */
    defaultCharset: string;

    /**
      * Retrieves a collection of all embed objects in the document.
      */
    embeds: HTMLCollection;

    /**
      * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
      */
    styleSheets: StyleSheetList;

    /**
      * Retrieves a collection of all window objects defined by the given document or defined by the document associated with the given window.
      */
    frames: Window;

    /**
      * Occurs when the duration attribute is updated. 
      * @param ev The event.
      */
    ondurationchange: (ev: Event) => any;


    /**
      * Returns a reference to the collection of elements contained by the object.
      */
    all: HTMLCollection;

    /**
      * Retrieves a collection, in source order, of all form objects in the document.
      */
    forms: HTMLCollection;

    /** 
      * Fires when the object loses the input focus. 
      * @param ev The focus event.
      */
    onblur: (ev: FocusEvent) => any;


    /**
      * Sets or retrieves a value that indicates the reading order of the object. 
      */
    dir: string;

    /**
      * Occurs when the media element is reset to its initial state. 
      * @param ev The event.
      */
    onemptied: (ev: Event) => any;


    /**
      * Sets or gets a value that indicates whether the document can be edited.
      */
    designMode: string;

    /**
      * Occurs when the current playback position is moved. 
      * @param ev The event.
      */
    onseeking: (ev: Event) => any;


    /**
      * Fires when the activeElement is changed from the current object to another object in the parent document.
      * @param ev The UI Event
      */
    ondeactivate: (ev: UIEvent) => any;


    /**
      * Occurs when playback is possible, but would require further buffering. 
      * @param ev The event.
      */
    oncanplay: (ev: Event) => any;


    /**
      * Fires when the data set exposed by a data source object changes. 
      * @param ev The event.
      */
    ondatasetchanged: (ev: MSEventObj) => any;


    /**
      * Fires when rows are about to be deleted from the recordset.
      * @param ev The event 
      */
    onrowsdelete: (ev: MSEventObj) => any;

    Script: MSScriptHost;

    /**
      * Occurs when Internet Explorer begins looking for media data. 
      * @param ev The event.
      */
    onloadstart: (ev: Event) => any;


    /**
      * Gets the URL for the document, stripped of any character encoding.
      */
    URLUnencoded: string;

    defaultView: Window;

    /**
      * Fires when the user is about to make a control selection of the object.
      * @param ev The event.
      */
    oncontrolselect: (ev: MSEventObj) => any;


    /** 
      * Fires on the target element when the user drags the object to a valid drop target.
      * @param ev The drag event.
      */
    ondragenter: (ev: DragEvent) => any;

    onsubmit: (ev: Event) => any;

    /**
      * Returns the character encoding used to create the webpage that is loaded into the document object.
      */
    inputEncoding: string;

    /**
      * Gets the object that has the focus when the parent document has focus.
      */
    activeElement: Element;

    /**
      * Fires when the contents of the object or selection have changed. 
      * @param ev The event.
      */
    onchange: (ev: Event) => any;


    /**
      * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
      */
    links: HTMLCollection;

    /**
      * Retrieves an autogenerated, unique identifier for the object. 
      */
    uniqueID: string;

    /**
      * Sets or gets the URL for the current document. 
      */
    URL: string;

    /**
      * Fires immediately before the object is set as the active element.
      * @param ev The event.
      */
    onbeforeactivate: (ev: UIEvent) => any;

    head: HTMLHeadElement;
    cookie: string;
    xmlEncoding: string;
    oncanplaythrough: (ev: Event) => any;

    /** 
      * Retrieves the document compatibility mode of the document.
      */
    documentMode: number;

    characterSet: string;

    /**
      * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
      */
    anchors: HTMLCollection;

    onbeforeupdate: (ev: MSEventObj) => any;

    /** 
      * Fires to indicate that all data is available from the data source object. 
      * @param ev The event.
      */
    ondatasetcomplete: (ev: MSEventObj) => any;

    plugins: HTMLCollection;

    /**
      * Occurs if the load operation has been intentionally halted. 
      * @param ev The event.
      */
    onsuspend: (ev: Event) => any;


    /**
      * Gets the root svg element in the document hierarchy.
      */
    rootElement: SVGSVGElement;

    /**
      * Retrieves a value that indicates the current state of the object.
      */
    readyState: string;

    /**
      * Gets the URL of the location that referred the user to the current page.
      */
    referrer: string;

    /**
      * Sets or gets the color of all active links in the document.
      */
    alinkColor: string;

    /**
      * Fires on a databound object when an error occurs while updating the associated data in the data source object. 
      * @param ev The event.
      */
    onerrorupdate: (ev: MSEventObj) => any;


    /**
      * Gets a reference to the container object of the window.
      */
    parentWindow: Window;

    /**
      * Fires when the user moves the mouse pointer outside the boundaries of the object. 
      * @param ev The mouse event.
      */
    onmouseout: (ev: MouseEvent) => any;


    /**
      * Occurs when a user clicks a button in a Thumbnail Toolbar of a webpage running in Site Mode.
      * @param ev The event.
      */
    onmsthumbnailclick: (ev: MSSiteModeEvent) => any;


    /**
      * Fires when the wheel button is rotated. 
      * @param ev The mouse event
      */
    onmousewheel: (ev: MouseWheelEvent) => any;


    /**
      * Occurs when the volume is changed, or playback is muted or unmuted.
      * @param ev The event.
      */
    onvolumechange: (ev: Event) => any;


    /** 
      * Fires when data changes in the data provider.
      * @param ev The event.
      */
    oncellchange: (ev: MSEventObj) => any;


    /**
      * Fires just before the data source control changes the current row in the object. 
      * @param ev The event.
      */
    onrowexit: (ev: MSEventObj) => any;


    /**
      * Fires just after new rows are inserted in the current recordset.
      * @param ev The event.
      */
    onrowsinserted: (ev: MSEventObj) => any;


    /**
      * Gets or sets the version attribute specified in the declaration of an XML document.
      */
    xmlVersion: string;

    msCapsLockWarningOff: boolean;

    /**
      * Fires when a property changes on the object.
      * @param ev The event.
      */
    onpropertychange: (ev: MSEventObj) => any;


    /**
      * Fires on the source object when the user releases the mouse at the close of a drag operation.
      * @param ev The event.
      */
    ondragend: (ev: DragEvent) => any;


    /**
      * Gets an object representing the document type declaration associated with the current document. 
      */
    doctype: DocumentType;

    /**
      * Fires on the target element continuously while the user drags the object over a valid drop target.
      * @param ev The event.
      */
    ondragover: (ev: DragEvent) => any;


    /**
      * Deprecated. Sets or retrieves a value that indicates the background color behind the object. 
      */
    bgColor: string;

    /**
      * Fires on the source object when the user starts to drag a text selection or selected object. 
      * @param ev The event.
      */
    ondragstart: (ev: DragEvent) => any;


    /**
      * Fires when the user releases a mouse button while the mouse is over the object. 
      * @param ev The mouse event.
      */
    onmouseup: (ev: MouseEvent) => any;


    /**
      * Fires on the source object continuously during a drag operation.
      * @param ev The event.
      */
    ondrag: (ev: DragEvent) => any;


    /**
      * Fires when the user moves the mouse pointer into the object.
      * @param ev The mouse event.
      */
    onmouseover: (ev: MouseEvent) => any;


    /**
      * Sets or gets the color of the document links. 
      */
    linkColor: string;

    /**
      * Occurs when playback is paused.
      * @param ev The event.
      */
    onpause: (ev: Event) => any;


    /**
      * Fires when the user clicks the object with either mouse button. 
      * @param ev The mouse event.
      */
    onmousedown: (ev: MouseEvent) => any;


    /**
      * Fires when the user clicks the left mouse button on the object
      * @param ev The mouse event.
      */
    onclick: (ev: MouseEvent) => any;


    /**
      * Occurs when playback stops because the next frame of a video resource is not available. 
      * @param ev The event.
      */
    onwaiting: (ev: Event) => any;


    /**
      * Fires when the user clicks the Stop button or leaves the Web page.
      * @param ev The event.
      */
    onstop: (ev: Event) => any;

    /**
      * false (false)[rolls
      */

    /**
      * Occurs when an item is removed from a Jump List of a webpage running in Site Mode. 
      * @param ev The event.
      */
    onmssitemodejumplistitemremoved: (ev: MSSiteModeEvent) => any;


    /**
      * Retrieves a collection of all applet objects in the document.
      */
    applets: HTMLCollection;

    /**
      * Specifies the beginning and end of the document body.
      */
    body: HTMLElement;

    /**
      * Sets or gets the security domain of the document. 
      */
    domain: string;

    xmlStandalone: boolean;

    /**
      * Represents the active selection, which is a highlighted block of text or other elements in the document that a user or a script can carry out some action on.
      */
    selection: MSSelection;

    /**
      * Occurs when the download has stopped. 
      * @param ev The event.
      */
    onstalled: (ev: Event) => any;


    /**
      * Fires when the user moves the mouse over the object. 
      * @param ev The mouse event.
      */
    onmousemove: (ev: MouseEvent) => any;


    /**
      * Gets a reference to the root node of the document. 
      */
    documentElement: HTMLElement;

    /**
      * Fires before an object contained in an editable element enters a UI-activated state or when an editable container object is control selected.
      * @param ev The event.
      */
    onbeforeeditfocus: (ev: MSEventObj) => any;


    /**
      * Occurs when the playback rate is increased or decreased. 
      * @param ev The event.
      */
    onratechange: (ev: Event) => any;


    /**
      * Occurs to indicate progress while downloading media data. 
      * @param ev The event.
      */
    onprogress: (ev: any) => any;


    /**
      * Fires when the user double-clicks the object.
      * @param ev The mouse event.
      */
    ondblclick: (ev: MouseEvent) => any;


    /**
      * Fires when the user clicks the right mouse button in the client area, opening the context menu. 
      * @param ev The mouse event.
      */
    oncontextmenu: (ev: MouseEvent) => any;


    /**
      * Occurs when the duration and dimensions of the media have been determined.
      * @param ev The event.
      */
    onloadedmetadata: (ev: Event) => any;

    media: string;

    /**
      * Fires when an error occurs during object loading.
      * @param ev The event.
      */
    onerror: (ev: Event) => any;


    /**
      * Occurs when the play method is requested. 
      * @param ev The event.
      */
    onplay: (ev: Event) => any;

    onafterupdate: (ev: MSEventObj) => any;

    /**
      * Occurs when the audio or video has started playing. 
      * @param ev The event.
      */
    onplaying: (ev: Event) => any;


    /**
      * Retrieves a collection, in source order, of img objects in the document.
      */
    images: HTMLCollection;

    /**
      * Contains information about the current URL. 
      */
    location: Location;

    /**
      * Fires when the user aborts the download.
      * @param ev The event.
      */
    onabort: (ev: UIEvent) => any;


    /**
      * Fires for the current element with focus immediately after moving focus to another element. 
      * @param ev The event.
      */
    onfocusout: (ev: FocusEvent) => any;


    /**
      * Fires when the selection state of a document changes.
      * @param ev The event.
      */
    onselectionchange: (ev: Event) => any;


    /**
      * Fires when a local DOM Storage area is written to disk.
      * @param ev The event.
      */
    onstoragecommit: (ev: StorageEvent) => any;


    /**
      * Fires periodically as data arrives from data source objects that asynchronously transmit their data. 
      * @param ev The event.
      */
    ondataavailable: (ev: MSEventObj) => any;


    /**
      * Fires when the state of the object has changed.
      * @param ev The event
      */
    onreadystatechange: (ev: Event) => any;


    /**
      * Gets the date that the page was last modified, if the page supplies one. 
      */
    lastModified: string;

    /**
      * Fires when the user presses an alphanumeric key.
      * @param ev The event.
      */
    onkeypress: (ev: KeyboardEvent) => any;


    /**
      * Occurs when media data is loaded at the current playback position. 
      * @param ev The event.
      */
    onloadeddata: (ev: Event) => any;


    /**
      * Fires immediately before the activeElement is changed from the current object to another object in the parent document.
      * @param ev The event.
      */
    onbeforedeactivate: (ev: UIEvent) => any;


    /**
      * Fires when the object is set as the active element.
      * @param ev The event.
      */
    onactivate: (ev: UIEvent) => any;


    onselectstart: (ev: Event) => any;

    /**
      * Fires when the object receives focus. 
      * @param ev The event.
      */
    onfocus: (ev: FocusEvent) => any;


    /**
      * Sets or gets the foreground (text) color of the document.
      */
    fgColor: string;

    /**
      * Occurs to indicate the current playback position.
      * @param ev The event.
      */
    ontimeupdate: (ev: Event) => any;


    /**
      * Fires when the current selection changes.
      * @param ev The event.
      */
    onselect: (ev: UIEvent) => any;

    ondrop: (ev: DragEvent) => any;

    /**
      * Occurs when the end of playback is reached. 
      * @param ev The event
      */
    onended: (ev: Event) => any;


    /**
      * Gets a value that indicates whether standards-compliant mode is switched on for the object.
      */
    compatMode: string;

    /**
      * Fires when the user repositions the scroll box in the scroll bar on the object. 
      * @param ev The event.
      */
    onscroll: (ev: UIEvent) => any;


    /**
      * Fires to indicate that the current row has changed in the data source and new data values are available on the object. 
      * @param ev The event.
      */
    onrowenter: (ev: MSEventObj) => any;


    /**
      * Fires immediately after the browser loads the object. 
      * @param ev The event.
      */
    onload: (ev: Event) => any;

    oninput: (ev: Event) => any;

    /**
      * Returns the current value of the document, range, or current selection for the given command.
      * @param commandId String that specifies a command identifier.
      */
    queryCommandValue(commandId: string): string;

    adoptNode(source: Node): Node;

    /**
      * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
      * @param commandId String that specifies a command identifier.
      */
    queryCommandIndeterm(commandId: string): boolean;

    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;

    /**
      * Executes a command on the current document, current selection, or the given range.
      * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
      * @param showUI Display the user interface, defaults to false.
      * @param value Value to assign.
      */
    execCommand(commandId: string, showUI?: boolean, value?: any): boolean;

    /**
      * Returns the element for the specified x coordinate and the specified y coordinate. 
      * @param x The x-offset
      * @param y The y-offset
      */
    elementFromPoint(x: number, y: number): Element;
    createCDATASection(data: string): CDATASection;

    /**
      * Retrieves the string associated with a command.
      * @param commandId String that contains the identifier of a command. This can be any command identifier given in the list of Command Identifiers. 
      */
    queryCommandText(commandId: string): string;

    /**
      * Writes one or more HTML expressions to a document in the specified window. 
      * @param content Specifies the text and HTML tags to write.
      */
    write(...content: string[]): void;

    /**
      * Allows updating the print settings for the page.
      */
    updateSettings(): void;

    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "a"): HTMLAnchorElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "abbr"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "address"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "area"): HTMLAreaElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "article"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "aside"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "audio"): HTMLAudioElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "b"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "base"): HTMLBaseElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "bdi"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "bdo"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "blockquote"): HTMLQuoteElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "body"): HTMLBodyElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "br"): HTMLBRElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "button"): HTMLButtonElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "canvas"): HTMLCanvasElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "caption"): HTMLTableCaptionElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "cite"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "code"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "col"): HTMLTableColElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "colgroup"): HTMLTableColElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "datalist"): HTMLDataListElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "dd"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "del"): HTMLModElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "dfn"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "div"): HTMLDivElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "dl"): HTMLDListElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "dt"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "em"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "embed"): HTMLEmbedElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "fieldset"): HTMLFieldSetElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "figcaption"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "figure"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "footer"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "form"): HTMLFormElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "h1"): HTMLHeadingElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "h2"): HTMLHeadingElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "h3"): HTMLHeadingElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "h4"): HTMLHeadingElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "h5"): HTMLHeadingElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "h6"): HTMLHeadingElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "head"): HTMLHeadElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "header"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "hgroup"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "hr"): HTMLHRElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "html"): HTMLHtmlElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "i"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "iframe"): HTMLIFrameElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "img"): HTMLImageElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "input"): HTMLInputElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "ins"): HTMLModElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "kbd"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "label"): HTMLLabelElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "legend"): HTMLLegendElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "li"): HTMLLIElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "link"): HTMLLinkElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "main"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "map"): HTMLMapElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "mark"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "menu"): HTMLMenuElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "meta"): HTMLMetaElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "nav"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "noscript"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "object"): HTMLObjectElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "ol"): HTMLOListElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "optgroup"): HTMLOptGroupElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "option"): HTMLOptionElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "p"): HTMLParagraphElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "param"): HTMLParamElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "pre"): HTMLPreElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "progress"): HTMLProgressElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "q"): HTMLQuoteElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "rp"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "rt"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "ruby"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "s"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "samp"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "script"): HTMLScriptElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "section"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "select"): HTMLSelectElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "small"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "source"): HTMLSourceElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "span"): HTMLSpanElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "strong"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "style"): HTMLStyleElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "sub"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "summary"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "sup"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "table"): HTMLTableElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "tbody"): HTMLTableSectionElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "td"): HTMLTableDataCellElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "textarea"): HTMLTextAreaElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "tfoot"): HTMLTableSectionElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "th"): HTMLTableHeaderCellElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "thead"): HTMLTableSectionElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "title"): HTMLTitleElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "tr"): HTMLTableRowElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "track"): HTMLTrackElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "u"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "ul"): HTMLUListElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "var"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "video"): HTMLVideoElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: "wbr"): HTMLElement;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
    createElement(tagName: string): HTMLElement;

    /**
      * Removes mouse capture from the object in the current document.
      */
    releaseCapture(): void;

    /**
      * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window. 
      * @param content The text and HTML tags to write.
      */
    writeln(...content: string[]): void;
    createElementNS(namespaceURI: string, qualifiedName: string): Element;

    /**
      * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
      * @param url Specifies a MIME type for the document.
      * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
      * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
      * @param replace Specifies whether the existing entry for the document is replaced in the history list.
      */
    open(url?: string, name?: string, features?: string, replace?: boolean): any;

    /**
      * Returns a Boolean value that indicates whether the current command is supported on the current range.
      * @param commandId Specifies a command identifier.
      */
    queryCommandSupported(commandId: string): boolean;

    /**
      * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
      * @param root The root element or node to start traversing on.
      * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
      * @param filter A custom NodeFilter function to use.
      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
      */
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): TreeWalker;
    createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;

    /** 
      * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
      * @param commandId Specifies a command identifier.
      */
    queryCommandEnabled(commandId: string): boolean;

    /**
      * Causes the element to receive the focus and executes the code specified by the onfocus event.
      */
    focus(): void;

    /**
      * Closes an output stream and forces the sent data to display.
      */
    close(): void;

    getElementsByClassName(classNames: string): NodeList;
    importNode(importedNode: Node, deep: boolean): Node;

    /**
      *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document. 
      */
    createRange(): Range;

    /**
      * Fires a specified event on the object.
      * @param eventName Specifies the name of the event to fire.
      * @param eventObj Object that specifies the event object from which to obtain event object properties.
      */
    fireEvent(eventName: string, eventObj?: any): boolean;

    /**
      * Creates a comment object with the specified data.
      * @param data Sets the comment object's data.
      */
    createComment(data: string): Comment;

    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "abbr"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "address"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "b"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "bdi"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "bdo"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "cite"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "code"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "dd"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "dfn"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "dt"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "em"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
    /**
     * Retrieves a collection of objects based on the specified element name.
     * @param name Specifies the name of an element.
     */
    getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "i"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "kbd"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "main"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "rp"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "rt"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "ruby"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "s"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "samp"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "small"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "source"): NodeListOf<HTMLSourceElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "strong"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "sub"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "summary"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "sup"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "u"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "var"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
    getElementsByTagName(name: string): NodeList;

    /**
      * Creates a new document.
      */
    createDocumentFragment(): DocumentFragment;

    /**
      * Creates a style sheet for the document. 
      * @param href Specifies how to add the style sheet to the document. If a file name is specified for the URL, the style information is added as a link object. If the URL contains style information, it is added to the style object.
      * @param index Specifies the index that indicates where the new style sheet is inserted in the styleSheets collection. The default is to insert the new style sheet at the end of the collection.
      */
    createStyleSheet(href?: string, index?: number): CSSStyleSheet;

    /**
      * Gets a collection of objects based on the value of the NAME or ID attribute.
      * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
      */
    getElementsByName(elementName: string): NodeList;

    /**
      * Returns a Boolean value that indicates the current state of the command.
      * @param commandId String that specifies a command identifier.
      */
    queryCommandState(commandId: string): boolean;

    /**
      * Gets a value indicating whether the object currently has focus.
      */
    hasFocus(): boolean;

    /**
      * Displays help information for the given command identifier.
      * @param commandId Displays help information for the given command identifier.
      */
    execCommandShowHelp(commandId: string): boolean;

    /**
      * Creates an attribute object with a specified name.
      * @param name String that sets the attribute object's name.
      */
    createAttribute(name: string): Attr;

    /**
      * Creates a text string from the specified value. 
      * @param data String that specifies the nodeValue property of the text node.
      */
    createTextNode(data: string): Text;

    /**
      * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document. 
      * @param root The root element or node to start traversing on.
      * @param whatToShow The type of nodes or elements to appear in the node list
      * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
      */
    createNodeIterator(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): NodeIterator;

    /**
      * Generates an event object to pass event context information when you use the fireEvent method.
      * @param eventObj An object that specifies an existing event object on which to base the new object.
      */
    createEventObject(eventObj?: any): MSEventObj;

    /**
      * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
      */
    getSelection(): Selection;

    /**
      * Returns a reference to the first object with the specified value of the ID or NAME attribute.
      * @param elementId String that specifies the ID value. Case-insensitive.
      */
    getElementById(elementId: string): HTMLElement;
}
