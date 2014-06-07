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

/// <reference path="ts4s.lib14.d.ts" />

interface HTMLBodyElement {
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface XDomainRequest {
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface HTMLMarqueeElement {
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "bounce", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "start", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "finish", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface MSWindowExtensions {
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface HTMLMediaElement {
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface HTMLVideoElement {
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoOptimalLayoutChanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoFrameStepCompleted", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoFormatChanged", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface TextTrackCue {
    addEventListener(type: "enter", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "exit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface WebSocket {
    addEventListener(type: "open", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "close", listener: (ev: CloseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface XMLHttpRequestEventTarget {
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface AudioTrackList {
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "removetrack", listener: (ev: any /*PluginArray*/) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface MSBaseReader {
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface IDBTransaction {
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface TextTrackList {
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface IDBDatabase {
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface IDBOpenDBRequest {
    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "upgradeneeded", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blocked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface TextTrack {
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface IDBRequest {
    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface MessagePort {
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface ApplicationCache {
    addEventListener(type: "downloading", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "updateready", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cached", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "obsolete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "checking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "noupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface AbstractWorker {
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface Worker {
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface GlobalEventHandlers {
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}
interface KeyOperation {
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface MSInputMethodContext {
    addEventListener(type: "candidatewindowshow", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "candidatewindowhide", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: "candidatewindowupdate", listener: (ev: any) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface MSWebViewAsyncOperation {
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface CryptoOperation {
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}


declare function addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;


/////////////////////////////
/// WorkerGlobalScope APIs 
/////////////////////////////
// TODO: These are only available in a Web Worker - should be in a separate lib file
declare function importScripts(...urls: string[]): void;


/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////
declare var ActiveXObject: { new (s: string): any; };

interface ITextWriter {
    Write(s: string): void;
    WriteLine(s: string): void;
    Close(): void;
}

declare var WScript: {
    Echo(s: any): void;
    StdErr: ITextWriter;
    StdOut: ITextWriter;
    Arguments: { length: number; Item(n: number): string; };
    ScriptFullName: string;
    Quit(exitCode?: number): number;
}
