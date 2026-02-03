// Patch fs.readlink to handle EISDIR error on Windows
// This is a workaround for Next.js build issues on Windows where
// fs.readlink() is called on regular files that return EISDIR
const fs = require('fs');
const originalReadlink = fs.readlink;

fs.readlink = function(path, options, callback) {
  const cb = typeof options === 'function' ? options : callback;

  function wrappedCallback(err, link) {
    if (err && err.code === 'EISDIR') {
      return cb(null, null);
    }
    return cb(err, link);
  }

  if (typeof options === 'function') {
    return originalReadlink(path, wrappedCallback);
  }
  return originalReadlink(path, options, wrappedCallback);
};

// Also patch fs.promises.readlink
const originalReadlinkPromise = fs.promises.readlink;
fs.promises.readlink = async function(path, options) {
  try {
    return await originalReadlinkPromise(path, options);
  } catch (err) {
    if (err && err.code === 'EISDIR') {
      return null;
    }
    throw err;
  }
};
