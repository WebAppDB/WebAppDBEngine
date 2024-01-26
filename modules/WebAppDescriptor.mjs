export function WebAppDescriptor( iTitle, iDescription, iIconPath, iModulePath, iCssPath) {

  return {
    title : iTitle,
    description : iDescription,
    icon : iIconPath,
    module : iModulePath,
    css : iCssPath,  
  }
}

export function parseWebAppDescriptor( WebAppDescriptorObj ) {

  var setIfNotNull = (iValue, iDefault = "") => {
    return null == iValue ? iDefault : iValue;
  }
  
  var wTitle = setIfNotNull(WebAppDescriptorObj.title);
  var wDescription = setIfNotNull(WebAppDescriptorObj.description);
  var wIconPath = setIfNotNull(WebAppDescriptorObj.icon);
  var wModulePath = setIfNotNull(WebAppDescriptorObj.module);
  var wCssPath = setIfNotNull(WebAppDescriptorObj.css);

  return WebAppDescriptor(wTitle, wDescription, wIconPath, wModulePath, wCssPath);
}
