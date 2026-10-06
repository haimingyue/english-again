// Browser hints are advisory: absent architecture information must stay unknown.
// https://developer.mozilla.org/en-US/docs/Web/API/NavigatorUAData/getHighEntropyValues
export function identifyPlatform({userAgent='',platform='',maxTouchPoints=0,hints={}}={}){
 const ua=userAgent.toLowerCase(),os=(hints.platform||platform||'').toLowerCase(),arch=(hints.architecture||'').toLowerCase();
 const result=(family,key,message)=>({family,key,message});
 if(hints.mobile||/android|iphone|ipad|ipod/.test(ua)||(/mac/.test(os)&&maxTouchPoints>1))return result('mobile',null,'当前是手机或平板，请在 Windows 或 Mac 电脑上选择客户端。');
 if(/win/.test(os)||/windows/.test(ua)){
  if(/arm|aarch/.test(arch)||/arm64|aarch64/.test(ua))return result('windows',null,'检测到 Windows ARM 设备，暂未提供对应版本；请等待兼容性说明。');
  if(arch==='x86'&&(hints.bitness==='64'||hints.wow64===true))return result('windows','win-x64','根据浏览器提供的信息，已选择 Windows 64 位。也可以手动更改。');
  if(arch==='x86'&&hints.bitness==='32'&&hints.wow64!==true)return result('windows','win-x86','根据浏览器提供的信息，已选择 Windows 32 位；此版本仍待确认适配。');
  if(/win64|wow64|x64|amd64/.test(ua))return result('windows','win-x64','检测到 Windows 64 位信息，已为你选中对应入口。也可以手动更改。');
  return result('windows',null,'检测到 Windows，但无法确认系统位数。请在“系统 → 关于”查看后选择。');
 }
 if(/mac/.test(os)||/macintosh|mac os x/.test(ua)){
  if(/^(arm|arm64|aarch64)$/.test(arch))return result('mac','mac-arm64','根据浏览器提供的信息，已选择 Apple 芯片版。也可以手动更改。');
  if(arch==='x86'&&hints.bitness==='64')return result('mac','mac-x64','根据浏览器提供的信息，已选择 Intel 芯片版。也可以手动更改。');
  return result('mac',null,'检测到 macOS，但浏览器没有提供可靠的芯片信息。请在“关于本机”确认后选择。');
 }
 return result('unknown',null,'暂未识别到支持的电脑系统。可手动选择；目前仅预留 Windows 与 macOS 版本。');
}
export async function detectPlatform(nav){
 let hints={platform:nav.userAgentData?.platform||'',mobile:nav.userAgentData?.mobile||false};
 if(typeof nav.userAgentData?.getHighEntropyValues==='function'){
  let timer;
  try {const extra=await Promise.race([nav.userAgentData.getHighEntropyValues(['architecture','bitness','wow64']),new Promise(resolve=>{timer=setTimeout(()=>resolve({}),1800);})]);hints={...hints,...extra};}catch{/* Keep manual selection available when the browser declines hints. */}finally{clearTimeout(timer);}
 }
 return identifyPlatform({userAgent:nav.userAgent||'',platform:nav.platform||'',maxTouchPoints:nav.maxTouchPoints||0,hints});
}
export function availableDownload(entry,base){
 if(!entry||entry.status!=='published'||typeof entry.url!=='string'||!entry.url.trim())return null;
 try{const url=new URL(entry.url,base);return url.protocol==='https:'?url.href:null;}catch{return null;}
}
