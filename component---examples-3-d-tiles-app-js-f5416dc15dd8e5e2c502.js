(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,r){"use strict";r.r(t);r(262),r(7),r(231);var n=r(16),a=r.n(n),i=r(2),o=r.n(i),s=r(0),u=r.n(s),c=r(44),f=r(374),l=r(247),p=r(376),y={COMPOSITE:"cmpt",POINT_CLOUD:"pnts",BATCHED_3D_MODEL:"b3dm",INSTANCED_3D_MODEL:"i3dm",GEOMETRY:"geom",VECTOR:"vect"},h=(r(204),r(217)),d=r(226);function b(e,t,r){Object(h.a)(e instanceof ArrayBuffer);var n=new d.TextDecoder("utf8"),a=new Uint8Array(e,t,r);return n.decode(a)}r(244);var v,T=r(353),g=r(349),_={BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DOUBLE:5130},A=(r(31),r(296),r(245),r(246),r(228),r(232),r(219),r(297),(v={})[_.DOUBLE]=Float64Array,v[_.FLOAT]=Float32Array,v[_.UNSIGNED_SHORT]=Uint16Array,v[_.UNSIGNED_INT]=Uint32Array,v[_.UNSIGNED_BYTE]=Uint8Array,v[_.BYTE]=Int8Array,v[_.SHORT]=Int16Array,v[_.INT]=Int32Array,v),m={DOUBLE:_.DOUBLE,FLOAT:_.FLOAT,UNSIGNED_SHORT:_.UNSIGNED_SHORT,UNSIGNED_INT:_.UNSIGNED_INT,UNSIGNED_BYTE:_.UNSIGNED_BYTE,BYTE:_.BYTE,SHORT:_.SHORT,INT:_.INT},I=function(){function e(){}return e.fromTypedArray=function(e){for(var t in e=ArrayBuffer.isView(e)?e.constructor:e,A){if(A[t]===e)return t}throw new Error("Failed to convert GL type")},e.fromName=function(e){var t=m[e];if(!t)throw new Error("Failed to convert GL type");return t},e.getArrayType=function(e,t){switch(void 0===t&&(t=!1),e){case _.UNSIGNED_SHORT_5_6_5:case _.UNSIGNED_SHORT_4_4_4_4:case _.UNSIGNED_SHORT_5_5_5_1:return Uint16Array;default:var r=A[e];if(!r)throw new Error("Failed to convert GL type");return r}},e.getByteSize=function(t){return e.getArrayType(t).BYTES_PER_ELEMENT},e.validate=function(t){return Boolean(e.getArrayType(t))},e.createTypedArray=function(t,r,n,a){return void 0===n&&(n=0),void 0===a&&(a=(r.byteLength-n)/e.getByteSize(t)),new(e.getArrayType(t))(r,n,a)},e}(),E=function(){function e(e,t){this.json=e,this.buffer=t,this.featuresLength=0,this._cachedTypedArrays={}}var t=e.prototype;return t.getExtension=function(e){return this.json.extensions&&this.json.extensions[e]},t.hasProperty=function(e){return Boolean(this.json[e])},t.getGlobalProperty=function(e,t,r){void 0===t&&(t=_.UNSIGNED_INT),void 0===r&&(r=1);var n=this.json[e];return n&&Number.isFinite(n.byteOffset)?this._getTypedArrayFromBinary(e,t,r,1,n.byteOffset):n},t.getPropertyArray=function(e,t,r){var n=this.json[e];return n&&Number.isFinite(n.byteOffset)?("componentType"in n&&(t=I.fromName(n.componentType)),this._getTypedArrayFromBinary(e,t,r,this.featuresLength,n.byteOffset)):this._getTypedArrayFromArray(e,t,n)},t.getProperty=function(e,t,r,n,a){var i=this.json[e];if(!i)return i;var o=this.getPropertyArray(e,t,r);if(1===r)return o[n];for(var s=0;s<r;++s)a[s]=o[r*n+s];return a},t._getTypedArrayFromBinary=function(e,t,r,n,a){var i=this._cachedTypedArrays,o=i[e];return o||(o=I.createTypedArray(t,this.buffer.buffer,this.buffer.byteOffset+a,n*r),i[e]=o),o},t._getTypedArrayFromArray=function(e,t,r){var n=this._cachedTypedArrays,a=n[e];return a||(a=I.createTypedArray(t,r),n[e]=a),a},e}();r(19),r(14),r(11),r(222);function N(e,t){if(!e)throw new Error(t||"3d-tile loader: assertion failed.")}var w={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},O={SCALAR:function(e,t){return e[t]},VEC2:function(e,t){return[e[2*t+0],e[2*t+1]]},VEC3:function(e,t){return[e[3*t+0],e[3*t+1],e[3*t+2]]},VEC4:function(e,t){return[e[4*t+0],e[4*t+1],e[4*t+2],e[4*t+3]]},MAT2:function(e,t){return[e[4*t+0],e[4*t+1],e[4*t+2],e[4*t+3]]},MAT3:function(e,t){return[e[9*t+0],e[9*t+1],e[9*t+2],e[9*t+3],e[9*t+4],e[9*t+5],e[9*t+6],e[9*t+7],e[9*t+8]]},MAT4:function(e,t){return[e[16*t+0],e[16*t+1],e[16*t+2],e[16*t+3],e[16*t+4],e[16*t+5],e[16*t+6],e[16*t+7],e[16*t+8],e[16*t+9],e[16*t+10],e[16*t+11],e[16*t+12],e[16*t+13],e[16*t+14],e[16*t+15]]}},S={SCALAR:function(e,t,r){t[r]=e},VEC2:function(e,t,r){t[2*r+0]=e[0],t[2*r+1]=e[1]},VEC3:function(e,t,r){t[3*r+0]=e[0],t[3*r+1]=e[1],t[3*r+2]=e[2]},VEC4:function(e,t,r){t[4*r+0]=e[0],t[4*r+1]=e[1],t[4*r+2]=e[2],t[4*r+3]=e[3]},MAT2:function(e,t,r){t[4*r+0]=e[0],t[4*r+1]=e[1],t[4*r+2]=e[2],t[4*r+3]=e[3]},MAT3:function(e,t,r){t[9*r+0]=e[0],t[9*r+1]=e[1],t[9*r+2]=e[2],t[9*r+3]=e[3],t[9*r+4]=e[4],t[9*r+5]=e[5],t[9*r+6]=e[6],t[9*r+7]=e[7],t[9*r+8]=e[8],t[9*r+9]=e[9]},MAT4:function(e,t,r){t[16*r+0]=e[0],t[16*r+1]=e[1],t[16*r+2]=e[2],t[16*r+3]=e[3],t[16*r+4]=e[4],t[16*r+5]=e[5],t[16*r+6]=e[6],t[16*r+7]=e[7],t[16*r+8]=e[8],t[16*r+9]=e[9],t[16*r+10]=e[10],t[16*r+11]=e[11],t[16*r+12]=e[12],t[16*r+13]=e[13],t[16*r+14]=e[14],t[16*r+15]=e[15]}};r(298);var x=r(348),B=r.n(x),C=function(e){return void 0!==e};function P(e,t,r){if(!t)return null;var n=e.getExtension("3DTILES_batch_table_hierarchy"),a=t.HIERARCHY;return a&&(console.warn("3D Tile Parser: HIERARCHY is deprecated. Use 3DTILES_batch_table_hierarchy."),t.extensions=t.extensions||{},t.extensions["3DTILES_batch_table_hierarchy"]=a,n=a),n?function(e,t){var r,n,a,i,o=e.instancesLength,s=e.classes,u=e.classIds,c=e.parentCounts,f=e.parentIds,l=o;C(u.byteOffset)&&(u.componentType=defaultValue(u.componentType,GL.UNSIGNED_SHORT),u.type=AttributeType.SCALAR,a=getBinaryAccessor(u),B()("classIds"),u=a.createArrayBufferView(t.buffer,t.byteOffset+u.byteOffset,o));if(C(c))for(C(c.byteOffset)&&(c.componentType=defaultValue(c.componentType,GL.UNSIGNED_SHORT),c.type=AttributeType.SCALAR,a=getBinaryAccessor(c),B()("parentCounts"),c=a.createArrayBufferView(t.buffer,t.byteOffset+c.byteOffset,o)),i=new Uint16Array(o),B()("parentIdsLength"),l=0,r=0;r<o;++r)i[r]=l,l+=(B()("parentIdsLength"),c[r]);C(f)&&C(f.byteOffset)&&(f.componentType=defaultValue(f.componentType,GL.UNSIGNED_SHORT),f.type=AttributeType.SCALAR,a=getBinaryAccessor(f),B()("parentIds"),f=a.createArrayBufferView(t.buffer,t.byteOffset+f.byteOffset,l));var p=s.length;for(r=0;r<p;++r){var y=s[r].length,h=s[r].instances,d=getBinaryProperties(y,h,t);s[r].instances=combine(d,h)}var b=new Array(p).fill(0),v=new Uint16Array(o);for(r=0;r<o;++r)n=u[r],v[r]=b[n],++b[n];var T={classes:s,classIds:u,classIndexes:v,parentCounts:c,parentIndexes:i,parentIds:f};return function(e){for(var t=e.classIds.length,r=0;r<t;++r)D(e,r,stack)}(T),T}(n,r):null}function L(e,t,r){if(e){var n=e.parentCounts;return e.parentIds?r(e,t):n>0?function(e,t,r){var n=e.classIds,a=e.parentCounts,i=e.parentIds,o=e.parentIndexes,s=n.length,u=scratchVisited;u.length=Math.max(u.length,s);var c=++marker,f=scratchStack;f.length=0,f.push(t);for(;f.length>0;)if(t=f.pop(),u[t]!==c){u[t]=c;var l=r(e,t);if(C(l))return l;for(var p=a[t],y=o[t],h=0;h<p;++h){var d=i[y+h];d!==t&&f.push(d)}}return null}(e,t,r):function(e,t,r){var n=!0;for(;n;){var a=r(e,t);if(C(a))return a;var i=e.parentIds[t];n=i!==t,t=i}throw new Error("traverseHierarchySingleParent")}(e,t,r)}}function D(e,t,r){var n=e.parentCounts,a=e.parentIds,i=e.parentIndexes,o=e.classIds.length;if(C(a)){assert(t<o,"Parent index "+t+" exceeds the total number of instances: "+o),assert(-1===r.indexOf(t),"Circular dependency detected in the batch table hierarchy."),r.push(t);for(var s=C(n)?n[t]:1,u=C(n)?i[t]:t,c=0;c<s;++c){var f=a[u+c];f!==t&&D(e,f,r)}r.pop(t)}}var U=function(e){return void 0!==e},R=function(e){return e},G={HIERARCHY:!0,extensions:!0,extras:!0},k=function(){function e(e,t,r,n){for(var a in void 0===n&&(n={}),N(r>=0),this.json=e||{},this.binary=t,this.featureCount=r,this._extensions=this.json&&this.json.extensions||{},this._properties={},this.json)G[a]||(this._properties[a]=this.json[a]);this._binaryProperties=this._initializeBinaryProperties(),n["3DTILES_batch_table_hierarchy"]&&(this._hierarchy=P(this,this.json,this.binary))}var t=e.prototype;return t.getExtension=function(e){return this.json&&this.json.extensions&&this.json.extensions[e]},t.memorySizeInBytes=function(){return 0},t.isClass=function(e,t){if(this._checkBatchId(e),N("string"==typeof t,t),this._hierarchy){var r=L(this._hierarchy,e,function(e,r){var n=e.classIds[r];return e.classes[n].name===t});return U(r)}return!1},t.isExactClass=function(e,t){return N("string"==typeof t,t),this.getExactClassName(e)===t},t.getExactClassName=function(e){if(this._checkBatchId(e),this._hierarchy){var t=this._hierarchy.classIds[e];return this._hierarchy.classes[t].name}},t.hasProperty=function(e,t){return this._checkBatchId(e),N("string"==typeof t,t),U(this._properties[t])||this._hasPropertyInHierarchy(e,t)},t.getPropertyNames=function(e,t){var r;this._checkBatchId(e),(t=U(t)?t:[]).length=0;var n=Object.keys(this._properties);return(r=t).push.apply(r,n),this._hierarchy&&this._getPropertyNamesInHierarchy(e,t),t},t.getProperty=function(e,t){if(this._checkBatchId(e),N("string"==typeof t,t),this._binaryProperties){var r=this._binaryProperties[t];if(U(r))return this._getBinaryProperty(r,e)}var n=this._properties[t];if(U(n))return R(n[e]);if(this._hierarchy){var a=this._getHierarchyProperty(e,t);if(U(a))return a}},t.setProperty=function(e,t,r){var n=this.featureCount;if(this._checkBatchId(e,n),N("string"==typeof t,t),this._binaryProperties){var a=this._binaryProperties[t];if(a)return void this._setBinaryProperty(a,e,r)}if(!this._hierarchy||!this._setHierarchyProperty(this,e,t,r)){var i=this._properties[t];U(i)||(this._properties[t]=new Array(n),i=this._properties[t]),i[e]=R(r)}},t._checkBatchId=function(e){if(!(e>=0&&e<this.featureCount))throw new Error("batchId not in range [0, featureCount - 1].")},t._getBinaryProperty=function(e,t){return e.unpack(e.typedArray,t)},t._setBinaryProperty=function(e,t,r){e.pack(r,e.typedArray,t)},t._initializeBinaryProperties=function(){var e=null;for(var t in this._properties){var r=this._properties[t],n=this._initializeBinaryProperty(t,r);n&&((e=e||{})[t]=n)}return e},t._initializeBinaryProperty=function(e,t){if("byteOffset"in t){var r=t;N(this.binary,"Property "+e+" requires a batch table binary."),N(r.type,"Property "+e+" requires a type.");var n=function(e,t,r,n){var a=e.componentType;N(e.componentType);var i="string"==typeof a?I.fromName(a):a,o=w[e.type],s=O[e.type],u=S[e.type];return r+=e.byteOffset,{values:I.createTypedArray(i,t,r,o*n),type:i,size:o,unpacker:s,packer:u}}(r,this.binary.buffer,0|this.binary.byteOffset,this.featureCount);return{typedArray:n.values,componentCount:n.size,unpack:n.unpacker,pack:n.packer}}return null},t._hasPropertyInHierarchy=function(e,t){if(!this._hierarchy)return!1;var r=L(this._hierarchy,e,function(e,r){var n=e.classIds[r],a=e.classes[n].instances;return U(a[t])});return U(r)},t._getPropertyNamesInHierarchy=function(e,t){L(this._hierarchy,e,function(e,r){var n=e.classIds[r],a=e.classes[n].instances;for(var i in a)a.hasOwnProperty(i)&&-1===t.indexOf(i)&&t.push(i)})},t._getHierarchyProperty=function(e,t){var r=this;return L(this._hierarchy,e,function(e,n){var a=e.classIds[n],i=e.classes[a],o=e.classIndexes[n],s=i.instances[t];return U(s)?U(s.typedArray)?r._getBinaryProperty(s,o):R(s[o]):null})},t._setHierarchyProperty=function(e,t,r,n){var a=this,i=L(this._hierarchy,t,function(e,i){var o=e.classIds[i],s=e.classes[o],u=e.classIndexes[i],c=s.instances[r];return!!U(c)&&(N(i===t,'Inherited property "'+r+'" is read-only.'),U(c.typedArray)?a._setBinaryProperty(c,u,n):c[u]=R(n),!0)});return U(i)},e}(),F=4;function V(e,t,r){void 0===r&&(r=0);var n=new DataView(t);if(e.magic=n.getUint32(r,!0),r+=F,e.version=n.getUint32(r,!0),r+=F,e.byteLength=n.getUint32(r,!0),r+=F,1!==e.version)throw new Error("3D Tile Version "+e.version+" not supported");return r}var H=4;function j(e,t,r){var n=new DataView(t);return e.featureTableJsonByteLength=n.getUint32(r,!0),r+=H,e.featureTableBinaryByteLength=n.getUint32(r,!0),r+=H,e.batchTableJsonByteLength=n.getUint32(r,!0),r+=H,e.batchTableBinaryByteLength=n.getUint32(r,!0),r+=H}function M(e,t,r,n){return r=function(e,t,r,n){var a=e.featureTableJsonByteLength,i=e.featureTableBinaryByteLength;if(e.featureTableJson={BATCH_LENGTH:0},a>0){var o=b(t,r,a);e.featureTableJson=JSON.parse(o)}return r+=a,e.featureTableBinary=new Uint8Array(t,r,i),r+=i}(e,t,r),r=function(e,t,r,n){var a=e.batchTableJsonByteLength,i=e.batchTableBinaryByteLength;if(a>0){var o=b(t,r,a);e.batchTableJson=JSON.parse(o),r+=a,i>0&&(e.batchTableBinary=new Uint8Array(t,r,i),e.batchTableBinary=new Uint8Array(e.batchTableBinary),r+=i)}return r}(e,t,r)}function z(e,t,r,n){return r=M(e,t,r=j(e,t,r=V(e,t,r))),function(e){var t=new E(e.featureTableJson,e.featureTableBinary),r=t.getGlobalProperty("POINTS_LENGTH");if(e.featuresLength=r,t.featuresLength=r,!Number.isFinite(r))throw new Error("POINTS_LENGTH must be defined");e.rtcCenter=t.getGlobalProperty("RTC_CENTER",_.FLOAT,3),e.positions=null,e.colors=null,e.normals=null,e.batchIds=null,e.isQuantized=!1,e.isTranslucent=!1,e.isRGB565=!1,e.isOctEncoded16P=!1;var n=function(e,t){var r=null;if(!e.batchIds&&t.hasProperty("BATCH_ID")&&(e.batchIds=t.getPropertyArray("BATCH_ID",_.UNSIGNED_SHORT,1),e.batchIds)){var n=t.getGlobalProperty("BATCH_LENGTH");if(!n)throw new Error("Global property: BATCH_LENGTH must be defined when BATCH_ID is defined.");var a=e.batchTableJson,i=e.batchTableBinary;r=new k(a,i,n)}return r}(e,t);(function(e,t,r){var n,a,i,o=r&&r.getExtension("3DTILES_draco_point_compression");o&&(i=o.properties);var s=t.getExtension("3DTILES_draco_point_compression");if(s){a=s.properties;var u=s.byteOffset,c=s.byteLength;if(!a||!Number.isFinite(u)||!c)throw new Error("Draco properties, byteOffset, and byteLength must be defined");n=e.featureTableBinary.slice(u,u+c),e.hasPositions=Number.isFinite(a.POSITION),e.hasColors=Number.isFinite(a.RGB)||Number.isFinite(a.RGBA),e.hasNormals=Number.isFinite(a.NORMAL),e.hasBatchIds=Number.isFinite(a.BATCH_ID),e.isTranslucent=Number.isFinite(a.RGBA)}n&&(e.draco={buffer:n,properties:Object.assign({},a,i),featureTableProperties:a,batchTableProperties:i,dequantizeInShader:!1},function(e){var t=e.draco;if(t&&t.buffer){var r=(new g.a).decode(t.buffer),n=r.attributes.POSITION&&r.attributes.POSITION.value,a=r.attributes.COLOR_0&&r.attributes.COLOR_0.value,i=r.attributes.NORMAL&&r.attributes.NORMAL.value,o=r.attributes.BATCH_ID&&r.attributes.BATCH_ID.value,s=n&&r.attributes.POSITION.value.quantization,u=i&&r.attributes.NORMAL.value.quantization;if(s){var c=r.POSITION.data.quantization,f=c.range;e.quantizedVolumeScale=new T.a(f,f,f),e.quantizedVolumeOffset=new T.a(c.minValues),e.quantizedRange=(1<<c.quantizationBits)-1,e.isQuantizedDraco=!0}u&&(e.octEncodedRange=(1<<r.NORMAL.data.quantization.quantizationBits)-1,e.isOctEncodedDraco=!0),e.positions=n,e.colors=a,e.normals=i,e.batchIds=o,delete e.draco}}(e))})(e,t,n),function(e,t){if(!e.positions)if(t.hasProperty("POSITION"))e.positions=t.getPropertyArray("POSITION",_.FLOAT,3);else if(t.hasProperty("POSITION_QUANTIZED")){if(e.positions=t.getPropertyArray("POSITION_QUANTIZED",_.UNSIGNED_SHORT,3),e.isQuantized=!0,e.quantizedRange=65535,e.quantizedVolumeScale=t.getGlobalProperty("QUANTIZED_VOLUME_SCALE",_.FLOAT,3),!e.quantizedVolumeScale)throw new Error("QUANTIZED_VOLUME_SCALE must be defined for quantized positions.");if(e.quantizedVolumeOffset=t.getGlobalProperty("QUANTIZED_VOLUME_OFFSET",_.FLOAT,3),!e.quantizedVolumeOffset)throw new Error("QUANTIZED_VOLUME_OFFSET must be defined for quantized positions.")}if(!e.positions)throw new Error("Either POSITION or POSITION_QUANTIZED must be defined.")}(e,t),function(e,t){e.colors||(t.hasProperty("RGBA")?(e.colors=t.getPropertyArray("RGBA",_.UNSIGNED_BYTE,4),e.isTranslucent=!0):t.hasProperty("RGB")?e.colors=t.getPropertyArray("RGB",_.UNSIGNED_BYTE,3):t.hasProperty("RGB565")&&(e.colors=t.getPropertyArray("RGB565",_.UNSIGNED_SHORT,1),e.isRGB565=!0));t.hasProperty("CONSTANT_RGBA")&&(e.constantRGBA=t.getGlobalProperty("CONSTANT_RGBA",_.UNSIGNED_BYTE,4))}(e,t),function(e,t){e.normals||(t.hasProperty("NORMAL")?e.normals=t.getPropertyArray("NORMAL",_.FLOAT,3):t.hasProperty("NORMAL_OCT16P")&&(e.normals=t.getPropertyArray("NORMAL_OCT16P",_.UNSIGNED_BYTE,2),e.isOctEncoded16P=!0))}(e,t)}(e),r}function Y(e,t,r){var n=e.byteOffset+e.byteLength-r;if(0===n)throw new Error("glTF byte length must be greater than 0.");if(r%4==0)e.gltfView=new Uint8Array(t,r,n);else{console.warn(e.type+": embedded glb is not aligned to a 4-byte boundary.");var a=new Uint8Array(t);e.gltfView=new Uint8Array(a.subarray(r,r+n))}return e.byteOffset+e.byteLength}function q(e,t,r,n){switch(void 0===t&&(t=0),void 0===r&&(r={}),void 0===n&&(n={}),n.byteOffset=t,n.type=function(e,t){void 0===t&&(t=0);var r=new DataView(e);return""+String.fromCharCode(r.getUint8(t+0))+String.fromCharCode(r.getUint8(t+1))+String.fromCharCode(r.getUint8(t+2))+String.fromCharCode(r.getUint8(t+3))}(e,t),n.type){case y.COMPOSITE:!function(e,t,r,n,a){r=V(e,t,r);var i=new DataView(t);for(e.tilesLength=i.getUint32(r,!0),r+=4,e.tiles=[];e.tiles.length<e.tilesLength&&e.byteLength-r>12;){var o={};e.tiles.push(o),r=a(t,r,n,o)}}(n,e,t,r,q);break;case y.BATCHED_3D_MODEL:!function(e,t,r,n){r=Y(e,t,r=M(e,t,r=j(e,t,r=V(e,t,r))));var a=new E(e.featureTableJson,e.featureTableBinary);e.rtcCenter=a.getGlobalProperty("RTC_CENTER",_.FLOAT,3)}(n,e,t);break;case y.INSTANCED_3D_MODEL:!function(e,t,r,n){if(r=V(e,t,r),1!==e.version)throw new Error("Instanced 3D Model version "+e.version+" is not supported");r=j(e,t,r);var a=new DataView(t);if(e.gltfFormat=a.getUint32(r,!0),r=Y(e,r=M(e,t,r+=4)),0===e.featureTableJsonByteLength)throw new Error("i3dm parser: featureTableJsonByteLength is zero.");var i=new E(e.featureTableJson,e.featureTableBinary),o=i.getGlobalProperty("INSTANCES_LENGTH");if(i.featuresLength=o,!Number.isFinite(o))throw new Error("i3dm parser: INSTANCES_LENGTH must be defined");e.eastNorthUp=i.getGlobalProperty("EAST_NORTH_UP"),e.rtcCenter=i.getGlobalProperty("RTC_CENTER",_.FLOAT,3)}(n,e,t);break;case y.POINT_CLOUD:z(n,e,t);break;default:throw new Error("3DTileLoader: unknown type "+n.type)}return n}var J={name:"3D Tiles",extensions:["cmpt","pnts","b3dm","i3dm"],parseSync:function(e,t,r,n){return q(e,0,t)},binary:!0};var Q=r(225),Z=r(302),W=(r(80),r(9)),X=W.a.div.withConfig({displayName:"control-panel__Container",componentId:"t27rqk-0"})(["display:flex;flex-direction:column;position:absolute;top:0;right:0;max-width:320px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,0.3);padding:12px 24px;margin:20px;font-size:13px;line-height:2;outline:none;z-index:100;"]),$=W.a.select.withConfig({displayName:"control-panel__DropDown",componentId:"t27rqk-1"})(["margin-bottom:6px;"]),K=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var r=t.prototype;return r._renderByCategories=function(){var e=this.props,t=e.category,r=e.example,n=e.onChange,a=e.data,i=void 0===a?{}:a,o=Object.keys(i),s=t+"."+r;return u.a.createElement($,{value:s,onChange:function(e){var t=e.target.value.split(".");n({category:t[0],example:t[1]})}},o.map(function(e,t){var r=i[e].examples;return u.a.createElement("optgroup",{key:t,label:e},Object.keys(r).map(function(t,r){var n=e+"."+t;return u.a.createElement("option",{key:r,value:n},t)}))}))},r._renderDropped=function(){var e=this.props.droppedFile;return e?u.a.createElement("div",null,"Dropped file: ",JSON.stringify(e.name)):null},r.render=function(){return u.a.createElement(X,null,this._renderByCategories(),this._renderDropped())},t}(s.PureComponent);r(30);r.d(t,"MeshTile3DLoader",function(){return ee}),r.d(t,"default",function(){return ae}),r.d(t,"renderToDOM",function(){return ie});var ee={name:"3D Tile Pointloud",extensions:["pnts"],parseSync:function(e,t,r,n){return J.parseSync(e,t,r,n)},binary:!0};Object(Q.b)(ee);var te="https://raw.githubusercontent.com/uber-web/loaders.gl/master",re={target:[0,0,0],rotationX:0,rotationOrbit:0,orbitAxis:"Y",fov:50,minZoom:-10,maxZoom:10,zoom:1},ne=new l.d(["rotationOrbit"]);var ae=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={viewState:re,featureTable:null,batchTable:null,tile:null,droppedFile:null,example:"PointCloudNormals",category:"PointCloud"},r._deckRef=null,r._onLoad=r._onLoad.bind(a()(r)),r._onViewStateChange=r._onViewStateChange.bind(a()(r)),r._rotateCamera=r._rotateCamera.bind(a()(r)),r._getColor=r._getColor.bind(a()(r)),r._loadExample=r._loadExample.bind(a()(r)),r._onSelectExample=r._onSelectExample.bind(a()(r)),r}o()(t,e);var r=t.prototype;return r.componentDidMount=function(){var e,t,r=this;e=this._deckRef.deckCanvas,t=function(e,t){r.setState({droppedFile:t,tile:null}),Object(Z.a)(e,ee).then(r._onLoad)},e.ondragover=function(e){e.dataTransfer.dropEffect="link",e.preventDefault()},e.ondrop=function(e){if(e.preventDefault(),e.dataTransfer.files&&1===e.dataTransfer.files.length){var r=e.dataTransfer.files[0],n=new Promise(function(e){var t=new window.FileReader;t.onload=function(t){return e(t.target.result)},t.readAsArrayBuffer(r)});t(n,r)}},fetch("https://raw.githubusercontent.com/uber-web/loaders.gl/master/modules/3d-tiles/test/data/index.json").then(function(e){return e.json()}).then(function(e){r.setState({data:e});var t=r.state,n=t.category,a=t.example;r._loadExample(n,a)})},r._onViewStateChange=function(e){var t=e.viewState;this.setState({viewState:t})},r._rotateCamera=function(){var e=this.state.viewState;this.setState({viewState:Object.assign({},e,{rotationOrbit:e.rotationOrbit+30,transitionDuration:600,transitionInterpolator:ne,onTransitionEnd:this._rotateCamera})})},r._loadExample=function(e,t){var r=this.state.data;if(this.setState({tile:null}),r&&e&&t){var n=r[e].examples[t],a=te+"/"+n.path+"/"+n.files[0];Object(Z.a)(a).then(this._onLoad)}},r._onLoad=function(e){var t=new E(e.featureTableJson,e.featureTableBinary),r=null;if(e.batchIds){var n=e.batchTableJson,a=e.batchTableBinary;r=new k(n,a,t.getGlobalProperty("BATCH_LENGTH"))}var i=function(e,t){void 0===t&&(t=3);for(var r=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY],n=[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],a=e.length/t,i=0;i<a;i++)r[0]=Math.min(r[0],e[i*t]),r[1]=Math.min(r[1],e[i*t+1]),r[2]=Math.min(r[2],e[i*t+2]),n[0]=Math.max(n[0],e[i*t]),n[1]=Math.max(n[1],e[i*t+1]),n[2]=Math.max(n[2],e[i*t+2]);return{mins:r,maxs:n}}(e.positions),o=i.mins,s=i.maxs,u=this.state.viewState;o&&s&&(u=Object.assign({},u,{target:[(o[0]+s[0])/2,(o[1]+s[1])/2,(o[2]+s[2])/2],zoom:Math.log2(window.innerWidth/(s[0]-o[0]))-1.5})),e.pointsCount=e.featureTableJson.POINTS_LENGTH,this.setState({tile:e,featureTable:t,batchTable:r,viewState:u},this._rotateCamera)},r._getColor=function(e,t){var r=t.index,n=t.data,a=t.target;if(!this.state.tile)return null;var i,o,s,u,c=this.state,f=c.tile,l=f.colors,p=f.isRGB565,y=f.constantRGBA,h=f.batchIds,d=c.batchTable;if(l){if(p){var b=(i=n.colors.value[r],o=31&i,s=i>>5&63,u=i>>11&31,[o=Math.round(255*o/32),s=Math.round(255*s/64),u=Math.round(255*u/32)]);a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=255}else a[0]=n.colors.value[3*r],a[1]=n.colors.value[3*r+1],a[2]=n.colors.value[3*r+2],a[3]=4===n.colors.size?n.colors[3*r+4]:255;return a}if(y)return y;if(h&&d){var v=h[r],T=d.getProperty(v,"dimensions").map(function(e){return 255*e});return[].concat(T,[255])}return[255,255,255]},r._renderLayers=function(){if(!this.state.tile)return null;var e=this.state.tile,t=e.pointsCount,r=e.positions,n=e.colors,a=e.normals;return r&&new p.a({data:{colors:{value:n,size:4},normals:{value:r,size:3},length:r.length/3},id:"3d-point-cloud-layer",coordinateSystem:l.a.IDENTITY,numInstances:t,instancePositions:r,getColor:this._getColor,getNormal:a?function(e,t){var r=t.index,n=t.data,a=t.target;return a[0]=n.normals[3*r],a[1]=n.normals[3*r+1],a[2]=n.normals[3*r+2],a}:[0,1,0],opacity:.5,pointSize:1.5})},r._onSelectExample=function(e){var t=this,r=e.category,n=e.example;this.setState({category:r,example:n},function(){t.state.data&&r&&n&&t._loadExample(r,n)})},r._renderControlPanel=function(){var e=this.state,t=e.data,r=e.example,n=e.category;return u.a.createElement(K,{data:t,category:n,example:r,onChange:this._onSelectExample})},r.render=function(){var e=this,t=this.state.viewState;return u.a.createElement(f.a,{ref:function(t){return e._deckRef=t},width:"100%",height:"100%",views:new l.e,viewState:t,controller:!0,onViewStateChange:this._onViewStateChange,layers:this._renderLayers(),parameters:{clearColor:[.07,.14,.19,1]}})},t}(s.PureComponent);function ie(e){Object(c.render)(u.a.createElement(ae,null),e)}},216:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i});r(7);var n=r(217);function a(e){return!!e&&(Array.isArray(e)&&(e=e[0]),e.parseTextSync||e.parseSync||e.parse||e.loadAndParse||e.parseStream||e.parseInBatches||e.worker)}function i(e){var t;return Object(n.a)(a(e)),Array.isArray(e)&&(t=(e=e[0])[1],e=Object.assign({},e,{options:Object.assign({},e.options,{options:t})})),e.extension&&(e.extensions=e.extensions||[e.extension],delete e.extension),Array.isArray(e.extensions)||(e.extensions=[e.extensions]),Object(n.a)(e.extensions&&e.extensions.length>0&&e.extensions[0]),e.parseTextSync&&(e.text=!0),e.text||(e.binary=!0),e}},217:function(e,t,r){"use strict";function n(e,t){if(!e)throw new Error(t||"loader assertion failed.")}r.d(t,"a",function(){return n})},225:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return o});r(14),r(11),r(243),r(75),r(76),r(19);var n=r(216),a={};function i(e){var t=e=Array.isArray(e)?e:[e],r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var o;if(r){if(i>=t.length)break;o=t[i++]}else{if((i=t.next()).done)break;o=i.value}var s=o;Object(n.b)(s);var u=s.extensions,c=Array.isArray(u),f=0;for(u=c?u:u[Symbol.iterator]();;){var l;if(c){if(f>=u.length)break;l=u[f++]}else{if((f=u.next()).done)break;l=f.value}a[l]=s}}}function o(){return Object.values(a)}},226:function(e,t){"undefined"==typeof TextDecoder||"undefined"==typeof TextEncoder?e.exports={}:e.exports={TextEncoder:TextEncoder,TextDecoder:TextDecoder}},229:function(e,t,r){"use strict";(function(e,n){r.d(t,"a",function(){return a});var a="object"!=typeof e||"[object process]"!==String(e)||e.browser;"undefined"!=typeof self&&self,"undefined"!=typeof window&&window,"undefined"!=typeof document&&document}).call(this,r(117),r(78))},231:function(e,t,r){"use strict";var n=r(8),a=r(28),i=r(35),o=r(295),s=r(58),u=r(26),c=r(84).f,f=r(122).f,l=r(21).f,p=r(346).trim,y=n.Number,h=y,d=y.prototype,b="Number"==i(r(83)(d)),v="trim"in String.prototype,T=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,i=(t=v?t.trim():p(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,u=t.slice(2),c=0,f=u.length;c<f;c++)if((o=u.charCodeAt(c))<48||o>a)return NaN;return parseInt(u,n)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(b?u(function(){d.valueOf.call(r)}):"Number"!=i(r))?o(new h(T(t)),r,y):T(t)};for(var g,_=r(22)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;_.length>A;A++)a(h,g=_[A])&&!a(y,g)&&l(y,g,f(h,g));y.prototype=d,d.constructor=y,r(27)(n,"Number",y)}},244:function(e,t,r){var n=r(20),a=r(8).isFinite;n(n.S,"Number",{isFinite:function(e){return"number"==typeof e&&a(e)}})},252:function(e,t){},253:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return a});r(204);function n(e){return e+3&-4}function a(e,t){var r=e instanceof ArrayBuffer?new Uint8Array(e):e,n=t instanceof ArrayBuffer?new Uint8Array(t):t,a=new Uint8Array(r.byteLength+n.byteLength);return a.set(r,0),a.set(n,r.byteLength),a}},254:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return s});r(30),r(11),r(204);var n=r(217),a=r(226),i=function(e){return e&&e instanceof ArrayBuffer},o=function(t){return t&&t instanceof e};function s(e){if(i(e))return e;if(o(e))return new Uint8Array(e).buffer;if(ArrayBuffer.isView(e))return e.buffer;if("string"==typeof e){var t=e;return(new a.TextEncoder).encode(t).buffer}return Object(n.a)(!1)}}).call(this,r(235).Buffer)},256:function(e,t,r){"use strict";var n=r(206),a=r.n(n),i=(r(207),r(208)),o=r.n(i),s=r(229),u=r(252);r(7),r(212),r(217);function c(e,t){return f.apply(this,arguments)}function f(){return(f=o()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}r(33);var l="",p={};function y(e){for(var t in p)if(e.startsWith(t)){var r=p[t];return e.replace(t,r)}return e+=l}function h(e,t){return d.apply(this,arguments)}function d(){return(d=o()(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=y(t),n=s.a?c:u.fetchFile,e.abrupt("return",n(t,r));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}r.d(t,"a",function(){return h})},260:function(e,t){},296:function(e,t,r){r(227)("Int32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},297:function(e,t,r){r(227)("Float64",8,function(e){return function(t,r,n){return e(this,t,r,n)}})},298:function(e,t,r){var n=r(20);n(n.P,"Array",{fill:r(279)}),r(59)("fill")},302:function(e,t,r){"use strict";var n=r(206),a=r.n(n),i=(r(207),r(208)),o=r.n(i),s=r(256),u=r(216),c=(r(75),r(76),r(19),r(79),/[^.]+$/);function f(e,t,r){void 0===e&&(e="");var n=e.match(c);if(n&&n[0]){var a=function(e,t){t=t.toLowerCase();for(var r=e,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){var i;if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var o=i;Object(u.b)(o);for(var s=o.extensions,c=Array.isArray(s),f=0,s=c?s:s[Symbol.iterator]();;){var l;if(c){if(f>=s.length)break;l=s[f++]}else{if((f=s.next()).done)break;l=f.value}var p=l;if(p.toLowerCase()===t)return o}}return null}(r,n[0]);if(a)return a}var i=function(e,t){for(var r=e,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){var i;if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var o=i;if(o.testText&&o.testText(t))return o}return null}(r,t);return i||null}r(7);var l=function(){function e(){}var t=e.prototype;return t.log=function(){},t.info=function(){},t.warn=function(){},t.error=function(){},e}(),p=r(225),y=r(217),h=(r(30),r(14),r(11),r(77),r(230),r(254)),d=new Map;function b(e,t,r){var n=function(e){var t=d.get(e);if(!t){var r=new Blob([e],{type:"application/javascript"});t=URL.createObjectURL(r),d.set(e,t)}return new Worker(t)}(e);r=function(e){null!==(e=Object.assign({},e)).log&&delete e.log;return e}(r);var a=function(e,t){return new Promise(function(r,a){n.onmessage=function(e){switch(e.data.type){case"done":r(e.data.result),n.terminate();break;case"error":a(new Error(e.data.message))}};var i=Object(h.a)(e);n.postMessage({arraybuffer:i,opts:t},[i])})};return t?a(t,r):a}var v=function(e){return"undefined"!=typeof window&&e instanceof window.Response||e.arrayBuffer&&e.json&&e.body};r(280),r(281),r(229),r(253);var T=r(226),g="Cannot convert supplied data type";function _(e){return v(e)?e.url:null}function A(e,t){if(t.text&&"string"==typeof e)return e;if(e instanceof ArrayBuffer||ArrayBuffer.isView(e)){var r=e.buffer||e;return t.text&&!t.binary?new T.TextDecoder("utf8").decode(r):r}throw new Error(g)}function m(e,t){return I.apply(this,arguments)}function I(){return(I=o()(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if(t=e.sent,n=t instanceof ArrayBuffer||ArrayBuffer.isView(t),"string"!=typeof t&&!n){e.next=6;break}return e.abrupt("return",A(t,r));case 6:if(!v(t)){e.next=15;break}if(!r.binary){e.next=13;break}return e.next=10,t.arrayBuffer();case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=t.text();case 14:return e.abrupt("return",e.t0);case 15:throw new Error(g);case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(e,t,r,n){return N.apply(this,arguments)}function N(){return(N=o()(a.a.mark(function e(t,r,n,i){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),i=i||_(t),e.next=4,m(t,r);case 4:if(t=e.sent,!r.parseTextSync||"string"!=typeof t){e.next=8;break}return n.dataType="text",e.abrupt("return",r.parseTextSync(t,n,i,r));case 8:if(!r.parseSync){e.next=10;break}return e.abrupt("return",r.parseSync(t,n,i,r));case 10:if(!r.parse){e.next=14;break}return e.next=13,r.parse(t,n,i,r);case 13:return e.abrupt("return",e.sent);case 14:if(!r.worker){e.next=18;break}return e.next=17,b(r.worker,t,n);case 17:return e.abrupt("return",e.sent);case 18:return e.abrupt("return",Object(y.a)(!1));case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e,t,r,n){return O.apply(this,arguments)}function O(){return(O=o()(a.a.mark(function e(t,r,n,i){var o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(r)||Object(u.a)(r)||(i=n,n=r,r=null),r=r||Object(p.a)(),o=Array.isArray(r)?f(i,t,r):r){e.next=5;break}return e.abrupt("return",null);case 5:return Object(u.b)(o),n=S(n,o),e.next=9,E(t,o,n,i);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e,t){return null===(e=Object.assign({},t.DEFAULT_OPTIONS,t.options,e,{dataType:"arraybuffer"})).log&&(e.log=new l),"log"in e||(e.log=console),e}function x(e,t,r){return B.apply(this,arguments)}function B(){return(B=o()(a.a.mark(function e(t,r,n){var i,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(r)||Object(u.a)(r)||(n=r,r=null),r=r||Object(p.a)(),!(i=Array.isArray(r)?f(t,null,r):r)||!i.loadAndParse){e.next=7;break}return e.next=6,i.loadAndParse(t,n);case 6:return e.abrupt("return",e.sent);case 7:if("string"!=typeof(o=t)){e.next=12;break}return e.next=11,Object(s.a)(t,n);case 11:o=e.sent;case 12:return e.abrupt("return",w(o,r,n,t));case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}r.d(t,"a",function(){return x})},346:function(e,t,r){var n=r(20),a=r(42),i=r(26),o=r(347),s="["+o+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),f=function(e,t,r){var a={},s=i(function(){return!!o[e]()||"​"!="​"[e]()}),u=a[e]=s?t(l):o[e];r&&(a[r]=u),n(n.P+n.F*s,"String",a)},l=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(c,"")),e};e.exports=f},347:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},348:function(e,t){e.exports=function(e){throw new Error('"'+e+'" is read-only')}}}]);