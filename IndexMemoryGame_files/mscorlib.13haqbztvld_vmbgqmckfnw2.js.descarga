if(typeof(global)==="undefined"){if(typeof(window)!=="undefined"){global=window
}else{if(typeof(self)!=="undefined"){global=self}}}(function(aa){var bE={__assemblies:{}};
bE.initAssembly=function v(fL,n,fM){fM=fM||{};fL.name=n;
fL.toString=function(){return this.name};fL.__types={};
fL.getResourceNames=function(){return Object.keys(fM)
};fL.getResourceDataBase64=function(fN){return fM[fN]||null
};fL.getResourceData=function(fN){var fO=fM[fN];return fO?bE.dec64(fO):null
};bE.__assemblies[n]=fL};bE.initAssembly(bE,"mscorlib");
bE.load=function dh(n){return bE.__assemblies[n]||require(n)
};var L="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",I;
bE.enc64=function(n,fL){var fQ="",fP;for(fP=0;fP<n.length;
fP+=3){var fM=n[fP],fN=n[fP+1],fO=n[fP+2];fQ+=(fL&&fP&&!(fP%57)?"\n":"")+L[fM>>2]+L[((fM&3)<<4)|(fN>>4)]+(fP<n.length-1?L[((fN&15)<<2)|(fO>>6)]:"=")+(fP<n.length-2?L[fO&63]:"=")
}return fQ};bE.dec64=function(fR){fR=fR.replace(/\s/g,"");
I=I||(function(){var fT={"=":-1};for(var fS=0;fS<64;
fS++){fT[L[fS]]=fS}return fT})();var n=Array(Math.max(fR.length*3/4-2,0)),fP;
for(fP=0;fP<fR.length;fP+=4){var fQ=fP*3/4,fL=I[fR[fP]],fM=I[fR[fP+1]],fN=I[fR[fP+2]],fO=I[fR[fP+3]];
n[fQ]=(fL<<2)|(fM>>4);if(fN>=0){n[fQ+1]=((fM&15)<<4)|(fN>>2)
}if(fO>=0){n[fQ+2]=((fN&3)<<6)|fO}}return n};bE.getAssemblies=function ct(){return Object.keys(bE.__assemblies).map(function(fL){return bE.__assemblies[fL]
})};bE.isNullOrUndefined=function c8(n){return(n===null)||(n===undefined)
};bE.isValue=function dc(n){return(n!==null)&&(n!==undefined)
};bE.referenceEquals=function dx(n,fL){return bE.isValue(n)?n===fL:!bE.isValue(fL)
};bE.mkdict=function dp(){var n=(arguments.length!=1?arguments:arguments[0]);
var fM={};for(var fL=0;fL<n.length;fL+=2){fM[n[fL]]=n[fL+1]
}return fM};bE.clone=function b8(fL,n){return n?fL.$clone(n):n
};bE.coalesce=function b9(n,fL){return bE.isValue(n)?n:fL
};bE.isDate=function c3(n){return Object.prototype.toString.call(n)==="[object Date]"
};bE.isArray=function c1(n){return Object.prototype.toString.call(n)==="[object Array]"
};bE.isTypedArrayType=function da(n){return["Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray"].indexOf(bE.getTypeFullName(n))>=0
};bE.isArrayOrTypedArray=function c1(n){return bE.isArray(n)||bE.isTypedArrayType(bE.getInstanceType(n))
};bE.getHashCode=function cC(fL){if(!bE.isValue(fL)){throw new eH("Cannot get hash code of null")
}else{if(typeof(fL.getHashCode)==="function"){return fL.getHashCode()
}else{if(typeof(fL)==="boolean"){return fL?1:0}else{if(typeof(fL)==="number"){var fN=fL.toExponential();
fN=fN.substr(0,fN.indexOf("e"));return parseInt(fN.replace(".",""),10)&4294967295
}else{if(typeof(fL)==="string"){var fM=0;for(var n=0;
n<fL.length;n++){fM=(fM*31+fL.charCodeAt(n))&4294967295
}return fM}else{if(bE.isDate(fL)){return fL.valueOf()&4294967295
}else{return bE.defaultHashCode(fL)}}}}}}};bE.defaultHashCode=function cg(n){return n.$__hashCode__||(n.$__hashCode__=(Math.random()*4294967296)|0)
};bE.equals=function cn(n,fL){if(!bE.isValue(n)){throw new eH("Object is null")
}else{if(n!==bE&&typeof(n.equals)==="function"){return n.equals(fL)
}}if(bE.isDate(n)&&bE.isDate(fL)){return n.valueOf()===fL.valueOf()
}else{if(typeof(n)==="function"&&typeof(fL)==="function"){return bE.delegateEquals(n,fL)
}else{if(bE.isNullOrUndefined(n)&&bE.isNullOrUndefined(fL)){return true
}else{return n===fL}}}};bE.compare=function ca(n,fL){if(!bE.isValue(n)){throw new eH("Object is null")
}else{if(typeof(n)==="number"||typeof(n)==="string"||typeof(n)==="boolean"){return n<fL?-1:(n>fL?1:0)
}else{if(bE.isDate(n)){return bE.compare(n.valueOf(),fL.valueOf())
}else{return n.compareTo(fL)}}}};bE.equalsT=function co(n,fL){if(!bE.isValue(n)){throw new eH("Object is null")
}else{if(typeof(n)==="number"||typeof(n)==="string"||typeof(n)==="boolean"){return n===fL
}else{if(bE.isDate(n)){return n.valueOf()===fL.valueOf()
}else{return n.equalsT(fL)}}}};bE.staticEquals=function dL(n,fL){if(!bE.isValue(n)){return !bE.isValue(fL)
}else{return bE.isValue(fL)?bE.equals(n,fL):false}};
bE.shallowCopy=function dJ(fO,fP){var fM=Object.keys(fO);
for(var n=0,fN=fM.length;n<fN;n++){var fL=fM[n];fP[fL]=fO[fL]
}};bE.isLower=function c6(n){var fL=String.fromCharCode(n);
return fL===fL.toLowerCase()&&fL!==fL.toUpperCase()
};bE.isUpper=function db(n){var fL=String.fromCharCode(n);
return fL!==fL.toLowerCase()&&fL===fL.toUpperCase()
};bE.toLower=function dQ(n){var fL=String.fromCharCode(n);
return fL.toLowerCase().charCodeAt(0)};bE.toUpper=function dS(n){var fL=String.fromCharCode(n);
return fL.toUpperCase().charCodeAt(0)};bE.isNumber=function aG(n){return n>=48&&n<=57||n>=1776&&n<=1785||n>=3046&&n<=3058
};bE.isWhiteSpace=function aH(n){return n<=32};bE.isCurrency=function(n){return n===36||n>=162&&n<=165||n>=8352&&n<=8383||n===3065||n===3647||n===43064||n===65020
};bE.isLetter=function aF(n){return !(bE.isNumber(n)||bE.isPunctuation(n)||bE.isWhiteSpace(n)||bE.isCurrency(n))
};bE.isPunctuation=function c9(n){if(n>=8192&&n<=8303||n>=11776&&n<=11903||n===161||n===191||n===171||n===183||n===187){return true
}var fL=String.fromCharCode(n);return"!\"#%&'()*,-./:;?@[\\]_{}".indexOf(fL)!==-1
};if(typeof(window)=="object"){if(!window.Element){window.Element=function(){};
window.Element.isInstanceOfType=function(n){return n&&typeof n.constructor==="undefined"&&typeof n.tagName==="string"
}}window.Element.__typeName="Element";if(!window.XMLHttpRequest){window.XMLHttpRequest=function(){var fM=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];
for(var fL=0;fL<fM.length;fL++){try{var fN=new ActiveXObject(fM[fL]);
return fN}catch(n){}}return null}}bE.parseXml=function(fN){try{if(DOMParser){var n=new DOMParser();
return n.parseFromString(fN,"text/xml")}else{var fO=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];
for(var fM=0;fM<fO.length;fM++){var fP=new ActiveXObject(fO[fM]);
fP.async=false;fP.loadXML(fN);fP.setProperty("SelectionLanguage","XPath");
return fP}}}catch(fL){}return null}}bE.clearKeys=function b7(fL){for(var fM in fL){if(fL.hasOwnProperty(fM)){delete fL[fM]
}}};bE.keyExists=function de(n,fL){return n[fL]!==undefined
};if(!Object.keys){Object.keys=(function(){var fN=Object.prototype.hasOwnProperty,fM=!({toString:null}).propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],fL=n.length;
return function(fP){if(typeof fP!=="object"&&(typeof fP!=="function"||fP===null)){throw new TypeError("Object.keys called on non-object")
}var fR=[],fQ,fO;for(fQ in fP){if(fN.call(fP,fQ)){fR.push(fQ)
}}if(fM){for(fO=0;fO<fL;fO++){if(fN.call(fP,n[fO])){fR.push(n[fO])
}}}return fR}}())}bE.getKeyCount=function cH(n){return Object.keys(n).length
};bE.__genericCache={};bE._makeGenericTypeName=function bK(n,fN){var fM=n.__typeName;
for(var fL=0;fL<fN.length;fL++){fM+=(fL===0?"[":",")+"["+bE.getTypeQName(fN[fL])+"]"
}fM+="]";return fM};bE.makeGenericType=function dl(n,fM){var fL=bE._makeGenericTypeName(n,fM);
return bE.__genericCache[fL]||n.apply(null,fM)};bE.registerGenericClassInstance=function dz(fM,fL,fQ,fO,n,fN){var fP=bE._makeGenericTypeName(fL,fQ);
bE.__genericCache[fP]=fM;fM.__typeName=fP;fM.__genericTypeDefinition=fL;
fM.__typeArguments=fQ;bE.initClass(fM,fL.__assembly,fO,n(),fN())
};bE.registerGenericInterfaceInstance=function dA(fM,fL,fP,fN,n){var fO=bE._makeGenericTypeName(fL,fP);
bE.__genericCache[fO]=fM;fM.__typeName=fO;fM.__genericTypeDefinition=fL;
fM.__typeArguments=fP;bE.initInterface(fM,fL.__assembly,fN,n())
};bE.isGenericTypeDefinition=function c4(n){return n.__isGenericTypeDefinition||false
};bE.getGenericTypeDefinition=function cB(n){return n.__genericTypeDefinition||null
};bE.getGenericParameterCount=function cA(n){return n.__typeArgumentCount||0
};bE.getGenericArguments=function cz(n){return n.__typeArguments||null
};bE.setMetadata=function bO(fN,fM){if(fM.members){for(var n=0;
n<fM.members.length;n++){var fL=fM.members[n];fL.typeDef=fN;
if(fL.adder){fL.adder.typeDef=fN}if(fL.remover){fL.remover.typeDef=fN
}if(fL.getter){fL.getter.typeDef=fN}if(fL.setter){fL.setter.typeDef=fN
}}}fN.__metadata=fM;if(fM.variance){fN.isAssignableFrom=function(fR){var fO=function(fV,fW){if(fW.__genericTypeDefinition===fV.__genericTypeDefinition&&fW.__typeArguments.length==fV.__typeArguments.length){for(var fS=0;
fS<fV.__typeArguments.length;fS++){var fX=fV.__metadata.variance[fS],fU=fV.__typeArguments[fS],fT=fW.__typeArguments[fS];
switch(fX){case 1:if(!bE.isAssignableFrom(fU,fT)){return false
}break;case 2:if(!bE.isAssignableFrom(fT,fU)){return false
}break;default:if(fT!==fU){return false}}}return true
}return false};if(fR.__interface&&fO(this,fR)){return true
}var fQ=bE.getInterfaces(fR);for(var fP=0;fP<fQ.length;
fP++){if(fQ[fP]===this||fO(this,fQ[fP])){return true
}}return false}}};bE.initClass=function cU(fM,n,fP,fL,fO){fM.__class=true;
fM.__assembly=n;if(!fM.__typeArguments){n.__types[fM.__typeName]=fM
}if(fL&&fL!==Object){var fN=function(){};fN.prototype=fL.prototype;
fM.prototype=new fN();fM.prototype.constructor=fM}bE.shallowCopy(fP,fM.prototype);
if(fO){fM.__interfaces=fO}};bE.initGenericClass=function cW(fL,n,fM){fL.__class=true;
fL.__assembly=n;n.__types[fL.__typeName]=fL;fL.__typeArgumentCount=fM;
fL.__isGenericTypeDefinition=true};bE.initInterface=function cX(fM,n,fN,fL){fM.__interface=true;
fM.__assembly=n;if(!fM.__typeArguments){n.__types[fM.__typeName]=fM
}if(fL){fM.__interfaces=fL}bE.shallowCopy(fN,fM.prototype);
fM.isAssignableFrom=function(fO){return bE.contains(bE.getInterfaces(fO),this)
}};bE.initGenericInterface=function cW(fL,n,fM){fL.__interface=true;
fL.__assembly=n;n.__types[fL.__typeName]=fL;fL.__typeArgumentCount=fM;
fL.__isGenericTypeDefinition=true};bE.initEnum=function cV(fL,n,fM,fN){fL.__enum=true;
fL.__assembly=n;n.__types[fL.__typeName]=fL;bE.shallowCopy(fM,fL.prototype);
fL.getDefaultValue=fL.createInstance=function(){return fN?null:0
};fL.isInstanceOfType=function(fO){return typeof(fO)==(fN?"string":"number")
}};bE.getBaseType=function cw(fM){if(fM===Object||fM.__interface){return null
}else{if(Object.getPrototypeOf){return Object.getPrototypeOf(fM.prototype).constructor
}else{var fL=fM.prototype;if(Object.prototype.hasOwnProperty.call(fL,"constructor")){try{var n=fL.constructor;
delete fL.constructor;return fL.constructor}finally{fL.constructor=n
}}return fL.constructor}}};bE.getTypeFullName=function cL(n){return n.__typeName||n.name||(n.toString().match(/^\s*function\s*([^\s(]+)/)||[])[1]||"Object"
};bE.getTypeQName=function cL(n){return bE.getTypeFullName(n)+(n.__assembly?", "+n.__assembly.name:"")
};bE.getTypeName=function cM(fN){var fL=bE.getTypeFullName(fN);
var n=fL.indexOf("[");var fM=fL.lastIndexOf(".",n>=0?n:fL.length);
return fM>0?fL.substr(fM+1):fL};bE.getTypeNamespace=function cN(fN){var fL=bE.getTypeFullName(fN);
var n=fL.indexOf("[");var fM=fL.lastIndexOf(".",n>=0?n:fL.length);
return fM>0?fL.substr(0,fM):""};bE.getTypeAssembly=function cK(n){if(bE.contains([Date,Number,Boolean,String,Function,Array],n)){return bE
}else{return n.__assembly||null}};bE._getAssemblyType=function bJ(fL,fN){var fO=[];
if(fL.__types){return fL.__types[fN]||null}else{var n=fN.split(".");
for(var fM=0;fM<n.length;fM++){fL=fL[n[fM]];if(!bE.isValue(fL)){return null
}}if(typeof fL!=="function"){return null}return fL}};
bE.getAssemblyTypes=function cu(n){var fL=[];if(n.__types){for(var fM in n.__types){if(n.__types.hasOwnProperty(fM)){fL.push(n.__types[fM])
}}}else{var fN=function(fQ,fP){for(var fO in fQ){if(fQ.hasOwnProperty(fO)){fN(fQ[fO],fO)
}}if(typeof(fQ)==="function"&&bE.isUpper(fP.charCodeAt(0))){fL.push(fQ)
}};fN(n,"")}return fL};bE.createAssemblyInstance=function ce(n,fM){var fL=bE.getType(fM,n);
return fL?bE.createInstance(fL):null};bE.getInterfaces=function cE(n){if(n.__interfaces){return n.__interfaces
}else{if(n===Date||n===Number){return[er,ek,et]}else{if(n===Boolean||n===String){return[er,ek]
}else{if(n===Array||bE.isTypedArrayType(n)){return[eo,ej,eu]
}else{return[]}}}}};bE.isInstanceOfType=function c5(n,fL){if(bE.isNullOrUndefined(n)){return false
}if(typeof(fL.isInstanceOfType)==="function"){return fL.isInstanceOfType(n)
}return bE.isAssignableFrom(fL,bE.getInstanceType(n))
};bE.isAssignableFrom=function c2(n,fL){return n===fL||(typeof(n.isAssignableFrom)==="function"&&n.isAssignableFrom(fL))||fL.prototype instanceof n
};bE.isClass=function fH(n){return(n.__class==true||n===Array||n===Function||n===RegExp||n===String||n===Error||n===Object)
};bE.isEnum=function fI(n){return !!n.__enum};bE.isFlags=function fJ(n){return n.__metadata&&n.__metadata.enumFlags||false
};bE.isInterface=function fK(n){return !!n.__interface
};bE.safeCast=function dH(n,fL){if(fL===true){return n
}else{if(fL===false){return null}else{return bE.isInstanceOfType(n,fL)?n:null
}}};bE.cast=function b5(n,fL){if(n===null||typeof(n)==="undefined"||typeof(n)==="object"){return n
}else{if(fL===true||(fL!==false&&bE.isInstanceOfType(n,fL))){return n
}}throw new ew("Cannot cast object to type "+bE.getTypeFullName(fL))
};bE.getInstanceType=function cD(fL){if(!bE.isValue(fL)){throw new eH("Cannot get type of null")
}try{return fL.constructor}catch(n){return Object}};
bE._getType=function(fS,n,fO){var fN=!fO;fO=fO||/[[,\]]/g;
var fL=fO.lastIndex,fM=fO.exec(fS),fR,fQ=[];if(fM){fR=fS.substring(fL,fM.index);
switch(fM[0]){case"[":if(fS[fM.index+1]!="["){return null
}for(;;){fO.exec(fS);var fP=bE._getType(fS,aa,fO);if(!fP){return null
}fQ.push(fP);fM=fO.exec(fS);if(fM[0]==="]"){break}else{if(fM[0]!==","){return null
}}}fM=fO.exec(fS);if(fM&&fM[0]===","){fO.exec(fS);if(!(n=bE.__assemblies[(fO.lastIndex>0?fS.substring(fM.index+1,fO.lastIndex-1):fS.substring(fM.index+1)).trim()])){return null
}}break;case"]":break;case",":fO.exec(fS);if(!(n=bE.__assemblies[(fO.lastIndex>0?fS.substring(fM.index+1,fO.lastIndex-1):fS.substring(fM.index+1)).trim()])){return null
}break}}else{fR=fS.substring(fL)}if(fN&&fO.lastIndex){return null
}var fP=bE._getAssemblyType(n,fR.trim());return fQ.length?bE.makeGenericType(fP,fQ):fP
};bE.getType=function cJ(fL,n){return fL?bE._getType(fL,n||aa):null
};bE.getDefaultValue=function cx(n){if(typeof(n.getDefaultValue)==="function"){return n.getDefaultValue()
}else{if(n===Boolean){return false}else{if(n===Date){return new Date(0)
}else{if(n===Number){return 0}}}}return null};bE.createInstance=function cf(n){if(typeof(n.createInstance)==="function"){return n.createInstance()
}else{if(n===Boolean){return false}else{if(n===Date){return new Date(0)
}else{if(n===Number){return 0}else{if(n===String){return""
}else{return new n()}}}}}};bE.applyConstructor=function bQ(fL,n){var fM=function(){fL.apply(this,n)
};fM.prototype=fL.prototype;return new fM()};bE.getAttributes=function cv(fS,fL,fO){var fQ=[];
if(fO){var fM=bE.getBaseType(fS);if(fM){var n=bE.getAttributes(fM,fL,true);
for(var fN=0;fN<n.length;fN++){var fR=bE.getInstanceType(n[fN]);
if(!fR.__metadata||!fR.__metadata.attrNoInherit){fQ.push(n[fN])
}}}}if(fS.__metadata&&fS.__metadata.attr){for(var fN=0;
fN<fS.__metadata.attr.length;fN++){var n=fS.__metadata.attr[fN];
if(fL==null||bE.isInstanceOfType(n,fL)){var fR=bE.getInstanceType(n);
if(!fR.__metadata||!fR.__metadata.attrAllowMultiple){for(var fP=fQ.length-1;
fP>=0;fP--){if(bE.isInstanceOfType(fQ[fP],fR)){fQ.splice(fP,1)
}}}fQ.push(n)}}}return fQ};bE.getMembers=function cI(fW,fR,fM,fS,fT){var fV=[];
if((fM&72)==72||(fM&6)==4){var fL=bE.getBaseType(fW);
if(fL){fV=bE.getMembers(fL,fR&~1,fM&(fM&64?255:247)&(fM&2?251:255),fS,fT)
}}var fN=function(fY){if((fR&fY.type)&&(((fM&4)&&!fY.isStatic)||((fM&8)&&fY.isStatic))&&(!fS||fY.name===fS)){if(fT){if((fY.params||[]).length!==fT.length){return
}for(var fX=0;fX<fT.length;fX++){if(fT[fX]!==fY.params[fX]){return
}}}fV.push(fY)}};if(fW.__metadata&&fW.__metadata.members){for(var fO=0;
fO<fW.__metadata.members.length;fO++){var fQ=fW.__metadata.members[fO];
fN(fQ);for(var fP=0;fP<4;fP++){var n=["getter","setter","adder","remover"][fP];
if(fQ[n]){fN(fQ[n])}}}}if(fM&256){while(fW){var fU=[];
for(var fO=0;fO<fV.length;fO++){if(fV[fO].typeDef===fW){fU.push(fV[fO])
}}if(fU.length>1){throw new d2("Ambiguous match")}else{if(fU.length===1){return fU[0]
}}fW=bE.getBaseType(fW)}return null}return fV};bE.midel=function dm(fN,fO,fP){if(fN.isStatic&&!!fO){throw new d3("Cannot specify target for static method")
}else{if(!fN.isStatic&&!fO){throw new d3("Must specify target for instance method")
}}var fM;if(fN.fget){fM=function(){return(fN.isStatic?fN.typeDef:this)[fN.fget]
}}else{if(fN.fset){fM=function(fQ){(fN.isStatic?fN.typeDef:this)[fN.fset]=fQ
}}else{fM=fN.def||(fN.isStatic||fN.sm?fN.typeDef[fN.sname]:fO[fN.sname]);
if(fN.tpcount){if(!fP||fP.length!==fN.tpcount){throw new d3("Wrong number of type arguments")
}fM=fM.apply(null,fP)}else{if(fP&&fP.length){throw new d3("Cannot specify type arguments for non-generic method")
}}if(fN.exp){var n=fM;fM=function(){return n.apply(this,Array.prototype.slice.call(arguments,0,arguments.length-1).concat(arguments[arguments.length-1]))
}}if(fN.sm){var fL=fM;fM=function(){return fL.apply(null,[this].concat(Array.prototype.slice.call(arguments)))
}}}}return bE.mkdel(fO,fM)};bE.invokeCI=function c0(fL,n){if(fL.exp){n=n.slice(0,n.length-1).concat(n[n.length-1])
}if(fL.def){return fL.def.apply(null,n)}else{if(fL.sm){return fL.typeDef[fL.sname].apply(null,n)
}else{return bE.applyConstructor(fL.sname?fL.typeDef[fL.sname]:fL.typeDef,n)
}}};bE.fieldAccess=function cp(n,fL){if(n.isStatic&&!!fL){throw new d3("Cannot specify target for static field")
}else{if(!n.isStatic&&!fL){throw new d3("Must specify target for instance field")
}}fL=n.isStatic?n.typeDef:fL;if(arguments.length===3){fL[n.sname]=arguments[2]
}else{return fL[n.sname]}};var et=function av(){};et.__typeName="ss.IFormattable";
bE.IFormattable=et;bE.initInterface(et,bE,{format:null});
bE.format=function cq(fL,n){if(typeof(fL)==="number"){return bE.formatNumber(fL,n)
}else{if(bE.isDate(fL)){return bE.formatDate(fL,n)}else{return fL.format(n)
}}};var ek=function al(){};ek.__typeName="ss.IComparable";
bE.IComparable=ek;bE.initInterface(ek,bE,{compareTo:null});
var er=function at(){};er.__typeName="ss.IEquatable";
bE.IEquatable=er;bE.initInterface(er,bE,{equalsT:null});
bE.formatNumber=function cs(fL,n){if(bE.isNullOrUndefined(n)||(n.length==0)||(n=="i")){return fL.toString()
}return bE.netFormatNumber(fL,n,d9.invariantCulture.numberFormat)
};bE.localeFormatNumber=function dj(fL,n){if(bE.isNullOrUndefined(n)||(n.length==0)||(n=="i")){return fL.toLocaleString()
}return bE.netFormatNumber(fL,n,d9.currentCulture.numberFormat)
};bE._commaFormatNumber=function bF(fV,fQ,fL,n){var fN=null;
var fM=fV.indexOf(fL);if(fM>0){fN=fV.substr(fM);fV=fV.substr(0,fM)
}var fU=bE.startsWithString(fV,"-");if(fU){fV=fV.substr(1)
}var fP=0;var fR=fQ[fP];if(fV.length<fR){return(fU?"-":"")+(fN?fV+fN:fV)
}var fS=fV.length;var fX="";var fO=false;while(!fO){var fT=fR;
var fY=fS-fT;if(fY<0){fR+=fY;fT+=fY;fY=0;fO=true}if(!fT){break
}var fW=fV.substr(fY,fT);if(fX.length){fX=fW+n+fX}else{fX=fW
}fS-=fT;if(fP<fQ.length-1){fP++;fR=fQ[fP]}}if(fU){fX="-"+fX
}return fN?fX+fN:fX};bE.netFormatNumber=function dr(fO,n,fP){var fN=(fP&&fP.getFormat(eI))||d9.currentCulture.numberFormat;
var fR="";var fQ=-1;if(n.length>1){fQ=parseInt(n.substr(1),10)
}var fL=n.charAt(0);switch(fL){case"d":case"D":fR=parseInt(Math.abs(fO)).toString();
if(fQ!=-1){fR=bE.padLeftString(fR,fQ,48)}if(fO<0){fR="-"+fR
}break;case"x":case"X":fR=parseInt(Math.abs(fO)).toString(16);
if(fL=="X"){fR=fR.toUpperCase()}if(fQ!=-1){fR=bE.padLeftString(fR,fQ,48)
}break;case"e":case"E":if(fQ==-1){fR=fO.toExponential()
}else{fR=fO.toExponential(fQ)}if(fL=="E"){fR=fR.toUpperCase()
}break;case"f":case"F":case"n":case"N":if(fQ==-1){fQ=fN.numberDecimalDigits
}fR=fO.toFixed(fQ).toString();if(fQ&&(fN.numberDecimalSeparator!=".")){var fM=fR.indexOf(".");
fR=fR.substr(0,fM)+fN.numberDecimalSeparator+fR.substr(fM+1)
}if((fL=="n")||(fL=="N")){fR=bE._commaFormatNumber(fR,fN.numberGroupSizes,fN.numberDecimalSeparator,fN.numberGroupSeparator)
}break;case"c":case"C":if(fQ==-1){fQ=fN.currencyDecimalDigits
}fR=Math.abs(fO).toFixed(fQ).toString();if(fQ&&(fN.currencyDecimalSeparator!=".")){var fM=fR.indexOf(".");
fR=fR.substr(0,fM)+fN.currencyDecimalSeparator+fR.substr(fM+1)
}fR=bE._commaFormatNumber(fR,fN.currencyGroupSizes,fN.currencyDecimalSeparator,fN.currencyGroupSeparator);
if(fO<0){fR=bE.formatString(fN.currencyNegativePattern,fR)
}else{fR=bE.formatString(fN.currencyPositivePattern,fR)
}break;case"p":case"P":if(fQ==-1){fQ=fN.percentDecimalDigits
}fR=(Math.abs(fO)*100).toFixed(fQ).toString();if(fQ&&(fN.percentDecimalSeparator!=".")){var fM=fR.indexOf(".");
fR=fR.substr(0,fM)+fN.percentDecimalSeparator+fR.substr(fM+1)
}fR=bE._commaFormatNumber(fR,fN.percentGroupSizes,fN.percentDecimalSeparator,fN.percentGroupSeparator);
if(fO<0){fR=bE.formatString(fN.percentNegativePattern,fR)
}else{fR=bE.formatString(fN.percentPositivePattern,fR)
}break}return fR};bE.tryParseFloat=function dX(fN,fM){fM.$=0;
var fL=parseFloat(fN,10);if(isNaN(fL)){return false
}fM.$=fL;return true};bE.tryParseBool=function dW(fL,n){if((/^\s*true\s*$/i).test(fL)){n.$=true;
return true}if((/^\s*false\s*$/i).test(fL)){n.$=false;
return true}n.$=false;return false};bE.netSplit=function ds(fQ,fR,fL,fN){var fO=new RegExp(fR.map(bE.regexpEscape).join("|"),"g"),fP=[],fM,n;
for(n=0;;n=fO.lastIndex){if(fM=fO.exec(fQ)){if(fN!==1||fM.index>n){if(fP.length===fL-1){fP.push(fQ.substr(n));
return fP}else{fP.push(fQ.substring(n,fM.index))}}}else{if(fN!==1||n!==fQ.length){fP.push(fQ.substr(n))
}return fP}}};bE.compareStrings=function cb(fL,fM,n){if(n==1){if(fL){fL=fL.toUpperCase()
}if(fM){fM=fM.toUpperCase()}}fL=fL||"";fM=fM||"";if(fL==fM){return 0
}if(fL<fM){return -1}return 1};bE.endsWithString=function cm(n,fL){if(!fL.length){return true
}if(fL.length>n.length){return false}return(n.substr(n.length-fL.length)==fL)
};bE._formatString=function bI(n,fM,fL){if(!bE._formatRE){bE._formatRE=/\{\{|\}\}|\{[^\}\{]+\}/g
}return n.replace(bE._formatRE,function(fQ){if(fQ==="{{"||fQ==="}}"){return fQ.charAt(0)
}var fP=parseInt(fQ.substr(1),10);var fR=fM[fP+1];if(bE.isNullOrUndefined(fR)){return""
}if(bE.isInstanceOfType(fR,et)){var fO=null;var fN=fQ.indexOf(":");
if(fN>0){fO=fQ.substring(fN+1,fQ.length-1)}return bE.format(fR,fO)
}else{return fL?fR.toLocaleString():fR.toString()}})
};bE.formatString=function e1(n){return bE._formatString(n,arguments,false)
};bE.stringFromChar=function dM(n,fL){var fN=n;for(var fM=1;
fM<fL;fM++){fN+=n}return fN};bE.htmlDecode=function cO(n){return n.replace(/&([^;]+);/g,function(fL,fM){if(fM[0]==="#"){return String.fromCharCode(parseInt(fM.substr(1),10))
}switch(fM){case"quot":return'"';case"apos":return"'";
case"amp":return"&";case"lt":return"<";case"gt":return">";
default:return"&"+fM+";"}})};bE.htmlEncode=function cP(n){return n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
};bE.jsEncode=function dd(fL,n){fL=fL.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"');
return n?'"'+fL+'"':fL};bE.indexOfAnyString=function cR(fP,n,fQ,fL){var fO=fP.length;
if(!fO){return -1}n=String.fromCharCode.apply(null,n);
fQ=fQ||0;fL=fL||fO;var fM=fQ+fL-1;if(fM>=fO){fM=fO-1
}for(var fN=fQ;fN<=fM;fN++){if(n.indexOf(fP.charAt(fN))>=0){return fN
}}return -1};bE.insertString=function cZ(fL,n,fO){if(!fO){return fL
}if(!n){return fO+fL}var fM=fL.substr(0,n);var fN=fL.substr(n);
return fM+fO+fN};bE.isNullOrEmptyString=function c7(n){return !n||!n.length
};bE.lastIndexOfAnyString=function df(fP,n,fQ,fL){var fO=fP.length;
if(!fO){return -1}n=String.fromCharCode.apply(null,n);
fQ=fQ||fO-1;fL=fL||fO;var fM=fQ-fL+1;if(fM<0){fM=0}for(var fN=fQ;
fN>=fM;fN--){if(n.indexOf(fP.charAt(fN))>=0){return fN
}}return -1};bE.localeFormatString=function dk(n){return bE._formatString(n,arguments,true)
};bE.padLeftString=function dt(fL,fM,n){if(fL.length<fM){n=String.fromCharCode(n||32);
return bE.stringFromChar(n,fM-fL.length)+fL}return fL
};bE.padRightString=function du(fL,fM,n){if(fL.length<fM){n=String.fromCharCode(n||32);
return fL+bE.stringFromChar(n,fM-fL.length)}return fL
};bE.removeString=function dD(fM,fL,n){if(!n||((fL+n)>this.length)){return fM.substr(0,fL)
}return fM.substr(0,fL)+fM.substr(fL+n)};bE.replaceAllString=function dF(fM,fL,n){n=n||"";
return fM.split(fL).join(n)};bE.startsWithString=function dK(fL,n){if(!n.length){return true
}if(n.length>fL.length){return false}return(fL.substr(0,n.length)==n)
};if(!String.prototype.trim){String.prototype.trim=function e2(){return bE.trimStartString(bE.trimEndString(this))
}}bE.trimEndString=function dT(fL,n){return fL.replace(n?new RegExp("["+String.fromCharCode.apply(null,n)+"]+$"):/\s*$/,"")
};bE.trimStartString=function dU(fL,n){return fL.replace(n?new RegExp("^["+String.fromCharCode.apply(null,n)+"]+"):/^\s*/,"")
};bE.trimString=function dV(fL,n){return bE.trimStartString(bE.trimEndString(fL,n),n)
};bE.lastIndexOfString=function dg(fM,fN,fO,n){var fL=fM.lastIndexOf(fN,fO);
return(fL<(fO-n+1))?-1:fL};bE.indexOfString=function cT(fM,fN,fO,n){var fL=fM.indexOf(fN,fO);
return((fL+fN.length)<=(fO+n))?fL:-1};String.getEnumerator=function(n){var fL=new Object();
fL.array=n;fL.index=-1;fL.moveNext=function(){this.index++;
return(this.index<this.array.length)};fL.reset=function(){this.index=-1
};fL.current=function(){return this.array[this.index].charCodeAt(0)
};fL.dispose=function(){};return fL};bE.divRem=function cl(n,fL,fN){var fM=n%fL;
fN.$=fM;return(n-fM)/fL};bE.round=function dG(fO,fL,fP){var fN=Math.pow(10,fL||0);
fO*=fN;var fQ=(fO>0)|-(fO<0);if(fO%1===0.5*fQ){var fM=Math.floor(fO);
return(fM+(fP?(fQ>0):(fM%2*fQ)))/fN}return Math.round(fO)/fN
};var es=function au(){};es.__typeName="ss.IFormatProvider";
bE.IFormatProvider=es;bE.initInterface(es,bE,{getFormat:null});
var eI=function bo(){};eI.__typeName="ss.NumberFormatInfo";
bE.NumberFormatInfo=eI;bE.initClass(eI,bE,{getFormat:function bp(n){return(n===eI)?this:null
}},null,[es]);eI.invariantInfo=new eI();bE.shallowCopy({naNSymbol:"NaN",negativeSign:"-",positiveSign:"+",negativeInfinitySymbol:"-Infinity",positiveInfinitySymbol:"Infinity",percentSymbol:"%",percentGroupSizes:[3],percentDecimalDigits:2,percentDecimalSeparator:".",percentGroupSeparator:",",percentPositivePattern:0,percentNegativePattern:0,currencySymbol:"$",currencyGroupSizes:[3],currencyDecimalDigits:2,currencyDecimalSeparator:".",currencyGroupSeparator:",",currencyNegativePattern:0,currencyPositivePattern:0,numberGroupSizes:[3],numberDecimalDigits:2,numberDecimalSeparator:".",numberGroupSeparator:","},eI.invariantInfo);
var ea=function C(){};ea.__typeName="ss.DateTimeFormatInfo";
bE.DateTimeFormatInfo=ea;bE.initClass(ea,bE,{getFormat:function D(n){return n===ea?this:null
}},null,[es]);ea.invariantInfo=new ea();bE.shallowCopy({amDesignator:"AM",pmDesignator:"PM",dateSeparator:"/",timeSeparator:":",gmtDateTimePattern:"ddd, dd MMM yyyy HH:mm:ss 'GMT'",universalDateTimePattern:"yyyy-MM-dd HH:mm:ssZ",sortableDateTimePattern:"yyyy-MM-ddTHH:mm:ss",dateTimePattern:"dddd, MMMM dd, yyyy h:mm:ss tt",longDatePattern:"dddd, MMMM dd, yyyy",shortDatePattern:"M/d/yyyy",longTimePattern:"h:mm:ss tt",shortTimePattern:"h:mm tt",firstDayOfWeek:0,dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],minimizedDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December",""],shortMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},ea.invariantInfo);
var eM=function eS(){this._stopTime=0;this._startTime=0;
this.isRunning=false};eM.startNew=function eX(){var n=new eM();
n.start();return n};if(typeof(window)!=="undefined"&&window.performance&&window.performance.now){eM.frequency=1000000;
eM.isHighResolution=true;eM.getTimestamp=function(){return Math.round(window.performance.now()*1000)
}}else{if(typeof(process)!=="undefined"&&process.hrtime){eM.frequency=1000000000;
eM.isHighResolution=true;eM.getTimestamp=function(){var n=process.hrtime();
return n[0]*1000000000+n[1]}}else{eM.frequency=1000;
eM.isHighResolution=false;eM.getTimestamp=function(){return new Date().valueOf()
}}}eM.__typeName="ss.Stopwatch";bE.Stopwatch=eM;bE.initClass(eM,bE,{reset:function eU(){this._stopTime=this._startTime=eM.getTimestamp();
this.isRunning=false},ticks:function eZ(){return(this.isRunning?eM.getTimestamp():this._stopTime)-this._startTime
},milliseconds:function eT(){return Math.round(this.ticks()/eM.frequency*1000)
},timeSpan:function e0(){return new eR(this.milliseconds()*10000)
},start:function eW(){if(this.isRunning){return}this._startTime=eM.getTimestamp();
this.isRunning=true},stop:function eY(){if(!this.isRunning){return
}this._stopTime=eM.getTimestamp();this.isRunning=false
},restart:function eV(){this.isRunning=false;this.start()
}});bE._flatIndex=function bH(n,fN){if(fN.length!=(n._sizes?n._sizes.length:1)){throw new d3("Invalid number of indices")
}if(fN[0]<0||fN[0]>=(n._sizes?n._sizes[0]:n.length)){throw new d3("Index 0 out of range")
}var fM=fN[0];if(n._sizes){for(var fL=1;fL<n._sizes.length;
fL++){if(fN[fL]<0||fN[fL]>=n._sizes[fL]){throw new d3("Index "+fL+" out of range")
}fM=fM*n._sizes[fL]+fN[fL]}}return fM};bE.arrayGet2=function bW(n,fM){var fL=bE._flatIndex(n,fM);
var fN=n[fL];return typeof fN!=="undefined"?fN:n._defvalue
};bE.arrayGet=function bV(n){return bE.arrayGet2(n,Array.prototype.slice.call(arguments,1))
};bE.arraySet2=function b4(n,fN,fM){var fL=bE._flatIndex(n,fM);
n[fL]=fN};bE.arraySet=function b3(){return bE.arraySet2(arguments[0],arguments[arguments.length-1],Array.prototype.slice.call(arguments,1,arguments.length-1))
};bE.arrayRank=function b1(n){return n._sizes?n._sizes.length:1
};bE.arrayLength=function bY(n,fL){if(fL>=(n._sizes?n._sizes.length:1)){throw new d3("Invalid dimension")
}return n._sizes?n._sizes[fL]:n.length};bE.arrayExtract=function bT(n,fM,fL){if(!bE.isValue(fL)){return n.slice(fM)
}return n.slice(fM,fM+fL)};bE.arrayAddRange=function bR(n,fM){if(fM instanceof Array){n.push.apply(n,fM)
}else{var fL=bE.getEnumerator(fM);try{while(fL.moveNext()){bE.add(n,fL.current())
}}finally{if(bE.isInstanceOfType(fL,en)){bE.cast(fL,en).dispose()
}}}};bE.arrayClone=function bS(n){if(n.length===1){return[n[0]]
}else{return Array.apply(null,n)}};bE.arrayPeekFront=function b0(n){if(n.length){return n[0]
}throw new ex("Array is empty")};bE.arrayPeekBack=function bZ(n){if(n.length){return n[n.length-1]
}throw new ex("Array is empty")};bE.indexOfArray=function cS(n,fM,fN){fN=fN||0;
for(var fL=fN;fL<n.length;fL++){if(bE.staticEquals(n[fL],fM)){return fL
}}return -1};bE.arrayInsertRange=function bX(n,fN,fO){if(fO instanceof Array){if(fN===0){n.unshift.apply(n,fO)
}else{for(var fM=0;fM<fO.length;fM++){n.splice(fN+fM,0,fO[fM])
}}}else{var fL=bE.getEnumerator(fO);try{while(fL.moveNext()){n.insert(fN,fL.current());
fN++}}finally{if(bE.isInstanceOfType(fL,en)){bE.cast(fL,en).dispose()
}}}};if(!Array.prototype.map){Array.prototype.map=function o(n,fM){var fN=this.length;
var fO=new Array(fN);for(var fL=0;fL<fN;fL++){if(fL in this){fO[fL]=n.call(fM,this[fL],fL,this)
}}return fO}}bE.arrayRemoveRange=function b2(n,fM,fL){n.splice(fM,fL)
};if(!Array.prototype.some){Array.prototype.some=function p(n,fM){var fN=this.length;
for(var fL=0;fL<fN;fL++){if(fL in this&&n.call(fM,this[fL],fL,this)){return true
}}return false}}bE.arrayFromEnumerable=function bU(fL){if(!bE.isValue(fL)){return null
}var n=bE.getEnumerator(fL),fM=[];try{while(n.moveNext()){fM.push(n.current())
}}finally{n.dispose()}return fM};bE.multidimArray=function dq(fL,fO){var n=[];
n._defvalue=fL;n._sizes=[arguments[1]];var fN=arguments[1];
for(var fM=2;fM<arguments.length;fM++){fN*=arguments[fM];
n._sizes[fM-1]=arguments[fM]}n.length=fN;return n};
bE.repeat=function dE(fN,n){var fM=[];for(var fL=0;
fL<n;fL++){fM.push(fN)}return fM};bE.utcNow=function dZ(){var n=new Date();
return new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds())
};bE.toUTC=function dR(n){return new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds())
};bE.fromUTC=function dP(n){return new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()))
};bE.today=function dO(){var n=new Date();return new Date(n.getFullYear(),n.getMonth(),n.getDate())
};bE.formatDate=function cr(n,fL){if(bE.isNullOrUndefined(fL)||(fL.length==0)||(fL=="i")){return n.toString()
}if(fL=="id"){return n.toDateString()}if(fL=="it"){return n.toTimeString()
}return bE._netFormatDate(n,fL,false)};bE.localeFormatDate=function di(n,fL){if(bE.isNullOrUndefined(fL)||(fL.length==0)||(fL=="i")){return n.toLocaleString()
}if(fL=="id"){return n.toLocaleDateString()}if(fL=="it"){return n.toLocaleTimeString()
}return bE._netFormatDate(n,fL,true)};bE._netFormatDate=function bM(n,fM,fT){var fL=fT?d9.currentCulture.dateTimeFormat:d9.invariantCulture.dateTimeFormat;
if(fM.length==1){switch(fM){case"f":fM=fL.longDatePattern+" "+fL.shortTimePattern;
break;case"F":fM=fL.dateTimePattern;break;case"d":fM=fL.shortDatePattern;
break;case"D":fM=fL.longDatePattern;break;case"t":fM=fL.shortTimePattern;
break;case"T":fM=fL.longTimePattern;break;case"g":fM=fL.shortDatePattern+" "+fL.shortTimePattern;
break;case"G":fM=fL.shortDatePattern+" "+fL.longTimePattern;
break;case"R":case"r":fL=d9.InvariantCulture.dateTimeFormat;
fM=fL.gmtDateTimePattern;break;case"u":fM=fL.universalDateTimePattern;
break;case"U":fM=fL.dateTimePattern;n=new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),n.getUTCMilliseconds());
break;case"s":fM=fL.sortableDateTimePattern;break}}if(fM.charAt(0)=="%"){fM=fM.substr(1)
}if(!Date._formatRE){Date._formatRE=/'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g
}var fR=Date._formatRE;var fS=new eN();fR.lastIndex=0;
while(true){var fO=fR.lastIndex;var fP=fR.exec(fM);
fS.append(fM.slice(fO,fP?fP.index:fM.length));if(!fP){break
}var fN=fP[0];var fQ=fN;switch(fN){case"dddd":fQ=fL.dayNames[n.getDay()];
break;case"ddd":fQ=fL.shortDayNames[n.getDay()];break;
case"dd":fQ=bE.padLeftString(n.getDate().toString(),2,48);
break;case"d":fQ=n.getDate();break;case"MMMM":fQ=fL.monthNames[n.getMonth()];
break;case"MMM":fQ=fL.shortMonthNames[n.getMonth()];
break;case"MM":fQ=bE.padLeftString((n.getMonth()+1).toString(),2,48);
break;case"M":fQ=(n.getMonth()+1);break;case"yyyy":fQ=n.getFullYear();
break;case"yy":fQ=bE.padLeftString((n.getFullYear()%100).toString(),2,48);
break;case"y":fQ=(n.getFullYear()%100);break;case"h":case"hh":fQ=n.getHours()%12;
if(!fQ){fQ="12"}else{if(fN=="hh"){fQ=bE.padLeftString(fQ.toString(),2,48)
}}break;case"HH":fQ=bE.padLeftString(n.getHours().toString(),2,48);
break;case"H":fQ=n.getHours();break;case"mm":fQ=bE.padLeftString(n.getMinutes().toString(),2,48);
break;case"m":fQ=n.getMinutes();break;case"ss":fQ=bE.padLeftString(n.getSeconds().toString(),2,48);
break;case"s":fQ=n.getSeconds();break;case"t":case"tt":fQ=(n.getHours()<12)?fL.amDesignator:fL.pmDesignator;
if(fN=="t"){fQ=fQ.charAt(0)}break;case"fff":fQ=bE.padLeftString(n.getMilliseconds().toString(),3,48);
break;case"ff":fQ=bE.padLeftString(n.getMilliseconds().toString(),3).substr(0,2);
break;case"f":fQ=bE.padLeftString(n.getMilliseconds().toString(),3).charAt(0);
break;case"z":fQ=n.getTimezoneOffset()/60;fQ=((fQ>=0)?"-":"+")+Math.floor(Math.abs(fQ));
break;case"zz":case"zzz":fQ=n.getTimezoneOffset()/60;
fQ=((fQ>=0)?"-":"+")+Math.floor(bE.padLeftString(Math.abs(fQ)).toString(),2,48);
if(fN=="zzz"){fQ+=fL.timeSeparator+Math.abs(bE.padLeftString(n.getTimezoneOffset()%60).toString(),2,48)
}break;default:if(fQ.charAt(0)=="'"){fQ=fQ.substr(1,fQ.length-2).replace(/\\'/g,"'")
}break}fS.append(fQ)}return fS.toString()};bE._parseExactDate=function bN(f1,fR,fY,f0){fY=(fY&&fY.getFormat(ea))||d9.currentCulture.dateTimeFormat;
var fN=fY.amDesignator,fX=fY.pmDesignator;var fL=function(f5){var f3="1234567890";
for(var f4=0;f4<f5.length;f4++){if(f3.indexOf(f5.charAt(f4))==-1){return false
}}return true};var n=function(f6,f3,f5,f4){for(var f8=f4;
f8>=f5;f8--){var f7=f6.substring(f3,f3+f8);if(f7.length<f5){return null
}if(fL(f7)){return f7}}return null};f1=f1+"";fR=fR+"";
var fU=0;var fT=0;var fP="";var fZ="";var f2=0,fW=1,fQ=1,fS=0,fV=0,fM=0,fO="";
while(fT<fR.length){fP=fR.charAt(fT);fZ="";while((fR.charAt(fT)==fP)&&(fT<fR.length)){fZ+=fR.charAt(fT++)
}if(fZ=="yyyy"||fZ=="yy"||fZ=="y"){if(fZ=="yyyy"){f2=n(f1,fU,4,4)
}if(fZ=="yy"){f2=n(f1,fU,2,2)}if(fZ=="y"){f2=n(f1,fU,2,4)
}if(f2==null){return null}fU+=f2.length;if(f2.length==2){if(f2>30){f2=1900+(f2-0)
}else{f2=2000+(f2-0)}}}else{if(fZ=="MM"||fZ=="M"){fW=n(f1,fU,fZ.length,2);
if(fW==null||(fW<1)||(fW>12)){return null}fU+=fW.length
}else{if(fZ=="dd"||fZ=="d"){fQ=n(f1,fU,fZ.length,2);
if(fQ==null||(fQ<1)||(fQ>31)){return null}fU+=fQ.length
}else{if(fZ=="hh"||fZ=="h"){fS=n(f1,fU,fZ.length,2);
if(fS==null||(fS<1)||(fS>12)){return null}fU+=fS.length
}else{if(fZ=="HH"||fZ=="H"){fS=n(f1,fU,fZ.length,2);
if(fS==null||(fS<0)||(fS>23)){return null}fU+=fS.length
}else{if(fZ=="mm"||fZ=="m"){fV=n(f1,fU,fZ.length,2);
if(fV==null||(fV<0)||(fV>59)){return null}fU+=fV.length
}else{if(fZ=="ss"||fZ=="s"){fM=n(f1,fU,fZ.length,2);
if(fM==null||(fM<0)||(fM>59)){return null}fU+=fM.length
}else{if(fZ=="t"){if(f1.substring(fU,fU+1).toLowerCase()==fN.charAt(0).toLowerCase()){fO=fN
}else{if(f1.substring(fU,fU+1).toLowerCase()==fX.charAt(0).toLowerCase()){fO=fX
}else{return null}}fU+=1}else{if(fZ=="tt"){if(f1.substring(fU,fU+2).toLowerCase()==fN.toLowerCase()){fO=fN
}else{if(f1.substring(fU,fU+2).toLowerCase()==fX.toLowerCase()){fO=fX
}else{return null}}fU+=2}else{if(f1.substring(fU,fU+fZ.length)!=fZ){return null
}else{fU+=fZ.length}}}}}}}}}}}if(fU!=f1.length){return null
}if(fW==2){if(((f2%4==0)&&(f2%100!=0))||(f2%400==0)){if(fQ>29){return null
}}else{if(fQ>28){return null}}}if((fW==4)||(fW==6)||(fW==9)||(fW==11)){if(fQ>30){return null
}}if(fS<12&&fO==fX){fS=fS-0+12}else{if(fS>11&&fO==fN){fS-=12
}}if(f0){return new Date(Date.UTC(f2,fW-1,fQ,fS,fV,fM))
}else{return new Date(f2,fW-1,fQ,fS,fV,fM)}};bE.parseExactDate=function dv(fM,n,fL){return bE._parseExactDate(fM,n,fL,false)
};bE.parseExactDateUTC=function dw(fM,n,fL){return bE._parseExactDate(fM,n,fL,true)
};bE._delegateContains=function bG(fN,fM,fL){for(var n=0;
n<fN.length;n+=2){if(fN[n]===fM&&fN[n+1]===fL){return true
}}return false};bE._mkdel=function bL(fL){var n=function(){if(fL.length==2){return fL[1].apply(fL[0],arguments)
}else{var fM=bE.arrayClone(fL);for(var fN=0;fN<fM.length;
fN+=2){if(bE._delegateContains(fL,fM[fN],fM[fN+1])){fM[fN+1].apply(fM[fN],arguments)
}}return null}};n._targets=fL;return n};bE.mkdel=function dn(fL,n){if(!fL){return n
}return bE._mkdel([fL,n])};bE.delegateCombine=function ci(n,fL){if(!n){if(!fL._targets){return bE.mkdel(null,fL)
}return fL}if(!fL){if(!n._targets){return bE.mkdel(null,n)
}return n}var fM=n._targets?n._targets:[null,n];var fN=fL._targets?fL._targets:[null,fL];
return bE._mkdel(fM.concat(fN))};bE.delegateRemove=function ck(n,fL){if(!n||(n===fL)){return null
}if(!fL){return n}var fQ=n._targets;var fO=null;var fN;
if(fL._targets){fO=fL._targets[0];fN=fL._targets[1]
}else{fN=fL}for(var fM=0;fM<fQ.length;fM+=2){if((fQ[fM]===fO)&&(fQ[fM+1]===fN)){if(fQ.length==2){return null
}var fP=bE.arrayClone(fQ);fP.splice(fM,2);return bE._mkdel(fP)
}}return n};bE.delegateEquals=function cj(n,fL){if(n===fL){return true
}if(!n._targets&&!fL._targets){return false}var fN=n._targets||[null,n],fO=fL._targets||[null,fL];
if(fN.length!=fO.length){return false}for(var fM=0;
fM<fN.length;fM++){if(fN[fM]!==fO[fM]){return false
}}return true};bE.delegateClone=function ch(n){return n._targets?bE._mkdel(n._targets):function(){return n.apply(this,arguments)
}};bE.thisFix=function dN(n){return function(){var fM=[this];
for(var fL=0;fL<arguments.length;fL++){fM.push(arguments[fL])
}return n.apply(n,fM)}};bE.getInvocationList=function cF(n){if(!n._targets){return[n]
}var fM=[];for(var fL=0;fL<n._targets.length;fL+=2){fM.push(bE.mkdel(n._targets[fL],n._targets[fL+1]))
}return fM};bE.regexpEscape=function dy(n){return n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
};bE.Debug=aa.Debug||function(){};bE.Debug.__typeName="Debug";
if(!bE.Debug.writeln){bE.Debug.writeln=function H(n){if(aa.console){if(aa.console.debug){aa.console.debug(n);
return}else{if(aa.console.log){aa.return}}}else{if(aa.opera&&aa.opera.postError){aa.opera.postError(n);
return}}}}bE.Debug._fail=function E(n){bE.Debug.writeln(n);
};bE.Debug.assert=function F(n,fL){if(!n){fL="Assert failed: "+fL;
if(confirm(fL+"\r\n\r\nBreak into debugger?")){bE.Debug._fail(fL)
}}};bE.Debug.fail=function G(n){bE.Debug._fail(n)};
var ed=function M(){};ed.__typeName="ss.Enum";bE.Enum=ed;
bE.initClass(ed,bE,{});ed.parse=function O(n,fR){var fT=n.prototype;
if(!bE.isFlags(n)){for(var fL in fT){if(fL===fR){return fT[fL]
}}}else{var fQ=fR.split("|");var fS=0;var fO=true;for(var fN=fQ.length-1;
fN>=0;fN--){var fP=fQ[fN].trim();var fM=false;for(var fL in fT){if(fL===fP){fS|=fT[fL];
fM=true;break}}if(!fM){fO=false;break}}if(fO){return fS
}}throw new d3("Invalid Enumeration Value")};ed.toString=function P(n,fN){var fO=n.prototype;
if(!bE.isFlags(n)||(fN===0)){for(var fL in fO){if(fO[fL]===fN){return fL
}}throw new d3("Invalid Enumeration Value")}else{var fM=[];
for(var fL in fO){if(fO[fL]&fN){bE.add(fM,fL)}}if(!fM.length){throw new d3("Invalid Enumeration Value")
}return fM.join(" | ")}};ed.getValues=function N(n){var fM=[];
var fN=n.prototype;for(var fL in fN){if(fN.hasOwnProperty(fL)){fM.push(fN[fL])
}}return fM};ed.getName=function P(n,fM){var fN=n.prototype;
for(var fL in fN){if(fN.hasOwnProperty(fL)){if(fN[fL]===fM){return fL
}}}throw new d3("Invalid Enumeration Value")};var d9=function A(fL,fM,n){this.name=fL;
this.numberFormat=fM;this.dateTimeFormat=n};d9.__typeName="ss.CultureInfo";
bE.CultureInfo=d9;bE.initClass(d9,bE,{getFormat:function B(n){switch(n){case eI:return this.numberFormat;
case ea:return this.dateTimeFormat;default:return null
}}},null,[es]);d9.invariantCulture=new d9("en-US",eI.invariantInfo,ea.invariantInfo);
d9.currentCulture=d9.invariantCulture;var ep=function aq(){};
ep.__typeName="ss.IEnumerator";bE.IEnumerator=ep;bE.initInterface(ep,bE,{current:null,moveNext:null,reset:null},[en]);
var eo=function ap(){};eo.__typeName="ss.IEnumerable";
bE.IEnumerable=eo;bE.initInterface(eo,bE,{getEnumerator:null});
bE.getEnumerator=function cy(n){return n.getEnumerator?n.getEnumerator():new d6(n)
};var ej=function ak(){};ej.__typeName="ss.ICollection";
bE.ICollection=ej;bE.initInterface(ej,bE,{get_count:null,add:null,clear:null,contains:null,remove:null});
bE.count=function cd(n){return n.get_count?n.get_count():n.length
};bE.add=function bP(fL,n){if(fL.add){fL.add(n)}else{if(bE.isArray(fL)){fL.push(n)
}else{throw new eF()}}};bE.clear=function b6(n){if(n.clear){n.clear()
}else{if(bE.isArray(n)){n.length=0}else{throw new eF()
}}};bE.remove=function dB(fM,fL){if(fM.remove){return fM.remove(fL)
}else{if(bE.isArray(fM)){var n=bE.indexOf(fM,fL);if(n>=0){fM.splice(n,1);
return true}return false}else{throw new eF()}}};bE.contains=function cc(fL,n){if(fL.contains){return fL.contains(n)
}else{return bE.indexOf(fL,n)>=0}};var eR=function fB(n){this.ticks=n||0
};eR.getDefaultValue=eR.createInstance=function fD(){return new eR(0)
};eR.__typeName="ss.TimeSpan";bE.TimeSpan=eR;bE.initClass(eR,bE,{compareTo:function fC(n){return this.ticks<n.ticks?-1:(this.ticks>n.ticks?1:0)
},equals:function fE(n){return bE.isInstanceOfType(n,eR)&&n.ticks===this.ticks
},equalsT:function fF(n){return n.ticks===this.ticks
},toString:function fG(){var n=function(fO,fN){return bE.padLeftString(fO+"",fN||2,48)
};var fM=this.ticks;var fL="";if(Math.abs(fM)>=864000000000){fL+=n((fM/864000000000)|0)+".";
fM%=864000000000}fL+=n(fM/36000000000|0)+":";fM%=36000000000;
fL+=n(fM/600000000|0)+":";fM%=600000000;fL+=n(fM/10000000|0);
fM%=10000000;if(fM>0){fL+="."+n(fM,7)}return fL}},null,[ek,er]);
eR.__class=false;var eq=function ar(){};eq.__typeName="ss.IEqualityComparer";
bE.IEqualityComparer=eq;bE.initInterface(eq,bE,{areEqual:null,getObjectHashCode:null});
var el=function am(){};el.__typeName="ss.IComparer";
bE.IComparer=el;bE.initInterface(el,bE,{compare:null});
bE.unbox=function dY(n){if(!bE.isValue(n)){throw new ex("Nullable object must have a value.")
}return n};var eG=function aZ(fL){var n=function(){};
n.isInstanceOfType=function(fM){return bE.isInstanceOfType(fM,fL)
};bE.registerGenericClassInstance(n,eG,[fL],{},function(){return null
},function(){return[]});return n};eG.__typeName="ss.Nullable$1";
bE.Nullable$1=eG;bE.initGenericClass(eG,bE,1);eG.eq=function a6(n,fL){return !bE.isValue(n)?!bE.isValue(fL):(n===fL)
};eG.ne=function a6(n,fL){return !bE.isValue(n)?bE.isValue(fL):(n!==fL)
};eG.le=function a9(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n<=fL
};eG.ge=function a7(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n>=fL
};eG.lt=function bb(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n<fL
};eG.gt=function a8(n,fL){return bE.isValue(n)&&bE.isValue(fL)&&n>fL
};eG.sub=function bl(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n-fL:null
};eG.add=function a0(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n+fL:null
};eG.mod=function bc(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n%fL:null
};eG.div=function a5(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n/fL:null
};eG.mul=function bd(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n*fL:null
};eG.band=function a2(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n&fL:null
};eG.bor=function a3(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n|fL:null
};eG.xor=function bm(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n^fL:null
};eG.shl=function bi(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n<<fL:null
};eG.srs=function bj(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n>>fL:null
};eG.sru=function bk(n,fL){return bE.isValue(n)&&bE.isValue(fL)?n>>>fL:null
};eG.and=function a1(n,fL){if(n===true&&fL===true){return true
}else{if(n===false||fL===false){return false}else{return null
}}};eG.or=function bg(n,fL){if(n===true||fL===true){return true
}else{if(n===false&&fL===false){return false}else{return null
}}};eG.not=function bf(n){return bE.isValue(n)?!n:null
};eG.neg=function be(n){return bE.isValue(n)?-n:null
};eG.pos=function bh(n){return bE.isValue(n)?+n:null
};eG.cpl=function a4(n){return bE.isValue(n)?~n:null
};eG.lift=function ba(){for(var n=0;n<arguments.length;
n++){if(!bE.isValue(arguments[n])){return null}}return arguments[0].apply(null,Array.prototype.slice.call(arguments,1))
};var eu=function aw(){};eu.__typeName="ss.IList";bE.IList=eu;
bE.initInterface(eu,bE,{get_item:null,set_item:null,indexOf:null,insert:null,removeAt:null},[ej,eo]);
bE.getItem=function cG(fL,n){return fL.get_item?fL.get_item(n):fL[n]
};bE.setItem=function dI(fL,n,fM){fL.set_item?fL.set_item(n,fM):(fL[n]=fM)
};bE.indexOf=function cQ(fM,fL){if(bE.isArrayOrTypedArray(fM)){for(var n=0;
n<fM.length;n++){if(bE.staticEquals(fM[n],fL)){return n
}}return -1}else{return fM.indexOf(fL)}};bE.insert=function cY(fM,n,fL){if(fM.insert){fM.insert(n,fL)
}else{if(bE.isArray(fM)){fM.splice(n,0,fL)}else{throw new eF()
}}};bE.removeAt=function dC(fL,n){if(fL.removeAt){fL.removeAt(n)
}else{if(bE.isArray(fL)){fL.splice(n,1)}else{throw new eF()
}}};var em=function an(){};em.__typeName="ss.IDictionary";
bE.IDictionary=em;bE.initInterface(em,bE,{get_item:null,set_item:null,get_keys:null,get_values:null,containsKey:null,add:null,remove:null,tryGetValue:null},[eo]);
var ev=function ax(){};ev.__typeName="ss.Int32";bE.Int32=ev;
bE.initClass(ev,bE,{},Object,[er,ek,et]);ev.__class=false;
ev.isInstanceOfType=function aA(n){return typeof(n)==="number"&&isFinite(n)&&Math.round(n,0)==n
};ev.getDefaultValue=ev.createInstance=function az(){return 0
};ev.div=function ay(n,fL){if(!bE.isValue(n)||!bE.isValue(fL)){return null
}if(fL===0){throw new ec()}return ev.trunc(n/fL)};ev.trunc=function aB(fL){return bE.isValue(fL)?(fL>0?Math.floor(fL):Math.ceil(fL)):null
};ev.tryParse=function aC(fP,fO,fM,fL){fO.$=0;if(!/^[+-]?[0-9]+$/.test(fP)){return 0
}var fN=parseInt(fP,10);if(fN<fM||fN>fL){return false
}fO.$=fN;return true};var eA=function aP(){};eA.__typeName="ss.JsDate";
bE.JsDate=eA;bE.initClass(eA,bE,{},Object,[er,ek]);
eA.createInstance=function aQ(){return new Date()};
eA.isInstanceOfType=function aR(n){return n instanceof Date
};var d6=function q(n){this._array=n;this._index=-1
};d6.__typeName="ss.ArrayEnumerator";bE.ArrayEnumerator=d6;
bE.initClass(d6,bE,{moveNext:function t(){this._index++;
return(this._index<this._array.length)},reset:function u(){this._index=-1
},current:function r(){if(this._index<0||this._index>=this._array.length){throw"Invalid operation"
}return this._array[this._index]},dispose:function s(){}},null,[ep,en]);
var eJ=function bq(n){this._keys=Object.keys(n);this._index=-1;
this._object=n};eJ.__typeName="ss.ObjectEnumerator";
bE.ObjectEnumerator=eJ;bE.initClass(eJ,bE,{moveNext:function bt(){this._index++;
return(this._index<this._keys.length)},reset:function bu(){this._index=-1
},current:function br(){if(this._index<0||this._index>=this._keys.length){throw new ex("Invalid operation")
}var n=this._keys[this._index];return{key:n,value:this._object[n]}
},dispose:function bs(){}},null,[ep,en]);var ee=function Q(){};
ee.__typeName="ss.EqualityComparer";bE.EqualityComparer=ee;
bE.initClass(ee,bE,{areEqual:function R(n,fL){return bE.staticEquals(n,fL)
},getObjectHashCode:function S(n){return bE.isValue(n)?bE.getHashCode(n):0
}},null,[eq]);ee.def=new ee();var d8=function x(n){this.f=n
};d8.__typeName="ss.Comparer";bE.Comparer=d8;bE.initClass(d8,bE,{compare:function y(n,fL){return this.f(n,fL)
}},null,[el]);d8.def=new d8(function z(n,fL){if(!bE.isValue(n)){return !bE.isValue(fL)?0:-1
}else{if(!bE.isValue(fL)){return 1}else{return bE.compare(n,fL)
}}});var d0=function a(n,fL){this._dict=n;this._isKeys=fL
};var eb=function J(fL,fM){var n=function(fS,fO){this.countField=0;
this.buckets={};this.comparer=fO||ee.def;if(bE.isInstanceOfType(fS,em)){var fP=bE.getEnumerator(fS);
try{while(fP.moveNext()){var fN=fP.current();this.add(fN.key,fN.value)
}}finally{if(bE.isInstanceOfType(fP,en)){bE.cast(fP,en).dispose()
}}}else{if(fS){var fR=Object.keys(fS);for(var fQ=0;
fQ<fR.length;fQ++){this.add(fR[fQ],fS[fR[fQ]])}}}};
bE.registerGenericClassInstance(n,eb,[fL,fM],{_setOrAdd:function(fS,fT,fN){var fQ=this.comparer.getObjectHashCode(fS);
var fP={key:fS,value:fT};if(this.buckets.hasOwnProperty(String(fQ))){var fO=this.buckets[fQ];
for(var fR=0;fR<fO.length;fR++){if(this.comparer.areEqual(fO[fR].key,fS)){if(fN){throw new d3("Key "+fS+" already exists.")
}fO[fR]=fP;return}}fO.push(fP)}else{this.buckets[fQ]=[fP]
}this.countField++},add:function(fN,fO){this._setOrAdd(fN,fO,true)
},set_item:function(fN,fO){this._setOrAdd(fN,fO,false)
},_get:function(fR){var fP=this.comparer.getObjectHashCode(fR);
if(this.buckets.hasOwnProperty(String(fP))){var fN=this.buckets[fP];
for(var fQ=0;fQ<fN.length;fQ++){var fO=fN[fQ];if(this.comparer.areEqual(fO.key,fR)){return fO.value!==undefined?fO.value:null
}}}return undefined},get_item:function(fN){var fO=this._get(fN);
if(fO===undefined){throw new eC("Key "+fN+" does not exist.")
}return fO},tryGetValue:function(fN,fP){var fO=this._get(fN);
if(fO!==undefined){fP.$=fO;return true}else{fP.$=bE.getDefaultValue(fM);
return false}},containsKey:function(fQ){var fO=this.comparer.getObjectHashCode(fQ);
if(!this.buckets.hasOwnProperty(String(fO))){return false
}var fN=this.buckets[fO];for(var fP=0;fP<fN.length;
fP++){if(this.comparer.areEqual(fN[fP].key,fQ)){return true
}}return false},clear:function(){this.countField=0;
this.buckets={}},remove:function(fQ){var fO=this.comparer.getObjectHashCode(fQ);
if(!this.buckets.hasOwnProperty(String(fO))){return false
}var fN=this.buckets[fO];for(var fP=0;fP<fN.length;
fP++){if(this.comparer.areEqual(fN[fP].key,fQ)){fN.splice(fP,1);
if(fN.length==0){delete this.buckets[fO]}this.countField--;
return true}}return false},get_count:function(){return this.countField
},_getEnumerator:function(fQ){var fP=Object.keys(this.buckets),fO=-1,fN;
return new ez(function(){if(fO<0||fN>=(this.buckets[fP[fO]].length-1)){fN=-1;
fO++}if(fO>=fP.length){return false}fN++;return true
},function(){return fQ(this.buckets[fP[fO]][fN])},null,this)
},get_keys:function(){return new d0(this,true)},get_values:function(){return new d0(this,false)
},getEnumerator:function(){return this._getEnumerator(function(fN){return fN
})}},function(){return null},function(){return[em,eo]
});return n};eb.__typeName="ss.Dictionary$2";bE.Dictionary$2=eb;
bE.initGenericClass(eb,bE,2);d0.__typeName="ss.$DictionaryCollection";
bE.$DictionaryCollection=d0;bE.initClass(d0,bE,{get_count:function e(){return this._dict.get_count()
},contains:function d(fN){if(this._isKeys){return this._dict.containsKey(fN)
}else{for(var fL in this._dict.buckets){if(this._dict.buckets.hasOwnProperty(fL)){var n=this._dict.buckets[fL];
for(var fM=0;fM<n.length;fM++){if(this._dict.comparer.areEqual(n[fM].value,fN)){return true
}}}}return false}},getEnumerator:function f(n){return this._dict._getEnumerator(this._isKeys?function(fL){return fL.key
}:function(fL){return fL.value})},add:function b(n){throw new ex("Collection is read-only")
},clear:function c(){throw new ex("Collection is read-only")
},remove:function g(){throw new ex("Collection is read-only")
}},null,[eo,ej]);var en=function ao(){};en.__typeName="ss.IDisposable";
bE.IDisposable=en;bE.initInterface(en,bE,{dispose:null});
var eN=function e3(n){this._parts=(bE.isValue(n)&&n!="")?[n]:[];
this.length=bE.isValue(n)?n.length:0};eN.__typeName="ss.StringBuilder";
bE.StringBuilder=eN;bE.initClass(eN,bE,{append:function e4(n){if(bE.isValue(n)){var fL=n.toString();
bE.add(this._parts,fL);this.length+=fL.length}return this
},appendChar:function e5(n){return this.append(String.fromCharCode(n))
},appendLine:function e6(n){this.append(n);this.append("\r\n");
return this},appendLineChar:function e7(n){return this.appendLine(String.fromCharCode(n))
},clear:function e8(){this._parts=[];this.length=0},toString:function e9(){return this._parts.join("")
}});var eL=function bx(fQ){var n=(fQ===undefined)?parseInt(Date.now()%2147483648):parseInt(Math.abs(fQ));
this.inext=0;this.inextp=21;this.seedArray=new Array(56);
for(var fL=0;fL<56;fL++){this.seedArray[fL]=0}n=161803398-n;
if(n<0){n+=2147483648}this.seedArray[55]=n;var fP=1;
for(var fL=1;fL<55;fL++){var fM=(21*fL)%55;this.seedArray[fM]=fP;
fP=n-fP;if(fP<0){fP+=2147483648}n=this.seedArray[fM]
}for(var fN=1;fN<5;fN++){for(var fO=1;fO<56;fO++){this.seedArray[fO]-=this.seedArray[1+(fO+30)%55];
if(this.seedArray[fO]<0){this.seedArray[fO]+=2147483648
}}}};eL.__typeName="ss.Random";bE.Random=eL;bE.initClass(eL,bE,{next:function by(){return this.sample()*2147483648|0
},nextMax:function bB(n){return this.sample()*n|0},nextMinMax:function bC(fL,n){return(this.sample()*(n-fL)+fL)|0
},nextBytes:function bz(n){for(var fL=0;fL<n.length;
fL++){n[fL]=(this.sample()*256)|0}},nextDouble:function bA(){return this.sample()
},sample:function bD(){if(++this.inext>=56){this.inext=1
}if(++this.inextp>=56){this.inextp=1}var n=this.seedArray[this.inext]-this.seedArray[this.inextp];
if(n<0){n+=2147483648}this.seedArray[this.inext]=n;
return n*(1/2147483648)}});var ef=function T(){};ef.__typeName="ss.EventArgs";
bE.EventArgs=ef;bE.initClass(ef,bE,{});ef.Empty=new ef();
var eg=function U(fL,n){this._message=fL||"An error occurred.";
this._innerException=n||null;this._error=new Error()
};eg.__typeName="ss.Exception";bE.Exception=eg;bE.initClass(eg,bE,{get_message:function W(){return this._message
},get_innerException:function V(){return this._innerException
},get_stack:function X(){return this._error.stack}});
eg.wrap=function Y(n){if(bE.isInstanceOfType(n,eg)){return n
}else{if(n instanceof TypeError){return new eH(n.message,new eB(n))
}else{if(n instanceof RangeError){return new d5(null,n.message,new eB(n))
}else{if(n instanceof Error){return new eB(n)}else{return new eg(n.toString())
}}}}};var eE=function aX(fL,n){eg.call(this,fL||"The method or operation is not implemented.",n)
};eE.__typeName="ss.NotImplementedException";bE.NotImplementedException=eE;
bE.initClass(eE,bE,{},eg);var eF=function aY(fL,n){eg.call(this,fL||"Specified method is not supported.",n)
};eF.__typeName="ss.NotSupportedException";bE.NotSupportedException=eF;
bE.initClass(eF,bE,{},eg);var d1=function h(fL,n){this.innerExceptions=bE.isValue(n)?bE.arrayFromEnumerable(n):[];
eg.call(this,fL||"One or more errors occurred.",this.innerExceptions.length?this.innerExceptions[0]:null)
};d1.__typeName="ss.AggregateException";bE.AggregateException=d1;
bE.initClass(d1,bE,{flatten:function i(){var fM=[];
for(var fL=0;fL<this.innerExceptions.length;fL++){var n=this.innerExceptions[fL];
if(bE.isInstanceOfType(n,d1)){fM.push.apply(fM,n.flatten().innerExceptions)
}else{fM.push(n)}}return new d1(this._message,fM)}},eg);
var eK=function bv(n,fM,fL){eg.call(this,fM||(n.length&&n[0]?n[0].toString():"An error occurred"),fL);
this.arguments=bE.arrayClone(n)};eK.__typeName="ss.PromiseException";
bE.PromiseException=eK;bE.initClass(eK,bE,{get_arguments:function bw(){return this._arguments
}},eg);var eB=function aS(n,fM,fL){eg.call(this,fM||n.message,fL);
this.error=n};eB.__typeName="ss.JsErrorException";bE.JsErrorException=eB;
bE.initClass(eB,bE,{get_stack:function X(){return this.error.stack
}},eg);var d3=function k(fL,fM,n){eg.call(this,fL||"Value does not fall within the expected range.",n);
this.paramName=fM||null};d3.__typeName="ss.ArgumentException";
bE.ArgumentException=d3;bE.initClass(d3,bE,{},eg);var d4=function l(fM,fL,n){if(!fL){fL="Value cannot be null.";
if(fM){fL+="\nParameter name: "+fM}}d3.call(this,fL,fM,n)
};d4.__typeName="ss.ArgumentNullException";bE.ArgumentNullException=d4;
bE.initClass(d4,bE,{},d3);var d5=function m(fN,fM,fL,n){if(!fM){fM="Value is out of range.";
if(fN){fM+="\nParameter name: "+fN}}d3.call(this,fM,fN,fL);
this.actualValue=n||null};d5.__typeName="ss.ArgumentOutOfRangeException";
bE.ArgumentOutOfRangeException=d5;bE.initClass(d5,bE,{},d3);
var eh=function Z(fL,n){eg.call(this,fL||"Invalid format.",n)
};eh.__typeName="ss.FormatException";bE.FormatException=eh;
bE.initClass(eh,bE,{},eg);var ec=function K(fL,n){eg.call(this,fL||"Division by 0.",n)
};ec.__typeName="ss.DivideByZeroException";bE.DivideByZeroException=ec;
bE.initClass(ec,bE,{},eg);var ew=function aD(fL,n){eg.call(this,fL||"The cast is not valid.",n)
};ew.__typeName="ss.InvalidCastException";bE.InvalidCastException=ew;
bE.initClass(ew,bE,{},eg);var ex=function aE(fL,n){eg.call(this,fL||"Operation is not valid due to the current state of the object.",n)
};ex.__typeName="ss.InvalidOperationException";bE.InvalidOperationException=ex;
bE.initClass(ex,bE,{},eg);var eH=function bn(fL,n){eg.call(this,fL||"Object is null.",n)
};eH.__typeName="ss.NullReferenceException";bE.NullReferenceException=eH;
bE.initClass(eH,bE,{},eg);var eC=function aT(fL,n){eg.call(this,fL||"Key not found.",n)
};eC.__typeName="ss.KeyNotFoundException";bE.KeyNotFoundException=eC;
bE.initClass(eC,bE,{},eg);var d2=function j(fL,n){eg.call(this,fL||"Ambiguous match.",n)
};d2.__typeName="ss.AmbiguousMatchException";bE.AmbiguousMatchException=d2;
bE.initClass(d2,bE,{},eg);var ey=function aI(fL,n){this._getEnumerator=fL;
this._this=n};ey.__typeName="ss.IteratorBlockEnumerable";
bE.IteratorBlockEnumerable=ey;bE.initClass(ey,bE,{getEnumerator:function aJ(){return this._getEnumerator.call(this._this)
}},null,[eo]);var ez=function aK(fN,fM,fL,n){this._moveNext=fN;
this._getCurrent=fM;this._dispose=fL;this._this=n};
ez.__typeName="ss.IteratorBlockEnumerator";bE.IteratorBlockEnumerator=ez;
bE.initClass(ez,bE,{moveNext:function aN(){try{return this._moveNext.call(this._this)
}catch(n){if(this._dispose){this._dispose.call(this._this)
}throw n}},current:function aL(){return this._getCurrent.call(this._this)
},reset:function aO(){throw new eF("Reset is not supported.")
},dispose:function aM(){if(this._dispose){this._dispose.call(this._this)
}}},null,[ep,en]);var eD=function aU(n){this._valueFactory=n;
this.isValueCreated=false};eD.__typeName="ss.Lazy";
bE.Lazy=eD;bE.initClass(eD,bE,{value:function aV(){if(!this.isValueCreated){this._value=this._valueFactory();
delete this._valueFactory;this.isValueCreated=true}return this._value
}});var eO=function fa(n,fL){this._action=n;this._state=fL;
this.exception=null;this.status=0;this._thens=[];this._result=null
};eO.delay=function fh(n){var fL=new eP();setTimeout(function(){fL.setResult(0)
},n);return fL.task};eO.fromResult=function fm(n){var fL=new eO();
fL.status=5;fL._result=n;return fL};eO.run=function fs(n){var fL=new eP();
setTimeout(function(){try{fL.setResult(n())}catch(fM){fL.setException(eg.wrap(fM))
}},0);return fL.task};eO.whenAll=function fu(fP){var fQ=new eP();
if(fP.length===0){fQ.setResult([])}else{var fO=new Array(fP.length),fN=fP.length,n=false,fL=[];
for(var fM=0;fM<fP.length;fM++){(function(fR){fP[fR].continueWith(function(fS){switch(fS.status){case 5:fO[fR]=fS.getResult();
break;case 6:n=true;break;case 7:bE.arrayAddRange(fL,fS.exception.innerExceptions);
break;default:throw new ex("Invalid task status "+fS.status)
}if(--fN===0){if(fL.length>0){fQ.setException(fL)}else{if(n){fQ.setCanceled()
}else{fQ.setResult(fO)}}}})})(fM)}}return fQ.task};
eO.whenAny=function fv(fL){if(!fL.length){throw new d3("Must wait for at least one task","tasks")
}var fM=new eP();for(var n=0;n<fL.length;n++){fL[n].continueWith(function(fN){switch(fN.status){case 5:fM.trySetResult(fN);
break;case 6:fM.trySetCanceled();break;case 7:fM.trySetException(fN.exception.innerExceptions);
break;default:throw new ex("Invalid task status "+fN.status)
}})}return fM.task};eO.fromDoneCallback=function fj(fO,fM,fN){var fP=new eP(),n;
if(typeof(fM)==="number"){n=Array.prototype.slice.call(arguments,3);
if(fM<0){fM+=n.length+1}}else{n=Array.prototype.slice.call(arguments,2);
fN=fM;fM=n.length}var fL=function(fQ){fP.setResult(fQ)
};n=n.slice(0,fM).concat(fL,n.slice(fM));fO[fN].apply(fO,n);
return fP.task};eO.fromPromise=function fl(fL,n){var fM=new eP();
if(typeof(n)==="number"){n=(function(fN){return function(){return arguments[fN>=0?fN:(arguments.length+fN)]
}})(n)}else{if(typeof(n)!=="function"){n=function(){return Array.prototype.slice.call(arguments,0)
}}}fL.then(function(){fM.setResult(typeof(n)==="function"?n.apply(null,arguments):null)
},function(){fM.setException(new eK(Array.prototype.slice.call(arguments,0)))
});return fM.task};eO.fromNode=function fk(fO,fM,fN){var fP=new eP(),n;
if(typeof(fM)==="function"){n=Array.prototype.slice.call(arguments,3)
}else{n=Array.prototype.slice.call(arguments,2);fN=fM;
fM=function(){return arguments[0]}}var fL=function(fQ){if(fQ){fP.setException(eg.wrap(fQ))
}else{fP.setResult(fM.apply(null,Array.prototype.slice.call(arguments,1)))
}};n.push(fL);fO[fN].apply(fO,n);return fP.task};eO.__typeName="ss.Task";
bE.Task=eO;bE.initClass(eO,bE,{continueWith:function fg(fL){var fN=new eP();
var n=this;var fM=function(){try{fN.setResult(fL(n))
}catch(fO){fN.setException(eg.wrap(fO))}};if(this.isCompleted()){setTimeout(fM,0)
}else{this._thens.push(fM)}return fN.task},start:function ft(){if(this.status!==0){throw new ex("Task was already started.")
}var n=this;this.status=3;setTimeout(function(){try{var fM=n._action(n._state);
delete n._action;delete n._state;n._complete(fM)}catch(fL){n._fail(new d1(null,[eg.wrap(fL)]))
}},0)},_runCallbacks:function ff(){for(var n=0;n<this._thens.length;
n++){this._thens[n](this)}delete this._thens},_complete:function fc(n){if(this.isCompleted()){return false
}this._result=n;this.status=5;this._runCallbacks();
return true},_fail:function fd(n){if(this.isCompleted()){return false
}this.exception=n;this.status=7;this._runCallbacks();
return true},_cancel:function fb(){if(this.isCompleted()){return false
}this.status=6;this._runCallbacks();return true},isCanceled:function fp(){return this.status===6
},isCompleted:function fq(){return this.status>=5},isFaulted:function fr(){return this.status===7
},_getResult:function fe(n){switch(this.status){case 5:return this._result;
case 6:throw new ex("Task was cancelled.");case 7:throw n?this.exception.innerExceptions[0]:this.exception;
default:throw new ex("Task is not yet completed.")}},getResult:function fo(){return this._getResult(false)
},getAwaitedResult:function fn(){return this._getResult(true)
},dispose:function fi(){}},null,[en]);var eQ=function(){};
eQ.__typeName="ss.TaskStatus";bE.TaskStatus=eQ;bE.initEnum(eQ,bE,{created:0,running:3,ranToCompletion:5,canceled:6,faulted:7});
var eP=function fw(){this.task=new eO();this.task.status=3
};eP.__typeName="ss.TaskCompletionSource";bE.TaskCompletionSource=eP;
bE.initClass(eP,bE,{setCanceled:function fx(){if(!this.task._cancel()){throw new ex("Task was already completed.")
}},setResult:function fz(n){if(!this.task._complete(n)){throw new ex("Task was already completed.")
}},setException:function fy(n){if(!this.trySetException(n)){throw new ex("Task was already completed.")
}},trySetCanceled:function fA(){return this.task._cancel()
},trySetResult:function fz(n){return this.task._complete(n)
},trySetException:function fy(n){if(bE.isInstanceOfType(n,eg)){n=[n]
}return this.task._fail(new d1(null,n))}});var d7=function w(){ef.call(this);
this.cancel=false};d7.__typeName="ss.CancelEventArgs";
bE.CancelEventArgs=d7;bE.initClass(d7,bE,{},ef);var ei=function ab(){};
ei.$valid=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/ig;
ei.$split=/^(.{8})(.{4})(.{4})(.{4})(.{12})$/;ei.empty="00000000-0000-0000-0000-000000000000";
ei.$rng=new eL();ei.__typeName="ss.Guid";bE.Guid=ei;
bE.initClass(ei,bE,{},Object,[er,ek]);ei.__class=false;
ei.isInstanceOfType=function ag(n){return typeof(n)==="string"&&n.match(ei.$valid)
};ei.getDefaultValue=ei.createInstance=function ac(){return ei.empty
};ei.parse=function ai(fM,n){var fL={};if(ei.tryParse(fM,n,fL)){return fL.$
}throw new eh("Unable to parse UUID")};ei.tryParse=function aj(fO,fL,fN){fN.$=ei.empty;
if(!bE.isValue(fO)){throw new d4("uuid")}if(!fL){var fM=/^[{(]?([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})[)}]?$/ig.exec(fO);
if(fM){fN.$=fM.slice(1).join("-").toLowerCase();return true
}}else{if(fL==="N"){var fM=ei.$split.exec(fO);if(!fM){return false
}fO=fM.slice(1).join("-")}else{if(fL==="B"||fL==="P"){var n=fL==="B";
if(fO[0]!==(n?"{":"(")||fO[fO.length-1]!==(n?"}":")")){return false
}fO=fO.substr(1,fO.length-2)}}if(fO.match(ei.$valid)){fN.$=fO.toLowerCase();
return true}}return false};ei.format=function ad(fL,n){switch(n){case"N":return fL.replace(/-/g,"");
case"B":return"{"+fL+"}";case"P":return"("+fL+")";default:return fL
}};ei.fromBytes=function ae(n){if(!n||n.length!==16){throw new d3("b","Must be 16 bytes")
}var fL=n.map(function(fM){return bE.formatNumber(fM&255,"x2")
}).join("");return ei.$split.exec(fL).slice(1).join("-")
};ei.newGuid=function ah(){var n=Array(16);ei.$rng.nextBytes(n);
n[6]=n[6]&15|64;n[8]=n[8]&191|128;return ei.fromBytes(n)
};ei.getBytes=function af(fN){var n=Array(16);var fM=fN.replace(/-/g,"");
for(var fL=0;fL<16;fL++){n[fL]=parseInt(fM.substr(fL*2,2),16)
}return n};if(aa.ss){for(var aW in bE){if(bE.hasOwnProperty(aW)){aa.ss[aW]=bE[aW]
}}}else{aa.ss=bE}})(global);