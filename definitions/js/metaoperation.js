// source: op.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.deskDelta.MetaOperation');
goog.provide('proto.deskDelta.MetaOperation.MetaOpType');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.deskDelta.MetaOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.deskDelta.MetaOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.deskDelta.MetaOperation.displayName = 'proto.deskDelta.MetaOperation';
}



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
proto.deskDelta.MetaOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.deskDelta.MetaOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.deskDelta.MetaOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.MetaOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaoptype: jspb.Message.getFieldWithDefault(msg, 27, 0)
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
 * @return {!proto.deskDelta.MetaOperation}
 */
proto.deskDelta.MetaOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.deskDelta.MetaOperation;
  return proto.deskDelta.MetaOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.deskDelta.MetaOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.deskDelta.MetaOperation}
 */
proto.deskDelta.MetaOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 27:
      var value = /** @type {!proto.deskDelta.MetaOperation.MetaOpType} */ (reader.readEnum());
      msg.setMetaoptype(value);
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
proto.deskDelta.MetaOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.deskDelta.MetaOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.deskDelta.MetaOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.deskDelta.MetaOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetaoptype();
  if (f !== 0.0) {
    writer.writeEnum(
      27,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.deskDelta.MetaOperation.MetaOpType = {
  TITLE: 0
};

/**
 * optional MetaOpType metaOpType = 27;
 * @return {!proto.deskDelta.MetaOperation.MetaOpType}
 */
proto.deskDelta.MetaOperation.prototype.getMetaoptype = function() {
  return /** @type {!proto.deskDelta.MetaOperation.MetaOpType} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {!proto.deskDelta.MetaOperation.MetaOpType} value
 * @return {!proto.deskDelta.MetaOperation} returns this
 */
proto.deskDelta.MetaOperation.prototype.setMetaoptype = function(value) {
  return jspb.Message.setProto3EnumField(this, 27, value);
};


