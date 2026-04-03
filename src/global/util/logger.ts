/* eslint-disable no-console */
import { COLORS, defaultLogger } from './../constant/logger_constant';

import type { LogLevelType } from './../type/logger_type';

const isNode = typeof process !== 'undefined' && (process.release.name === 'node');
const getTimestamp = () => { return new Date().toISOString().split('T')[1]?.split('.')[0]; };
const timestamp = getTimestamp();

const formatMessage = (level: LogLevelType, message: string) => {
  const config = defaultLogger[level as keyof typeof defaultLogger];

  if (isNode) {
    const time = `${COLORS.ANSI.GREY}${timestamp}${COLORS.ANSI.RESET}`;
    const levelLog = `${config.bgAnsi} ${config.icon} ${config.level} ${COLORS.ANSI.RESET}`;
    const messageColor = `${config.ansi}${message}${COLORS.ANSI.RESET}`;

    return [`${time} ${levelLog} ${messageColor}`];
  }

  const badgeStyle = `background: ${config.color}; color: white; font-weight: bold; padding: 2px 6px; border-radius: 3px;`;
  const textStyle = `color: ${config.color}; font-weight: bold;`;
  const timeStyle = `color: ${COLORS.CSS.GREY};`;

  return [
    `%c${timestamp} %c${config.emoji} ${config.level}%c ${message}`,
    timeStyle,
    badgeStyle,
    textStyle
  ];
};

const runLogger = (level: LogLevelType, message: string) => {
  if (import.meta.env.DEV) {
    console.log(...formatMessage(level, message));
  }
};

const logger = {
  info: (message: string, blank?: boolean) => {
    runLogger('INFO', message);
    if (blank) { logger.blank(); }
  },
  warning: (message: string, blank?: boolean) => {
    runLogger('WARN', message);
    if (blank) { logger.blank(); }
  },
  error: (message: string, blank?: boolean) => {
    runLogger('ERROR', message);
    if (blank) { logger.blank(); }
  },
  success: (message: string, blank?: boolean) => {
    runLogger('SUCCESS', message);
    if (blank) { logger.blank(); }
  },
  debug: (message: string, blank?: boolean) => {
    runLogger('DEBUG', message);
    if (blank) { logger.blank(); }
  },
  blank: () => { console.log(''); }
};

export { logger };