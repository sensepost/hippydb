//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.AdjacencyType = {
  'CONJUNCTIVE' : 0,
  'DISJUNCTIVE' : 1
};
ttypes.NodeType = {
  'OPERATOR' : 0,
  'STAGE' : 1
};
ttypes.OperatorType = {
  'JOIN' : 0,
  'MAPJOIN' : 1,
  'EXTRACT' : 2,
  'FILTER' : 3,
  'FORWARD' : 4,
  'GROUPBY' : 5,
  'LIMIT' : 6,
  'SCRIPT' : 7,
  'SELECT' : 8,
  'TABLESCAN' : 9,
  'FILESINK' : 10,
  'REDUCESINK' : 11,
  'UNION' : 12,
  'UDTF' : 13,
  'LATERALVIEWJOIN' : 14,
  'LATERALVIEWFORWARD' : 15,
  'HASHTABLESINK' : 16,
  'HASHTABLEDUMMY' : 17
};
ttypes.TaskType = {
  'MAP' : 0,
  'REDUCE' : 1,
  'OTHER' : 2
};
ttypes.StageType = {
  'CONDITIONAL' : 0,
  'COPY' : 1,
  'DDL' : 2,
  'MAPRED' : 3,
  'EXPLAIN' : 4,
  'FETCH' : 5,
  'FUNC' : 6,
  'MAPREDLOCAL' : 7,
  'MOVE' : 8,
  'STATS' : 9
};
Adjacency = module.exports.Adjacency = function(args) {
  this.node = null;
  this.children = null;
  this.adjacencyType = null;
  if (args) {
    if (args.node !== undefined) {
      this.node = args.node;
    }
    if (args.children !== undefined) {
      this.children = args.children;
    }
    if (args.adjacencyType !== undefined) {
      this.adjacencyType = args.adjacencyType;
    }
  }
};
Adjacency.prototype = {};
Adjacency.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.node = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.children = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.children.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.adjacencyType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Adjacency.prototype.write = function(output) {
  output.writeStructBegin('Adjacency');
  if (this.node !== null && this.node !== undefined) {
    output.writeFieldBegin('node', Thrift.Type.STRING, 1);
    output.writeString(this.node);
    output.writeFieldEnd();
  }
  if (this.children !== null && this.children !== undefined) {
    output.writeFieldBegin('children', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.children.length);
    for (var iter7 in this.children)
    {
      if (this.children.hasOwnProperty(iter7))
      {
        iter7 = this.children[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.adjacencyType !== null && this.adjacencyType !== undefined) {
    output.writeFieldBegin('adjacencyType', Thrift.Type.I32, 3);
    output.writeI32(this.adjacencyType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Graph = module.exports.Graph = function(args) {
  this.nodeType = null;
  this.roots = null;
  this.adjacencyList = null;
  if (args) {
    if (args.nodeType !== undefined) {
      this.nodeType = args.nodeType;
    }
    if (args.roots !== undefined) {
      this.roots = args.roots;
    }
    if (args.adjacencyList !== undefined) {
      this.adjacencyList = args.adjacencyList;
    }
  }
};
Graph.prototype = {};
Graph.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.nodeType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.roots = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.roots.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size15 = 0;
        var _rtmp319;
        this.adjacencyList = [];
        var _etype18 = 0;
        _rtmp319 = input.readListBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = new ttypes.Adjacency();
          elem21.read(input);
          this.adjacencyList.push(elem21);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Graph.prototype.write = function(output) {
  output.writeStructBegin('Graph');
  if (this.nodeType !== null && this.nodeType !== undefined) {
    output.writeFieldBegin('nodeType', Thrift.Type.I32, 1);
    output.writeI32(this.nodeType);
    output.writeFieldEnd();
  }
  if (this.roots !== null && this.roots !== undefined) {
    output.writeFieldBegin('roots', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.roots.length);
    for (var iter22 in this.roots)
    {
      if (this.roots.hasOwnProperty(iter22))
      {
        iter22 = this.roots[iter22];
        output.writeString(iter22);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.adjacencyList !== null && this.adjacencyList !== undefined) {
    output.writeFieldBegin('adjacencyList', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.adjacencyList.length);
    for (var iter23 in this.adjacencyList)
    {
      if (this.adjacencyList.hasOwnProperty(iter23))
      {
        iter23 = this.adjacencyList[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Operator = module.exports.Operator = function(args) {
  this.operatorId = null;
  this.operatorType = null;
  this.operatorAttributes = null;
  this.operatorCounters = null;
  this.done = null;
  this.started = null;
  if (args) {
    if (args.operatorId !== undefined) {
      this.operatorId = args.operatorId;
    }
    if (args.operatorType !== undefined) {
      this.operatorType = args.operatorType;
    }
    if (args.operatorAttributes !== undefined) {
      this.operatorAttributes = args.operatorAttributes;
    }
    if (args.operatorCounters !== undefined) {
      this.operatorCounters = args.operatorCounters;
    }
    if (args.done !== undefined) {
      this.done = args.done;
    }
    if (args.started !== undefined) {
      this.started = args.started;
    }
  }
};
Operator.prototype = {};
Operator.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.operatorId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.operatorType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size24 = 0;
        var _rtmp328;
        this.operatorAttributes = {};
        var _ktype25 = 0;
        var _vtype26 = 0;
        _rtmp328 = input.readMapBegin();
        _ktype25 = _rtmp328.ktype;
        _vtype26 = _rtmp328.vtype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var key30 = null;
          var val31 = null;
          key30 = input.readString();
          val31 = input.readString();
          this.operatorAttributes[key30] = val31;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size32 = 0;
        var _rtmp336;
        this.operatorCounters = {};
        var _ktype33 = 0;
        var _vtype34 = 0;
        _rtmp336 = input.readMapBegin();
        _ktype33 = _rtmp336.ktype;
        _vtype34 = _rtmp336.vtype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var key38 = null;
          var val39 = null;
          key38 = input.readString();
          val39 = input.readI64();
          this.operatorCounters[key38] = val39;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.done = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BOOL) {
        this.started = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Operator.prototype.write = function(output) {
  output.writeStructBegin('Operator');
  if (this.operatorId !== null && this.operatorId !== undefined) {
    output.writeFieldBegin('operatorId', Thrift.Type.STRING, 1);
    output.writeString(this.operatorId);
    output.writeFieldEnd();
  }
  if (this.operatorType !== null && this.operatorType !== undefined) {
    output.writeFieldBegin('operatorType', Thrift.Type.I32, 2);
    output.writeI32(this.operatorType);
    output.writeFieldEnd();
  }
  if (this.operatorAttributes !== null && this.operatorAttributes !== undefined) {
    output.writeFieldBegin('operatorAttributes', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.operatorAttributes));
    for (var kiter40 in this.operatorAttributes)
    {
      if (this.operatorAttributes.hasOwnProperty(kiter40))
      {
        var viter41 = this.operatorAttributes[kiter40];
        output.writeString(kiter40);
        output.writeString(viter41);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.operatorCounters !== null && this.operatorCounters !== undefined) {
    output.writeFieldBegin('operatorCounters', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I64, Thrift.objectLength(this.operatorCounters));
    for (var kiter42 in this.operatorCounters)
    {
      if (this.operatorCounters.hasOwnProperty(kiter42))
      {
        var viter43 = this.operatorCounters[kiter42];
        output.writeString(kiter42);
        output.writeI64(viter43);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.done !== null && this.done !== undefined) {
    output.writeFieldBegin('done', Thrift.Type.BOOL, 5);
    output.writeBool(this.done);
    output.writeFieldEnd();
  }
  if (this.started !== null && this.started !== undefined) {
    output.writeFieldBegin('started', Thrift.Type.BOOL, 6);
    output.writeBool(this.started);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Task = module.exports.Task = function(args) {
  this.taskId = null;
  this.taskType = null;
  this.taskAttributes = null;
  this.taskCounters = null;
  this.operatorGraph = null;
  this.operatorList = null;
  this.done = null;
  this.started = null;
  if (args) {
    if (args.taskId !== undefined) {
      this.taskId = args.taskId;
    }
    if (args.taskType !== undefined) {
      this.taskType = args.taskType;
    }
    if (args.taskAttributes !== undefined) {
      this.taskAttributes = args.taskAttributes;
    }
    if (args.taskCounters !== undefined) {
      this.taskCounters = args.taskCounters;
    }
    if (args.operatorGraph !== undefined) {
      this.operatorGraph = args.operatorGraph;
    }
    if (args.operatorList !== undefined) {
      this.operatorList = args.operatorList;
    }
    if (args.done !== undefined) {
      this.done = args.done;
    }
    if (args.started !== undefined) {
      this.started = args.started;
    }
  }
};
Task.prototype = {};
Task.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.taskId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.taskType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size44 = 0;
        var _rtmp348;
        this.taskAttributes = {};
        var _ktype45 = 0;
        var _vtype46 = 0;
        _rtmp348 = input.readMapBegin();
        _ktype45 = _rtmp348.ktype;
        _vtype46 = _rtmp348.vtype;
        _size44 = _rtmp348.size;
        for (var _i49 = 0; _i49 < _size44; ++_i49)
        {
          var key50 = null;
          var val51 = null;
          key50 = input.readString();
          val51 = input.readString();
          this.taskAttributes[key50] = val51;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size52 = 0;
        var _rtmp356;
        this.taskCounters = {};
        var _ktype53 = 0;
        var _vtype54 = 0;
        _rtmp356 = input.readMapBegin();
        _ktype53 = _rtmp356.ktype;
        _vtype54 = _rtmp356.vtype;
        _size52 = _rtmp356.size;
        for (var _i57 = 0; _i57 < _size52; ++_i57)
        {
          var key58 = null;
          var val59 = null;
          key58 = input.readString();
          val59 = input.readI64();
          this.taskCounters[key58] = val59;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.operatorGraph = new ttypes.Graph();
        this.operatorGraph.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size60 = 0;
        var _rtmp364;
        this.operatorList = [];
        var _etype63 = 0;
        _rtmp364 = input.readListBegin();
        _etype63 = _rtmp364.etype;
        _size60 = _rtmp364.size;
        for (var _i65 = 0; _i65 < _size60; ++_i65)
        {
          var elem66 = null;
          elem66 = new ttypes.Operator();
          elem66.read(input);
          this.operatorList.push(elem66);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.done = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.started = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Task.prototype.write = function(output) {
  output.writeStructBegin('Task');
  if (this.taskId !== null && this.taskId !== undefined) {
    output.writeFieldBegin('taskId', Thrift.Type.STRING, 1);
    output.writeString(this.taskId);
    output.writeFieldEnd();
  }
  if (this.taskType !== null && this.taskType !== undefined) {
    output.writeFieldBegin('taskType', Thrift.Type.I32, 2);
    output.writeI32(this.taskType);
    output.writeFieldEnd();
  }
  if (this.taskAttributes !== null && this.taskAttributes !== undefined) {
    output.writeFieldBegin('taskAttributes', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.taskAttributes));
    for (var kiter67 in this.taskAttributes)
    {
      if (this.taskAttributes.hasOwnProperty(kiter67))
      {
        var viter68 = this.taskAttributes[kiter67];
        output.writeString(kiter67);
        output.writeString(viter68);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.taskCounters !== null && this.taskCounters !== undefined) {
    output.writeFieldBegin('taskCounters', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I64, Thrift.objectLength(this.taskCounters));
    for (var kiter69 in this.taskCounters)
    {
      if (this.taskCounters.hasOwnProperty(kiter69))
      {
        var viter70 = this.taskCounters[kiter69];
        output.writeString(kiter69);
        output.writeI64(viter70);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.operatorGraph !== null && this.operatorGraph !== undefined) {
    output.writeFieldBegin('operatorGraph', Thrift.Type.STRUCT, 5);
    this.operatorGraph.write(output);
    output.writeFieldEnd();
  }
  if (this.operatorList !== null && this.operatorList !== undefined) {
    output.writeFieldBegin('operatorList', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.operatorList.length);
    for (var iter71 in this.operatorList)
    {
      if (this.operatorList.hasOwnProperty(iter71))
      {
        iter71 = this.operatorList[iter71];
        iter71.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.done !== null && this.done !== undefined) {
    output.writeFieldBegin('done', Thrift.Type.BOOL, 7);
    output.writeBool(this.done);
    output.writeFieldEnd();
  }
  if (this.started !== null && this.started !== undefined) {
    output.writeFieldBegin('started', Thrift.Type.BOOL, 8);
    output.writeBool(this.started);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Stage = module.exports.Stage = function(args) {
  this.stageId = null;
  this.stageType = null;
  this.stageAttributes = null;
  this.stageCounters = null;
  this.taskList = null;
  this.done = null;
  this.started = null;
  if (args) {
    if (args.stageId !== undefined) {
      this.stageId = args.stageId;
    }
    if (args.stageType !== undefined) {
      this.stageType = args.stageType;
    }
    if (args.stageAttributes !== undefined) {
      this.stageAttributes = args.stageAttributes;
    }
    if (args.stageCounters !== undefined) {
      this.stageCounters = args.stageCounters;
    }
    if (args.taskList !== undefined) {
      this.taskList = args.taskList;
    }
    if (args.done !== undefined) {
      this.done = args.done;
    }
    if (args.started !== undefined) {
      this.started = args.started;
    }
  }
};
Stage.prototype = {};
Stage.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.stageId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.stageType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size72 = 0;
        var _rtmp376;
        this.stageAttributes = {};
        var _ktype73 = 0;
        var _vtype74 = 0;
        _rtmp376 = input.readMapBegin();
        _ktype73 = _rtmp376.ktype;
        _vtype74 = _rtmp376.vtype;
        _size72 = _rtmp376.size;
        for (var _i77 = 0; _i77 < _size72; ++_i77)
        {
          var key78 = null;
          var val79 = null;
          key78 = input.readString();
          val79 = input.readString();
          this.stageAttributes[key78] = val79;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size80 = 0;
        var _rtmp384;
        this.stageCounters = {};
        var _ktype81 = 0;
        var _vtype82 = 0;
        _rtmp384 = input.readMapBegin();
        _ktype81 = _rtmp384.ktype;
        _vtype82 = _rtmp384.vtype;
        _size80 = _rtmp384.size;
        for (var _i85 = 0; _i85 < _size80; ++_i85)
        {
          var key86 = null;
          var val87 = null;
          key86 = input.readString();
          val87 = input.readI64();
          this.stageCounters[key86] = val87;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size88 = 0;
        var _rtmp392;
        this.taskList = [];
        var _etype91 = 0;
        _rtmp392 = input.readListBegin();
        _etype91 = _rtmp392.etype;
        _size88 = _rtmp392.size;
        for (var _i93 = 0; _i93 < _size88; ++_i93)
        {
          var elem94 = null;
          elem94 = new ttypes.Task();
          elem94.read(input);
          this.taskList.push(elem94);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.BOOL) {
        this.done = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.started = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Stage.prototype.write = function(output) {
  output.writeStructBegin('Stage');
  if (this.stageId !== null && this.stageId !== undefined) {
    output.writeFieldBegin('stageId', Thrift.Type.STRING, 1);
    output.writeString(this.stageId);
    output.writeFieldEnd();
  }
  if (this.stageType !== null && this.stageType !== undefined) {
    output.writeFieldBegin('stageType', Thrift.Type.I32, 2);
    output.writeI32(this.stageType);
    output.writeFieldEnd();
  }
  if (this.stageAttributes !== null && this.stageAttributes !== undefined) {
    output.writeFieldBegin('stageAttributes', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.stageAttributes));
    for (var kiter95 in this.stageAttributes)
    {
      if (this.stageAttributes.hasOwnProperty(kiter95))
      {
        var viter96 = this.stageAttributes[kiter95];
        output.writeString(kiter95);
        output.writeString(viter96);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.stageCounters !== null && this.stageCounters !== undefined) {
    output.writeFieldBegin('stageCounters', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I64, Thrift.objectLength(this.stageCounters));
    for (var kiter97 in this.stageCounters)
    {
      if (this.stageCounters.hasOwnProperty(kiter97))
      {
        var viter98 = this.stageCounters[kiter97];
        output.writeString(kiter97);
        output.writeI64(viter98);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.taskList !== null && this.taskList !== undefined) {
    output.writeFieldBegin('taskList', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.taskList.length);
    for (var iter99 in this.taskList)
    {
      if (this.taskList.hasOwnProperty(iter99))
      {
        iter99 = this.taskList[iter99];
        iter99.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.done !== null && this.done !== undefined) {
    output.writeFieldBegin('done', Thrift.Type.BOOL, 6);
    output.writeBool(this.done);
    output.writeFieldEnd();
  }
  if (this.started !== null && this.started !== undefined) {
    output.writeFieldBegin('started', Thrift.Type.BOOL, 7);
    output.writeBool(this.started);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Query = module.exports.Query = function(args) {
  this.queryId = null;
  this.queryType = null;
  this.queryAttributes = null;
  this.queryCounters = null;
  this.stageGraph = null;
  this.stageList = null;
  this.done = null;
  this.started = null;
  if (args) {
    if (args.queryId !== undefined) {
      this.queryId = args.queryId;
    }
    if (args.queryType !== undefined) {
      this.queryType = args.queryType;
    }
    if (args.queryAttributes !== undefined) {
      this.queryAttributes = args.queryAttributes;
    }
    if (args.queryCounters !== undefined) {
      this.queryCounters = args.queryCounters;
    }
    if (args.stageGraph !== undefined) {
      this.stageGraph = args.stageGraph;
    }
    if (args.stageList !== undefined) {
      this.stageList = args.stageList;
    }
    if (args.done !== undefined) {
      this.done = args.done;
    }
    if (args.started !== undefined) {
      this.started = args.started;
    }
  }
};
Query.prototype = {};
Query.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.queryId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.queryType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size100 = 0;
        var _rtmp3104;
        this.queryAttributes = {};
        var _ktype101 = 0;
        var _vtype102 = 0;
        _rtmp3104 = input.readMapBegin();
        _ktype101 = _rtmp3104.ktype;
        _vtype102 = _rtmp3104.vtype;
        _size100 = _rtmp3104.size;
        for (var _i105 = 0; _i105 < _size100; ++_i105)
        {
          var key106 = null;
          var val107 = null;
          key106 = input.readString();
          val107 = input.readString();
          this.queryAttributes[key106] = val107;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size108 = 0;
        var _rtmp3112;
        this.queryCounters = {};
        var _ktype109 = 0;
        var _vtype110 = 0;
        _rtmp3112 = input.readMapBegin();
        _ktype109 = _rtmp3112.ktype;
        _vtype110 = _rtmp3112.vtype;
        _size108 = _rtmp3112.size;
        for (var _i113 = 0; _i113 < _size108; ++_i113)
        {
          var key114 = null;
          var val115 = null;
          key114 = input.readString();
          val115 = input.readI64();
          this.queryCounters[key114] = val115;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.stageGraph = new ttypes.Graph();
        this.stageGraph.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size116 = 0;
        var _rtmp3120;
        this.stageList = [];
        var _etype119 = 0;
        _rtmp3120 = input.readListBegin();
        _etype119 = _rtmp3120.etype;
        _size116 = _rtmp3120.size;
        for (var _i121 = 0; _i121 < _size116; ++_i121)
        {
          var elem122 = null;
          elem122 = new ttypes.Stage();
          elem122.read(input);
          this.stageList.push(elem122);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.done = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.started = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Query.prototype.write = function(output) {
  output.writeStructBegin('Query');
  if (this.queryId !== null && this.queryId !== undefined) {
    output.writeFieldBegin('queryId', Thrift.Type.STRING, 1);
    output.writeString(this.queryId);
    output.writeFieldEnd();
  }
  if (this.queryType !== null && this.queryType !== undefined) {
    output.writeFieldBegin('queryType', Thrift.Type.STRING, 2);
    output.writeString(this.queryType);
    output.writeFieldEnd();
  }
  if (this.queryAttributes !== null && this.queryAttributes !== undefined) {
    output.writeFieldBegin('queryAttributes', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.queryAttributes));
    for (var kiter123 in this.queryAttributes)
    {
      if (this.queryAttributes.hasOwnProperty(kiter123))
      {
        var viter124 = this.queryAttributes[kiter123];
        output.writeString(kiter123);
        output.writeString(viter124);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.queryCounters !== null && this.queryCounters !== undefined) {
    output.writeFieldBegin('queryCounters', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.I64, Thrift.objectLength(this.queryCounters));
    for (var kiter125 in this.queryCounters)
    {
      if (this.queryCounters.hasOwnProperty(kiter125))
      {
        var viter126 = this.queryCounters[kiter125];
        output.writeString(kiter125);
        output.writeI64(viter126);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.stageGraph !== null && this.stageGraph !== undefined) {
    output.writeFieldBegin('stageGraph', Thrift.Type.STRUCT, 5);
    this.stageGraph.write(output);
    output.writeFieldEnd();
  }
  if (this.stageList !== null && this.stageList !== undefined) {
    output.writeFieldBegin('stageList', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.stageList.length);
    for (var iter127 in this.stageList)
    {
      if (this.stageList.hasOwnProperty(iter127))
      {
        iter127 = this.stageList[iter127];
        iter127.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.done !== null && this.done !== undefined) {
    output.writeFieldBegin('done', Thrift.Type.BOOL, 7);
    output.writeBool(this.done);
    output.writeFieldEnd();
  }
  if (this.started !== null && this.started !== undefined) {
    output.writeFieldBegin('started', Thrift.Type.BOOL, 8);
    output.writeBool(this.started);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

QueryPlan = module.exports.QueryPlan = function(args) {
  this.queries = null;
  this.done = null;
  this.started = null;
  if (args) {
    if (args.queries !== undefined) {
      this.queries = args.queries;
    }
    if (args.done !== undefined) {
      this.done = args.done;
    }
    if (args.started !== undefined) {
      this.started = args.started;
    }
  }
};
QueryPlan.prototype = {};
QueryPlan.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size128 = 0;
        var _rtmp3132;
        this.queries = [];
        var _etype131 = 0;
        _rtmp3132 = input.readListBegin();
        _etype131 = _rtmp3132.etype;
        _size128 = _rtmp3132.size;
        for (var _i133 = 0; _i133 < _size128; ++_i133)
        {
          var elem134 = null;
          elem134 = new ttypes.Query();
          elem134.read(input);
          this.queries.push(elem134);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.done = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.started = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

QueryPlan.prototype.write = function(output) {
  output.writeStructBegin('QueryPlan');
  if (this.queries !== null && this.queries !== undefined) {
    output.writeFieldBegin('queries', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.queries.length);
    for (var iter135 in this.queries)
    {
      if (this.queries.hasOwnProperty(iter135))
      {
        iter135 = this.queries[iter135];
        iter135.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.done !== null && this.done !== undefined) {
    output.writeFieldBegin('done', Thrift.Type.BOOL, 2);
    output.writeBool(this.done);
    output.writeFieldEnd();
  }
  if (this.started !== null && this.started !== undefined) {
    output.writeFieldBegin('started', Thrift.Type.BOOL, 3);
    output.writeBool(this.started);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

