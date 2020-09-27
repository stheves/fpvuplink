function parseMessage(msg: string) {
  return { id: 'foo' };
}

export function MavLinkMessage(msg: string) {
  return parseMessage(msg);
}
