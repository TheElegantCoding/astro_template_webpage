const ICON = {
  CHECK: '\uf00c',
  ERROR: '\uf00d',
  INFO: '\uf05a',
  WARNING: '\uf071',
  DEBUG: '\ued7b'
};

const EMOJI = {
  CHECK: '✔',
  ERROR: '✖',
  INFO: 'ℹ',
  WARNING: '⚠',
  DEBUG: '🪲'
};

const COLORS = {
  ANSI: {
    INFO: '\u001b[34m',
    SUCCESS: '\u001b[32m',
    WARNING: '\u001b[33m',
    ERROR: '\u001b[31m',
    DEBUG: '\u001b[35m',
    BG_DEBUG: '\u001b[45;1;37m',
    BG_ERROR: '\u001b[41;1;37m',
    BG_INFO: '\u001b[44;1;37m',
    BG_WARNING: '\u001b[43;1;37m',
    BG_SUCCESS: '\u001b[42;1;37m',
    RESET: '\u001b[0m',
    GREY: '\u001b[90m'
  },
  CSS: {
    INFO: '#3498db',
    SUCCESS: '#2ecc71',
    WARNING: '#f1c40f',
    ERROR: '#e74c3c',
    DEBUG: '#9b59b6',
    GREY: '#95a5a6'
  }
};

const defaultLogger = {
  ERROR: {
    level: 'ERROR',
    icon: ICON.ERROR,
    emoji: EMOJI.ERROR,
    color: COLORS.CSS.ERROR,
    ansi: COLORS.ANSI.ERROR,
    bgAnsi: COLORS.ANSI.BG_ERROR
  },
  INFO: {
    level: 'INFO',
    icon: ICON.INFO,
    emoji: EMOJI.INFO,
    color: COLORS.CSS.INFO,
    ansi: COLORS.ANSI.INFO,
    bgAnsi: COLORS.ANSI.BG_INFO
  },
  WARN: {
    level: 'WARN',
    icon: ICON.WARNING,
    emoji: EMOJI.WARNING,
    color: COLORS.CSS.WARNING,
    ansi: COLORS.ANSI.WARNING,
    bgAnsi: COLORS.ANSI.BG_WARNING
  },
  SUCCESS: {
    level: 'SUCCESS',
    icon: ICON.CHECK,
    emoji: EMOJI.CHECK,
    color: COLORS.CSS.SUCCESS,
    ansi: COLORS.ANSI.SUCCESS,
    bgAnsi: COLORS.ANSI.BG_SUCCESS
  },
  DEBUG: {
    level: 'DEBUG',
    icon: ICON.DEBUG,
    emoji: EMOJI.DEBUG,
    color: COLORS.CSS.DEBUG,
    ansi: COLORS.ANSI.DEBUG,
    bgAnsi: COLORS.ANSI.BG_DEBUG
  }
};

export {
  ICON,
  EMOJI,
  COLORS,
  defaultLogger
};