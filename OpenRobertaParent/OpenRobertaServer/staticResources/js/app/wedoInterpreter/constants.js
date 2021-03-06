define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ADD = "ADD";
    exports.AMBIENTLIGHT = "ambientlight";
    exports.ANALOG = "analog";
    exports.AND = "AND";
    exports.ANGLE = "angle";
    exports.ANIMATION = "animation";
    exports.ANY = "ANY";
    exports.ARG1 = "arg1";
    exports.ARG2 = "arg2";
    exports.ASSIGN_METHOD_PARAMETER_STMT = "AssignMethodParameter";
    exports.ASSIGN_STMT = "AssignStmt";
    exports.AT1 = "at1";
    exports.AT2 = "at2";
    exports.AVERAGE = "average";
    exports.BACKWARD = "BACKWARD";
    exports.BACK = "BACK";
    exports.BINARY = "Binary";
    exports.BOOLEAN = "BOOLEAN";
    exports.BOOL_CONST = "BOOL_CONST";
    exports.BREAK = "break";
    exports.BRIGHTNESS = "brightness";
    exports.BUTTONS = "buttons";
    exports.BUTTON_A = "A";
    exports.BUTTON_B = "B";
    exports.CHARACTER = "character";
    exports.CLEAR_DISPLAY_ACTION = "ClearDisplay";
    exports.COLOR = "color";
    exports.COLOR_CONST = "COLOR_CONST";
    exports.CONDITIONAL = "conditional";
    exports.COLOUR = "colorValue";
    exports.COMPASS = "compass";
    exports.CONTINUE = "continue";
    exports.CREATE_DEBUG_ACTION = "CreateDebugAction";
    exports.CREATE_LISTS_GET_INDEX = "createListsGetIndex";
    exports.CREATE_LISTS_GET_INDEX_STMT = "createListsGetIndexStmt";
    exports.CREATE_LISTS_GET_SUBLIST = "createGetSubList";
    exports.CREATE_LISTS_SET_INDEX = "createListsSetIndex";
    exports.CREATE_LIST_FIND_ITEM = "createListFindItem";
    exports.CREATE_LIST_IS_EMPTY = "isListEmpty";
    exports.CREATE_LIST_LENGTH = "listLength";
    exports.CREATE_LIST_WITH_ITEM = "createCreateListWithItem";
    exports.CURVE_ACTION = "CurveAction";
    exports.DEGREE = "DEGREE";
    exports.DIGITAL = "digital";
    exports.DIRECTION = "direction";
    exports.DISPLAY_GET_BRIGHTNESS_ACTION = "displayGetBrightnessAction";
    exports.DISPLAY_GET_PIXEL_ACTION = "displayGetPixelAction";
    exports.DISPLAY_IMAGE_ACTION = "DisplayImageAction";
    exports.DISPLAY_SET_BRIGHTNESS_ACTION = "displaySetBrightnessAction";
    exports.DISPLAY_SET_PIXEL_ACTION = "displaySetPixelAction";
    exports.DISPLAY_TEXT_ACTION = "displayTextAction";
    exports.DISTANCE = "distance";
    exports.DIVIDE = "DIVIDE";
    exports.DOUBLE_FLASH = "DOUBLE_FLASH";
    exports.DOWN = "DOWN";
    exports.DRIVE_ACTION = "DriveAction";
    exports.DRIVE_DIRECTION = "driveDirection";
    exports.DURATION = "duration";
    exports.EACH_COUNTER = "eachcounter";
    exports.ELSE_STMTS = "elseStmts";
    exports.ENC = 360.0 / (3.0 * Math.PI * 5.6);
    exports.ENCODER_SENSOR_RESET = "encoderSensorReset";
    exports.ENCODER_SENSOR_SAMPLE = "encoderSensorSample";
    exports.ENTER = "enter";
    exports.EQ = "EQ";
    exports.ESCAPE = "escape";
    exports.EXPR = "expr";
    exports.EXPR_LIST = "exprList";
    exports.FACE_DOWN = "face_down";
    exports.FACE_UP = "face_up";
    exports.FILE = "file";
    exports.FIRST = "first";
    exports.FLASH = "FLASH";
    exports.FLOW_CONTROL = "flowControl";
    exports.FOR = "FOR";
    exports.FOREVER = "FOREVER";
    exports.FOREWARD = "FOREWARD";
    exports.FOR_EACH = "forEach";
    exports.FREEFALL = "freefall";
    exports.FREQUENCY = "frequency";
    exports.FROM_END = "fromEnd";
    exports.FROM_START = "fromStart";
    exports.FRONT = "FRONT";
    exports.FUNCTION_DECLARATION = "functionDeclaration";
    exports.GESTURE = "gesture";
    exports.GET = "get";
    exports.GET_GYRO_SENSOR_SAMPLE = "gyroSensorSample";
    exports.GET_REMOVE = "getRemove";
    exports.GET_SAMPLE = "GetSample";
    exports.GET_VOLUME = "GetVolume";
    exports.GREEN = "GREEN";
    exports.GT = "GT";
    exports.GTE = "GTE";
    exports.GYRO = "gyro";
    exports.GYRO_SENSOR_RESET = "createResetGyroSensor";
    exports.IF_RETURN = "createMethodIfReturn";
    exports.IF_STMT = "IfStatement";
    exports.IF_TRUE_STMT = "IfTrueStatement";
    exports.IMAGE = "image";
    exports.IMAGE_CONST = "image";
    exports.IMAGE_INVERT_ACTION = "ImageInvertAction";
    exports.IMAGE_SHIFT_ACTION = "ImageShiftAction";
    exports.IN = "in";
    exports.INFRARED = "infrared";
    exports.INSERT = "insert";
    exports.ITEM = "item";
    exports.KIND = "kind";
    exports.LANGUAGE = "language";
    exports.LAST = "last";
    exports.LED_COLOR_CONST = "ledColor";
    exports.LED_ON_ACTION = "ledOnAction";
    exports.LEFT = "left";
    exports.LIGHT = "light";
    exports.LIGHT_ACTION = "lightSensorAction";
    exports.LIST = "list";
    exports.LOOP_NUMBER = "loopNumber";
    exports.LT = "LT";
    exports.LTE = "LTE";
    exports.MATH_CHANGE = "mathChange";
    exports.MATH_CONST = "createMathConstant";
    exports.MATH_ON_LIST = "createMathOnList";
    exports.MATH_PROP_FUNCT = "MathPropFunct";
    exports.MATH_CONSTRAIN_FUNCTION = "MathConstrainFunct";
    exports.MAX = "max";
    exports.MAXDIAG = 2500;
    // real Robot drives approx. 35 cm / 1 sec -> 105 pix/sec | 3pix   =  1cm
    exports.MAXPOWER = 0.351858377 * 3;
    exports.MAX_HEIGHT = 1000;
    exports.MAX_WIDTH = 2000;
    exports.MEDIAN = "median";
    exports.METHOD_CALL_RETURN = "createMethodCallReturn";
    exports.METHOD_CALL_VOID = "createMethodCallVoid";
    exports.METHOD_RETURN = "createMethodReturn";
    exports.METHOD_VOID = "createMethodVoid";
    exports.MIN = "min";
    exports.MINUS = "MINUS";
    exports.MOD = "MOD";
    exports.MODE = "mode";
    exports.MOTOR_ACTION = "motorAction";
    exports.MOTOR_DURATION = "motorDuration";
    exports.MOTOR_DURATION_VALUE = "motorDurationValue";
    exports.MOTOR_GET_POWER = "motorGetPowerAction";
    exports.MOTOR_LEFT = "C";
    exports.MOTOR_MOVE_MODE = "motorMoveMode";
    exports.MOTOR_ON_ACTION = "motorOnAction";
    exports.MOTOR_RIGHT = "B";
    exports.MOTOR_SET_POWER = "motorSetPowerAction";
    exports.MOTOR_SIDE = "motorSide";
    exports.MOTOR_STOP = "motorStop";
    exports.MOTOR_XA = "XA";
    exports.MOTOR_XAB = "XAB";
    exports.MOTOR_XB = "XB";
    exports.MULTIPLY = "MULTIPLY";
    exports.N = "n";
    exports.NAME = "name";
    exports.NAMES = "names";
    exports.NEG = "NEG";
    exports.NEQ = "NEQ";
    exports.NOOP_STMT = "createNoopStmt";
    exports.NOT = "NOT";
    exports.NO = "NO";
    exports.NULL_CONST = "null";
    exports.NUMBER = "NUMBER";
    exports.NUMERIC = "Numeric";
    exports.NUM_CONST = "NUM_CONST";
    exports.OFF = "OFF";
    exports.ON = "ON";
    exports.OP = "op";
    exports.OPS = "ops";
    exports.PROGRAM_COUNTER = "pc";
    exports.STEP = "step";
    exports.END = "end";
    exports.OPCODE = "opc";
    exports.OR = "OR";
    exports.ORANGE = "ORANGE";
    exports.PARAMETERS = "parameters";
    exports.PC = "pc";
    exports.PICTURE = "picture";
    exports.PILOT = "pilot";
    exports.PIN = "pin";
    exports.PIN_GET_VALUE_SENSOR = "createPinGetValueSensor";
    exports.PIN_TOUCH_SENSOR = "createPinTouchSensor";
    exports.PIN_WRITE_VALUE_SENSOR = "createPinWriteValueSensor";
    exports.PITCH = "pitch";
    exports.PIXEL = "pixel";
    exports.PLAY_FILE_ACTION = "PlayFileAction";
    exports.PORT = "PORT";
    exports.POSITION = "position";
    exports.POWER = "POWER";
    exports.PRESENCE = "presence";
    exports.RANDOM = "random";
    exports.RANDOM_DOUBLE = "randDouble";
    exports.RANDOM_INT = "randInt";
    exports.RATE = "rate";
    exports.RED = "red";
    exports.REMOVE = "remove";
    exports.REPEAT_STMT = "RepeatStmt";
    exports.REPEAT_STMT_CONTINUATION = "RepeatStmtCont";
    exports.RESET = "reset";
    exports.RETURN = "return";
    exports.RETURN_TYPE = "returnType";
    exports.RGB = "rgb";
    exports.RGB_COLOR_CONST = "rgbColor";
    exports.RIGHT = "right";
    exports.ROTATION = "ROTATION";
    exports.ROTATIONS = "ROTATIONS";
    exports.SAY_TEXT_ACTION = "SayTextAction";
    exports.SEEK = "presence";
    exports.SENSOR_MODE = "sensorMode";
    exports.SENSOR_TYPE = "sensorType";
    exports.SET = "set";
    exports.SET_LANGUAGE_ACTION = "SetLanguageAction";
    exports.SET_VOLUME_ACTION = "SetVolumeAction";
    exports.SHAKE = "shake";
    exports.SHOW_PICTURE_ACTION = "ShowPictureAction";
    exports.SHOW_TEXT_ACTION = "ShowTextAction";
    exports.SINGLE_FUNCTION = "SingleFunction";
    exports.SIZE = "size";
    exports.SLOT = "slot";
    exports.SOUND = "sound";
    exports.SPEED = "speed";
    exports.SPEED_L = "speedL";
    exports.SPEED_R = "speedR";
    exports.STATEMENTS = "statements";
    exports.STATUS_LIGHT_ACTION = "statusLightAction";
    exports.STD_DEV = "stdDev";
    exports.STMT_LIST = "stmtList";
    exports.STOP = "stop";
    exports.STOP_DRIVE = "stopDrive";
    exports.STRING = "STRING";
    exports.STRING_CONST = "STRING_CONST";
    exports.SUM = "sum";
    exports.TEMPERATURE = "temperature";
    exports.TERNARY_EXPR = "createTernaryExpr";
    exports.TEXT = "text";
    exports.TEXT_APPEND = "textAppend";
    exports.TEXT_JOIN = "createTextJoin";
    exports.THEN_LIST = "thenList";
    exports.THEN_STMTS = "thenStmts";
    exports.TIME = "time";
    exports.TIMER = "timer";
    exports.TIMER_SENSOR_RESET = "createResetTimer";
    exports.TIMES = "TIMES";
    exports.TONE_ACTION = "ToneAction";
    exports.TOUCH = "touch";
    exports.TRACKWIDTH = 40;
    exports.TURN_ACTION = "TurnAction";
    exports.TURN_DIRECTION = "turnDirection";
    exports.TURN_LIGHT = "turnLight";
    exports.TURN_RATIO = (40 / 3.) / 2.8;
    exports.TYPE = "type";
    exports.ULTRASONIC = "ultrasonic";
    exports.UNARY = "Unary";
    exports.UNTIL = "UNTIL";
    exports.UP = "UP";
    exports.VALUE = "value";
    exports.VALUES = "values";
    exports.VAR = "Var";
    exports.VAR_DECLARATION = "VarDeclaration";
    exports.VOLUME = "volume";
    exports.WAIT_STMT = "WaitStmt";
    exports.WAIT_TIME_STMT = "WaitTimeSTMT";
    exports.WAVE_LENGTH = 60;
    exports.WHEEL_DIAMETER = 5.6;
    exports.WHERE1 = "where1";
    exports.WHERE2 = "where2";
    exports.WHILE = "WHILE";
    exports.X = "x";
    exports.Y = "y";
});
