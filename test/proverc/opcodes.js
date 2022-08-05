module.exports = {
    0x00: 'opSTOP',
    0x01: 'opADD',
    0x02: 'opMUL',
    0x03: 'opSUB',
    0x04: 'opDIV',
    0x05: 'opSDIV',
    0x06: 'opMOD',
    0x07: 'opSMOD',
    0x08: 'opADDMOD',
    0x09: 'opMULMOD',
    0x0a: 'opEXP',
    0x0b: 'opSIGNEXTEND',
    0x10: 'opLT',
    0x11: 'opGT',
    0x12: 'opSLT',
    0x13: 'opSGT',
    0x14: 'opEQ',
    0x15: 'opISZERO',

    0x16: 'opAND',
    0x17: 'opOR',
    0x18: 'opXOR',
    0x19: 'opNOT',
    0x1a: 'opBYTE',
    0x1b: 'opSHL',
    0x1c: 'opSHR',
    0x1d: 'opSAR',

    0x20: 'opSHA3',

    0x30: 'opADDRESS',
    0x31: 'opBALANCE',
    0x32: 'opORIGIN',
    0x33: 'opCALLER',
    0x34: 'opCALLVALUE',
    0x35: 'opCALLDATALOAD',
    0x36: 'opCALLDATASIZE',
    0x37: 'opCALLDATACOPY',
    0x38: 'opCODESIZE',
    0x39: 'opCODECOPY',
    0x3a: 'opGASPRICE',
    0x3b: 'opEXTCODESIZE',
    0x3c: 'opEXTCODECOPY',
    0x3d: 'opRETURNDATASIZE',
    0x3e: 'opRETURNDATACOPY',
    0x3f: 'opEXTCODEHASH',

    0x40: 'opBLOCKHASH',
    0x41: 'opCOINBASE',
    0x42: 'opTIMESTAMP',
    0x43: 'opNUMBER',
    0x44: 'opDIFFICULTY',
    0x45: 'opGASLIMIT',
    0x46: 'opCHAINID',
    0x47: 'opSELFBALANCE',

    0x50: 'opPOP',
    0x51: 'opMLOAD',
    0x52: 'opMSTORE',
    0x53: 'opMSTORE8',
    0x54: 'opSLOAD',
    0x55: 'opSSTORE',
    0x56: 'opJUMP',
    0x57: 'opJUMPI',
    0x58: 'opPC',
    0x59: 'opMSIZE',
    0x5a: 'opGAS',
    0x5b: 'opJUMPDEST',

    0x60: 'opPUSH1',
    0x61: 'opPUSH2',
    0x62: 'opPUSH3',
    0x63: 'opPUSH4',
    0x64: 'opPUSH5',
    0x65: 'opPUSH6',
    0x66: 'opPUSH7',
    0x67: 'opPUSH8',
    0x68: 'opPUSH9',
    0x69: 'opPUSH10',
    0x6a: 'opPUSH11',
    0x6b: 'opPUSH12',
    0x6c: 'opPUSH13',
    0x6d: 'opPUSH14',
    0x6e: 'opPUSH15',
    0x6f: 'opPUSH16',
    0x70: 'opPUSH17',
    0x71: 'opPUSH18',
    0x72: 'opPUSH19',
    0x73: 'opPUSH20',
    0x74: 'opPUSH21',
    0x75: 'opPUSH22',
    0x76: 'opPUSH23',
    0x77: 'opPUSH24',
    0x78: 'opPUSH25',
    0x79: 'opPUSH26',
    0x7a: 'opPUSH27',
    0x7b: 'opPUSH28',
    0x7c: 'opPUSH29',
    0x7d: 'opPUSH30',
    0x7e: 'opPUSH31',
    0x7f: 'opPUSH32',

    0x80: 'opDUP1',
    0x81: 'opDUP2',
    0x82: 'opDUP3',
    0x83: 'opDUP4',
    0x84: 'opDUP5',
    0x85: 'opDUP6',
    0x86: 'opDUP7',
    0x87: 'opDUP8',
    0x88: 'opDUP9',
    0x89: 'opDUP10',
    0x8a: 'opDUP11',
    0x8b: 'opDUP12',
    0x8c: 'opDUP13',
    0x8d: 'opDUP14',
    0x8e: 'opDUP15',
    0x8f: 'opDUP16',

    0x90: 'opSWAP1',
    0x91: 'opSWAP2',
    0x92: 'opSWAP3',
    0x93: 'opSWAP4',
    0x94: 'opSWAP5',
    0x95: 'opSWAP6',
    0x96: 'opSWAP7',
    0x97: 'opSWAP8',
    0x98: 'opSWAP9',
    0x99: 'opSWAP10',
    0x9a: 'opSWAP11',
    0x9b: 'opSWAP12',
    0x9c: 'opSWAP13',
    0x9d: 'opSWAP14',
    0x9e: 'opSWAP15',
    0x9f: 'opSWAP16',

    0xa0: 'opLOG0',
    0xa1: 'opLOG1',
    0xa2: 'opLOG2',
    0xa3: 'opLOG3',
    0xa4: 'opLOG4',

    0xf0: 'opCREATE',
    0xf1: 'opCALL',
    0xf2: 'opCALLCODE',
    0xf3: 'opRETURN',
    0xf4: 'opDELEGATECALL',
    0xf5: 'opCREATE2',
    0xfa: 'opSTATICCALL',
    0xfd: 'opREVERT',
    0xfe: 'opINVALID',
    0xff: 'opSELFDESTRUCT',
};
