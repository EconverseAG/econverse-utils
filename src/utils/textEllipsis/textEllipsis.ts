function textEllipsis(input: string, limit: number, trail: string = '...') {
  if (input.length > limit) {
    return input.substring(0, limit).trim() + trail;
  }
  return input;
}

export default textEllipsis;
