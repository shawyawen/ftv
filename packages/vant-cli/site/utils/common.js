/**
 * 随机GUID函数
 *
 * 示例：
 * convertMinutesToDaysHoursAndMinutes(树配置:allMenuList)
 */
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function JsGuid() {
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
}
