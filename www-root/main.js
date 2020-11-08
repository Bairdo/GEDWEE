
const POSITION = { FIRST: 0, LAST: -1 }

// The part before the screen pages.
const FIT_HEADER = [
    0x0E, 0x10, 0x2B, 0x08, 0x09, 0x09, 0x00, 0x00, 0x2E, 0x46, 0x49, 0x54,
    0x2D, 0xA0, 0x40, 0x00, 0x00, 0x31, 0x00, 0x02, 0x00, 0x02, 0x84, 0x01,
    0x01, 0x02, 0x00, 0x28, 0x05, 0xFF, 0x41, 0x00, 0x00, 0x00, 0x00, 0x07,
    0x03, 0x04, 0x8C, 0x04, 0x04, 0x86, 0x07, 0x04, 0x86, 0x01, 0x02, 0x84,
    0x02, 0x02, 0x84, 0x05, 0x02, 0x84, 0x00, 0x01, 0x00, 0x01, 0x78, 0x80,
    0xF1, 0xE8, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x01, 0x00,
    0x13, 0x08, 0x08, 0x00, 0x03, 0x42, 0x00, 0x00, 0x07, 0x00, 0x09, 0x03,
    0x02, 0x84, 0x08, 0x02, 0x84, 0x01, 0x01, 0x02, 0x02, 0x01, 0x02, 0x05,
    0x01, 0x00, 0x07, 0x01, 0x00, 0x09, 0x01, 0x00, 0x0A, 0x01, 0x00, 0x0D,
    0x01, 0x00, 0x02, 0xF0, 0x00, 0xFF, 0xFF, 0xC1, 0xFF, 0x01, 0x01, 0xFF,
    0x01, 0x07, 0x43, 0x00, 0x00, 0x0C, 0x00, 0x0B, 0x03, 0x10, 0x07, 0x04,
    0x02, 0x84, 0x00, 0x01, 0x00, 0x01, 0x01, 0x00, 0x05, 0x01, 0x00, 0x06,
    0x01, 0x00, 0x07, 0x01, 0x02, 0x08, 0x01, 0x02, 0x09, 0x01, 0x02, 0x0A,
    0x03, 0x02, 0x0C, 0x01, 0x02, 0x03, 0x54, 0x65, 0x73, 0x74, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC8, 0x00, 0x00, 0x00, 0x2D, 0x00,
    0x02, 0x00, 0x01, 0x00, 0xFF, 0x00, 0x00, 0x00, 0x76, 0xBE, 0x08, 0x44,
    0x00, 0x00, 0x08, 0x00, 0x03, 0x02, 0x10, 0x07, 0xFE, 0x02, 0x84, 0x01,
    0x01, 0x02, 0x04, 0x48, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x30,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x61, 0x04, 0x48,
    0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x31, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x01, 0x00, 0x74, 0x04, 0x48, 0x52, 0x20, 0x5A, 0x6F,
    0x6E, 0x65, 0x20, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02,
    0x00, 0x87, 0x04, 0x48, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x33,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x9A, 0x04, 0x48,
    0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x34, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x04, 0x00, 0xAE, 0x04, 0x48, 0x52, 0x20, 0x5A, 0x6F,
    0x6E, 0x65, 0x20, 0x35, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05,
    0x00, 0xC1, 0x45, 0x00, 0x00, 0x35, 0x00, 0x03, 0x01, 0x10, 0x07, 0xFE,
    0x02, 0x84, 0x00, 0x02, 0x84, 0x05, 0x53, 0x70, 0x65, 0x65, 0x64, 0x20,
    0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x30, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00,
    0xBF, 0x01, 0x05, 0x43, 0x6C, 0x69, 0x6D, 0x62, 0x20, 0x34, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0xFC, 0x06, 0x05,
    0x43, 0x6C, 0x69, 0x6D, 0x62, 0x20, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0xF8, 0x0D, 0x05, 0x43, 0x6C, 0x69,
    0x6D, 0x62, 0x20, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x03, 0x00, 0xF4, 0x14, 0x05, 0x43, 0x6C, 0x69, 0x6D, 0x62, 0x20,
    0x31, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00,
    0xF1, 0x1B, 0x05, 0x46, 0x6C, 0x61, 0x74, 0x20, 0x33, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0xED, 0x22, 0x05,
    0x46, 0x6C, 0x61, 0x74, 0x20, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x06, 0x00, 0xE9, 0x29, 0x05, 0x46, 0x6C, 0x61,
    0x74, 0x20, 0x31, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x07, 0x00, 0xE5, 0x30, 0x05, 0x44, 0x65, 0x73, 0x63, 0x65, 0x6E,
    0x74, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00,
    0xE1, 0x37, 0x05, 0x53, 0x70, 0x72, 0x69, 0x6E, 0x74, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x09, 0x00, 0xDD, 0x3E, 0x05,
    0x4D, 0x61, 0x78, 0x20, 0x53, 0x70, 0x65, 0x65, 0x64, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x0A, 0x00, 0xDA, 0x45, 0x46, 0x00, 0x00, 0x09,
    0x00, 0x03, 0x02, 0x10, 0x07, 0xFE, 0x02, 0x84, 0x01, 0x02, 0x84, 0x06,
    0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x30, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5A, 0x00, 0x06, 0x50, 0x57, 0x52,
    0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x31, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x01, 0x00, 0x84, 0x00, 0x06, 0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F,
    0x6E, 0x65, 0x20, 0x32, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00,
    0xB4, 0x00, 0x06, 0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20,
    0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0xD8, 0x00, 0x06,
    0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x34, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0xFC, 0x00, 0x06, 0x50, 0x57, 0x52,
    0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x35, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x05, 0x00, 0x20, 0x01, 0x06, 0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F,
    0x6E, 0x65, 0x20, 0x36, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x00,
    0x68, 0x01, 0x06, 0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20,
    0x37, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0xD0, 0x07, 0x06,
    0x50, 0x57, 0x52, 0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x38, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0xFF, 0xFF, 0x06, 0x50, 0x57, 0x52,
    0x20, 0x5A, 0x6F, 0x6E, 0x65, 0x20, 0x39, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x09, 0x00, 0xFF, 0xFF, 0x47, 0x00, 0x00, 0x0A, 0x00, 0x04, 0xFE,
    0x02, 0x84, 0x02, 0x02, 0x84, 0x01, 0x01, 0x02, 0x03, 0x01, 0x02, 0x07,
    0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x01, 0x00, 0xFF, 0xFF, 0xFF,
    0xFF, 0x07, 0x02, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x03, 0x00, 0xFF,
    0xFF, 0xFF, 0xFF, 0x07, 0x04, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x05,
    0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x06, 0x00, 0xFF, 0xFF, 0xFF, 0xFF,
    0x07, 0x07, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x08, 0x00, 0xFF, 0xFF,
    0xFF, 0xFF, 0x07, 0x09, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x0A, 0x00,
    0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x0B, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07,
    0x0C, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x0D, 0x00, 0xFF, 0xFF, 0xFF,
    0xFF, 0x07, 0x0E, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x0F, 0x00, 0xFF,
    0xFF, 0xFF, 0xFF, 0x07, 0x10, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x11,
    0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x12, 0x00, 0xFF, 0xFF, 0xFF, 0xFF,
    0x07, 0x13, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x07, 0x14, 0x00, 0xFF, 0xFF,
    0xFF, 0xFF, 0x07, 0x15, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0x48, 0x00, 0x00,
    0x0D, 0x00, 0x1C, 0x04, 0x04, 0x86, 0x05, 0x04, 0x85, 0x06, 0x04, 0x85,
    0x1F, 0x04, 0x86, 0x21, 0x04, 0x86, 0xFE, 0x02, 0x84, 0x02, 0x02, 0x84,
    0x08, 0x02, 0x84, 0x0A, 0x02, 0x84, 0x13, 0x02, 0x84, 0x20, 0x02, 0x84,
    0x01, 0x01, 0x00, 0x03, 0x01, 0x00, 0x07, 0x01, 0x00, 0x09, 0x01, 0x00,
    0x0B, 0x01, 0x02, 0x0C, 0x01, 0x00, 0x0D, 0x01, 0x00, 0x0E, 0x01, 0x00,
    0x0F, 0x01, 0x00, 0x10, 0x01, 0x00, 0x11, 0x01, 0x00, 0x12, 0x01, 0x00,
    0x1B, 0x01, 0x00, 0x1E, 0x01, 0x00, 0x22, 0x01, 0x00, 0x32, 0x01, 0x00,
    0x35, 0x01, 0x00, 0x08, 0x40, 0x47, 0x0C, 0x00, 0xFF, 0xFF, 0xFF, 0x7F,
    0xFF, 0xFF, 0xFF, 0x7F, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x32, 0x1A, 0x3D, 0x05, 0xFF, 0xFF, 0x3C, 0x00, 0xFF, 0xFF,
    0x00, 0x06, 0x00, 0xFF, 0x03, 0x00, 0x01, 0x00, 0x00, 0x01, 0x01, 0x01,
    0x02, 0x00, 0xFF, 0x01, 0x01, 0x49, 0x00, 0x00, 0x0E, 0x00, 0x07, 0x06,
    0x10, 0x07, 0x07, 0x14, 0x84, 0xFE, 0x02, 0x84, 0x01, 0x01, 0x00, 0x03,
    0x01, 0x02, 0x04, 0x0A, 0x02, 0x05, 0x0A, 0x00];

const FIT_PAGES = [
    0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x38, 0x00, 0x30, 0x00, 0x06, 0x00, 0x00,
    0x00, 0x1C, 0x00, 0x1B, 0x00, 0x02, 0x00, 0x5D, 0x00, 0x5E, 0x00, 0x1E,
    0x00, 0x05, 0x00, 0x01, 0x03, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
    0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x38, 0x00, 0x30, 0x00, 0x06, 0x00,
    0x00, 0x00, 0x0D, 0x00, 0x4F, 0x00, 0x44, 0x00, 0x41, 0x00, 0x42, 0x00,
    0x40, 0x00, 0x06, 0x00, 0x01, 0x03, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06,
    0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x0C, 0x00, 0x09,
    0x00, 0x06, 0x00, 0x0A, 0x00, 0x18, 0x00, 0x32, 0x00, 0x07, 0x00, 0x38,
    0x00, 0x3A, 0x00, 0x07, 0x00, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05,
    0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x00, 0x09, 0x00,
    0x3D, 0x00, 0x58, 0x00, 0x0B, 0x00, 0x4D, 0x00, 0x38, 0x00, 0x30, 0x00,
    0x06, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x02, 0x01, 0x02, 0x03, 0x04,
    0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0xFF, 0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00, 0x06,
    0x00, 0x0D, 0x00, 0x03, 0x00, 0x05, 0x00, 0x4D, 0x00, 0x38, 0x00, 0x30,
    0x00, 0x06, 0x00, 0x6F, 0x00, 0x09, 0x00, 0x01, 0x02, 0x01, 0x02, 0x03,
    0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x00,
    0x06, 0x00, 0x38, 0x00, 0x00, 0x00, 0x09, 0x00, 0x4D, 0x00, 0x0B, 0x00,
    0x0A, 0x00, 0x3B, 0x00, 0x0C, 0x00, 0x0A, 0x00, 0x01, 0x00, 0x01, 0x02,
    0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10,
    0x01, 0x0A, 0x01, 0x0D, 0x00, 0x03, 0x00, 0x05, 0x00, 0x4D, 0x00, 0x38,
    0x00, 0x30, 0x00, 0x06, 0x00, 0x6F, 0x00, 0x0B, 0x00, 0x01, 0x02, 0x01,
    0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF, 0xFF,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x3C, 0x01, 0x3F, 0x01, 0x38, 0x00, 0x00, 0x00, 0x09, 0x00, 0x4D, 0x00,
    0x0B, 0x00, 0x0A, 0x00, 0x3B, 0x00, 0x0C, 0x00, 0x0C, 0x00, 0x00, 0x00,
    0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF, 0xFF,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x09, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x41, 0x00, 0x3F, 0x00, 0x09, 0x00, 0x06, 0x00, 0x0A, 0x00, 0x18,
    0x00, 0x32, 0x00, 0x07, 0x00, 0x38, 0x00, 0x3A, 0x00, 0x0D, 0x00, 0x01,
    0x01, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0xFF,
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF];

// The part after the screen pages.
const FIT_FOOTER = [
    0x4A, 0x00, 0x00, 0x10, 0x00, 0x04, 0x02, 0x04, 0x86, 0xFE, 0x02, 0x84,
    0x01, 0x01, 0x00, 0x03, 0x01, 0x00, 0x0A, 0xC0, 0x27, 0x09, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x0A, 0xA6, 0x74, 0x02, 0x00, 0x01, 0x00, 0x01, 0x00,
    0x0A, 0x64, 0x00, 0x00, 0x00, 0x02, 0x00, 0x02, 0x00, 0x4B, 0x00, 0x00,
    0x11, 0x00, 0x06, 0xFE, 0x02, 0x84, 0x03, 0x02, 0x84, 0x05, 0x02, 0x84,
    0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x04, 0x01, 0x00, 0x0B, 0x00, 0x00,
    0x78, 0x00, 0xB4, 0x00, 0x00, 0x00, 0x00, 0x0B, 0x01, 0x00, 0x76, 0x11,
    0xA8, 0x2B, 0x01, 0x00, 0x00, 0x0B, 0x02, 0x00, 0x3C, 0x00, 0x78, 0x00,
    0x02, 0x00, 0x00, 0x0B, 0x03, 0x00, 0xC8, 0x00, 0xF4, 0x01, 0x03, 0x00,
    0x00, 0x4C, 0x00, 0x00, 0x46, 0x00, 0x11, 0xFE, 0x02, 0x84, 0x00, 0x01,
    0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x03, 0x01, 0x00, 0x04, 0x01,
    0x00, 0x05, 0x01, 0x00, 0x06, 0x01, 0x00, 0x07, 0x01, 0x00, 0x08, 0x01,
    0x00, 0x09, 0x01, 0x00, 0x0A, 0x01, 0x00, 0x0B, 0x01, 0x00, 0x0C, 0x01,
    0x00, 0x0D, 0x01, 0x00, 0x0E, 0x01, 0x00, 0x0F, 0x01, 0x00, 0x0C, 0x00,
    0x00, 0x00, 0x02, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x01, 0x02, 0x01,
    0x01, 0x00, 0x01, 0x01, 0x01, 0x0C, 0x01, 0x00, 0x01, 0x02, 0x01, 0x01,
    0x01, 0x01, 0x00, 0x00, 0x01, 0x02, 0x01, 0x01, 0x00, 0x01, 0x01, 0x01,
    0x0C, 0x02, 0x00, 0x02, 0x02, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x01,
    0x02, 0x01, 0x01, 0x00, 0x01, 0x01, 0x01, 0x4D, 0x00, 0x00, 0x47, 0x00,
    0x06, 0xFE, 0x02, 0x84, 0x03, 0x02, 0x84, 0x00, 0x01, 0x00, 0x01, 0x01,
    0x00, 0x02, 0x01, 0x00, 0x04, 0x01, 0x00, 0x0D, 0x00, 0x00, 0xFE, 0x01,
    0x01, 0x01, 0x00, 0x00, 0x0D, 0x01, 0x00, 0xD9, 0x01, 0x00, 0x00, 0x01,
    0x00, 0x0D, 0x02, 0x00, 0x70, 0x01, 0x02, 0x01, 0x00, 0x00, 0x0D, 0x03,
    0x00, 0xF6, 0x01, 0x03, 0x01, 0x00, 0x00, 0x0D, 0x04, 0x00, 0x76, 0x01,
    0x04, 0x01, 0x00, 0x00, 0x0D, 0x05, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00,
    0x00, 0x0D, 0x06, 0x00, 0xFD, 0x01, 0x06, 0x00, 0x01, 0x00, 0x0D, 0x07,
    0x00, 0x74, 0x01, 0x07, 0x01, 0x00, 0x00, 0x0D, 0x08, 0x00, 0x74, 0x01,
    0x08, 0x01, 0x00, 0x00, 0x0D, 0x09, 0x00, 0xF5, 0x01, 0x09, 0x01, 0x00,
    0x00
];

const CHECKSUM = [0x00, 0x00];

// Min_size (0: tiny, 1: small, 2: medium (half?? screen), 3: big (full screen??))
// E.g. graphs can't be shown on the tiny ones.
const FIELDS = [{ id: 0, name: "Calories", category: "Calories", min_size: 0, unit_metric: "Cal", example_value: 0 },
{ id: 1, name: "Speed", category: "Speed", min_size: 0, unit_metric: "km/h", example_value: 25.4 },
{ id: 2, name: "Crs Pt. Dist", category: "Courses", min_size: 0, unit_metric: "km", example_value: "" },
{ id: 3, name: "Cadence", category: "Cadence", min_size: 0, unit_metric: "RPM", example_value: 104 },
{ id: 4, name: "Avg. Cad.", category: "Cadence", min_size: 0, unit_metric: "RPM", example_value: 89 },
{ id: 5, name: "Lap Cad.", category: "Cadence", min_size: 0, unit_metric: "RPM", example_value: 89 },
{ id: 6, name: "Distance", category: "Distance", min_size: 0, unit_metric: "km", example_value: 99.5 },
{ id: 7, name: "Lap Dist.", category: "Distance", min_size: 0, unit_metric: "m", example_value: 4 },
{ id: 8, name: "Naut. Dist.", category: "Hidden", min_size: 0, unit_metric: "NM", example_value: 53.7 },
{ id: 9, name: "Elevation", category: "Elevation", min_size: 0, unit_metric: "m", example_value: 650 },
{ id: 10, name: "Accuracy", category: "General", min_size: 0, unit_metric: "m", example_value: 4 },
{ id: 11, name: "Grade", category: "Elevation", min_size: 0, unit_metric: "%", example_value: 8.7 },
{ id: 12, name: "Heading", category: "General", min_size: 0, unit_metric: "", example_value: "NW" },
{ id: 13, name: "Heart Rate", category: "Heart Rate", min_size: 0, unit_metric: "bpm", example_value: 165 },
{ id: 14, name: "HR - Avg.", category: "Heart Rate", min_size: 0, unit_metric: "bpm", example_value: 140 },
{ id: 15, name: "HR - Lap", category: "Heart Rate", min_size: 0, unit_metric: "bpm", example_value: 140 },
{ id: 16, name: "HR - %Max.", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 80 },
{ id: 17, name: "HR - Avg. %Max.", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 18, name: "HR - Lap %Max", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 19, name: "HR - %HRR", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 20, name: "HR - Avg. %HRR", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 21, name: "HR - Lap %HRR", category: "Heart Rate", min_size: 0, unit_metric: "%", example_value: 79 },
{ id: 22, name: "HR Zone", category: "Heart Rate", min_size: 0, unit_metric: "", example_value: 4 },
{ id: 23, name: "HR Graph", category: "Heart Rate", min_size: 0, unit_metric: "", example_value: "" }, // TODO min size of graph
{ id: 24, name: "Laps", category: "Timer", min_size: 0, unit_metric: "", example_value: 4 },
{ id: 27, name: "Dist. to Dest", category: "Courses", min_size: 0, unit_metric: "km", example_value: 42.4 },
{ id: 28, name: "Time to Dest.", category: "Courses", min_size: 0, unit_metric: "", example_value: "01:32:58" },
{ id: 29, name: "Dist. to Next", category: "Courses", min_size: 0, unit_metric: "km", example_value: 30.5 },
{ id: 30, name: "Time to Next", category: "Courses", min_size: 0, unit_metric: "", example_value: "01:32:58" },
{ id: 31, name: "Destination", category: "TODO", min_size: 0, unit_metric: "" },
{ id: 32, name: "Next Point", category: "TODO", min_size: 0, unit_metric: "" },
{ id: 36, name: "Power", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 37, name: "Avg. Power", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 38, name: "Kilojoules", category: "Power", min_size: 0, unit_metric: "" },
{ id: 39, name: "Lap Pwr.", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 40, name: "Max Pwr", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 41, name: "Max Lap Pwr.", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 42, name: "Pwr. %FTP", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 43, name: "Pwr. Zone", category: "Power", min_size: 0, unit_metric: "" },
{ id: 45, name: "Workout Step", category: "Workouts", min_size: 0, unit_metric: "", example_value: "___" },
{ id: 49, name: "Avg. Speed", category: "Speed", min_size: 0, unit_metric: "km/h" },
{ id: 50, name: "Lap Speed", category: "Speed", min_size: 0, unit_metric: "km/h" },
{ id: 51, name: "Naut. Speed", category: "Hidden", min_size: 0, unit_metric: "nm/h" },
{ id: 53, name: "Sunrise", category: "General", min_size: 0, unit_metric: "am" },
{ id: 54, name: "Sunset", category: "General", min_size: 0, unit_metric: "pm" },
{ id: 55, name: "Elapsed Time", category: "Timer", min_size: 0, unit_metric: "" },
{ id: 56, name: "Time", category: "Timer", min_size: 0, unit_metric: "" },
{ id: 57, name: "Avg. Lap", category: "Timer", min_size: 0, unit_metric: "" },
{ id: 58, name: "Current Lap", category: "Timer", min_size: 0, unit_metric: "" },
{ id: 59, name: "Time of Day", category: "General", min_size: 0, unit_metric: "" },
{ id: 60, name: "Total Ascent", category: "Elevation", min_size: 0, unit_metric: "m" }, // TODO "M [up arrow]"
{ id: 61, name: "Total Descent", category: "Elevation", min_size: 0, unit_metric: "m" }, // TODO "M [down arrow]"
{ id: 62, name: "Dist Ahead", category: "Distance", min_size: 0, unit_metric: "km" },
{ id: 63, name: "Time Ahead", category: "Timer", min_size: 0, unit_metric: "" },
{ id: 64, name: "Cals to Go", category: "Workouts", min_size: 0, unit_metric: "cal" },
{ id: 65, name: "Dist to Go", category: "Workouts", min_size: 0, unit_metric: "km" },
{ id: 66, name: "HR to Go", category: "Workouts", min_size: 0, unit_metric: "bpm" },
{ id: 67, name: "Laps to Go", category: "Workouts", min_size: 0, unit_metric: "" },
{ id: 68, name: "Time to Go", category: "Workouts", min_size: 0, unit_metric: "" },
{ id: 77, name: "Vert. SPeed", category: "Elevation", min_size: 0, unit_metric: "m/h" }, // TODO "M/H [up arrow]"
{ id: 78, name: "Temp.", category: "General", min_size: 0, unit_metric: "c" }, // TODO "deg c"
{ id: 79, name: "Pwr. 3s", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 80, name: "Pwr. 30s", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 81, name: "NP", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 82, name: "TSS", category: "Power", min_size: 0, unit_metric: "" },
{ id: 83, name: "IF", category: "Power", min_size: 0, unit_metric: "" },
{ id: 84, name: "Last Lap Dist.", category: "Distance", min_size: 0, unit_metric: "km" },
{ id: 86, name: "Last Lap SPd.", category: "Speed", min_size: 0, unit_metric: "km/h" },
{ id: 87, name: "Last Lap", category: "Timer", min_size: 0, unit_metric: "" },
{ id: 88, name: "VS 30s", category: "Elevation", min_size: 0, unit_metric: "m/h" }, // TODO "m/h [up arrow]"
{ id: 91, name: "Max Speed", category: "Speed", min_size: 0, unit_metric: "km/h" },
{ id: 93, name: "ETA at Dest.", category: "Courses", min_size: 0, unit_metric: "" },
{ id: 94, name: "ETA at Next", category: "Courses", min_size: 0, unit_metric: "" },
{ id: 95, name: "Odometer", category: "Distance", min_size: 0, unit_metric: "km" },
{ id: 96, name: "Battery", category: "General", min_size: 0, unit_metric: "%" },
{ id: 97, name: "GPS", category: "General", min_size: 0, unit_metric: "" }, // Signal Strength
{ id: 98, name: "watts/kg", category: "Power", min_size: 0, unit_metric: "" },
{ id: 100, name: "Pwr. Last Lap", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 146, name: "Pwr. 10s", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 147, name: "NP Lap", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 148, name: "NP Last Lap", category: "Power", min_size: 0, unit_metric: "w" },
{ id: 149, name: "Balance", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 150, name: "Avg. Balance", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 151, name: "Lap Balance", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 154, name: "Vector State", category: "Hidden", min_size: 0, unit_metric: "" },
{ id: 155, name: "Vector Status", category: "Hidden", min_size: 0, unit_metric: "" },
{ id: 156, name: "Debug State", category: "Hidden", min_size: 0, unit_metric: "" },
{ id: 157, name: "Lap/Error", category: "Hidden", min_size: 0, unit_metric: "" },
{ id: 159, name: "Bal. 3s", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 160, name: "Bal. 10s", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 161, name: "Bal. 30s", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 165, name: "Last Lap HR", category: "Heart Rate", min_size: 0, unit_metric: "bpm" },
{ id: 166, name: "Vector Stat. 2", category: "Hidden", min_size: 0, unit_metric: "" },
{ id: 167, name: "Vector Stat. 3", category: "Hidden", min_size: 0, unit_metric: "" },
{ id: 176, name: "Ped. Smooth", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 177, name: "Torque Effect.", category: "Power", min_size: 0, unit_metric: "% - %" },
{ id: 178, name: "Gears", category: "Gears", min_size: 0, unit_metric: "0/0 0/0" }, // TODO Newline between 0/0 & 0/0
{ id: 179, name: "Front Gear", category: "Gears", min_size: 0, unit_metric: "0/0" },
{ id: 180, name: "Rear Gear", category: "Gears", min_size: 0, unit_metric: "0/0" },
{ id: 181, name: "Gear Battery", category: "Gears", min_size: 0, unit_metric: "" },
{ id: 182, name: "Gear Ratio", category: "Gears", min_size: 0, unit_metric: "" },
{ id: 196, name: "Est Finish", category: "Courses", min_size: 0, unit_metric: "am" },
{ id: 197, name: "Dist. Remain.", category: "Courses", min_size: 0, unit_metric: "m" },
{ id: 199, name: "HR Zone 1", category: "Heart Rate", min_size: 0, unit_metric: "" },
{ id: 200, name: "HR Zone 2", category: "Heart Rate", min_size: 0, unit_metric: "" },
{ id: 201, name: "HR Zone 3", category: "Heart Rate", min_size: 0, unit_metric: "" },
{ id: 202, name: "HR Zone 4", category: "Heart Rate", min_size: 0, unit_metric: "" },
{ id: 203, name: "HR Zone 5", category: "Heart Rate", min_size: 0, unit_metric: "" },
{ id: 207, name: "Power Zn 1", category: "Power", min_size: 0, unit_metric: "" },
{ id: 208, name: "Power Zn 2", category: "Power", min_size: 0, unit_metric: "" },
{ id: 209, name: "Power Zn 3", category: "Power", min_size: 0, unit_metric: "" },
{ id: 210, name: "Power Zn 4", category: "Power", min_size: 0, unit_metric: "" },
{ id: 211, name: "Power Zn 5", category: "Power", min_size: 0, unit_metric: "" },
{ id: 212, name: "Power Zn 6", category: "Power", min_size: 0, unit_metric: "" },
{ id: 213, name: "Power Zn 7", category: "Power", min_size: 0, unit_metric: "" },
{ id: 216, name: "Time", category: "TODO", min_size: 0, unit_metric: "" },
{ id: 257, name: "Time Stand.", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 258, name: "Standing Lap", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 259, name: "Time Seated", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 260, name: "Seated Lap", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 261, name: "Cad. Ecc", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 262, name: "Pedal Weight", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 263, name: "PCO", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 264, name: "Avg. PCO", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 265, name: "Lap PCO", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 266, name: "Right PP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 267, name: "Avg. Right PP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 268, name: "Lap Right PP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 269, name: "Right PPP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 270, name: "Avg Right PPP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 271, name: "Lap Right PPP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 272, name: "Left PP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 273, name: "Avg. Left PP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 274, name: "Lap Left PP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 275, name: "Left PPP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 276, name: "Avg Left PPP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 277, name: "Lap Left PPP", category: "Cycling Dynamics", min_size: 0, unit_metric: "" },
{ id: 278, name: "Stand. Pwr.", category: "Cycling Dynamics", min_size: 0, unit_metric: "w" },
{ id: 279, name: "Lap Stnd. Pwr.", category: "Cycling Dynamics", min_size: 0, unit_metric: "w" },
];

class Screen {

    fields = [];
    num_fields = 1;
    enabled = true;
    number = 0;

    constructor(number) {
        this.number = number;
    }

    addField(field, position) {
        if (position < 0) {
            position = this.fields.length;
        }
        this.fields.splice(position, 0, field);
        // TODO Warnings about field size (e.g. trying to draw graph on tiny) especially when the number of fields to display is changed.
    }

    removeField(position) {
        this.fields.splice(position, 1);
    }

    setNumberOfFields(num) {
        if (num < 1 || num > 10) {
            console.log("Number of fields must be 1 - 10 inclusive. Was: " + num);
            return false;
        }
        this.num_fields = num;
        // TODO Warnings about field size (e.g. trying to draw graph on tiny) especially when the number of fields to display is changed.
        return true;
    }

    populateOnDisplayList(parentElement) {
        // The list of 'on display'
        parentElement.empty();
        drawDisplayItems(this, parentElement);
    }

    drawScreen(deviceElement) {
        // TODO draw the garmin image.
        var i = 0;
        for (; i < 10 && i < this.fields.length; i++) {
            var field = FIELDS.find(element => element["id"] == this.fields[i]);
            var element = getDisplayElement(i, field["name"], field["example_value"], field["unit_metric"]);
            deviceElement.append(element);
        }
    }

    getFieldsAsBytes() {
        var fieldsAsBytes = [];
        var i = 0;
        for (let f of this.fields) {
            if (i++ > 9) {
                break;
            }
            fieldsAsBytes.push(f);
            if (f > 255) {
                fieldsAsBytes.push(0x01);
            } else {
                fieldsAsBytes.push(0x00);
            }
        }
        for (; i < 10; i++) {
            // pad, so there is 10 fields in the file. If user hasn't specified 10.
            fieldsAsBytes.push(0);
            fieldsAsBytes.push(0x00);
        }
        return fieldsAsBytes;
    }

    toBinary(screenNumber) {
        var header = [0x09,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
        var fieldsAsBytes = this.getFieldsAsBytes();
        var fourUnknown = [screenNumber, 0, this.enabled ? 1 : 0, this.num_fields];
        var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var footer = [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]
        return [].concat(header).concat(fieldsAsBytes).concat(fourUnknown).concat(oneToTen).concat(footer);
    }
}

function drawDisplayItems(screen, parentElement) {
    screen.fields.forEach(function (field_id, index, array) {
        var field = FIELDS.find(element => element["id"] == field_id);
        var name = field["name"];

        var p = $("<p></p>");
        if (index > 9) {
            // css to warn if more than 10 items in the list.
            p.addClass("warn-gt-10");
        } else {
            p.removeClass("warn-gt-10");
        }
        p.append(getDisplayListItemElement(field_id, name, index));
        p.append(getDeleteButtonElement());

        parentElement.append(p);
        window.currentlySelectedField = -1;

    });
}

function getDisplayListItemElement(field_id, name, index) {
    var e = $(getFieldLink(field_id, name));
    e.addClass("display_item");
    e.attr("id", index);

    e[0].onclick = function (e) {
        selectField(e);
    };
    return e;
}

function getDeleteButtonElement() {
    var delete_button = $('<a href="#." class="delete_button">X</a>');
    delete_button[0].onclick = function (e) {
        removeFieldFromScreen(this.parentElement.firstElementChild);
    };
    return delete_button;
}

window.screens = []; // id of the screen.
window.screensDict = {} // id: screen, ...
window.currentScreenIndex = 0; // index in screens.
window.currentlySelectedField = -1;
window.lastScreenId = 0;

function getNextUnusedScreenId() {
    return window.lastScreenId++;
}

function getNumberOfScreens() {
    return window.screens.length;
}

function getCurrentScreen() {
    // newCurrentScreen starts at 0. so minus one to offset.
    return window.screensDict[window.screens[window.currentScreenIndex]];
}


function getDefaultPosition() {
    return POSITION.LAST;
    // TODO User option.
}

function selectField(e) {
    var field = $(e["srcElement"]);
    var newSelectedId = field.attr("id");

    var elem = $(".display_item.selected");
    if (elem.attr("id") != newSelectedId) {
        elem.removeClass("selected");
    }

    field.toggleClass("selected");
    if (field.hasClass("selected")) {
        window.currentlySelectedField = newSelectedId;
    } else {
        window.currentlySelectedField = -1;
    }
}

function addFieldToScreen(field_id) {
    var position = window.currentlySelectedField;
    if (position < 0) {
        position = getDefaultPosition();
    }
    var s = getCurrentScreen();
    s.addField(field_id, position);
    s.populateOnDisplayList($("#on_screen_list"));

    redrawScreen();
}

function removeFieldFromScreen(element) {
    // get position of the field in the ondisplay list
    var position = element["id"];
    var s = getCurrentScreen();
    s.removeField(position);
    s.populateOnDisplayList($("#on_screen_list"));
    window.currentlySelectedField = -1;

    redrawScreen();
}

function getDisplayElement(index, name, value, unit) {
    var element = $(`<div id="field_${index}" class="field">
                    <p class="field_name">${name}</p>
                    <p class="field_unit">
                        <span class="value">${value}</span>
                        <span class="unit">${unit}</span>
                    </p></div>`);
    return element;
}

function setCurrentScreenIndex(newCurrentScreenNum) {
    // clear the ondisplay and garmin image.
    // draw new garmin and populate new ondisplay.
    window.currentScreenIndex = newCurrentScreenNum;


    var s_list_element = $("#on_screen_list");
    s_list_element.empty();
    if (window.currentScreenIndex >= 0) {
        redrawScreen();
        getCurrentScreen().populateOnDisplayList(s_list_element);
    }
}

function redrawScreen() {
    var ds_element = $("#device_screen");
    ds_element.empty();
    var currentScreen = getCurrentScreen();
    currentScreen.drawScreen(ds_element);
    drawDeviceScreen();
}

function drawDeviceScreen() {
    var fields = $(".field");
    fields.removeClass("show_1_col");
    fields.removeClass("show_2_col");

    var numDisplayFields = getCurrentScreen().num_fields;
    var ds = $("#device_screen");
    ds.removeClass(["show_1", "show_2", "show_3", "show_4", "show_5",
        "show_6", "show_7", "show_8", "show_9", "show_10"]);
    ds.addClass(`show_${numDisplayFields}`);

    var f;
    var i = 1;
    for (f of fields) {
        setDataFieldClass(f, i, numDisplayFields);
        i++;
        if (i > numDisplayFields) {
            break;
        }
    }
}

function setupTreeList() {
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active-list");
            this.classList.toggle("caret-down");
        });
    }
}


function convertCategoryToID(s) {
    return s.replace(/ /g, '');
}

function getFieldLink(id, name) {
    return `<a href="#." id="${id}">${name}</a>`;
}

function insertFieldsIntoTreeList() {
    var field;
    var categoryAsID;
    var a;
    var li;
    for (field of FIELDS) {
        categoryAsID = convertCategoryToID(field["category"]);
        a = $(getFieldLink(field["id"], field["name"]));
        a[0].onclick = function (ev) {
            addFieldToScreen(ev["srcElement"]["id"]);
        };
        li = $("<li></li>").append(a);
        $(`#${categoryAsID} ul`).append(li);
    }
}

function numFieldsToDisplayChanged(e) {
    getCurrentScreen().setNumberOfFields(parseInt(this.value));
    redrawScreen();
}

function setDataFieldClass(field, currentIndex, numDisplayFields) {
    const d = { 6: 5, 7: 4, 8: 3, 9: 2, 10: 1 };

    if (numDisplayFields <= 5) {
        setShow1Col(field);
    } else if (numDisplayFields >= 6) {
        if (currentIndex < d[numDisplayFields]) {
            setShow1Col(field);
        } else {
            setShow2Col(field);
        }
    }
}

function setShow2Col(field) {
    field.classList.add("show_2_col");
}

function setShow1Col(field) {
    field.classList.add("show_1_col");
}

function setupNumDataFieldsSpinner(number) {
    $(`#num_data_fields_${number}`)[0].addEventListener('change', numFieldsToDisplayChanged);
}

function addScreenListener() {
    $("#addScreenButton")[0].addEventListener('click', addNewScreen);
}

function selectedScreenListener(e) {
    selectedScreen(parseInt(this.id.split("_")[2]));
}

function selectedScreen(number) {
    hideAllScreens();
    $(`#screen_selector_${number}`).addClass("activeScreenSelector");

    $(`#screen_${number}`).addClass("activeScreen");
    setCurrentScreenIndex(getScreenIndexOf(number));
}

function getScreenIndexOf(num) {
    return window.screens.indexOf(num);
}

function addNewScreen() {
    hideAllScreens();
    var number = getNextUnusedScreenId();
    initialiseScreen(number).addClass("activeScreen");
    getScreenSelectorButtonElement(number).insertBefore($("#addScreenButton").parent());
    setupNumDataFieldsSpinner(number);
    setCurrentScreenIndex(window.screens.length-1);

}

function deleteScreenListener(e) {
    var num = parseInt(this.id.split("_")[2]);

    var index = window.screens.indexOf(num);
    for (let i = index+1; i < getNumberOfScreens(); i++) {
        moveScreenUp(i);
    }

    $(`#screen_list_item_${num}`).remove();
    $(`#screen_${num}`).remove();

    delete window.screensDict[window.screens[getNumberOfScreens()-1]];
    window.screens.splice(getNumberOfScreens() - 1, 1);
    if (index > getNumberOfScreens()-1) {
        index = getNumberOfScreens()-1;
    }
    if (index < 1) {
        index = 0;
    }
    selectedScreen(index);
}

function moveScreenUpListener(e) {
    moveScreenUp(getScreenIndexOf(parseInt(this.id.split("_")[2])));
}

function moveScreenUp(num) {
    if (num == window.screens[0]) {
        // already at the top
        return;
    }
    var li_clicked = moveScreen(num, num - 1);
    $(li_clicked).insertBefore(li_clicked.previousSibling);
}

function moveScreenDownListener(e) {
    moveScreenDown(getScreenIndexOf(parseInt(this.id.split("_")[2])));
}

function moveScreenDown(num) {
    if (num == window.screens[window.screens.length-1]) {
        // already at the top
        return;
    }

    var li_clicked = moveScreen(num, num + 1);
    $(li_clicked).insertAfter(li_clicked.nextSibling);
}

function getListItemElement(position) {
    return $(`#screen_selector_list`).children()[position];
}

function moveScreen(oldPosition, newPosition) {

    swap(window.screens, oldPosition, newPosition);
    return getListItemElement(oldPosition);
}

function swap(arr, i, j) {
    var a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
}

function hideAllScreens() {
    $(".screenSelectorItem").removeClass("activeScreenSelector");
    $(".screen_config").removeClass("activeScreen");
}

function initialiseScreen(number) {
    window.screens.push(number);
    window.screensDict[number] = new Screen(number);
    var element = getScreenConfigElement(number);
    $("#screen_settings").append(element);
    addEnabledButtonListener(number);
    return element;
}

function getScreenSelectorButtonElement(number) {
    var selector = $(`<a href="#." id="screen_selector_${number}" class="screenSelectorItem activeScreenSelector">Screen ${number}</a>`);
    selector[0].addEventListener("click", selectedScreenListener);

    var delete_ = $(`<a href="#." id="delete_screen_${number}" class="delete_button">X</a>`);
    delete_[0].addEventListener("click", deleteScreenListener);

    var up = $(`<a href="#." id="up_screen_${number}" class="up_button">&uarr;</a>`);
    up[0].addEventListener("click", moveScreenUpListener);

    var down = $(`<a href="#." id="down_screen_${number}" class="down_button">&darr;</a>`);
    down[0].addEventListener("click", moveScreenDownListener);

    var li = $(`<li id="screen_list_item_${number}"></li>`);
    li.append(selector, delete_, up, down);
    return li;
}

function enableButtonStateChanged (e) {
    window.screensDict[parseInt(this.id.split("_")[1])].enabled = this.checked;
}

function addEnabledButtonListener(number) {
    var checkbox = document.querySelector(`input[name=enabled_${number}]`);
    checkbox.addEventListener( 'change', enableButtonStateChanged);
}

function getScreenConfigElement(number) {
    return $(`<div id="screen_${number}" class="screen_config">
    <div id="screen_${number}_name" class="screen_name">Screen ${number}</div>
    <div id="screen_${number}_enabled" class="screen_enabled">
        <label for="screen_enabled_${number}">Enabled</label>
        <input type="checkbox" id="enabled_${number}" name="enabled_${number}" checked>
    </div>
    <div>Number of Data Fields:
        <select name="num_data_fields" id="num_data_fields_${number}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
</div>`)
}

function computeChecksum(bytes) {
    // TODO crc16. https://developer.garmin.com/fit/protocol/
    return CHECKSUM;
}

function exportToFit() {
    var bytes = [];
    bytes = bytes.concat(FIT_HEADER);
    var i = 0;
    for (let screen_id of window.screens) {
        const s = wind.screensDict[screen_id];
        bytes = bytes.concat(s.toBinary(i++));
    }
    bytes = bytes.concat(FIT_PAGES).concat(FIT_FOOTER);
    bytes = bytes.concat(computeChecksum(bytes));

    writeFile(bytes, "Cycling.fit");
}

function writeFile(bytes, filename) {
    // (Mostly) Stolen from StackOverflow https://stackoverflow.com/a/21016088
    var dataFile = null;
    var makeTextFile = function (text) {
        var data = new Blob([text], { type: "application/octet" });
        if (dataFile !== null) {
            window.URL.revokeObjectURL(dataFile);
        }
        dataFile = window.URL.createObjectURL(data);
        return dataFile;
    }
    var link = document.createElement('a');
    link.setAttribute('download', filename);
    link.href = makeTextFile(Uint8Array.from(bytes));
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
        var event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}

function exportListener(e) {
    exportToFit();
}

function importListener(e) {
    alert("Import not supported yet. Soz.");
}

function addExportOptionListeners() {
    $("#export_button")[0].addEventListener('click', exportListener);
    $("#import_button")[0].addEventListener('click', importListener);
}

$(document).ready(function () {
    insertFieldsIntoTreeList();
    setupTreeList();
    addNewScreen();
    addScreenListener();
    addExportOptionListeners();
});