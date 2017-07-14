/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Taken from https://github.com/facebook/fbjs/blob/371be31b352bd927b1e50755854d357df8f7bb52/packages/fbjs/src/core/debounceCore.js
 */

/**
 * Invokes the given callback after a specified number of milliseconds have
 * elapsed, ignoring subsequent calls.
 *
 * For example, if you wanted to update a preview after the user stops typing
 * you could do the following:
 *
 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
 *
 * The returned function has a reset method which can be called to cancel a
 * pending invocation.
 *
 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
 *
 *   // later, to cancel pending calls
 *   debouncedUpdatePreview.reset();
 *
 * @param {function} func - the function to debounce
 * @param {number} wait - how long to wait in milliseconds
 * @param {*} context - optional context to invoke the function in
 * @param {?function} setTimeoutFunc - an implementation of setTimeout
 *  if nothing is passed in the default setTimeout function is used
 * @param {?function} clearTimeoutFunc - an implementation of clearTimeout
 *  if nothing is passed in the default clearTimeout function is used
 */
export default function debounce (func: Function,
                                 wait: number = 0,
                                 context: ?any = null,
                                 setTimeoutFunc: Function = setTimeout,
                                 clearTimeoutFunc: Function = clearTimeout): Function {
  let timeout: any;

  function debouncer (...args): void {
    debouncer.reset();

    const callback = function () {
      func.apply(context, args);
    };

    callback.__SMmeta = func.__SMmeta;
    timeout = setTimeoutFunc(callback, wait);
  }

  debouncer.reset = () => {
    clearTimeoutFunc(timeout);
  };

  return debouncer;
}
