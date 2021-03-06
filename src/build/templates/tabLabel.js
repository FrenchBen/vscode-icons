/* eslint-disable  no-underscore-dangle, vars-on-top, max-len*/
/* global vsicons */
var tabLabel = function (context) {
  if (!context.instantiationService) return 'tab-label';
  var c = context.instantiationService._services.get('configurationService');
  var cf = c ? c.getConfiguration() : null;
  var name = context.name || context.getName();
  if ((!name) ||
  (cf && cf.vsicons && cf.vsicons.hideIconsInTabs)) {
    return 'tab-label';
  }
  return vsicons.iconResolve(cf, name, '-file-icon file-icon tab-label explorer-item');
};

module.exports = tabLabel.toString();
