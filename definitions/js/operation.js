// source: op.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.deskDelta.Operation');
goog.provide('proto.deskDelta.Operation.MessageType');
goog.provide('proto.deskDelta.Operation.MessagecontentCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.deskDelta.ContentOperation');
goog.require('proto.deskDelta.CursorOperation');
goog.require('proto.deskDelta.FormatOperation');
goog.require('proto.deskDelta.MetaOperation');
goog.require('proto.deskDelta.PageOperation');
goog.require('proto.deskDelta.UserOperation');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.deskDelta.Operation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.deskDelta.Operation.oneofGroups_);
};
goog.inherits(proto.deskDelta.Operation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deskDelta.Operation.displayName = 'proto.deskDelta.Operation';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.deskDelta.Operation.oneofGroups_ = [[4,5,12,21,22,23]];

/**
 * @enum {number}
 */
proto.deskDelta.Operation.MessagecontentCase = {
  MESSAGECONTENT_NOT_SET: 0,
  CURSOROP: 4,
  CONTENTOP: 5,
  FORMATOP: 12,
  PAGEOP: 21,
  USEROP: 22,
  METAOP: 23
};

/**
 * @return {proto.deskDelta.Operation.MessagecontentCase}
 */
proto.deskDelta.Operation.prototype.getMessagecontentCase = function() {
  return /** @type {proto.deskDelta.Operation.MessagecontentCase} */(jspb.Message.computeOneofCase(this, proto.deskDelta.Operation.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.deskDelta.Operation.prototype.toObject = function(opt_includeInstance) {
  return proto.deskDelta.Operation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deskDelta.Operation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.Operation.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pagenum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    user: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cursorop: (f = msg.getCursorop()) && proto.deskDelta.CursorOperation.toObject(includeInstance, f),
    contentop: (f = msg.getContentop()) && proto.deskDelta.ContentOperation.toObject(includeInstance, f),
    formatop: (f = msg.getFormatop()) && proto.deskDelta.FormatOperation.toObject(includeInstance, f),
    pageop: (f = msg.getPageop()) && proto.deskDelta.PageOperation.toObject(includeInstance, f),
    userop: (f = msg.getUserop()) && proto.deskDelta.UserOperation.toObject(includeInstance, f),
    metaop: (f = msg.getMetaop()) && proto.deskDelta.MetaOperation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.deskDelta.Operation}
 */
proto.deskDelta.Operation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deskDelta.Operation;
  return proto.deskDelta.Operation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deskDelta.Operation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deskDelta.Operation}
 */
proto.deskDelta.Operation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.deskDelta.Operation.MessageType} */ (reader.readEnum());
      msg.setMessagetype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagenum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUser(value);
      break;
    case 4:
      var value = new proto.deskDelta.CursorOperation;
      reader.readMessage(value,proto.deskDelta.CursorOperation.deserializeBinaryFromReader);
      msg.setCursorop(value);
      break;
    case 5:
      var value = new proto.deskDelta.ContentOperation;
      reader.readMessage(value,proto.deskDelta.ContentOperation.deserializeBinaryFromReader);
      msg.setContentop(value);
      break;
    case 12:
      var value = new proto.deskDelta.FormatOperation;
      reader.readMessage(value,proto.deskDelta.FormatOperation.deserializeBinaryFromReader);
      msg.setFormatop(value);
      break;
    case 21:
      var value = new proto.deskDelta.PageOperation;
      reader.readMessage(value,proto.deskDelta.PageOperation.deserializeBinaryFromReader);
      msg.setPageop(value);
      break;
    case 22:
      var value = new proto.deskDelta.UserOperation;
      reader.readMessage(value,proto.deskDelta.UserOperation.deserializeBinaryFromReader);
      msg.setUserop(value);
      break;
    case 23:
      var value = new proto.deskDelta.MetaOperation;
      reader.readMessage(value,proto.deskDelta.MetaOperation.deserializeBinaryFromReader);
      msg.setMetaop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.deskDelta.Operation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deskDelta.Operation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deskDelta.Operation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.Operation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPagenum();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUser();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCursorop();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.deskDelta.CursorOperation.serializeBinaryToWriter
    );
  }
  f = message.getContentop();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.deskDelta.ContentOperation.serializeBinaryToWriter
    );
  }
  f = message.getFormatop();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.deskDelta.FormatOperation.serializeBinaryToWriter
    );
  }
  f = message.getPageop();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.deskDelta.PageOperation.serializeBinaryToWriter
    );
  }
  f = message.getUserop();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.deskDelta.UserOperation.serializeBinaryToWriter
    );
  }
  f = message.getMetaop();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.deskDelta.MetaOperation.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.deskDelta.Operation.MessageType = {
  CURSORMESSAGE: 0,
  CONTENTMESSAGE: 1,
  USERMESSAGE: 2,
  PAGEMESSAGE: 3,
  METAMESSAGE: 4,
  FORMATMESSAGE: 5
};

/**
 * optional MessageType messageType = 1;
 * @return {!proto.deskDelta.Operation.MessageType}
 */
proto.deskDelta.Operation.prototype.getMessagetype = function() {
  return /** @type {!proto.deskDelta.Operation.MessageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.deskDelta.Operation.MessageType} value
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.setMessagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 pageNum = 2;
 * @return {number}
 */
proto.deskDelta.Operation.prototype.getPagenum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.setPagenum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 user = 3;
 * @return {number}
 */
proto.deskDelta.Operation.prototype.getUser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.setUser = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional CursorOperation cursorOp = 4;
 * @return {?proto.deskDelta.CursorOperation}
 */
proto.deskDelta.Operation.prototype.getCursorop = function() {
  return /** @type{?proto.deskDelta.CursorOperation} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.CursorOperation, 4));
};


/**
 * @param {?proto.deskDelta.CursorOperation|undefined} value
 * @return {!proto.deskDelta.Operation} returns this
*/
proto.deskDelta.Operation.prototype.setCursorop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.deskDelta.Operation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.clearCursorop = function() {
  return this.setCursorop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.Operation.prototype.hasCursorop = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ContentOperation contentOp = 5;
 * @return {?proto.deskDelta.ContentOperation}
 */
proto.deskDelta.Operation.prototype.getContentop = function() {
  return /** @type{?proto.deskDelta.ContentOperation} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.ContentOperation, 5));
};


/**
 * @param {?proto.deskDelta.ContentOperation|undefined} value
 * @return {!proto.deskDelta.Operation} returns this
*/
proto.deskDelta.Operation.prototype.setContentop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.deskDelta.Operation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.clearContentop = function() {
  return this.setContentop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.Operation.prototype.hasContentop = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional FormatOperation formatOp = 12;
 * @return {?proto.deskDelta.FormatOperation}
 */
proto.deskDelta.Operation.prototype.getFormatop = function() {
  return /** @type{?proto.deskDelta.FormatOperation} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.FormatOperation, 12));
};


/**
 * @param {?proto.deskDelta.FormatOperation|undefined} value
 * @return {!proto.deskDelta.Operation} returns this
*/
proto.deskDelta.Operation.prototype.setFormatop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.deskDelta.Operation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.clearFormatop = function() {
  return this.setFormatop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.Operation.prototype.hasFormatop = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional PageOperation pageOp = 21;
 * @return {?proto.deskDelta.PageOperation}
 */
proto.deskDelta.Operation.prototype.getPageop = function() {
  return /** @type{?proto.deskDelta.PageOperation} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.PageOperation, 21));
};


/**
 * @param {?proto.deskDelta.PageOperation|undefined} value
 * @return {!proto.deskDelta.Operation} returns this
*/
proto.deskDelta.Operation.prototype.setPageop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.deskDelta.Operation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.clearPageop = function() {
  return this.setPageop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.Operation.prototype.hasPageop = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional UserOperation userOp = 22;
 * @return {?proto.deskDelta.UserOperation}
 */
proto.deskDelta.Operation.prototype.getUserop = function() {
  return /** @type{?proto.deskDelta.UserOperation} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.UserOperation, 22));
};


/**
 * @param {?proto.deskDelta.UserOperation|undefined} value
 * @return {!proto.deskDelta.Operation} returns this
*/
proto.deskDelta.Operation.prototype.setUserop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.deskDelta.Operation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.clearUserop = function() {
  return this.setUserop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.Operation.prototype.hasUserop = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional MetaOperation metaOp = 23;
 * @return {?proto.deskDelta.MetaOperation}
 */
proto.deskDelta.Operation.prototype.getMetaop = function() {
  return /** @type{?proto.deskDelta.MetaOperation} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.MetaOperation, 23));
};


/**
 * @param {?proto.deskDelta.MetaOperation|undefined} value
 * @return {!proto.deskDelta.Operation} returns this
*/
proto.deskDelta.Operation.prototype.setMetaop = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.deskDelta.Operation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.Operation} returns this
 */
proto.deskDelta.Operation.prototype.clearMetaop = function() {
  return this.setMetaop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.Operation.prototype.hasMetaop = function() {
  return jspb.Message.getField(this, 23) != null;
};

