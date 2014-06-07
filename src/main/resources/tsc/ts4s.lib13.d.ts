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

/// <reference path="ts4s.lib12.d.ts" />

interface MSWebViewAsyncOperation extends EventTarget {
    target: MSHTMLWebViewElement;
    oncomplete: (ev: any) => any;
    error: DOMError;
    onerror: (ev: any) => any;
    readyState: number;
    type: number;
    result: any;
    start(): void;
    ERROR: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    COMPLETED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    STARTED: number;
}
declare var MSWebViewAsyncOperation: {
    ERROR: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    COMPLETED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    STARTED: number;
}

interface ScriptNotifyEvent extends Event {
    value: string;
    callingUri: string;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
    redirectStart: number;
    domainLookupEnd: number;
    responseStart: number;
    domComplete: number;
    domainLookupStart: number;
    loadEventStart: number;
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
    redirectCount: number;
    unloadEventStart: number;
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    type: string;
}

interface MSMediaKeyNeededEvent extends Event {
    initData: Uint8Array;
}

interface MSManipulationEvent {
    MS_MANIPULATION_STATE_SELECTING: number;
    MS_MANIPULATION_STATE_COMMITTED: number;
    MS_MANIPULATION_STATE_PRESELECT: number;
    MS_MANIPULATION_STATE_DRAGGING: number;
    MS_MANIPULATION_STATE_CANCELLED: number;
}
//declare var MSManipulationEvent: {
//    MS_MANIPULATION_STATE_SELECTING: number;
//    MS_MANIPULATION_STATE_COMMITTED: number;
//    MS_MANIPULATION_STATE_PRESELECT: number;
//    MS_MANIPULATION_STATE_DRAGGING: number;
//    MS_MANIPULATION_STATE_CANCELLED: number;
//}

interface LongRunningScriptDetectedEvent extends Event {
    stopPageScriptExecution: boolean;
    executionTime: number;
}

interface MSAppView {
    viewId: number;
    close(): void;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
}

interface PerfWidgetExternal {
    maxCpuSpeed: number;
    independentRenderingEnabled: boolean;
    irDisablingContentString: string;
    irStatusAvailable: boolean;
    performanceCounter: number;
    averagePaintTime: number;
    activeNetworkRequestCount: number;
    paintRequestsPerSecond: number;
    extraInformationEnabled: boolean;
    performanceCounterFrequency: number;
    averageFrameTime: number;
    repositionWindow(x: number, y: number): void;
    getRecentMemoryUsage(last: number): any;
    getMemoryUsage(): number;
    resizeWindow(width: number, height: number): void;
    getProcessCpuUsage(): number;
    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
    removeEventListener(eventType: string, callback: (ev: any) => any): void;
    getRecentCpuUsage(last: number): any;
    addEventListener(eventType: string, callback: (ev: any) => any): void;
    getRecentFrames(last: number): any;
    getRecentPaintRequests(last: number): any;
}

interface PageTransitionEvent extends Event {
    persisted: boolean;
}

interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}

interface HTMLDocument extends Document {
}

interface KeyPair {
    privateKey: Key;
    publicKey: Key;
}

interface MSApp {
    getViewOpener(): MSAppView;
    suppressSubdownloadCredentialPrompts(suppress: boolean): void;
    execAsyncAtPriority(asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): void;
    isTaskScheduledAtPriorityOrHigher(priority: string): boolean;
    execAtPriority(synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): any;
    createNewView(uri: string): MSAppView;
    getCurrentPriority(): string;
    NORMAL: string;
    HIGH: string;
    IDLE: string;
    CURRENT: string;
}
//declare var MSApp: {
//    NORMAL: string;
//    HIGH: string;
//    IDLE: string;
//    CURRENT: string;
//}

interface MSMediaKeySession extends EventTarget {
    sessionId: string;
    error: MSMediaKeyError;
    keySystem: string;
    close(): void;
    update(key: Uint8Array): void;
}

interface HTMLTrackElement {
    readyState: number;
    ERROR: number;
    LOADING: number;
    LOADED: number;
    NONE: number;
}
//declare var HTMLTrackElement: {
//    ERROR: number;
//    LOADING: number;
//    LOADED: number;
//    NONE: number;
//}

interface HTMLVideoElement {
    getVideoPlaybackQuality(): VideoPlaybackQuality;
}

interface UnviewableContentIdentifiedEvent extends NavigationEvent {
    referrer: string;
}

interface CryptoOperation extends EventTarget {
    algorithm: Algorithm;
    oncomplete: (ev: any) => any;
    onerror: (ev: any) => any;
    onprogress: (ev: any) => any;
    onabort: (ev: any) => any;
    key: Key;
    result: any;
    abort(): void;
    finish(): void;
    process(buffer: ArrayBufferView): void;
}

declare var onpageshow: (ev: PageTransitionEvent) => any;
declare var ondevicemotion: (ev: DeviceMotionEvent) => any;
declare var devicePixelRatio: number;
declare var msCrypto: Crypto;
declare var ondeviceorientation: (ev: DeviceOrientationEvent) => any;
declare var doNotTrack: string;
declare var onmspointerenter: (ev: any) => any;
declare var onpagehide: (ev: PageTransitionEvent) => any;
declare var onmspointerleave: (ev: any) => any;
declare var onpointerenter: (ev: PointerEvent) => any;
declare var onpointerout: (ev: PointerEvent) => any;
declare var onpointerdown: (ev: PointerEvent) => any;
declare var onpointerup: (ev: PointerEvent) => any;
declare var onpointercancel: (ev: PointerEvent) => any;
declare var onpointerover: (ev: PointerEvent) => any;
declare var onpointermove: (ev: PointerEvent) => any;
declare var onpointerleave: (ev: PointerEvent) => any;


/////////////////////////////
/// WebGL APIs 
/////////////////////////////


interface WebGLTexture extends WebGLObject {
}

interface OES_texture_float {
}

interface WebGLContextEvent extends Event {
    statusMessage: string;
}
declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new (): WebGLContextEvent;
}

interface WebGLRenderbuffer extends WebGLObject {
}

interface WebGLUniformLocation {
}

interface WebGLActiveInfo {
    name: string;
    type: number;
    size: number;
}

interface WEBGL_compressed_texture_s3tc {
    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
    COMPRESSED_RGB_S3TC_DXT1_EXT: number;
}
declare var WEBGL_compressed_texture_s3tc: {
    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
    COMPRESSED_RGB_S3TC_DXT1_EXT: number;
}

interface WebGLContextAttributes {
    alpha: boolean;
    depth: boolean;
    stencil: boolean;
    antialias: boolean;
    premultipliedAlpha: boolean;
    preserveDrawingBuffer: boolean;
}

interface WebGLRenderingContext {
    drawingBufferWidth: number;
    drawingBufferHeight: number;
    canvas: HTMLCanvasElement;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    bindTexture(target: number, texture: WebGLTexture): void;
    bufferData(target: number, data: ArrayBufferView, usage: number): void;
    bufferData(target: number, data: ArrayBuffer, usage: number): void;
    bufferData(target: number, size: number, usage: number): void;
    depthMask(flag: boolean): void;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    vertexAttrib3fv(indx: number, values: number[]): void;
    vertexAttrib3fv(indx: number, values: Float32Array): void;
    linkProgram(program: WebGLProgram): void;
    getSupportedExtensions(): string[];
    bufferSubData(target: number, offset: number, data: ArrayBuffer): void;
    bufferSubData(target: number, offset: number, data: ArrayBufferView): void;
    vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;
    polygonOffset(factor: number, units: number): void;
    blendColor(red: number, green: number, blue: number, alpha: number): void;
    createTexture(): WebGLTexture;
    hint(target: number, mode: number): void;
    getVertexAttrib(index: number, pname: number): any;
    enableVertexAttribArray(index: number): void;
    depthRange(zNear: number, zFar: number): void;
    cullFace(mode: number): void;
    createFramebuffer(): WebGLFramebuffer;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
    getExtension(name: string): Object;
    createProgram(): WebGLProgram;
    deleteShader(shader: WebGLShader): void;
    getAttachedShaders(program: WebGLProgram): WebGLShader[];
    enable(cap: number): void;
    blendEquation(mode: number): void;
    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, image: HTMLImageElement): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, canvas: HTMLCanvasElement): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, video: HTMLVideoElement): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: ImageData): void;
    createBuffer(): WebGLBuffer;
    deleteTexture(texture: WebGLTexture): void;
    useProgram(program: WebGLProgram): void;
    vertexAttrib2fv(indx: number, values: number[]): void;
    vertexAttrib2fv(indx: number, values: Float32Array): void;
    checkFramebufferStatus(target: number): number;
    frontFace(mode: number): void;
    getBufferParameter(target: number, pname: number): any;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, image: HTMLImageElement): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, canvas: HTMLCanvasElement): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, video: HTMLVideoElement): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: ImageData): void;
    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;
    getVertexAttribOffset(index: number, pname: number): number;
    disableVertexAttribArray(index: number): void;
    blendFunc(sfactor: number, dfactor: number): void;
    drawElements(mode: number, count: number, type: number, offset: number): void;
    isFramebuffer(framebuffer: WebGLFramebuffer): boolean;
    uniform3iv(location: WebGLUniformLocation, v: number[]): void;
    uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;
    lineWidth(width: number): void;
    getShaderInfoLog(shader: WebGLShader): string;
    getTexParameter(target: number, pname: number): any;
    getParameter(pname: number): any;
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat;
    getContextAttributes(): WebGLContextAttributes;
    vertexAttrib1f(indx: number, x: number): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;
    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView): void;
    isContextLost(): boolean;
    uniform1iv(location: WebGLUniformLocation, v: number[]): void;
    uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;
    getRenderbufferParameter(target: number, pname: number): any;
    uniform2fv(location: WebGLUniformLocation, v: number[]): void;
    uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;
    isTexture(texture: WebGLTexture): boolean;
    getError(): number;
    shaderSource(shader: WebGLShader, source: string): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
    stencilMask(mask: number): void;
    bindBuffer(target: number, buffer: WebGLBuffer): void;
    getAttribLocation(program: WebGLProgram, name: string): number;
    uniform3i(location: WebGLUniformLocation, x: number, y: number, z: number): void;
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
    clear(mask: number): void;
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
    scissor(x: number, y: number, width: number, height: number): void;
    uniform2i(location: WebGLUniformLocation, x: number, y: number): void;
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;
    getShaderSource(shader: WebGLShader): string;
    generateMipmap(target: number): void;
    bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
    uniform1fv(location: WebGLUniformLocation, v: number[]): void;
    uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;
    uniform2iv(location: WebGLUniformLocation, v: number[]): void;
    uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;
    stencilOp(fail: number, zfail: number, zpass: number): void;
    uniform4fv(location: WebGLUniformLocation, v: number[]): void;
    uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;
    vertexAttrib1fv(indx: number, values: number[]): void;
    vertexAttrib1fv(indx: number, values: Float32Array): void;
    flush(): void;
    uniform4f(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
    deleteProgram(program: WebGLProgram): void;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;
    uniform1i(location: WebGLUniformLocation, x: number): void;
    getProgramParameter(program: WebGLProgram, pname: number): any;
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
    stencilFunc(func: number, ref: number, mask: number): void;
    pixelStorei(pname: number, param: number): void;
    disable(cap: number): void;
    vertexAttrib4fv(indx: number, values: number[]): void;
    vertexAttrib4fv(indx: number, values: Float32Array): void;
    createRenderbuffer(): WebGLRenderbuffer;
    isBuffer(buffer: WebGLBuffer): boolean;
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): any;
    uniform4i(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
    sampleCoverage(value: number, invert: boolean): void;
    depthFunc(func: number): void;
    texParameterf(target: number, pname: number, param: number): void;
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
    drawArrays(mode: number, first: number, count: number): void;
    texParameteri(target: number, pname: number, param: number): void;
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;
    getShaderParameter(shader: WebGLShader, pname: number): any;
    clearDepth(depth: number): void;
    activeTexture(texture: number): void;
    viewport(x: number, y: number, width: number, height: number): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    uniform1f(location: WebGLUniformLocation, x: number): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
    deleteBuffer(buffer: WebGLBuffer): void;
    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;
    uniform3fv(location: WebGLUniformLocation, v: number[]): void;
    uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;
    stencilMaskSeparate(face: number, mask: number): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    compileShader(shader: WebGLShader): void;
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    isShader(shader: WebGLShader): boolean;
    clearStencil(s: number): void;
    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;
    finish(): void;
    uniform2f(location: WebGLUniformLocation, x: number, y: number): void;
    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void;
    uniform3f(location: WebGLUniformLocation, x: number, y: number, z: number): void;
    getProgramInfoLog(program: WebGLProgram): string;
    validateProgram(program: WebGLProgram): void;
    isEnabled(cap: number): boolean;
    vertexAttrib2f(indx: number, x: number, y: number): void;
    isProgram(program: WebGLProgram): boolean;
    createShader(type: number): WebGLShader;
    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;
    uniform4iv(location: WebGLUniformLocation, v: number[]): void;
    uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;
    DEPTH_FUNC: number;
    DEPTH_COMPONENT16: number;
    REPLACE: number;
    REPEAT: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    STENCIL_BUFFER_BIT: number;
    RENDERER: number;
    STENCIL_BACK_REF: number;
    TEXTURE26: number;
    RGB565: number;
    DITHER: number;
    CONSTANT_COLOR: number;
    GENERATE_MIPMAP_HINT: number;
    POINTS: number;
    DECR: number;
    INT_VEC3: number;
    TEXTURE28: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    BACK: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    UNPACK_FLIP_Y_WEBGL: number;
    BLEND: number;
    TEXTURE9: number;
    ARRAY_BUFFER_BINDING: number;
    MAX_VIEWPORT_DIMS: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE31: number;
    TEXTURE24: number;
    HIGH_INT: number;
    RENDERBUFFER_BINDING: number;
    BLEND_COLOR: number;
    FASTEST: number;
    STENCIL_WRITEMASK: number;
    ALIASED_POINT_SIZE_RANGE: number;
    TEXTURE12: number;
    DST_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    FRAMEBUFFER_COMPLETE: number;
    NEAREST_MIPMAP_NEAREST: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    TEXTURE3: number;
    DEPTH_WRITEMASK: number;
    CONTEXT_LOST_WEBGL: number;
    INVALID_VALUE: number;
    TEXTURE_MAG_FILTER: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    NOTEQUAL: number;
    ALPHA: number;
    DEPTH_STENCIL: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    DEPTH_COMPONENT: number;
    RENDERBUFFER_RED_SIZE: number;
    TEXTURE20: number;
    RED_BITS: number;
    RENDERBUFFER_BLUE_SIZE: number;
    SCISSOR_BOX: number;
    VENDOR: number;
    FRONT_AND_BACK: number;
    CONSTANT_ALPHA: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    NEAREST: number;
    CULL_FACE: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    TEXTURE19: number;
    FRONT: number;
    DEPTH_CLEAR_VALUE: number;
    GREEN_BITS: number;
    TEXTURE29: number;
    TEXTURE23: number;
    MAX_RENDERBUFFER_SIZE: number;
    STENCIL_ATTACHMENT: number;
    TEXTURE27: number;
    BOOL_VEC2: number;
    OUT_OF_MEMORY: number;
    MIRRORED_REPEAT: number;
    POLYGON_OFFSET_UNITS: number;
    TEXTURE_MIN_FILTER: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    LINE_LOOP: number;
    FLOAT_MAT3: number;
    TEXTURE14: number;
    LINEAR: number;
    RGB5_A1: number;
    ONE_MINUS_SRC_COLOR: number;
    SAMPLE_COVERAGE_INVERT: number;
    DONT_CARE: number;
    FRAMEBUFFER_BINDING: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    STENCIL_REF: number;
    ZERO: number;
    DECR_WRAP: number;
    SAMPLE_COVERAGE: number;
    STENCIL_BACK_FUNC: number;
    TEXTURE30: number;
    VIEWPORT: number;
    STENCIL_BITS: number;
    FLOAT: number;
    COLOR_WRITEMASK: number;
    SAMPLE_COVERAGE_VALUE: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    STENCIL_BACK_FAIL: number;
    FLOAT_MAT4: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    TEXTURE6: number;
    RENDERBUFFER_WIDTH: number;
    RGBA4: number;
    ALWAYS: number;
    BLEND_EQUATION_ALPHA: number;
    COLOR_BUFFER_BIT: number;
    TEXTURE_CUBE_MAP: number;
    DEPTH_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    BLEND_EQUATION: number;
    RENDERBUFFER_GREEN_SIZE: number;
    NEAREST_MIPMAP_LINEAR: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    INCR_WRAP: number;
    ONE_MINUS_DST_COLOR: number;
    HIGH_FLOAT: number;
    BYTE: number;
    FRONT_FACE: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    CCW: number;
    TEXTURE13: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_WRAP_T: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    FLOAT_VEC2: number;
    LUMINANCE: number;
    GREATER: number;
    INT_VEC2: number;
    VALIDATE_STATUS: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    TEXTURE5: number;
    FUNC_SUBTRACT: number;
    BLEND_DST_ALPHA: number;
    SAMPLER_CUBE: number;
    ONE_MINUS_DST_ALPHA: number;
    LESS: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    BLUE_BITS: number;
    DEPTH_TEST: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    DELETE_STATUS: number;
    TEXTURE18: number;
    POLYGON_OFFSET_FACTOR: number;
    UNSIGNED_INT: number;
    TEXTURE_2D: number;
    DST_COLOR: number;
    FLOAT_MAT2: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    LUMINANCE_ALPHA: number;
    CW: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    LINEAR_MIPMAP_LINEAR: number;
    BUFFER_SIZE: number;
    SAMPLE_BUFFERS: number;
    TEXTURE15: number;
    ACTIVE_TEXTURE: number;
    VERTEX_SHADER: number;
    TEXTURE22: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    INCR: number;
    COMPILE_STATUS: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    TEXTURE7: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    DEPTH_BITS: number;
    RGBA: number;
    TRIANGLE_STRIP: number;
    COLOR_CLEAR_VALUE: number;
    BROWSER_DEFAULT_WEBGL: number;
    INVALID_ENUM: number;
    SCISSOR_TEST: number;
    LINE_STRIP: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    STENCIL_FUNC: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    RENDERBUFFER_HEIGHT: number;
    TEXTURE8: number;
    TRIANGLES: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    STENCIL_BACK_VALUE_MASK: number;
    TEXTURE25: number;
    RENDERBUFFER: number;
    LEQUAL: number;
    TEXTURE1: number;
    STENCIL_INDEX8: number;
    FUNC_ADD: number;
    STENCIL_FAIL: number;
    BLEND_SRC_ALPHA: number;
    BOOL: number;
    ALPHA_BITS: number;
    LOW_INT: number;
    TEXTURE10: number;
    SRC_COLOR: number;
    MAX_VARYING_VECTORS: number;
    BLEND_DST_RGB: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    STENCIL_INDEX: number;
    TEXTURE_BINDING_2D: number;
    MEDIUM_INT: number;
    SHADER_TYPE: number;
    POLYGON_OFFSET_FILL: number;
    DYNAMIC_DRAW: number;
    TEXTURE4: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STREAM_DRAW: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    TEXTURE17: number;
    TRIANGLE_FAN: number;
    UNPACK_ALIGNMENT: number;
    CURRENT_PROGRAM: number;
    LINES: number;
    INVALID_OPERATION: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    LINEAR_MIPMAP_NEAREST: number;
    CLAMP_TO_EDGE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    TEXTURE_WRAP_S: number;
    ELEMENT_ARRAY_BUFFER: number;
    UNSIGNED_SHORT_5_6_5: number;
    ACTIVE_UNIFORMS: number;
    FLOAT_VEC3: number;
    NO_ERROR: number;
    ATTACHED_SHADERS: number;
    DEPTH_ATTACHMENT: number;
    TEXTURE11: number;
    STENCIL_TEST: number;
    ONE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    STATIC_DRAW: number;
    GEQUAL: number;
    BOOL_VEC4: number;
    COLOR_ATTACHMENT0: number;
    PACK_ALIGNMENT: number;
    MAX_TEXTURE_SIZE: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    CULL_FACE_MODE: number;
    TEXTURE16: number;
    STENCIL_BACK_WRITEMASK: number;
    SRC_ALPHA: number;
    UNSIGNED_SHORT: number;
    TEXTURE21: number;
    FUNC_REVERSE_SUBTRACT: number;
    SHADING_LANGUAGE_VERSION: number;
    EQUAL: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    BOOL_VEC3: number;
    SAMPLER_2D: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    STENCIL_VALUE_MASK: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    ARRAY_BUFFER: number;
    DEPTH_RANGE: number;
    NICEST: number;
    ACTIVE_ATTRIBUTES: number;
    NEVER: number;
    FLOAT_VEC4: number;
    CURRENT_VERTEX_ATTRIB: number;
    STENCIL_PASS_DEPTH_PASS: number;
    INVERT: number;
    LINK_STATUS: number;
    RGB: number;
    INT_VEC4: number;
    TEXTURE2: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    MEDIUM_FLOAT: number;
    SRC_ALPHA_SATURATE: number;
    BUFFER_USAGE: number;
    SHORT: number;
    NONE: number;
    UNSIGNED_BYTE: number;
    INT: number;
    SUBPIXEL_BITS: number;
    KEEP: number;
    SAMPLES: number;
    FRAGMENT_SHADER: number;
    LINE_WIDTH: number;
    BLEND_SRC_RGB: number;
    LOW_FLOAT: number;
    VERSION: number;
}
declare var WebGLRenderingContext: {
    DEPTH_FUNC: number;
    DEPTH_COMPONENT16: number;
    REPLACE: number;
    REPEAT: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    STENCIL_BUFFER_BIT: number;
    RENDERER: number;
    STENCIL_BACK_REF: number;
    TEXTURE26: number;
    RGB565: number;
    DITHER: number;
    CONSTANT_COLOR: number;
    GENERATE_MIPMAP_HINT: number;
    POINTS: number;
    DECR: number;
    INT_VEC3: number;
    TEXTURE28: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    BACK: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    UNPACK_FLIP_Y_WEBGL: number;
    BLEND: number;
    TEXTURE9: number;
    ARRAY_BUFFER_BINDING: number;
    MAX_VIEWPORT_DIMS: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE31: number;
    TEXTURE24: number;
    HIGH_INT: number;
    RENDERBUFFER_BINDING: number;
    BLEND_COLOR: number;
    FASTEST: number;
    STENCIL_WRITEMASK: number;
    ALIASED_POINT_SIZE_RANGE: number;
    TEXTURE12: number;
    DST_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    FRAMEBUFFER_COMPLETE: number;
    NEAREST_MIPMAP_NEAREST: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    TEXTURE3: number;
    DEPTH_WRITEMASK: number;
    CONTEXT_LOST_WEBGL: number;
    INVALID_VALUE: number;
    TEXTURE_MAG_FILTER: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    NOTEQUAL: number;
    ALPHA: number;
    DEPTH_STENCIL: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    DEPTH_COMPONENT: number;
    RENDERBUFFER_RED_SIZE: number;
    TEXTURE20: number;
    RED_BITS: number;
    RENDERBUFFER_BLUE_SIZE: number;
    SCISSOR_BOX: number;
    VENDOR: number;
    FRONT_AND_BACK: number;
    CONSTANT_ALPHA: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    NEAREST: number;
    CULL_FACE: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    TEXTURE19: number;
    FRONT: number;
    DEPTH_CLEAR_VALUE: number;
    GREEN_BITS: number;
    TEXTURE29: number;
    TEXTURE23: number;
    MAX_RENDERBUFFER_SIZE: number;
    STENCIL_ATTACHMENT: number;
    TEXTURE27: number;
    BOOL_VEC2: number;
    OUT_OF_MEMORY: number;
    MIRRORED_REPEAT: number;
    POLYGON_OFFSET_UNITS: number;
    TEXTURE_MIN_FILTER: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    LINE_LOOP: number;
    FLOAT_MAT3: number;
    TEXTURE14: number;
    LINEAR: number;
    RGB5_A1: number;
    ONE_MINUS_SRC_COLOR: number;
    SAMPLE_COVERAGE_INVERT: number;
    DONT_CARE: number;
    FRAMEBUFFER_BINDING: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    STENCIL_REF: number;
    ZERO: number;
    DECR_WRAP: number;
    SAMPLE_COVERAGE: number;
    STENCIL_BACK_FUNC: number;
    TEXTURE30: number;
    VIEWPORT: number;
    STENCIL_BITS: number;
    FLOAT: number;
    COLOR_WRITEMASK: number;
    SAMPLE_COVERAGE_VALUE: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    STENCIL_BACK_FAIL: number;
    FLOAT_MAT4: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    TEXTURE6: number;
    RENDERBUFFER_WIDTH: number;
    RGBA4: number;
    ALWAYS: number;
    BLEND_EQUATION_ALPHA: number;
    COLOR_BUFFER_BIT: number;
    TEXTURE_CUBE_MAP: number;
    DEPTH_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    BLEND_EQUATION: number;
    RENDERBUFFER_GREEN_SIZE: number;
    NEAREST_MIPMAP_LINEAR: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    INCR_WRAP: number;
    ONE_MINUS_DST_COLOR: number;
    HIGH_FLOAT: number;
    BYTE: number;
    FRONT_FACE: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    CCW: number;
    TEXTURE13: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_WRAP_T: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    FLOAT_VEC2: number;
    LUMINANCE: number;
    GREATER: number;
    INT_VEC2: number;
    VALIDATE_STATUS: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    TEXTURE5: number;
    FUNC_SUBTRACT: number;
    BLEND_DST_ALPHA: number;
    SAMPLER_CUBE: number;
    ONE_MINUS_DST_ALPHA: number;
    LESS: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    BLUE_BITS: number;
    DEPTH_TEST: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    DELETE_STATUS: number;
    TEXTURE18: number;
    POLYGON_OFFSET_FACTOR: number;
    UNSIGNED_INT: number;
    TEXTURE_2D: number;
    DST_COLOR: number;
    FLOAT_MAT2: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    LUMINANCE_ALPHA: number;
    CW: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    LINEAR_MIPMAP_LINEAR: number;
    BUFFER_SIZE: number;
    SAMPLE_BUFFERS: number;
    TEXTURE15: number;
    ACTIVE_TEXTURE: number;
    VERTEX_SHADER: number;
    TEXTURE22: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    INCR: number;
    COMPILE_STATUS: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    TEXTURE7: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    DEPTH_BITS: number;
    RGBA: number;
    TRIANGLE_STRIP: number;
    COLOR_CLEAR_VALUE: number;
    BROWSER_DEFAULT_WEBGL: number;
    INVALID_ENUM: number;
    SCISSOR_TEST: number;
    LINE_STRIP: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    STENCIL_FUNC: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    RENDERBUFFER_HEIGHT: number;
    TEXTURE8: number;
    TRIANGLES: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    STENCIL_BACK_VALUE_MASK: number;
    TEXTURE25: number;
    RENDERBUFFER: number;
    LEQUAL: number;
    TEXTURE1: number;
    STENCIL_INDEX8: number;
    FUNC_ADD: number;
    STENCIL_FAIL: number;
    BLEND_SRC_ALPHA: number;
    BOOL: number;
    ALPHA_BITS: number;
    LOW_INT: number;
    TEXTURE10: number;
    SRC_COLOR: number;
    MAX_VARYING_VECTORS: number;
    BLEND_DST_RGB: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    STENCIL_INDEX: number;
    TEXTURE_BINDING_2D: number;
    MEDIUM_INT: number;
    SHADER_TYPE: number;
    POLYGON_OFFSET_FILL: number;
    DYNAMIC_DRAW: number;
    TEXTURE4: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STREAM_DRAW: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    TEXTURE17: number;
    TRIANGLE_FAN: number;
    UNPACK_ALIGNMENT: number;
    CURRENT_PROGRAM: number;
    LINES: number;
    INVALID_OPERATION: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    LINEAR_MIPMAP_NEAREST: number;
    CLAMP_TO_EDGE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    TEXTURE_WRAP_S: number;
    ELEMENT_ARRAY_BUFFER: number;
    UNSIGNED_SHORT_5_6_5: number;
    ACTIVE_UNIFORMS: number;
    FLOAT_VEC3: number;
    NO_ERROR: number;
    ATTACHED_SHADERS: number;
    DEPTH_ATTACHMENT: number;
    TEXTURE11: number;
    STENCIL_TEST: number;
    ONE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    STATIC_DRAW: number;
    GEQUAL: number;
    BOOL_VEC4: number;
    COLOR_ATTACHMENT0: number;
    PACK_ALIGNMENT: number;
    MAX_TEXTURE_SIZE: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    CULL_FACE_MODE: number;
    TEXTURE16: number;
    STENCIL_BACK_WRITEMASK: number;
    SRC_ALPHA: number;
    UNSIGNED_SHORT: number;
    TEXTURE21: number;
    FUNC_REVERSE_SUBTRACT: number;
    SHADING_LANGUAGE_VERSION: number;
    EQUAL: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    BOOL_VEC3: number;
    SAMPLER_2D: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    STENCIL_VALUE_MASK: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    ARRAY_BUFFER: number;
    DEPTH_RANGE: number;
    NICEST: number;
    ACTIVE_ATTRIBUTES: number;
    NEVER: number;
    FLOAT_VEC4: number;
    CURRENT_VERTEX_ATTRIB: number;
    STENCIL_PASS_DEPTH_PASS: number;
    INVERT: number;
    LINK_STATUS: number;
    RGB: number;
    INT_VEC4: number;
    TEXTURE2: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    MEDIUM_FLOAT: number;
    SRC_ALPHA_SATURATE: number;
    BUFFER_USAGE: number;
    SHORT: number;
    NONE: number;
    UNSIGNED_BYTE: number;
    INT: number;
    SUBPIXEL_BITS: number;
    KEEP: number;
    SAMPLES: number;
    FRAGMENT_SHADER: number;
    LINE_WIDTH: number;
    BLEND_SRC_RGB: number;
    LOW_FLOAT: number;
    VERSION: number;
}
