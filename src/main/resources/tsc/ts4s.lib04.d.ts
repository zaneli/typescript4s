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

/// <reference path="ts4s.lib3.d.ts" />

declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
}

interface HTMLAreaElement extends HTMLElement {
    /**
      * Sets or retrieves the protocol portion of a URL.
      */
    protocol: string;
    /**
      * Sets or retrieves the substring of the href property that follows the question mark.
      */
    search: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
    alt: string;
    /**
      * Sets or retrieves the coordinates of the object.
      */
    coords: string;
    /**
      * Sets or retrieves the host name part of the location or URL. 
      */
    hostname: string;
    /**
      * Sets or retrieves the port number associated with a URL.
      */
    port: string;
    /**
      * Sets or retrieves the file name or path specified by the object.
      */
    pathname: string;
    /**
      * Sets or retrieves the hostname and port number of the location or URL.
      */
    host: string;
    /**
      * Sets or retrieves the subsection of the href property that follows the number sign (#).
      */
    hash: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
    target: string;
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
    href: string;
    /**
      * Sets or gets whether clicks in this region cause action.
      */
    noHref: boolean;
    /**
      * Sets or retrieves the shape of the object.
      */
    shape: string;
    /** 
      * Returns a string representation of an object.
      */
    toString(): string;
}
declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new (): HTMLAreaElement;
}

interface EventTarget {
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    dispatchEvent(evt: Event): boolean;
}

interface SVGAngle {
    valueAsString: string;
    valueInSpecifiedUnits: number;
    value: number;
    unitType: number;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    convertToSpecifiedUnits(unitType: number): void;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}
declare var SVGAngle: {
    prototype: SVGAngle;
    new (): SVGAngle;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
}

interface HTMLButtonElement extends HTMLElement, MSDataBindingExtensions {
    /** 
      * Sets or retrieves the default or selected value of the control.
      */
    value: string;
    status: any;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
    form: HTMLFormElement;
    /** 
      * Sets or retrieves the name of the object.
      */
    name: string;
    /**
      * Gets the classification and default behavior of the button.
      */
    type: string;
    /**
      * Creates a TextRange object for the element.
      */
    createTextRange(): TextRange;
}
declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new (): HTMLButtonElement;
}

interface HTMLSourceElement extends HTMLElement {
    /**
      * The address or URL of the a media resource that is to be considered.
      */
    src: string;
    /**
      * Gets or sets the intended media type of the media source.
     */
    media: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: string;
}
declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new (): HTMLSourceElement;
}

interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}
declare var CanvasGradient: {
    prototype: CanvasGradient;
    new (): CanvasGradient;
}

interface KeyboardEvent extends UIEvent {
    location: number;
    keyCode: number;
    shiftKey: boolean;
    which: number;
    locale: string;
    key: string;
    altKey: boolean;
    metaKey: boolean;
    char: string;
    ctrlKey: boolean;
    repeat: boolean;
    charCode: number;
    getModifierState(keyArg: string): boolean;
    initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}
declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new (): KeyboardEvent;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_MOBILE: number;
}
