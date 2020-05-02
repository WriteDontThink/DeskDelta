// source: op.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.deskDelta.FormatOperation');
goog.provide('proto.deskDelta.FormatOperation.DataFormat');
goog.provide('proto.deskDelta.FormatOperation.FormatBoundary');
goog.provide('proto.deskDelta.FormatOperation.FormatMessageVariant');
goog.provide('proto.deskDelta.FormatOperation.FormatOpType');
goog.provide('proto.deskDelta.FormatOperation.FormatcontentCase');
goog.provide('proto.deskDelta.FormatOperation.VisualFormat');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.deskDelta.IndexBoundary');

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
proto.deskDelta.FormatOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.deskDelta.FormatOperation.oneofGroups_);
};
goog.inherits(proto.deskDelta.FormatOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deskDelta.FormatOperation.displayName = 'proto.deskDelta.FormatOperation';
}
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
proto.deskDelta.FormatOperation.DataFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.deskDelta.FormatOperation.DataFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deskDelta.FormatOperation.DataFormat.displayName = 'proto.deskDelta.FormatOperation.DataFormat';
}
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
proto.deskDelta.FormatOperation.VisualFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.deskDelta.FormatOperation.VisualFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deskDelta.FormatOperation.VisualFormat.displayName = 'proto.deskDelta.FormatOperation.VisualFormat';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.deskDelta.FormatOperation.oneofGroups_ = [[19,20]];

/**
 * @enum {number}
 */
proto.deskDelta.FormatOperation.FormatcontentCase = {
  FORMATCONTENT_NOT_SET: 0,
  DATA: 19,
  VISUAL: 20
};

/**
 * @return {proto.deskDelta.FormatOperation.FormatcontentCase}
 */
proto.deskDelta.FormatOperation.prototype.getFormatcontentCase = function() {
  return /** @type {proto.deskDelta.FormatOperation.FormatcontentCase} */(jspb.Message.computeOneofCase(this, proto.deskDelta.FormatOperation.oneofGroups_[0]));
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
proto.deskDelta.FormatOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.deskDelta.FormatOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deskDelta.FormatOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.FormatOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    formatoptype: jspb.Message.getFieldWithDefault(msg, 12, 0),
    variant: jspb.Message.getFieldWithDefault(msg, 13, 0),
    boundarytype: jspb.Message.getFieldWithDefault(msg, 14, 0),
    boundarydata: (f = msg.getBoundarydata()) && proto.deskDelta.IndexBoundary.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.deskDelta.FormatOperation.DataFormat.toObject(includeInstance, f),
    visual: (f = msg.getVisual()) && proto.deskDelta.FormatOperation.VisualFormat.toObject(includeInstance, f)
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
 * @return {!proto.deskDelta.FormatOperation}
 */
proto.deskDelta.FormatOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deskDelta.FormatOperation;
  return proto.deskDelta.FormatOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deskDelta.FormatOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deskDelta.FormatOperation}
 */
proto.deskDelta.FormatOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 12:
      var value = /** @type {!proto.deskDelta.FormatOperation.FormatOpType} */ (reader.readEnum());
      msg.setFormatoptype(value);
      break;
    case 13:
      var value = /** @type {!proto.deskDelta.FormatOperation.FormatMessageVariant} */ (reader.readEnum());
      msg.setVariant(value);
      break;
    case 14:
      var value = /** @type {!proto.deskDelta.FormatOperation.FormatBoundary} */ (reader.readEnum());
      msg.setBoundarytype(value);
      break;
    case 15:
      var value = new proto.deskDelta.IndexBoundary;
      reader.readMessage(value,proto.deskDelta.IndexBoundary.deserializeBinaryFromReader);
      msg.setBoundarydata(value);
      break;
    case 19:
      var value = new proto.deskDelta.FormatOperation.DataFormat;
      reader.readMessage(value,proto.deskDelta.FormatOperation.DataFormat.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 20:
      var value = new proto.deskDelta.FormatOperation.VisualFormat;
      reader.readMessage(value,proto.deskDelta.FormatOperation.VisualFormat.deserializeBinaryFromReader);
      msg.setVisual(value);
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
proto.deskDelta.FormatOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deskDelta.FormatOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deskDelta.FormatOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.FormatOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormatoptype();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getVariant();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getBoundarytype();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getBoundarydata();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.deskDelta.IndexBoundary.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.deskDelta.FormatOperation.DataFormat.serializeBinaryToWriter
    );
  }
  f = message.getVisual();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.deskDelta.FormatOperation.VisualFormat.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.deskDelta.FormatOperation.FormatOpType = {
  CREATE: 0,
  DELETE: 1
};

/**
 * @enum {number}
 */
proto.deskDelta.FormatOperation.FormatMessageVariant = {
  DATA: 0,
  VISUAL: 1
};

/**
 * @enum {number}
 */
proto.deskDelta.FormatOperation.FormatBoundary = {
  WORD: 0,
  PAGE: 1,
  INDEX: 2
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
proto.deskDelta.FormatOperation.DataFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.deskDelta.FormatOperation.DataFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deskDelta.FormatOperation.DataFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.FormatOperation.DataFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataid: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.deskDelta.FormatOperation.DataFormat}
 */
proto.deskDelta.FormatOperation.DataFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deskDelta.FormatOperation.DataFormat;
  return proto.deskDelta.FormatOperation.DataFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deskDelta.FormatOperation.DataFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deskDelta.FormatOperation.DataFormat}
 */
proto.deskDelta.FormatOperation.DataFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDataid(value);
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
proto.deskDelta.FormatOperation.DataFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deskDelta.FormatOperation.DataFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deskDelta.FormatOperation.DataFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.FormatOperation.DataFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataid();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
};


/**
 * optional int32 dataId = 16;
 * @return {number}
 */
proto.deskDelta.FormatOperation.DataFormat.prototype.getDataid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.deskDelta.FormatOperation.DataFormat} returns this
 */
proto.deskDelta.FormatOperation.DataFormat.prototype.setDataid = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
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
proto.deskDelta.FormatOperation.VisualFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.deskDelta.FormatOperation.VisualFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deskDelta.FormatOperation.VisualFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.FormatOperation.VisualFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    format: jspb.Message.getFieldWithDefault(msg, 17, ""),
    formatattributesMap: (f = msg.getFormatattributesMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.deskDelta.FormatOperation.VisualFormat}
 */
proto.deskDelta.FormatOperation.VisualFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deskDelta.FormatOperation.VisualFormat;
  return proto.deskDelta.FormatOperation.VisualFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deskDelta.FormatOperation.VisualFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deskDelta.FormatOperation.VisualFormat}
 */
proto.deskDelta.FormatOperation.VisualFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 18:
      var value = msg.getFormatattributesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.deskDelta.FormatOperation.VisualFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deskDelta.FormatOperation.VisualFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deskDelta.FormatOperation.VisualFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.FormatOperation.VisualFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFormatattributesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string format = 17;
 * @return {string}
 */
proto.deskDelta.FormatOperation.VisualFormat.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.deskDelta.FormatOperation.VisualFormat} returns this
 */
proto.deskDelta.FormatOperation.VisualFormat.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * map<string, string> formatAttributes = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.deskDelta.FormatOperation.VisualFormat.prototype.getFormatattributesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.deskDelta.FormatOperation.VisualFormat} returns this
 */
proto.deskDelta.FormatOperation.VisualFormat.prototype.clearFormatattributesMap = function() {
  this.getFormatattributesMap().clear();
  return this;};


/**
 * optional FormatOpType formatOpType = 12;
 * @return {!proto.deskDelta.FormatOperation.FormatOpType}
 */
proto.deskDelta.FormatOperation.prototype.getFormatoptype = function() {
  return /** @type {!proto.deskDelta.FormatOperation.FormatOpType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.deskDelta.FormatOperation.FormatOpType} value
 * @return {!proto.deskDelta.FormatOperation} returns this
 */
proto.deskDelta.FormatOperation.prototype.setFormatoptype = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional FormatMessageVariant variant = 13;
 * @return {!proto.deskDelta.FormatOperation.FormatMessageVariant}
 */
proto.deskDelta.FormatOperation.prototype.getVariant = function() {
  return /** @type {!proto.deskDelta.FormatOperation.FormatMessageVariant} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.deskDelta.FormatOperation.FormatMessageVariant} value
 * @return {!proto.deskDelta.FormatOperation} returns this
 */
proto.deskDelta.FormatOperation.prototype.setVariant = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional FormatBoundary boundaryType = 14;
 * @return {!proto.deskDelta.FormatOperation.FormatBoundary}
 */
proto.deskDelta.FormatOperation.prototype.getBoundarytype = function() {
  return /** @type {!proto.deskDelta.FormatOperation.FormatBoundary} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.deskDelta.FormatOperation.FormatBoundary} value
 * @return {!proto.deskDelta.FormatOperation} returns this
 */
proto.deskDelta.FormatOperation.prototype.setBoundarytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional IndexBoundary boundaryData = 15;
 * @return {?proto.deskDelta.IndexBoundary}
 */
proto.deskDelta.FormatOperation.prototype.getBoundarydata = function() {
  return /** @type{?proto.deskDelta.IndexBoundary} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.IndexBoundary, 15));
};


/**
 * @param {?proto.deskDelta.IndexBoundary|undefined} value
 * @return {!proto.deskDelta.FormatOperation} returns this
*/
proto.deskDelta.FormatOperation.prototype.setBoundarydata = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.FormatOperation} returns this
 */
proto.deskDelta.FormatOperation.prototype.clearBoundarydata = function() {
  return this.setBoundarydata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.FormatOperation.prototype.hasBoundarydata = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional DataFormat data = 19;
 * @return {?proto.deskDelta.FormatOperation.DataFormat}
 */
proto.deskDelta.FormatOperation.prototype.getData = function() {
  return /** @type{?proto.deskDelta.FormatOperation.DataFormat} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.FormatOperation.DataFormat, 19));
};


/**
 * @param {?proto.deskDelta.FormatOperation.DataFormat|undefined} value
 * @return {!proto.deskDelta.FormatOperation} returns this
*/
proto.deskDelta.FormatOperation.prototype.setData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.deskDelta.FormatOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.FormatOperation} returns this
 */
proto.deskDelta.FormatOperation.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.FormatOperation.prototype.hasData = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional VisualFormat visual = 20;
 * @return {?proto.deskDelta.FormatOperation.VisualFormat}
 */
proto.deskDelta.FormatOperation.prototype.getVisual = function() {
  return /** @type{?proto.deskDelta.FormatOperation.VisualFormat} */ (
    jspb.Message.getWrapperField(this, proto.deskDelta.FormatOperation.VisualFormat, 20));
};


/**
 * @param {?proto.deskDelta.FormatOperation.VisualFormat|undefined} value
 * @return {!proto.deskDelta.FormatOperation} returns this
*/
proto.deskDelta.FormatOperation.prototype.setVisual = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.deskDelta.FormatOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.deskDelta.FormatOperation} returns this
 */
proto.deskDelta.FormatOperation.prototype.clearVisual = function() {
  return this.setVisual(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.deskDelta.FormatOperation.prototype.hasVisual = function() {
  return jspb.Message.getField(this, 20) != null;
};


