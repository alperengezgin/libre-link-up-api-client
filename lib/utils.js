"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trendMap = exports.mapData = void 0;
var trendMap = exports.trendMap = ['NotComputable', 'SingleDown', 'FortyFiveDown', 'Flat', 'FortyFiveUp', 'SingleUp', 'NotComputable'];
var getTrend = function getTrend(trend) {
  var defaultTrend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Flat';
  return trend && trendMap[trend] ? trendMap[trend] : defaultTrend;
};
var toDate = function toDate(dateString) {
  return new Date(dateString);
};
var mapData = exports.mapData = function mapData(_ref) {
  var Value = _ref.Value,
    isHigh = _ref.isHigh,
    isLow = _ref.isLow,
    TrendArrow = _ref.TrendArrow,
    FactoryTimestamp = _ref.FactoryTimestamp;
  return {
    value: Value,
    isHigh: isHigh,
    isLow: isLow,
    trend: getTrend(TrendArrow),
    date: toDate("".concat(FactoryTimestamp, " UTC"))
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0cmVuZE1hcCIsImV4cG9ydHMiLCJnZXRUcmVuZCIsInRyZW5kIiwiZGVmYXVsdFRyZW5kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidG9EYXRlIiwiZGF0ZVN0cmluZyIsIkRhdGUiLCJtYXBEYXRhIiwiX3JlZiIsIlZhbHVlIiwiaXNIaWdoIiwiaXNMb3ciLCJUcmVuZEFycm93IiwiRmFjdG9yeVRpbWVzdGFtcCIsInZhbHVlIiwiZGF0ZSIsImNvbmNhdCJdLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmVuZFR5cGUsIExpYnJlQ2dtRGF0YSB9IGZyb20gJy4vdHlwZXMvY2xpZW50JztcbmltcG9ydCB7IEdsdWNvc2VJdGVtIH0gZnJvbSAnLi90eXBlcy9jb25uZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IHRyZW5kTWFwOiBUcmVuZFR5cGVbXSA9IFtcbiAgJ05vdENvbXB1dGFibGUnLFxuICAnU2luZ2xlRG93bicsXG4gICdGb3J0eUZpdmVEb3duJyxcbiAgJ0ZsYXQnLFxuICAnRm9ydHlGaXZlVXAnLFxuICAnU2luZ2xlVXAnLFxuICAnTm90Q29tcHV0YWJsZScsXG5dO1xuXG5jb25zdCBnZXRUcmVuZCA9IChcbiAgdHJlbmQ6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgZGVmYXVsdFRyZW5kOiBUcmVuZFR5cGUgPSAnRmxhdCdcbikgPT4gKHRyZW5kICYmIHRyZW5kTWFwW3RyZW5kXSA/IHRyZW5kTWFwW3RyZW5kXSA6IGRlZmF1bHRUcmVuZCk7XG5cbmNvbnN0IHRvRGF0ZSA9IChkYXRlU3RyaW5nOiBzdHJpbmcpOiBEYXRlID0+IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgbWFwRGF0YSA9ICh7XG4gIFZhbHVlLFxuICBpc0hpZ2gsXG4gIGlzTG93LFxuICBUcmVuZEFycm93LFxuICBGYWN0b3J5VGltZXN0YW1wLFxufTogR2x1Y29zZUl0ZW0pOiBMaWJyZUNnbURhdGEgPT4gKHtcbiAgdmFsdWU6IFZhbHVlLFxuICBpc0hpZ2gsXG4gIGlzTG93LFxuICB0cmVuZDogZ2V0VHJlbmQoVHJlbmRBcnJvdyksXG4gIGRhdGU6IHRvRGF0ZShgJHtGYWN0b3J5VGltZXN0YW1wfSBVVENgKSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxJQUFNQSxRQUFxQixHQUFBQyxPQUFBLENBQUFELFFBQUEsR0FBRyxDQUNuQyxlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixNQUFNLEVBQ04sYUFBYSxFQUNiLFVBQVUsRUFDVixlQUFlLENBQ2hCO0FBRUQsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQ1pDLEtBQXlCO0VBQUEsSUFDekJDLFlBQXVCLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLE1BQU07RUFBQSxPQUM1QkYsS0FBSyxJQUFJSCxRQUFRLENBQUNHLEtBQUssQ0FBQyxHQUFHSCxRQUFRLENBQUNHLEtBQUssQ0FBQyxHQUFHQyxZQUFZO0FBQUEsQ0FBQztBQUVoRSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBSUMsVUFBa0I7RUFBQSxPQUFXLElBQUlDLElBQUksQ0FBQ0QsVUFBVSxDQUFDO0FBQUE7QUFFMUQsSUFBTUUsT0FBTyxHQUFBVixPQUFBLENBQUFVLE9BQUEsR0FBRyxTQUFWQSxPQUFPQSxDQUFBQyxJQUFBO0VBQUEsSUFDbEJDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0lBQ0xDLE1BQU0sR0FBQUYsSUFBQSxDQUFORSxNQUFNO0lBQ05DLEtBQUssR0FBQUgsSUFBQSxDQUFMRyxLQUFLO0lBQ0xDLFVBQVUsR0FBQUosSUFBQSxDQUFWSSxVQUFVO0lBQ1ZDLGdCQUFnQixHQUFBTCxJQUFBLENBQWhCSyxnQkFBZ0I7RUFBQSxPQUNnQjtJQUNoQ0MsS0FBSyxFQUFFTCxLQUFLO0lBQ1pDLE1BQU0sRUFBTkEsTUFBTTtJQUNOQyxLQUFLLEVBQUxBLEtBQUs7SUFDTFosS0FBSyxFQUFFRCxRQUFRLENBQUNjLFVBQVUsQ0FBQztJQUMzQkcsSUFBSSxFQUFFWCxNQUFNLElBQUFZLE1BQUEsQ0FBSUgsZ0JBQWdCLFNBQU07RUFDeEMsQ0FBQztBQUFBLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=