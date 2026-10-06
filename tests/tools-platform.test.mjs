import {strict as assert} from 'node:assert';
import {identifyPlatform,detectPlatform,availableDownload} from '../site/scripts/tools-platform.mjs';
const cases=[
 ['Windows x64 hints',{hints:{platform:'Windows',architecture:'x86',bitness:'64'}},'win-x64'],
 ['Windows x86 hints',{hints:{platform:'Windows',architecture:'x86',bitness:'32',wow64:false}},'win-x86'],
 ['32-bit browser on Windows x64',{hints:{platform:'Windows',architecture:'x86',bitness:'32',wow64:true}},'win-x64'],
 ['Apple Silicon hints',{hints:{platform:'macOS',architecture:'arm',bitness:'64'}},'mac-arm64'],
 ['Intel Mac hints',{hints:{platform:'macOS',architecture:'x86',bitness:'64'}},'mac-x64'],
 ['Safari Intel token is inconclusive',{platform:'MacIntel',userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'},null],
 ['Win32 browser token is inconclusive',{platform:'Win32',userAgent:'Mozilla/5.0 (Windows NT 10.0)'},null],
 ['Explicit Win64 fallback',{platform:'Win32',userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'},'win-x64'],
 ['Windows ARM64 must not recommend x64',{hints:{platform:'Windows',architecture:'arm',bitness:'64'},userAgent:'Windows NT 10.0; Win64; x64'},null],
 ['iPad desktop UA',{platform:'MacIntel',maxTouchPoints:5,userAgent:'Macintosh; Intel Mac OS X 10_15_7'},null],
 ['Android mobile',{hints:{platform:'Android',mobile:true,architecture:'arm'}},null],
 ['Linux unsupported',{platform:'Linux x86_64'},null],
 ['Empty environment',{},null]
];
for(const [name,input,key] of cases)assert.equal(identifyPlatform(input).key,key,name);
assert.equal(identifyPlatform({platform:'MacIntel',maxTouchPoints:5}).family,'mobile');
assert.equal((await detectPlatform({platform:'MacIntel',userAgentData:{platform:'macOS',getHighEntropyValues:async()=>{throw Error('denied');}}})).key,null);
const base='https://example.com/tools.html';
assert.equal(availableDownload(null,base),null);
assert.equal(availableDownload({status:'pending',url:'https://example.com/file.exe'},base),null);
assert.equal(availableDownload({status:'published',url:'javascript:alert(1)'},base),null);
assert.equal(availableDownload({status:'published',url:'http://example.com/file.exe'},base),null);
assert.equal(availableDownload({status:'published',url:null},base),null);
assert.equal(availableDownload({status:'published',url:'https://example.com/file.dmg'},base),'https://example.com/file.dmg');
console.log('21 platform, denied-hint, and release-link checks passed.');
