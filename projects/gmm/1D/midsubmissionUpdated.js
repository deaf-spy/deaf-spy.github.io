(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.tX(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.tY(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=b.fs[0]
if(a)return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"(receiver) {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(receiver, this);"+"}")(b,H.n4,null)
else return new Function("parameters, createTearOffClass, cache","return function tearOff_"+s+y+++"() {"+"if (cache === null) cache = createTearOffClass(parameters);"+"return new cache(this, null);"+"}")(b,H.n4,null)}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=H.n4(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={as:function as(a,b){this.a=a
this.$ti=b},jT:function jT(a){this.a=a},eY:function eY(a,b){this.a=a
this.b=null
this.$ti=b},
qn(a){switch(a){case"http://www.w3.org/1999/xhtml":return"html"
case"http://www.w3.org/1998/Math/MathML":return"math"
case"http://www.w3.org/2000/svg":return"svg"
case"http://www.w3.org/1999/xlink":return"xlink"
case"http://www.w3.org/XML/1998/namespace":return"xml"
case"http://www.w3.org/2000/xmlns/":return"xmlns"
default:return null}},
a6(a){H.iB(a)
if(a==null)return!1
return A.nb(C.b.E(a,0))},
nb(a){switch(a){case 9:case 10:case 12:case 13:case 32:return!0}return!1},
aQ(a){var s,r
if(a==null)return!1
s=C.b.E(a,0)
if(!(s>=97&&s<=122))r=s>=65&&s<=90
else r=!0
return r},
mb(a){var s
if(a==null)return!1
s=C.b.E(a,0)
return s>=48&&s<58},
p3(a){if(a==null)return!1
switch(C.b.E(a,0)){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 66:case 67:case 68:case 69:case 70:case 97:case 98:case 99:case 100:case 101:case 102:return!0}return!1},
pN(a){H.a0(a)
return a>=65&&a<=90?a+97-65:a},
km:function km(){},
hC:function hC(){},
kq:function kq(a){this.a=a},
cE:function cE(a,b){this.a=a
this.b=b},
ny(a,b){return A.qc(a,b,b)},
qc(a,b,c){return P.n0(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$ny(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return P.rc(s[m])
case 5:case 3:s.length===n||(0,H.f)(s),++m
q=2
break
case 4:return P.mL()
case 1:return P.mM(o)}}},c)}},B={bY:function bY(a,b){this.b=a
this.a=b},cn:function cn(a){this.a=a},hQ:function hQ(a){this.a=a},hg:function hg(a){this.a=a},hE:function hE(a,b){this.b=a
this.a=b},cd:function cd(a,b){this.b=a
this.a=b},eE:function eE(a,b,c){this.b=a
this.c=b
this.a=c},b0:function b0(){},cG:function cG(a,b){this.b=a
this.a=b},hd:function hd(a,b,c){this.d=a
this.b=b
this.a=c},fD:function fD(a,b,c,d){var _=this
_.d=a
_.e=b
_.b=c
_.a=d},fZ:function fZ(a,b){this.b=a
this.a=b},fK:function fK(a,b){this.b=a
this.a=b},di:function di(a,b){this.b=a
this.a=b},dj:function dj(a,b,c){this.d=a
this.b=b
this.a=c},ey:function ey(a,b,c){this.f=a
this.b=b
this.a=c},hv:function hv(a,b,c){this.d=a
this.b=b
this.a=c},dn:function dn(a,b){this.b=a
this.a=b},hh:function hh(a,b,c){this.d=a
this.b=b
this.a=c},hn:function hn(a){this.a=a},hm:function hm(a){this.a=a},af:function af(a,b,c){this.c=a
this.d=b
this.a=c},hk:function hk(a,b,c){this.c=a
this.d=b
this.a=c},bq:function bq(){},h9:function h9(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},hs:function hs(a,b,c){this.c=a
this.d=b
this.a=c},fR:function fR(a,b,c){this.c=a
this.d=b
this.a=c},fU:function fU(a,b,c){this.c=a
this.d=b
this.a=c},fx:function fx(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},hR:function hR(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},fY:function fY(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},fX:function fX(a,b,c){this.c=a
this.d=b
this.a=c},hy:function hy(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},fJ:function fJ(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},hx:function hx(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},i1:function i1(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},S:function S(){},al:function al(){},i2:function i2(){},
mF(a){return new B.c1(a,P.Z(null,null,t.K,t.N))},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(){},
lt:function lt(){},
ie:function ie(){},
ag:function ag(){},
d2:function d2(a){var _=this
_.a=null
_.b=a
_.e=_.d=_.c=null},
dW:function dW(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=null
_.b=d
_.e=_.d=_.c=null},
c1:function c1(a,b){var _=this
_.x=a
_.a=null
_.b=b
_.e=_.d=_.c=null},
R:function R(a,b,c){var _=this
_.x=a
_.y=b
_.a=null
_.b=c
_.e=_.d=_.c=null},
dU:function dU(a,b){var _=this
_.x=a
_.a=null
_.b=b
_.e=_.d=_.c=null},
ah:function ah(a,b){this.b=a
this.a=b},
fV:function fV(a){this.a=a},
jh:function jh(){},
ib:function ib(){},
ic:function ic(){},
id:function id(){},
ih:function ih(){},
ii:function ii(){},
il:function il(){},
nQ(a){switch(a){case"before":case"after":case"first-line":case"first-letter":return!0
default:return!1}},
qG(a){var s,r
for(;a!=null;){s=a.b.j(0,"lang")
if(s!=null)return s
r=a.a
a=r instanceof B.R?r:null}return null},
eC:function eC(){this.a=null},
kt:function kt(){},
ku:function ku(){},
ks:function ks(){},
kr:function kr(a){this.a=a},
nf(a,b,c,d){var s
if(c==null)c=a.length
if(c<b)c=b
s=a.length
return C.a.b8(a,b,c>s?s:c)},
n1(a){var s,r
for(s=a.length,r=0;r<s;++r)if(!A.nb(C.b.E(a,r)))return!1
return!0},
p8(a,b){var s,r=a.length
if(r===b)return a
b-=r
for(s=0,r="";s<b;++s)r+="0"
r+=a
return r.charCodeAt(0)==0?r:r},
tw(a,b){var s={}
s.a=a
if(b==null)return a
b.bc(0,new B.m_(s))
return s.a},
p:function p(a,b,c){this.a=a
this.b=b
this.$ti=c},
m_:function m_(a){this.a=a},
J(a,b,c){var s,r=H.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)C.a.p(r,s)
else for(s=b;s>a;s+=c)C.a.p(r,s)
return r},
iE(a,b){var s,r,q,p=J.X(a)
if(p.gai(a))return H.a([],b.h("z<O<j,0>>"))
s=H.a([],b.h("z<O<j,0>>"))
for(r=t.pc.a_(b).h("O<1,2>"),q=0;q<p.gm(a);++q)C.a.p(s,new S.O(q,p.j(a,q),r))
return s},
mi(a,b){if(a.length===0)return b.a(0)
return C.a.aR(a,new B.mj(b))},
iG(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.b)
for(s=B.J(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
if(typeof n!=="number")return n.b5()
m=n/q
l.push(H.a([c*(1-m)+b*m],p))}return S.aA(null,l)},
n2(a,b,c){var s,r,q,p,o=B.J(C.e.fz((a-b)/c),0,1),n=H.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,H.f)(o),++q){p=o[q]
if(typeof p!=="number")return p.B()
n.push(H.a([p*c+b],r))}return S.aA(null,n)},
cW(a,b,c){var s,r,q,p,o,n=J.X(a)
if(n.gai(a))return a
s=n.gm(a)
if(s>b)throw H.d("Trying to stretch an array to a length shorter than its own")
r=B.J(b,0,1)
q=H.x(r)
p=q.h("F<1,q>")
o=new H.F(r,q.h("q(1)").a(new B.mh(b,s)),p)
q=H.a([],c.h("z<0>"))
for(r=new H.N(o,o.gm(o),p.h("N<C.E>")),p=p.h("C.E");r.n();)q.push(n.j(a,C.e.bM(p.a(r.d))))
return q},
tO(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=H.a([],c.h("z<0>"))
for(s=B.J(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.B()
n=C.e.b0(p*o,l)
if(n<0||n>=o)return H.b(a,n)
k.push(a[n])}s=H.a([],d.h("z<0>"))
for(r=B.J(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,H.f)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.B()
m=C.e.b0(p*n,l)
if(m<0||m>=n)return H.b(b,m)
s.push(b[m])}return new S.O(k,s,c.h("@<m<0>>").a_(d.h("m<0>")).h("O<1,2>"))},
cy(a,b){var s=F.jZ(a,new B.mk(b),b)
return P.i(s,!0,s.$ti.h("k.E"))},
ng(a,b){var s=P.i(a,!0,b)
if(0>=s.length)return H.b(s,-1)
s.pop()
return s},
pl(a,b){var s,r,q,p=H.a([],b.h("z<0>")),o=P.nD(b)
for(s=H.x(a).h("W<1>"),r=new H.W(a,s),r=new H.N(r,r.gm(r),s.h("N<C.E>")),s=s.h("C.E");r.n();){q=s.a(r.d)
if(!o.G(0,q)){C.a.p(p,q)
o.p(0,q)}}s=b.h("W<0>")
return P.i(new H.W(p,s),!0,s.h("C.E"))},
oM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=H.a([],c.h("z<m<0>>"))
for(s=B.J(a.length,0,1),r=s.length,q=c.h("z<0>"),p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
n=H.a([],q)
for(m=B.J(b,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,H.f)(m),++k){j=m[k]
if(typeof o!=="number")return o.L()
if(typeof j!=="number")return H.b3(j)
n.push(C.a.j(a,C.e.ac(o+j,a.length)))}i.push(n)}return i},
mj:function mj(a){this.a=a},
mh:function mh(a,b){this.a=a
this.b=b},
mk:function mk(a){this.a=a},
na(a,b,c){var s,r,q=t.H,p=B.m7(S.aA(null,J.t(a,new B.m8(),q).az(0)),S.aA(null,J.t(b,new B.m9(),q).az(0)),c,t.A)
q=p.gav(p)
s=H.x(q)
r=s.h("F<1,M>")
return P.i(new H.F(q,s.h("M(1)").a(new B.ma()),r),!0,r.h("C.E"))},
m7(a,b,c,d){return d.a(J.mm(J.cX(a,1-c),J.cX(b,c)))},
p0(a,b,c,d){return d.a(J.mm(J.cX(a,1-c),J.cX(b,c)))},
n9(a,b,c){if(c>=1)return new S.O(b-1,1,t.d7)
if(c<=0)return new S.O(a,0,t.d7)
return new S.O(J.pI(B.m7(a,b,c,t.W)),C.e.ac((b-a)*c,1),t.d7)},
n3(a){return new B.lS(a,a.length-1)},
mf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=H.a([],t.l)
for(r=B.J(J.H(a.a),0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p){if(a.gm(a)===0)H.c(H.ao())
s.push(a.j(0,a.gm(a)-1))}return s}s=t.l
r=H.a([],s)
for(q=a.a,o=J.X(q),n=B.J(o.gm(q),0,1),m=n.length,l=a.$ti,k=l.h("w.E"),l=l.h("aJ<w.E>"),p=0;p<n.length;n.length===m||(0,H.f)(n),++p){j=H.a0(n[p])
i=new H.aJ(a,j,null,l)
i.cq(a,j,null,k)
r.push(B.n3(i.az(0)).$1(b))}h=(c-b)/(1-b)
s=H.a([],s)
for(q=B.J(o.gm(q),0,1),o=q.length,n=t.V,m=t.mN,p=0;p<q.length;q.length===o||(0,H.f)(q),++p){g=q[p]
if(typeof g!=="number")return g.L()
l=H.a0(g+1)
P.aF(0,l,r.length)
k=new H.aJ(r,0,l,m)
k.cq(r,0,l,n)
s.push(B.n3(k.az(0)).$1(h))}return s},
m8:function m8(){},
m9:function m9(){},
ma:function ma(){},
lS:function lS(a,b){this.a=a
this.b=b},
lR:function lR(){},
cI:function cI(){},
p1(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
p2(a,b){var s=a.length,r=b+2
if(s<r)return!1
if(!B.p1(C.b.J(a,b)))return!1
if(C.b.J(a,b+1)!==58)return!1
if(s===r)return!0
return C.b.J(a,r)===47},
tI(a){var s,r,q
if(a.gm(a)===0)return!0
s=a.gar(a)
for(r=H.bf(a,1,null,a.$ti.h("C.E")),q=r.$ti,r=new H.N(r,r.gm(r),q.h("N<C.E>")),q=q.h("C.E");r.n();)if(!J.V(q.a(r.d),s))return!1
return!0},
tQ(a,b,c){var s=C.a.ao(a,null)
if(s<0)throw H.d(P.a8(H.l(a)+" contains no null elements.",null))
C.a.q(a,s,b)},
pf(a,b,c){var s=C.a.ao(a,b)
if(s<0)throw H.d(P.a8(H.l(a)+" contains no elements matching "+b.l(0)+".",null))
C.a.q(a,s,null)},
tt(a,b){var s,r,q
for(s=new H.a9(a),r=t.E,s=new H.N(s,s.gm(s),r.h("N<w.E>")),r=r.h("w.E"),q=0;s.n();)if(r.a(s.d)===b)++q
return q},
lZ(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=C.b.aP(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=C.b.ao(a,b)
for(;r!==-1;){q=r===0?0:C.b.el(a,"\n",r-1)+1
if(c===r-q)return q
r=C.b.aP(a,b,r+1)}return null}},C={},D={
t7(a,b){var s,r,q
if(a.gm(a)!==b.gm(b))return!1
if(a.gai(a))return!0
for(s=a.gaD(),s=s.gH(s);s.n();){r=s.gu()
q=b.j(0,r)
if(q==null&&!b.an(r))return!1
if(!J.V(a.j(0,r),q))return!1}return!0},
nX(a,b,c,d){var s,r,q,p,o=a.gap(a)
if(d==null)if(!o.gai(o)&&o.gt(o) instanceof B.c1){s=t.oI.a(o.gt(o))
s.iX(0,b)
if(c!=null){r=c.a
q=s.e
s.e=r.f_(0,Y.c8(q.a,q.b).b,Y.c8(r,c.c).b)}}else{r=B.mF(b)
r.e=c
o.p(0,r)}else{p=o.ao(o,d)
if(p>0){r=p-1
q=o.a
if(r>=q.length)return H.b(q,r)
r=q[r] instanceof B.c1}else r=!1
if(r){r=p-1
q=o.a
if(r<0||r>=q.length)return H.b(q,r)
t.oI.a(q[r]).iX(0,b)}else{r=B.mF(b)
r.e=c
o.bJ(0,p,r)}}},
fq:function fq(a){this.a=a},
kF:function kF(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c
_.f=_.e=null
_.r=!1},
hK:function hK(){},
oS(){var s,r,q,p,o=null
try{o=P.mH()}catch(s){if(t.mA.b(H.aK(s))){r=$.lK
if(r!=null)return r
throw s}else throw s}if(J.V(o,$.oy)){r=$.lK
r.toString
return r}$.oy=o
if($.nh()==$.fn())r=$.lK=o.k_(".").l(0)
else{q=o.hj()
p=q.length-1
r=$.lK=p===0?q:C.b.w(q,0,p)}return r}},E={hu:function hu(a,b,c){this.d=a
this.e=b
this.f=c}},F={de:function de(a){this.b=a},eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},aY:function aY(){},fI:function fI(a){this.e=null
this.b=a
this.d=null},j7:function j7(){},
oP(a,b,c){var s,r
if(c){if(!$.iC.an(a)){s=t.S
$.iC.q(0,a,P.aX(s,s))}if(!$.iC.j(0,a).an(b)){s=$.iC.j(0,a)
s.toString
s.q(0,b,F.oP(a,b,!1))}s=$.iC.j(0,a).j(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=C.a.ef(B.J(b+1,1,1),1,new F.lU(),s)
return C.d.b0(C.a.ef(B.J(a-b,a,-1),1,new F.lV(),s),r)},
iH(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
lU:function lU(){},
lV:function lV(){},
hZ:function hZ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
jZ(a,b,c){return F.qh(a,b,c,c)},
qh(a,b,c,d){return P.n0(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$jZ(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.X(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.j(s,l)
p=H.aG(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return P.mL()
case 1:return P.mM(n)}}},d)}},G={
oz(a,b){var s,r,q,p,o,n,m=null
for(s=a.length,r=!b,q=m,p=0;p<s;++p){switch(C.b.E(a,p)){case 34:o=r?'\\"':m
break
case 39:o=b?"\\'":m
break
default:o=m}n=o==null
if(!n&&q==null)q=new P.a2(C.b.w(a,0,p))
if(q!=null)q.a+=n?a[p]:o}if(q==null)s=a
else{s=q.a
s=s.charCodeAt(0)==0?s:s}return s},
mG(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=0;r<s;++r){q=a[r]
p=H.av(q.j(0,"value"))
o=p.length
if(e===o){for(n=d,m=!0,l=0;l<o;++l,n=j){k=C.b.E(p,l)
j=n+1
i=C.b.J(c,n)
if(m)if(i!==k){h=i>=65&&i<=90&&i+32===k
m=h}else m=!0
else m=!1
if(!m)break}if(m)return H.a0(q.j(0,b))}}return-1},
qV(a){var s,r
if(a===24)return"%"
else for(s=0;s<26;++s){r=C.a8[s]
if(H.a0(r.j(0,"unit"))===a)return H.iB(r.j(0,"value"))}return"<BAD UNIT>"},
nW(a){switch(a){case 0:return"ERROR"
case 1:return"end of file"
case 2:return"("
case 3:return")"
case 4:return"["
case 5:return"]"
case 6:return"{"
case 7:return"}"
case 8:return"."
case 9:return";"
case 10:return"@"
case 11:return"#"
case 12:return"+"
case 13:return">"
case 14:return"~"
case 15:return"*"
case 16:return"|"
case 17:return":"
case 18:return"_"
case 19:return","
case 20:return" "
case 21:return"\t"
case 22:return"\n"
case 23:return"\r"
case 24:return"%"
case 25:return"'"
case 26:return'"'
case 27:return"/"
case 28:return"="
case 30:return"^"
case 31:return"$"
case 32:return"<"
case 33:return"!"
case 34:return"-"
case 35:return"\\"
default:throw H.d("Unknown TOKEN")}},
nV(a){switch(a){case 641:case 642:case 643:case 644:case 645:case 646:case 647:case 648:case 649:case 650:case 651:case 652:case 653:case 654:case 655:case 656:case 600:case 601:case 602:case 603:case 604:case 605:case 606:case 607:case 608:case 609:case 610:case 612:case 613:case 614:case 615:case 617:return!0
default:return!1}},
hT(a){var s
if(!(a>=97&&a<=122))s=a>=65&&a<=90||a===95||a>=160||a===92
else s=!0
return s},
lu:function lu(a){this.a=a
this.d=this.c=null},
bp:function bp(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c){this.c=a
this.a=b
this.b=c},
kC:function kC(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.a=f
_.b=g
_.c=h
_.e=_.d=!1
_.f=i
_.r=0},
kD:function kD(){}},H={mv:function mv(){},
j8(a,b,c){if(b.h("P<0>").b(a))return new H.eV(a,b.h("@<0>").a_(c).h("eV<1,2>"))
return new H.cC(a,b.h("@<0>").a_(c).h("cC<1,2>"))},
aa(a){return new H.eh("Field '"+a+"' has been assigned during initialization.")},
h(a){return new H.eh("Field '"+a+"' has not been initialized.")},
m2(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ch(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mE(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nU(a,b,c){return H.mE(H.ch(H.ch(c,a),b))},
lT(a,b,c){return a},
bf(a,b,c,d){P.bd(b,"start")
if(c!=null){P.bd(c,"end")
if(b>c)H.c(P.a_(b,0,c,"start",null))}return new H.aJ(a,b,c,d.h("aJ<0>"))},
k1(a,b,c,d){if(t.gt.b(a))return new H.dY(a,b,c.h("@<0>").a_(d).h("dY<1,2>"))
return new H.cL(a,b,c.h("@<0>").a_(d).h("cL<1,2>"))},
nR(a,b,c){if(t.gt.b(a)){P.bd(b,"count")
return new H.d4(a,b,c.h("d4<0>"))}P.bd(b,"count")
return new H.c_(a,b,c.h("c_<0>"))},
ao(){return new P.cg("No element")},
qb(){return new P.cg("Too few elements")},
nS(a,b,c){H.hH(a,0,J.H(a)-1,b,c)},
hH(a,b,c,d,e){if(c-b<=32)H.qL(a,b,c,d,e)
else H.qK(a,b,c,d,e)},
qL(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.X(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.b6()
o=o>0}else o=!1
if(!o)break
n=p-1
r.q(a,p,r.j(a,n))
p=n}r.q(a,p,q)}},
qK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=C.d.aV(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.aV(a4+a5,2),f=g-j,e=g+j,d=J.X(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.b6()
if(a2>0){s=a1
a1=a0
a0=s}d.q(a3,i,c)
d.q(a3,g,a)
d.q(a3,h,a1)
d.q(a3,f,d.j(a3,a4))
d.q(a3,e,d.j(a3,a5))
r=a4+1
q=a5-1
if(J.V(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.j(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.q(a3,p,d.j(a3,r))
d.q(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.j(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.q(a3,p,d.j(a3,r))
l=r+1
d.q(a3,r,d.j(a3,q))
d.q(a3,q,o)
q=m
r=l
break}else{d.q(a3,p,d.j(a3,q))
d.q(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.q(a3,p,d.j(a3,r))
d.q(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.j(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.q(a3,p,d.j(a3,r))
l=r+1
d.q(a3,r,d.j(a3,q))
d.q(a3,q,o)
r=l}else{d.q(a3,p,d.j(a3,q))
d.q(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.q(a3,a4,d.j(a3,a2))
d.q(a3,a2,b)
a2=q+1
d.q(a3,a5,d.j(a3,a2))
d.q(a3,a2,a0)
H.hH(a3,a4,r-2,a6,a7)
H.hH(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.V(a6.$2(d.j(a3,r),b),0);)++r
for(;J.V(a6.$2(d.j(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.q(a3,p,d.j(a3,r))
d.q(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.j(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.q(a3,p,d.j(a3,r))
l=r+1
d.q(a3,r,d.j(a3,q))
d.q(a3,q,o)
r=l}else{d.q(a3,p,d.j(a3,q))
d.q(a3,q,o)}q=m
break}}H.hH(a3,r,q,a6,a7)}else H.hH(a3,r,q,a6,a7)},
co:function co(){},
dT:function dT(a,b){this.a=a
this.$ti=b},
cC:function cC(a,b){this.a=a
this.$ti=b},
eV:function eV(a,b){this.a=a
this.$ti=b},
eS:function eS(){},
l7:function l7(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.$ti=b},
eh:function eh(a){this.a=a},
a9:function a9(a){this.a=a},
md:function md(){},
kv:function kv(){},
P:function P(){},
C:function C(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
N:function N(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
dY:function dY(a,b,c){this.a=a
this.b=b
this.$ti=c},
en:function en(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
ai:function ai(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eF:function eF(a,b,c){this.a=a
this.b=b
this.$ti=c},
e_:function e_(a){this.$ti=a},
e0:function e0(a){this.$ti=a},
an:function an(a,b){this.a=a
this.$ti=b},
cT:function cT(a,b){this.a=a
this.$ti=b},
bl:function bl(){},
bB:function bB(){},
du:function du(){},
W:function W(a,b){this.a=a
this.$ti=b},
fe:function fe(){},
q4(a){if(typeof a=="number")return C.e.gO(a)
if(t.f5.b(a))return H.bJ(a)
return H.me(a)},
q5(a){return new H.jo(a)},
pj(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
tJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
l(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bu(a)
return s},
bJ(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
nJ(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.b.E(q,o)|32)>r)return n}return parseInt(a,b)},
qv(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=C.b.eF(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kk(a){return H.qt(a)},
qt(a){var s,r,q,p
if(a instanceof P.G)return H.b2(H.ax(a),null)
if(J.bs(a)===C.b6||t.cx.b(a)){s=C.a2(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.b2(H.ax(a),null)},
qu(){if(!!self.location)return self.location.href
return null},
nI(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
qw(a){var s,r,q,p=H.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.f)(a),++r){q=a[r]
if(!H.lL(q))throw H.d(H.fk(q))
if(q<=65535)C.a.p(p,q)
else if(q<=1114111){C.a.p(p,55296+(C.d.d_(q-65536,10)&1023))
C.a.p(p,56320+(q&1023))}else throw H.d(H.fk(q))}return H.nI(p)},
nK(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.lL(q))throw H.d(H.fk(q))
if(q<0)throw H.d(H.fk(q))
if(q>65535)return H.qw(a)}return H.nI(a)},
qx(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
bc(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.d.d_(s,10)|55296)>>>0,s&1023|56320)}}throw H.d(P.a_(a,0,1114111,null,null))},
b3(a){throw H.d(H.fk(a))},
b(a,b){if(a==null)J.H(a)
throw H.d(H.ct(a,b))},
ct(a,b){var s,r="index"
if(!H.lL(b))return new P.bC(!0,b,r,null)
s=H.a0(J.H(a))
if(b<0||b>=s)return P.h4(b,a,r,null,s)
return P.kl(b,r)},
tu(a,b,c){if(a<0||a>c)return P.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a_(b,a,c,"end",null)
return new P.bC(!0,b,"end",null)},
fk(a){return new P.bC(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new P.hi()
s=new Error()
s.dartException=a
r=H.tZ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
tZ(){return J.bu(this.dartException)},
c(a){throw H.d(a)},
f(a){throw H.d(P.ar(a))},
c2(a){var s,r,q,p,o,n
a=H.ne(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.kG(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kH(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
o_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mw(a,b){var s=b==null,r=s?null:b.method
return new H.h8(a,r,s?null:b.receiver)},
aK(a){if(a==null)return new H.hj(a)
if(a instanceof H.e1)return H.cw(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return H.cw(a,a.dartException)
return H.th(a)},
cw(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
th(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.d.d_(r,16)&8191)===10)switch(q){case 438:return H.cw(a,H.mw(H.l(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.l(s)+" (Error "+q+")"
return H.cw(a,new H.ev(p,e))}}if(a instanceof TypeError){o=$.po()
n=$.pp()
m=$.pq()
l=$.pr()
k=$.pu()
j=$.pv()
i=$.pt()
$.ps()
h=$.px()
g=$.pw()
f=o.bq(s)
if(f!=null)return H.cw(a,H.mw(H.av(s),f))
else{f=n.bq(s)
if(f!=null){f.method="call"
return H.cw(a,H.mw(H.av(s),f))}else{f=m.bq(s)
if(f==null){f=l.bq(s)
if(f==null){f=k.bq(s)
if(f==null){f=j.bq(s)
if(f==null){f=i.bq(s)
if(f==null){f=l.bq(s)
if(f==null){f=h.bq(s)
if(f==null){f=g.bq(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){H.av(s)
return H.cw(a,new H.ev(s,f==null?e:f.method))}}}return H.cw(a,new H.hW(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.eI()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.cw(a,new P.bC(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.eI()
return a},
cu(a){var s
if(a instanceof H.e1)return a.b
if(a==null)return new H.f4(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f4(a)},
me(a){if(a==null||typeof a!="object")return J.aH(a)
else return H.bJ(a)},
oU(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.q(0,a[s],a[r])}return b},
tH(a,b,c,d,e,f){t.gY.a(a)
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.ik("Unsupported number of arguments for wrapped closure"))},
dG(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.tH)
a.$identity=s
return s},
pZ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new H.hM().constructor.prototype):Object.create(new H.cZ(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else{q=$.bV
if(typeof q!=="number")return q.L()
$.bV=q+1
q=new Function("a,b"+q,"this.$initialize(a,b"+q+")")
r=q}s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=H.nx(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=H.pV(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=H.nx(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pV(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,H.pQ)}throw H.d("Error in functionType of tearoff")},
pW(a,b,c,d){var s=H.nw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nx(a,b,c,d){var s,r,q,p,o,n="receiver"
if(c)return H.pY(a,b,d)
s=b.length
r=d||s>=27
if(r)return H.pW(s,d,a,b)
if(s===0){r=$.bV
if(typeof r!=="number")return r.L()
$.bV=r+1
q="self"+r
r="return function(){var "+q+" = this."
p=$.dQ
return new Function(r+(p==null?$.dQ=H.j1(n):p)+";return "+q+"."+a+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
r=$.bV
if(typeof r!=="number")return r.L()
$.bV=r+1
o+=r
r="return function("+o+"){return this."
p=$.dQ
return new Function(r+(p==null?$.dQ=H.j1(n):p)+"."+a+"("+o+");}")()},
pX(a,b,c,d){var s=H.nw,r=H.pR
switch(b?-1:a){case 0:throw H.d(new H.hB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
pY(a,b,c){var s,r,q,p,o,n=$.nv
if(n==null)n=$.nv=H.j1("interceptor")
s=$.dQ
if(s==null)s=$.dQ=H.j1("receiver")
r=b.length
q=c||r>=28
if(q)return H.pX(r,c,a,b)
if(r===1){q="return function(){return this."+n+"."+a+"(this."+s+");"
p=$.bV
if(typeof p!=="number")return p.L()
$.bV=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
q="return function("+o+"){return this."+n+"."+a+"(this."+s+", "+o+");"
p=$.bV
if(typeof p!=="number")return p.L()
$.bV=p+1
return new Function(q+p+"}")()},
n4(a){return H.pZ(a)},
pQ(a,b){return H.lz(v.typeUniverse,H.ax(a.a),b)},
nw(a){return a.a},
pR(a){return a.b},
j1(a){var s,r,q,p=new H.cZ("receiver","interceptor"),o=J.jU(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.d(P.a8("Field name "+a+" not found.",null))},
aG(a){if(a==null)H.ti("boolean expression must not be null")
return a},
ti(a){throw H.d(new H.i5(a))},
tX(a){throw H.d(new P.fP(a))},
tA(a){return v.getIsolateTag(a)},
uN(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tL(a){var s,r,q,p,o,n=H.av($.oY.$1(a)),m=$.lW[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m6[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.iB($.oN.$2(a,n))
if(q!=null){m=$.lW[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m6[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.mc(s)
$.lW[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.m6[n]=s
return s}if(p==="-"){o=H.mc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.p9(a,s)
if(p==="*")throw H.d(P.hV(n))
if(v.leafTags[n]===true){o=H.mc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.p9(a,s)},
p9(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.nc(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
mc(a){return J.nc(a,!1,null,!!a.$idb)},
tN(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.mc(s)
else return J.nc(s,c,null,null)},
tE(){if(!0===$.n7)return
$.n7=!0
H.tF()},
tF(){var s,r,q,p,o,n,m,l
$.lW=Object.create(null)
$.m6=Object.create(null)
H.tD()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pb.$1(o)
if(n!=null){m=H.tN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
tD(){var s,r,q,p,o,n,m=C.aP()
m=H.dF(C.aQ,H.dF(C.aR,H.dF(C.a3,H.dF(C.a3,H.dF(C.aS,H.dF(C.aT,H.dF(C.aU(C.a2),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.oY=new H.m3(p)
$.oN=new H.m4(o)
$.pb=new H.m5(n)},
dF(a,b){return a(b)||b},
mu(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.d(P.aC("Illegal RegExp pattern ("+String(n)+")",a,null))},
cx(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof H.cJ){s=C.b.aw(a,c)
return b.b.test(s)}else{s=J.nm(b,C.b.aw(a,c))
return!s.gai(s)}},
oT(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ne(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bt(a,b,c){var s
if(typeof b=="string")return H.tU(a,b,c)
if(b instanceof H.cJ){s=b.git()
s.lastIndex=0
return a.replace(s,H.oT(c))}throw H.d("String.replaceAll(Pattern) UNIMPLEMENTED")},
tU(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ne(b),"g"),H.oT(c))},
tV(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return H.pi(a,s,s+b.length,c)},
pi(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
d1:function d1(){},
v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eT:function eT(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b){this.a=a
this.$ti=b},
jo:function jo(a){this.a=a},
h5:function h5(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
kG:function kG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ev:function ev(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a){this.a=a},
hj:function hj(a){this.a=a},
e1:function e1(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a
this.b=null},
aU:function aU(){},
fL:function fL(){},
fM:function fM(){},
hO:function hO(){},
hM:function hM(){},
cZ:function cZ(a,b){this.a=a
this.b=b},
hB:function hB(a){this.a=a},
i5:function i5(a){this.a=a},
ba:function ba(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jW:function jW(a){this.a=a},
jX:function jX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ei:function ei(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m3:function m3(a){this.a=a},
m4:function m4(a){this.a=a},
m5:function m5(a){this.a=a},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dz:function dz(a){this.b=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dq:function dq(a,b){this.a=a
this.c=b},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
tY(a){return H.c(H.aa(a))},
r7(a){var s=new H.l8(a)
return s.b=s},
l8:function l8(a){this.a=a
this.b=null},
mX(a){return a},
qo(a){return new Int8Array(a)},
lF(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ct(b,a))},
rK(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.d(H.tu(a,b,c))
return b},
hf:function hf(){},
df:function df(){},
et:function et(){},
he:function he(){},
eu:function eu(){},
cM:function cM(){},
f1:function f1(){},
f2:function f2(){},
nO(a,b){var s=b.c
return s==null?b.c=H.mR(a,b.z,!0):s},
nN(a,b){var s=b.c
return s==null?b.c=H.f9(a,"bm",[b.z]):s},
nP(a){var s=a.y
if(s===6||s===7||s===8)return H.nP(a.z)
return s===11||s===12},
qC(a){return a.cy},
aO(a){return H.iy(v.typeUniverse,a,!1)},
tG(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=H.c5(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
c5(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.c5(a,s,a0,a1)
if(r===s)return b
return H.og(a,r,!0)
case 7:s=b.z
r=H.c5(a,s,a0,a1)
if(r===s)return b
return H.mR(a,r,!0)
case 8:s=b.z
r=H.c5(a,s,a0,a1)
if(r===s)return b
return H.of(a,r,!0)
case 9:q=b.Q
p=H.fj(a,q,a0,a1)
if(p===q)return b
return H.f9(a,b.z,p)
case 10:o=b.z
n=H.c5(a,o,a0,a1)
m=b.Q
l=H.fj(a,m,a0,a1)
if(n===o&&l===m)return b
return H.mP(a,n,l)
case 11:k=b.z
j=H.c5(a,k,a0,a1)
i=b.Q
h=H.te(a,i,a0,a1)
if(j===k&&h===i)return b
return H.oe(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.fj(a,g,a0,a1)
o=b.z
n=H.c5(a,o,a0,a1)
if(f===g&&n===o)return b
return H.mQ(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.d(P.iY("Attempted to substitute unexpected RTI kind "+c))}},
fj(a,b,c,d){var s,r,q,p,o=b.length,n=H.lB(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.c5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
tf(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=H.lB(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.c5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
te(a,b,c,d){var s,r=b.a,q=H.fj(a,r,c,d),p=b.b,o=H.fj(a,p,c,d),n=b.c,m=H.tf(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.im()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
n5(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.tB(s)
return a.$S()}return null},
p_(a,b){var s
if(H.nP(b))if(a instanceof H.aU){s=H.n5(a)
if(s!=null)return s}return H.ax(a)},
ax(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.mY(a)}if(Array.isArray(a))return H.x(a)
return H.mY(J.bs(a))},
x(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
D(a){var s=a.$ti
return s!=null?s:H.mY(a)},
mY(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.rW(a,s)},
rW(a,b){var s=a instanceof H.aU?a.__proto__.__proto__.constructor:b,r=H.rt(v.typeUniverse,s.name)
b.$ccache=r
return r},
tB(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.iy(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
m1(a){var s=a instanceof H.aU?H.n5(a):null
return H.n6(s==null?H.ax(a):s)},
n6(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new H.f7(a)
q=H.iy(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new H.f7(q):p},
u_(a){return H.n6(H.iy(v.typeUniverse,a,!1))},
rV(a){var s,r,q,p,o=this
if(o===t.K)return H.dC(o,a,H.t1)
if(!H.c6(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return H.dC(o,a,H.t4)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=H.lL
else if(r===t.W||r===t.q)q=H.t0
else if(r===t.N)q=H.t2
else q=r===t.k4?H.oC:null
if(q!=null)return H.dC(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(H.tK)){o.r="$i"+p
if(p==="m")return H.dC(o,a,H.t_)
return H.dC(o,a,H.t3)}}else if(s===7)return H.dC(o,a,H.rT)
return H.dC(o,a,H.rR)},
dC(a,b,c){a.b=c
return a.b(b)},
rU(a){var s,r=this,q=H.rQ
if(!H.c6(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.rI
else if(r===t.K)q=H.rH
else{s=H.fl(r)
if(s)q=H.rS}r.a=q
return r.a(a)},
lM(a){var s,r=a.y
if(!H.c6(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&H.lM(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rR(a){var s=this
if(a==null)return H.lM(s)
return H.aj(v.typeUniverse,H.p_(a,s),null,s,null)},
rT(a){if(a==null)return!0
return this.z.b(a)},
t3(a){var s,r=this
if(a==null)return H.lM(r)
s=r.r
if(a instanceof P.G)return!!a[s]
return!!J.bs(a)[s]},
t_(a){var s,r=this
if(a==null)return H.lM(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof P.G)return!!a[s]
return!!J.bs(a)[s]},
rQ(a){var s,r=this
if(a==null){s=H.fl(r)
if(s)return a}else if(r.b(a))return a
H.oA(a,r)},
rS(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.oA(a,s)},
oA(a,b){throw H.d(H.od(H.o6(a,H.p_(a,b),H.b2(b,null))))},
iD(a,b,c,d){var s=null
if(H.aj(v.typeUniverse,a,s,b,s))return a
throw H.d(H.od("The type argument '"+H.b2(a,s)+"' is not a subtype of the type variable bound '"+H.b2(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
o6(a,b,c){var s=P.fT(a),r=H.b2(b==null?H.ax(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
od(a){return new H.f8("TypeError: "+a)},
b1(a,b){return new H.f8("TypeError: "+H.o6(a,null,b))},
t1(a){return a!=null},
rH(a){if(a!=null)return a
throw H.d(H.b1(a,"Object"))},
t4(a){return!0},
rI(a){return a},
oC(a){return!0===a||!1===a},
iA(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.b1(a,"bool"))},
uD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.b1(a,"bool"))},
uC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.b1(a,"bool?"))},
b9(a){if(typeof a=="number")return a
throw H.d(H.b1(a,"double"))},
uE(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b1(a,"double"))},
ow(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b1(a,"double?"))},
lL(a){return typeof a=="number"&&Math.floor(a)===a},
a0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.b1(a,"int"))},
uG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.b1(a,"int"))},
uF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.b1(a,"int?"))},
t0(a){return typeof a=="number"},
lC(a){if(typeof a=="number")return a
throw H.d(H.b1(a,"num"))},
uI(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b1(a,"num"))},
uH(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.b1(a,"num?"))},
t2(a){return typeof a=="string"},
av(a){if(typeof a=="string")return a
throw H.d(H.b1(a,"String"))},
uJ(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.b1(a,"String"))},
iB(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.b1(a,"String?"))},
tb(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.b2(a[q],b)
return s},
oB(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)C.a.p(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.b(a5,j)
m=C.b.L(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.b2(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.b2(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.b2(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.b2(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.b2(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
b2(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.b2(a.z,b)
return s}if(l===7){r=a.z
s=H.b2(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.b2(a.z,b)+">"
if(l===9){p=H.tg(a.z)
o=a.Q
return o.length>0?p+("<"+H.tb(o,b)+">"):p}if(l===11)return H.oB(a,b,null)
if(l===12)return H.oB(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
tg(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
ru(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
rt(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.iy(a,b,!1)
else if(typeof m=="number"){s=m
r=H.fa(a,5,"#")
q=H.lB(s)
for(p=0;p<s;++p)q[p]=r
o=H.f9(a,b,q)
n[b]=o
return o}else return m},
rr(a,b){return H.ou(a.tR,b)},
rq(a,b){return H.ou(a.eT,b)},
iy(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.ob(H.o9(a,null,b,c))
r.set(b,s)
return s},
lz(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.ob(H.o9(a,b,c,!0))
q.set(c,r)
return r},
rs(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.mP(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
cr(a,b){b.a=H.rU
b.b=H.rV
return b},
fa(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.bx(null,null)
s.y=b
s.cy=c
r=H.cr(a,s)
a.eC.set(c,r)
return r},
og(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.ro(a,b,r,c)
a.eC.set(r,s)
return s},
ro(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.c6(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.bx(null,null)
q.y=6
q.z=b
q.cy=c
return H.cr(a,q)},
mR(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.rn(a,b,r,c)
a.eC.set(r,s)
return s},
rn(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.c6(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.fl(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.fl(q.z))return q
else return H.nO(a,b)}}p=new H.bx(null,null)
p.y=7
p.z=b
p.cy=c
return H.cr(a,p)},
of(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.rl(a,b,r,c)
a.eC.set(r,s)
return s},
rl(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.c6(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.f9(a,"bm",[b])
else if(b===t.P||b===t.T)return t.gK}q=new H.bx(null,null)
q.y=8
q.z=b
q.cy=c
return H.cr(a,q)},
rp(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.bx(null,null)
s.y=13
s.z=b
s.cy=q
r=H.cr(a,s)
a.eC.set(q,r)
return r},
ix(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
rk(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
f9(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+H.ix(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.bx(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.cr(a,r)
a.eC.set(p,q)
return q},
mP(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.ix(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.bx(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.cr(a,o)
a.eC.set(q,n)
return n},
oe(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.ix(m)
if(j>0){s=l>0?",":""
r=H.ix(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.rk(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.bx(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.cr(a,o)
a.eC.set(q,r)
return r},
mQ(a,b,c,d){var s,r=b.cy+("<"+H.ix(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.rm(a,b,c,r,d)
a.eC.set(r,s)
return s},
rm(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=H.lB(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.c5(a,b,r,0)
m=H.fj(a,c,r,0)
return H.mQ(a,n,m,c!==m)}}l=new H.bx(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.cr(a,l)},
o9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ob(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.rf(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.oa(a,r,h,g,!1)
else if(q===46)r=H.oa(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.cp(a.u,a.e,g.pop()))
break
case 94:g.push(H.rp(a.u,g.pop()))
break
case 35:g.push(H.fa(a.u,5,"#"))
break
case 64:g.push(H.fa(a.u,2,"@"))
break
case 126:g.push(H.fa(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.mO(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.f9(p,n,o))
else{m=H.cp(p,a.e,n)
switch(m.y){case 11:g.push(H.mQ(p,m,o,a.n))
break
default:g.push(H.mP(p,m,o))
break}}break
case 38:H.rg(a,g)
break
case 42:p=a.u
g.push(H.og(p,H.cp(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.mR(p,H.cp(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.of(p,H.cp(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.im()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.mO(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.oe(p,H.cp(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.mO(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.ri(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.cp(a.u,a.e,i)},
rf(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
oa(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ru(s,o.z)[p]
if(n==null)H.c('No "'+p+'" in "'+H.qC(o)+'"')
d.push(H.lz(s,o,n))}else d.push(p)
return m},
rg(a,b){var s=b.pop()
if(0===s){b.push(H.fa(a.u,1,"0&"))
return}if(1===s){b.push(H.fa(a.u,4,"1&"))
return}throw H.d(P.iY("Unexpected extended operation "+H.l(s)))},
cp(a,b,c){if(typeof c=="string")return H.f9(a,c,a.sEA)
else if(typeof c=="number")return H.rh(a,b,c)
else return c},
mO(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.cp(a,b,c[s])},
ri(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.cp(a,b,c[s])},
rh(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.d(P.iY("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.d(P.iY("Bad index "+c+" for "+b.l(0)))},
aj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.c6(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.c6(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.aj(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.aj(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.aj(a,b.z,c,d,e)
if(r===6)return H.aj(a,b.z,c,d,e)
return r!==7}if(r===6)return H.aj(a,b.z,c,d,e)
if(p===6){s=H.nO(a,d)
return H.aj(a,b,c,s,e)}if(r===8){if(!H.aj(a,b.z,c,d,e))return!1
return H.aj(a,H.nN(a,b),c,d,e)}if(r===7){s=H.aj(a,t.P,c,d,e)
return s&&H.aj(a,b.z,c,d,e)}if(p===8){if(H.aj(a,b,c,d.z,e))return!0
return H.aj(a,b,c,H.nN(a,d),e)}if(p===7){s=H.aj(a,b,c,t.P,e)
return s||H.aj(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.gY)return!0
if(p===12){if(b===t.dY)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.aj(a,k,c,j,e)||!H.aj(a,j,e,k,c))return!1}return H.oD(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return H.oD(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.rZ(a,b,c,d,e)}return!1},
oD(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.aj(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.aj(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.aj(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.aj(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.aj(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
rZ(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=H.lz(a,b,r[o])
return H.ov(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return H.ov(a,n,null,c,m,e)},
ov(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!H.aj(a,r,d,q,f))return!1}return!0},
fl(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.c6(a))if(r!==7)if(!(r===6&&H.fl(a.z)))s=r===8&&H.fl(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tK(a){var s
if(!H.c6(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c6(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.iD},
ou(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lB(a){return a>0?new Array(a):v.typeUniverse.sEA},
bx:function bx(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
im:function im(){this.c=this.b=this.a=null},
f7:function f7(a){this.a=a},
ij:function ij(){},
f8:function f8(a){this.a=a},
nd(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
nc(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iF(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.n7==null){H.tE()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.d(P.hV("Return interceptor for "+H.l(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lp
if(o==null)o=$.lp=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.tL(a)
if(p!=null)return p
if(typeof a=="function")return C.b7
s=Object.getPrototypeOf(a)
if(s==null)return C.aw
if(s===Object.prototype)return C.aw
if(typeof q=="function"){o=$.lp
if(o==null)o=$.lp=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.X,enumerable:false,writable:true,configurable:true})
return C.X}return C.X},
nz(a,b){if(a<0||a>4294967295)throw H.d(P.a_(a,0,4294967295,"length",null))
return J.nA(new Array(a),b)},
mt(a,b){if(a<0)throw H.d(P.a8("Length must be a non-negative integer: "+a,null))
return H.a(new Array(a),b.h("z<0>"))},
ms(a,b){return H.a(new Array(a),b.h("z<0>"))},
nA(a,b){return J.jU(H.a(a,b.h("z<0>")),b)},
jU(a,b){a.fixed$length=Array
return a},
qd(a,b){var s=t.bP
return J.no(s.a(a),s.a(b))},
nB(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
qe(a,b){var s,r
for(s=a.length;b<s;){r=C.b.E(a,b)
if(r!==32&&r!==13&&!J.nB(r))break;++b}return b},
qf(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.b.J(a,s)
if(r!==32&&r!==13&&!J.nB(r))break}return b},
bs(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.eg.prototype}if(typeof a=="string")return J.bE.prototype
if(a==null)return J.ef.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.G)return a
return J.iF(a)},
tx(a){if(typeof a=="number")return J.cb.prototype
if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.G)return a
return J.iF(a)},
X(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.G)return a
return J.iF(a)},
aP(a){if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.G)return a
return J.iF(a)},
oV(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.eg.prototype}if(a==null)return a
if(!(a instanceof P.G))return J.bM.prototype
return a},
ty(a){if(typeof a=="number")return J.cb.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bM.prototype
return a},
oW(a){if(typeof a=="number")return J.cb.prototype
if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bM.prototype
return a},
m0(a){if(typeof a=="string")return J.bE.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bM.prototype
return a},
oX(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.G)return a
return J.iF(a)},
tz(a){if(a==null)return a
if(!(a instanceof P.G))return J.bM.prototype
return a},
mm(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tx(a).L(a,b)},
V(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bs(a).Z(a,b)},
cX(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oW(a).B(a,b)},
Y(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.tJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.X(a).j(a,b)},
iJ(a,b,c){return J.aP(a).q(a,b,c)},
pD(a,b,c,d){return J.oX(a).m9(a,b,c,d)},
pE(a,b,c,d){return J.oX(a).mu(a,b,c,d)},
mn(a,b){return J.aP(a).p(a,b)},
ak(a,b){return J.aP(a).U(a,b)},
nm(a,b){return J.m0(a).ca(a,b)},
nn(a,b){return J.m0(a).J(a,b)},
no(a,b){return J.oW(a).aA(a,b)},
iK(a,b){return J.aP(a).al(a,b)},
aR(a){return J.aP(a).gar(a)},
aH(a){return J.bs(a).gO(a)},
cz(a){return J.X(a).gai(a)},
c7(a){return J.X(a).gcI(a)},
K(a){return J.aP(a).gH(a)},
aL(a){return J.aP(a).gt(a)},
H(a){return J.X(a).gm(a)},
pF(a){return J.tz(a).gap(a)},
np(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.oV(a).geZ(a)},
nq(a,b,c){return J.aP(a).dB(a,b,c)},
t(a,b,c){return J.aP(a).em(a,b,c)},
pG(a,b,c){return J.m0(a).jF(a,b,c)},
pH(a,b){return J.X(a).sm(a,b)},
nr(a,b){return J.aP(a).b7(a,b)},
ns(a,b){return J.aP(a).co(a,b)},
pI(a){return J.ty(a).bM(a)},
fo(a){return J.aP(a).az(a)},
bu(a){return J.bs(a).l(a)},
nt(a){return J.m0(a).eF(a)},
pJ(a,b){return J.aP(a).eH(a,b)},
aW:function aW(){},
h7:function h7(){},
ef:function ef(){},
cK:function cK(){},
ht:function ht(){},
bM:function bM(){},
bF:function bF(){},
z:function z(a){this.$ti=a},
jV:function jV(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cb:function cb(){},
da:function da(){},
eg:function eg(){},
bE:function bE(){}},K={jf:function jf(a){this.a=a
this.b=-1},j9:function j9(a){this.a=a},
qD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.r2,e=a.gbo(a),d=a.r1,c=a.db
c=c==null?g:J.t(c,new K.a3(),t.G)
if(c==null)c=H.a([],t.O)
s=t.G
c=P.i(c,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new K.bZ(!0,e,d,f,!0,P.aX(t.N,t.h),q,p,a.z,a.Q,!1,a.cx,a.cy,c,r,s,o,n,g,m,l,k)},
tW(a){var s,r,q,p,o
a=H.bt(a,"\n",",")
a=H.bt(a,"-",",-")
a=H.bt(a,"e,-","e-")
s=H.a([],t.n)
for(r=C.b.cp(a,P.at("[ ,]")),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p){o=r[p]
if(J.H(o)!==0)s.push(P.bT(o))}return s},
oZ(a,b,c){var s,r,q,p,o,n,m,l,k=H.a([],c.h("z<m<0>>"))
for(s=B.J(C.d.b0(a.length,b),0,1),r=s.length,q=H.x(a),p=q.c,q=q.h("aJ<1>"),o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
if(typeof n!=="number")return n.B()
m=H.a0(n*b)
l=new H.aJ(a,m,null,q)
l.cq(a,m,null,p)
k.push(l.pK(0,b).az(0))}return k},
pk(a,b,c,d){var s=a*d-b*c<0?-1:1
return s*Math.acos(Math.min(1,Math.max((a*c+b*d)/(Math.sqrt(a*a+b*b)*Math.sqrt(c*c+d*d)),-1)))},
tv(d4,d5,d6,d7,d8,d9,e0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=d4.a,d1=d4.b,d2=e0.a,d3=e0.b
if(d5===0||d6===0)return H.a([d4,e0,e0],t.l)
d7*=0.017453292519943295
d8=d8!==0?1:0
d9=d9!==0?1:0
s=Math.cos(d7)
r=Math.sin(d7)
q=(d0-d2)/2
p=(d1-d3)/2
o=q*s+p*r
n=-q*r+p*s
m=Math.abs(d5)
l=Math.abs(d6)
k=o*o
j=n*n
i=k/(m*m)+j/(l*l)
if(i>1){h=Math.sqrt(i)
m*=h
l*=h}g=[m,l]
m=g[0]
l=g[1]
f=m*m
e=l*l
j=f*j
k=e*k
d=Math.sqrt(Math.max((f*e-j-k)/(j+k),0))
k=(d8===d9?-1:1)*d
c=k*(m*n)/l
b=k*(-l*o)/m
q=(o-c)/m
p=(n-b)/l
a=K.pk(1,0,q,p)
a0=C.e.ac(K.pk(q,p,(-o-c)/m,(-n-b)/l)/1,360)
if(d9===0&&a0>0)a0-=360
else if(d9===1&&a0<0)a0+=360
a1=[c*s-b*r+(d0+d2)/2,c*r+b*s+(d1+d3)/2,a,a0*0.017453292519943295]
a2=a1[0]
a3=a1[1]
a=a1[2]
a0=a1[3]
k=a0/0.017453292519943295
a4=C.e.fz(Math.abs(k/(C.e.ac(k,90)===0?90:36)))
a5=a0/a4
s=Math.cos(d7)
r=Math.sin(d7)
a6=Math.sin(a5)*(Math.sqrt(4+3*Math.pow(Math.tan(a5/2),2))-1)/3
k=t.l
a7=H.a([],k)
for(j=B.J(a4,0,1),a8=j.length,a9=-d5,b0=a9*s,b1=d6*r,a9*=r,b2=d6*s,b3=a4-1,b4=d5*s,b5=d5*r,b6=d1,b7=d0,b8=a,b9=0;b9<j.length;j.length===a8||(0,H.f)(j),++b9,b6=c8,b7=c9,b8=c1){c0=j[b9]
c1=b8+a5
c2=Math.cos(b8)
c3=Math.sin(b8)
c4=Math.cos(c1)
c5=Math.sin(c1)
c6=a2+b4*c4-b1*c5
c7=a3+b5*c4+b2*c5
if(J.V(c0,b3)){c8=d3
c9=d2}else{c8=c7
c9=c6}C.a.U(a7,H.a([new M.e(b7+a6*(b0*c3-b1*c2),b6+a6*(a9*c3+b2*c2),0),new M.e(c9-a6*(b0*c5-b1*c4),c8-a6*(a9*c5+b2*c4),0),new M.e(c9,c8,0)],k))}return a7},
qE(a){var s=null,r=new K.dm(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
return r},
qF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new K.dm(a.k3,a.k4,q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.ry=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p
_.a=q
_.b=r
_.c=s
_.d=a0
_.e=null
_.f=a1
_.r=a2},
kn:function kn(){},
dm:function dm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
kp:function kp(){},
ko:function ko(){},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
r1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.db
e=e==null?f:J.t(e,new K.a3(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.i(e,!0,s)
r=a.dx
r=r==null?f:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?f:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaG()
p=a.y
o=a.ge4()
n=a.ga0(a).v()
m=a.gI(a)
if(a.c===$)H.c(H.h("target"))
l=H.a([],t.r)
for(k=a.gM(),j=k.length,i=0;i<k.length;k.length===j||(0,H.f)(k),++i)l.push(k[i].v())
k=a.ga6()
j=H.a([],t.l)
for(h=J.K(a.gA(a));h.n();){g=h.gu()
j.push(new M.e(g.a,g.b,g.c))}return new K.Q(q,p,o,a.Q,!1,a.cx,a.cy,e,r,s,n,m,f,l,k,j)},
cm(a){var s=null,r=new K.cl(4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.hV(a)
return r},
mJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new K.cl(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
o3(a){var s=null,r=new K.eR(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.saT(t.y.a(H.a([a],t.l)))
return r},
r2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new K.eR(a.k3,a.k4,q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
Q:function Q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
a3:function a3(){},
a4:function a4(){},
a5:function a5(){},
kY:function kY(){},
kZ:function kZ(){},
kS:function kS(a,b){this.a=a
this.b=b},
kV:function kV(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.a=a
this.b=b},
kO:function kO(a,b){this.a=a
this.b=b},
kT:function kT(){},
kR:function kR(a){this.a=a},
kP:function kP(){},
kQ:function kQ(){},
kX:function kX(){},
kW:function kW(){},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eR:function eR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r}},L={
qs(a,b){return new L.kj(b)},
kj:function kj(a){this.x=a},
dp(a){var s=new L.hF(1,M.pe(),0,a)
s.f=s.bv()
return s},
kE(a,b){var s=new L.hU(1,M.pe(),0,a)
s.f=s.bv()
s.y=b
s.oC()
return s},
b4:function b4(){},
fy:function fy(a,b,c,d,e){var _=this
_.y=a
_.Q=_.z=null
_.a=b
_.b=c
_.c=d
_.f=null
_.r=e
_.x=null},
hG:function hG(){},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=null
_.r=d
_.x=null},
hU:function hU(a,b,c,d){var _=this
_.cx=_.z=_.y=null
_.a=a
_.b=b
_.c=c
_.f=null
_.r=d
_.x=null},
dI:function dI(){},
i3:function i3(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d}},M={
mB(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a8.b_,a4=a8.ec,a5=P.i(a8.jr,!0,t.W),a6=a8.ok,a7=a8.fW
if(a7!=null){s=H.x(a7)
s=P.i(new H.F(a7,s.h("aD(1)").a(new M.kd()),s.h("F<1,aD>")),!0,t.mY)
a7=s}else a7=a2
s=a8.fX
if(s!=null){r=H.x(s)
r=P.i(new H.F(s,r.h("aD(1)").a(new M.ke()),r.h("F<1,aD>")),!0,t.mY)
s=r}else s=a2
r=a8.ab
q=a8.ah
V.bg(a2,0,C.c,a2,0)
p=a8.k3
o=a8.k4
n=V.ci(a8.r1)
m=a8.r2
m=m==null?a2:V.aM(m)
l=a8.rx
l=l==null?a2:V.aM(l)
k=a8.db
k=k==null?a2:J.t(k,new K.a3(),t.G)
if(k==null)k=H.a([],t.O)
j=t.G
k=P.i(k,!0,j)
i=a8.dx
i=i==null?a2:J.t(i,new K.a4(),j)
i=P.i(i==null?H.a([],t.O):i,!0,j)
h=a8.dy
h=h==null?a2:J.t(h,new K.a5(),j)
j=P.i(h==null?H.a([],t.O):h,!0,j)
h=a8.x
g=a8.y
f=a8.ga0(a8).v()
e=a8.gI(a8)
if(a8.c===$)H.c(H.h("target"))
d=H.a([],t.r)
for(c=a8.gM(),b=c.length,a=0;a<c.length;c.length===b||(0,H.f)(c),++a)d.push(c[a].v())
c=a8.ga6()
b=H.a([],t.l)
for(a0=J.K(a8.gA(a8));a0.n();){a1=a0.gu()
b.push(new M.e(a1.a,a1.b,a1.c))}return new M.dg(a8.fV,a3,a8.cD,!0,a8.bH,a8.jq,a4,a5,!1,a8.oh,a8.js,a8.oi,a8.oj,new M.e(a6.a,a6.b,a6.c),a8.ol,a8.jt,a8.om,a8.on,a8.oo,a8.op,a7,s,a8.aO,a8.a9,r,q,p,new M.e(o.a,o.b,o.c),n,m,l,h,g,a8.z,a8.Q,!1,a8.cx,a8.cy,k,i,j,f,e,a2,d,c,b)},
pP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.oe,e=M.mp(a.jp),d=M.mp(a.of),c=M.mp(a.og),b=a.db
b=b==null?g:J.t(b,new K.a3(),t.G)
if(b==null)b=H.a([],t.O)
s=t.G
b=P.i(b,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}f=new M.dO(new M.e(f.a,f.b,f.c),e,d,c,a.oa,a.ob,a.oc,a.od,q,p,a.z,a.Q,!1,a.cx,a.cy,b,r,s,o,n,g,m,l,k)
f.fS=M.mB(a.gdu())
f.fT=M.mB(a.gdv())
f.fU=K.cm(H.a([f.gdu(),f.gdv()],t.f))
return f},
j0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new M.aS(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
mp(a){return new M.aS(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.x,a.y,a.z,a.Q,a.ch,a.cx,a.cy,a.db,a.dx,a.dy,a.fr,a.fx,a.fy)},
dg:function dg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.fV=a
_.b_=b
_.cD=c
_.bG=d
_.bH=e
_.jq=f
_.ec=g
_.jr=h
_.q7=i
_.oh=j
_.js=k
_.oi=l
_.oj=m
_.ok=n
_.ol=o
_.jt=p
_.om=q
_.on=r
_.oo=s
_.op=a0
_.fW=a1
_.fX=a2
_.aO=a3
_.a9=a4
_.ab=a5
_.ah=a6
_.k3=a7
_.k4=a8
_.r1=a9
_.r2=b0
_.rx=b1
_.x=b2
_.y=b3
_.z=b4
_.Q=b5
_.ch=b6
_.cx=b7
_.cy=b8
_.db=b9
_.dx=c0
_.dy=c1
_.a=c2
_.b=c3
_.c=c4
_.d=c5
_.e=null
_.f=c6
_.r=c7},
kd:function kd(){},
ke:function ke(){},
fO:function fO(){},
jd:function jd(a){this.a=a},
dO:function dO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.oe=a
_.jp=b
_.of=c
_.og=d
_.fU=_.fT=_.fS=null
_.oa=e
_.ob=f
_.oc=g
_.od=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=m
_.cx=n
_.cy=o
_.db=p
_.dx=q
_.dy=r
_.a=s
_.b=a0
_.c=a1
_.d=a2
_.e=null
_.f=a3
_.r=a4},
j_:function j_(){},
aS:function aS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=a0},
e:function e(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a){this.a=a},
l1:function l1(){},
l_:function l_(){},
oE(a){if(t.jJ.b(a))return a
throw H.d(P.mo(a,"uri","Value must be a String or a Uri"))},
oK(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new P.a2("")
o=""+(a+"(")
p.a=o
n=H.x(b)
m=n.h("aJ<1>")
l=new H.aJ(b,0,s,m)
l.cq(b,0,s,n.c)
m=o+new H.F(l,m.h("o(C.E)").a(new M.lP()),m.h("F<C.E,o>")).aC(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw H.d(P.a8(p.l(0),null))}},
ja:function ja(a){this.a=a},
jb:function jb(){},
jc:function jc(){},
lP:function lP(){},
p4(a,b,c){return a},
ph(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))}},O={e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},jj:function jj(){},jk:function jk(a){this.a=a},jl:function jl(){},jm:function jm(){},
nT(a,b){var s,r,q,p,o,n,m,l,k,j,i=C.b.cp(a,b),h=b.ca(0,a),g=P.i(h,!0,H.D(h).h("k.E"))
h=i.length
s=g.length
r=H.a([],t.s)
for(h=B.J(h+s,0,1),s=h.length,q=t.N,p=0;p<h.length;h.length===s||(0,H.f)(h),++p){o=h[p]
if(typeof o!=="number")return o.ac()
if(C.e.ac(o,2)===0){n=C.e.aV(o,2)
if(n<0||n>=i.length)return H.b(i,n)
C.a.p(r,i[n])}else{n=C.e.aV(o-1,2)
if(n<0||n>=g.length)return H.b(g,n)
m=g[n]
l=m.hw(B.J(m.ghv()+1,1,1))
k=H.x(l)
j=k.h("ai<1>")
j=H.j8(new H.ai(l,k.h("B(1)").a(new O.kA()),j),j.h("k.E"),q)
C.a.U(r,P.i(j,!0,H.D(j).h("k.E")))}}return r},
kA:function kA(){},
qR(){var s,r,q,p,o,n,m,l,k,j=null
if(P.mH().gaS()!=="file")return $.fn()
s=P.mH()
if(!C.b.bm(s.gaQ(s),"/"))return $.fn()
r=P.op(j,0,0)
q=P.om(j,0,0,!1)
p=P.oo(j,0,0,j)
o=P.ol(j,0,0)
n=P.mT(j,"")
if(q==null)s=r.length!==0||n!=null||!1
else s=!1
if(s)q=""
s=q==null
m=!s
l=P.on("a/b",0,3,j,"",m)
k=s&&!C.b.a1(l,"/")
if(k)l=P.mV(l,m)
else l=P.c4(l)
if(new P.cs("",r,s&&C.b.a1(l,"//")?"":q,n,l,p,o).hj()==="a\\b")return $.iI()
return $.pn()},
kB:function kB(){}},P={
r3(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.tj()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.dG(new P.l4(q),1)).observe(s,{childList:true})
return new P.l3(q,s,r)}else if(self.setImmediate!=null)return P.tk()
return P.tl()},
r4(a){self.scheduleImmediate(H.dG(new P.l5(t.M.a(a)),0))},
r5(a){self.setImmediate(H.dG(new P.l6(t.M.a(a)),0))},
r6(a){t.M.a(a)
P.rj(0,a)},
rj(a,b){var s=new P.lx()
s.m_(a,b)
return s},
bQ(a){return new P.i6(new P.aq($.ab,a.h("aq<0>")),a.h("i6<0>"))},
bP(a,b){a.$2(0,null)
b.b=!0
return b.a},
aw(a,b){P.rJ(a,b)},
bO(a,b){b.fD(0,a)},
bN(a,b){b.ja(H.aK(a),H.cu(a))},
rJ(a,b){var s,r,q=new P.lD(b),p=new P.lE(b)
if(a instanceof P.aq)a.iH(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.hi(q,p,s)
else{r=new P.aq($.ab,t.j_)
r.a=8
r.c=a
r.iH(q,p,s)}}},
bR(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.ab.jU(new P.lQ(s),t.p,t.S,t.z)},
rc(a){return new P.dy(a,1)},
mL(){return C.ea},
mM(a){return new P.dy(a,3)},
n0(a,b){return new P.f6(a,b.h("f6<0>"))},
iZ(a,b){var s=H.lT(a,"error",t.K)
return new P.dN(s,b==null?P.pO(a):b)},
pO(a){var s
if(t.fz.b(a)){s=a.gdK()
if(s!=null)return s}return C.aW},
le(a,b){var s,r,q
for(s=t.j_;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.dV()
b.f7(a)
P.dx(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.iy(q)}},
dx(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
P.lN(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
P.dx(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
P.lN(i.a,i.b)
return}f=$.ab
if(f!==g)$.ab=g
else f=null
b=b.c
if((b&15)===8)new P.lm(p,c,m).$0()
else if(n){if((b&1)!==0)new P.ll(p,i).$0()}else if((b&2)!==0)new P.lk(c,p).$0()
if(f!=null)$.ab=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("bm<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dW(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else P.le(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dW(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
t9(a,b){var s
if(t.ng.b(a))return b.jU(a,t.z,t.K,t.k)
s=t.mq
if(s.b(a))return s.a(a)
throw H.d(P.mo(a,"onError",u.w))},
t8(){var s,r
for(s=$.dD;s!=null;s=$.dD){$.fi=null
r=s.b
$.dD=r
if(r==null)$.fh=null
s.a.$0()}},
td(){$.mZ=!0
try{P.t8()}finally{$.fi=null
$.mZ=!1
if($.dD!=null)$.ni().$1(P.oO())}},
oI(a){var s=new P.i7(a),r=$.fh
if(r==null){$.dD=$.fh=s
if(!$.mZ)$.ni().$1(P.oO())}else $.fh=r.b=s},
tc(a){var s,r,q,p=$.dD
if(p==null){P.oI(a)
$.fi=$.fh
return}s=new P.i7(a)
r=$.fi
if(r==null){s.b=p
$.dD=$.fi=s}else{q=r.b
s.b=q
$.fi=r.b=s
if(q==null)$.fh=s}},
tS(a){var s=null,r=$.ab
if(C.k===r){P.dE(s,s,C.k,a)
return}P.dE(s,s,r,t.M.a(r.j2(a)))},
ug(a,b){H.lT(a,"stream",t.K)
return new P.is(b.h("is<0>"))},
lN(a,b){P.tc(new P.lO(a,b))},
oF(a,b,c,d,e){var s,r=$.ab
if(r===c)return d.$0()
$.ab=c
s=r
try{r=d.$0()
return r}finally{$.ab=s}},
oG(a,b,c,d,e,f,g){var s,r=$.ab
if(r===c)return d.$1(e)
$.ab=c
s=r
try{r=d.$1(e)
return r}finally{$.ab=s}},
ta(a,b,c,d,e,f,g,h,i){var s,r=$.ab
if(r===c)return d.$2(e,f)
$.ab=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ab=s}},
dE(a,b,c,d){t.M.a(d)
if(C.k!==c)d=c.j2(d)
P.oI(d)},
l4:function l4(a){this.a=a},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
lx:function lx(){},
ly:function ly(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=!1
this.$ti=b},
lD:function lD(a){this.a=a},
lE:function lE(a){this.a=a},
lQ:function lQ(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
cq:function cq(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
f6:function f6(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b){this.a=a
this.b=b},
i8:function i8(){},
f5:function f5(a,b){this.a=a
this.$ti=b},
cU:function cU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
lb:function lb(a,b){this.a=a
this.b=b},
lj:function lj(a,b){this.a=a
this.b=b},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lh:function lh(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a,b){this.a=a
this.b=b},
li:function li(a,b){this.a=a
this.b=b},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function lm(a,b,c){this.a=a
this.b=b
this.c=c},
ln:function ln(a){this.a=a},
ll:function ll(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=b},
i7:function i7(a){this.a=a
this.b=null},
eJ:function eJ(){},
kx:function kx(a,b){this.a=a
this.b=b},
ky:function ky(a,b){this.a=a
this.b=b},
eK:function eK(){},
hN:function hN(){},
is:function is(a){this.$ti=a},
fd:function fd(){},
lO:function lO(a,b){this.a=a
this.b=b},
ir:function ir(){},
lv:function lv(a,b){this.a=a
this.b=b},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
Z(a,b,c,d){if(b==null){if(a==null)return new H.ba(c.h("@<0>").a_(d).h("ba<1,2>"))}else if(a==null)a=P.tp()
return P.rd(P.to(),a,b,c,d)},
A(a,b,c){return b.h("@<0>").a_(c).h("ha<1,2>").a(H.oU(a,new H.ba(b.h("@<0>").a_(c).h("ba<1,2>"))))},
aX(a,b){return new H.ba(a.h("@<0>").a_(b).h("ba<1,2>"))},
rd(a,b,c,d,e){var s=c!=null?c:new P.lr(d)
return new P.eZ(a,b,s,d.h("@<0>").a_(e).h("eZ<1,2>"))},
mx(a){return new P.c3(a.h("c3<0>"))},
nD(a){return new P.c3(a.h("c3<0>"))},
mN(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
re(a,b,c){var s=new P.cV(a,b,c.h("cV<0>"))
s.c=a.e
return s},
rO(a,b){return J.V(a,b)},
rP(a){return J.aH(a)},
qa(a,b,c){var s,r
if(P.n_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
C.a.p($.bi,a)
try{P.t5(a,s)}finally{if(0>=$.bi.length)return H.b($.bi,-1)
$.bi.pop()}r=P.kz(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jS(a,b,c){var s,r
if(P.n_(a))return b+"..."+c
s=new P.a2(b)
C.a.p($.bi,a)
try{r=s
r.a=P.kz(r.a,a,", ")}finally{if(0>=$.bi.length)return H.b($.bi,-1)
$.bi.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
n_(a){var s,r
for(s=$.bi.length,r=0;r<s;++r)if(a===$.bi[r])return!0
return!1},
t5(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=H.l(l.gu())
C.a.p(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gu();++j
if(!l.n()){if(j<=4){C.a.p(b,H.l(p))
return}r=H.l(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gu();++j
for(;l.n();p=o,o=n){n=l.gu();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}C.a.p(b,"...")
return}}q=H.l(p)
r=H.l(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.p(b,m)
C.a.p(b,q)
C.a.p(b,r)},
hb(a,b,c){var s=P.Z(null,null,b,c)
a.bc(0,new P.jY(s,b,c))
return s},
my(a,b){var s,r,q=P.mx(b)
for(s=J.K(a),r=s.$ti.c;s.n();)q.p(0,b.a(r.a(s.d)))
return q},
qi(a,b){var s=t.bP
return J.no(s.a(a),s.a(b))},
mA(a){var s,r={}
if(P.n_(a))return"{...}"
s=new P.a2("")
try{C.a.p($.bi,a)
s.a+="{"
r.a=!0
a.bc(0,new P.k_(r,s))
s.a+="}"}finally{if(0>=$.bi.length)return H.b($.bi,-1)
$.bi.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
mz(a){return new P.el(P.bG(P.qj(null),null,!1,a.h("0?")),a.h("el<0>"))},
qj(a){return 8},
ls:function ls(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eZ:function eZ(a,b,c,d){var _=this
_.x=a
_.y=b
_.z=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
lr:function lr(a){this.a=a},
c3:function c3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
io:function io(a){this.a=a
this.c=this.b=null},
cV:function cV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ee:function ee(){},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
w:function w(){},
em:function em(){},
k_:function k_(a,b){this.a=a
this.b=b},
cc:function cc(){},
k0:function k0(a){this.a=a},
el:function el(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
b_:function b_(){},
eD:function eD(){},
dA:function dA(){},
iz:function iz(){},
fb:function fb(a,b){this.a=a
this.$ti=b},
f_:function f_(){},
f3:function f3(){},
ff:function ff(){},
fg:function fg(){},
r_(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.r0(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
r0(a,b,c,d){var s=a?$.pz():$.py()
if(s==null)return null
if(0===c&&d===b.length)return P.o2(s,b)
return P.o2(s,b.subarray(c,P.aF(c,d,b.length)))},
o2(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.aK(r)}return null},
nu(a,b,c,d,e,f){if(C.d.ac(f,4)!==0)throw H.d(P.aC("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.aC("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.aC("Invalid base64 padding, more than two '=' characters",a,b))},
rG(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
rF(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.X(a),r=0;r<p;++r){q=s.j(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(r>=p)return H.b(o,r)
o[r]=q}return o},
kN:function kN(){},
kM:function kM(){},
fB:function fB(){},
iw:function iw(){},
fC:function fC(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
cD:function cD(){},
cF:function cF(){},
fS:function fS(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
lA:function lA(a){this.a=a
this.b=16
this.c=0},
cv(a,b){var s=H.nJ(a,b)
if(s!=null)return s
throw H.d(P.aC(a,null,null))},
bT(a){var s=H.qv(a)
if(s!=null)return s
throw H.d(P.aC("Invalid double",a,null))},
q1(a){if(a instanceof H.aU)return a.l(0)
return"Instance of '"+H.kk(a)+"'"},
bG(a,b,c,d){var s,r=c?J.mt(a,d):J.nz(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bH(a,b,c){var s,r=H.a([],c.h("z<0>"))
for(s=J.K(a);s.n();)C.a.p(r,c.a(s.gu()))
if(b)return r
return J.jU(r,c)},
i(a,b,c){var s
if(b)return P.nE(a,c)
s=J.jU(P.nE(a,c),c)
return s},
nE(a,b){var s,r
if(Array.isArray(a))return H.a(a.slice(0),b.h("z<0>"))
s=H.a([],b.h("z<0>"))
for(r=J.K(a);r.n();)C.a.p(s,r.gu())
return s},
nF(a,b){var s=P.bH(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
ad(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.aF(b,c,r)
return H.nK(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return H.qx(a,b,P.aF(b,c,a.length))
return P.qQ(a,b,c)},
qP(a){return H.bc(a)},
qQ(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.d(P.a_(b,0,J.H(a),o,o))
s=c==null
if(!s&&c<b)throw H.d(P.a_(c,b,J.H(a),o,o))
r=J.K(a)
for(q=0;q<b;++q)if(!r.n())throw H.d(P.a_(b,0,q,o,o))
p=[]
if(s)for(;r.n();)p.push(r.gu())
else for(q=b;q<c;++q){if(!r.n())throw H.d(P.a_(c,b,q,o,o))
p.push(r.gu())}return H.nK(p)},
at(a){return new H.cJ(a,H.mu(a,!1,!0,!1,!1,!1))},
kz(a,b,c){var s=J.K(b)
if(!s.n())return a
if(c.length===0){do a+=H.l(s.gu())
while(s.n())}else{a+=H.l(s.gu())
for(;s.n();)a=a+c+H.l(s.gu())}return a},
mH(){var s=H.qu()
if(s!=null)return P.mI(s)
throw H.d(P.T("'Uri.base' is not supported"))},
fT(a){if(typeof a=="number"||H.oC(a)||a==null)return J.bu(a)
if(typeof a=="string")return JSON.stringify(a)
return P.q1(a)},
iY(a){return new P.dM(a)},
a8(a,b){return new P.bC(!1,null,b,a)},
mo(a,b,c){return new P.bC(!0,a,b,c)},
aE(a){var s=null
return new P.dk(s,s,!1,s,s,a)},
kl(a,b){return new P.dk(null,null,!0,a,b,"Value not in range")},
a_(a,b,c,d,e){return new P.dk(b,c,!0,a,d,"Invalid value")},
nM(a,b,c,d){if(a<b||a>c)throw H.d(P.a_(a,b,c,d,null))
return a},
aF(a,b,c){if(0>a||a>c)throw H.d(P.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.a_(b,a,c,"end",null))
return b}return c},
bd(a,b){if(a<0)throw H.d(P.a_(a,0,null,b,null))
return a},
h4(a,b,c,d,e){var s=H.a0(e==null?J.H(b):e)
return new P.h3(s,!0,a,c,"Index out of range")},
T(a){return new P.hX(a)},
hV(a){return new P.eP(a)},
au(a){return new P.cg(a)},
ar(a){return new P.fN(a)},
aC(a,b,c){return new P.e4(a,b,c)},
hl(a,b,c,d){var s,r
if(C.o===c)return H.nU(J.aH(a),J.aH(b),$.ml())
if(C.o===d){s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
return H.mE(H.ch(H.ch(H.ch($.ml(),s),b),c))}s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
d=J.aH(d)
r=$.ml()
return H.mE(H.ch(H.ch(H.ch(H.ch(r,s),b),c),d))},
bU(a){H.nd(J.bu(a))},
ox(a,b){return 65536+((a&1023)<<10)+(b&1023)},
mI(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.b.E(a5,4)^58)*3|C.b.E(a5,0)^100|C.b.E(a5,1)^97|C.b.E(a5,2)^116|C.b.E(a5,3)^97)>>>0
if(s===0)return P.o0(a4<a4?C.b.w(a5,0,a4):a5,5,a3).gka()
else if(s===32)return P.o0(C.b.w(a5,5,a4),0,a3).gka()}r=P.bG(8,0,!1,t.S)
C.a.q(r,0,0)
C.a.q(r,1,-1)
C.a.q(r,2,-1)
C.a.q(r,7,-1)
C.a.q(r,3,0)
C.a.q(r,4,0)
C.a.q(r,5,a4)
C.a.q(r,6,a4)
if(P.oH(a5,0,a4,0,r)>=14)C.a.q(r,7,a4)
q=r[1]
if(q>=0)if(P.oH(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
if(k)if(p>q+3){j=a3
k=!1}else{i=o>0
if(i&&o+1===n){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&C.b.ak(a5,"..",n)))h=m>n+2&&C.b.ak(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.b.ak(a5,"file",0)){if(p<=0){if(!C.b.ak(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.b.w(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.b.ck(a5,n,m,"/");++a4
m=f}j="file"}else if(C.b.ak(a5,"http",0)){if(i&&o+3===n&&C.b.ak(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.b.ck(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.b.ak(a5,"https",0)){if(i&&o+4===n&&C.b.ak(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.b.ck(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.b.w(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.br(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.rB(a5,0,q)
else{if(q===0)P.dB(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.op(a5,d,p-1):""
b=P.om(a5,p,o,!1)
i=o+1
if(i<n){a=H.nJ(C.b.w(a5,i,n),a3)
a0=P.mT(a==null?H.c(P.aC("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.on(a5,n,m,a3,j,b!=null)
a2=m<l?P.oo(a5,m+1,l,a3):a3
return new P.cs(j,c,b,a0,a1,a2,l<a4?P.ol(a5,l+1,a4):a3)},
qZ(a){H.av(a)
return P.mW(a,0,a.length,C.x,!1)},
qY(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.kJ(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.b.J(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.cv(C.b.w(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.b(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.cv(C.b.w(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.b(j,q)
j[q]=o
return j},
o1(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.kK(a),c=new P.kL(d,a)
if(a.length<2)d.$1("address is too short")
s=H.a([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.b.J(a,r)
if(n===58){if(r===b){++r
if(C.b.J(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
C.a.p(s,-1)
p=!0}else C.a.p(s,c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.a.gt(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)C.a.p(s,c.$2(q,a0))
else{k=P.qY(a,q,a0)
C.a.p(s,(k[0]<<8|k[1])>>>0)
C.a.p(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.b(j,h)
j[h]=0
e=h+1
if(e>=16)return H.b(j,e)
j[e]=0
h+=2}else{e=C.d.d_(g,8)
if(h<0||h>=16)return H.b(j,h)
j[h]=e
e=h+1
if(e>=16)return H.b(j,e)
j[e]=g&255
h+=2}}return j},
oi(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
rz(a,b){var s,r,q,p,o,n
for(s=a.length,r=0;r<s;++r){q=C.b.E(a,r)
p=C.b.E(b,r)
o=q^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122)continue}return!1}}return!0},
dB(a,b,c){throw H.d(P.aC(c,a,b))},
rw(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.X(q)
o=p.gm(q)
if(0>o)H.c(P.a_(0,0,p.gm(q),null,null))
if(H.cx(q,"/",0)){s=P.T("Illegal path character "+H.l(q))
throw H.d(s)}}},
oh(a,b,c){var s,r,q,p
for(s=H.bf(a,c,null,H.x(a).c),r=s.$ti,s=new H.N(s,s.gm(s),r.h("N<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
p=P.at('["*/:<>?\\\\|]')
if(H.cx(q,p,0)){s=P.T("Illegal character in path: "+q)
throw H.d(s)}}},
rx(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=P.T("Illegal drive letter "+P.qP(a))
throw H.d(s)},
mT(a,b){if(a!=null&&a===P.oi(b))return null
return a},
om(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(C.b.J(a,b)===91){s=c-1
if(C.b.J(a,s)!==93)P.dB(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.ry(a,r,s)
if(q<s){p=q+1
o=P.os(a,C.b.ak(a,"25",p)?q+3:p,s,"%25")}else o=""
P.o1(a,r,q)
return C.b.w(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.b.J(a,n)===58){q=C.b.aP(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.os(a,C.b.ak(a,"25",p)?q+3:p,c,"%25")}else o=""
P.o1(a,b,q)
return"["+C.b.w(a,b,q)+o+"]"}return P.rD(a,b,c)},
ry(a,b,c){var s=C.b.aP(a,"%",b)
return s>=b&&s<c?s:c},
os(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=C.b.J(a,s)
if(p===37){o=P.mU(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a2("")
m=i.a+=C.b.w(a,r,s)
if(n)o=C.b.w(a,s,s+3)
else if(o==="%")P.dB(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.G,n)
n=(C.G[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a2("")
if(r<s){i.a+=C.b.w(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.b.J(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.b.w(a,r,s)
if(i==null){i=new P.a2("")
n=i}else n=i
n.a+=j
n.a+=P.mS(p)
s+=k
r=s}}}if(i==null)return C.b.w(a,b,c)
if(r<c)i.a+=C.b.w(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
rD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.b.J(a,s)
if(o===37){n=P.mU(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a2("")
l=C.b.w(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.b.w(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.ad,m)
m=(C.ad[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a2("")
if(r<s){q.a+=C.b.w(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.C,m)
m=(C.C[m]&1<<(o&15))!==0}else m=!1
if(m)P.dB(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.b.J(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.b.w(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a2("")
m=q}else m=q
m.a+=l
m.a+=P.mS(o)
s+=j
r=s}}}}if(q==null)return C.b.w(a,b,c)
if(r<c){l=C.b.w(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
rB(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.ok(C.b.E(a,b)))P.dB(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.b.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.F,p)
p=(C.F[p]&1<<(q&15))!==0}else p=!1
if(!p)P.dB(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.b.w(a,b,c)
return P.rv(r?a.toLowerCase():a)},
rv(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
op(a,b,c){if(a==null)return""
return P.fc(a,b,c,C.bq,!1)},
on(a,b,c,d,e,f){var s=e==="file",r=s||f,q=P.fc(a,b,c,C.ae,!0)
if(q.length===0){if(s)return"/"}else if(r&&!C.b.a1(q,"/"))q="/"+q
return P.rC(q,e,f)},
rC(a,b,c){var s=b.length===0
if(s&&!c&&!C.b.a1(a,"/"))return P.mV(a,!s||c)
return P.c4(a)},
oo(a,b,c,d){if(a!=null)return P.fc(a,b,c,C.E,!0)
return null},
ol(a,b,c){if(a==null)return null
return P.fc(a,b,c,C.E,!0)},
mU(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.b.J(a,b+1)
r=C.b.J(a,n)
q=H.m2(s)
p=H.m2(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.d.d_(o,4)
if(n>=8)return H.b(C.G,n)
n=(C.G[n]&1<<(o&15))!==0}else n=!1
if(n)return H.bc(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.b.w(a,b,b+3).toUpperCase()
return null},
mS(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.b.E(k,a>>>4)
s[2]=C.b.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.d.mx(a,6*q)&63|r
if(o>=p)return H.b(s,o)
s[o]=37
m=o+1
l=C.b.E(k,n>>>4)
if(m>=p)return H.b(s,m)
s[m]=l
l=o+2
m=C.b.E(k,n&15)
if(l>=p)return H.b(s,l)
s[l]=m
o+=3}}return P.ad(s,0,null)},
fc(a,b,c,d,e){var s=P.or(a,b,c,d,e)
return s==null?C.b.w(a,b,c):s},
or(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.b.J(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.mU(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.C,n)
n=(C.C[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.dB(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.b.J(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.mS(o)}}if(p==null){p=new P.a2("")
n=p}else n=p
n.a+=C.b.w(a,q,r)
n.a+=H.l(m)
if(typeof l!=="number")return H.b3(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.b.w(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
oq(a){if(C.b.a1(a,"."))return!0
return C.b.ao(a,"/.")!==-1},
c4(a){var s,r,q,p,o,n,m
if(!P.oq(a))return a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.V(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)C.a.p(s,"")}p=!0}else if("."===n)p=!0
else{C.a.p(s,n)
p=!1}}if(p)C.a.p(s,"")
return C.a.aC(s,"/")},
mV(a,b){var s,r,q,p,o,n
if(!P.oq(a))return!b?P.oj(a):a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.a.gt(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{C.a.p(s,"..")
p=!1}else if("."===n)p=!0
else{C.a.p(s,n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.a.gt(s)==="..")C.a.p(s,"")
if(!b){if(0>=s.length)return H.b(s,0)
C.a.q(s,0,P.oj(s[0]))}return C.a.aC(s,"/")},
oj(a){var s,r,q,p=a.length
if(p>=2&&P.ok(C.b.E(a,0)))for(s=1;s<p;++s){r=C.b.E(a,s)
if(r===58)return C.b.w(a,0,s)+"%3A"+C.b.aw(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.F,q)
q=(C.F[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
rE(a,b){if(a.oK("package")&&a.c==null)return P.oJ(b,0,b.length)
return-1},
ot(a){var s,r,q,p=a.gha(),o=p.length
if(o>0&&J.H(p[0])===2&&J.nn(p[0],1)===58){if(0>=o)return H.b(p,0)
P.rx(J.nn(p[0],0),!1)
P.oh(p,!1,1)
s=!0}else{P.oh(p,!1,0)
s=!1}r=a.geh()&&!s?""+"\\":""
if(a.gdg()){q=a.gbp(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=P.kz(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
rA(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.b.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.d(P.a8("Invalid URL encoding",null))}}return s},
mW(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.b.E(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.x!==d)q=!1
else q=!0
if(q)return C.b.w(a,b,c)
else p=new H.a9(C.b.w(a,b,c))}else{p=H.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.b.E(a,o)
if(r>127)throw H.d(P.a8("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw H.d(P.a8("Truncated URI",null))
C.a.p(p,P.rA(a,o+1))
o+=2}else C.a.p(p,r)}}return d.e6(0,p)},
ok(a){var s=a|32
return 97<=s&&s<=122},
o0(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.b.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.d(P.aC(k,a,r))}}if(q<0&&r>b)throw H.d(P.aC(k,a,r))
for(;p!==44;){C.a.p(j,r);++r
for(o=-1;r<s;++r){p=C.b.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)C.a.p(j,o)
else{n=C.a.gt(j)
if(p!==44||r!==n+7||!C.b.ak(a,"base64",n+1))throw H.d(P.aC("Expecting '='",a,r))
break}}C.a.p(j,r)
m=r+1
if((j.length&1)===1)a=C.aO.oW(a,m,s)
else{l=P.or(a,m,s,C.E,!0)
if(l!=null)a=C.b.ck(a,m,s,l)}return new P.kI(a,j,c)},
rM(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=t.hb,g=J.ms(22,h)
for(s=0;s<22;++s)g[s]=new Uint8Array(96)
r=new P.lH(g)
q=new P.lI()
p=new P.lJ()
o=h.a(r.$2(0,225))
q.$3(o,n,1)
q.$3(o,m,14)
q.$3(o,l,34)
q.$3(o,k,3)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(14,225))
q.$3(o,n,1)
q.$3(o,m,15)
q.$3(o,l,34)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(15,225))
q.$3(o,n,1)
q.$3(o,"%",225)
q.$3(o,l,34)
q.$3(o,k,9)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(1,225))
q.$3(o,n,1)
q.$3(o,l,34)
q.$3(o,k,10)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(2,235))
q.$3(o,n,139)
q.$3(o,k,131)
q.$3(o,m,146)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(3,235))
q.$3(o,n,11)
q.$3(o,k,68)
q.$3(o,m,18)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(4,229))
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,"[",232)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(5,229))
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(6,231))
p.$3(o,"19",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(7,231))
p.$3(o,"09",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
q.$3(h.a(r.$2(8,8)),"]",5)
o=h.a(r.$2(9,235))
q.$3(o,n,11)
q.$3(o,m,16)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(16,235))
q.$3(o,n,11)
q.$3(o,m,17)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(17,235))
q.$3(o,n,11)
q.$3(o,k,9)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(10,235))
q.$3(o,n,11)
q.$3(o,m,18)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(18,235))
q.$3(o,n,11)
q.$3(o,m,19)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(19,235))
q.$3(o,n,11)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(11,235))
q.$3(o,n,11)
q.$3(o,k,10)
q.$3(o,j,172)
q.$3(o,i,205)
o=h.a(r.$2(12,236))
q.$3(o,n,12)
q.$3(o,j,12)
q.$3(o,i,205)
o=h.a(r.$2(13,237))
q.$3(o,n,13)
q.$3(o,j,13)
p.$3(h.a(r.$2(20,245)),"az",21)
r=h.a(r.$2(21,245))
p.$3(r,"az",21)
p.$3(r,"09",21)
q.$3(r,"+-.",21)
return g},
oH(a,b,c,d,e){var s,r,q,p,o=$.pB()
for(s=b;s<c;++s){if(d<0||d>=o.length)return H.b(o,d)
r=o[d]
q=C.b.E(a,s)^96
p=r[q>95?31:q]
d=p&31
C.a.q(e,p>>>5,s)}return d},
oc(a){if(a.b===7&&C.b.a1(a.a,"package")&&a.c<=0)return P.oJ(a.a,a.e,a.f)
return-1},
oJ(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=C.b.J(a,s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
a1:function a1(){},
dM:function dM(a){this.a=a},
ck:function ck(){},
hi:function hi(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h3:function h3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hX:function hX(a){this.a=a},
eP:function eP(a){this.a=a},
cg:function cg(a){this.a=a},
fN:function fN(a){this.a=a},
ho:function ho(){},
eI:function eI(){},
fP:function fP(a){this.a=a},
ik:function ik(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
U:function U(){},
bn:function bn(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(){},
G:function G(){},
iv:function iv(){},
hA:function hA(a){this.a=a},
hz:function hz(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=null},
kI:function kI(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function lH(a){this.a=a},
lI:function lI(){},
lJ:function lJ(){},
br:function br(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.x=null},
p7(a,b,c){H.iD(c,t.q,"T","min")
return Math.min(c.a(a),c.a(b))},
p6(a,b,c){H.iD(c,t.q,"T","max")
return Math.max(c.a(a),c.a(b))},
iq:function iq(){this.b=this.a=0},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c}},S={
aA(a,b){var s,r,q=new S.bv(b)
if(a==null){s=q.gav(q).length
r=q.gav(q).length!==0?J.H(C.a.gar(q.gav(q))):0
a=new S.O(s,r,t.o)
s=a}else s=a
q.sm1(t.o.a(s))
return q},
cY(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=H.a([],t.b)
for(s=B.J(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=H.a([],q)
for(n=B.J(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,H.f)(n),++l)o.push(a)
j.push(o)}return S.aA(b,j)},
iO(a){var s,r,q,p,o=H.a([],t.b)
for(s=J.aP(a),r=s.gH(a),q=t.n;r.n();){p=r.gu()
o.push(H.a([p.a,p.b,p.c],q))}return S.aA(new S.O(s.gm(a),3,t.o),o)},
fA(a){var s,r,q,p,o,n,m,l,k,j,i=H.a([],t.b)
for(s=B.J(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
n=H.a([],q)
for(m=B.J(a,0,1),l=m.length,k=J.bs(o),j=0;j<m.length;m.length===l||(0,H.f)(m),++j)if(k.Z(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return S.aA(new S.O(a,a,t.o),i)},
tR(a,b){var s=S.pg(a),r=S.u0(b)
return C.a.aR(H.a([r,s,r.kn()],t.fp),new S.mg())},
pg(a){var s=t.n
return S.aA(null,H.a([H.a([Math.cos(a),-Math.sin(a),0],s),H.a([Math.sin(a),Math.cos(a),0],s),H.a([0,0,1],s)],t.b))},
u0(a){var s,r,q,p,o,n
if(a.bL()===0)return S.fA(3)
s=a.b5(0,Math.sqrt(a.bL()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.ke(0)
p=q.b5(0,Math.sqrt(q.bL()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=S.aA(null,H.a([H.a([Math.cos(r),0,Math.sin(r)],q),H.a([0,1,0],q),H.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return S.pg(o).cg(n)},
pc(a,b){var s,r,q,p,o=a/2,n=b.b5(0,Math.sqrt(b.bL())).B(0,Math.sin(o)),m=H.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(H.a([s[p]],q))
m.push(H.a([Math.cos(o)],q))
return S.aA(null,m)},
oQ(a,b){var s,r,q,p,o,n,m=6.283185307179586/a,l=t.hR,k=H.a([],l)
for(s=B.J(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
if(typeof p!=="number")return H.b3(p)
o=m*p
k.push(new A.cE(Math.cos(o),Math.sin(o)))}l=H.a([],l)
for(s=k.length,r=b.a,o=b.b,q=0;q<k.length;k.length===s||(0,H.f)(k),++q)l.push(k[q].B(0,new A.cE(r,o)))
k=H.a([],t.l)
for(s=l.length,q=0;q<l.length;l.length===s||(0,H.f)(l),++q){n=l[q]
k.push(new M.e(n.a,n.b,0))}return k},
bv:function bv(a){this.a=a
this.b=null},
iU:function iU(a){this.a=a},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
iT:function iT(a){this.a=a},
iS:function iS(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
iX:function iX(a){this.a=a},
iQ:function iQ(){},
iP:function iP(a){this.a=a},
mg:function mg(){},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},T={
aI(a,b,c,d){return new T.cf(b==null?P.Z(null,null,t.K,t.N):b,c,a,d)},
b8:function b8(){},
c0:function c0(){},
cf:function cf(a,b,c,d){var _=this
_.e=a
_.r=!1
_.x=b
_.b=c
_.c=d
_.a=null},
L:function L(a,b){this.b=a
this.c=b
this.a=null},
be:function be(){},
n:function n(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
E:function E(a,b){this.b=a
this.c=b
this.a=null},
cQ:function cQ(a,b){this.b=a
this.c=b
this.a=null},
d0:function d0(a,b){this.b=a
this.c=b
this.a=null},
dV:function dV(a){var _=this
_.c=_.b=null
_.d=""
_.e=a
_.a=null},
eL:function eL(){this.b=this.a=null},
j4:function j4(a){this.c=a
this.d=8
this.r=null},
j5:function j5(){},
j6:function j6(){}},U={
j2(a,b){var s=null,r=new U.dR(s,s,a,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.lW(a)
r.lU(a,b)
return r},
pS(a){var s,r,q,p,o,n,m,l,k,j=a.gjM(a),i=a.dx
if(i==null)i=H.c(H.h("releasedListener"))
s=K.mJ(a.x)
r=a.ga0(a).v()
q=a.gI(a)
if(a.c===$)H.c(H.h("target"))
p=H.a([],t.r)
for(o=a.gM(),n=o.length,m=0;m<o.length;o.length===n||(0,H.f)(o),++m)p.push(o[m].v())
o=a.ga6()
n=H.a([],t.l)
for(l=J.K(a.gA(a));l.n();){k=l.gu()
n.push(new M.e(k.a,k.b,k.c))}return new U.dR(i,j,s,r,q,null,p,o,n)},
h6:function h6(){},
dR:function dR(a,b,c,d,e,f,g,h,i){var _=this
_.dx=a
_.dy=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h
_.r=i},
j3:function j3(a){this.a=a},
q7(a,b){var s=U.q8(H.a([U.r8(a,!0)],t.pg)),r=new U.jJ(b).$0(),q=C.d.l(C.a.gt(s).b+1),p=U.q9(s)?0:3,o=H.x(s)
return new U.jp(s,r,null,1+Math.max(q.length,p),new H.F(s,o.h("j(1)").a(new U.jr()),o.h("F<1,j>")).aR(0,C.a0),!B.tI(new H.F(s,o.h("G?(1)").a(new U.js()),o.h("F<1,G?>"))),new P.a2(""))},
q9(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.V(r.c,q.c))return!1}return!0},
q8(a){var s,r,q,p=Y.tC(a,new U.ju(),t.C,t.K)
for(s=p.gav(p),s=s.gH(s);s.n();)J.ns(s.gu(),new U.jv())
s=p.gea(p)
r=H.D(s)
q=r.h("e2<k.E,bh>")
return P.i(new H.e2(s,r.h("k<bh>(k.E)").a(new U.jw()),q),!0,q.h("k.E"))},
r8(a,b){var s=new U.lo(a).$0()
return new U.az(s,!0,null)},
ra(a){var s,r,q,p,o,n,m=a.gY(a)
if(!C.b.G(m,"\r\n"))return a
s=a.gX()
r=s.gay(s)
for(s=m.length-1,q=0;q<s;++q)if(C.b.E(m,q)===13&&C.b.E(m,q+1)===10)--r
s=a.gV(a)
p=a.ga7()
o=a.gX().gaj()
p=V.hJ(r,a.gX().gaq(),o,p)
o=H.bt(m,"\r\n","\n")
n=a.gaZ()
return X.kw(s,p,o,H.bt(n,"\r\n","\n"))},
rb(a){var s,r,q,p,o,n,m
if(!C.b.bm(a.gaZ(),"\n"))return a
if(C.b.bm(a.gY(a),"\n\n"))return a
s=C.b.w(a.gaZ(),0,a.gaZ().length-1)
r=a.gY(a)
q=a.gV(a)
p=a.gX()
if(C.b.bm(a.gY(a),"\n")){o=B.lZ(a.gaZ(),a.gY(a),a.gV(a).gaq())
o.toString
o=o+a.gV(a).gaq()+a.gm(a)===a.gaZ().length}else o=!1
if(o){r=C.b.w(a.gY(a),0,a.gY(a).length-1)
if(r.length===0)p=q
else{o=a.gX()
o=o.gay(o)
n=a.ga7()
m=a.gX().gaj()
p=V.hJ(o-1,U.o7(s),m-1,n)
o=a.gV(a)
o=o.gay(o)
n=a.gX()
q=o===n.gay(n)?p:a.gV(a)}}return X.kw(q,p,r,s)},
r9(a){var s,r,q,p,o
if(a.gX().gaq()!==0)return a
if(a.gX().gaj()===a.gV(a).gaj())return a
s=C.b.w(a.gY(a),0,a.gY(a).length-1)
r=a.gV(a)
q=a.gX()
q=q.gay(q)
p=a.ga7()
o=a.gX().gaj()
p=V.hJ(q-1,s.length-C.b.h3(s,"\n")-1,o-1,p)
return X.kw(r,p,s,C.b.bm(a.gaZ(),"\n")?C.b.w(a.gaZ(),0,a.gaZ().length-1):a.gaZ())},
o7(a){var s=a.length
if(s===0)return 0
else if(C.b.J(a,s-1)===10)return s===1?0:s-C.b.el(a,"\n",s-2)-1
else return s-C.b.h3(a,"\n")-1},
jp:function jp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jJ:function jJ(a){this.a=a},
jr:function jr(){},
jq:function jq(){},
js:function js(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
jt:function jt(a){this.a=a},
jK:function jK(){},
jx:function jx(a){this.a=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jH:function jH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
lo:function lo(a){this.a=a},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
n8(a){var s,r,q=J.ms(a,t.W)
for(s=1/a,r=0;r<a;++r)q[r]=s
return q},
tM(){var s,r,q,p,o,n="align*",m=t.N
$.cP.q(0,n,P.aX(m,m))
$.cP.q(0,"center",P.aX(m,m))
$.cP.j(0,n).q(0,"\\gets","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='9.962669pt' height='2.328761pt' viewBox='166.874206 -3.655041 9.962669 2.328761'>\n<defs>\n<path id='g0-32' d='M9.39477-2.49066C9.39477-2.590286 9.325031-2.689913 9.185554-2.689913H1.643836C2.391034-3.227895 2.909091-4.044832 3.068493-4.961395C3.068493-5.041096 3.01868-5.090909 2.958904-5.090909H2.779577C2.729763-5.090909 2.67995-5.051059 2.669988-5.001245C2.480697-3.88543 1.693649-2.968867 .627646-2.590286C.587796-2.580324 .547945-2.540473 .547945-2.49066S.587796-2.400996 .627646-2.391034C1.693649-2.012453 2.480697-1.09589 2.669988 .019925C2.67995 .069738 2.729763 .109589 2.779577 .109589H2.958904C3.01868 .109589 3.068493 .059776 3.068493-.019925C2.909091-.936488 2.391034-1.753425 1.643836-2.291407H9.185554C9.325031-2.291407 9.39477-2.391034 9.39477-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='166.874206' y='0' xlink:href='#g0-32'/>\n</g>\n</svg>")
$.cP.j(0,n).q(0,"\\to","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='9.962669pt' height='2.328761pt' viewBox='166.874206 -3.655041 9.962669 2.328761'>\n<defs>\n<path id='g0-33' d='M9.39477-2.49066C9.39477-2.540473 9.354919-2.580324 9.315068-2.590286C8.249066-2.968867 7.462017-3.88543 7.272727-5.001245C7.262765-5.051059 7.212951-5.090909 7.163138-5.090909H6.983811C6.924035-5.090909 6.874222-5.041096 6.874222-4.961395C7.033624-4.044832 7.551681-3.227895 8.298879-2.689913H.757161C.617684-2.689913 .547945-2.590286 .547945-2.49066S.617684-2.291407 .757161-2.291407H8.298879C7.551681-1.753425 7.033624-.936488 6.874222-.019925C6.874222 .059776 6.924035 .109589 6.983811 .109589H7.163138C7.212951 .109589 7.262765 .069738 7.272727 .019925C7.462017-1.09589 8.249066-2.012453 9.315068-2.391034C9.354919-2.400996 9.39477-2.440847 9.39477-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='166.874206' y='0' xlink:href='#g0-33'/>\n</g>\n</svg>")
$.cP.j(0,"center").q(0,"Reset","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='23.993534pt' height='6.863016pt' viewBox='159.993287 -6.863016 23.993534 6.863016'>\n<defs>\n<path id='g0-82' d='M7.292653-.876712C7.292653-.936488 7.292653-1.046077 7.163138-1.046077C7.053549-1.046077 7.053549-.956413 7.043587-.886675C6.983811-.179328 6.635118 0 6.386052 0C5.897883 0 5.818182-.508095 5.678705-1.43462L5.549191-2.231631C5.369863-2.86924 4.881694-3.198007 4.333748-3.387298C5.300125-3.626401 6.07721-4.234122 6.07721-5.011208C6.07721-5.967621 4.941469-6.804483 3.476961-6.804483H.348692V-6.495641H.587796C1.354919-6.495641 1.374844-6.386052 1.374844-6.027397V-.777086C1.374844-.418431 1.354919-.308842 .587796-.308842H.348692V0C.707347-.029888 1.414695-.029888 1.803238-.029888S2.899128-.029888 3.257783 0V-.308842H3.01868C2.251557-.308842 2.231631-.418431 2.231631-.777086V-3.297634H3.377335C3.536737-3.297634 3.955168-3.297634 4.303861-2.958904C4.682441-2.600249 4.682441-2.291407 4.682441-1.62391C4.682441-.976339 4.682441-.577833 5.090909-.199253C5.499377 .159402 6.047323 .219178 6.346202 .219178C7.123288 .219178 7.292653-.597758 7.292653-.876712ZM5.051059-5.011208C5.051059-4.323786 4.811955-3.516812 3.337484-3.516812H2.231631V-6.097136C2.231631-6.326276 2.231631-6.445828 2.450809-6.475716C2.550436-6.495641 2.839352-6.495641 3.038605-6.495641C3.935243-6.495641 5.051059-6.455791 5.051059-5.011208Z'/>\n<path id='g0-101' d='M4.134496-1.185554C4.134496-1.285181 4.054795-1.305106 4.004981-1.305106C3.915318-1.305106 3.895392-1.24533 3.875467-1.165629C3.526775-.139477 2.630137-.139477 2.530511-.139477C2.032379-.139477 1.633873-.438356 1.404732-.806974C1.105853-1.285181 1.105853-1.942715 1.105853-2.30137H3.88543C4.104608-2.30137 4.134496-2.30137 4.134496-2.510585C4.134496-3.496887 3.596513-4.463263 2.351183-4.463263C1.195517-4.463263 .278954-3.437111 .278954-2.191781C.278954-.856787 1.325031 .109589 2.470735 .109589C3.686177 .109589 4.134496-.996264 4.134496-1.185554ZM3.476961-2.510585H1.115816C1.175592-3.995019 2.012453-4.244085 2.351183-4.244085C3.377335-4.244085 3.476961-2.899128 3.476961-2.510585Z'/>\n<path id='g0-115' d='M3.58655-1.275218C3.58655-1.803238 3.287671-2.102117 3.16812-2.221669C2.839352-2.540473 2.450809-2.620174 2.032379-2.699875C1.474471-2.809465 .806974-2.938979 .806974-3.516812C.806974-3.865504 1.066002-4.273973 1.92279-4.273973C3.01868-4.273973 3.068493-3.377335 3.088418-3.068493C3.098381-2.978829 3.20797-2.978829 3.20797-2.978829C3.337484-2.978829 3.337484-3.028643 3.337484-3.217933V-4.224159C3.337484-4.393524 3.337484-4.463263 3.227895-4.463263C3.178082-4.463263 3.158157-4.463263 3.028643-4.343711C2.998755-4.303861 2.899128-4.214197 2.859278-4.184309C2.480697-4.463263 2.072229-4.463263 1.92279-4.463263C.707347-4.463263 .328767-3.795766 .328767-3.237858C.328767-2.889166 .488169-2.610212 .757161-2.391034C1.075965-2.132005 1.354919-2.072229 2.072229-1.932752C2.291407-1.892902 3.108344-1.733499 3.108344-1.016189C3.108344-.508095 2.759651-.109589 1.982565-.109589C1.145704-.109589 .787049-.67746 .597758-1.524284C.56787-1.653798 .557908-1.693649 .458281-1.693649C.328767-1.693649 .328767-1.62391 .328767-1.444583V-.129514C.328767 .039851 .328767 .109589 .438356 .109589C.488169 .109589 .498132 .099626 .687422-.089664C.707347-.109589 .707347-.129514 .886675-.318804C1.325031 .099626 1.77335 .109589 1.982565 .109589C3.128269 .109589 3.58655-.557908 3.58655-1.275218Z'/>\n<path id='g0-116' d='M3.307597-1.235367V-1.803238H3.058531V-1.255293C3.058531-.518057 2.759651-.139477 2.391034-.139477C1.723537-.139477 1.723537-1.046077 1.723537-1.215442V-3.985056H3.148194V-4.293898H1.723537V-6.127024H1.474471C1.464508-5.310087 1.165629-4.244085 .18929-4.204234V-3.985056H1.036115V-1.235367C1.036115-.009963 1.96264 .109589 2.321295 .109589C3.028643 .109589 3.307597-.597758 3.307597-1.235367Z'/>\n</defs>\n<g id='page1'>\n<use x='159.993287' y='0' xlink:href='#g0-82'/>\n<use x='167.326779' y='0' xlink:href='#g0-101'/>\n<use x='171.754678' y='0' xlink:href='#g0-115'/>\n<use x='175.684443' y='0' xlink:href='#g0-101'/>\n<use x='180.112342' y='0' xlink:href='#g0-116'/>\n</g>\n</svg>")
m=document
s=m.getElementById("canvas-container")
s.toString
r=H.a([],t.dw)
q=new Y.ep(0)
q.f1(0)
m=m.createElement("canvas")
t.jQ.a(m)
p=new Z.fH(m,s,r,C.h,C.h,q,C.h,C.h)
p.a=new F.fI($.dH())
s.appendChild(m).toString
m=t.n
o=new U.e6(H.a([1.1,0.6,1.3,1.1,5.2,4.7,5.1,5.3,5.2,12.3,12.1,12.9,12.4,12],m),H.a([1,2,3],m),H.a([1,3,7],m),H.a([1,2,3],m),H.a([-5,20],m))
o.lX()
o.x=p
o.gau(o).gdq()
o.gau(o).j3(o.gas())
m=o.gas()
m.r=o.gau(o)
m.gau(m).j3(m)
s=m.gau(m)
r=s.gdq()
r.lB(s)
s=s.d.getContext("2d")
s.toString
r.e=s
m.d=m.c/1.7777777777777777
s=m.gau(m).gdq()
r=m.c
q=m.d
s.gbb().setTransform(1280/r,0,0,-720/q,640-0/r,360-0/q)
m.gau(m).gdq().eC(C.r)
o.cR()},
e6:function e6(a,b,c,d,e){var _=this
_.r1=_.k4=_.k3=_.k1=_.id=_.go=_.fy=_.dy=_.db=_.cx=_.y=null
_.rx=_.r2=0
_.x1=!1
_.eb=a
_.o9=b
_.fQ=c
_.fR=d
_.de=e
_.a=0
_.x=_.f=_.d=null},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
tT(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=B.m7(S.iO(a),S.iO(b),c,t.A)
m=H.a([],t.l)
for(r=s.gav(s),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p){o=r[p]
n=J.X(o)
m.push(new M.e(n.j(o,0),n.j(o,1),n.j(o,2)))}return m}},V={jM:function jM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r="no quirks"
_.z=_.y=_.x=null
_.Q=!0
_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=null},a7:function a7(){},ki:function ki(a){this.a=a},kh:function kh(a){this.a=a},bw:function bw(a,b){this.a=a
this.b=b},fG:function fG(a,b){this.a=a
this.b=b},dP:function dP(a,b){this.a=a
this.b=b},h1:function h1(a,b){this.a=a
this.b=b},fv:function fv(a,b){this.a=a
this.b=b},d7:function d7(a,b){this.c=!1
this.a=a
this.b=b},jQ:function jQ(a){this.a=a},jP:function jP(a){this.a=a},hP:function hP(a,b){this.a=a
this.b=b},ed:function ed(a,b){this.a=a
this.b=b},d9:function d9(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},jR:function jR(){},e8:function e8(a,b){this.a=a
this.b=b},e9:function e9(a,b){this.a=a
this.b=b},cH:function cH(a,b){this.a=a
this.b=b},eb:function eb(a,b){this.a=a
this.b=b},d8:function d8(a,b){this.a=a
this.b=b},ec:function ec(a,b){this.a=a
this.b=b},h2:function h2(a,b){this.a=a
this.b=b},h0:function h0(a,b){this.a=a
this.b=b},ft:function ft(a,b){this.a=a
this.b=b},ea:function ea(a,b){this.a=a
this.b=b},fu:function fu(a,b){this.a=a
this.b=b},fr:function fr(a,b){this.a=a
this.b=b},fs:function fs(a,b){this.a=a
this.b=b},aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
rY(a){if(1<=a&&a<=8)return!0
if(14<=a&&a<=31)return!0
if(127<=a&&a<=159)return!0
if(55296<=a&&a<=57343)return!0
if(64976<=a&&a<=65007)return!0
switch(a){case 11:case 65534:case 65535:case 131070:case 131071:case 196606:case 196607:case 262142:case 262143:case 327678:case 327679:case 393214:case 393215:case 458750:case 458751:case 524286:case 524287:case 589822:case 589823:case 655358:case 655359:case 720894:case 720895:case 786430:case 786431:case 851966:case 851967:case 917502:case 917503:case 983038:case 983039:case 1048574:case 1048575:case 1114110:case 1114111:return!0}return!1},
tm(a){var s=P.at("[\t-\r -/:-@[-`{-~]")
if(a==null)return null
return C.cN.j(0,H.bt(a,s,"").toLowerCase())},
rN(a,b){switch(a){case"ascii":return new H.a9(C.aN.e6(0,b))
case"utf-8":return new H.a9(C.x.e6(0,b))
default:throw H.d(P.a8("Encoding "+a+" not supported",null))}},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=!0
_.d=b
_.f=_.e=null
_.r=c
_.x=null
_.y=d
_.z=0},
bg(a,b,c,d,e){var s=t.O,r=a!=null?H.a([a],s):H.a([],s),q=H.a([c],s)
return new V.dr(q,d!=null?H.a([d],s):H.a([],s),e,r,b)},
ci(a){var s,r,q,p,o=a.a
if(o!=null){s=H.a([],t.O)
for(o=J.K(o);o.n();){r=o.gu()
s.push(new V.M(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=H.a([],t.O)
for(s=J.K(s);s.n();){q=s.gu()
r.push(new V.M(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=H.a([],t.O)
for(r=J.K(r);r.n();){p=r.gu()
q.push(new V.M(p.a,p.b,p.c,p.d))}r=q}else r=null
return new V.dr(o,s,a.c,r,a.e)},
qU(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
V.bg(a0,0,C.c,a0,0)
s=a1.k3
r=a1.k4
q=V.ci(a1.r1)
p=a1.r2
p=p==null?a0:V.aM(p)
o=a1.rx
o=o==null?a0:V.aM(o)
n=a1.db
n=n==null?a0:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a1.dx
l=l==null?a0:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a1.dy
k=k==null?a0:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a1.x
j=a1.y
i=a1.ge4()
h=a1.ga0(a1).v()
g=a1.gI(a1)
if(a1.c===$)H.c(H.h("target"))
f=H.a([],t.r)
for(e=a1.gM(),d=e.length,c=0;c<e.length;e.length===d||(0,H.f)(e),++c)f.push(e[c].v())
e=a1.ga6()
d=H.a([],t.l)
for(b=J.K(a1.gA(a1));b.n();){a=b.gu()
d.push(new M.e(a.a,a.b,a.c))}return new V.eO(s,new M.e(r.a,r.b,r.c),q,p,o,k,j,i,a1.Q,!1,a1.cx,a1.cy,n,l,m,h,g,a0,f,e,d)},
pK(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
V.bg(a0,0,C.c,a0,0)
s=a1.k3
r=a1.k4
q=V.ci(a1.r1)
p=a1.r2
p=p==null?a0:V.aM(p)
o=a1.rx
o=o==null?a0:V.aM(o)
n=a1.db
n=n==null?a0:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a1.dx
l=l==null?a0:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a1.dy
k=k==null?a0:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a1.x
j=a1.y
i=a1.ge4()
h=a1.ga0(a1).v()
g=a1.gI(a1)
if(a1.c===$)H.c(H.h("target"))
f=H.a([],t.r)
for(e=a1.gM(),d=e.length,c=0;c<e.length;e.length===d||(0,H.f)(e),++c)f.push(e[c].v())
e=a1.ga6()
d=H.a([],t.l)
for(b=J.K(a1.gA(a1));b.n();){a=b.gu()
d.push(new M.e(a.a,a.b,a.c))}return new V.dK(a1.aO,a1.a9,a1.ab,a1.ah,a1.bn,s,new M.e(r.a,r.b,r.c),q,p,o,k,j,i,a1.Q,!1,a1.cx,a1.cy,n,l,m,h,g,a0,f,e,d)},
pL(a,b,c){var s=null,r=new V.cA(0,a,1,C.h,9,0.35,C.l,V.bg(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.bA(C.c)
if(a===0)r.eX(H.a([C.K,C.j],t.l))
r.cN(c,b)
return r},
pM(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
V.bg(a,0,C.c,a,0)
s=a0.k3
r=a0.k4
q=V.ci(a0.r1)
p=a0.r2
p=p==null?a:V.aM(p)
o=a0.rx
o=o==null?a:V.aM(o)
n=a0.db
n=n==null?a:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a0.dx
l=l==null?a:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a0.dy
k=k==null?a:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a0.x
j=a0.y
i=a0.ga0(a0).v()
h=a0.gI(a0)
if(a0.c===$)H.c(H.h("target"))
g=H.a([],t.r)
for(f=a0.gM(),e=f.length,d=0;d<f.length;f.length===e||(0,H.f)(f),++d)g.push(f[d].v())
f=a0.ga6()
e=H.a([],t.l)
for(c=J.K(a0.gA(a0));c.n();){b=c.gu()
e.push(new M.e(b.a,b.b,b.c))}return new V.cA(a0.aO,a0.a9,a0.ab,a0.ah,a0.bn,s,new M.e(r.a,r.b,r.c),q,p,o,k,j,a0.z,a0.Q,!1,a0.cx,a0.cy,n,l,m,i,h,a,g,f,e)},
pT(a,b,c){var s=null,r=new V.d_(0,6.283185307179586,c,a,9,0.35,C.l,V.bg(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.bA(b)
return r},
pU(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
V.bg(a,0,C.c,a,0)
s=a0.k3
r=a0.k4
q=V.ci(a0.r1)
p=a0.r2
p=p==null?a:V.aM(p)
o=a0.rx
o=o==null?a:V.aM(o)
n=a0.db
n=n==null?a:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a0.dx
l=l==null?a:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a0.dy
k=k==null?a:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a0.x
j=a0.y
i=a0.ga0(a0).v()
h=a0.gI(a0)
if(a0.c===$)H.c(H.h("target"))
g=H.a([],t.r)
for(f=a0.gM(),e=f.length,d=0;d<f.length;f.length===e||(0,H.f)(f),++d)g.push(f[d].v())
f=a0.ga6()
e=H.a([],t.l)
for(c=J.K(a0.gA(a0));c.n();){b=c.gu()
e.push(new M.e(b.a,b.b,b.c))}return new V.d_(a0.aO,a0.a9,a0.ab,a0.ah,a0.bn,s,new M.e(r.a,r.b,r.c),q,p,o,k,j,!0,a0.Q,!1,a0.cx,a0.cy,n,l,m,i,h,a,g,f,e)},
q_(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
V.bg(a,0,C.c,a,0)
s=a0.k3
r=a0.k4
q=V.ci(a0.r1)
p=a0.r2
p=p==null?a:V.aM(p)
o=a0.rx
o=o==null?a:V.aM(o)
n=a0.db
n=n==null?a:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a0.dx
l=l==null?a:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a0.dy
k=k==null?a:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a0.x
j=a0.y
i=a0.ga0(a0).v()
h=a0.gI(a0)
if(a0.c===$)H.c(H.h("target"))
g=H.a([],t.r)
for(f=a0.gM(),e=f.length,d=0;d<f.length;f.length===e||(0,H.f)(f),++d)g.push(f[d].v())
f=a0.ga6()
e=H.a([],t.l)
for(c=J.K(a0.gA(a0));c.n();){b=c.gu()
e.push(new M.e(b.a,b.b,b.c))}return new V.d3(a0.aO,a0.a9,a0.ab,a0.ah,a0.bn,s,new M.e(r.a,r.b,r.c),q,p,o,k,j,!0,a0.Q,!1,a0.cx,a0.cy,n,l,m,i,h,a,g,f,e)},
q0(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
V.bg(a,0,C.c,a,0)
s=a0.k3
r=a0.k4
q=V.ci(a0.r1)
p=a0.r2
p=p==null?a:V.aM(p)
o=a0.rx
o=o==null?a:V.aM(o)
n=a0.db
n=n==null?a:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a0.dx
l=l==null?a:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a0.dy
k=k==null?a:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a0.x
j=a0.y
i=a0.ga0(a0).v()
h=a0.gI(a0)
if(a0.c===$)H.c(H.h("target"))
g=H.a([],t.r)
for(f=a0.gM(),e=f.length,d=0;d<f.length;f.length===e||(0,H.f)(f),++d)g.push(f[d].v())
f=a0.ga6()
e=H.a([],t.l)
for(c=J.K(a0.gA(a0));c.n();){b=c.gu()
e.push(new M.e(b.a,b.b,b.c))}return new V.dZ(a0.aO,a0.a9,a0.ab,a0.ah,a0.bn,s,new M.e(r.a,r.b,r.c),q,p,o,k,j,!0,a0.Q,!1,a0.cx,a0.cy,n,l,m,i,h,a,g,f,e)},
nC(a,b,c){var s=null,r=new V.aD(0,s,c,b,0.35,C.l,V.bg(s,0,C.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
r.bA(a)
return r},
qg(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a2.ab,a1=a2.ah
V.bg(a,0,C.c,a,0)
s=a2.k3
r=a2.k4
q=V.ci(a2.r1)
p=a2.r2
p=p==null?a:V.aM(p)
o=a2.rx
o=o==null?a:V.aM(o)
n=a2.db
n=n==null?a:J.t(n,new K.a3(),t.G)
if(n==null)n=H.a([],t.O)
m=t.G
n=P.i(n,!0,m)
l=a2.dx
l=l==null?a:J.t(l,new K.a4(),m)
l=P.i(l==null?H.a([],t.O):l,!0,m)
k=a2.dy
k=k==null?a:J.t(k,new K.a5(),m)
m=P.i(k==null?H.a([],t.O):k,!0,m)
k=a2.x
j=a2.y
i=a2.ga0(a2).v()
h=a2.gI(a2)
if(a2.c===$)H.c(H.h("target"))
g=H.a([],t.r)
for(f=a2.gM(),e=f.length,d=0;d<f.length;f.length===e||(0,H.f)(f),++d)g.push(f[d].v())
f=a2.ga6()
e=H.a([],t.l)
for(c=J.K(a2.gA(a2));c.n();){b=c.gu()
e.push(new M.e(b.a,b.b,b.c))}return new V.aD(a2.aO,a2.a9,a0,a1,s,new M.e(r.a,r.b,r.c),q,p,o,k,j,a2.z,a2.Q,!1,a2.cx,a2.cy,n,l,m,i,h,a,g,f,e)},
qr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaG()
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.ex(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
qA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaG()
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.ez(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
nY(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(b==null)s=1.5707963267948966
else s=b
r=S.pc(s,C.l).aY(0)
s=r.length
if(0>=s)return H.b(r,0)
q=r[0]
if(1>=s)return H.b(r,1)
p=r[1]
if(2>=s)return H.b(r,2)
o=r[2]
if(3>=s)return H.b(r,3)
n=r[3]
s=p*0
m=o*0
l=n+s-m
k=n*0
j=q*0
i=k+o-j
h=k+j-p
j=-q
g=j-s-m
m=-o
s=-p
j=S.oQ(3,new M.e(l*n+g*j+i*m-h*s,i*n+g*s+h*j-l*m,h*n+g*m+l*s-i*j))
s=new V.cR(4,0,!1,0.01,!1,0.000001,4,f,f,f,a,f,f,f,f,f)
s.am(a,f,f)
s.cW(j,a)
return s},
qW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.gaG()
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.cR(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
aM(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.bG
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.dL(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
hw(a,b,c){var s=null,r=H.a([C.q,C.Y,C.Z,C.a_],t.l),q=new V.dl(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,s,s,s,s,s)
q.am(a,s,s)
q.cW(r,a)
q.f2(a,b,c)
return q},
qz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.dl(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
qN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.eH(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
qB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new V.eA(q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
dr:function dr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hS:function hS(a){this.b=a},
eO:function eO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.ch=j
_.cx=k
_.cy=l
_.db=m
_.dx=n
_.dy=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=null
_.f=a0
_.r=a1},
dK:function dK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aO=a
_.a9=b
_.ab=c
_.ah=d
_.bn=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
cA:function cA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aO=a
_.a9=b
_.ab=c
_.ah=d
_.bn=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
d_:function d_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aO=a
_.a9=b
_.ab=c
_.ah=d
_.bn=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
d3:function d3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aO=a
_.a9=b
_.ab=c
_.ah=d
_.bn=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.aO=a
_.a9=b
_.ab=c
_.ah=d
_.bn=e
_.k3=f
_.k4=g
_.r1=h
_.r2=i
_.rx=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.ch=o
_.cx=p
_.cy=q
_.db=r
_.dx=s
_.dy=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=null
_.f=a5
_.r=a6},
aD:function aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.aO=a
_.a9=b
_.ab=c
_.ah=d
_.k3=e
_.k4=f
_.r1=g
_.r2=h
_.rx=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.ch=n
_.cx=o
_.cy=p
_.db=q
_.dx=r
_.dy=s
_.a=a0
_.b=a1
_.c=a2
_.d=a3
_.e=null
_.f=a4
_.r=a5},
ex:function ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
ez:function ez(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
cR:function cR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
dL:function dL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.bG=0
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
dl:function dl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eH:function eH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
eA:function eA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=null
_.f=o
_.r=p},
rL(a){var s,r,q,p,o,n,m,l,k,j,i
if(C.b.a1(a,"#"))a=C.b.jX(a,"#","")
s=a.length
if(!C.a.G(H.a([3,4,6,8],t.t),s))throw H.d("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=H.a([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
C.a.U(r,H.a([n,n],s))}a=C.a.aC(r,"")}if(a.length===6)a+="ff"
m=new V.lG()
l=C.b.w(a,0,2)
k=C.b.w(a,2,4)
j=C.b.w(a,4,6)
i=C.b.w(a,6,8)
return new V.M(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lG:function lG(){},
hJ(a,b,c,d){if(a<0)H.c(P.aE("Offset may not be negative, was "+a+"."))
else if(c<0)H.c(P.aE("Line may not be negative, was "+c+"."))
else if(b<0)H.c(P.aE("Column may not be negative, was "+b+"."))
return new V.bz(d,a,c,b)},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){}},W={
qq(a){var s=new Path2D(a)
s.toString
return s},
lq(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
o8(a,b,c,d){var s=W.lq(W.lq(W.lq(W.lq(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
l9(a,b,c,d,e){var s=W.oL(new W.la(c),t.fq),r=s!=null
if(r&&!0){t.U.a(s)
if(r)J.pD(a,b,s,!1)}return new W.eX(a,b,s,!1,e.h("eX<0>"))},
oL(a,b){var s=$.ab
if(s===C.k)return a
return s.nn(a,b)},
y:function y(){},
fw:function fw(){},
fz:function fz(){},
cB:function cB(){},
dS:function dS(){},
bD:function bD(){},
je:function je(){},
dX:function dX(){},
r:function r(){},
u:function u(){},
aV:function aV(){},
fW:function fW(){},
bb:function bb(){},
b7:function b7(){},
hq:function hq(){},
hD:function hD(){},
bA:function bA(){},
dv:function dv(){},
l2:function l2(a){this.a=a},
eU:function eU(){},
mq:function mq(a,b){this.a=a
this.$ti=b},
eW:function eW(){},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eX:function eX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
la:function la(a){this.a=a}},X={
hp(a,b){var s,r,q,p,o,n=b.ks(a)
b.c3(a)
if(n!=null)a=C.b.aw(a,n.length)
s=t.s
r=H.a([],s)
q=H.a([],s)
s=a.length
if(s!==0&&b.bK(C.b.E(a,0))){if(0>=s)return H.b(a,0)
C.a.p(q,a[0])
p=1}else{C.a.p(q,"")
p=0}for(o=p;o<s;++o)if(b.bK(C.b.E(a,o))){C.a.p(r,C.b.w(a,p,o))
C.a.p(q,a[o])
p=o+1}if(p<s){C.a.p(r,C.b.aw(a,p))
C.a.p(q,"")}return new X.kg(b,n,r,q)},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nH(a){return new X.hr(a)},
hr:function hr(a){this.a=a},
kw(a,b,c,d){var s=new X.bL(d,a,b,c)
s.lY(a,b,c)
if(!C.b.G(d,c))H.c(P.a8('The context line "'+d+'" must contain "'+c+'".',null))
if(B.lZ(d,c,a.gaq())==null)H.c(P.a8('The span text "'+c+'" must start at column '+(a.gaq()+1)+' in a line within "'+d+'".',null))
return s},
bL:function bL(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d}},Y={lY:function lY(){},lX:function lX(){},e7:function e7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=null
_.r=e
_.y=_.x=null
_.z=f
_.cy=_.cx=_.ch=_.Q=null
_.db=g
_.dx=h},jN:function jN(a){this.a=a},jO:function jO(a){this.a=a},
qp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=P.i(a.rx,!0,t.W),e=a.db
e=e==null?g:J.t(e,new K.a3(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.i(e,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new Y.ew(a.k3,a.k4,a.r1,a.r2,f,a.ry,q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,g,m,l,k)},
q2(a,b,c,d,e,f,g){var s=null,r=new Y.d5(d,e,g,f,c,b,new Y.ji(d),4,0,!1,0.01,!1,0.000001,4,s,s,s,a,s,s,s,s,s)
r.am(a,s,s)
r.hA(C.n)
return r},
q3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=P.i(a.rx,!0,t.W),e=a.db
e=e==null?g:J.t(e,new K.a3(),t.G)
if(e==null)e=H.a([],t.O)
s=t.G
e=P.i(e,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new Y.d5(a.a9,a.k3,a.k4,a.r1,a.r2,f,a.ry,q,p,a.z,a.Q,!1,a.cx,a.cy,e,r,s,o,n,g,m,l,k)},
ew:function ew(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.k3=a
_.k4=b
_.r1=c
_.r2=d
_.rx=e
_.ry=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p
_.a=q
_.b=r
_.c=s
_.d=a0
_.e=null
_.f=a1
_.r=a2},
kf:function kf(a){this.a=a},
d5:function d5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.a9=a
_.k3=b
_.k4=c
_.r1=d
_.r2=e
_.rx=f
_.ry=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.a=r
_.b=s
_.c=a0
_.d=a1
_.e=null
_.f=a2
_.r=a3},
ji:function ji(a){this.a=a},
qT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.db
f=f==null?g:J.t(f,new K.a3(),t.G)
if(f==null)f=H.a([],t.O)
s=t.G
f=P.i(f,!0,s)
r=a.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a.x
p=a.y
o=a.ga0(a).v()
n=a.gI(a)
if(a.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a.ga6()
k=H.a([],t.l)
for(i=J.K(a.gA(a));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new Y.eN(a.k3,a.k4,q,p,a.z,a.Q,!1,a.cx,a.cy,f,r,s,o,n,g,m,l,k)},
qH(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.a9,e=a0.ab,d=a0.r2,c=a0.ah,b=a0.r1,a=a0.db
a=a==null?g:J.t(a,new K.a3(),t.G)
if(a==null)a=H.a([],t.O)
s=t.G
a=P.i(a,!0,s)
r=a0.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a0.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a0.x
p=a0.y
o=a0.ga0(a0).v()
n=a0.gI(a0)
if(a0.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a0.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a0.ga6()
k=H.a([],t.l)
for(i=J.K(a0.gA(a0));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new Y.bK(f,e,!0,c,b,d,!0,P.aX(t.N,t.h),q,p,a0.z,a0.Q,!1,a0.cx,a0.cy,a,r,s,o,n,g,m,l,k)},
qI(a){var s,r,q,p,o,n,m,l,k,j="(){}[]|.\\"
if(a==="\\over"||a==="\\overline"||a==="\\sqrt"||a==="\\sqrt{"||C.b.bm(a,"_")||C.b.bm(a,"^")||C.b.bm(a,"dot"))a+="{\\quad}"
if(a==="\\substack")a="\\quad"
if(a.length===0)a="\\quad"
if(C.b.a1(a,"\\\\"))a=H.bt(a,"\\\\","\\quad\\\\")
s=t.s
r=H.a([],s)
for(q=t.N,p=B.cy(H.a(a.split("\\left"),s),q),o=p.length,n=0;n<p.length;p.length===o||(0,H.f)(p),++n){m=p[n]
l=J.X(m)
if(l.gm(m)!==0){l=l.j(m,0)
l=H.cx(j,l,0)}else l=!1
if(l)r.push(m)}k=r.length
r=H.a([],s)
for(s=B.cy(H.a(a.split("\\right"),s),q),q=s.length,n=0;n<s.length;s.length===q||(0,H.f)(s),++n){m=s[n]
p=J.X(m)
if(p.gm(m)!==0){p=p.j(m,0)
p=H.cx(j,p,0)}else p=!1
if(p)r.push(m)}if(k!==r.length){a=H.bt(a,"\\left","\\big")
a=H.bt(a,"\\right","\\big")}return Y.qJ(a)},
qJ(a){var s=a.split("{").length-1-(a.split("\\{").length-1)+(a.split("\\\\{").length-1),r=a.split("}").length-1-(a.split("\\}").length-1)+(a.split("\\\\}").length-1)
for(;r>s;){a="{"+a;++s}for(;s>r;){a+="}";++r}return a},
nG(a,b,c,d,e,f){var s=null,r=new Y.dd(b,e,f,H.a([],t.s),"","align*",!0,2,s,"",!0,P.aX(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
if(J.c7(r.gA(r)))r.en()
r.a=c
r.hT(a,b,c,d,e,f)
return r},
qk(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=t.N,e=P.i(a3.cD,!0,f),d=P.i(a3.bH,!0,f),c=a3.a9,b=a3.ab,a=a3.r2,a0=a3.ah,a1=a3.r1,a2=a3.db
a2=a2==null?g:J.t(a2,new K.a3(),t.G)
if(a2==null)a2=H.a([],t.O)
s=t.G
a2=P.i(a2,!0,s)
r=a3.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a3.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a3.x
p=a3.y
o=a3.ga0(a3).v()
n=a3.gI(a3)
if(a3.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a3.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a3.ga6()
k=H.a([],t.l)
for(i=J.K(a3.gA(a3));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new Y.dd(a3.b_,e,a3.bG,d,c,b,!0,a0,a1,a,!0,P.aX(f,t.h),q,p,a3.z,a3.Q,!1,a3.cx,a3.cy,a2,r,s,o,n,g,m,l,k)},
ql(a,b,c){var s,r,q,p,o,n,m,l=O.nT(a,P.at("{{(.*?)}}")),k=t.s,j=H.a([],k)
for(s=P.i(c.gaD(),!0,t.N),C.a.U(s,b),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)j.push("("+H.ne(s[q])+")")
p=C.a.aC(j,"|")
o=H.a([],k)
if(p.length!==0){n=P.at(p)
for(j=l.length,q=0;q<l.length;l.length===j||(0,H.f)(l),++q)C.a.U(o,O.nT(l[q],n))}else o=l
k=H.a([],k)
for(j=o.length,q=0;q<o.length;o.length===j||(0,H.f)(o),++q){m=o[q]
if(J.H(m)!==0)k.push(m)}return k},
qS(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=t.N,e=P.i(a3.cD,!0,f),d=P.i(a3.bH,!0,f),c=a3.a9,b=a3.ab,a=a3.r2,a0=a3.ah,a1=a3.r1,a2=a3.db
a2=a2==null?g:J.t(a2,new K.a3(),t.G)
if(a2==null)a2=H.a([],t.O)
s=t.G
a2=P.i(a2,!0,s)
r=a3.dx
r=r==null?g:J.t(r,new K.a4(),s)
r=P.i(r==null?H.a([],t.O):r,!0,s)
q=a3.dy
q=q==null?g:J.t(q,new K.a5(),s)
s=P.i(q==null?H.a([],t.O):q,!0,s)
q=a3.x
p=a3.y
o=a3.ga0(a3).v()
n=a3.gI(a3)
if(a3.c===$)H.c(H.h("target"))
m=H.a([],t.r)
for(l=a3.gM(),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j)m.push(l[j].v())
l=a3.ga6()
k=H.a([],t.l)
for(i=J.K(a3.gA(a3));i.n();){h=i.gu()
k.push(new M.e(h.a,h.b,h.c))}return new Y.eM(a3.b_,e,a3.bG,d,c,b,!0,a0,a1,a,!0,P.aX(f,t.h),q,p,a3.z,a3.Q,!1,a3.cx,a3.cy,a2,r,s,o,n,g,m,l,k)},
eN:function eN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.k3=a
_.k4=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=null
_.f=q
_.r=r},
bK:function bK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.a9=a
_.ab=b
_.ah=null
_.k3=c
_.k4=d
_.r1=e
_.r2=f
_.rx=g
_.ry=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=m
_.cx=n
_.cy=o
_.db=p
_.dx=q
_.dy=r
_.a=s
_.b=a0
_.c=a1
_.d=a2
_.e=null
_.f=a3
_.r=a4},
dd:function dd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.b_=a
_.cD=b
_.bG=c
_.bH=d
_.a9=e
_.ab=f
_.ah=null
_.k3=g
_.k4=h
_.r1=i
_.r2=j
_.rx=k
_.ry=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.ch=q
_.cx=r
_.cy=s
_.db=a0
_.dx=a1
_.dy=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=null
_.f=a7
_.r=a8},
k2:function k2(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.b_=a
_.cD=b
_.bG=c
_.bH=d
_.a9=e
_.ab=f
_.ah=null
_.k3=g
_.k4=h
_.r1=i
_.r2=j
_.rx=k
_.ry=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.ch=q
_.cx=r
_.cy=s
_.db=a0
_.dx=a1
_.dy=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=null
_.f=a7
_.r=a8},
qm(a){var s,r,q,p,o,n,m=a.ga0(a).v(),l=a.gI(a)
if(a.c===$)H.c(H.h("target"))
s=H.a([],t.r)
for(r=a.gM(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(r[p].v())
r=a.ga6()
q=H.a([],t.l)
for(o=J.K(a.gA(a));o.n();){n=o.gu()
q.push(new M.e(n.a,n.b,n.c))}return new Y.I(m,l,null,s,r,q)},
q6(a){var s,r,q,p,o,n,m=a.ga0(a).v(),l=a.gI(a)
if(a.c===$)H.c(H.h("target"))
s=H.a([],t.r)
for(r=a.gM(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(r[p].v())
r=a.ga6()
q=H.a([],t.l)
for(o=J.K(a.gA(a));o.n();){n=o.gu()
q.push(new M.e(n.a,n.b,n.c))}return new Y.d6(m,l,null,s,r,q)},
I:function I(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
kb:function kb(a){this.a=a},
ka:function ka(a){this.a=a},
k9:function k9(a){this.a=a},
k8:function k8(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(){},
k7:function k7(a){this.a=a},
d6:function d6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=e
_.r=f},
bk:function bk(a){this.b=a},
b5:function b5(){},
jg:function jg(){this.a=null},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
hc:function hc(){},
er:function er(a,b,c){this.c=a
this.a=b
this.b=c},
es:function es(a,b,c){this.c=a
this.a=b
this.b=c},
bI:function bI(a,b,c){this.c=a
this.a=b
this.b=c},
eq:function eq(a,b,c){this.c=a
this.a=b
this.b=c},
ep:function ep(a){this.a=a},
qM(a,b){var s=H.a([0],t.t)
s=new Y.hI(b,s,new Uint32Array(H.mX(J.fo(a))))
s.hU(a,b)
return s},
c8(a,b){if(b<0)H.c(P.aE("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)H.c(P.aE("Offset "+b+u.D+a.gm(a)+"."))
return new Y.b6(a,b)},
mK(a,b,c){if(c<b)H.c(P.a8("End "+c+" must come after start "+b+".",null))
else if(c>a.c.length)H.c(P.aE("End "+c+u.D+a.gm(a)+"."))
else if(b<0)H.c(P.aE("Start may not be negative, was "+b+"."))
return new Y.ap(a,b,c)},
hI:function hI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b6:function b6(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(){},
tC(a,b,c,d){var s,r,q,p,o,n=P.aX(d,c.h("m<0>"))
for(s=c.h("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.j(0,p)
if(o==null){o=H.a([],s)
n.q(0,p,o)
p=o}else p=o
J.mn(p,q)}return n}},Z={fQ:function fQ(a){this.a=a},i9:function i9(){},fp:function fp(){},iL:function iL(a){this.a=a},iM:function iM(a){this.a=a},iN:function iN(a){this.a=a},fH:function fH(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=0
_.r=c
_.x=!1
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.b=_.a=null},dJ:function dJ(){}}
var w=[A,B,C,D,E,F,G,H,J,K,L,M,O,P,S,T,U,V,W,X,Y,Z]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.mv.prototype={}
J.aW.prototype={
Z(a,b){return a===b},
gO(a){return H.bJ(a)},
l(a){return"Instance of '"+H.kk(a)+"'"}}
J.h7.prototype={
l(a){return String(a)},
gO(a){return a?519018:218159},
$iB:1}
J.ef.prototype={
Z(a,b){return null==b},
l(a){return"null"},
gO(a){return 0},
$iam:1}
J.cK.prototype={
gO(a){return 0},
l(a){return String(a)}}
J.ht.prototype={}
J.bM.prototype={}
J.bF.prototype={
l(a){var s=a[$.pm()]
if(s==null)return this.lF(a)
return"JavaScript function for "+J.bu(s)},
$ibX:1}
J.z.prototype={
p(a,b){H.x(a).c.a(b)
if(!!a.fixed$length)H.c(P.T("add"))
a.push(b)},
eB(a,b){if(!!a.fixed$length)H.c(P.T("removeAt"))
if(b<0||b>=a.length)throw H.d(P.kl(b,null))
return a.splice(b,1)[0]},
bJ(a,b,c){H.x(a).c.a(c)
if(!!a.fixed$length)H.c(P.T("insert"))
if(b<0||b>a.length)throw H.d(P.kl(b,null))
a.splice(b,0,c)},
ei(a,b,c){var s,r
H.x(a).h("k<1>").a(c)
if(!!a.fixed$length)H.c(P.T("insertAll"))
P.nM(b,0,a.length,"index")
if(!t.gt.b(c))c=J.fo(c)
s=J.H(c)
a.length=a.length+s
r=b+s
this.dH(a,r,a.length,a,b)
this.l9(a,b,r,c)},
dn(a){if(!!a.fixed$length)H.c(P.T("removeLast"))
if(a.length===0)throw H.d(H.ct(a,-1))
return a.pop()},
a5(a,b){var s
if(!!a.fixed$length)H.c(P.T("remove"))
for(s=0;s<a.length;++s)if(J.V(a[s],b)){a.splice(s,1)
return!0}return!1},
fj(a,b,c){var s,r,q,p,o
H.x(a).h("B(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!H.aG(b.$1(p)))s.push(p)
if(a.length!==r)throw H.d(P.ar(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
eH(a,b){var s=H.x(a)
return new H.ai(a,s.h("B(1)").a(b),s.h("ai<1>"))},
U(a,b){var s
H.x(a).h("k<1>").a(b)
if(!!a.fixed$length)H.c(P.T("addAll"))
if(Array.isArray(b)){this.m8(a,b)
return}for(s=J.K(b);s.n();)a.push(s.gu())},
m8(a,b){var s,r
t.m.a(b)
s=b.length
if(s===0)return
if(a===b)throw H.d(P.ar(a))
for(r=0;r<s;++r)a.push(b[r])},
bc(a,b){var s,r
H.x(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw H.d(P.ar(a))}},
em(a,b,c){var s=H.x(a)
return new H.F(a,s.a_(c).h("1(2)").a(b),s.h("@<1>").a_(c).h("F<1,2>"))},
aC(a,b){var s,r=P.bG(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.q(r,s,H.l(a[s]))
return r.join(b)},
aW(a){return this.aC(a,"")},
b7(a,b){return H.bf(a,b,null,H.x(a).c)},
aR(a,b){var s,r,q
H.x(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw H.d(H.ao())
if(0>=s)return H.b(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw H.d(P.ar(a))}return r},
ef(a,b,c,d){var s,r,q
d.a(b)
H.x(a).a_(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw H.d(P.ar(a))}return r},
al(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
b8(a,b,c){if(b<0||b>a.length)throw H.d(P.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a_(c,b,a.length,"end",null))
if(b===c)return H.a([],H.x(a))
return H.a(a.slice(b,c),H.x(a))},
dB(a,b,c){P.aF(b,c,a.length)
return H.bf(a,b,c,H.x(a).c)},
gar(a){if(a.length>0)return a[0]
throw H.d(H.ao())},
gt(a){var s=a.length
if(s>0)return a[s-1]
throw H.d(H.ao())},
dH(a,b,c,d,e){var s,r,q,p,o
H.x(a).h("k<1>").a(d)
if(!!a.immutable$list)H.c(P.T("setRange"))
P.aF(b,c,a.length)
s=c-b
if(s===0)return
P.bd(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.nr(d,e).bs(0,!1)
q=0}p=J.X(r)
if(q+s>p.gm(r))throw H.d(H.qb())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.j(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.j(r,q+o)},
l9(a,b,c,d){return this.dH(a,b,c,d,0)},
b2(a,b){var s,r
H.x(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(H.aG(b.$1(a[r])))return!0
if(a.length!==s)throw H.d(P.ar(a))}return!1},
cC(a,b){var s,r
H.x(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!H.aG(b.$1(a[r])))return!1
if(a.length!==s)throw H.d(P.ar(a))}return!0},
co(a,b){var s,r=H.x(a)
r.h("j(1,1)?").a(b)
if(!!a.immutable$list)H.c(P.T("sort"))
s=b==null?J.rX():b
H.nS(a,s,r.c)},
ll(a){return this.co(a,null)},
aP(a,b,c){var s,r=a.length
if(c>=r)return-1
for(s=c;s<r;++s){if(s>=a.length)return H.b(a,s)
if(J.V(a[s],b))return s}return-1},
ao(a,b){return this.aP(a,b,0)},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.V(a[s],b))return!0
return!1},
gai(a){return a.length===0},
gcI(a){return a.length!==0},
l(a){return P.jS(a,"[","]")},
bs(a,b){var s=H.a(a.slice(0),H.x(a))
return s},
az(a){return this.bs(a,!0)},
gH(a){return new J.ay(a,a.length,H.x(a).h("ay<1>"))},
gO(a){return H.bJ(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)H.c(P.T("set length"))
if(b<0)throw H.d(P.a_(b,0,null,"newLength",null))
if(b>a.length)H.x(a).c.a(null)
a.length=b},
j(a,b){if(b>=a.length||b<0)throw H.d(H.ct(a,b))
return a[b]},
q(a,b,c){H.x(a).c.a(c)
if(!!a.immutable$list)H.c(P.T("indexed set"))
if(b>=a.length||b<0)throw H.d(H.ct(a,b))
a[b]=c},
jx(a,b){var s
H.x(a).h("B(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(H.aG(b.$1(a[s])))return s
return-1},
$iP:1,
$ik:1,
$im:1}
J.jV.prototype={}
J.ay.prototype={
gu(){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.d(H.f(q))
s=r.c
if(s>=p){r.si9(null)
return!1}r.si9(q[s]);++r.c
return!0},
si9(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
J.cb.prototype={
aA(a,b){var s
H.lC(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gek(b)
if(this.gek(a)===s)return 0
if(this.gek(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gek(a){return a===0?1/a<0:a<0},
geZ(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bM(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.d(P.T(""+a+".toInt()"))},
fz(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.d(P.T(""+a+".ceil()"))},
ou(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.d(P.T(""+a+".floor()"))},
hk(a,b){var s
if(b>20)throw H.d(P.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gek(a))return"-"+s
return s},
pP(a,b){var s,r,q,p
if(b<2||b>36)throw H.d(P.a_(b,2,36,"radix",null))
s=a.toString(b)
if(C.b.J(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)H.c(P.T("Unexpected toString result: "+s))
q=r.length
if(1>=q)return H.b(r,1)
s=r[1]
if(3>=q)return H.b(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+C.b.B("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
L(a,b){H.lC(b)
return a+b},
B(a,b){return a*b},
ac(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
b0(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.iE(a,b)},
aV(a,b){return(a|0)===a?a/b|0:this.iE(a,b)},
iE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.d(P.T("Result of truncating division is "+H.l(s)+": "+H.l(a)+" ~/ "+b))},
d_(a,b){var s
if(a>0)s=this.iC(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mx(a,b){if(0>b)throw H.d(H.fk(b))
return this.iC(a,b)},
iC(a,b){return b>31?0:a>>>b},
$iae:1,
$iq:1,
$iac:1}
J.da.prototype={
geZ(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$ij:1}
J.eg.prototype={}
J.bE.prototype={
J(a,b){if(b<0)throw H.d(H.ct(a,b))
if(b>=a.length)H.c(H.ct(a,b))
return a.charCodeAt(b)},
E(a,b){if(b>=a.length)throw H.d(H.ct(a,b))
return a.charCodeAt(b)},
fq(a,b,c){var s=b.length
if(c>s)throw H.d(P.a_(c,0,s,null,null))
return new H.it(b,a,c)},
ca(a,b){return this.fq(a,b,0)},
jF(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw H.d(P.a_(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(this.J(b,c+r)!==this.E(a,r))return q
return new H.dq(c,a)},
L(a,b){return a+b},
bm(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aw(a,r-s)},
jX(a,b,c){P.nM(0,0,a.length,"startIndex")
return H.tV(a,b,c,0)},
cp(a,b){if(typeof b=="string")return H.a(a.split(b),t.s)
else if(b instanceof H.cJ&&b.gis().exec("").length-2===0)return H.a(a.split(b.b),t.s)
else return this.mi(a,b)},
ck(a,b,c,d){var s=P.aF(b,c,a.length)
return H.pi(a,b,s,d)},
mi(a,b){var s,r,q,p,o,n,m=H.a([],t.s)
for(s=J.nm(b,a),s=s.gH(s),r=0,q=1;s.n();){p=s.gu()
o=p.gV(p)
n=p.gX()
q=n-o
if(q===0&&r===o)continue
C.a.p(m,this.w(a,r,o))
r=n}if(r<a.length||q>0)C.a.p(m,this.aw(a,r))
return m},
ak(a,b,c){var s
t.m4.a(b)
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.pG(b,a,c)!=null},
a1(a,b){return this.ak(a,b,0)},
w(a,b,c){return a.substring(b,P.aF(b,c,a.length))},
aw(a,b){return this.w(a,b,null)},
eF(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.E(p,0)===133){s=J.qe(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.J(p,r)===133?J.qf(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
B(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.aV)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oY(a,b){var s=b-a.length
if(s<=0)return a
return a+this.B(" ",s)},
aP(a,b,c){var s
if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ao(a,b){return this.aP(a,b,0)},
el(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw H.d(P.a_(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
h3(a,b){return this.el(a,b,null)},
nK(a,b,c){var s=a.length
if(c>s)throw H.d(P.a_(c,0,s,null,null))
return H.cx(a,b,c)},
G(a,b){return this.nK(a,b,0)},
aA(a,b){var s
H.av(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gO(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
j(a,b){if(b>=a.length||b<0)throw H.d(H.ct(a,b))
return a[b]},
$iae:1,
$idh:1,
$io:1}
H.co.prototype={
gH(a){var s=H.D(this)
return new H.dT(J.K(this.gbl()),s.h("@<1>").a_(s.Q[1]).h("dT<1,2>"))},
gm(a){return J.H(this.gbl())},
gai(a){return J.cz(this.gbl())},
gcI(a){return J.c7(this.gbl())},
b7(a,b){var s=H.D(this)
return H.j8(J.nr(this.gbl(),b),s.c,s.Q[1])},
al(a,b){return H.D(this).Q[1].a(J.iK(this.gbl(),b))},
gar(a){return H.D(this).Q[1].a(J.aR(this.gbl()))},
gt(a){return H.D(this).Q[1].a(J.aL(this.gbl()))},
l(a){return J.bu(this.gbl())}}
H.dT.prototype={
n(){return this.a.n()},
gu(){return this.$ti.Q[1].a(this.a.gu())},
$iU:1}
H.cC.prototype={
gbl(){return this.a}}
H.eV.prototype={$iP:1}
H.eS.prototype={
j(a,b){return this.$ti.Q[1].a(J.Y(this.a,b))},
q(a,b,c){var s=this.$ti
J.iJ(this.a,b,s.c.a(s.Q[1].a(c)))},
sm(a,b){J.pH(this.a,b)},
p(a,b){var s=this.$ti
J.mn(this.a,s.c.a(s.Q[1].a(b)))},
U(a,b){var s=this.$ti
J.ak(this.a,H.j8(s.h("k<2>").a(b),s.Q[1],s.c))},
co(a,b){var s
this.$ti.h("j(2,2)?").a(b)
s=b==null?null:new H.l7(this,b)
J.ns(this.a,s)},
dB(a,b,c){var s=this.$ti
return H.j8(J.nq(this.a,b,c),s.c,s.Q[1])},
$iP:1,
$im:1}
H.l7.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.Q[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("j(1,1)")}}
H.aT.prototype={
gbl(){return this.a}}
H.eh.prototype={
l(a){var s="LateInitializationError: "+this.a
return s}}
H.a9.prototype={
gm(a){return this.a.length},
j(a,b){return C.b.J(this.a,b)}}
H.md.prototype={
$0(){var s=new P.aq($.ab,t.av)
s.i2(null)
return s},
$S:69}
H.kv.prototype={}
H.P.prototype={}
H.C.prototype={
gH(a){var s=this
return new H.N(s,s.gm(s),H.D(s).h("N<C.E>"))},
gai(a){return this.gm(this)===0},
gar(a){if(this.gm(this)===0)throw H.d(H.ao())
return this.al(0,0)},
gt(a){var s=this
if(s.gm(s)===0)throw H.d(H.ao())
return s.al(0,s.gm(s)-1)},
aC(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=H.l(p.al(0,0))
if(o!==p.gm(p))throw H.d(P.ar(p))
for(r=s,q=1;q<o;++q){r=r+b+H.l(p.al(0,q))
if(o!==p.gm(p))throw H.d(P.ar(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=H.l(p.al(0,q))
if(o!==p.gm(p))throw H.d(P.ar(p))}return r.charCodeAt(0)==0?r:r}},
aW(a){return this.aC(a,"")},
aR(a,b){var s,r,q,p=this
H.D(p).h("C.E(C.E,C.E)").a(b)
s=p.gm(p)
if(s===0)throw H.d(H.ao())
r=p.al(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.al(0,q))
if(s!==p.gm(p))throw H.d(P.ar(p))}return r},
b7(a,b){return H.bf(this,b,null,H.D(this).h("C.E"))},
bs(a,b){return P.i(this,b,H.D(this).h("C.E"))},
az(a){return this.bs(a,!0)}}
H.aJ.prototype={
cq(a,b,c,d){var s,r=this.b
P.bd(r,"start")
s=this.c
if(s!=null){P.bd(s,"end")
if(r>s)throw H.d(P.a_(r,0,s,"start",null))}},
gmj(){var s=J.H(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmC(){var s=J.H(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.H(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.R()
return s-q},
al(a,b){var s=this,r=s.gmC()+b
if(b<0||r>=s.gmj())throw H.d(P.h4(b,s,"index",null,null))
return J.iK(s.a,r)},
b7(a,b){var s,r,q=this
P.bd(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new H.e_(q.$ti.h("e_<1>"))
return H.bf(q.a,s,r,q.$ti.c)},
pK(a,b){var s,r,q,p=this
P.bd(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return H.bf(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return H.bf(p.a,r,q,p.$ti.c)}},
bs(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.X(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.mt(0,n):J.nz(0,n)}r=P.bG(s,m.al(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.q(r,q,m.al(n,o+q))
if(m.gm(n)<l)throw H.d(P.ar(p))}return r},
az(a){return this.bs(a,!0)}}
H.N.prototype={
gu(){return this.$ti.c.a(this.d)},
n(){var s,r=this,q=r.a,p=J.X(q),o=p.gm(q)
if(r.b!==o)throw H.d(P.ar(q))
s=r.c
if(s>=o){r.sbV(null)
return!1}r.sbV(p.al(q,s));++r.c
return!0},
sbV(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
H.cL.prototype={
gH(a){var s=H.D(this)
return new H.en(J.K(this.a),this.b,s.h("@<1>").a_(s.Q[1]).h("en<1,2>"))},
gm(a){return J.H(this.a)},
gai(a){return J.cz(this.a)},
gar(a){return this.b.$1(J.aR(this.a))},
gt(a){return this.b.$1(J.aL(this.a))},
al(a,b){return this.b.$1(J.iK(this.a,b))}}
H.dY.prototype={$iP:1}
H.en.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sbV(s.c.$1(r.gu()))
return!0}s.sbV(null)
return!1},
gu(){return this.$ti.Q[1].a(this.a)},
sbV(a){this.a=this.$ti.h("2?").a(a)}}
H.F.prototype={
gm(a){return J.H(this.a)},
al(a,b){return this.b.$1(J.iK(this.a,b))}}
H.ai.prototype={
gH(a){return new H.cS(J.K(this.a),this.b,this.$ti.h("cS<1>"))}}
H.cS.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(H.aG(r.$1(s.gu())))return!0
return!1},
gu(){return this.a.gu()}}
H.e2.prototype={
gH(a){var s=this.$ti
return new H.e3(J.K(this.a),this.b,C.a1,s.h("@<1>").a_(s.Q[1]).h("e3<1,2>"))}}
H.e3.prototype={
gu(){return this.$ti.Q[1].a(this.d)},
n(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.n();){q.sbV(null)
if(s.n()){q.sia(null)
q.sia(J.K(r.$1(s.gu())))}else return!1}q.sbV(q.c.gu())
return!0},
sia(a){this.c=this.$ti.h("U<2>?").a(a)},
sbV(a){this.d=this.$ti.h("2?").a(a)},
$iU:1}
H.c_.prototype={
b7(a,b){P.bd(b,"count")
return new H.c_(this.a,this.b+b,H.D(this).h("c_<1>"))},
gH(a){return new H.eF(J.K(this.a),this.b,H.D(this).h("eF<1>"))}}
H.d4.prototype={
gm(a){var s=J.H(this.a)-this.b
if(s>=0)return s
return 0},
b7(a,b){P.bd(b,"count")
return new H.d4(this.a,this.b+b,this.$ti)},
$iP:1}
H.eF.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gu(){return this.a.gu()}}
H.e_.prototype={
gH(a){return C.a1},
gai(a){return!0},
gm(a){return 0},
gar(a){throw H.d(H.ao())},
gt(a){throw H.d(H.ao())},
al(a,b){throw H.d(P.a_(b,0,0,"index",null))},
b7(a,b){P.bd(b,"count")
return this}}
H.e0.prototype={
n(){return!1},
gu(){throw H.d(H.ao())},
$iU:1}
H.an.prototype={
gH(a){return new H.cT(J.K(this.a),this.$ti.h("cT<1>"))}}
H.cT.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gu()))return!0
return!1},
gu(){return this.$ti.c.a(this.a.gu())},
$iU:1}
H.bl.prototype={
sm(a,b){throw H.d(P.T("Cannot change the length of a fixed-length list"))},
p(a,b){H.ax(a).h("bl.E").a(b)
throw H.d(P.T("Cannot add to a fixed-length list"))},
U(a,b){H.ax(a).h("k<bl.E>").a(b)
throw H.d(P.T("Cannot add to a fixed-length list"))}}
H.bB.prototype={
q(a,b,c){H.D(this).h("bB.E").a(c)
throw H.d(P.T("Cannot modify an unmodifiable list"))},
sm(a,b){throw H.d(P.T("Cannot change the length of an unmodifiable list"))},
p(a,b){H.D(this).h("bB.E").a(b)
throw H.d(P.T("Cannot add to an unmodifiable list"))},
U(a,b){H.D(this).h("k<bB.E>").a(b)
throw H.d(P.T("Cannot add to an unmodifiable list"))},
co(a,b){H.D(this).h("j(bB.E,bB.E)?").a(b)
throw H.d(P.T("Cannot modify an unmodifiable list"))}}
H.du.prototype={}
H.W.prototype={
gm(a){return J.H(this.a)},
al(a,b){var s=this.a,r=J.X(s)
return r.al(s,r.gm(s)-1-b)}}
H.fe.prototype={}
H.d1.prototype={
l(a){return P.mA(this)},
gea(a){return this.o5(0,H.D(this).h("bn<1,2>"))},
o5(a,b){var s=this
return P.n0(function(){var r=a
var q=0,p=1,o,n,m,l,k
return function $async$gea(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=s.gaD(),n=n.gH(n),m=H.D(s),l=m.Q[1],m=m.h("@<1>").a_(l).h("bn<1,2>")
case 2:if(!n.n()){q=3
break}k=n.gu()
q=4
return new P.bn(k,l.a(s.j(0,k)),m)
case 4:q=2
break
case 3:return P.mL()
case 1:return P.mM(o)}}},b)},
$iaN:1}
H.v.prototype={
gm(a){return this.a},
an(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j(a,b){if(!this.an(b))return null
return this.b[H.av(b)]},
bc(a,b){var s,r,q,p,o,n=this.$ti
n.h("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.Q[1],p=0;p<r;++p){o=H.av(s[p])
b.$2(o,n.a(q[o]))}},
gaD(){return new H.eT(this,this.$ti.h("eT<1>"))}}
H.eT.prototype={
gH(a){var s=this.a.c
return new J.ay(s,s.length,H.x(s).h("ay<1>"))},
gm(a){return this.a.c.length}}
H.c9.prototype={
cY(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=H.q5(r)
o=P.Z(H.t6(),q,r,s.Q[1])
H.oU(p.a,o)
p.$map=o}return o},
an(a){return this.cY().an(a)},
j(a,b){return this.cY().j(0,b)},
bc(a,b){this.$ti.h("~(1,2)").a(b)
this.cY().bc(0,b)},
gaD(){return this.cY().gaD()},
gm(a){var s=this.cY()
return s.gm(s)}}
H.jo.prototype={
$1(a){return this.a.b(a)},
$S:65}
H.h5.prototype={
l(a){var s="<"+C.a.aC([H.n6(this.$ti.c)],", ")+">"
return this.a.l(0)+" with "+s}}
H.ca.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S(){return H.tG(H.n5(this.a),this.$ti)}}
H.kG.prototype={
bq(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.ev.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.h8.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.hW.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hj.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ibW:1}
H.e1.prototype={}
H.f4.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ice:1}
H.aU.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.pj(r==null?"unknown":r)+"'"},
$ibX:1,
gq6(){return this},
$C:"$1",
$R:1,
$D:null}
H.fL.prototype={$C:"$0",$R:0}
H.fM.prototype={$C:"$2",$R:2}
H.hO.prototype={}
H.hM.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.pj(s)+"'"}}
H.cZ.prototype={
Z(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cZ))return!1
return this.$_target===b.$_target&&this.a===b.a},
gO(a){return(H.me(this.a)^H.bJ(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+H.kk(t.K.a(this.a))+"'")}}
H.hB.prototype={
l(a){return"RuntimeError: "+this.a}}
H.i5.prototype={
l(a){return"Assertion failed: "+P.fT(this.a)}}
H.ba.prototype={
gm(a){return this.a},
gai(a){return this.a===0},
gaD(){return new H.ei(this,H.D(this).h("ei<1>"))},
gav(a){var s=H.D(this)
return H.k1(this.gaD(),new H.jW(this),s.c,s.Q[1])},
an(a){var s,r,q=this
if(typeof a=="string"){s=q.b
if(s==null)return!1
return q.i8(s,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){r=q.c
if(r==null)return!1
return q.i8(r,a)}else return q.jA(a)},
jA(a){var s=this,r=s.d
if(r==null)return!1
return s.cH(s.dQ(r,s.cG(a)),a)>=0},
j(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.cZ(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.cZ(p,b)
q=r==null?n:r.b
return q}else return o.jB(b)},
jB(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dQ(p,q.cG(a))
r=q.cH(s,a)
if(r<0)return null
return s[r].b},
q(a,b,c){var s,r,q=this,p=H.D(q)
p.c.a(b)
p.Q[1].a(c)
if(typeof b=="string"){s=q.b
q.hX(s==null?q.b=q.fh():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.hX(r==null?q.c=q.fh():r,b,c)}else q.jD(b,c)},
jD(a,b){var s,r,q,p,o=this,n=H.D(o)
n.c.a(a)
n.Q[1].a(b)
s=o.d
if(s==null)s=o.d=o.fh()
r=o.cG(a)
q=o.dQ(s,r)
if(q==null)o.fk(s,r,[o.f3(a,b)])
else{p=o.cH(q,a)
if(p>=0)q[p].b=b
else q.push(o.f3(a,b))}},
ex(a,b){var s,r=this,q=H.D(r)
q.c.a(a)
q.h("2()").a(b)
if(r.an(a))return q.Q[1].a(r.j(0,a))
s=b.$0()
r.q(0,a,s)
return s},
a5(a,b){var s=this
if(typeof b=="string")return s.iB(s.b,b)
else if(typeof b=="number"&&(b&0x3ffffff)===b)return s.iB(s.c,b)
else return s.jC(b)},
jC(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cG(a)
r=o.dQ(n,s)
q=o.cH(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.iJ(p)
if(r.length===0)o.fb(n,s)
return p.b},
bc(a,b){var s,r,q=this
H.D(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.d(P.ar(q))
s=s.c}},
hX(a,b,c){var s,r=this,q=H.D(r)
q.c.a(b)
q.Q[1].a(c)
s=r.cZ(a,b)
if(s==null)r.fk(a,b,r.f3(b,c))
else s.b=c},
iB(a,b){var s
if(a==null)return null
s=this.cZ(a,b)
if(s==null)return null
this.iJ(s)
this.fb(a,b)
return s.b},
hZ(){this.r=this.r+1&67108863},
f3(a,b){var s=this,r=H.D(s),q=new H.jX(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.hZ()
return q},
iJ(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.hZ()},
cG(a){return J.aH(a)&0x3ffffff},
cH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1},
l(a){return P.mA(this)},
cZ(a,b){return a[b]},
dQ(a,b){return a[b]},
fk(a,b,c){a[b]=c},
fb(a,b){delete a[b]},
i8(a,b){return this.cZ(a,b)!=null},
fh(){var s="<non-identifier-key>",r=Object.create(null)
this.fk(r,s,r)
this.fb(r,s)
return r},
$iha:1}
H.jW.prototype={
$1(a){var s=this.a,r=H.D(s)
return r.Q[1].a(s.j(0,r.c.a(a)))},
$S(){return H.D(this.a).h("2(1)")}}
H.jX.prototype={}
H.ei.prototype={
gm(a){return this.a.a},
gai(a){return this.a.a===0},
gH(a){var s=this.a,r=new H.ej(s,s.r,this.$ti.h("ej<1>"))
r.c=s.e
return r},
G(a,b){return this.a.an(b)}}
H.ej.prototype={
gu(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.d(P.ar(q))
s=r.c
if(s==null){r.shY(null)
return!1}else{r.shY(s.a)
r.c=s.c
return!0}},
shY(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
H.m3.prototype={
$1(a){return this.a(a)},
$S:43}
H.m4.prototype={
$2(a,b){return this.a(a,b)},
$S:36}
H.m5.prototype={
$1(a){return this.a(H.av(a))},
$S:39}
H.cJ.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
git(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=H.mu(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
gis(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=H.mu(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
ju(a){var s=this.b.exec(a)
if(s==null)return null
return new H.dz(s)},
fq(a,b,c){var s=b.length
if(c>s)throw H.d(P.a_(c,0,s,null,null))
return new H.i4(this,b,c)},
ca(a,b){return this.fq(a,b,0)},
mm(a,b){var s,r=t.K.a(this.git())
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new H.dz(s)},
ml(a,b){var s,r=t.K.a(this.gis())
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return H.b(s,-1)
if(s.pop()!=null)return null
return new H.dz(s)},
jF(a,b,c){if(c<0||c>b.length)throw H.d(P.a_(c,0,b.length,null,null))
return this.ml(b,c)},
$idh:1}
H.dz.prototype={
gV(a){return this.b.index},
gX(){var s=this.b
return s.index+s[0].length},
ghv(){return this.b.length-1},
hw(a){var s,r,q,p,o
t.L.a(a)
s=H.a([],t.D)
for(r=a.length,q=this.b,p=0;p<a.length;a.length===r||(0,H.f)(a),++p){o=H.a0(a[p])
if(o<0||o>=q.length)return H.b(q,o)
C.a.p(s,q[o])}return s},
$idc:1,
$icO:1}
H.i4.prototype={
gH(a){return new H.dw(this.a,this.b,this.c)}}
H.dw.prototype={
gu(){return t.lu.a(this.d)},
n(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.mm(m,s)
if(p!=null){n.d=p
o=p.gX()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=C.b.J(m,s)
if(s>=55296&&s<=56319){s=C.b.J(m,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1},
$iU:1}
H.dq.prototype={
gX(){return this.a+this.c.length},
ghv(){return 0},
hw(a){var s,r,q,p,o
t.L.a(a)
s=H.a([],t.s)
for(r=a.length,q=this.c,p=0;p<a.length;a.length===r||(0,H.f)(a),++p){o=H.a0(a[p])
if(o!==0)H.c(P.kl(o,null))
C.a.p(s,q)}return s},
$idc:1,
gV(a){return this.a}}
H.it.prototype={
gH(a){return new H.iu(this.a,this.b,this.c)},
gar(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new H.dq(r,s)
throw H.d(H.ao())}}
H.iu.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new H.dq(s,o)
q.c=r===q.c?r+1:r
return!0},
gu(){var s=this.d
s.toString
return s},
$iU:1}
H.l8.prototype={
iA(){var s=this.b
if(s===this)throw H.d(H.h(this.a))
return s}}
H.hf.prototype={}
H.df.prototype={
gm(a){return a.length},
$idb:1}
H.et.prototype={
q(a,b,c){H.a0(c)
H.lF(b,a,a.length)
a[b]=c},
$iP:1,
$ik:1,
$im:1}
H.he.prototype={
j(a,b){H.lF(b,a,a.length)
return a[b]}}
H.eu.prototype={
j(a,b){H.lF(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint32Array(a.subarray(b,H.rK(b,c,a.length)))},
$iqX:1}
H.cM.prototype={
gm(a){return a.length},
j(a,b){H.lF(b,a,a.length)
return a[b]},
$icM:1,
$idt:1}
H.f1.prototype={}
H.f2.prototype={}
H.bx.prototype={
h(a){return H.lz(v.typeUniverse,this,a)},
a_(a){return H.rs(v.typeUniverse,this,a)}}
H.im.prototype={}
H.f7.prototype={
l(a){return H.b2(this.a,null)},
$inZ:1}
H.ij.prototype={
l(a){return this.a}}
H.f8.prototype={$ick:1}
P.l4.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:28}
P.l3.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:53}
P.l5.prototype={
$0(){this.a.$0()},
$S:2}
P.l6.prototype={
$0(){this.a.$0()},
$S:2}
P.lx.prototype={
m_(a,b){if(self.setTimeout!=null)self.setTimeout(H.dG(new P.ly(this,b),0),a)
else throw H.d(P.T("`setTimeout()` not found."))}}
P.ly.prototype={
$0(){this.b.$0()},
$S:1}
P.i6.prototype={
fD(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.i2(b)
else{s=r.a
if(q.h("bm<1>").b(b))s.i5(b)
else s.f8(q.c.a(b))}},
ja(a,b){var s=this.a
if(this.b)s.cr(a,b)
else s.ma(a,b)}}
P.lD.prototype={
$1(a){return this.a.$2(0,a)},
$S:86}
P.lE.prototype={
$2(a,b){this.a.$2(1,new H.e1(a,t.k.a(b)))},
$S:85}
P.lQ.prototype={
$2(a,b){this.a(H.a0(a),b)},
$S:84}
P.dy.prototype={
l(a){return"IterationMarker("+this.b+", "+H.l(this.a)+")"}}
P.cq.prototype={
gu(){var s=this.c
if(s==null)return this.$ti.c.a(this.b)
return s.gu()},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.siu(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof P.dy){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.si1(null)
return!1}if(0>=o.length)return H.b(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.K(r))
if(n instanceof P.cq){r=m.d
if(r==null)r=m.d=[]
C.a.p(r,m.a)
m.a=n.a
continue}else{m.siu(n)
continue}}}}else{m.si1(q)
return!0}}return!1},
si1(a){this.b=this.$ti.h("1?").a(a)},
siu(a){this.c=this.$ti.h("U<1>?").a(a)},
$iU:1}
P.f6.prototype={
gH(a){return new P.cq(this.a(),this.$ti.h("cq<1>"))}}
P.dN.prototype={
l(a){return H.l(this.a)},
$ia1:1,
gdK(){return this.b}}
P.i8.prototype={
ja(a,b){var s
H.lT(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw H.d(P.au("Future already completed"))
s.cr(a,b)}}
P.f5.prototype={
fD(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw H.d(P.au("Future already completed"))
s.i6(r.h("1/").a(b))}}
P.cU.prototype={
oS(a){if((this.c&15)!==6)return!0
return this.b.b.hf(t.iW.a(this.d),a.a,t.k4,t.K)},
ow(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.pE(q,m,a.b,o,n,t.k)
else p=l.hf(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(H.aK(s))){if((r.c&1)!==0)throw H.d(P.a8("The error handler of Future.then must return a value of the returned future's type","onError"))
throw H.d(P.a8("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
P.aq.prototype={
hi(a,b,c){var s,r,q,p=this.$ti
p.a_(c).h("1/(2)").a(a)
s=$.ab
if(s===C.k){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw H.d(P.mo(b,"onError",u.w))}else{c.h("@<0/>").a_(p.c).h("1(2)").a(a)
if(b!=null)b=P.t9(b,s)}r=new P.aq(s,c.h("aq<0>"))
q=b==null?1:3
this.f4(new P.cU(r,q,a,b,p.h("@<1>").a_(c).h("cU<1,2>")))
return r},
pM(a,b){return this.hi(a,null,b)},
iH(a,b,c){var s,r=this.$ti
r.a_(c).h("1/(2)").a(a)
s=new P.aq($.ab,c.h("aq<0>"))
this.f4(new P.cU(s,19,a,b,r.h("@<1>").a_(c).h("cU<1,2>")))
return s},
mw(a){this.a=this.a&1|16
this.c=a},
f7(a){this.a=a.a&30|this.a&1
this.c=a.c},
f4(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.f4(a)
return}r.f7(s)}P.dE(null,null,r.b,t.M.a(new P.lb(r,a)))}},
iy(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.iy(a)
return}m.f7(n)}l.a=m.dW(a)
P.dE(null,null,m.b,t.M.a(new P.lj(l,m)))}},
dV(){var s=t.F.a(this.c)
this.c=null
return this.dW(s)},
dW(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
i4(a){var s,r,q,p=this
p.a^=2
try{a.hi(new P.lf(p),new P.lg(p),t.P)}catch(q){s=H.aK(q)
r=H.cu(q)
P.tS(new P.lh(p,s,r))}},
i6(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bm<1>").b(a))if(q.b(a))P.le(a,r)
else r.i4(a)
else{s=r.dV()
q.c.a(a)
r.a=8
r.c=a
P.dx(r,s)}},
f8(a){var s,r=this
r.$ti.c.a(a)
s=r.dV()
r.a=8
r.c=a
P.dx(r,s)},
cr(a,b){var s
t.k.a(b)
s=this.dV()
this.mw(P.iZ(a,b))
P.dx(this,s)},
i2(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bm<1>").b(a)){this.i5(a)
return}this.mb(s.c.a(a))},
mb(a){var s=this
s.$ti.c.a(a)
s.a^=2
P.dE(null,null,s.b,t.M.a(new P.ld(s,a)))},
i5(a){var s=this,r=s.$ti
r.h("bm<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
P.dE(null,null,s.b,t.M.a(new P.li(s,a)))}else P.le(a,s)
return}s.i4(a)},
ma(a,b){this.a^=2
P.dE(null,null,this.b,t.M.a(new P.lc(this,a,b)))},
$ibm:1}
P.lb.prototype={
$0(){P.dx(this.a,this.b)},
$S:1}
P.lj.prototype={
$0(){P.dx(this.b,this.a.a)},
$S:1}
P.lf.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.f8(p.$ti.c.a(a))}catch(q){s=H.aK(q)
r=H.cu(q)
p.cr(s,r)}},
$S:28}
P.lg.prototype={
$2(a,b){this.a.cr(t.K.a(a),t.k.a(b))},
$S:82}
P.lh.prototype={
$0(){this.a.cr(this.b,this.c)},
$S:1}
P.ld.prototype={
$0(){this.a.f8(this.b)},
$S:1}
P.li.prototype={
$0(){P.le(this.b,this.a)},
$S:1}
P.lc.prototype={
$0(){this.a.cr(this.b,this.c)},
$S:1}
P.lm.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.k0(t.de.a(q.d),t.z)}catch(p){s=H.aK(p)
r=H.cu(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=P.iZ(s,r)
o.b=!0
return}if(l instanceof P.aq&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.pM(new P.ln(n),t.z)
q.b=!1}},
$S:1}
P.ln.prototype={
$1(a){return this.a},
$S:46}
P.ll.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.hf(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=H.aK(l)
r=H.cu(l)
q=this.a
q.c=P.iZ(s,r)
q.b=!0}},
$S:1}
P.lk.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.oS(s)&&p.a.e!=null){p.c=p.a.ow(s)
p.b=!1}}catch(o){r=H.aK(o)
q=H.cu(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=P.iZ(r,q)
n.b=!0}},
$S:1}
P.i7.prototype={}
P.eJ.prototype={
gm(a){var s,r,q=this,p={},o=new P.aq($.ab,t.hy)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new P.kx(p,q))
t.jE.a(new P.ky(p,o))
W.l9(q.a,q.b,r,!1,s.c)
return o}}
P.kx.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
P.ky.prototype={
$0(){this.b.i6(this.a.a)},
$S:1}
P.eK.prototype={}
P.hN.prototype={}
P.is.prototype={}
P.fd.prototype={$io5:1}
P.lO.prototype={
$0(){var s=t.K.a(H.d(this.a))
s.stack=this.b.l(0)
throw s},
$S:1}
P.ir.prototype={
pF(a){var s,r,q,p,o
t.M.a(a)
try{if(C.k===$.ab){a.$0()
return}P.oF(null,null,this,a,t.p)}catch(q){s=H.aK(q)
r=H.cu(q)
p=t.K.a(s)
o=t.k.a(r)
P.lN(p,o)}},
pG(a,b,c){var s,r,q,p,o
c.h("~(0)").a(a)
c.a(b)
try{if(C.k===$.ab){a.$1(b)
return}P.oG(null,null,this,a,b,t.p,c)}catch(q){s=H.aK(q)
r=H.cu(q)
p=t.K.a(s)
o=t.k.a(r)
P.lN(p,o)}},
j2(a){return new P.lv(this,t.M.a(a))},
nn(a,b){return new P.lw(this,b.h("~(0)").a(a),b)},
k0(a,b){b.h("0()").a(a)
if($.ab===C.k)return a.$0()
return P.oF(null,null,this,a,b)},
hf(a,b,c,d){c.h("@<0>").a_(d).h("1(2)").a(a)
d.a(b)
if($.ab===C.k)return a.$1(b)
return P.oG(null,null,this,a,b,c,d)},
pE(a,b,c,d,e,f){d.h("@<0>").a_(e).a_(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ab===C.k)return a.$2(b,c)
return P.ta(null,null,this,a,b,c,d,e,f)},
jU(a,b,c,d){return b.h("@<0>").a_(c).a_(d).h("1(2,3)").a(a)}}
P.lv.prototype={
$0(){return this.a.pF(this.b)},
$S:1}
P.lw.prototype={
$1(a){var s=this.c
return this.a.pG(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
P.ls.prototype={
cG(a){return H.me(a)&1073741823},
cH(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
P.eZ.prototype={
j(a,b){if(!H.aG(this.z.$1(b)))return null
return this.lH(b)},
q(a,b,c){var s=this.$ti
this.lJ(s.c.a(b),s.Q[1].a(c))},
an(a){if(!H.aG(this.z.$1(a)))return!1
return this.lG(a)},
a5(a,b){if(!H.aG(this.z.$1(b)))return null
return this.lI(b)},
cG(a){return this.y.$1(this.$ti.c.a(a))&1073741823},
cH(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.x,p=0;p<s;++p)if(H.aG(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
P.lr.prototype={
$1(a){return this.a.b(a)},
$S:61}
P.c3.prototype={
iv(){return new P.c3(H.D(this).h("c3<1>"))},
gH(a){var s=this,r=new P.cV(s,s.r,H.D(s).h("cV<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gai(a){return this.a===0},
gcI(a){return this.a!==0},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.mg(b)},
mg(a){var s=this.d
if(s==null)return!1
return this.ib(s[this.i7(a)],a)>=0},
gar(a){var s=this.e
if(s==null)throw H.d(P.au("No elements"))
return H.D(this).c.a(s.a)},
gt(a){var s=this.f
if(s==null)throw H.d(P.au("No elements"))
return H.D(this).c.a(s.a)},
p(a,b){var s,r,q=this
H.D(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.i_(s==null?q.b=P.mN():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.i_(r==null?q.c=P.mN():r,b)}else return q.dN(b)},
dN(a){var s,r,q,p=this
H.D(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.mN()
r=p.i7(a)
q=s[r]
if(q==null)s[r]=[p.fi(a)]
else{if(p.ib(q,a)>=0)return!1
q.push(p.fi(a))}return!0},
i_(a,b){H.D(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fi(b)
return!0},
mq(){this.r=this.r+1&1073741823},
fi(a){var s,r=this,q=new P.io(H.D(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.mq()
return q},
i7(a){return J.aH(a)&1073741823},
ib(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1}}
P.io.prototype={}
P.cV.prototype={
gu(){return this.$ti.c.a(this.d)},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.d(P.ar(q))
else if(r==null){s.scX(null)
return!1}else{s.scX(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scX(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
P.ee.prototype={}
P.jY.prototype={
$2(a,b){this.a.q(0,this.b.a(a),this.c.a(b))},
$S:21}
P.ek.prototype={$iP:1,$ik:1,$im:1}
P.w.prototype={
gH(a){return new H.N(a,this.gm(a),H.ax(a).h("N<w.E>"))},
al(a,b){return this.j(a,b)},
gai(a){return this.gm(a)===0},
gcI(a){return!this.gai(a)},
gar(a){if(this.gm(a)===0)throw H.d(H.ao())
return this.j(a,0)},
gt(a){if(this.gm(a)===0)throw H.d(H.ao())
return this.j(a,this.gm(a)-1)},
G(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.V(this.j(a,s),b))return!0
if(r!==this.gm(a))throw H.d(P.ar(a))}return!1},
cC(a,b){var s,r
H.ax(a).h("B(w.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(!H.aG(b.$1(this.j(a,r))))return!1
if(s!==this.gm(a))throw H.d(P.ar(a))}return!0},
b2(a,b){var s,r
H.ax(a).h("B(w.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(H.aG(b.$1(this.j(a,r))))return!0
if(s!==this.gm(a))throw H.d(P.ar(a))}return!1},
eH(a,b){var s=H.ax(a)
return new H.ai(a,s.h("B(w.E)").a(b),s.h("ai<w.E>"))},
em(a,b,c){var s=H.ax(a)
return new H.F(a,s.a_(c).h("1(w.E)").a(b),s.h("@<w.E>").a_(c).h("F<1,2>"))},
b7(a,b){return H.bf(a,b,null,H.ax(a).h("w.E"))},
bs(a,b){var s,r,q,p,o=this
if(o.gai(a)){s=J.mt(0,H.ax(a).h("w.E"))
return s}r=o.j(a,0)
q=P.bG(o.gm(a),r,!0,H.ax(a).h("w.E"))
for(p=1;p<o.gm(a);++p)C.a.q(q,p,o.j(a,p))
return q},
az(a){return this.bs(a,!0)},
p(a,b){var s
H.ax(a).h("w.E").a(b)
s=this.gm(a)
this.sm(a,s+1)
this.q(a,s,b)},
U(a,b){var s,r
H.ax(a).h("k<w.E>").a(b)
s=this.gm(a)
for(r=J.K(b);r.n();){this.p(a,r.gu());++s}},
d6(a){this.sm(a,0)},
dn(a){var s,r=this
if(r.gm(a)===0)throw H.d(H.ao())
s=r.j(a,r.gm(a)-1)
r.sm(a,r.gm(a)-1)
return s},
co(a,b){var s,r=H.ax(a)
r.h("j(w.E,w.E)?").a(b)
s=b==null?P.tn():b
H.nS(a,s,r.h("w.E"))},
dB(a,b,c){P.aF(b,c,this.gm(a))
return H.bf(a,b,c,H.ax(a).h("w.E"))},
oq(a,b,c,d){var s,r=H.ax(a)
d=r.h("w.E").a(r.h("w.E?").a(d))
P.aF(b,c,this.gm(a))
for(s=b;s<c;++s)this.q(a,s,d)},
aP(a,b,c){var s
for(s=c;s<this.gm(a);++s)if(J.V(this.j(a,s),b))return s
return-1},
ao(a,b){return this.aP(a,b,0)},
l(a){return P.jS(a,"[","]")}}
P.em.prototype={}
P.k_.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.l(a)
r.a=s+": "
r.a+=H.l(b)},
$S:57}
P.cc.prototype={
bc(a,b){var s,r,q=H.D(this)
q.h("~(1,2)").a(b)
for(s=this.gaD(),s=s.gH(s),q=q.Q[1];s.n();){r=s.gu()
b.$2(r,q.a(this.j(0,r)))}},
gea(a){var s=this.gaD(),r=H.D(this).h("bn<1,2>"),q=H.D(s)
return H.k1(s,q.a_(r).h("1(k.E)").a(new P.k0(this)),q.h("k.E"),r)},
an(a){return this.gaD().G(0,a)},
gm(a){var s=this.gaD()
return s.gm(s)},
l(a){return P.mA(this)},
$iaN:1}
P.k0.prototype={
$1(a){var s,r=this.a,q=H.D(r)
q.c.a(a)
s=q.Q[1]
return new P.bn(a,s.a(r.j(0,a)),q.h("@<1>").a_(s).h("bn<1,2>"))},
$S(){return H.D(this.a).h("bn<1,2>(1)")}}
P.el.prototype={
gH(a){var s=this
return new P.f0(s,s.c,s.d,s.b,s.$ti.h("f0<1>"))},
gai(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gar(a){var s,r=this,q=r.b
if(q===r.c)throw H.d(H.ao())
s=r.a
if(q>=s.length)return H.b(s,q)
return r.$ti.c.a(s[q])},
gt(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw H.d(H.ao())
q=r.a
s=q.length
p=(p-1&s-1)>>>0
if(p<0||p>=s)return H.b(q,p)
return r.$ti.c.a(q[p])},
al(a,b){var s,r,q,p=this,o=p.gm(p)
if(0>b||b>=o)H.c(P.h4(b,p,"index",null,o))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(q<0||q>=r)return H.b(s,q)
return p.$ti.c.a(s[q])},
d6(a){var s=this,r=s.b
if(r!==s.c){for(;r!==s.c;r=(r+1&s.a.length-1)>>>0)C.a.q(s.a,r,null)
s.b=s.c=0;++s.d}},
l(a){return P.jS(this,"{","}")},
jV(){var s,r,q=this,p=q.b
if(p===q.c)throw H.d(H.ao());++q.d
s=q.a
if(p>=s.length)return H.b(s,p)
r=q.$ti.c.a(s[p])
C.a.q(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
dN(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
C.a.q(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=P.bG(r*2,null,!1,n.h("1?"))
n=o.a
s=o.b
p=n.length-s
C.a.dH(q,0,p,n,s)
C.a.dH(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.smE(q)}++o.d},
smE(a){this.a=this.$ti.h("m<1?>").a(a)},
$inL:1}
P.f0.prototype={
gu(){return this.$ti.c.a(this.e)},
n(){var s,r,q=this,p=q.a
if(q.c!==p.d)H.c(P.ar(p))
s=q.d
if(s===q.b){q.scX(null)
return!1}r=p.a
if(s>=r.length)return H.b(r,s)
q.scX(r[s])
q.d=(q.d+1&p.a.length-1)>>>0
return!0},
scX(a){this.e=this.$ti.h("1?").a(a)},
$iU:1}
P.b_.prototype={
gai(a){return this.gm(this)===0},
gcI(a){return this.gm(this)!==0},
l(a){return P.jS(this,"{","}")},
aC(a,b){var s,r=this.gH(this)
if(!r.n())return""
if(b===""){s=""
do s+=H.l(r.gu())
while(r.n())}else{s=""+H.l(r.gu())
for(;r.n();)s=s+b+H.l(r.gu())}return s.charCodeAt(0)==0?s:s},
b7(a,b){return H.nR(this,b,H.D(this).h("b_.E"))},
gar(a){var s=this.gH(this)
if(!s.n())throw H.d(H.ao())
return s.gu()},
gt(a){var s,r=this.gH(this)
if(!r.n())throw H.d(H.ao())
do s=r.gu()
while(r.n())
return s},
al(a,b){var s,r,q,p="index"
H.lT(b,p,t.S)
P.bd(b,p)
for(s=this.gH(this),r=0;s.n();){q=s.gu()
if(b===r)return q;++r}throw H.d(P.h4(b,this,p,null,r))}}
P.eD.prototype={$iP:1,$ik:1,$iby:1}
P.dA.prototype={
oH(a,b){var s,r,q=this.iv()
for(s=this.gH(this);s.n();){r=s.gu()
if(b.G(0,r))q.p(0,r)}return q},
$iP:1,
$ik:1,
$iby:1}
P.iz.prototype={}
P.fb.prototype={
iv(){return P.mx(this.$ti.c)},
gH(a){var s=this.a.gaD()
return s.gH(s)},
gm(a){var s=this.a
return s.gm(s)}}
P.f_.prototype={}
P.f3.prototype={}
P.ff.prototype={}
P.fg.prototype={}
P.kN.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.aK(r)}return null},
$S:23}
P.kM.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.aK(r)}return null},
$S:23}
P.fB.prototype={
e6(a,b){var s
t.L.a(b)
s=C.ax.fG(b)
return s}}
P.iw.prototype={
fG(a){var s,r,q,p
t.L.a(a)
s=P.aF(0,null,a.gm(a))
for(r=0<s,q=~this.b>>>0;r;){p=a.j(0,0)
p.kf(0,q)
if(!this.a)throw H.d(P.aC("Invalid value in input: "+H.l(p),null,null))
return this.mh(a,0,s)}return P.ad(a,0,s)},
mh(a,b,c){var s,r,q
t.L.a(a)
for(s=~this.b>>>0,r=b,q="";r<c;++r){a.j(0,r).kf(0,s)
q+=H.bc(65533)}return q.charCodeAt(0)==0?q:q}}
P.fC.prototype={}
P.fE.prototype={
oW(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a3=P.aF(a2,a3,a1.length)
s=$.pA()
for(r=s.length,q=a2,p=q,o=null,n=-1,m=-1,l=0;q<a3;q=k){k=q+1
j=C.b.E(a1,q)
if(j===37){i=k+2
if(i<=a3){h=H.m2(C.b.E(a1,k))
g=H.m2(C.b.E(a1,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.b(s,f)
e=s[f]
if(e>=0){f=C.b.J("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a2("")
d=o}else d=o
c=d.a+=C.b.w(a1,p,q)
d.a=c+H.bc(j)
p=k
continue}}throw H.d(P.aC("Invalid base64 data",a1,q))}if(o!=null){r=o.a+=C.b.w(a1,p,a3)
d=r.length
if(n>=0)P.nu(a1,m,a3,n,l,d)
else{b=C.d.ac(d-1,4)+1
if(b===1)throw H.d(P.aC(a0,a1,a3))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.b.ck(a1,a2,a3,r.charCodeAt(0)==0?r:r)}a=a3-a2
if(n>=0)P.nu(a1,m,a3,n,l,a)
else{b=C.d.ac(a,4)
if(b===1)throw H.d(P.aC(a0,a1,a3))
if(b>1)a1=C.b.ck(a1,a3,a3,b===2?"==":"=")}return a1}}
P.fF.prototype={}
P.cD.prototype={}
P.cF.prototype={}
P.fS.prototype={}
P.i_.prototype={
e6(a,b){t.L.a(b)
return C.e7.fG(b)}}
P.i0.prototype={
fG(a){var s,r
t.L.a(a)
s=this.a
r=P.r_(s,a,0,null)
if(r!=null)return r
return new P.lA(s).nM(a,0,null,!0)}}
P.lA.prototype={
nM(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=P.aF(b,c,J.H(a))
if(b===s)return""
r=P.rF(a,b,s)
q=n.f9(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=P.rG(p)
n.b=0
throw H.d(P.aC(o,a,b+n.c))}return q},
f9(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.d.aV(b+c,2)
r=q.f9(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.f9(a,s,c,d)}return q.nP(a,b,c,d)},
nP(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a2(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.b.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.b.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.bc(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.bc(j)
break
case 65:g.a+=H.bc(j);--f
break
default:p=g.a+=H.bc(j)
g.a=p+H.bc(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.bc(a[l])}else g.a+=P.ad(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.bc(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.a1.prototype={
gdK(){return H.cu(this.$thrownJsError)}}
P.dM.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fT(s)
return"Assertion failed"}}
P.ck.prototype={}
P.hi.prototype={
l(a){return"Throw of null."}}
P.bC.prototype={
gfe(){return"Invalid argument"+(!this.a?"(s)":"")},
gfd(){return""},
l(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.l(n),l=q.gfe()+o+m
if(!q.a)return l
s=q.gfd()
r=P.fT(q.b)
return l+s+": "+r}}
P.dk.prototype={
gfe(){return"RangeError"},
gfd(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.l(q):""
else if(q==null)s=": Not greater than or equal to "+H.l(r)
else if(q>r)s=": Not in inclusive range "+H.l(r)+".."+H.l(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.l(r)
return s}}
P.h3.prototype={
gfe(){return"RangeError"},
gfd(){if(H.a0(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
P.hX.prototype={
l(a){return"Unsupported operation: "+this.a}}
P.eP.prototype={
l(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cg.prototype={
l(a){return"Bad state: "+this.a}}
P.fN.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fT(s)+"."}}
P.ho.prototype={
l(a){return"Out of Memory"},
gdK(){return null},
$ia1:1}
P.eI.prototype={
l(a){return"Stack Overflow"},
gdK(){return null},
$ia1:1}
P.fP.prototype={
l(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.ik.prototype={
l(a){return"Exception: "+this.a},
$ibW:1}
P.e4.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.b.w(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.b.E(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.b.J(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=C.b.w(d,k,l)
return f+j+h+i+"\n"+C.b.B(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.l(e)+")"):f},
$ibW:1}
P.k.prototype={
em(a,b,c){var s=H.D(this)
return H.k1(this,s.a_(c).h("1(k.E)").a(b),s.h("k.E"),c)},
eH(a,b){var s=H.D(this)
return new H.ai(this,s.h("B(k.E)").a(b),s.h("ai<k.E>"))},
cC(a,b){var s
H.D(this).h("B(k.E)").a(b)
for(s=this.gH(this);s.n();)if(!H.aG(b.$1(s.gu())))return!1
return!0},
b2(a,b){var s
H.D(this).h("B(k.E)").a(b)
for(s=this.gH(this);s.n();)if(H.aG(b.$1(s.gu())))return!0
return!1},
bs(a,b){return P.i(this,b,H.D(this).h("k.E"))},
az(a){return this.bs(a,!0)},
gm(a){var s,r=this.gH(this)
for(s=0;r.n();)++s
return s},
gai(a){return!this.gH(this).n()},
gcI(a){return!this.gai(this)},
b7(a,b){return H.nR(this,b,H.D(this).h("k.E"))},
gar(a){var s=this.gH(this)
if(!s.n())throw H.d(H.ao())
return s.gu()},
gt(a){var s,r=this.gH(this)
if(!r.n())throw H.d(H.ao())
do s=r.gu()
while(r.n())
return s},
al(a,b){var s,r,q
P.bd(b,"index")
for(s=this.gH(this),r=0;s.n();){q=s.gu()
if(b===r)return q;++r}throw H.d(P.h4(b,this,"index",null,r))},
l(a){return P.qa(this,"(",")")}}
P.U.prototype={}
P.bn.prototype={
l(a){return"MapEntry("+H.l(this.a)+": "+H.l(this.b)+")"}}
P.am.prototype={
gO(a){return P.G.prototype.gO.call(this,this)},
l(a){return"null"}}
P.G.prototype={$iG:1,
Z(a,b){return this===b},
gO(a){return H.bJ(this)},
l(a){return"Instance of '"+H.kk(this)+"'"},
toString(){return this.l(this)}}
P.iv.prototype={
l(a){return""},
$ice:1}
P.hA.prototype={
gH(a){return new P.hz(this.a)},
gt(a){var s,r,q=this.a,p=q.length
if(p===0)throw H.d(P.au("No elements."))
s=C.b.J(q,p-1)
if((s&64512)===56320&&p>1){r=C.b.J(q,p-2)
if((r&64512)===55296)return P.ox(r,s)}return s}}
P.hz.prototype={
gu(){return this.d},
n(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=C.b.E(n,o)
r=o+1
if((s&64512)===55296&&r<m){q=C.b.E(n,r)
if((q&64512)===56320){p.c=r+1
p.d=P.ox(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iU:1}
P.a2.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iqO:1}
P.kJ.prototype={
$2(a,b){throw H.d(P.aC("Illegal IPv4 address, "+a,this.a,b))},
$S:55}
P.kK.prototype={
$2(a,b){throw H.d(P.aC("Illegal IPv6 address, "+a,this.a,b))},
$1(a){return this.$2(a,null)},
$S:54}
P.kL.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.cv(C.b.w(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:11}
P.cs.prototype={
giF(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.l(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.c(H.aa("_text"))}return o},
gha(){var s,r=this,q=r.y
if(q==null){s=r.e
if(s.length!==0&&C.b.E(s,0)===47)s=C.b.aw(s,1)
q=s.length===0?C.p:P.nF(new H.F(H.a(s.split("/"),t.s),t.f6.a(P.ts()),t.iZ),t.N)
if(r.y==null)r.sm7(q)
else q=H.c(H.aa("pathSegments"))}return q},
gO(a){var s=this,r=s.z
if(r==null){r=C.b.gO(s.giF())
if(s.z==null)s.z=r
else r=H.c(H.aa("hashCode"))}return r},
gdt(){return this.b},
gbp(a){var s=this.c
if(s==null)return""
if(C.b.a1(s,"["))return C.b.w(s,1,s.length-1)
return s},
gcM(a){var s=this.d
return s==null?P.oi(this.a):s},
gcj(){var s=this.f
return s==null?"":s},
geg(){var s=this.r
return s==null?"":s},
oK(a){var s=this.a
if(a.length!==s.length)return!1
return P.rz(a,s)},
ir(a,b){var s,r,q,p,o,n
for(s=0,r=0;C.b.ak(b,"../",r);){r+=3;++s}q=C.b.h3(a,"/")
while(!0){if(!(q>0&&s>0))break
p=C.b.el(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
if(!n||o===3)if(C.b.J(a,p+1)===46)n=!n||C.b.J(a,p+2)===46
else n=!1
else n=!1
if(n)break;--s
q=p}return C.b.ck(a,q+1,null,C.b.aw(b,r-3*s))},
k_(a){return this.dr(P.mI(a))},
dr(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(a.gaS().length!==0){s=a.gaS()
if(a.gdg()){r=a.gdt()
q=a.gbp(a)
p=a.gdh()?a.gcM(a):h}else{p=h
q=p
r=""}o=P.c4(a.gaQ(a))
n=a.gcE()?a.gcj():h}else{s=i.a
if(a.gdg()){r=a.gdt()
q=a.gbp(a)
p=P.mT(a.gdh()?a.gcM(a):h,s)
o=P.c4(a.gaQ(a))
n=a.gcE()?a.gcj():h}else{r=i.b
q=i.c
p=i.d
o=i.e
if(a.gaQ(a)==="")n=a.gcE()?a.gcj():i.f
else{m=P.rE(i,o)
if(m>0){l=C.b.w(o,0,m)
o=a.geh()?l+P.c4(a.gaQ(a)):l+P.c4(i.ir(C.b.aw(o,l.length),a.gaQ(a)))}else if(a.geh())o=P.c4(a.gaQ(a))
else if(o.length===0)if(q==null)o=s.length===0?a.gaQ(a):P.c4(a.gaQ(a))
else o=P.c4("/"+a.gaQ(a))
else{k=i.ir(o,a.gaQ(a))
j=s.length===0
if(!j||q!=null||C.b.a1(o,"/"))o=P.c4(k)
else o=P.mV(k,!j||q!=null)}n=a.gcE()?a.gcj():h}}}return new P.cs(s,r,q,p,o,n,a.gh_()?a.geg():h)},
gdg(){return this.c!=null},
gdh(){return this.d!=null},
gcE(){return this.f!=null},
gh_(){return this.r!=null},
geh(){return C.b.a1(this.e,"/")},
hj(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw H.d(P.T("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw H.d(P.T(u.z))
q=r.r
if((q==null?"":q)!=="")throw H.d(P.T(u.U))
q=$.nj()
if(q)q=P.ot(r)
else{if(r.c!=null&&r.gbp(r)!=="")H.c(P.T(u.Q))
s=r.gha()
P.rw(s,!1)
q=P.kz(C.b.a1(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q}return q},
l(a){return this.giF()},
Z(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.jJ.b(b))if(q.a===b.gaS())if(q.c!=null===b.gdg())if(q.b===b.gdt())if(q.gbp(q)===b.gbp(b))if(q.gcM(q)===b.gcM(b))if(q.e===b.gaQ(b)){s=q.f
r=s==null
if(!r===b.gcE()){if(r)s=""
if(s===b.gcj()){s=q.r
r=s==null
if(!r===b.gh_()){if(r)s=""
s=s===b.geg()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
sm7(a){this.y=t.fm.a(a)},
$ihY:1,
gaS(){return this.a},
gaQ(a){return this.e}}
P.kI.prototype={
gka(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.b.aP(s,"?",m)
q=s.length
if(r>=0){p=P.fc(s,r+1,q,C.E,!1)
q=r}else p=n
m=o.c=new P.ia("data","",n,n,P.fc(s,m,q,C.ae,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.lH.prototype={
$2(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
C.cP.oq(s,0,96,b)
return s},
$S:49}
P.lI.prototype={
$3(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.b.E(b,r)^96
if(q>=96)return H.b(a,q)
a[q]=c}},
$S:26}
P.lJ.prototype={
$3(a,b,c){var s,r,q
for(s=C.b.E(b,0),r=C.b.E(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.b(a,q)
a[q]=c}},
$S:26}
P.br.prototype={
gdg(){return this.c>0},
gdh(){return this.c>0&&this.d+1<this.e},
gcE(){return this.f<this.r},
gh_(){return this.r<this.a.length},
geh(){return C.b.ak(this.a,"/",this.e)},
gaS(){var s=this.x
return s==null?this.x=this.mf():s},
mf(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.b.a1(r.a,"http"))return"http"
if(q===5&&C.b.a1(r.a,"https"))return"https"
if(s&&C.b.a1(r.a,"file"))return"file"
if(q===7&&C.b.a1(r.a,"package"))return"package"
return C.b.w(r.a,0,q)},
gdt(){var s=this.c,r=this.b+3
return s>r?C.b.w(this.a,r,s-1):""},
gbp(a){var s=this.c
return s>0?C.b.w(this.a,s,this.d):""},
gcM(a){var s,r=this
if(r.gdh())return P.cv(C.b.w(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.b.a1(r.a,"http"))return 80
if(s===5&&C.b.a1(r.a,"https"))return 443
return 0},
gaQ(a){return C.b.w(this.a,this.e,this.f)},
gcj(){var s=this.f,r=this.r
return s<r?C.b.w(this.a,s+1,r):""},
geg(){var s=this.r,r=this.a
return s<r.length?C.b.aw(r,s+1):""},
gha(){var s,r,q=this.e,p=this.f,o=this.a
if(C.b.ak(o,"/",q))++q
if(q===p)return C.p
s=H.a([],t.s)
for(r=q;r<p;++r)if(C.b.J(o,r)===47){C.a.p(s,C.b.w(o,q,r))
q=r+1}C.a.p(s,C.b.w(o,q,p))
return P.nF(s,t.N)},
ik(a){var s=this.d+1
return s+a.length===this.e&&C.b.ak(this.a,a,s)},
pt(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new P.br(C.b.w(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.x)},
k_(a){return this.dr(P.mI(a))},
dr(a){if(a instanceof P.br)return this.my(this,a)
return this.iI().dr(a)},
my(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&C.b.a1(a.a,"file"))p=b.e!==b.f
else if(q&&C.b.a1(a.a,"http"))p=!b.ik("80")
else p=!(r===5&&C.b.a1(a.a,"https"))||!b.ik("443")
if(p){o=r+1
return new P.br(C.b.w(a.a,0,o)+C.b.aw(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.x)}else return this.iI().dr(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new P.br(C.b.w(a.a,0,r)+C.b.aw(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.x)}c=b.a
if(s<c.length){r=a.r
return new P.br(C.b.w(a.a,0,r)+C.b.aw(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.x)}return a.pt()}s=b.a
if(C.b.ak(s,"/",n)){m=a.e
l=P.oc(this)
k=l>0?l:m
o=k-n
return new P.br(C.b.w(a.a,0,k)+C.b.aw(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.x)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;C.b.ak(s,"../",n);)n+=3
o=j-n+1
return new P.br(C.b.w(a.a,0,j)+"/"+C.b.aw(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.x)}h=a.a
l=P.oc(this)
if(l>=0)g=l
else for(g=j;C.b.ak(h,"../",g);)g+=3
f=0
while(!0){e=n+3
if(!(e<=c&&C.b.ak(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(C.b.J(h,i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!C.b.ak(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new P.br(C.b.w(h,0,i)+d+C.b.aw(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.x)},
hj(){var s,r,q=this,p=q.b
if(p>=0){s=!(p===4&&C.b.a1(q.a,"file"))
p=s}else p=!1
if(p)throw H.d(P.T("Cannot extract a file path from a "+q.gaS()+" URI"))
p=q.f
s=q.a
if(p<s.length){if(p<q.r)throw H.d(P.T(u.z))
throw H.d(P.T(u.U))}r=$.nj()
if(r)p=P.ot(q)
else{if(q.c<q.d)H.c(P.T(u.Q))
p=C.b.w(s,q.e,p)}return p},
gO(a){var s=this.y
return s==null?this.y=C.b.gO(this.a):s},
Z(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
iI(){var s=this,r=null,q=s.gaS(),p=s.gdt(),o=s.c>0?s.gbp(s):r,n=s.gdh()?s.gcM(s):r,m=s.a,l=s.f,k=C.b.w(m,s.e,l),j=s.r
l=l<j?s.gcj():r
return new P.cs(q,p,o,n,k,l,j<m.length?s.geg():r)},
l(a){return this.a},
$ihY:1}
P.ia.prototype={}
W.y.prototype={}
W.fw.prototype={
l(a){var s=String(a)
s.toString
return s}}
W.fz.prototype={
l(a){var s=String(a)
s.toString
return s}}
W.cB.prototype={
sbo(a,b){a.height=b},
sq0(a,b){a.width=b},
$icB:1}
W.dS.prototype={
sfY(a,b){a.fillStyle=b},
shO(a,b){a.strokeStyle=b},
lA(a,b){return a.stroke(b)},
$idS:1}
W.bD.prototype={
gm(a){return a.length}}
W.je.prototype={
l(a){var s=String(a)
s.toString
return s}}
W.dX.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+H.l(r)+", "
s=a.top
s.toString
s=r+H.l(s)+") "
r=a.width
r.toString
r=s+H.l(r)+" x "
s=a.height
s.toString
return r+H.l(s)},
Z(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gO(a){var s,r,q,p=a.left
p.toString
p=C.e.gO(p)
s=a.top
s.toString
s=C.e.gO(s)
r=a.width
r.toString
r=C.e.gO(r)
q=a.height
q.toString
return W.o8(p,s,r,C.e.gO(q))},
$imC:1}
W.r.prototype={
l(a){var s=a.localName
s.toString
return s},
$ir:1}
W.u.prototype={$iu:1}
W.aV.prototype={
m9(a,b,c,d){return a.addEventListener(b,H.dG(t.U.a(c),1),!1)},
mu(a,b,c,d){return a.removeEventListener(b,H.dG(t.U.a(c),1),!1)},
$iaV:1}
W.fW.prototype={
gm(a){return a.length}}
W.bb.prototype={$ibb:1}
W.b7.prototype={
l(a){var s=a.nodeValue
return s==null?this.lE(a):s}}
W.hq.prototype={$ihq:1}
W.hD.prototype={
gm(a){return a.length}}
W.bA.prototype={}
W.dv.prototype={
gn6(a){var s=new P.aq($.ab,t.iS),r=t.hv.a(new W.l2(new P.f5(s,t.km)))
this.mk(a)
r=W.oL(r,t.q)
r.toString
this.mv(a,r)
return s},
mv(a,b){var s=a.requestAnimationFrame(H.dG(t.hv.a(b),1))
s.toString
return s},
mk(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.l2.prototype={
$1(a){this.a.fD(0,H.lC(a))},
$S:47}
W.eU.prototype={
l(a){var s,r=a.left
r.toString
r="Rectangle ("+H.l(r)+", "
s=a.top
s.toString
s=r+H.l(s)+") "
r=a.width
r.toString
r=s+H.l(r)+" x "
s=a.height
s.toString
return r+H.l(s)},
Z(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gO(a){var s,r,q,p=a.left
p.toString
p=C.e.gO(p)
s=a.top
s.toString
s=C.e.gO(s)
r=a.width
r.toString
r=C.e.gO(r)
q=a.height
q.toString
return W.o8(p,s,r,C.e.gO(q))}}
W.mq.prototype={}
W.eW.prototype={}
W.ig.prototype={}
W.eX.prototype={
nr(){var s,r=this,q=r.b
if(q==null)return $.nl()
s=r.d
if(s!=null)J.pE(q,r.c,t.U.a(s),!1)
r.b=null
r.sms(null)
return $.nl()},
sms(a){this.d=t.U.a(a)}}
W.la.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:44}
P.iq.prototype={
lZ(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=C.d.aV(a-s,k)
r=a>>>0
a=C.d.aV(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+C.d.aV(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+C.d.aV(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+C.d.aV(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=C.d.aV(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+C.d.aV(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.dU()
l.dU()
l.dU()
l.dU()},
dU(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=C.d.aV(o-n+(q-p)+(m-r),4294967296)>>>0},
$iqy:1}
P.cN.prototype={
l(a){return"Point("+H.l(this.a)+", "+H.l(this.b)+")"},
Z(a,b){if(b==null)return!1
return b instanceof P.cN&&this.a===b.a&&this.b===b.b},
gO(a){return H.nU(C.e.gO(this.a),C.e.gO(this.b),0)}}
A.as.prototype={
gH(a){var s=this.$ti,r=J.t(this.a,new A.jT(this),s.h("U<1>"))
return new A.eY(P.i(r,!1,r.$ti.h("C.E")),s.h("eY<1>"))}}
A.jT.prototype={
$1(a){return J.K(this.a.$ti.h("k<1>").a(a))},
$S(){return this.a.$ti.h("U<1>(k<1>)")}}
A.eY.prototype={
n(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].n()){p.sim(null)
return!1}if(r>4294967295)H.c(P.a_(r,0,4294967295,"length",null))
q=J.nA(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(s>=o.length)return H.b(o,s)
q[s]=o[s].gu()}p.sim(q)
return!0},
gu(){var s=this.b
return s==null?H.c(P.au("No element")):s},
sim(a){this.b=this.$ti.h("m<1>?").a(a)},
$iU:1}
G.lu.prototype={
ga8(){var s=this.d
return s==null?H.c(H.h("_peekToken")):s},
bB(){var s=this,r=s.ga8()
s.c=r
s.d=t.J.a(s.a.at(!1))
return r},
iq(a,b){var s=this
if(s.ga8().a===a){s.c=s.ga8()
s.d=t.J.a(s.a.at(!1))
return!0}else return!1},
dT(a){return this.iq(a,!1)},
aU(a){if(!this.iq(a,!1))this.fc(G.nW(a))},
fc(a){var s,r=this.bB(),q=null
try{q="expected "+a+", but found "+H.l(r)}catch(s){H.aK(s)
q="parsing error expected "+a}this.ct(q,r.b)},
ct(a,b){$.fm.iA().o6(0,a,b)},
ae(a){var s=this.c
if(s==null||s.b.aA(0,a)<0)return a
return a.o8(0,this.c.b)},
pd(){var s,r=this,q=H.a([],t.b7),p=r.ga8(),o=r.a
o.e=!0
do{s=r.jR()
if(s!=null)C.a.p(q,s)}while(r.dT(19))
o.e=!1
if(q.length!==0)return new B.hE(q,r.ae(p.b))
return null},
jR(){var s,r=H.a([],t.iM),q=this.ga8()
for(;!0;){s=this.lj(r.length===0)
if(s!=null)C.a.p(r,s)
else break}if(r.length===0)return null
return new B.cd(r,this.ae(q.b))},
pa(){var s,r,q,p,o,n,m=this.jR()
if(m!=null)for(s=m.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
if(p.b!==513){o=$.fm.b
if(o==$.fm)H.c(H.h($.fm.a))
n=new F.eo(C.I,"compound selector can not contain combinator",p.a,o.b.x)
C.a.p(o.c,n)
o.p8(n)}}return m},
lj(a){var s,r,q,p,o,n,m=this,l=m.ga8()
switch(m.ga8().a){case 12:m.aU(12)
s=515
r=!1
break
case 13:m.aU(13)
s=516
r=!1
break
case 14:m.aU(14)
s=517
r=!1
break
case 36:m.aU(36)
s=513
r=!0
break
default:s=513
r=!1}if(s===513&&!a){q=m.c
if(q!=null){q=q.b
q=Y.c8(q.a,q.c)
p=m.ga8().b
p=q.b!==Y.c8(p.a,p.b).b
q=p}else q=!1
if(q)s=514}o=m.ae(l.b)
n=r?new B.cG(new B.hQ(o),o):m.hF()
if(n==null)l=s===515||s===516||s===517
else l=!1
if(l)n=new B.cG(new B.bY("",o),o)
if(n!=null)return new B.eE(s,n,o)
return null},
hF(){var s,r,q=this,p=q.ga8().b
switch(q.ga8().a){case 15:s=new B.cn(q.ae(q.bB().b))
break
case 511:s=q.bI()
break
default:if(G.nV(q.ga8().a))s=q.bI()
else{if(q.ga8().a===9)return null
s=null}break}if(q.dT(16)){switch(q.ga8().a){case 15:r=new B.cn(q.ae(q.bB().b))
break
case 511:r=q.bI()
break
default:q.ct("expected element name or universal(*), but found "+q.ga8().l(0),q.ga8().b)
r=null
break}return new B.hd(s,new B.cG(r,r.a),q.ae(p))}else if(s!=null)return new B.cG(s,q.ae(p))
else return q.lk()},
i0(a){var s,r=this.c
if(r!=null&&r.a===a){r=r.b
r=Y.c8(r.a,r.c)
s=this.ga8().b
return r.b!==Y.c8(s.a,s.b).b}return!1},
lk(){var s=this,r=s.ga8().b
switch(s.ga8().a){case 11:s.aU(11)
if(s.i0(11)){s.ct("Not a valid ID selector expected #id",s.ae(r))
return null}return new B.fZ(s.bI(),s.ae(r))
case 8:s.aU(8)
if(s.i0(8)){s.ct("Not a valid class selector expected .className",s.ae(r))
return null}return new B.fK(s.bI(),s.ae(r))
case 17:return s.pb(r)
case 4:return s.p9()
case 62:s.ct("name must start with a alpha character, but found a number",s.ga8().b)
s.bB()
break}return null},
pb(a){var s,r,q,p,o,n,m,l,k=this
k.aU(17)
s=k.dT(17)
if(k.ga8().a===511)r=k.bI()
else return null
q=r.b.toLowerCase()
if(k.ga8().a===2){p=!s
if(p&&q==="not"){k.aU(2)
o=k.hF()
k.aU(3)
p=k.ae(a)
return new B.hh(o,new B.hg(p),p)}else{if(p)p=q==="host"||q==="host-context"||q==="global-context"||q==="-acx-global-context"
else p=!1
if(p){k.aU(2)
n=k.pa()
if(n==null){k.fc("a selector argument")
return null}k.aU(3)
return new B.ey(n,r,k.ae(a))}else{p=k.a
p.d=!0
k.aU(2)
m=k.ae(a)
l=k.pc()
p.d=!1
if(l instanceof B.dn){k.aU(3)
return s?new B.hv(!1,r,m):new B.ey(l,r,m)}else{k.fc("CSS expression")
return null}}}}p=!s
return!p||C.e3.a.an(q)?new B.dj(p,r,k.ae(a)):new B.di(r,k.ae(a))},
pc(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="_peekToken",f=i.ga8().b,e=H.a([],t.oQ)
for(s=i.a,r=t.J,q=h,p=q,o=!0;o;){n=i.d
switch((n==null?H.c(H.h(g)):n).a){case 12:f=n.b
i.c=n
i.d=r.a(s.at(!1))
C.a.p(e,new B.hn(i.ae(f)))
p=n
break
case 34:f=n.b
i.c=n
i.d=r.a(s.at(!1))
C.a.p(e,new B.hm(i.ae(f)))
p=n
break
case 60:i.c=n
i.d=r.a(s.at(!1))
q=P.cv(n.gY(n),h)
p=n
break
case 62:i.c=n
i.d=r.a(s.at(!1))
q=P.bT(n.gY(n))
p=n
break
case 25:q="'"+G.oz(i.hd(!1),!0)+"'"
return new B.af(q,q,i.ae(f))
case 26:q='"'+G.oz(i.hd(!1),!1)+'"'
return new B.af(q,q,i.ae(f))
case 511:q=i.bI()
break
default:o=!1}if(o&&q!=null){m=i.ae(f)
l=i.d
k=(l==null?H.c(H.h(g)):l).a
switch(k){case 600:j=new B.fR(q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 601:j=new B.fU(q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 602:case 603:case 604:case 605:case 606:case 607:j=new B.h9(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 608:case 609:case 610:case 611:j=new B.fx(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 612:case 613:j=new B.hR(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 614:case 615:j=new B.fY(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 24:j=new B.hs(q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 617:j=new B.fX(q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 618:case 619:case 620:j=new B.hy(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 621:j=new B.fJ(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 622:j=new B.hx(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
case 623:case 624:case 625:case 626:j=new B.i1(k,q,p.gY(p),m)
n=i.d
i.c=n==null?H.c(H.h(g)):n
i.d=r.a(s.at(!1))
break
default:j=q instanceof B.bY?new B.af(q,q.b,m):new B.hk(q,p.gY(p),m)}C.a.p(e,j)
q=h}}return new B.dn(e,i.ae(f))},
p9(){var s,r,q,p=this,o=p.ga8()
if(p.dT(4)){s=p.bI()
switch(p.ga8().a){case 28:case 530:case 531:case 532:case 533:case 534:r=p.ga8().a
p.bB()
break
default:r=535}if(r!==535)q=p.ga8().a===511?p.bI():p.hd(!1)
else q=null
p.aU(5)
return new B.fD(r,q,s,p.ae(o.b))}return null},
hd(a){var s,r,q,p,o=this,n=o.ga8(),m=o.a,l=m.c
m.c=!1
switch(o.ga8().a){case 25:o.bB()
o.ga8()
s=25
break
case 26:o.bB()
o.ga8()
s=26
break
default:o.ct("unexpected string",o.ae(n.b))
s=-1
break}n=t.J
r=""
while(!0){q=o.d
if((q==null?H.c(H.h("_peekToken")):q).a!==s)p=q.a!==1
else p=!1
if(!p)break
o.c=q
o.d=n.a(m.at(!1))
r+=q.gY(q)}m.c=l
if(s!==3)o.bB()
return r.charCodeAt(0)==0?r:r},
bI(){var s=this.bB(),r=s.a
if(r!==511&&!G.nV(r)){$.fm.iA().toString
return new B.bY("",this.ae(s.b))}return new B.bY(s.gY(s),this.ae(s.b))}}
G.bp.prototype={
gY(a){var s=this.b
return P.ad(C.w.b8(s.a.c,s.b,s.c),0,null)},
l(a){var s=G.nW(this.a),r=C.b.eF(this.gY(this))
if(s!==r){if(r.length>10)r=C.b.w(r,0,8)+"..."
return s+"("+r+")"}else return s}}
G.h_.prototype={
gY(a){return this.c}}
G.kC.prototype={
at(a){var s,r,q,p,o,n,m,l,k=this
k.r=k.f
s=k.cv()
switch(s){case 10:case 13:case 32:case 9:return k.ot()
case 0:return k.N(1)
case 64:r=k.cw()
if(G.hT(r)||r===45){q=k.f
p=k.r
k.r=q
k.cv()
k.ed()
o=k.b
n=k.r
m=G.mG(C.bt,"type",o,n,k.f-n)
if(m===-1){n=k.r
m=G.mG(C.bl,"type",o,n,k.f-n)}if(m!==-1)return k.N(m)
else{k.r=p
k.f=q}}return k.N(10)
case 46:l=k.r
if(k.oT())if(k.ee().a===60){k.r=l
return k.N(62)}else return k.N(65)
return k.N(8)
case 40:return k.N(2)
case 41:return k.N(3)
case 123:return k.N(6)
case 125:return k.N(7)
case 91:return k.N(4)
case 93:if(k.af(93)&&k.af(62))return k.cJ()
return k.N(5)
case 35:return k.N(11)
case 43:if(k.iw(s))return k.ee()
return k.N(12)
case 45:if(k.d||!1)return k.N(34)
else if(k.iw(s))return k.ee()
else if(G.hT(s)||s===45)return k.ed()
return k.N(34)
case 62:return k.N(13)
case 126:if(k.af(61))return k.N(530)
return k.N(14)
case 42:if(k.af(61))return k.N(534)
return k.N(15)
case 38:return k.N(36)
case 124:if(k.af(61))return k.N(531)
return k.N(16)
case 58:return k.N(17)
case 44:return k.N(19)
case 59:return k.N(9)
case 37:return k.N(24)
case 39:return k.N(25)
case 34:return k.N(26)
case 47:if(k.af(42))return k.os()
return k.N(27)
case 60:if(k.af(33))if(k.af(45)&&k.af(45))return k.or()
else{if(k.af(91)){o=k.ch.a
o=k.af(C.b.E(o,0))&&k.af(C.b.E(o,1))&&k.af(C.b.E(o,2))&&k.af(C.b.E(o,3))&&k.af(C.b.E(o,4))&&k.af(91)}else o=!1
if(o)return k.cJ()}return k.N(32)
case 61:return k.N(28)
case 94:if(k.af(61))return k.N(532)
return k.N(30)
case 36:if(k.af(61))return k.N(533)
return k.N(31)
case 33:return k.ed()
default:if(!k.e&&s===92)return k.N(35)
if(k.c)o=(s===k.x||s===k.y)&&k.cw()===k.z
else o=!1
if(o){k.cv()
k.r=k.f
return k.N(508)}else{o=s===118
if(o&&k.af(97)&&k.af(114)&&k.af(45))return k.N(400)
else if(o&&k.af(97)&&k.af(114)&&k.cw()===45)return k.N(401)
else if(G.hT(s)||s===45)return k.ed()
else if(s>=48&&s<=57)return k.ee()}return k.N(65)}},
cJ(){return this.at(!1)},
ed(){var s,r,q,p,o,n,m,l,k,j=this,i=H.a([],t.t),h=j.f
j.f=j.r
r=j.b
s=r.length
while(!0){q=j.f
if(!(q<s)){s=q
break}p=C.b.J(r,q)
if(p===92&&j.c){o=j.f=q+1
j.nZ(o+6)
q=j.f
if(q!==o){C.a.p(i,P.cv("0x"+C.b.w(r,o,q),null))
q=j.f
if(q===s){s=q
break}p=C.b.J(r,q)
if(q-o!==6)n=p===32||p===9||p===13||p===10
else n=!1
if(n)j.f=q+1}else{if(q===s){s=q
break}j.f=q+1
C.a.p(i,C.b.J(r,q))}}else{if(q>=h)if(j.d)if(!G.hT(p))n=p>=48&&p<=57
else n=!0
else{if(!G.hT(p))n=p>=48&&p<=57
else n=!0
n=n||p===45}else n=!0
if(n){C.a.p(i,p);++j.f}else{s=q
break}}}m=j.a.f_(0,j.r,s)
l=P.ad(i,0,null)
if(!j.d&&!j.e){s=j.r
k=G.mG(C.a8,"unit",r,s,j.f-s)}else k=-1
if(k===-1)k=C.b.w(r,j.r,j.f)==="!important"?505:-1
return new G.h_(l,k>=0?k:511,m)},
ee(){var s,r=this
r.jk()
if(r.cw()===46){r.cv()
s=r.cw()
if(s>=48&&s<=57){r.jk()
return r.N(62)}else --r.f}return r.N(60)},
oT(){var s=this.f,r=this.b
if(s<r.length){r=C.b.J(r,s)
r=r>=48&&r<=57}else r=!1
if(r){this.f=s+1
return!0}return!1},
nZ(a){var s,r,q=this.b
a=Math.min(a,q.length)
for(;s=this.f,s<a;){r=C.b.J(q,s)
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))r=r>=65&&r<=70
else r=!0
else r=!0
if(r)this.f=s+1
else return}},
or(){var s,r,q,p,o,n=this
for(;!0;){s=n.cv()
if(s===0){r=n.a
q=n.r
p=n.f
o=new Y.ap(r,q,p)
o.aH(r,q,p)
return new G.bp(67,o)}else if(s===45)if(n.af(45))if(n.af(62))if(n.c)return n.cJ()
else{r=n.a
q=n.r
p=n.f
o=new Y.ap(r,q,p)
o.aH(r,q,p)
return new G.bp(504,o)}}},
os(){var s,r,q,p,o,n=this
for(;!0;){s=n.cv()
if(s===0){r=n.a
q=n.r
p=n.f
o=new Y.ap(r,q,p)
o.aH(r,q,p)
return new G.bp(67,o)}else if(s===42)if(n.af(47))if(n.c)return n.cJ()
else{r=n.a
q=n.r
p=n.f
o=new Y.ap(r,q,p)
o.aH(r,q,p)
return new G.bp(64,o)}}}}
G.kD.prototype={
cv(){var s=this.f,r=this.b
if(s<r.length){this.f=s+1
return C.b.J(r,s)}else return 0},
ix(a){var s=this.f+a,r=this.b
if(s<r.length)return C.b.J(r,s)
else return 0},
cw(){return this.ix(0)},
af(a){var s=this.f,r=this.b
if(s<r.length)if(C.b.J(r,s)===a){this.f=s+1
return!0}else return!1
else return!1},
iw(a){var s,r
if(a>=48&&a<=57)return!0
s=this.cw()
if(a===46)return s>=48&&s<=57
if(a===43||a===45){if(!(s>=48&&s<=57))if(s===46){r=this.ix(1)
r=r>=48&&r<=57}else r=!1
else r=!0
return r}return!1},
N(a){return new G.bp(a,this.a.f_(0,this.r,this.f))},
ot(){var s,r,q,p,o=this,n=--o.f
for(s=o.b,r=s.length;n<r;n=q){q=o.f=n+1
p=C.b.J(s,n)
if(!(p===32||p===9||p===13))if(p===10){if(!o.c){n=o.a
s=o.r
r=new Y.ap(n,s,q)
r.aH(n,s,q)
return new G.bp(63,r)}}else{n=o.f=q-1
if(o.c)return o.cJ()
else{s=o.a
r=o.r
q=new Y.ap(s,r,n)
q.aH(s,r,n)
return new G.bp(63,q)}}}return o.N(1)},
jk(){var s,r,q,p
for(s=this.b,r=s.length;q=this.f,q<r;){p=C.b.J(s,q)
if(p>=48&&p<=57)this.f=q+1
else return}}}
F.de.prototype={
l(a){return this.b}}
F.eo.prototype={
l(a){var s=this,r=s.d&&C.af.an(s.a),q=r?C.af.j(0,s.a):null,p=r?""+H.l(q):""
p=p+H.l(C.c9.j(0,s.a))+" "
p=(r?p+"\x1b[0m":p)+"on "+s.c.jJ(0,s.b,q)
return p.charCodeAt(0)==0?p:p}}
F.k3.prototype={
o6(a,b,c){var s=new F.eo(C.I,b,c,this.b.x)
C.a.p(this.c,s)
this.a.$1(s)},
p8(a){return this.a.$1(a)}}
L.kj.prototype={}
B.bY.prototype={
T(a){return null},
l(a){var s=this.a
s=P.ad(C.w.b8(s.a.c,s.b,s.c),0,null)
return s},
gI(a){return this.b}}
B.cn.prototype={
T(a){return null},
gI(a){return"*"}}
B.hQ.prototype={
T(a){return null},
gI(a){return"&"}}
B.hg.prototype={
T(a){return null},
gI(a){return"not"}}
B.hE.prototype={
T(a){return C.a.b2(this.b,a.gkb())}}
B.cd.prototype={
gm(a){return this.b.length},
T(a){return a.kc(this)}}
B.eE.prototype={
T(a){this.c.T(a)
return null},
l(a){var s=this.c.b
return s.gI(s)}}
B.b0.prototype={
gI(a){var s=this.b
return s.gI(s)},
T(a){return t.in.a(this.b).T(a)}}
B.cG.prototype={
T(a){var s=this.b
return s instanceof B.cn||a.a.y===s.gI(s).toLowerCase()},
l(a){var s=this.b
return s.gI(s)}}
B.hd.prototype={
gjK(){var s=this.d
if(s instanceof B.cn)s="*"
else s=s==null?"":t.gx.a(s).b
return s},
T(a){return a.pW(this)},
l(a){var s=this.gjK()+"|",r=t.g9.a(this.b).b
return s+r.gI(r)}}
B.fD.prototype={
oR(){switch(this.d){case 28:return"="
case 530:return"~="
case 531:return"|="
case 532:return"^="
case 533:return"$="
case 534:return"*="
case 535:return""}return null},
pU(){var s=this.e
if(s!=null)if(s instanceof B.bY)return s.l(0)
else return'"'+H.l(s)+'"'
else return""},
T(a){return a.pV(this)},
l(a){var s=this.b
return"["+s.gI(s)+H.l(this.oR())+this.pU()+"]"}}
B.fZ.prototype={
T(a){var s=a.a.b.j(0,"id"),r=s==null?"":s,q=this.b
return r===q.gI(q)},
l(a){return"#"+H.l(this.b)}}
B.fK.prototype={
T(a){var s,r=a.a
r.toString
s=this.b
s=s.gI(s)
return new Z.fQ(r).ez().G(0,s)},
l(a){return"."+H.l(this.b)}}
B.di.prototype={
T(a){return a.pY(this)},
l(a){var s=this.b
return":"+s.gI(s)}}
B.dj.prototype={
T(a){a.q_(this)
return!1},
l(a){var s=this.d?":":"::",r=this.b
return s+r.gI(r)}}
B.ey.prototype={
T(a){return a.pX(this)}}
B.hv.prototype={
T(a){return a.pZ(this)}}
B.dn.prototype={
T(a){a.mG(this.b)
return null}}
B.hh.prototype={
T(a){return!H.iA(this.d.T(a))}}
B.hn.prototype={
T(a){return null}}
B.hm.prototype={
T(a){return null}}
B.af.prototype={
T(a){return null}}
B.hk.prototype={
T(a){return null}}
B.bq.prototype={
T(a){return null},
l(a){return this.d+H.l(G.qV(this.f))}}
B.h9.prototype={
T(a){return null}}
B.hs.prototype={
T(a){return null}}
B.fR.prototype={
T(a){return null}}
B.fU.prototype={
T(a){return null}}
B.fx.prototype={
T(a){return null}}
B.hR.prototype={
T(a){return null}}
B.fY.prototype={
T(a){return null}}
B.fX.prototype={
T(a){return null}}
B.hy.prototype={
T(a){return null}}
B.fJ.prototype={
T(a){return null}}
B.hx.prototype={
T(a){return null}}
B.i1.prototype={
T(a){return null}}
B.S.prototype={}
B.al.prototype={}
B.i2.prototype={
mG(a){var s
t.fr.a(a)
for(s=0;s<a.length;++s)a[s].T(this)},
$io4:1}
O.e5.prototype={
mO(a,b){if(b>0)return b
return-b},
pR(a,b,c){var s
if(c<1e-7)if(this.mO(0,a-b)<0.00001)return 1
else return 0
s=a-b
return 1/Math.sqrt(6.283185307179586*c)*Math.exp(-0.5*(s*s)/c)},
fL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=t.H
d.a(a)
s=J.ms(14,d)
for(d=t.n,r=e.a,q=0;q<14;++q){p=H.a(new Array(r),d)
for(o=0;o<r;++o)C.a.q(p,o,0)
s[q]=p}for(d=e.b,n=e.c,m=e.d,l=0;l<14;++l){for(k=0;k<r;++k){if(l>=s.length)return H.b(s,l)
j=s[l]
if(k>=d.length)return H.b(d,k)
i=d[k]
h=a[l]
if(k>=n.length)return H.b(n,k)
g=n[k]
if(k>=m.length)return H.b(m,k)
C.a.q(j,k,i*e.pR(h,g,m[k]))}if(l>=s.length)return H.b(s,l)
f=C.a.aR(s[l],new O.jj())
if(l>=s.length)return H.b(s,l)
j=s[l]
i=H.x(j)
h=i.h("F<1,q>")
C.a.q(s,l,P.i(new H.F(j,i.h("q(1)").a(new O.jk(f)),h),!0,h.h("C.E")))}return s},
h4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
t.H.a(a)
t.jj.a(b)
for(s=f.a,r=f.d,q=f.c,p=t.n,o=f.b,n=0;n<s;++n){for(m=b.length,l=0,k=0;k<14;++k){if(k>=m)return H.b(b,k)
j=b[k]
if(n>=j.length)return H.b(j,n)
j=j[n]
if(typeof j!=="number")return H.b3(j)
l+=j}C.a.q(o,n,l/14)
i=H.a(new Array(14),p)
for(m=b.length,k=0;k<14;++k){if(k>=m)return H.b(b,k)
j=b[k]
if(n>=j.length)return H.b(j,n)
j=j[n]
h=a[k]
if(typeof j!=="number")return j.B()
i[k]=j*h}m=C.a.aR(i,new O.jl())
if(typeof m!=="number")return m.b5()
C.a.q(q,n,m/l)
g=H.a(new Array(14),p)
for(k=0;k<14;++k){if(k>=b.length)return H.b(b,k)
m=b[k]
if(n>=m.length)return H.b(m,n)
m=m[n]
j=a[k]
if(n>=q.length)return H.b(q,n)
h=q[n]
if(typeof h!=="number")return H.b3(h)
h=Math.pow(j-h,2)
if(typeof m!=="number")return m.B()
g[k]=m*h}m=C.a.aR(g,new O.jm())
if(typeof m!=="number")return m.b5()
C.a.q(r,n,m/l)}}}
O.jj.prototype={
$2(a,b){return H.b9(a)+H.b9(b)},
$S:12}
O.jk.prototype={
$1(a){return H.b9(a)/this.a},
$S:5}
O.jl.prototype={
$2(a,b){return H.b9(a)+H.b9(b)},
$S:12}
O.jm.prototype={
$2(a,b){return H.b9(a)+H.b9(b)},
$S:12}
B.aB.prototype={
l(a){var s=this.a,r=this.b
return s!=null?s+":"+r:r},
gO(a){return 37*(37*(J.aH(this.a)&2097151)+C.b.gO(this.b)&2097151)+C.b.gO(this.c)&1073741823},
aA(a,b){var s,r,q
if(!(b instanceof B.aB))return 1
s=this.a
if(s==null)s=""
r=b.a
q=C.b.aA(s,r==null?"":r)
if(q!==0)return q
q=C.b.aA(this.b,b.b)
if(q!==0)return q
return C.b.aA(this.c,b.c)},
Z(a,b){if(b==null)return!1
return b instanceof B.aB&&this.a==b.a&&this.b===b.b&&this.c===b.c},
$iae:1}
B.ip.prototype={}
B.lt.prototype={}
B.ie.prototype={}
B.ag.prototype={
gap(a){var s=this,r=s.c
if(r==null){r=new B.ah(s,H.a([],t.d))
if(s.c==null)s.c=r
else r=H.c(H.aa("nodes"))}return r},
gj5(a){var s=this,r=s.d
if(r==null){r=new B.fV(s.gap(s))
if(s.d==null)s.sm6(r)
else r=H.c(H.aa("children"))}return r},
eA(a){var s=this.a
if(s!=null)C.a.a5(s.gap(s).a,this)
return this},
oE(a,b,c){var s,r,q=this
if(c==null)q.gap(q).p(0,b)
else{s=q.gap(q)
r=q.gap(q)
s.bJ(0,r.ao(r,c),b)}},
dO(a,b,c){var s,r,q,p,o,n,m
H.iD(c,t.I,"T","_clone")
c.a(a)
if(b)for(s=this.gap(this).a,r=H.x(s),s=new J.ay(s,s.length,r.h("ay<1>")),r=r.c,q=t.d;s.n();){p=r.a(s.d).d7(0,!0)
o=a.c
if(o==null){o=new B.ah(a,H.a([],q))
if(a.c==null)a.c=o
else o=H.c(H.aa("nodes"))}n=p.a
if(n!=null){m=n.c
if(m==null){m=new B.ah(n,H.a([],q))
if(n.c==null){n.c=m
n=m}else n=H.c(H.aa("nodes"))}else n=m
C.a.a5(n.a,p)}p.a=o.b
o.bU(0,p)}return a},
sd3(a,b){this.b=t.oP.a(b)},
sm6(a){this.d=t.bk.a(a)}}
B.d2.prototype={
l(a){return"#document"},
d7(a,b){return this.dO(new B.d2(P.Z(null,null,t.K,t.N)),!0,t.dA)}}
B.dW.prototype={
l(a){var s,r=this,q=r.y,p=q==null
if(!p||r.z!=null){if(p)q=""
s=r.z
if(s==null)s=""
return"<!DOCTYPE "+H.l(r.x)+' "'+q+'" "'+s+'">'}else return"<!DOCTYPE "+H.l(r.x)+">"},
d7(a,b){return new B.dW(this.x,this.y,this.z,P.Z(null,null,t.K,t.N))}}
B.c1.prototype={
l(a){var s=J.bu(this.x)
this.x=s
return'"'+s+'"'},
d7(a,b){var s=J.bu(this.x)
this.x=s
return B.mF(s)},
iX(a,b){var s=this.x;(!(s instanceof P.a2)?this.x=new P.a2(H.l(s)):s).a+=b}}
B.R.prototype={
gev(a){var s,r,q,p,o=this.a
if(o==null)return null
s=o.gap(o)
for(r=s.ao(s,this)-1,o=s.a,q=o.length;r>=0;--r){if(r>=q)return H.b(o,r)
p=o[r]
if(p instanceof B.R)return p}return null},
gjL(a){var s,r,q,p,o,n=this.a
if(n==null)return null
s=n.gap(n)
for(r=s.ao(s,this)+1,q=s.a,p=q.length;r<p;++r){if(r<0)return H.b(q,r)
o=q[r]
if(o instanceof B.R)return o}return null},
l(a){var s=A.qn(this.x)
return"<"+(s==null?"":s+" ")+H.l(this.y)+">"},
d7(a,b){var s=this,r=t.K,q=t.N,p=new B.R(s.x,s.y,P.Z(null,null,r,q))
p.sd3(0,P.hb(s.b,r,q))
return s.dO(p,b,t.h)}}
B.dU.prototype={
l(a){return"<!-- "+this.x+" -->"},
d7(a,b){return new B.dU(this.x,P.Z(null,null,t.K,t.N))}}
B.ah.prototype={
p(a,b){t.I.a(b)
b.eA(0)
b.a=this.b
this.bU(0,b)},
U(a,b){var s,r,q,p,o,n,m,l=this.mn(t.hl.a(b))
for(s=H.x(l).h("W<1>"),r=new H.W(l,s),r=new H.N(r,r.gm(r),s.h("N<C.E>")),q=this.b,s=s.h("C.E"),p=t.d;r.n();){o=s.a(r.d)
n=o.a
if(n!=null){m=n.c
if(m==null){m=new B.ah(n,H.a([],p))
if(n.c==null){n.c=m
n=m}else n=H.c(H.aa("nodes"))}else n=m
C.a.a5(n.a,o)}o.a=q}this.lM(0,l)},
bJ(a,b,c){c.eA(0)
c.a=this.b
this.hP(0,b,c)},
d6(a){var s,r
for(s=this.a,r=H.x(s),s=new J.ay(s,s.length,r.h("ay<1>")),r=r.c;s.n();)r.a(s.d).a=null
this.lK(this)},
q(a,b,c){var s,r
t.I.a(c)
s=this.a
r=s.length
if(b<0||b>=r)return H.b(s,b)
s[b].a=null
c.eA(0)
c.a=this.b
this.lL(0,b,c)},
mn(a){var s,r
t.hl.a(a)
s=H.a([],t.d)
for(r=J.K(a);r.n();)C.a.p(s,r.gu())
return s}}
B.fV.prototype={
q(a,b,c){var s,r,q
t.h.a(c)
s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
if(b<0||b>=s.length)return H.b(s,b)
s=s[b]
r=s.a
if(r==null)H.c(P.T("Node must have a parent to replace it."))
r=r.gap(r)
q=s.a
q=q.gap(q)
r.q(0,q.ao(q,s),c)},
sm(a,b){var s=t.v,r=P.i(new H.an(this.a,s),!1,s.h("k.E")).length
if(b>=r)return
else if(b<0)throw H.d(P.a8("Invalid list length",null))
this.pu(0,b,r)},
p(a,b){this.a.p(0,t.h.a(b))},
U(a,b){var s,r,q,p,o,n
for(s=J.K(t.cj.a(b)),r=this.a,q=t.d;s.n();){p=s.gu()
o=p.a
if(o!=null){n=o.c
if(n==null){n=new B.ah(o,H.a([],q))
if(o.c==null){o.c=n
o=n}else o=H.c(H.aa("nodes"))}else o=n
C.a.a5(o.a,p)}p.a=r.b
r.bU(0,p)}},
co(a,b){t.dU.a(b)
throw H.d(P.T("TODO(jacobr): should we impl?"))},
pu(a,b,c){var s=t.v
C.a.bc(C.a.b8(P.i(new H.an(this.a,s),!1,s.h("k.E")),b,c),new B.jh())},
em(a,b,c){var s,r
c.h("0(R)").a(b)
s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
r=H.x(s)
return new H.F(s,r.a_(c).h("1(2)").a(b),r.h("@<1>").a_(c).h("F<1,2>"))},
eH(a,b){var s,r
t.cT.a(b)
s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
r=H.x(s)
return new H.ai(s,r.h("B(1)").a(b),r.h("ai<1>"))},
cC(a,b){var s
t.cT.a(b)
s=t.v
return C.a.cC(P.i(new H.an(this.a,s),!1,s.h("k.E")),b)},
al(a,b){var s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
gai(a){var s=t.v
return P.i(new H.an(this.a,s),!1,s.h("k.E")).length===0},
gm(a){var s=t.v
return P.i(new H.an(this.a,s),!1,s.h("k.E")).length},
j(a,b){var s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
gH(a){var s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
return new J.ay(s,s.length,H.x(s).h("ay<1>"))},
dB(a,b,c){var s=t.v
s=P.i(new H.an(this.a,s),!1,s.h("k.E"))
P.aF(b,c,s.length)
return H.bf(s,b,c,H.x(s).c)},
gar(a){var s=t.v
return C.a.gar(P.i(new H.an(this.a,s),!1,s.h("k.E")))},
gt(a){var s=t.v
return C.a.gt(P.i(new H.an(this.a,s),!1,s.h("k.E")))},
$iP:1,
$im:1}
B.jh.prototype={
$1(a){return t.h.a(a).eA(0)},
$S:42}
B.ib.prototype={}
B.ic.prototype={}
B.id.prototype={}
B.ih.prototype={}
B.ii.prototype={}
B.il.prototype={}
V.jM.prototype={
gaE(){var s=this.y
return s==null?this.y=this.gij():s},
gij(){var s=this,r=s.ch
if(r==null)r=s.ch=new V.bw(s,s.d)
return r},
gi3(){var s=this,r=s.cx
if(r==null)r=s.cx=new V.fG(s,s.d)
return r},
gmc(){var s=this,r=s.cy
if(r==null)r=s.cy=new V.dP(s,s.d)
return r},
gc7(){var s=this,r=s.db
if(r==null)r=s.db=new V.h1(s,s.d)
return r},
gaa(){var s=this,r=s.dy
if(r==null)r=s.dy=new V.d7(s,s.d)
return r},
giG(){var s=this,r=s.fr
if(r==null)r=s.fr=new V.hP(s,s.d)
return r},
gaI(){var s=this,r=s.fx
if(r==null)r=s.fx=new V.ed(s,s.d)
return r},
gdR(){var s=this,r=s.fy
if(r==null){r=new V.d9(H.a([],t.ks),s,s.d)
if(s.fy==null)s.fy=r
else r=H.c(H.aa("_inTableTextPhase"))}return r},
gie(){var s=this,r=s.go
if(r==null)r=s.go=new V.e8(s,s.d)
return r},
gih(){var s=this,r=s.id
if(r==null)r=s.id=new V.e9(s,s.d)
return r},
gfg(){var s=this,r=s.k1
if(r==null)r=s.k1=new V.cH(s,s.d)
return r},
gff(){var s=this,r=s.k2
if(r==null)r=s.k2=new V.eb(s,s.d)
return r},
gig(){var s=this,r=s.k3
if(r==null)r=s.k3=new V.d8(s,s.d)
return r},
gc8(){var s=this,r=s.k4
if(r==null)r=s.k4=new V.ec(s,s.d)
return r},
gii(){var s=this,r=s.ry
if(r==null)r=s.ry=new V.ea(s,s.d)
return r},
mt(){var s
this.br(0)
for(;!0;)try{this.oO()
break}catch(s){if(H.aK(s) instanceof A.km)this.br(0)
else throw s}},
br(a){var s=this
s.c.br(0)
s.d.br(0)
s.f=!1
C.a.sm(s.e,0)
s.r="no quirks"
s.y=s.gij()
s.Q=!0},
jE(a){var s,r,q=a.y
if(q==="annotation-xml"&&a.x==="http://www.w3.org/1998/Math/MathML"){q=a.b.j(0,"encoding")
if(q==null)s=null
else{r=t.E
s=P.ad(new H.F(new H.a9(q),r.h("j(w.E)").a(A.bS()),r.h("F<w.E,j>")),0,null)}return s==="text/html"||s==="application/xhtml+xml"}else return C.a.G(C.bx,new B.p(a.x,q,t.iA))},
oB(a,b){var s,r=this.d,q=r.c
if(q.length===0)return!1
s=C.a.gt(q)
q=s.x
if(q==r.a)return!1
r=s.y
if(C.a.G(C.aa,new B.p(q,r,t.iA))){if(b===2){q=t.ny.a(a).b
q=q!=="mglyph"&&q!=="malignmark"}else q=!1
if(q)return!1
if(b===1||b===0)return!1}if(r==="annotation-xml"&&b===2&&t.ny.a(a).b==="svg")return!1
if(this.jE(s))if(b===2||b===1||b===0)return!1
return!0},
oO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
for(s=a3.c,r=a3.d,q=t.i,p=t.cw,o=t.ia,n=t.ny,m=t.lH,l=t.g4,k=a3.e,j=t.jK,i=s.a,h=t.z;s.n();){g=s.cy
g.toString
for(f=g;f!=null;){e=f.gce(f)
if(e===6){j.a(f)
d=f.a
c=f.c
if(c==null){c=f.c=J.bu(f.b)
f.b=null}if(d==null){b=i.x
if(b==null)d=null
else{a=i.z
new Y.b6(b,a).bj(b,a)
d=new Y.ap(b,a,a)
d.aH(b,a,a)}}C.a.p(k,new V.aZ(c,d,f.e))
f=null}else{a0=a3.y
if(a0==null){c=a3.ch
if(c==null){c=new V.bw(a3,r)
a3.ch=c
a0=c}else a0=c
a3.y=a0}if(a3.oB(g,e)){a0=a3.r2
if(a0==null){a0=new V.h0(a3,r)
a3.r2=a0}}switch(e){case 1:f=a0.a4(l.a(f))
break
case 0:f=a0.aJ(m.a(f))
break
case 2:f=a0.K(n.a(f))
break
case 3:f=a0.S(o.a(f))
break
case 4:f=a0.ci(p.a(f))
break
case 5:f=a0.jQ(q.a(f))
break}}}if(g instanceof T.cf)if(g.c&&!g.r){d=g.a
g=P.A(["name",g.b],h,h)
if(d==null){c=i.x
if(c==null)d=null
else{b=i.z
new Y.b6(c,b).bj(c,b)
d=new Y.ap(c,b,b)
d.aH(c,b,b)}}C.a.p(k,new V.aZ("non-void-element-with-trailing-solidus",d,g))}}a1=H.a([],t.gg)
for(a2=!0;a2;){s=a3.y
if(s==null){s=a3.ch
if(s==null){s=new V.bw(a3,r)
a3.ch=s}s=a3.y=s}C.a.p(a1,s)
s=a3.y
if(s==null){s=a3.ch
if(s==null){s=new V.bw(a3,r)
a3.ch=s}s=a3.y=s}a2=s.ad()}},
gip(){var s=this.c.a,r=s.x
if(r==null)s=null
else{s=Y.c8(r,s.z)
r=s.b
r=Y.mK(s.a,r,r)
s=r}return s},
F(a,b,c){var s=new V.aZ(b,a==null?this.gip():a,c)
C.a.p(this.e,s)},
a3(a,b){return this.F(a,b,C.ag)},
iP(a){var s=a.e.a5(0,"definitionurl")
if(s!=null)a.e.q(0,"definitionURL",s)},
iQ(a){var s,r,q,p,o,n
for(s=a.e.gaD(),s=P.i(s,!1,H.D(s).h("k.E")),r=s.length,q=0;q<r;++q){p=H.av(s[q])
o=C.ca.j(0,p)
if(o!=null){n=a.e
p=n.a5(0,p)
p.toString
n.q(0,o,p)}}},
fo(a){var s,r,q,p,o,n
for(s=a.e.gaD(),s=P.i(s,!1,H.D(s).h("k.E")),r=s.length,q=0;q<r;++q){p=H.av(s[q])
o=C.c8.j(0,p)
if(o!=null){n=a.e
p=n.a5(0,p)
p.toString
n.q(0,o,p)}}},
jZ(){var s,r,q,p,o,n,m,l,k=this
for(s=k.d,r=s.c,q=H.x(r).h("W<1>"),p=new H.W(r,q),p=new H.N(p,p.gm(p),q.h("N<C.E>")),q=q.h("C.E"),o=s.a;p.n();){n=q.a(p.d)
m=n.y
if(0>=r.length)return H.b(r,0)
l=n===r[0]
if(l)m=k.x
switch(m){case"select":case"colgroup":case"head":case"html":break}if(!l&&n.x!=o)continue
switch(m){case"select":r=k.k4
if(r==null){r=k.k4=new V.ec(k,s)
s=r}else s=r
k.y=s
return
case"td":r=k.k3
if(r==null){r=k.k3=new V.d8(k,s)
s=r}else s=r
k.y=s
return
case"th":r=k.k3
if(r==null){r=k.k3=new V.d8(k,s)
s=r}else s=r
k.y=s
return
case"tr":r=k.k2
if(r==null){r=k.k2=new V.eb(k,s)
s=r}else s=r
k.y=s
return
case"tbody":r=k.k1
if(r==null){r=k.k1=new V.cH(k,s)
s=r}else s=r
k.y=s
return
case"thead":r=k.k1
if(r==null){r=k.k1=new V.cH(k,s)
s=r}else s=r
k.y=s
return
case"tfoot":r=k.k1
if(r==null){r=k.k1=new V.cH(k,s)
s=r}else s=r
k.y=s
return
case"caption":r=k.go
if(r==null){r=k.go=new V.e8(k,s)
s=r}else s=r
k.y=s
return
case"colgroup":r=k.id
if(r==null){r=k.id=new V.e9(k,s)
s=r}else s=r
k.y=s
return
case"table":r=k.fx
if(r==null){r=k.fx=new V.ed(k,s)
s=r}else s=r
k.y=s
return
case"head":r=k.dy
if(r==null){r=k.dy=new V.d7(k,s)
s=r}else s=r
k.y=s
return
case"body":r=k.dy
if(r==null){r=k.dy=new V.d7(k,s)
s=r}else s=r
k.y=s
return
case"frameset":r=k.ry
if(r==null){r=k.ry=new V.ea(k,s)
s=r}else s=r
k.y=s
return
case"html":r=k.cy
if(r==null){r=k.cy=new V.dP(k,s)
s=r}else s=r
k.y=s
return}}k.y=k.gaa()},
dm(a,b){var s,r,q=this
q.d.P(a)
s=t.c
r=q.c
if(b==="RAWTEXT")r.si(s.a(r.gey()))
else r.si(s.a(r.gcO()))
q.z=q.gaE()
q.y=q.giG()}}
V.a7.prototype={
ad(){throw H.d(P.hV(null))},
ci(a){var s=this.b
s.cF(a,C.a.gt(s.c))
return null},
jQ(a){this.a.a3(a.a,"unexpected-doctype")
return null},
a4(a){this.b.c2(a.gaB(a),a.a)
return null},
aJ(a){this.b.c2(a.gaB(a),a.a)
return null},
K(a){throw H.d(P.hV(null))},
bi(a){var s,r=this.a
if(!r.f&&a.b==="html")r.a3(a.a,"non-html-root")
s=this.b.c
if(0>=s.length)return H.b(s,0)
s[0].e=a.a
a.e.bc(0,new V.ki(this))
r.f=!1
return null},
S(a){throw H.d(P.hV(null))},
cL(a){var s,r=a.b,q=this.b.c
if(0>=q.length)return H.b(q,-1)
s=q.pop()
for(;s.y!=r;){if(0>=q.length)return H.b(q,-1)
s=q.pop()}}}
V.ki.prototype={
$2(a,b){var s
t.K.a(a)
H.av(b)
s=this.a.b.c
if(0>=s.length)return H.b(s,0)
s[0].b.ex(a,new V.kh(b))},
$S:31}
V.kh.prototype={
$0(){return this.a},
$S:7}
V.bw.prototype={
aJ(a){return null},
ci(a){var s=this.b
s.cF(a,s.gbE(s))
return null},
jQ(a){var s,r,q,p,o,n=this,m=null,l=a.d,k=a.b
if(k==null)s=m
else{r=t.E
s=P.ad(new H.F(new H.a9(k),r.h("j(w.E)").a(A.bS()),r.h("F<w.E,j>")),0,m)}q=a.c
p=a.e
if(l==="html")if(s==null)k=q!=null&&q!=="about:legacy-compat"
else k=!0
else k=!0
if(k)n.a.a3(a.a,"unknown-doctype")
if(s==null)s=""
k=n.b
o=new B.dW(a.d,a.b,a.c,P.Z(m,m,t.K,t.N))
o.e=a.a
k=k.gbE(k)
k.gap(k).p(0,o)
if(p)if(a.d==="html"){k=C.b.ghN(s)
if(!C.a.b2(C.be,k))if(!C.a.G(C.bs,s))if(!(C.a.b2(C.a9,k)&&q==null))k=q!=null&&q.toLowerCase()==="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"
else k=!0
else k=!0
else k=!0}else k=!0
else k=!0
if(k)n.a.r="quirks"
else{k=C.b.ghN(s)
if(!C.a.b2(C.by,k))k=C.a.b2(C.a9,k)&&q!=null
else k=!0
if(k)n.a.r="limited quirks"}k=n.a
k.y=k.gi3()
return m},
bC(){var s=this.a
s.r="quirks"
s.y=s.gi3()},
a4(a){this.a.a3(a.a,"expected-doctype-but-got-chars")
this.bC()
return a},
K(a){var s=t.z
this.a.F(a.a,"expected-doctype-but-got-start-tag",P.A(["name",a.b],s,s))
this.bC()
return a},
S(a){var s=t.z
this.a.F(a.a,"expected-doctype-but-got-end-tag",P.A(["name",a.b],s,s))
this.bC()
return a},
ad(){var s=this.a
s.a3(s.gip(),"expected-doctype-but-got-eof")
this.bC()
return!0}}
V.fG.prototype={
ej(){var s=this.b,r=s.jh(0,T.aI("html",P.Z(null,null,t.K,t.N),null,!1))
C.a.p(s.c,r)
s=s.gbE(s)
s.gap(s).p(0,r)
s=this.a
s.y=s.gmc()},
ad(){this.ej()
return!0},
ci(a){var s=this.b
s.cF(a,s.gbE(s))
return null},
aJ(a){return null},
a4(a){this.ej()
return a},
K(a){if(a.b==="html")this.a.f=!0
this.ej()
return a},
S(a){var s,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.ej()
return a
default:s=t.z
this.a.F(a.a,"unexpected-end-tag-before-html",P.A(["name",r],s,s))
return null}}}
V.dP.prototype={
K(a){var s=null
switch(a.b){case"html":return this.a.gaa().K(a)
case"head":this.cV(a)
return s
default:this.cV(T.aI("head",P.Z(s,s,t.K,t.N),s,!1))
return a}},
S(a){var s,r=null,q=a.b
switch(q){case"head":case"body":case"html":case"br":this.cV(T.aI("head",P.Z(r,r,t.K,t.N),r,!1))
return a
default:s=t.z
this.a.F(a.a,"end-tag-after-implied-root",P.A(["name",q],s,s))
return r}},
ad(){this.cV(T.aI("head",P.Z(null,null,t.K,t.N),null,!1))
return!0},
aJ(a){return null},
a4(a){this.cV(T.aI("head",P.Z(null,null,t.K,t.N),null,!1))
return a},
cV(a){var s=this.b
s.P(a)
s.soy(C.a.gt(s.c))
s=this.a
s.y=s.gc7()}}
V.h1.prototype={
K(a){var s,r,q,p,o,n=this,m=null
switch(a.b){case"html":return n.a.gaa().K(a)
case"title":n.a.dm(a,"RCDATA")
return m
case"noscript":case"noframes":case"style":n.a.dm(a,"RAWTEXT")
return m
case"script":n.b.P(a)
s=n.a
r=s.c
r.si(t.c.a(r.gbR()))
s.z=s.gaE()
s.y=s.giG()
return m
case"base":case"basefont":case"bgsound":case"command":case"link":s=n.b
s.P(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
a.r=!0
return m
case"meta":s=n.b
s.P(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
a.r=!0
q=a.e
s=n.a.c.a
if(!s.b){p=q.j(0,"charset")
o=q.j(0,"content")
if(p!=null)s.j4(p)
else if(o!=null)s.j4(new K.j9(new K.jf(o)).oZ())}return m
case"head":n.a.a3(a.a,"two-heads-are-not-better-than-one")
return m
default:n.dc(new T.L("head",!1))
return a}},
S(a){var s,r=a.b
switch(r){case"head":this.dc(a)
return null
case"br":case"html":case"body":this.dc(new T.L("head",!1))
return a
default:s=t.z
this.a.F(a.a,"unexpected-end-tag",P.A(["name",r],s,s))
return null}},
ad(){this.dc(new T.L("head",!1))
return!0},
a4(a){this.dc(new T.L("head",!1))
return a},
dc(a){var s=this.a,r=s.d,q=r.c
if(0>=q.length)return H.b(q,-1)
q.pop()
q=s.dx
if(q==null)r=s.dx=new V.fv(s,r)
else r=q
s.y=r}}
V.fv.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.a.gaa().K(a)
case"body":p=r.a
p.Q=!1
r.b.P(a)
p.y=p.gaa()
return q
case"frameset":r.b.P(a)
p=r.a
p.y=p.gii()
return q
case"base":case"basefont":case"bgsound":case"link":case"meta":case"noframes":case"script":case"style":case"title":r.lp(a)
return q
case"head":s=t.z
r.a.F(a.a,"unexpected-start-tag",P.A(["name",p],s,s))
return q
default:r.bC()
return a}},
S(a){var s,r=a.b
switch(r){case"body":case"html":case"br":this.bC()
return a
default:s=t.z
this.a.F(a.a,"unexpected-end-tag",P.A(["name",r],s,s))
return null}},
ad(){this.bC()
return!0},
a4(a){this.bC()
return a},
lp(a){var s,r,q=this.a,p=t.z
q.F(a.a,"unexpected-start-tag-out-of-my-head",P.A(["name",a.b],p,p))
p=this.b
s=p.c
C.a.p(s,t.h.a(p.e))
q.gc7().K(a)
for(q=H.x(s).h("W<1>"),p=new H.W(s,q),p=new H.N(p,p.gm(p),q.h("N<C.E>")),q=q.h("C.E");p.n();){r=q.a(p.d)
if(r.y==="head"){C.a.a5(s,r)
break}}},
bC(){this.b.P(T.aI("body",P.Z(null,null,t.K,t.N),null,!1))
var s=this.a
s.y=s.gaa()
s.Q=!0}}
V.d7.prototype={
K(a){var s,r,q,p,o,n=this,m=null,l="p",k="button",j="unexpected-start-tag",i="unexpected-start-tag-implies-end-tag",h="RAWTEXT",g=a.b
switch(g){case"html":return n.bi(a)
case"base":case"basefont":case"bgsound":case"command":case"link":case"meta":case"noframes":case"script":case"style":case"title":return n.a.gc7().K(a)
case"body":n.lm(a)
return m
case"frameset":n.lo(a)
return m
case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":n.hH(a)
return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":g=n.b
if(g.a2(l,k))n.bF(new T.L(l,!1))
s=g.c
if(C.a.G(C.D,C.a.gt(s).y)){r=t.z
n.a.F(a.a,j,P.A(["name",a.b],r,r))
if(0>=s.length)return H.b(s,-1)
s.pop()}g.P(a)
return m
case"pre":case"listing":g=n.b
if(g.a2(l,k))n.bF(new T.L(l,!1))
g.P(a)
n.a.Q=!1
n.c=!0
return m
case"form":g=n.b
if(g.f!=null){g=t.z
n.a.F(a.a,j,P.A(["name","form"],g,g))}else{if(g.a2(l,k))n.bF(new T.L(l,!1))
g.P(a)
g.sjw(C.a.gt(g.c))}return m
case"li":case"dd":case"dt":n.ls(a)
return m
case"plaintext":g=n.b
if(g.a2(l,k))n.bF(new T.L(l,!1))
g.P(a)
g=n.a.c
g.si(t.c.a(g.gp1()))
return m
case"a":g=n.b
q=g.jl("a")
if(q!=null){s=t.z
n.a.F(a.a,i,P.A(["startName","a","endName","a"],s,s))
n.jn(new T.L("a",!1))
C.a.a5(g.c,q)
C.a.a5(g.d.a,q)}g.aF()
n.fn(a)
return m
case"b":case"big":case"code":case"em":case"font":case"i":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.b.aF()
n.fn(a)
return m
case"nobr":g=n.b
g.aF()
if(g.b3("nobr")){s=t.z
n.a.F(a.a,i,P.A(["startName","nobr","endName","nobr"],s,s))
n.S(new T.L("nobr",!1))
g.aF()}n.fn(a)
return m
case"button":return n.ln(a)
case"applet":case"marquee":case"object":g=n.b
g.aF()
g.P(a)
g.d.p(0,m)
n.a.Q=!1
return m
case"xmp":g=n.b
if(g.a2(l,k))n.bF(new T.L(l,!1))
g.aF()
g=n.a
g.Q=!1
g.dm(a,h)
return m
case"table":g=n.a
if(g.r!=="quirks")if(n.b.a2(l,k))n.S(new T.L(l,!1))
n.b.P(a)
g.Q=!1
g.y=g.gaI()
return m
case"area":case"br":case"embed":case"img":case"keygen":case"wbr":n.hM(a)
return m
case"param":case"source":case"track":g=n.b
g.P(a)
g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0
return m
case"input":g=n.a
p=g.Q
n.hM(a)
s=a.e.j(0,"type")
if(s==null)s=m
else{r=t.E
r=P.ad(new H.F(new H.a9(s),r.h("j(w.E)").a(A.bS()),r.h("F<w.E,j>")),0,m)
s=r}if(s==="hidden")g.Q=p
return m
case"hr":g=n.b
if(g.a2(l,k))n.bF(new T.L(l,!1))
g.P(a)
g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0
n.a.Q=!1
return m
case"image":g=t.z
n.a.F(a.a,"unexpected-start-tag-treated-as",P.A(["originalName","image","newName","img"],g,g))
n.K(T.aI("img",a.e,m,a.c))
return m
case"isindex":n.lr(a)
return m
case"textarea":n.b.P(a)
g=n.a
s=g.c
s.si(t.c.a(s.gcO()))
n.c=!0
g.Q=!1
return m
case"iframe":g=n.a
g.Q=!1
g.dm(a,h)
return m
case"noembed":case"noscript":n.a.dm(a,h)
return m
case"select":g=n.b
g.aF()
g.P(a)
g=n.a
g.Q=!1
if(g.gaI()===g.gaE()||g.gie()===g.gaE()||g.gih()===g.gaE()||g.gfg()===g.gaE()||g.gff()===g.gaE()||g.gig()===g.gaE()){s=g.r1
if(s==null)s=g.r1=new V.h2(g,g.d)
g.y=s}else g.y=g.gc8()
return m
case"rp":case"rt":g=n.b
if(g.b3("ruby")){g.cm()
o=C.a.gt(g.c)
if(o.y!=="ruby")n.a.a3(o.e,"undefined-error")}g.P(a)
return m
case"option":case"optgroup":g=n.b
if(C.a.gt(g.c).y==="option")n.a.gaE().S(new T.L("option",!1))
g.aF()
n.a.d.P(a)
return m
case"math":g=n.b
g.aF()
s=n.a
s.iP(a)
s.fo(a)
a.x="http://www.w3.org/1998/Math/MathML"
g.P(a)
if(a.c){g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0}return m
case"svg":g=n.b
g.aF()
s=n.a
s.iQ(a)
s.fo(a)
a.x="http://www.w3.org/2000/svg"
g.P(a)
if(a.c){g=g.c
if(0>=g.length)return H.b(g,-1)
g.pop()
a.r=!0}return m
case"caption":case"col":case"colgroup":case"frame":case"head":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
n.a.F(a.a,"unexpected-start-tag-ignored",P.A(["name",g],s,s))
return m
default:g=n.b
g.aF()
g.P(a)
return m}},
S(a){var s,r,q,p,o,n=this,m=null,l="end-tag-too-early",k="unexpected-end-tag",j=a.b
switch(j){case"body":n.jm(a)
return m
case"html":return n.fM(a)
case"address":case"article":case"aside":case"blockquote":case"button":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"listing":case"menu":case"nav":case"ol":case"pre":case"section":case"summary":case"ul":if(j==="pre")n.c=!1
s=n.b
r=s.b3(j)
if(r)s.cm()
j=C.a.gt(s.c).y
s=a.b
if(j!=s){j=t.z
n.a.F(a.a,l,P.A(["name",s],j,j))}if(r)n.cL(a)
return m
case"form":j=n.b
q=j.f
j.f=null
if(q==null||!j.b3(q)){j=t.z
n.a.F(a.a,k,P.A(["name","form"],j,j))}else{j.cm()
j=j.c
if(!J.V(C.a.gt(j),q)){s=t.z
n.a.F(a.a,"end-tag-too-early-ignored",P.A(["name","form"],s,s))}C.a.a5(j,q)}return m
case"p":n.bF(a)
return m
case"dd":case"dt":case"li":p=j==="li"?"list":m
s=n.b
j=s.a2(j,p)
o=a.b
if(!j){j=t.z
n.a.F(a.a,k,P.A(["name",o],j,j))}else{s.c5(o)
j=C.a.gt(s.c).y
s=a.b
if(j!=s){j=t.z
n.a.F(a.a,l,P.A(["name",s],j,j))}n.cL(a)}return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":n.o0(a)
return m
case"a":case"b":case"big":case"code":case"em":case"font":case"i":case"nobr":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.jn(a)
return m
case"applet":case"marquee":case"object":s=n.b
if(s.b3(j))s.cm()
j=C.a.gt(s.c).y
o=a.b
if(j!=o){j=t.z
n.a.F(a.a,l,P.A(["name",o],j,j))}if(s.b3(a.b)){n.cL(a)
s.fA()}return m
case"br":j=t.z
n.a.F(a.a,"unexpected-end-tag-treated-as",P.A(["originalName","br","newName","br element"],j,j))
j=n.b
j.aF()
j.P(T.aI("br",P.Z(m,m,t.K,t.N),m,!1))
j=j.c
if(0>=j.length)return H.b(j,-1)
j.pop()
return m
default:n.o2(a)
return m}},
oJ(a,b){var s,r
if(a.y!=b.y||a.x!=b.x)return!1
else{s=a.b
s=s.gm(s)
r=b.b
if(s!==r.gm(r))return!1
else for(s=a.b.gaD(),s=s.gH(s);s.n();){r=s.gu()
if(!J.V(a.b.j(0,r),b.b.j(0,r)))return!1}}return!0},
fn(a){var s,r,q,p,o,n,m=this.b
m.P(a)
s=C.a.gt(m.c)
r=H.a([],t.hg)
for(m=m.d,q=H.D(m).h("W<w.E>"),p=new H.W(m,q),p=new H.N(p,p.gm(p),q.h("N<C.E>")),o=t.h,q=q.h("C.E");p.n();){n=q.a(p.d)
if(n==null)break
else{o.a(n)
if(this.oJ(n,s))C.a.p(r,n)}}if(r.length===3)C.a.a5(m.a,C.a.gt(r))
m.p(0,s)},
ad(){var s,r,q,p
for(s=this.b.c,r=H.x(s).h("W<1>"),s=new H.W(s,r),s=new H.N(s,s.gm(s),r.h("N<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
switch(q.y){case"dd":case"dt":case"li":case"p":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}s=this.a
p=q.e
if(p==null){r=s.c.a
q=r.x
if(q==null)p=null
else{r=r.z
new Y.b6(q,r).bj(q,r)
p=new Y.ap(q,r,r)
p.aH(q,r,r)}}C.a.p(s.e,new V.aZ("expected-closing-tag-but-got-eof",p,C.ag))
break}return!1},
a4(a){var s
if(a.gaB(a)==="\x00")return null
s=this.b
s.aF()
s.c2(a.gaB(a),a.a)
s=this.a
if(s.Q&&!B.n1(a.gaB(a)))s.Q=!1
return null},
aJ(a){var s,r,q,p=this
if(p.c){s=a.gaB(a)
r=p.c=!1
if(C.b.a1(s,"\n")){q=C.a.gt(p.b.c)
if(C.a.G(C.bz,q.y)){r=q.gap(q)
r=r.gai(r)}if(r)s=C.b.aw(s,1)}if(s.length!==0){r=p.b
r.aF()
r.c2(s,a.a)}}else{r=p.b
r.aF()
r.c2(a.gaB(a),a.a)}return null},
lm(a){var s,r=this.a,q=t.z
r.F(a.a,"unexpected-start-tag",P.A(["name","body"],q,q))
q=this.b.c
s=q.length
if(s!==1){if(1>=s)return H.b(q,1)
q=q[1].y!=="body"}else q=!0
if(!q){r.Q=!1
a.e.bc(0,new V.jQ(this))}},
lo(a){var s,r,q,p=this.a,o=t.z
p.F(a.a,"unexpected-start-tag",P.A(["name","frameset"],o,o))
o=this.b
s=o.c
r=s.length
if(r!==1){if(1>=r)return H.b(s,1)
q=s[1].y!=="body"}else q=!0
if(!q)if(p.Q){if(1>=r)return H.b(s,1)
r=s[1].a
if(r!=null){r=r.gap(r)
if(1>=s.length)return H.b(s,1)
C.a.a5(r.a,s[1])}for(;C.a.gt(s).y!=="html";){if(0>=s.length)return H.b(s,-1)
s.pop()}o.P(a)
p.y=p.gii()}},
hH(a){var s=this.b
if(s.a2("p","button"))this.bF(new T.L("p",!1))
s.P(a)},
ls(a){var s,r,q,p,o,n,m,l,k=this.a
k.Q=!1
s=a.b
s.toString
s=C.cM.j(0,s)
s.toString
for(r=this.b,q=r.c,p=H.x(q).h("W<1>"),q=new H.W(q,p),q=new H.N(q,q.gm(q),p.h("N<C.E>")),o=t.X,p=p.h("C.E");q.n();){n=p.a(q.d)
m=n.y
if(C.a.G(s,m)){s=k.y
if(s==null){s=k.ch
if(s==null){s=new V.bw(k,k.d)
k.ch=s}s=k.y=s}s.S(new T.L(m,!1))
break}l=n.x
if(C.a.G(C.S,new B.p(l==null?"http://www.w3.org/1999/xhtml":l,m,o))&&!C.a.G(C.bk,m))break}if(r.a2("p","button"))k.gaE().S(new T.L("p",!1))
r.P(a)},
ln(a){var s=this.b,r=this.a
if(s.b3("button")){s=t.z
r.F(a.a,"unexpected-start-tag-implies-end-tag",P.A(["startName","button","endName","button"],s,s))
this.S(new T.L("button",!1))
return a}else{s.aF()
s.P(a)
r.Q=!1}return null},
hM(a){var s=this.b
s.aF()
s.P(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
a.r=!0
this.a.Q=!1},
lr(a){var s,r,q,p,o,n=this,m=null,l="action",k=t.z
n.a.F(a.a,"deprecated-tag",P.A(["name","isindex"],k,k))
if(n.b.f!=null)return
k=t.K
s=t.N
r=P.Z(m,m,k,s)
q=a.e.j(0,l)
if(q!=null)r.q(0,l,q)
n.K(T.aI("form",r,m,!1))
n.K(T.aI("hr",P.Z(m,m,k,s),m,!1))
n.K(T.aI("label",P.Z(m,m,k,s),m,!1))
p=a.e.j(0,"prompt")
if(p==null)p="This is a searchable index. Enter search keywords: "
n.a4(new T.E(m,p))
o=P.hb(a.e,k,s)
o.a5(0,l)
o.a5(0,"prompt")
o.q(0,"name","isindex")
n.K(T.aI("input",o,m,a.c))
n.S(new T.L("label",!1))
n.K(T.aI("hr",P.Z(m,m,k,s),m,!1))
n.S(new T.L("form",!1))},
bF(a){var s=this,r="unexpected-end-tag",q=s.b
if(!q.a2("p","button")){s.hH(T.aI("p",P.Z(null,null,t.K,t.N),null,!1))
q=t.z
s.a.F(a.a,r,P.A(["name","p"],q,q))
s.bF(new T.L("p",!1))}else{q.c5("p")
if(C.a.gt(q.c).y!=="p"){q=t.z
s.a.F(a.a,r,P.A(["name","p"],q,q))}s.cL(a)}},
jm(a){var s,r,q,p,o,n=this,m=n.b
if(!m.b3("body")){n.a.a3(a.a,"undefined-error")
return}else{m=m.c
if(C.a.gt(m).y==="body")C.a.gt(m)
else for(m=B.nf(m,2,null,t.h),s=m.length,r=0;r<s;++r){q=m[r].y
switch(q){case"dd":case"dt":case"li":case"optgroup":case"option":case"p":case"rp":case"rt":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}m=n.a
p=a.a
s=t.z
s=P.A(["gotName","body","expectedName",q],s,s)
if(p==null){q=m.c.a
o=q.x
if(o==null)p=null
else{q=q.z
new Y.b6(o,q).bj(o,q)
p=new Y.ap(o,q,q)
p.aH(o,q,q)}}C.a.p(m.e,new V.aZ("expected-one-end-tag-but-got-another",p,s))
break}}m=n.a
s=m.rx
if(s==null)s=m.rx=new V.ft(m,m.d)
m.y=s},
fM(a){if(this.b.b3("body")){this.jm(new T.L("body",!1))
return a}return null},
o0(a){var s,r,q,p,o,n,m
for(s=this.b,r=0;r<6;++r)if(s.b3(C.D[r])){q=s.c
p=C.a.gt(q).y
if(p!=null&&C.a.G(C.P,p)){if(0>=q.length)return H.b(q,-1)
q.pop()
s.c5(null)}break}q=s.c
o=C.a.gt(q).y
n=a.b
if(o!=n){o=t.z
this.a.F(a.a,"end-tag-too-early",P.A(["name",n],o,o))}for(r=0;r<6;++r)if(s.b3(C.D[r])){if(0>=q.length)return H.b(q,-1)
m=q.pop()
for(;!C.a.G(C.D,m.y);){if(0>=q.length)return H.b(q,-1)
m=q.pop()}break}},
jn(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6="nodes"
for(s=this.b,r=s.d,q=r.a,p=H.D(r).h("aY.E"),o=s.c,n=t.K,m=t.N,l=t.h,k=t.d,j=t.X,i=this.a,h=t.z,g=i.c.a,i=i.e,f=0;f<8;){++f
e=s.jl(b7.b)
if(e!=null)d=C.a.G(o,e)&&!s.b3(e.y)
else d=!0
if(d){c=b7.a
s=P.A(["name",b7.b],h,h)
if(c==null){r=g.x
if(r==null)c=b5
else{q=g.z
new Y.b6(r,q).bj(r,q)
c=new Y.ap(r,q,q)
c.aH(r,q,q)}}C.a.p(i,new V.aZ("adoption-agency-1.1",c,s))
return}else if(!C.a.G(o,e)){c=b7.a
s=P.A(["name",b7.b],h,h)
if(c==null){r=g.x
if(r==null)c=b5
else{p=g.z
new Y.b6(r,p).bj(r,p)
c=new Y.ap(r,p,p)
c.aH(r,p,p)}}C.a.p(i,new V.aZ("adoption-agency-1.2",c,s))
C.a.a5(q,e)
return}d=C.a.gt(o)
if(e==null?d!=null:e!==d){c=b7.a
d=P.A(["name",b7.b],h,h)
if(c==null){b=g.x
if(b==null)c=b5
else{a=g.z
new Y.b6(b,a).bj(b,a)
c=new Y.ap(b,a,a)
c.aH(b,a,a)}}C.a.p(i,new V.aZ("adoption-agency-1.3",c,d))}a0=C.a.ao(o,e)
d=B.nf(o,a0,b5,l)
b=d.length
a2=0
while(!0){if(!(a2<d.length)){a1=b5
break}a3=d[a2]
a4=a3.x
if(a4==null)a4="http://www.w3.org/1999/xhtml"
if(C.a.G(C.S,new B.p(a4,a3.y,j))){a1=a3
break}d.length===b||(0,H.f)(d);++a2}if(a1==null){if(0>=o.length)return H.b(o,-1)
a3=o.pop()
for(;a3!==e;){if(0>=o.length)return H.b(o,-1)
a3=o.pop()}C.a.a5(q,a3)
return}d=a0-1
if(d<0||d>=o.length)return H.b(o,d)
a5=o[d]
a6=r.ao(r,e)
a7=C.a.ao(o,a1)
for(a8=a1,a9=0;a9<3;){++a9;--a7
if(a7<0||a7>=o.length)return H.b(o,a7)
b0=o[a7]
if(!r.G(r,b0)){C.a.a5(o,b0)
continue}if(b0===e)break
if(a8===a1)a6=r.ao(r,b0)+1
d=b0.y
b1=new B.R(b0.x,d,P.Z(b5,b5,n,m))
b1.sd3(0,P.hb(b0.b,n,m))
b2=b0.dO(b1,!1,l)
C.a.q(q,r.ao(r,b0),p.a(b2))
C.a.q(o,C.a.ao(o,b0),b2)
d=a8.a
if(d!=null){b=d.c
if(b==null){b=new B.ah(d,H.a([],k))
if(d.c==null){d.c=b
d=b}else d=H.c(H.aa(b6))}else d=b
C.a.a5(d.a,a8)}d=b2.c
if(d==null){d=new B.ah(b2,H.a([],k))
if(b2.c==null)b2.c=d
else d=H.c(H.aa(b6))}b=a8.a
if(b!=null){a=b.c
if(a==null){a=new B.ah(b,H.a([],k))
if(b.c==null){b.c=a
b=a}else b=H.c(H.aa(b6))}else b=a
C.a.a5(b.a,a8)}a8.a=d.b
d.bU(0,a8)
a8=b2}d=a8.a
if(d!=null){b=d.c
if(b==null){b=new B.ah(d,H.a([],k))
if(d.c==null){d.c=b
d=b}else d=H.c(H.aa(b6))}else d=b
C.a.a5(d.a,a8)}if(C.a.G(C.Q,a5.y)){b3=s.eQ()
d=b3[0]
b=b3[1]
a=d.c
if(b==null){if(a==null){b=new B.ah(d,H.a([],k))
if(d.c==null){d.c=b
d=b}else d=H.c(H.aa(b6))}else d=a
b=a8.a
if(b!=null){a=b.c
if(a==null){a=new B.ah(b,H.a([],k))
if(b.c==null){b.c=a
b=a}else b=H.c(H.aa(b6))}else b=a
C.a.a5(b.a,a8)}a8.a=d.b
d.bU(0,a8)}else{if(a==null){a=new B.ah(d,H.a([],k))
if(d.c==null){d.c=a
d=a}else d=H.c(H.aa(b6))}else d=a
b=a.ao(a,b)
a=a8.a
if(a!=null){b4=a.c
if(b4==null){b4=new B.ah(a,H.a([],k))
if(a.c==null){a.c=b4
a=b4}else a=H.c(H.aa(b6))}else a=b4
C.a.a5(a.a,a8)}a8.a=d.b
d.hP(0,b,a8)}}else{d=a5.c
if(d==null){d=new B.ah(a5,H.a([],k))
if(a5.c==null)a5.c=d
else d=H.c(H.aa(b6))}b=a8.a
if(b!=null){a=b.c
if(a==null){a=new B.ah(b,H.a([],k))
if(b.c==null){b.c=a
b=a}else b=H.c(H.aa(b6))}else b=a
C.a.a5(b.a,a8)}a8.a=d.b
d.bU(0,a8)}d=e.y
b1=new B.R(e.x,d,P.Z(b5,b5,n,m))
b1.sd3(0,P.hb(e.b,n,m))
d=e.dO(b1,!1,l)
b=d.c
if(b==null){b=new B.ah(d,H.a([],k))
if(d.c==null)d.c=b
else b=H.c(H.aa(b6))}a=a1.c
if(a==null){a=new B.ah(a1,H.a([],k))
if(a1.c==null)a1.c=a
else a=H.c(H.aa(b6))}b.U(0,a)
a=a1.c
if(a==null){b=new B.ah(a1,H.a([],k))
if(a1.c==null)a1.c=b
else b=H.c(H.aa(b6))}else b=a
b.d6(0)
b=a1.c
if(b==null){b=new B.ah(a1,H.a([],k))
if(a1.c==null)a1.c=b
else b=H.c(H.aa(b6))}a=d.a
if(a!=null){b4=a.c
if(b4==null){b4=new B.ah(a,H.a([],k))
if(a.c==null){a.c=b4
a=b4}else a=H.c(H.aa(b6))}else a=b4
C.a.a5(a.a,d)}d.a=b.b
b.bU(0,d)
C.a.a5(q,e)
C.a.bJ(q,H.a0(Math.min(a6,q.length)),p.a(d))
C.a.a5(o,e)
C.a.bJ(o,C.a.ao(o,a1)+1,d)}},
o2(a){var s,r,q,p,o,n,m,l,k,j,i,h="unexpected-end-tag"
for(s=this.b,r=s.c,q=H.x(r).h("W<1>"),p=new H.W(r,q),p=new H.N(p,p.gm(p),q.h("N<C.E>")),o=t.X,q=q.h("C.E");p.n();){n=q.a(p.d)
m=n.y
l=a.b
if(m==l){k=C.a.gt(r).y
if(k!=l&&C.a.G(C.P,k)){if(0>=r.length)return H.b(r,-1)
r.pop()
s.c5(l)}s=C.a.gt(r).y
q=a.b
if(s!=q){s=this.a
j=a.a
p=t.z
p=P.A(["name",q],p,p)
if(j==null){q=s.c.a
o=q.x
if(o==null)j=null
else{q=q.z
new Y.b6(o,q).bj(o,q)
j=new Y.ap(o,q,q)
j.aH(o,q,q)}}C.a.p(s.e,new V.aZ(h,j,p))}while(!0){if(0>=r.length)return H.b(r,-1)
if(!!J.V(r.pop(),n))break}break}else{i=n.x
if(C.a.G(C.S,new B.p(i==null?"http://www.w3.org/1999/xhtml":i,m,o))){s=this.a
j=a.a
r=t.z
r=P.A(["name",a.b],r,r)
if(j==null){q=s.c.a
p=q.x
if(p==null)j=null
else{q=q.z
new Y.b6(p,q).bj(p,q)
j=new Y.ap(p,q,q)
j.aH(p,q,q)}}C.a.p(s.e,new V.aZ(h,j,r))
break}}}}}
V.jQ.prototype={
$2(a,b){var s
t.K.a(a)
H.av(b)
s=this.a.b.c
if(1>=s.length)return H.b(s,1)
s[1].b.ex(a,new V.jP(b))},
$S:31}
V.jP.prototype={
$0(){return this.a},
$S:7}
V.hP.prototype={
K(a){throw H.d(P.au("Cannot process start stag in text phase"))},
S(a){var s,r,q=this
if(a.b==="script"){s=q.b.c
if(0>=s.length)return H.b(s,-1)
s.pop()
s=q.a
r=s.z
r.toString
s.y=r
return null}s=q.b.c
if(0>=s.length)return H.b(s,-1)
s.pop()
s=q.a
r=s.z
r.toString
s.y=r
return null},
a4(a){this.b.c2(a.gaB(a),a.a)
return null},
ad(){var s=this.b.c,r=C.a.gt(s),q=this.a,p=t.z
q.F(r.e,"expected-named-closing-tag-but-got-eof",P.A(["name",r.y],p,p))
if(0>=s.length)return H.b(s,-1)
s.pop()
s=q.z
s.toString
q.y=s
return!0}}
V.ed.prototype={
K(a){var s,r,q=this,p=null
switch(a.b){case"html":return q.bi(a)
case"caption":q.fC()
s=q.b
s.d.p(0,p)
s.P(a)
s=q.a
s.y=s.gie()
return p
case"colgroup":q.hI(a)
return p
case"col":q.hI(T.aI("colgroup",P.Z(p,p,t.K,t.N),p,!1))
return a
case"tbody":case"tfoot":case"thead":q.hK(a)
return p
case"td":case"th":case"tr":q.hK(T.aI("tbody",P.Z(p,p,t.K,t.N),p,!1))
return a
case"table":return q.lt(a)
case"style":case"script":return q.a.gc7().K(a)
case"input":s=a.e.j(0,"type")
if(s==null)s=p
else{r=t.E
r=P.ad(new H.F(new H.a9(s),r.h("j(w.E)").a(A.bS()),r.h("F<w.E,j>")),0,p)
s=r}if(s==="hidden"){q.a.a3(a.a,"unexpected-hidden-input-in-table")
s=q.b
s.P(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()}else q.hJ(a)
return p
case"form":q.a.a3(a.a,"unexpected-form-in-table")
s=q.b
if(s.f==null){s.P(a)
r=s.c
s.sjw(C.a.gt(r))
if(0>=r.length)return H.b(r,-1)
r.pop()}return p
default:q.hJ(a)
return p}},
S(a){var s,r,q=this,p=a.b
switch(p){case"table":q.c1(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
q.a.F(a.a,"unexpected-end-tag",P.A(["name",p],s,s))
return null
default:s=q.a
r=t.z
s.F(a.a,"unexpected-end-tag-implies-table-voodoo",P.A(["name",p],r,r))
r=q.b
r.r=!0
s.gaa().S(a)
r.r=!1
return null}},
fC(){var s=this.b.c
while(!0){if(!(C.a.gt(s).y!=="table"&&C.a.gt(s).y!=="html"))break
if(0>=s.length)return H.b(s,-1)
s.pop()}},
ad(){var s=C.a.gt(this.b.c)
if(s.y!=="html")this.a.a3(s.e,"eof-in-table")
return!1},
aJ(a){var s=this.a,r=s.gaE()
s.y=s.gdR()
s.gdR().c=r
s.gaE().aJ(a)
return null},
a4(a){var s=this.a,r=s.gaE()
s.y=s.gdR()
s.gdR().c=r
s.gaE().a4(a)
return null},
hI(a){var s
this.fC()
this.b.P(a)
s=this.a
s.y=s.gih()},
hK(a){var s
this.fC()
this.b.P(a)
s=this.a
s.y=s.gfg()},
lt(a){var s=this.a,r=t.z
s.F(a.a,"unexpected-start-tag-implies-end-tag",P.A(["startName","table","endName","table"],r,r))
s.gaE().S(new T.L("table",!1))
return a},
hJ(a){var s=this.a,r=t.z
s.F(a.a,u.M,P.A(["name",a.b],r,r))
r=this.b
r.r=!0
s.gaa().K(a)
r.r=!1},
c1(a){var s,r,q=this,p=q.b
if(p.a2("table","table")){p.cm()
p=p.c
s=C.a.gt(p).y
if(s!=="table"){r=t.z
q.a.F(a.a,"end-tag-too-early-named",P.A(["gotName","table","expectedName",s],r,r))}for(;C.a.gt(p).y!=="table";){if(0>=p.length)return H.b(p,-1)
p.pop()}if(0>=p.length)return H.b(p,-1)
p.pop()
q.a.jZ()}else q.a.a3(a.a,"undefined-error")}}
V.d9.prototype={
df(){var s,r,q=this,p=q.d
if(p.length===0)return
s=H.x(p)
r=new H.F(p,s.h("o(1)").a(new V.jR()),s.h("F<1,o>")).aC(0,"")
if(!B.n1(r)){p=q.a.gaI()
s=p.b
s.r=!0
p.a.gaa().a4(new T.E(null,r))
s.r=!1}else if(r.length!==0)q.b.c2(r,null)
q.snw(H.a([],t.ks))},
ci(a){var s
this.df()
s=this.c
s.toString
this.a.y=s
return a},
ad(){this.df()
var s=this.c
s.toString
this.a.y=s
return!0},
a4(a){if(a.gaB(a)==="\x00")return null
C.a.p(this.d,a)
return null},
aJ(a){C.a.p(this.d,a)
return null},
K(a){var s
this.df()
s=this.c
s.toString
this.a.y=s
return a},
S(a){var s
this.df()
s=this.c
s.toString
this.a.y=s
return a},
snw(a){this.d=t.oX.a(a)}}
V.jR.prototype={
$1(a){t.g.a(a)
return a.gaB(a)},
$S:34}
V.e8.prototype={
K(a){switch(a.b){case"html":return this.bi(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.lu(a)
default:return this.a.gaa().K(a)}},
S(a){var s,r=this,q=a.b
switch(q){case"caption":r.o_(a)
return null
case"table":return r.c1(a)
case"body":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
r.a.F(a.a,"unexpected-end-tag",P.A(["name",q],s,s))
return null
default:return r.a.gaa().S(a)}},
ad(){this.a.gaa().ad()
return!1},
a4(a){return this.a.gaa().a4(a)},
lu(a){var s,r=this.a
r.a3(a.a,"undefined-error")
s=this.b.a2("caption","table")
r.gaE().S(new T.L("caption",!1))
if(s)return a
return null},
o_(a){var s,r,q=this,p=q.b
if(p.a2("caption","table")){p.cm()
s=p.c
if(C.a.gt(s).y!=="caption"){r=t.z
q.a.F(a.a,"expected-one-end-tag-but-got-another",P.A(["gotName","caption","expectedName",C.a.gt(s).y],r,r))}for(;C.a.gt(s).y!=="caption";){if(0>=s.length)return H.b(s,-1)
s.pop()}if(0>=s.length)return H.b(s,-1)
s.pop()
p.fA()
p=q.a
p.y=p.gaI()}else q.a.a3(a.a,"undefined-error")},
c1(a){var s,r=this.a
r.a3(a.a,"undefined-error")
s=this.b.a2("caption","table")
r.gaE().S(new T.L("caption",!1))
if(s)return a
return null}}
V.e9.prototype={
K(a){var s,r=this
switch(a.b){case"html":return r.bi(a)
case"col":s=r.b
s.P(a)
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
return null
default:s=C.a.gt(r.b.c).y
r.da(new T.L("colgroup",!1))
return s==="html"?null:a}},
S(a){var s,r=this
switch(a.b){case"colgroup":r.da(a)
return null
case"col":s=t.z
r.a.F(a.a,"no-end-tag",P.A(["name","col"],s,s))
return null
default:s=C.a.gt(r.b.c).y
r.da(new T.L("colgroup",!1))
return s==="html"?null:a}},
ad(){if(C.a.gt(this.b.c).y==="html")return!1
else{this.da(new T.L("colgroup",!1))
return!0}},
a4(a){var s=C.a.gt(this.b.c).y
this.da(new T.L("colgroup",!1))
return s==="html"?null:a},
da(a){var s=this.b.c,r=this.a
if(C.a.gt(s).y==="html")r.a3(a.a,"undefined-error")
else{if(0>=s.length)return H.b(s,-1)
s.pop()
r.y=r.gaI()}}}
V.cH.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.bi(a)
case"tr":r.hL(a)
return q
case"td":case"th":s=t.z
r.a.F(a.a,"unexpected-cell-in-table-body",P.A(["name",p],s,s))
r.hL(T.aI("tr",P.Z(q,q,t.K,t.N),q,!1))
return a
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":return r.c1(a)
default:return r.a.gaI().K(a)}},
S(a){var s,r=this,q=a.b
switch(q){case"tbody":case"tfoot":case"thead":r.e8(a)
return null
case"table":return r.c1(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":case"tr":s=t.z
r.a.F(a.a,"unexpected-end-tag-in-table-body",P.A(["name",q],s,s))
return null
default:return r.a.gaI().S(a)}},
fB(){for(var s=this.b.c;!C.a.G(C.bC,C.a.gt(s).y);){if(0>=s.length)return H.b(s,-1)
s.pop()}C.a.gt(s).toString},
ad(){this.a.gaI().ad()
return!1},
aJ(a){return this.a.gaI().aJ(a)},
a4(a){return this.a.gaI().a4(a)},
hL(a){var s
this.fB()
this.b.P(a)
s=this.a
s.y=s.gff()},
e8(a){var s=this.b,r=this.a
if(s.a2(a.b,"table")){this.fB()
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
r.y=r.gaI()}else{s=t.z
r.F(a.a,"unexpected-end-tag-in-table-body",P.A(["name",a.b],s,s))}},
c1(a){var s=this,r="table",q=s.b
if(q.a2("tbody",r)||q.a2("thead",r)||q.a2("tfoot",r)){s.fB()
s.e8(new T.L(C.a.gt(q.c).y,!1))
return a}else s.a.a3(a.a,"undefined-error")
return null}}
V.eb.prototype={
K(a){var s,r,q=this
switch(a.b){case"html":return q.bi(a)
case"td":case"th":q.j6()
s=q.b
s.P(a)
r=q.a
r.y=r.gig()
s.d.p(0,null)
return null
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":case"tr":s=q.b.a2("tr","table")
q.e9(new T.L("tr",!1))
return!s?null:a
default:return q.a.gaI().K(a)}},
S(a){var s,r=this,q=a.b
switch(q){case"tr":r.e9(a)
return null
case"table":q=r.b.a2("tr","table")
r.e9(new T.L("tr",!1))
return!q?null:a
case"tbody":case"tfoot":case"thead":return r.e8(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":s=t.z
r.a.F(a.a,"unexpected-end-tag-in-table-row",P.A(["name",q],s,s))
return null
default:return r.a.gaI().S(a)}},
j6(){var s,r,q,p,o,n,m,l,k
for(s=this.b.c,r=this.a,q=t.z,p=r.c.a;!0;){o=C.a.gt(s)
n=o.y
if(n==="tr"||n==="html")break
m=o.e
n=P.A(["name",C.a.gt(s).y],q,q)
if(m==null){l=p.x
if(l==null)m=null
else{k=p.z
new Y.b6(l,k).bj(l,k)
m=new Y.ap(l,k,k)
m.aH(l,k,k)}}C.a.p(r.e,new V.aZ("unexpected-implied-end-tag-in-table-row",m,n))
if(0>=s.length)return H.b(s,-1)
s.pop()}},
ad(){this.a.gaI().ad()
return!1},
aJ(a){return this.a.gaI().aJ(a)},
a4(a){return this.a.gaI().a4(a)},
e9(a){var s=this.b,r=this.a
if(s.a2("tr","table")){this.j6()
s=s.c
if(0>=s.length)return H.b(s,-1)
s.pop()
r.y=r.gfg()}else r.a3(a.a,"undefined-error")},
e8(a){if(this.b.a2(a.b,"table")){this.e9(new T.L("tr",!1))
return a}else{this.a.a3(a.a,"undefined-error")
return null}}}
V.d8.prototype={
K(a){switch(a.b){case"html":return this.bi(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.lv(a)
default:return this.a.gaa().K(a)}},
S(a){var s,r=this,q=a.b
switch(q){case"td":case"th":r.fO(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":s=t.z
r.a.F(a.a,"unexpected-end-tag",P.A(["name",q],s,s))
return null
case"table":case"tbody":case"tfoot":case"thead":case"tr":return r.o1(a)
default:return r.a.gaa().S(a)}},
j7(){var s=this.b
if(s.a2("td","table"))this.fO(new T.L("td",!1))
else if(s.a2("th","table"))this.fO(new T.L("th",!1))},
ad(){this.a.gaa().ad()
return!1},
a4(a){return this.a.gaa().a4(a)},
lv(a){var s=this.b
if(s.a2("td","table")||s.a2("th","table")){this.j7()
return a}else{this.a.a3(a.a,"undefined-error")
return null}},
fO(a){var s,r=this,q=r.b,p=q.a2(a.b,"table"),o=a.b
if(p){q.c5(o)
p=q.c
o=C.a.gt(p).y
s=a.b
if(o!=s){p=t.z
r.a.F(a.a,"unexpected-cell-end-tag",P.A(["name",s],p,p))
r.cL(a)}else{if(0>=p.length)return H.b(p,-1)
p.pop()}q.fA()
q=r.a
q.y=q.gff()}else{q=t.z
r.a.F(a.a,"unexpected-end-tag",P.A(["name",o],q,q))}},
o1(a){if(this.b.a2(a.b,"table")){this.j7()
return a}else this.a.a3(a.a,"undefined-error")
return null}}
V.ec.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.bi(a)
case"option":p=r.b
s=p.c
if(C.a.gt(s).y==="option"){if(0>=s.length)return H.b(s,-1)
s.pop()}p.P(a)
return q
case"optgroup":p=r.b
s=p.c
if(C.a.gt(s).y==="option"){if(0>=s.length)return H.b(s,-1)
s.pop()}if(C.a.gt(s).y==="optgroup"){if(0>=s.length)return H.b(s,-1)
s.pop()}p.P(a)
return q
case"select":r.a.a3(a.a,"unexpected-select-in-select")
r.fN(new T.L("select",!1))
return q
case"input":case"keygen":case"textarea":return r.lq(a)
case"script":return r.a.gc7().K(a)
default:s=t.z
r.a.F(a.a,"unexpected-start-tag-in-select",P.A(["name",p],s,s))
return q}},
S(a){var s,r,q=this,p=null,o="unexpected-end-tag-in-select",n=a.b
switch(n){case"option":n=q.b.c
if(C.a.gt(n).y==="option"){if(0>=n.length)return H.b(n,-1)
n.pop()}else{n=t.z
q.a.F(a.a,o,P.A(["name","option"],n,n))}return p
case"optgroup":n=q.b.c
if(C.a.gt(n).y==="option"){s=n.length
r=s-2
if(r<0)return H.b(n,r)
r=n[r].y==="optgroup"
s=r}else s=!1
if(s){if(0>=n.length)return H.b(n,-1)
n.pop()}if(C.a.gt(n).y==="optgroup"){if(0>=n.length)return H.b(n,-1)
n.pop()}else{n=t.z
q.a.F(a.a,o,P.A(["name","optgroup"],n,n))}return p
case"select":q.fN(a)
return p
default:s=t.z
q.a.F(a.a,o,P.A(["name",n],s,s))
return p}},
ad(){var s=C.a.gt(this.b.c)
if(s.y!=="html")this.a.a3(s.e,"eof-in-select")
return!1},
a4(a){if(a.gaB(a)==="\x00")return null
this.b.c2(a.gaB(a),a.a)
return null},
lq(a){var s="select"
this.a.a3(a.a,"unexpected-input-in-select")
if(this.b.a2(s,s)){this.fN(new T.L(s,!1))
return a}return null},
fN(a){var s=this.a
if(this.b.a2("select","select")){this.cL(a)
s.jZ()}else s.a3(a.a,"undefined-error")}}
V.h2.prototype={
K(a){var s,r,q=a.b
switch(q){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":s=this.a
r=t.z
s.F(a.a,u.a,P.A(["name",q],r,r))
s.gc8().S(new T.L("select",!1))
return a
default:return this.a.gc8().K(a)}},
S(a){switch(a.b){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":return this.c1(a)
default:return this.a.gc8().S(a)}},
ad(){this.a.gc8().ad()
return!1},
a4(a){return this.a.gc8().a4(a)},
c1(a){var s=this.a,r=t.z
s.F(a.a,u.r,P.A(["name",a.b],r,r))
if(this.b.a2(a.b,"table")){s.gc8().S(new T.L("select",!1))
return a}return null}}
V.h0.prototype={
a4(a){var s
if(a.gaB(a)==="\x00"){a.c="\ufffd"
a.b=null}else{s=this.a
if(s.Q&&!B.n1(a.gaB(a)))s.Q=!1}return this.lQ(a)},
K(a){var s,r,q,p,o,n=this,m=n.b,l=m.c,k=C.a.gt(l)
if(!C.a.G(C.bb,a.b))if(a.b==="font")s=a.e.an("color")||a.e.an("face")||a.e.an("size")
else s=!1
else s=!0
if(s){s=n.a
r=t.z
s.F(a.a,u.G,P.A(["name",a.b],r,r))
m=m.a
r=t.h
q=t.iA
while(!0){if(C.a.gt(l).x!=m)if(!s.jE(C.a.gt(l))){p=r.a(C.a.gt(l))
p=!C.a.G(C.aa,new B.p(p.x,p.y,q))}else p=!1
else p=!1
if(!p)break
if(0>=l.length)return H.b(l,-1)
l.pop()}return a}else{s=k.x
if(s==="http://www.w3.org/1998/Math/MathML")n.a.iP(a)
else if(s==="http://www.w3.org/2000/svg"){o=C.bH.j(0,a.b)
if(o!=null)a.b=o
n.a.iQ(a)}n.a.fo(a)
a.x=s
m.P(a)
if(a.c){if(0>=l.length)return H.b(l,-1)
l.pop()
a.r=!0}return null}},
S(a){var s,r,q,p=this,o=null,n=p.b,m=n.c,l=m.length-1,k=C.a.gt(m),j=k.y
if(j==null)j=o
else{s=t.E
s=P.ad(new H.F(new H.a9(j),s.h("j(w.E)").a(A.bS()),s.h("F<w.E,j>")),0,o)
j=s}s=a.b
if(j!=s){j=t.z
p.a.F(a.a,"unexpected-end-tag",P.A(["name",s],j,j))}n=n.a
j=t.E
s=j.h("j(w.E)")
j=j.h("F<w.E,j>")
while(!0){if(!!0){r=o
break}c$0:{q=k.y
q=q==null?o:P.ad(new H.F(new H.a9(q),s.a(A.bS()),j),0,o)
if(q==a.b){n=p.a
j=n.y
if(j==null){j=n.ch
if(j==null){j=new V.bw(n,n.d)
n.ch=j}j=n.y=j}s=n.fy
if(s==null){s=new V.d9(H.a([],t.ks),n,n.d)
if(n.fy==null)n.fy=s
else s=H.c(H.aa("_inTableTextPhase"))}if(j===s){j=n.y
if(j==null){j=n.ch
if(j==null){j=new V.bw(n,n.d)
n.ch=j}j=n.y=j}t.aB.a(j)
j.df()
j=j.c
j.toString
n.y=j}while(!0){if(0>=m.length)return H.b(m,-1)
if(!!J.V(m.pop(),k))break}r=o
break}--l
if(l<0||l>=m.length)return H.b(m,l)
k=m[l]
if(k.x!=n)break c$0
else{n=p.a
m=n.y
if(m==null){m=n.ch
if(m==null){m=new V.bw(n,n.d)
n.ch=m}m=n.y=m
n=m}else n=m
r=n.S(a)
break}}}return r}}
V.ft.prototype={
K(a){var s,r,q=a.b
if(q==="html")return this.a.gaa().K(a)
s=this.a
r=t.z
s.F(a.a,"unexpected-start-tag-after-body",P.A(["name",q],r,r))
s.y=s.gaa()
return a},
S(a){var s,r,q=a.b
if(q==="html"){this.fM(a)
return null}s=this.a
r=t.z
s.F(a.a,"unexpected-end-tag-after-body",P.A(["name",q],r,r))
s.y=s.gaa()
return a},
ad(){return!1},
ci(a){var s=this.b,r=s.c
if(0>=r.length)return H.b(r,0)
s.cF(a,r[0])
return null},
a4(a){var s=this.a
s.a3(a.a,"unexpected-char-after-body")
s.y=s.gaa()
return a},
fM(a){var s,r
for(s=this.b.c,r=H.x(s).h("W<1>"),s=new H.W(s,r),s=new H.N(s,s.gm(s),r.h("N<C.E>")),r=r.h("C.E");s.n();)if(r.a(s.d).y==="html")break
s=this.a
r=s.x2
if(r==null)r=s.x2=new V.fr(s,s.d)
s.y=r}}
V.ea.prototype={
K(a){var s,r=this,q=a.b
switch(q){case"html":return r.bi(a)
case"frameset":r.b.P(a)
return null
case"frame":q=r.b
q.P(a)
q=q.c
if(0>=q.length)return H.b(q,-1)
q.pop()
return null
case"noframes":return r.a.gaa().K(a)
default:s=t.z
r.a.F(a.a,"unexpected-start-tag-in-frameset",P.A(["name",q],s,s))
return null}},
S(a){var s,r=this,q=a.b
switch(q){case"frameset":q=r.b.c
if(C.a.gt(q).y==="html")r.a.a3(a.a,u.q)
else{if(0>=q.length)return H.b(q,-1)
q.pop()}q=C.a.gt(q)
if(q.y!=="frameset"){q=r.a
s=q.x1
if(s==null)s=q.x1=new V.fu(q,q.d)
q.y=s}return null
default:s=t.z
r.a.F(a.a,"unexpected-end-tag-in-frameset",P.A(["name",q],s,s))
return null}},
ad(){var s=C.a.gt(this.b.c)
if(s.y!=="html")this.a.a3(s.e,"eof-in-frameset")
return!1},
a4(a){this.a.a3(a.a,"unexpected-char-in-frameset")
return null}}
V.fu.prototype={
K(a){var s,r=a.b
switch(r){case"html":return this.bi(a)
case"noframes":return this.a.gc7().K(a)
default:s=t.z
this.a.F(a.a,"unexpected-start-tag-after-frameset",P.A(["name",r],s,s))
return null}},
S(a){var s,r=a.b,q=this.a
switch(r){case"html":r=q.y1
if(r==null)r=q.y1=new V.fs(q,q.d)
q.y=r
return null
default:s=t.z
q.F(a.a,"unexpected-end-tag-after-frameset",P.A(["name",r],s,s))
return null}},
ad(){return!1},
a4(a){this.a.a3(a.a,"unexpected-char-after-frameset")
return null}}
V.fr.prototype={
K(a){var s,r,q=a.b
if(q==="html")return this.a.gaa().K(a)
s=this.a
r=t.z
s.F(a.a,"expected-eof-but-got-start-tag",P.A(["name",q],r,r))
s.y=s.gaa()
return a},
ad(){return!1},
ci(a){var s=this.b
s.cF(a,s.gbE(s))
return null},
aJ(a){return this.a.gaa().aJ(a)},
a4(a){var s=this.a
s.a3(a.a,"expected-eof-but-got-char")
s.y=s.gaa()
return a},
S(a){var s=this.a,r=t.z
s.F(a.a,"expected-eof-but-got-end-tag",P.A(["name",a.b],r,r))
s.y=s.gaa()
return a}}
V.fs.prototype={
K(a){var s,r=a.b,q=this.a
switch(r){case"html":return q.gaa().K(a)
case"noframes":return q.gc7().K(a)
default:s=t.z
q.F(a.a,"expected-eof-but-got-start-tag",P.A(["name",r],s,s))
return null}},
ad(){return!1},
ci(a){var s=this.b
s.cF(a,s.gbE(s))
return null},
aJ(a){return this.a.gaa().aJ(a)},
a4(a){this.a.a3(a.a,"expected-eof-but-got-char")
return null},
S(a){var s=t.z
this.a.F(a.a,"expected-eof-but-got-end-tag",P.A(["name",a.b],s,s))
return null}}
V.aZ.prototype={
l(a){var s,r,q=this.b
q.toString
s=C.bG.j(0,this.a)
s.toString
r=q.jJ(0,B.tw(s,this.c),null)
return q.a.a==null?"ParserError on "+r:"On "+r},
$ibW:1}
A.km.prototype={}
Z.fQ.prototype={
ez(){var s,r,q,p,o=P.mx(t.N),n=this.a.b.j(0,"class")
for(s=(n==null?"":n).split(" "),r=s.length,q=0;q<r;++q){p=J.nt(s[q])
if(p.length!==0)o.p(0,p)}return o}}
Z.i9.prototype={
l(a){return this.ez().aC(0," ")},
gH(a){var s=this.ez()
return P.re(s,s.r,H.D(s).c)},
gm(a){return this.ez().a}}
K.jf.prototype={
sax(a){if(this.b>=this.a.length)throw H.d(P.au("No more elements"))
this.b=a},
gax(){var s=this.b
if(s>=this.a.length)throw H.d(P.au("No more elements"))
if(s>=0)return s
else return 0},
mz(a){var s,r,q,p,o=this
t.pi.a(a)
if(a==null)a=A.oR()
s=o.gax()
for(r=o.a,q=r.length;s<q;){if(s<0)return H.b(r,s)
p=r[s]
if(!H.aG(a.$1(p))){o.b=s
return p}++s}o.b=s
return null},
iD(){return this.mz(null)},
mA(a){var s,r,q,p
t.gS.a(a)
s=this.gax()
for(r=this.a,q=r.length;s<q;){if(s<0)return H.b(r,s)
p=r[s]
if(H.aG(a.$1(p))){this.b=s
return p}++s}return null},
io(a){var s=C.b.aP(this.a,a,this.gax())
if(s>=0){this.b=s+a.length-1
return!0}else throw H.d(P.au("No more elements"))},
fl(a,b){if(b==null)b=this.a.length
if(b<0)b+=this.a.length
return C.b.w(this.a,a,b)},
mB(a){return this.fl(a,null)}}
K.j9.prototype={
oZ(){var s,r,q,p,o,n,m,l
try{p=this.a
p.io("charset")
p.sax(p.gax()+1)
p.iD()
o=p.a
n=p.gax()
m=o.length
if(n<0||n>=m)return H.b(o,n)
if(o[n]!=="=")return null
p.sax(p.gax()+1)
p.iD()
n=p.gax()
if(n<0||n>=m)return H.b(o,n)
if(o[n]!=='"'){n=p.gax()
if(n<0||n>=m)return H.b(o,n)
n=o[n]==="'"}else n=!0
if(n){n=p.gax()
if(n<0||n>=m)return H.b(o,n)
s=o[n]
p.sax(p.gax()+1)
r=p.gax()
p.io(s)
p=p.fl(r,p.gax())
return p}else{q=p.gax()
try{p.mA(A.oR())
o=p.fl(q,p.gax())
return o}catch(l){if(H.aK(l) instanceof P.cg){p=p.mB(q)
return p}else throw l}}}catch(l){if(H.aK(l) instanceof P.cg)return null
else throw l}}}
V.jL.prototype={
br(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.so7(P.mz(t.N))
s=i.z=0
i.sme(H.a([],t.t))
r=i.f
if(r==null){q=i.a
q.toString
p=i.e
p.toString
r=V.rN(q,p)
i.siz(r)}for(q=r.a,p=q.length,o=t.L,n=!1,m=!1;s<p;++s){l=C.b.E(q,s)
if(n){if(l===10){n=!1
continue}n=!1}o.a(r)
k=s+1
j=k<r.gm(r)&&(r.j(0,s)&64512)===55296&&(r.j(0,k)&64512)===56320
if(!j&&!m)if(V.rY(l)){k=i.r
k.dN(k.$ti.c.a("invalid-codepoint"))
if(55296<=l&&l<=57343)l=65533}if(l===13){n=!0
l=10}C.a.p(i.y,l)
m=j}i.x=Y.qM(i.y,i.d)},
j4(a){var s=P.au("cannot change encoding when parsing a String.")
throw H.d(s)},
C(){var s,r,q=this,p=q.z,o=q.y
if(p>=o.length)return null
p=q.il(o,p)
o=q.y
s=q.z
r=s+1
if(p){q.z=r
p=o.length
if(s<0||s>=p)return H.b(o,s)
s=o[s]
q.z=r+1
if(r<0||r>=p)return H.b(o,r)
r=P.ad(H.a([s,o[r]],t.t),0,null)
p=r}else{q.z=r
if(s<0||s>=o.length)return H.b(o,s)
p=H.bc(o[s])}return p},
p0(){var s,r,q=this,p=q.z,o=q.y
if(p>=o.length)return null
p=q.il(o,p)
o=q.y
s=q.z
r=o.length
if(p){if(s<0||s>=r)return H.b(o,s)
p=o[s];++s
if(s>=r)return H.b(o,s)
s=P.ad(H.a([p,o[s]],t.t),0,null)
p=s}else{if(s<0||s>=r)return H.b(o,s)
p=H.bc(o[s])}return p},
il(a,b){var s,r
t.L.a(a)
s=b+1
r=J.X(a)
return s<r.gm(a)&&(H.a0(r.j(a,b))&64512)===55296&&(H.a0(r.j(a,s))&64512)===56320},
cb(a,b){var s,r,q=this,p=q.z
while(!0){s=q.p0()
if(s!=null)r=H.cx(a,s,0)===b
else r=!1
if(!r)break
q.z=q.z+s.length}return P.ad(C.a.b8(q.y,p,q.z),0,null)},
ba(a){return this.cb(a,!1)},
W(a){if(a!=null)this.z=this.z-a.length},
siz(a){this.f=t.f8.a(a)},
so7(a){this.r=t.f_.a(a)},
sme(a){this.y=t.L.a(a)}}
F.aY.prototype={
gm(a){return this.a.length},
gH(a){var s=this.a
return new J.ay(s,s.length,H.x(s).h("ay<1>"))},
j(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
q(a,b,c){C.a.q(this.a,b,H.D(this).h("aY.E").a(c))},
sm(a,b){C.a.sm(this.a,b)},
p(a,b){C.a.p(this.a,H.D(this).h("aY.E").a(b))},
bJ(a,b,c){return C.a.bJ(this.a,b,H.D(this).h("aY.E").a(c))},
U(a,b){C.a.U(this.a,H.D(this).h("k<aY.E>").a(b))}}
B.eC.prototype={
jT(a,b,c,d){var s,r,q,p,o,n
t.jB.a(d)
for(s=b.gap(b),s=s.gH(s),r=new H.cT(s,t.pl),q=c.b,p=this.gkb(),o=t.h;r.n();){n=o.a(s.gu())
this.a=n
if(C.a.b2(q,p))C.a.p(d,n)
this.jT(0,n,c,d)}},
kc(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.dT.a(a)
s=i.a
for(r=a.b,q=H.x(r).h("W<1>"),r=new H.W(r,q),r=new H.N(r,r.gm(r),q.h("N<C.E>")),q=q.h("C.E"),p=!0,o=null;r.n();){n=q.a(r.d)
if(o==null)p=H.iA(n.c.T(i))
else if(o===514){m=n.c
do{l=i.a.a
k=l instanceof B.R?l:null
i.a=k}while(k!=null&&!H.iA(m.T(i)))
if(i.a==null)p=!1}else if(o===517){m=n.c
do{k=i.a
k=k.gev(k)
i.a=k}while(k!=null&&!H.iA(m.T(i)))
if(i.a==null)p=!1}if(!p)break
j=n.b
switch(j){case 515:n=i.a
i.a=n.gev(n)
break
case 516:l=i.a.a
i.a=l instanceof B.R?l:null
break
case 514:case 517:o=j
break
case 513:break
default:throw H.d(i.iK(a))}if(i.a==null){p=!1
break}}i.a=s
return p},
d0(a){return new P.eP("'"+a.l(0)+"' selector of type "+H.m1(a).l(0)+" is not implemented")},
iK(a){return new P.e4("'"+a.l(0)+"' is not a valid selector",null,null)},
pY(a){var s=this,r=a.b
switch(r.gI(r)){case"root":r=s.a
return r.y==="html"&&r.a==null
case"empty":r=s.a
r=r.gap(r)
return r.b2(r,new B.kt())
case"blank":r=s.a
r=r.gap(r)
return r.b2(r,new B.ku())
case"first-child":r=s.a
return r.gev(r)==null
case"last-child":r=s.a
return r.gjL(r)==null
case"only-child":r=s.a
if(r.gev(r)==null){r=s.a
r=r.gjL(r)==null}else r=!1
return r
case"link":return s.a.b.j(0,"href")!=null
case"visited":return!1}if(B.nQ(r.gI(r)))return!1
throw H.d(s.d0(a))},
q_(a){var s=a.b
if(B.nQ(s.gI(s)))return!1
throw H.d(this.d0(a))},
pZ(a){return H.c(this.d0(a))},
pX(a){var s,r,q,p,o,n,m=this,l=a.b
switch(l.gI(l)){case"nth-child":s=t.b9.a(a.f).b
l=s.length
if(l===1){if(0>=l)return H.b(s,0)
r=s[0] instanceof B.af}else r=!1
if(r){if(0>=l)return H.b(s,0)
q=t.mH.a(s[0])
p=m.a.a
if(p!=null){l=H.lC(q.c)
if(l>0){r=p.gap(p)
l=r.ao(r,m.a)===l}else l=!1}else l=!1
return l}break
case"lang":l=t.b9.a(a.f)
l=l.a
l.toString
o=P.ad(C.w.b8(l.a.c,l.b,l.c),0,null)
n=B.qG(m.a)
return n!=null&&C.b.a1(n,o)}throw H.d(m.d0(a))},
pW(a){if(!H.iA(t.g9.a(a.b).T(this)))return!1
if(a.d instanceof B.cn)return!0
if(a.gjK()==="")return this.a.x==null
throw H.d(this.d0(a))},
pV(a){var s,r,q=a.b,p=this.a.b.j(0,q.gI(q).toLowerCase())
if(p==null)return!1
q=a.d
if(q===535)return!0
s=H.l(a.e)
switch(q){case 28:return p===s
case 530:return C.a.b2(H.a(p.split(" "),t.s),new B.kr(s))
case 531:if(C.b.a1(p,s)){q=p.length
r=s.length
if(q!==r){if(r>=q)return H.b(p,r)
q=p[r]==="-"}else q=!0}else q=!1
return q
case 532:return C.b.a1(p,s)
case 533:return C.b.bm(p,s)
case 534:return C.b.G(p,s)
default:throw H.d(this.iK(a))}}}
B.kt.prototype={
$1(a){var s
t.I.a(a)
if(!(a instanceof B.R))if(a instanceof B.c1){s=J.bu(a.x)
a.x=s
s=s.length!==0}else s=!1
else s=!0
return!s},
$S:32}
B.ku.prototype={
$1(a){var s
t.I.a(a)
if(!(a instanceof B.R))if(a instanceof B.c1){s=J.bu(a.x)
a.x=s
s=new P.hA(s).b2(0,new B.ks())}else s=!1
else s=!0
return!s},
$S:32}
B.ks.prototype={
$1(a){return!A.nb(H.a0(a))},
$S:16}
B.kr.prototype={
$1(a){H.av(a)
return a.length!==0&&a===this.a},
$S:8}
T.b8.prototype={}
T.c0.prototype={}
T.cf.prototype={
gce(a){return 2},
saB(a,b){this.e=t.oP.a(b)}}
T.L.prototype={
gce(a){return 3}}
T.be.prototype={
gaB(a){var s=this,r=s.c
if(r==null){r=s.c=J.bu(s.b)
s.b=null}return r}}
T.n.prototype={
gce(a){return 6}}
T.E.prototype={
gce(a){return 1}}
T.cQ.prototype={
gce(a){return 0}}
T.d0.prototype={
gce(a){return 4}}
T.dV.prototype={
gce(a){return 5}}
T.eL.prototype={}
Y.lY.prototype={
$0(){var s,r,q=P.aX(t.N,t.bF)
for(s=C.T.gaD(),s=s.gH(s);s.n();){r=s.gu()
if(0>=r.length)return H.b(r,0)
J.mn(q.ex(r[0],new Y.lX()),r)}return q},
$S:37}
Y.lX.prototype={
$0(){return H.a([],t.s)},
$S:38}
Y.e7.prototype={
glw(a){var s=this.y
return s==null?H.c(H.h("state")):s},
gu(){var s=this.cy
s.toString
return s},
dS(a){var s=this.ch
s.toString
C.a.gt(s).b=this.dx.l(0)},
cu(a){},
c9(a){this.dS(a)},
bW(a){var s,r=this
H.av(a)
if(r.ch==null)r.sf6(0,H.a([],t.kG))
s=r.db
s.a=""
s.a=a
r.dx.a=""
s=r.ch
s.toString
C.a.p(s,new T.eL())},
n(){var s,r=this,q=r.a,p=r.r
while(!0){s=q.r
if(!(s.b===s.c&&p.b===p.c))break
if(!H.aG(r.lx(0))){r.cy=null
return!1}}if(!s.gai(s)){q=q.r.jV()
r.cy=new T.n(null,null,q)}else r.smF(p.jV())
return!0},
br(a){var s=this
s.Q=0
s.r.d6(0)
s.x=null
s.z.a=""
s.sf6(0,null)
s.sf5(null)
s.si(t.c.a(s.gD()))},
k(a){var s=this.r
s.dN(s.$ti.c.a(a))},
nJ(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="illegal-codepoint-for-numeric-entity"
if(a){s=A.tr()
r=16}else{s=A.tq()
r=10}q=H.a([],t.D)
p=k.a
o=p.C()
while(!0){if(!(H.aG(s.$1(o))&&o!=null))break
C.a.p(q,o)
o=p.C()}n=P.cv(C.a.aW(q),r)
m=C.bI.j(0,n)
if(m!=null){l=t.z
l=P.A(["charAsInt",n],l,l)
k.k(new T.n(l,j,i))}else if(55296<=n&&n<=57343||n>1114111){l=t.z
l=P.A(["charAsInt",n],l,l)
k.k(new T.n(l,j,i))
m="\ufffd"}else{if(!(1<=n&&n<=8))if(!(14<=n&&n<=31))if(!(127<=n&&n<=159))l=64976<=n&&n<=65007||C.a.G(C.bh,n)
else l=!0
else l=!0
else l=!0
if(l){l=t.z
l=P.A(["charAsInt",n],l,l)
k.k(new T.n(l,j,i))}m=P.ad(H.a([n],t.t),0,j)}if(o!==";"){k.k(new T.n(j,j,"numeric-entity-without-semicolon"))
p.W(o)}return m},
e5(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=H.a([h.C()],t.D)
if(0>=g.length)return H.b(g,0)
if(!A.a6(g[0])){if(0>=g.length)return H.b(g,0)
s=g[0]
s=s==="<"||s==="&"||s==null||a===s}else s=!0
if(s){if(0>=g.length)return H.b(g,0)
h.W(g[0])
r="&"}else{if(0>=g.length)return H.b(g,0)
s=g[0]
if(s==="#"){C.a.p(g,h.C())
if(C.a.gt(g)==="x"||C.a.gt(g)==="X"){C.a.p(g,h.C())
q=!0}else q=!1
if(!(q&&A.p3(C.a.gt(g))))s=!q&&A.mb(C.a.gt(g))
else s=!0
if(s){h.W(C.a.gt(g))
r=j.nJ(q)}else{j.k(new T.n(i,i,"expected-numeric-entity"))
if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r="&"+C.a.aW(g)}}else{p=$.pC()
s.toString
o=p.j(0,s)
if(o==null)o=C.p
for(;C.a.gt(g)!=null;){s=J.pJ(o,new Y.jN(C.a.aW(g)))
o=P.i(s,!1,s.$ti.h("k.E"))
if(o.length===0)break
C.a.p(g,h.C())}m=g.length-1
while(!0){if(!(m>1)){n=i
break}l=C.a.aW(C.a.b8(g,0,m))
if(C.T.an(l)){n=l
break}--m}if(n!=null){s=n.length
p=s-1
if(p<0)return H.b(n,p)
s=n[p]!==";"
if(s)j.k(new T.n(i,i,"named-entity-without-semicolon"))
if(s)if(b){if(m<0||m>=g.length)return H.b(g,m)
s=g[m]
if(!(A.aQ(s)||A.mb(s))){if(m>=g.length)return H.b(g,m)
s=g[m]==="="}else s=!0}else s=!1
else s=!1
if(s){if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r="&"+C.a.aW(g)}else{r=C.T.j(0,n)
if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r=H.l(r)+C.a.aW(B.nf(g,m,i,t.jv))}}else{j.k(new T.n(i,i,"expected-named-entity"))
if(0>=g.length)return H.b(g,-1)
h.W(g.pop())
r="&"+C.a.aW(g)}}}if(b)j.dx.a+=r
else{if(A.a6(r))k=new T.cQ(i,r)
else k=new T.E(i,r)
j.k(k)}},
jc(){return this.e5(null,!1)},
b4(){var s,r,q,p,o,n,m,l=this,k=null,j=l.x
j.toString
if(j instanceof T.c0){s=j.b
if(s==null)s=k
else{r=t.E
r=P.ad(new H.F(new H.a9(s),r.h("j(w.E)").a(A.bS()),r.h("F<w.E,j>")),0,k)
s=r}j.b=s
if(j instanceof T.L){if(l.ch!=null)l.k(new T.n(k,k,"attributes-in-end-tag"))
if(j.c)l.k(new T.n(k,k,"this-closing-flag-on-end-tag"))
q=j}else if(j instanceof T.cf){j.saB(0,P.Z(k,k,t.K,t.N))
s=l.ch
if(s!=null)for(r=s.length,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
n=j.e
m=o.a
m.toString
n.ex(m,new Y.jO(o))}q=j}else q=j
l.sf6(0,k)
l.sf5(k)}else q=j
l.k(q)
l.si(t.c.a(l.gD()))},
nO(){var s=this,r=null,q=s.a,p=q.C()
if(p==="&")s.si(t.c.a(s.go3()))
else if(p==="<")s.si(t.c.a(s.gpI()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\x00"))}else if(p==null)return!1
else if(A.a6(p)){q=p+q.cb(" \n\r\t\f",!0)
s.k(new T.cQ(r,q))}else{q=p+q.ba("&<\x00")
s.k(new T.E(r,q))}return!0},
o4(){this.jc()
this.si(t.c.a(this.gD()))
return!0},
pr(){var s=this,r=null,q=s.a,p=q.C()
if(p==="&")s.si(t.c.a(s.gnu()))
else if(p==="<")s.si(t.c.a(s.gpp()))
else if(p==null)return!1
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))}else if(A.a6(p)){q=p+q.cb(" \n\r\t\f",!0)
s.k(new T.cQ(r,q))}else{q=p+q.ba("&<")
s.k(new T.E(r,q))}return!0},
nv(){this.jc()
this.si(t.c.a(this.gcO()))
return!0},
pk(){var s=this,r=null,q=s.a,p=q.C()
if(p==="<")s.si(t.c.a(s.gpi()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))}else if(p==null)return!1
else{q=p+q.ba("<\x00")
s.k(new T.E(r,q))}return!0},
l_(){var s=this,r=null,q=s.a,p=q.C()
if(p==="<")s.si(t.c.a(s.gkY()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))}else if(p==null)return!1
else{q=p+q.ba("<\x00")
s.k(new T.E(r,q))}return!0},
p2(){var s=this,r=null,q=s.a,p=q.C()
if(p==null)return!1
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))}else{q=p+q.ba("\x00")
s.k(new T.E(r,q))}return!0},
pJ(){var s=this,r=null,q=s.a,p=q.C()
if(p==="!")s.si(t.c.a(s.goP()))
else if(p==="/")s.si(t.c.a(s.gnx()))
else if(A.aQ(p)){s.x=T.aI(p,r,r,!1)
s.si(t.c.a(s.gk5()))}else if(p===">"){s.k(new T.n(r,r,"expected-tag-name-but-got-right-bracket"))
s.k(new T.E(r,"<>"))
s.si(t.c.a(s.gD()))}else if(p==="?"){s.k(new T.n(r,r,"expected-tag-name-but-got-question-mark"))
q.W(p)
s.si(t.c.a(s.gfw()))}else{s.k(new T.n(r,r,"expected-tag-name"))
s.k(new T.E(r,"<"))
q.W(p)
s.si(t.c.a(s.gD()))}return!0},
ny(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.aQ(o)){r.x=new T.L(o,!1)
r.si(t.c.a(r.gk5()))}else if(o===">"){r.k(new T.n(q,q,u.g))
r.si(t.c.a(r.gD()))}else if(o==null){r.k(new T.n(q,q,"expected-closing-tag-but-got-eof"))
r.k(new T.E(q,"</"))
r.si(t.c.a(r.gD()))}else{s=t.z
s=P.A(["data",o],s,s)
r.k(new T.n(s,q,"expected-closing-tag-but-got-char"))
p.W(o)
r.si(t.c.a(r.gfw()))}return!0},
pH(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))r.si(t.c.a(r.gbD()))
else if(p===">")r.b4()
else if(p==null){r.k(new T.n(q,q,"eof-in-tag-name"))
r.si(t.c.a(r.gD()))}else if(p==="/")r.si(t.c.a(r.gbz()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.fn.a(r.x)
s.b=H.l(s.b)+"\ufffd"}else{s=t.fn.a(r.x)
s.b=H.l(s.b)+p}return!0},
pq(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gpn()))}else{s.k(new T.E(null,"<"))
r.W(q)
s.si(t.c.a(s.gcO()))}return!0},
po(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.z.a+=H.l(q)
s.si(t.c.a(s.gpl()))}else{s.k(new T.E(null,"</"))
r.W(q)
s.si(t.c.a(s.gcO()))}return!0},
dX(){var s=this.x
return s instanceof T.c0&&s.b.toLowerCase()===this.z.l(0).toLowerCase()},
pm(){var s,r=this,q=r.dX(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbD()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbz()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.b4()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aQ(o))s.a+=H.l(o)
else{s="</"+s.l(0)
r.k(new T.E(null,s))
p.W(o)
r.si(t.c.a(r.gcO()))}}return!0},
pj(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gpg()))}else{s.k(new T.E(null,"<"))
r.W(q)
s.si(t.c.a(s.gey()))}return!0},
ph(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.z.a+=H.l(q)
s.si(t.c.a(s.gpe()))}else{s.k(new T.E(null,"</"))
r.W(q)
s.si(t.c.a(s.gey()))}return!0},
pf(){var s,r=this,q=r.dX(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbD()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbz()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.b4()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aQ(o))s.a+=H.l(o)
else{s="</"+s.l(0)
r.k(new T.E(null,s))
p.W(o)
r.si(t.c.a(r.gey()))}}return!0},
kZ(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gkJ()))}else if(q==="!"){s.k(new T.E(null,"<!"))
s.si(t.c.a(s.gkN()))}else{s.k(new T.E(null,"<"))
r.W(q)
s.si(t.c.a(s.gbR()))}return!0},
kK(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.z.a+=H.l(q)
s.si(t.c.a(s.gkH()))}else{s.k(new T.E(null,"</"))
r.W(q)
s.si(t.c.a(s.gbR()))}return!0},
kI(){var s,r=this,q=r.dX(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbD()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbz()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.b4()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aQ(o))s.a+=H.l(o)
else{s="</"+s.l(0)
r.k(new T.E(null,s))
p.W(o)
r.si(t.c.a(r.gbR()))}}return!0},
kO(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.k(new T.E(null,"-"))
s.si(t.c.a(s.gkL()))}else{r.W(q)
s.si(t.c.a(s.gbR()))}return!0},
kM(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.k(new T.E(null,"-"))
s.si(t.c.a(s.ghz()))}else{r.W(q)
s.si(t.c.a(s.gbR()))}return!0},
kX(){var s=this,r=null,q=s.a,p=q.C()
if(p==="-"){s.k(new T.E(r,"-"))
s.si(t.c.a(s.gkQ()))}else if(p==="<")s.si(t.c.a(s.geU()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))}else if(p==null)s.si(t.c.a(s.gD()))
else{q=p+q.ba("<-\x00")
s.k(new T.E(r,q))}return!0},
kR(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new T.E(r,"-"))
s.si(t.c.a(s.ghz()))}else if(q==="<")s.si(t.c.a(s.geU()))
else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))
s.si(t.c.a(s.gbg()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.k(new T.E(r,q))
s.si(t.c.a(s.gbg()))}return!0},
kP(){var s=this,r=null,q=s.a.C()
if(q==="-")s.k(new T.E(r,"-"))
else if(q==="<")s.si(t.c.a(s.geU()))
else if(q===">"){s.k(new T.E(r,">"))
s.si(t.c.a(s.gbR()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))
s.si(t.c.a(s.gbg()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.k(new T.E(r,q))
s.si(t.c.a(s.gbg()))}return!0},
kW(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.z.a=""
s.si(t.c.a(s.gkU()))}else if(A.aQ(q)){r="<"+H.l(q)
s.k(new T.E(null,r))
r=s.z
r.a=""
r.a+=H.l(q)
s.si(t.c.a(s.gkz()))}else{s.k(new T.E(null,"<"))
r.W(q)
s.si(t.c.a(s.gbg()))}return!0},
kV(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){r=s.z
r.a=""
r.a+=H.l(q)
s.si(t.c.a(s.gkS()))}else{s.k(new T.E(null,"</"))
r.W(q)
s.si(t.c.a(s.gbg()))}return!0},
kT(){var s,r=this,q=r.dX(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbD()))}else if(o==="/"&&q){r.x=new T.L(r.z.l(0),!1)
r.si(t.c.a(r.gbz()))}else if(o===">"&&q){r.x=new T.L(r.z.l(0),!1)
r.b4()
r.si(t.c.a(r.gD()))}else{s=r.z
if(A.aQ(o))s.a+=H.l(o)
else{s="</"+s.l(0)
r.k(new T.E(null,s))
p.W(o)
r.si(t.c.a(r.gbg()))}}return!0},
kA(){var s=this,r=s.a,q=r.C()
if(A.a6(q)||q==="/"||q===">"){s.k(new T.E(q==null?new P.a2(""):null,q))
r=t.c
if(s.z.l(0).toLowerCase()==="script")s.si(r.a(s.gbQ()))
else s.si(r.a(s.gbg()))}else if(A.aQ(q)){s.k(new T.E(q==null?new P.a2(""):null,q))
s.z.a+=H.l(q)}else{r.W(q)
s.si(t.c.a(s.gbg()))}return!0},
kG(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new T.E(r,"-"))
s.si(t.c.a(s.gkD()))}else if(q==="<"){s.k(new T.E(r,"<"))
s.si(t.c.a(s.geT()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))}else if(q==null){s.k(new T.n(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else s.k(new T.E(r,q))
return!0},
kE(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new T.E(r,"-"))
s.si(t.c.a(s.gkB()))}else if(q==="<"){s.k(new T.E(r,"<"))
s.si(t.c.a(s.geT()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))
s.si(t.c.a(s.gbQ()))}else if(q==null){s.k(new T.n(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.k(new T.E(r,q))
s.si(t.c.a(s.gbQ()))}return!0},
kC(){var s=this,r=null,q=s.a.C()
if(q==="-")s.k(new T.E(r,"-"))
else if(q==="<"){s.k(new T.E(r,"<"))
s.si(t.c.a(s.geT()))}else if(q===">"){s.k(new T.E(r,">"))
s.si(t.c.a(s.gbR()))}else if(q==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.k(new T.E(r,"\ufffd"))
s.si(t.c.a(s.gbQ()))}else if(q==null){s.k(new T.n(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.k(new T.E(r,q))
s.si(t.c.a(s.gbQ()))}return!0},
kF(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.k(new T.E(null,"/"))
s.z.a=""
s.si(t.c.a(s.gkx()))}else{r.W(q)
s.si(t.c.a(s.gbQ()))}return!0},
ky(){var s=this,r=s.a,q=r.C()
if(A.a6(q)||q==="/"||q===">"){s.k(new T.E(q==null?new P.a2(""):null,q))
r=t.c
if(s.z.l(0).toLowerCase()==="script")s.si(r.a(s.gbg()))
else s.si(r.a(s.gbQ()))}else if(A.aQ(q)){s.k(new T.E(q==null?new P.a2(""):null,q))
s.z.a+=H.l(q)}else{r.W(q)
s.si(t.c.a(s.gbQ()))}return!0},
nf(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cb(" \n\r\t\f",!0)
else{q=p==null
if(!q&&A.aQ(p)){s.bW(p)
s.si(t.c.a(s.gbY()))}else if(p===">")s.b4()
else if(p==="/")s.si(t.c.a(s.gbz()))
else if(q){s.k(new T.n(r,r,"expected-attribute-name-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(C.b.G("'\"=<",p)){s.k(new T.n(r,r,"invalid-character-in-attribute-name"))
s.bW(p)
s.si(t.c.a(s.gbY()))}else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.bW("\ufffd")
s.si(t.c.a(s.gbY()))}else{s.bW(p)
s.si(t.c.a(s.gbY()))}}return!0},
n8(){var s,r,q,p,o=this,n=null,m=o.a,l=m.C()
if(l==="="){o.si(t.c.a(o.gj0()))
s=!0
r=!1}else if(A.aQ(l)){q=o.db
q.a+=H.l(l)
q.a+=m.cb("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",!0)
s=!1
r=!1}else if(l===">"){s=!0
r=!0}else{if(A.a6(l)){o.si(t.c.a(o.gmV()))
s=!0}else if(l==="/"){o.si(t.c.a(o.gbz()))
s=!0}else if(l==="\x00"){o.k(new T.n(n,n,"invalid-codepoint"))
o.db.a+="\ufffd"
s=!1}else if(l==null){o.k(new T.n(n,n,"eof-in-attribute-name"))
o.si(t.c.a(o.gD()))
s=!0}else{if(C.b.G("'\"<",l)){o.k(new T.n(n,n,"invalid-character-in-attribute-name"))
o.db.a+=l}else o.db.a+=l
s=!1}r=!1}if(s){o.dS(-1)
m=o.db.a
q=t.E
p=P.ad(new H.F(new H.a9(m.charCodeAt(0)==0?m:m),q.h("j(w.E)").a(A.bS()),q.h("F<w.E,j>")),0,n)
m=o.ch
m.toString
C.a.gt(m).a=p
if(o.cx==null)o.sf5(P.nD(t.N))
if(o.cx.G(0,p))o.k(new T.n(n,n,"duplicate-attribute"))
o.cx.p(0,p)
if(r)o.b4()}return!0},
mW(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cb(" \n\r\t\f",!0)
else if(p==="=")s.si(t.c.a(s.gj0()))
else if(p===">")s.b4()
else{q=p==null
if(!q&&A.aQ(p)){s.bW(p)
s.si(t.c.a(s.gbY()))}else if(p==="/")s.si(t.c.a(s.gbz()))
else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.bW("\ufffd")
s.si(t.c.a(s.gbY()))}else if(q){s.k(new T.n(r,r,"expected-end-of-tag-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(C.b.G("'\"<",p)){s.k(new T.n(r,r,"invalid-character-after-attribute-name"))
s.bW(p)
s.si(t.c.a(s.gbY()))}else{s.bW(p)
s.si(t.c.a(s.gbY()))}}return!0},
ng(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cb(" \n\r\t\f",!0)
else if(p==='"'){s.cu(0)
s.si(t.c.a(s.gn9()))}else if(p==="&"){s.si(t.c.a(s.ge3()))
q.W(p)
s.cu(0)}else if(p==="'"){s.cu(0)
s.si(t.c.a(s.gnb()))}else if(p===">"){s.k(new T.n(r,r,u.A))
s.b4()}else if(p==="\x00"){s.k(new T.n(r,r,"invalid-codepoint"))
s.cu(-1)
s.dx.a+="\ufffd"
s.si(t.c.a(s.ge3()))}else if(p==null){s.k(new T.n(r,r,"expected-attribute-value-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(C.b.G("=<`",p)){s.k(new T.n(r,r,"equals-in-unquoted-attribute-value"))
s.cu(-1)
s.dx.a+=p
s.si(t.c.a(s.ge3()))}else{s.cu(-1)
s.dx.a+=p
s.si(t.c.a(s.ge3()))}return!0},
na(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==='"'){r.c9(-1)
r.dS(0)
r.si(t.c.a(r.giR()))}else if(o==="&")r.e5('"',!0)
else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
r.dx.a+="\ufffd"}else if(o==null){r.k(new T.n(q,q,"eof-in-attribute-value-double-quote"))
r.c9(-1)
r.si(t.c.a(r.gD()))}else{s=r.dx
s.a+=o
s.a+=p.ba('"&')}return!0},
nc(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="'"){r.c9(-1)
r.dS(0)
r.si(t.c.a(r.giR()))}else if(o==="&")r.e5("'",!0)
else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
r.dx.a+="\ufffd"}else if(o==null){r.k(new T.n(q,q,"eof-in-attribute-value-single-quote"))
r.c9(-1)
r.si(t.c.a(r.gD()))}else{s=r.dx
s.a+=o
s.a+=p.ba("'&")}return!0},
nd(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.a6(o)){r.c9(-1)
r.si(t.c.a(r.gbD()))}else if(o==="&")r.e5(">",!0)
else if(o===">"){r.c9(-1)
r.b4()}else if(o==null){r.k(new T.n(q,q,"eof-in-attribute-value-no-quotes"))
r.c9(-1)
r.si(t.c.a(r.gD()))}else if(C.b.G("\"'=<`",o)){r.k(new T.n(q,q,u.V))
r.dx.a+=o}else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
r.dx.a+="\ufffd"}else{s=r.dx
s.a+=o
s.a+=p.ba("&>\"'=<` \n\r\t\f")}return!0},
mX(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gbD()))
else if(p===">")s.b4()
else if(p==="/")s.si(t.c.a(s.gbz()))
else if(p==null){s.k(new T.n(r,r,"unexpected-EOF-after-attribute-value"))
q.W(p)
s.si(t.c.a(s.gD()))}else{s.k(new T.n(r,r,u.H))
q.W(p)
s.si(t.c.a(s.gbD()))}return!0},
l0(){var s=this,r=null,q=s.a,p=q.C()
if(p===">"){t.fn.a(s.x).c=!0
s.b4()}else if(p==null){s.k(new T.n(r,r,"unexpected-EOF-after-solidus-in-tag"))
q.W(p)
s.si(t.c.a(s.gD()))}else{s.k(new T.n(r,r,u.B))
q.W(p)
s.si(t.c.a(s.gbD()))}return!0},
no(){var s=this,r=s.a,q=r.ba(">")
q=H.bt(q,"\x00","\ufffd")
s.k(new T.d0(null,q))
r.C()
s.si(t.c.a(s.gD()))
return!0},
oQ(){var s,r,q,p,o,n=this,m=n.a,l=H.a([m.C()],t.D)
if(C.a.gt(l)==="-"){C.a.p(l,m.C())
if(C.a.gt(l)==="-"){n.x=new T.d0(new P.a2(""),null)
n.si(t.c.a(n.gnG()))
return!0}}else if(C.a.gt(l)==="d"||C.a.gt(l)==="D"){r=0
while(!0){if(!(r<6)){s=!0
break}q=C.br[r]
p=m.C()
C.a.p(l,p)
if(p!=null)o=!H.cx(q,p,0)
else o=!0
if(o){s=!1
break}++r}if(s){n.x=new T.dV(!0)
n.si(t.c.a(n.gnV()))
return!0}}else{if(C.a.gt(l)==="["){o=n.f
if(o!=null){o=o.d.c
o=o.length!==0&&C.a.gt(o).x!=n.f.d.a}else o=!1}else o=!1
if(o){r=0
while(!0){if(!(r<6)){s=!0
break}q=C.bA[r]
C.a.p(l,m.C())
if(C.a.gt(l)!==q){s=!1
break}++r}if(s){n.si(t.c.a(n.gns()))
return!0}}}n.k(new T.n(null,null,"expected-dashes-or-doctype"))
for(;o=l.length,o!==0;){if(0>=o)return H.b(l,-1)
o=l.pop()
if(o!=null)m.z=m.z-o.length}n.si(t.c.a(n.gfw()))
return!0},
nH(){var s,r=this,q=null,p=r.a.C()
if(p==="-")r.si(t.c.a(r.gnE()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
t.g.a(r.x).b.a+="\ufffd"}else if(p===">"){r.k(new T.n(q,q,"incorrect-comment"))
s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-comment"))
s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else{t.g.a(r.x).b.a+=p
r.si(t.c.a(r.gbZ()))}return!0},
nF(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.gj9()))
else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="-\ufffd"}else if(o===">"){q.k(new T.n(p,p,"incorrect-comment"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==null){q.k(new T.n(p,p,"eof-in-comment"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.x).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nI(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="-")r.si(t.c.a(r.gj8()))
else if(o==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
t.g.a(r.x).b.a+="\ufffd"}else if(o==null){r.k(new T.n(q,q,"eof-in-comment"))
p=r.x
p.toString
r.k(p)
r.si(t.c.a(r.gD()))}else{s=t.g.a(r.x)
s.b.a+=o
p=p.ba("-\x00")
s.b.a+=p}return!0},
nC(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.gj9()))
else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="-\ufffd"
q.si(t.c.a(q.gbZ()))}else if(o==null){q.k(new T.n(p,p,"eof-in-comment-end-dash"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.x).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nD(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="--\ufffd"
q.si(t.c.a(q.gbZ()))}else if(o==="!"){q.k(new T.n(p,p,u.d))
q.si(t.c.a(q.gnA()))}else if(o==="-"){q.k(new T.n(p,p,u.K))
s=t.g.a(q.x)
o.toString
s.b.a+=o}else if(o==null){q.k(new T.n(p,p,"eof-in-comment-double-dash"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{q.k(new T.n(p,p,"unexpected-char-in-comment"))
s=t.g.a(q.x).b
r=s.a+="--"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nB(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==="-"){t.g.a(q.x).b.a+="--!"
q.si(t.c.a(q.gj8()))}else if(o==="\x00"){q.k(new T.n(p,p,"invalid-codepoint"))
t.g.a(q.x).b.a+="--!\ufffd"
q.si(t.c.a(q.gbZ()))}else if(o==null){q.k(new T.n(p,p,"eof-in-comment-end-bang-state"))
s=q.x
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.x).b
r=s.a+="--!"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nW(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gj1()))
else if(p==null){s.k(new T.n(r,r,"expected-doctype-name-but-got-eof"))
q=t.i.a(s.x)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{s.k(new T.n(r,r,"need-space-after-doctype"))
q.W(p)
s.si(t.c.a(s.gj1()))}return!0},
nh(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){r.k(new T.n(q,q,u.f))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
t.i.a(r.x).d="\ufffd"
r.si(t.c.a(r.gfI()))}else if(p==null){r.k(new T.n(q,q,"expected-doctype-name-but-got-eof"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{t.i.a(r.x).d=p
r.si(t.c.a(r.gfI()))}return!0},
nQ(){var s,r,q,p=this,o=null,n=p.a.C()
if(A.a6(n)){s=t.i.a(p.x)
r=s.d
if(r==null)r=o
else{q=t.E
q=P.ad(new H.F(new H.a9(r),q.h("j(w.E)").a(A.bS()),q.h("F<w.E,j>")),0,o)
r=q}s.d=r
p.si(t.c.a(p.gmY()))}else if(n===">"){s=t.i.a(p.x)
r=s.d
if(r==null)r=o
else{q=t.E
q=P.ad(new H.F(new H.a9(r),q.h("j(w.E)").a(A.bS()),q.h("F<w.E,j>")),0,o)
r=q}s.d=r
r=p.x
r.toString
p.k(r)
p.si(t.c.a(p.gD()))}else if(n==="\x00"){p.k(new T.n(o,o,"invalid-codepoint"))
s=t.i.a(p.x)
s.d=H.l(s.d)+"\ufffd"
p.si(t.c.a(p.gfI()))}else if(n==null){p.k(new T.n(o,o,"eof-in-doctype-name"))
s=t.i.a(p.x)
s.e=!1
r=s.d
if(r==null)r=o
else{q=t.E
q=P.ad(new H.F(new H.a9(r),q.h("j(w.E)").a(A.bS()),q.h("F<w.E,j>")),0,o)
r=q}s.d=r
r=p.x
r.toString
p.k(r)
p.si(t.c.a(p.gD()))}else{s=t.i.a(p.x)
s.d=H.l(s.d)+n}return!0},
mZ(){var s,r,q,p,o=this,n=o.a,m=n.C()
if(A.a6(m))return!0
else if(m===">"){n=o.x
n.toString
o.k(n)
o.si(t.c.a(o.gD()))}else if(m==null){t.i.a(o.x).e=!1
n.W(m)
o.k(new T.n(null,null,"eof-in-doctype"))
n=o.x
n.toString
o.k(n)
o.si(t.c.a(o.gD()))}else{if(m==="p"||m==="P"){r=0
while(!0){if(!(r<5)){s=!0
break}q=C.bg[r]
m=n.C()
if(m!=null)p=!H.cx(q,m,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gn0()))
return!0}}else if(m==="s"||m==="S"){r=0
while(!0){if(!(r<5)){s=!0
break}q=C.bu[r]
m=n.C()
if(m!=null)p=!H.cx(q,m,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gn3()))
return!0}}n.W(m)
n=t.z
n=P.A(["data",m],n,n)
o.k(new T.n(n,null,u.S))
t.i.a(o.x).e=!1
o.si(t.c.a(o.gcB()))}return!0},
n1(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gft()))
else if(p==="'"||p==='"'){s.k(new T.n(r,r,"unexpected-char-in-doctype"))
q.W(p)
s.si(t.c.a(s.gft()))}else if(p==null){s.k(new T.n(r,r,"eof-in-doctype"))
q=t.i.a(s.x)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{q.W(p)
s.si(t.c.a(s.gft()))}return!0},
ni(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p==='"'){t.i.a(r.x).b=""
r.si(t.c.a(r.gnR()))}else if(p==="'"){t.i.a(r.x).b=""
r.si(t.c.a(r.gnT()))}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,"unexpected-char-in-doctype"))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcB()))}return!0},
nS(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.giS()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.b=H.l(s.b)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.b=H.l(s.b)+p}return!0},
nU(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.giS()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.b=H.l(s.b)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.b=H.l(s.b)+p}return!0},
n_(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a6(o))r.si(t.c.a(r.gnk()))
else if(o===">"){s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(o==='"'){r.k(new T.n(q,q,p))
t.i.a(r.x).c=""
r.si(t.c.a(r.gfJ()))}else if(o==="'"){r.k(new T.n(q,q,p))
t.i.a(r.x).c=""
r.si(t.c.a(r.gfK()))}else if(o==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,p))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcB()))}return!0},
nl(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==='"'){t.i.a(r.x).c=""
r.si(t.c.a(r.gfJ()))}else if(p==="'"){t.i.a(r.x).c=""
r.si(t.c.a(r.gfK()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,"unexpected-char-in-doctype"))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcB()))}return!0},
n4(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gfu()))
else if(p==="'"||p==='"'){s.k(new T.n(r,r,"unexpected-char-in-doctype"))
q.W(p)
s.si(t.c.a(s.gfu()))}else if(p==null){s.k(new T.n(r,r,"eof-in-doctype"))
q=t.i.a(s.x)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{q.W(p)
s.si(t.c.a(s.gfu()))}return!0},
nj(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a6(o))return!0
else if(o==='"'){t.i.a(r.x).c=""
r.si(t.c.a(r.gfJ()))}else if(o==="'"){t.i.a(r.x).c=""
r.si(t.c.a(r.gfK()))}else if(o===">"){r.k(new T.n(q,q,p))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(o==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,p))
t.i.a(r.x).e=!1
r.si(t.c.a(r.gcB()))}return!0},
nX(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.giT()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.c=H.l(s.c)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.c=H.l(s.c)+p}return!0},
nY(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.giT()))
else if(p==="\x00"){r.k(new T.n(q,q,"invalid-codepoint"))
s=t.i.a(r.x)
s.c=H.l(s.c)+"\ufffd"}else if(p===">"){r.k(new T.n(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.x)
s.c=H.l(s.c)+p}return!0},
n2(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){s=r.x
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new T.n(q,q,"eof-in-doctype"))
s=t.i.a(r.x)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new T.n(q,q,"unexpected-char-in-doctype"))
r.si(t.c.a(r.gcB()))}return!0},
np(){var s=this,r=s.a,q=r.C()
if(q===">"){r=s.x
r.toString
s.k(r)
s.si(t.c.a(s.gD()))}else if(q==null){r.W(q)
r=s.x
r.toString
s.k(r)
s.si(t.c.a(s.gD()))}return!0},
nt(){var s,r,q,p=this,o=H.a([],t.s)
for(s=p.a,r=0;!0;){q=s.C()
if(q==null)break
if(q==="\x00"){p.k(new T.n(null,null,"invalid-codepoint"))
q="\ufffd"}C.a.p(o,q)
if(q==="]"&&r<2)++r
else{if(q===">"&&r===2){if(0>=o.length)return H.b(o,-1)
o.pop()
if(0>=o.length)return H.b(o,-1)
o.pop()
if(0>=o.length)return H.b(o,-1)
o.pop()
break}r=0}}if(o.length!==0){s=C.a.aW(o)
p.k(new T.E(null,s))}p.si(t.c.a(p.gD()))
return!0},
si(a){this.y=t.a5.a(a)},
sf6(a,b){this.ch=t.jq.a(b)},
sf5(a){this.cx=t.oA.a(a)},
smF(a){this.cy=t.nU.a(a)},
$iU:1,
lx(a){return this.glw(this).$0()}}
Y.jN.prototype={
$1(a){return C.b.a1(H.av(a),this.a)},
$S:8}
Y.jO.prototype={
$0(){var s=this.a.b
return s==null?H.c(H.h("value")):s},
$S:7}
D.fq.prototype={
p(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/1999/xhtml"
t.mV.a(b)
if(b!=null)for(s=H.D(j).h("W<w.E>"),r=new H.W(j,s),r=new H.N(r,r.gm(r),s.h("N<C.E>")),q=b.y,p=b.x,s=s.h("C.E"),o=0;r.n();){n=s.a(r.d)
if(n==null)break
m=n.x
if(m==null)m=i
l=n.y
k=p==null?i:p
l=k===m&&q==l
if(l&&D.t7(n.b,b.b))++o
if(o===3){C.a.a5(j.a,n)
break}}j.bU(0,b)}}
D.kF.prototype={
gbE(a){var s=this.b
return s==null?H.c(H.h("document")):s},
br(a){var s=this
C.a.sm(s.c,0)
s.d.sm(0,0)
s.f=s.e=null
s.r=!1
s.b=new B.d2(P.Z(null,null,t.K,t.N))},
a2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="We should never reach this point",g="http://www.w3.org/1999/xhtml",f=a instanceof B.ag
if(b!=null)switch(b){case"button":s=C.O
r=C.ba
q=!1
break
case"list":s=C.O
r=C.bi
q=!1
break
case"table":s=C.bF
r=C.R
q=!1
break
case"select":s=C.bB
r=C.R
q=!0
break
default:throw H.d(P.au(h))}else{s=C.O
r=C.R
q=!1}for(p=this.c,o=H.x(p).h("W<1>"),p=new H.W(p,o),p=new H.N(p,p.gm(p),o.h("N<C.E>")),n=t.X,m=!f,o=o.h("C.E");p.n();){l=o.a(p.d)
if(m){k=l.y
k=k==null?a==null:k===a}else k=!1
if(!k)k=f&&l===a
else k=!0
if(k)return!0
else{j=l.x
k=j==null
i=k?g:j
l=l.y
if(!C.a.G(s,new B.p(i,l,n)))l=C.a.G(r,new B.p(k?g:j,l,n))
else l=!0
if(q!==l)return!1}}throw H.d(P.au(h))},
b3(a){return this.a2(a,null)},
aF(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g.gm(g)===0)return
s=g.a
r=s.length
q=r-1
if(q<0)return H.b(s,q)
p=s[q]
if(p==null||C.a.G(h.c,p))return
r=h.c
while(!0){if(!(p!=null&&!C.a.G(r,p)))break
if(q===0){q=-1
break}--q
if(q<0||q>=s.length)return H.b(s,q)
p=s[q]}for(r=H.D(g).h("aY.E"),o=t.K,n=t.N;!0;){++q
if(q<0||q>=s.length)return H.b(s,q)
p=s[q]
m=p.y
l=p.x
k=P.hb(p.b,o,n)
j=new T.cf(k,l,m,!1)
j.a=p.e
i=h.P(j)
C.a.q(s,q,r.a(i))
if(g.gm(g)===0)H.c(H.ao())
if(i===g.j(0,g.gm(g)-1))break}},
fA(){var s=this.d,r=s.dn(s)
while(!0){if(!(!s.gai(s)&&r!=null))break
r=s.dn(s)}},
jl(a){var s,r,q
for(s=this.d,r=H.D(s).h("W<w.E>"),s=new H.W(s,r),s=new H.N(s,s.gm(s),r.h("N<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
if(q==null)break
else if(q.y==a)return q}return null},
cF(a,b){var s=b.gap(b),r=new B.dU(a.gaB(a),P.Z(null,null,t.K,t.N))
r.e=a.a
s.p(0,r)},
jh(a,b){var s,r,q=b.b,p=b.x
if(p==null)p=this.a
this.gbE(this)
s=p===""?null:p
r=new B.R(s,q,P.Z(null,null,t.K,t.N))
r.sd3(0,b.e)
r.e=b.a
return r},
P(a){if(this.r)return this.oF(a)
return this.jz(a)},
jz(a){var s,r,q,p=this,o=a.b,n=a.x
if(n==null)n=p.a
p.gbE(p)
s=n===""?null:n
r=new B.R(s,o,P.Z(null,null,t.K,t.N))
r.sd3(0,a.e)
r.e=a.a
q=p.c
J.pF(C.a.gt(q)).p(0,r)
C.a.p(q,r)
return r},
oF(a){var s,r,q=this,p=q.jh(0,a),o=q.c
if(!C.a.G(C.Q,C.a.gt(o).y))return q.jz(a)
else{s=q.eQ()
r=s[1]
if(r==null){r=s[0]
r.gap(r).p(0,p)}else s[0].oE(0,p,r)
C.a.p(o,p)}return p},
c2(a,b){var s,r=this.c,q=C.a.gt(r)
if(this.r){r=C.a.gt(r)
r=!C.a.G(C.Q,r.y)}else r=!0
if(r)D.nX(q,a,b,null)
else{s=this.eQ()
r=s[0]
r.toString
D.nX(r,a,b,t.mV.a(s[1]))}},
eQ(){var s,r,q,p=this.c,o=H.x(p).h("W<1>"),n=new H.W(p,o)
n=new H.N(n,n.gm(n),o.h("N<C.E>"))
o=o.h("C.E")
while(!0){if(!n.n()){s=null
break}s=o.a(n.d)
if(s.y==="table")break}if(s!=null){r=s.a
if(r!=null)q=s
else{o=C.a.ao(p,s)-1
if(o<0||o>=p.length)return H.b(p,o)
r=p[o]
q=null}}else{if(0>=p.length)return H.b(p,0)
r=p[0]
q=null}return H.a([r,q],t.hg)},
c5(a){var s=this.c,r=C.a.gt(s).y
if(r!=a&&C.a.G(C.P,r)){if(0>=s.length)return H.b(s,-1)
s.pop()
this.c5(a)}},
cm(){return this.c5(null)},
soy(a){this.e=t.e1.a(a)},
sjw(a){this.f=t.mV.a(a)}}
B.p.prototype={
gO(a){return 37*J.aH(this.a)+J.aH(this.b)},
Z(a,b){if(b==null)return!1
return b instanceof B.p&&b.a==this.a&&b.b==this.b}}
B.m_.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j=new P.a2(""),i="%("+H.l(a)+")"
for(s=this.a,r=i.length,q=J.bs(b),p=0,o="";n=s.a,m=C.b.aP(n,i,p),m>=0;){j.a=o+C.b.w(n,p,m)
m+=r
l=m
while(!0){o=s.a
if(l>=o.length)return H.b(o,l)
if(!A.mb(o[l]))break;++l}if(l>m){k=P.cv(C.b.w(s.a,m,l),null)
m=l}else k=0
o=s.a
if(m>=o.length)return H.b(o,m)
o=o[m]
switch(o){case"s":o=j.a+=H.l(b)
break
case"d":o=j.a+=B.p8(q.l(b),k)
break
case"x":o=j.a+=B.p8(C.d.pP(H.a0(b),16),k)
break
default:throw H.d(P.T("formatStr does not support format character "+o))}p=m+1}r=j.a=o+C.b.w(n,p,n.length)
s.a=r.charCodeAt(0)==0?r:r},
$S:21}
L.b4.prototype={
gf0(){var s=this.x
return s==null?H.c(H.h("startingMobject")):s},
l(a){var s=this.r
return this.bv()+"("+s.gI(s)+", runTime: "+H.l(this.a)+"s)"},
bv(){var s=this.hR(0),r=P.at("^Instance of '(.*?)'$").ju(s).b
if(1>=r.length)return H.b(r,1)
r=r[1]
r.toString
return r},
d4(){this.x=this.r.v()
this.di(0)},
fZ(){this.di(1)},
d5(a){},
dw(){return H.a([this.r,this.gf0()],t.r)},
ho(){var s,r,q,p=H.a([],t.Z)
for(s=this.dw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)p.push(s[q].dz())
s=t.Y
return P.i(new A.as(p,s),!0,s.h("k.E"))},
cl(a){var s,r,q
for(s=this.kg(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].k8(a)},
kg(){var s,r,q,p,o=H.a([],t.r)
for(s=this.dw(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o.push(p)}return o},
di(a){a=Math.min(1,Math.max(a,0))
this.oG(this.b.$1(a))},
oG(a){var s,r,q,p,o,n=this.ho()
for(s=B.J(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
this.h2(C.a.j(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-H.a0(o)*q,0)))}},
h2(a,b){t.a.a(a)}}
L.fy.prototype={
giW(){var s=this.z
return s==null?H.c(H.h("animationsTiming")):s},
gjI(){var s=this.Q
return s==null?H.c(H.h("maxEndTime")):s},
lT(a,b,c,d,e){var s,r,q=H.a([],t.r)
for(s=this.y,r=0;r<4;++r)q.push(s[r].r)
this.r.b9(t.a.a(B.pl(q,t.j)))
this.oD()},
dw(){return t.ek.a(this.r).gM()},
d4(){var s,r
for(s=this.y,r=0;r<4;++r)s[r].d4()},
fZ(){var s,r
for(s=this.y,r=0;r<4;++r)s[r].fZ()},
d5(a){var s,r
for(s=this.y,r=0;r<4;++r)s[r].d5(a)},
cl(a){var s,r
for(s=this.y,r=0;r<4;++r)s[r].cl(a)},
oD(){var s,r,q,p,o=this
o.sm0(t.dq.a(o.kj()))
s=H.a([],t.n)
for(r=o.giW(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(r[p].c)
o.Q=H.b9(C.a.ef(s,0,C.y,t.W))
if(o.a===0)o.a=o.gjI()},
kj(){var s,r,q,p,o,n,m,l,k=H.a([],t.bB)
for(s=this.y,r=t.oM,q=this.c,p=1-q,o=0,n=0;n<4;++n){m=s[n]
l=o+m.a
C.a.p(k,new S.cj(m,o,l,r))
o=o*p+l*q}return k},
di(a){var s,r,q,p,o,n,m,l=a*this.gjI()
for(s=this.giW(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((l-o)/n,0)):0
p.a.di(m)}},
sm0(a){this.z=t.az.a(a)}}
L.hG.prototype={
h2(a,b){var s,r
t.a.a(a)
s=J.X(a)
r=[0,b]
s.j(a,0).hc(s.j(a,1),r[0],r[1])}}
L.hF.prototype={}
L.hU.prototype={
ghh(){var s=this.y
return s==null?H.c(H.h("targetMobject")):s},
ghg(){var s=this.z
return s==null?H.c(H.h("targetCopy")):s},
oC(){if(this.cx!=null)return
this.sp_(U.pa())},
d4(){var s=this
s.y=s.ghh()
s.z=K.mJ(s.ghh())
s.r.fp(s.ghg())
s.lC()},
d5(a){this.lD(a)},
dw(){var s=this
return H.a([s.r,s.gf0(),s.ghh(),s.ghg()],t.r)},
ho(){var s,r,q=H.a([],t.Z)
for(s=[this.r,this.gf0(),this.ghg()],r=0;r<3;++r)q.push(s[r].dz())
s=t.Y
return P.i(new A.as(q,s),!0,s.h("k.E"))},
h2(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.X(a)
r=s.j(a,0)
q=s.j(a,1)
s=s.j(a,2)
p=this.cx
o=t.j
o.a(q)
o.a(s)
t.lX.a(p)
n=p==null?U.pa():p
r.saT(t.y.a(n.$3(q.gA(q),s.gA(s),b)))
r.h1(q,s,b)},
sp_(a){this.cx=t.lX.a(a)}}
T.j4.prototype={
gau(a){var s=this.r
return s==null?H.c(H.h("display")):s},
fP(a){var s,r,q,p
t.a.a(a)
s=new T.j5()
r=H.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,H.f)(a),++p)C.a.U(r,s.$1(a[p]))
return B.pl(r,t.j)},
he(a){var s,r,q,p,o="renderer"
for(s=this.fP(t.a.a(a)),r=H.x(s).h("W<1>"),s=new H.W(s,r),s=new H.N(s,s.gm(s),r.h("N<C.E>")),r=r.h("C.E");s.n();){q=r.a(s.d)
p=this.r
if(q instanceof K.Q){p=(p==null?H.c(H.h("display")):p).a;(p==null?H.c(H.h(o)):p).pv(q)}else if((p==null?H.c(H.h("display")):p).a==null)H.c(H.h(o))}},
k6(a,b){t.y.a(b)
return!C.a.cC(b,new T.j6())?H.a([C.h],t.l):b}}
T.j5.prototype={
$1(a){return a.bP()},
$S:40}
T.j6.prototype={
$1(a){t.V.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:41}
L.dI.prototype={
gdq(){var s=this.a
return s==null?H.c(H.h("renderer")):s},
gas(){var s=this.b
return s==null?H.c(H.h("camera")):s},
j3(a){var s
this.b=a
s=this.d
C.a4.sq0(s,1280)
C.a4.sbo(s,720)},
e1(a){return a},
eL(a,b){var s,r,q=this
q.gas()
s=F.iH(a,0,1280,-q.gas().c/2,q.gas().c/2)
q.gas()
r=F.iH(b,720,0,-q.gas().d/2,q.gas().d/2)
q.gas()
return new M.e(s,r,0).L(0,C.h)}}
Z.fp.prototype={
dl(){var s=0,r=P.bQ(t.W),q,p=this,o,n,m
var $async$dl=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return P.aw(C.e9.gn6(m),$async$dl)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return P.bO(q,r)}})
return P.bP($async$dl,r)},
eO(a){var s,r,q,p
t.n8.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.gas()
p=F.iH(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
this.gas()
return new M.e(p,F.iH(a.b,q,r,0,720),0)},
fv(){var s=this,r=s.d,q=t.eX,p=q.h("~(1)?"),o=p.a(new Z.iL(s))
t.jE.a(null)
q=q.c
C.a.U(s.r,H.a([W.l9(r,"mousemove",o,!1,q),W.l9(r,"mousedown",p.a(new Z.iM(s)),!1,q),W.l9(r,"mouseup",p.a(new Z.iN(s)),!1,q)],t.dw))},
pQ(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].nr()}}
Z.iL.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.ch
s.cx=new M.e(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.eO(new P.cN(r,q,t.n8))
q=s.eL(p.a,p.b)
s.ch=q
q.R(0,s.cx)
q=s.ch
$.dH().e7(new Y.er(q,C.z,"MouseMovedEvent"))
if(s.x){r=s.z=s.ch
s.y.R(0,r)
$.dH().e7(new Y.eq(r,C.B,"MouseDraggedEvent"))}},
$S:15}
Z.iM.prototype={
$1(a){var s,r,q,p,o
t.gD.a(a)
s=this.a
r=s.ch
s.cx=new M.e(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.eO(new P.cN(r,q,t.n8))
s.ch=s.eL(p.a,p.b)
q=a.button
q.toString
r=new Y.ep(q)
r.f1(q)
s.Q=r
r=s.ch
$.dH().e7(new Y.es(r,C.A,"MousePressedEvent"))
s.x=!0
r=s.ch
q=r.a
o=r.b
r=r.c
s.y=new M.e(q,o,r)
s.z=new M.e(q,o,r)},
$S:15}
Z.iN.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.ch
s.cx=new M.e(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.eO(new P.cN(r,q,t.n8))
s.ch=s.eL(p.a,p.b)
q=a.button
q.toString
r=new Y.ep(q)
r.f1(q)
s.Q=r
r=s.ch
$.dH().e7(new Y.bI(r,C.v,"MouseReleasedEvent"))
s.x=!1},
$S:15}
Z.fH.prototype={}
M.dg.prototype={
v(){return M.mB(this)},
mU(){var s,r,q,p=this,o=t.b1,n=H.a([],o),m=p.jt?-1:1,l=p.ec
l.toString
s=p.jq
s=B.n2(p.b_+m*s/2,l,s).aY(0)
l=s.length
r=p.bH
q=0
for(;q<s.length;s.length===l||(0,H.f)(s),++q)n.push(p.hu(s[q],r))
p.spN(n)
o=H.a([],o)
for(n=p.jr,l=n.length,r*=p.js,q=0;q<n.length;n.length===l||(0,H.f)(n),++q)o.push(p.hu(n[q],r))
p.snm(o)
o=p.fW
o.toString
o=P.i(o,!0,t.j)
n=p.fX
n.toString
C.a.U(o,n)
p.b9(t.a.a(o))},
hu(a,b){var s,r=this,q=C.m.B(0,b),p=V.nC(C.c,C.J.B(0,b),q)
p.cQ(0,r.be().R(0,r.bw()).d2())
p.c4(r.h8(a))
p.bA(r.hq())
p.hA(J.Y(r.bu(),0))
q=J.aR(r.bx(!1))
s=r.x
p.lb(q,s)
return p},
h8(a){var s=this,r=F.iH(a,s.fV,s.b_,0,1)
return B.m7(s.bw(),s.be(),r,t.V)},
spN(a){this.fW=t.gv.a(a)},
snm(a){this.fX=t.gv.a(a)}}
M.kd.prototype={
$1(a){return t.mY.a(a).v()},
$S:30}
M.ke.prototype={
$1(a){return t.mY.a(a).v()},
$S:30}
M.fO.prototype={
km(a,b,c,d,e){var s,r,q
t.f3.a(a)
s=Y.q2(b,C.bn,1e-8,a,c,d,e)
r=t.ew.a(new M.jd(this))
q=s.Q
s.hx(q)
s.lN(C.h,C.h,r)
s.hx(1/q)
return s}}
M.jd.prototype={
$1(a){return this.a.je(a)},
$S:3}
M.dO.prototype={
gdu(){var s=this.fS
return s==null?H.c(H.h("xAxis")):s},
gdv(){var s=this.fT
return s==null?H.c(H.h("yAxis")):s},
jf(b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=C.a.aR(H.a([c0,this.jp,C.aL],t.iX),new M.j_()),b7=b6.a
if(b7==null)b7=C.a7
s=b6.e
if(s==null)s=1
r=b6.f
q=b6.r
if(q==null)q=0.1
p=b6.x
if(p==null)p=1
o=b6.y
n=b6.z
if(n==null)n=H.a([0],t.n)
m=b6.Q
l=b6.ch
k=b6.cx
if(k==null)k=2
j=b6.cy
if(j==null)j=0
i=b6.db
if(i==null)i=0.75
h=b6.d
if(h==null)h=C.m
g=b6.dx
if(g==null)g=0.25
f=b6.b
f=f!==!1
e=b6.dy
if(e==null)e=0.25
d=b6.fr
if(d==null)d=0.25
c=b6.fx
b=b6.c
a=V.bg(b5,0,C.c,b5,0)
b=new M.dg(b8,b9,s,r!==!1,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,b5,b5,0,b5,C.j,C.K,0.35,C.l,a,b5,b5,4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,C.c,b5,b5,b5,b5,b5)
b.am(C.c,b5,b5)
b.bA(b7)
d=Math.max(e,d)
b.k3=d
if(f)b.b_=b.b_+d/2
b.ab=C.j.B(0,s).B(0,b8)
b7=C.j.B(0,s).B(0,b.b_)
b.ah=b7
b.cN(b.ab,b7)
b.aM(b.h8(j).B(0,-1))
if(b.ec==null)b.ec=p*C.e.fz(b8/p)
if(f){a0=b.k3
a1=b.hq()
a2=V.ci(a)
b7=a2.a
b7=b7==null?b5:J.cz(b7)
if(b7!==!1)a2=a2.q1(a1.v())
b7=a2.b
b7=b7==null?b5:J.cz(b7)
if(b7!==!1)a2=a2.q2(a1.v())
a3=S.pc(3.141592653589793,C.l).aY(0)
b7=a3.length
if(0>=b7)return H.b(a3,0)
a4=a3[0]
if(1>=b7)return H.b(a3,1)
a5=a3[1]
if(2>=b7)return H.b(a3,2)
a6=a3[2]
if(3>=b7)return H.b(a3,3)
a7=a3[3]
b7=a5*0
s=a6*0
a8=a7+b7-s
r=a7*0
q=a4*0
a9=r+a6-q
b0=r+q-a5
q=-a4
b1=q-b7-s
s=-a6
b7=-a5
q=S.oQ(3,new M.e(a8*a7+b1*q+a9*s-b0*b7,a9*a7+b1*b7+b0*q-a8*s,b0*a7+b1*s+a8*b7-a9*q))
b2=new V.dL(4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,C.c,b5,b5,b5,b5,b5)
b2.am(C.c,b5,b5)
b2.cW(q,C.c)
b2.cQ(0,3.141592653589793)
b2.eY(a0,!0)
b2.dG(a0,!0)
b2.jG(b)
b2.lh(a2)
b3=b.be()
b4=J.Y(b.gA(b),J.H(b.gA(b))-2)
b2.cQ(0,-b4.R(0,b3).d2()-J.aR(b2.gA(b2)).R(0,b2.es(0.5)).d2()-3.141592653589793)
b2.aM(b3.R(0,J.aR(b2.gA(b2))))
b.pw(b2,C.e5)
b.rx=b2
b.b9(t.a.a(H.a([b2],t.r)))}b.mU()
b7=b6.fy
b.la(b7==null?4:b7)
return b},
je(a){var s,r,q,p,o,n="getStart",m=this.gdu().h8(0),l=new M.e(m.a,m.b,m.c),k=H.a([a.a,a.b,a.c],t.n),j=this.fU
k=new A.as(H.a([k,(j==null?H.c(H.h("axes")):j).gM()],t.bo),t.c2)
k=k.gH(k)
j=t.f7
for(;k.n();){s=k.b
if(s==null)s=H.c(P.au("No element"))
if(1>=s.length)return H.b(s,1)
r=j.a(s[1])
q=r.fV
p=(H.b9(s[0])-q)/(r.b_-q)+0
q=r.r2
if(q!=null){q.aK(n)
q=q.r
q=J.aR(q==null?H.c(H.h("points")):q)}else q=r.dM()
o=r.rx
if(o!=null){o.aK(n)
o=o.r
o=J.aR(o==null?H.c(H.h("points")):o)}else o=r.dL()
l=l.L(0,q.B(0,1-p).L(0,o.B(0,p)).R(0,m))}return l},
v(){return M.pP(this)}}
M.j_.prototype={
$2(a,b){var s=t.fy
return s.a(a).h5(s.a(b))},
$S:45}
M.aS.prototype={
h5(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
if(b==null)b=a.a
s=c.e
if(s==null)s=a.e
r=c.f
if(r==null)r=a.f
q=c.r
if(q==null)q=a.r
p=c.x
if(p==null)p=a.x
o=c.z
if(o==null)o=a.z
n=c.Q
if(n==null)n=a.Q
m=c.cx
if(m==null)m=a.cx
l=c.cy
if(l==null)l=a.cy
k=c.db
if(k==null)k=a.db
j=c.d
if(j==null)j=a.d
i=c.dx
if(i==null)i=a.dx
h=c.b
if(h==null)h=a.b
g=c.dy
if(g==null)g=a.dy
f=c.fr
if(f==null)f=a.fr
e=c.c
if(e==null)e=a.c
d=c.fy
if(d==null)d=a.fy
return M.j0(b,a.fx,e,n,r,h,j,a.y,i,m,l,k,a.ch,o,d,p,q,f,g,s)}}
Y.ew.prototype={
kt(a){var s=this.k3
if(s>0)return s
return Math.pow(10,(a===0?0:C.e.ou(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
bO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.rx,b=H.x(c)
b=P.i(new H.ai(c,b.h("B(1)").a(new Y.kf(d)),b.h("ai<1>")),!0,t.W)
c=t.n
s=H.a([d.k4,d.r1],c)
for(r=b.length,q=d.r2,p=0;p<r;++p){o=b[p]
if(typeof o!=="number")return o.R()
C.a.U(s,H.a([o-q,o+q],c))}C.a.ll(s)
for(c=B.J(s.length/2|0,0,1),b=c.length,r=t.l,q=t.V,n=t.y,p=0;p<c.length;c.length===b||(0,H.f)(c),++p){m=c[p]
if(typeof m!=="number")return m.L()
l=C.a.j(s,m+0)
k=C.a.j(s,m+1)
j=B.n2(k,l,d.kt(l)).aY(0)
if(!J.V(C.a.gt(j),k))C.a.p(j,k)
i=H.a([],r)
for(h=j.length,g=0;g<j.length;j.length===h||(0,H.f)(j),++g){f=H.b9(j[g])
i.push(d.ry.$1(f))}h=H.a([],r)
for(f=i.length,g=0;g<i.length;i.length===f||(0,H.f)(i),++g){e=i[g]
l=e.a
if(!(isNaN(l)||isNaN(e.b)||isNaN(e.c))&&isFinite(l)&&isFinite(e.b)&&isFinite(e.c))h.push(e)}if(h.length!==0){i=n.a(H.a([C.a.gar(h)],r))
f=d.r
J.ak(f==null?H.c(H.h("points")):f,i)
d.mT(B.cy(h,q))}}},
v(){return Y.qp(this)}}
Y.kf.prototype={
$1(a){var s
H.b9(a)
s=this.a
return a>=s.k4&&a<=s.r1},
$S:92}
Y.d5.prototype={
v(){return Y.q3(this)}}
Y.ji.prototype={
$1(a){H.b9(a)
return new M.e(a,this.a.$1(a),0)},
$S:27}
V.dr.prototype={
kd(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=C.n
if(b==null)r=null
else r=b
if(r==null)r=C.n
return V.bg(C.n,this.e,s,r,this.c)},
q1(a){return this.kd(a,null)},
q2(a){return this.kd(null,a)}}
V.hS.prototype={
l(a){return this.b}}
V.eO.prototype={
v(){return V.qU(this)},
pw(a,b){var s=this
if(Math.sqrt(s.bw().R(0,s.be()).bL())===0)return
if(b===C.e4)s.cN(a.es(0.5),s.be())
else s.cN(s.bw(),a.es(0.5))},
c6(a,b){this.dI(a,!1)
this.dF(C.n,!1)
this.hS(a,!0)},
bA(a){return this.c6(a,!0)},
be(){var s=this.rx
if(s!=null){s.aK("getStart")
s=J.aR(s.gA(s))}else s=this.dL()
return s},
bw(){var s=this.r2
if(s!=null){s.aK("getStart")
s=J.aR(s.gA(s))}else s=this.dM()
return s}}
V.dK.prototype={
v(){return V.pK(this)},
bO(){var s=this
s.l8()
s.hy(s.ab,C.h)
s.aM(s.ah)},
l8(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=H.a([],i)
for(s=j.aO,r=j.a9,q=j.bn,s=B.iG(q,r+s,s).aY(0),p=s.length,o=0;o<s.length;s.length===p||(0,H.f)(s),++o){n=s[o]
h.push(C.j.B(0,Math.cos(n)).L(0,C.J.B(0,Math.sin(n))))}s=H.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,H.f)(h),++o){n=h[o]
s.push(new M.e(-n.b,n.a,n.c))}p=H.a([],i)
for(m=B.J(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,H.f)(m),++o){k=m[o]
p.push(C.a.j(h,k).L(0,C.a.j(s,k).B(0,q)))}i=H.a([],i)
for(r=B.J(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,H.f)(r),++o){k=r[o]
i.push(C.a.j(h,k).R(0,C.a.j(s,k).B(0,q)))}s=t.V
j.eV(B.ng(h,s),p,i,B.cy(h,s))}}
V.cA.prototype={
v(){return V.pM(this)}}
V.d_.prototype={
v(){return V.pU(this)},
ge4(){return!0}}
V.d3.prototype={
v(){return V.q_(this)}}
V.dZ.prototype={
v(){return V.q0(this)}}
V.aD.prototype={
v(){return V.qg(this)},
bO(){var s=this
s.eX(H.a([s.ab,s.ah],t.l))
s.mQ()},
mQ(){var s,r,q=this,p=q.aO
if(p===0)return
s=Math.sqrt(q.bw().R(0,q.be()).bL())
if(s<2*p)return
r=p/s
q.hc(q,r,1-r)},
cN(a,b){var s=this
if(s.bw().Z(0,s.be())){s.ab=a
s.ah=b
s.bO()}return s.lP(a,b)}}
V.ex.prototype={
cW(a,b){var s=P.i(a,!0,t.V)
s.push(C.a.gar(a))
this.eX(s)},
v(){return V.qr(this)},
pD(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="points",b2="getStart",b3=b0.dP(0),b4=t.nC,b5=H.a([],b4)
for(s=t.V,r=B.oM(b3,3,s),q=r.length,p=J.oV(b6),o=0;o<r.length;r.length===q||(0,H.f)(r),++o){n=r[o]
m=n.length
if(0>=m)return H.b(n,0)
l=n[0]
if(1>=m)return H.b(n,1)
k=n[1]
if(2>=m)return H.b(n,2)
j=n[2]
i=k.R(0,l)
h=j.R(0,k)
m=i.a
g=i.b
f=i.c
e=m*m+g*g+f*f
d=i.b5(0,Math.sqrt(e))
c=h.a
b=h.b
a=h.c
a0=c*c+b*b+a*a
a1=h.b5(0,Math.sqrt(a0))
a2=Math.acos((m*c+g*b+f*a)/(Math.sqrt(a0)*Math.sqrt(e)))*p.geZ(b6)
a3=b6*Math.tan(a2/2)/2
a4=J.np(i.nN(h).c)
e=k.R(0,d.B(0,a3))
C.a.p(b5,V.pL(a4*a2,k.L(0,a1.B(0,a3)),e))}r=t.l
q=t.y
b0.saT(q.a(H.a([],r)))
b4=H.a([C.a.gt(b5)],b4)
p=t.aY
C.a.U(b4,B.ng(b5,p))
for(b4=B.oM(b4,2,p),p=b4.length,o=0;o<b4.length;b4.length===p||(0,H.f)(b4),++o){a5=b4[o]
m=a5.length
if(0>=m)return H.b(a5,0)
a6=a5[0]
if(1>=m)return H.b(a5,1)
a7=a5[1]
m=a6.r
m=q.a(P.i(m==null?H.c(H.h(b1)):m,!0,s))
g=b0.r
J.ak(g==null?H.c(H.h(b1)):g,m)
m=a6.rx
if(m!=null){m.aK(b2)
m=m.r
m=J.aR(m==null?H.c(H.h(b1)):m)}else m=a6.dL()
g=a7.r2
if(g!=null){g.aK(b2)
g=g.r
g=J.aR(g==null?H.c(H.h(b1)):g)}else g=a7.dM()
a8=V.nC(C.c,g,m)
m=a8.r2
if(m!=null){m.aK(b2)
m=m.r
m=J.aR(m==null?H.c(H.h(b1)):m)}else m=a8.dM()
g=a8.rx
if(g!=null){g.aK(b2)
g=g.r
g=J.aR(g==null?H.c(H.h(b1)):g)}else g=a8.dL()
g=m.R(0,g)
m=g.a
f=g.b
g=g.c
g=Math.sqrt(m*m+f*f+g*g)
f=a6.kk()
m=a6.r
m=C.e.bM(g/f*C.d.b0(J.H(m==null?H.c(H.h(b1)):m),a6.cy))
g=a8.r
if(C.d.ac(J.H(g==null?H.c(H.h(b1)):g),a8.cy)===1){g=a8.r
a9=J.aL(g==null?H.c(H.h(b1)):g)}else a9=null
g=a8.r
a8.saT(q.a(a8.h0(m,P.i(g==null?H.c(H.h(b1)):g,!0,s))))
if(a9!=null){m=q.a(H.a([a9],r))
g=a8.r
J.ak(g==null?H.c(H.h(b1)):g,m)}m=a8.r
m=q.a(P.i(m==null?H.c(H.h(b1)):m,!0,s))
g=b0.r
J.ak(g==null?H.c(H.h(b1)):g,m)}}}
V.ez.prototype={
v(){return V.qA(this)}}
V.cR.prototype={
v(){return V.qW(this)}}
V.dL.prototype={
v(){return V.aM(this)},
saG(a){this.bG=H.b9(a)},
gaG(){return this.bG}}
V.dl.prototype={
f2(a,b,c){this.eY(c,!0)
this.dG(b,!0)},
v(){return V.qz(this)}}
V.eH.prototype={
v(){return V.qN(this)}}
V.eA.prototype={
v(){return V.qB(this)}}
K.bZ.prototype={
v(){return K.qD(this)},
bO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null
if($.mD.an(d.r2)){s=$.mD.j(0,d.r2).v()
d.sbk(t.a.a(s.gM()))
d.sbo(0,s.gbo(s))
d.r1=s.r1
d.k3=d.rx=!0
return}r=d.r2
q=H.a([],t.bD)
p=t.il
o=H.a([],p)
n=H.a([],t.lB)
o=new D.kF("http://www.w3.org/1999/xhtml",o,new D.fq(n))
o.br(0)
n=P.mz(t.N)
m=H.a([],t.t)
m=new V.jL(V.tm(c),c,n,m)
m.siz(new H.a9(r))
m.a="utf-8"
m.b=!0
m.br(0)
r=new Y.e7(m,!0,!0,!1,P.mz(t.nU),new P.a2(""),new P.a2(""),new P.a2(""))
r.br(0)
l=new V.jM(!1,r,o,q)
r.f=l
l.mt()
k=o.gbE(o)
j=H.a([],p)
r=t.kU
i=H.a([],r)
h=L.qs("memory",!1)
r=H.a([],r)
$.fm.b=new F.k3(C.a.gmR(i),h,r)
r=new H.a9("svg")
q=H.a([0],t.t)
g=new Y.hI(c,q,new Uint32Array(H.mX(r.az(r))))
g.hU(r,c)
r=new G.kC(85,117,43,63,new H.a9("CDATA"),g,"svg",!0,0)
q=new G.lu(r)
q.d=t.J.a(r.cJ())
r.e=!0
f=q.pd()
if(f==null||i.length!==0)H.c(P.aC("'svg' is not a valid selector: "+H.l(i),c,c))
new B.eC().jT(0,k,f,j)
r=j.length
q=t.a
e=0
for(;e<j.length;j.length===r||(0,H.f)(j),++e)d.b9(q.a(d.eN(j[e],new K.eB(C.r,c,c))))
$.mD.q(0,d.r2,d.v())},
eN(a,b){var s,r,q,p,o,n,m,l,k=this,j=null,i=t.f,h=H.a([],i),g=a.y,f=g==null?j:g.toLowerCase(),e=b.bN(k.bt(a))
if(f==="defs")k.pS(a)
else if(f!=="style")if(C.a.G(H.a(["g","svg","symbol"],t.s),f)){i=H.a([],i)
for(g=t.v,g=P.i(new H.an(a.gj5(a).a,g),!1,g.h("k.E")),s=H.x(g),g=new J.ay(g,g.length,s.h("ay<1>")),s=s.c;g.n();)C.a.U(i,k.eN(s.a(g.d),e))
C.a.U(h,i)}else if(f==="path"){r=a.b.j(0,"d")
if(r!=null&&r.length!==0)C.a.p(h,k.eq(r,e,a))}else if(f==="use")C.a.U(h,k.pT(a,e))
else if(f==="rect"){q=k.aN(a.b.j(0,"rx"))
i=a.b
if(q===0){i=k.aN(i.j(0,"width"))
p=V.hw(C.c,k.aN(a.b.j(0,"height")),i)}else{i=k.aN(i.j(0,"width"))
g=k.aN(a.b.j(0,"height"))
s=H.a([C.q,C.Y,C.Z,C.a_],t.l)
p=new V.eA(4,0,!1,0.01,!1,0.000001,4,j,j,j,C.c,j,j,j,j,j)
p.am(C.c,j,j)
p.cW(s,C.c)
p.f2(C.c,g,i)
p.pD(q)}p.aM(p.aL(C.h).R(0,p.aL(C.q)))
C.a.p(h,k.bX(e.bN(k.bt(a)),p))}else if(f==="ellipse"){o=k.aN(a.b.j(0,"cx"))
n=k.aN(a.b.j(0,"cy"))
m=k.aN(a.b.j(0,"rx"))
l=k.aN(a.b.j(0,"ry"))
p=new V.dZ(0,6.283185307179586,1,C.h,9,0.35,C.l,V.bg(j,0,C.c,j,0),j,j,4,0,!1,0.01,!1,0.000001,4,j,j,j,C.c,j,j,j,j,j)
p.am(C.c,j,j)
p.bA(C.c)
p.eY(m*2,!0)
p.dG(l*2,!0)
p.aM(C.j.B(0,o).L(0,C.m.B(0,n)))
C.a.p(h,k.bX(e.bN(k.bt(a)),p))}else if(f==="circle"){o=k.aN(a.b.j(0,"cx"))
n=k.aN(a.b.j(0,"cy"))
p=V.pT(C.h,C.c,k.aN(a.b.j(0,"r")))
p.aM(C.j.B(0,o).L(0,C.m.B(0,n)))
C.a.p(h,k.bX(e.bN(k.bt(a)),p))}else if(f==="polygon"||f==="polyline")C.a.p(h,k.p5(a,e))
else P.bU("Unknown SVG element "+H.l(f))
k.ox(a,K.cm(h))
return h},
eq(a,b,c){var s=K.qE(a)
if(c!=null)return this.bX(b.bN(this.bt(c)),s)
else return this.bX(b,s)},
jO(a,b){return this.eq(a,b,null)},
pT(a,b){var s,r,q,p=a.b,o=p.gaD(),n=P.i(o,!0,H.D(o).h("k.E"))
o=p.gav(p)
s=P.i(o,!0,H.D(o).h("k.E"))
r=C.a.jx(n,new K.kn())
if(r>=0){if(r>=s.length)return H.b(s,r)
q=s[r]}else q=null
o=q==null?null:H.a(q.split("#"),t.s)
if(o==null)o=[]
q=C.a.aC(B.cy(o,t.z),"")
o=this.ry
if(!o.an(q))P.bU("SVG ref "+q+" not recognized")
o=o.j(0,q)
o.toString
return this.eN(o,b.bN(this.bt(a)))},
aN(a){var s,r,q,p,o,n
if(a===""||a==null||a==="none")a="0.0"
s=P.i(C.ac,!0,t.N)
s.push("+")
s.push("-")
s.push(".")
s.push("e")
s.push("E")
r=H.a([],t.s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
if(C.a.G(s,n))r.push(n)}return P.bT(C.a.aW(r))},
p5(a,b){var s,r,q,p,o,n=this,m=a.b.j(0,"points")
m.toString
for(s=m,r=0;r<10;++r){q=C.ac[r]
m=" "+q
p=" L"+q
s=H.bt(s,m,p)}b=b.bN(n.bt(a))
o=n.jO("M"+s,b)
return n.bX(b.bN(n.bt(a)),o)},
jd(a){var s,r,q,p,o,n
if(a===""||a==="none")return C.n
if(a==null)return null
s=H.a([3,4,6,8],t.t)
if(a==="currentcolor")return this.ga0(this)
else if(C.b.a1(a,"rgba")){r=H.a(a.split(""),t.s)
q=a.length-1
P.aF(5,q,r.length)
p=H.bf(r,5,q,t.N).aW(0).split(",")
q=p.length
if(0>=q)return H.b(p,0)
r=P.bT(p[0])
if(1>=q)return H.b(p,1)
o=P.bT(p[1])
if(2>=q)return H.b(p,2)
n=P.bT(p[2])
if(3>=q)return H.b(p,3)
return new V.M(r,o,n,P.bT(p[3]))}else if(C.b.a1(a,"rgb")){r=H.a(a.split(""),t.s)
q=a.length-1
P.aF(4,q,r.length)
p=H.bf(r,4,q,t.N).aW(0).split(",")
q=p.length
if(0>=q)return H.b(p,0)
r=P.bT(p[0])
if(1>=q)return H.b(p,1)
o=P.bT(p[1])
if(2>=q)return H.b(p,2)
return new V.M(r,o,P.bT(p[2]),1)}else if(C.b.a1(a,"#")||C.a.G(s,a.length))return V.rL(a)
else{P.bU("unimplented type of color: "+a)
return null}},
bX(a,b){b.lf(a.a,a.b,a.c)
return b},
bt(a){var s,r,q=a.b.j(0,"fill"),p=q==null?null:q.toLowerCase()
q=a.b.j(0,"stroke")
s=q==null?null:q.toLowerCase()
r=a.b.j(0,"stroke-width")
return new K.eB(this.jd(p),this.jd(s),this.aN(r))},
ox(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a1.b.j(0,"x")!=null&&a1.b.j(0,"y")!=null){s=this.aN(a1.b.j(0,"x"))
r=this.aN(a1.b.j(0,"y"))
a2.aM(C.j.B(0,s).L(0,C.m.B(0,r)))}q=a1.b.j(0,"transform")
if(q==null)q=""
p=["matrix","translate","scale","rotate","skewX","skewY"]
o=H.a([],t.s)
for(n=0;n<6;++n)o.push(p[n]+"[^)]*\\)")
m=P.at(C.a.aC(o,"|")).ca(0,q)
l=P.at("[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][-+]?\\d+)?")
for(o=new H.dw(m.a,m.b,m.c),k=t.lu,j=t.n,i=t.o,h=t.b;o.n();){g=k.a(o.d).b
if(0>=g.length)return H.b(g,0)
f=g[0].split("(")
g=f.length
if(0>=g)return H.b(f,0)
e=J.nt(f[0])
d=H.a([],j)
if(1>=g)return H.b(f,1)
g=l.ca(0,f[1])
g=new H.dw(g.a,g.b,g.c)
for(;g.n();){c=k.a(g.d).b
if(0>=c.length)return H.b(c,0)
c=c[0]
c.toString
d.push(P.bT(c))}switch(e){case"matrix":b=S.aA(null,H.a([d],h)).pz(3,2)
i.a(new S.O(2,0,i))
g=b.a
if(2>=g.length)return H.b(g,2)
g=J.Y(g[2],0)
i.a(new S.O(2,1,i))
d=b.a
if(2>=d.length)return H.b(d,2)
d=J.Y(d[2],1)
a=S.fA(3)
i.a(new S.O(0,0,i))
c=b.a
if(0>=c.length)return H.b(c,0)
c=J.Y(c[0],0)
a.bh(i.a(new S.O(0,0,i)),c)
i.a(new S.O(0,1,i))
c=b.a
if(0>=c.length)return H.b(c,0)
c=J.Y(c[0],1)
a.bh(i.a(new S.O(0,1,i)),c)
i.a(new S.O(1,0,i))
c=b.a
if(1>=c.length)return H.b(c,1)
c=J.Y(c[1],0)
a.bh(i.a(new S.O(1,0,i)),c)
i.a(new S.O(1,1,i))
c=b.a
if(1>=c.length)return H.b(c,1)
c=J.Y(c[1],1)
a.bh(i.a(new S.O(1,1,i)),c)
c=i.a(new S.O(1,0,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.bh(c,J.Y(a0[1],0)*-1)
c=i.a(new S.O(1,1,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.bh(c,J.Y(a0[1],1)*-1)
c=i.a(new S.O(1,2,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.bh(c,J.Y(a0[1],2)*-1)
c=i.a(new S.O(0,1,i))
a0=a.a
if(0>=a0.length)return H.b(a0,0)
a.bh(c,J.Y(a0[0],1)*-1)
c=i.a(new S.O(1,1,i))
a0=a.a
if(1>=a0.length)return H.b(a0,1)
a.bh(c,J.Y(a0[1],1)*-1)
c=i.a(new S.O(2,1,i))
a0=a.a
if(2>=a0.length)return H.b(a0,2)
a.bh(c,J.Y(a0[2],1)*-1)
a2.n7(a)
a2.aM(C.j.B(0,g).L(0,C.m.B(0,d)))
break
case"scale":g=d.length
if(g===1){if(0>=g)return H.b(d,0)
g=d[0]
a2.eR(0,new M.e(g,g,1),C.h)}else if(g===2){if(0>=g)return H.b(d,0)
c=d[0]
if(1>=g)return H.b(d,1)
a2.eR(0,new M.e(c,d[1],1),C.h)}break
case"translate":g=d.length
if(0>=g)return H.b(d,0)
s=d[0]
if(g===2){if(1>=g)return H.b(d,1)
r=d[1]}else r=0
a2.aM(C.j.B(0,s).L(0,C.m.B(0,r)))
break}}},
hn(a){var s,r=t.il,q=H.a([],r)
if(a.b.an("id"))return H.a([a],r)
for(r=t.v,r=P.i(new H.an(a.gj5(a).a,r),!1,r.h("k.E")),s=H.x(r),r=new J.ay(r,r.length,s.h("ay<1>")),s=s.c;r.n();)C.a.U(q,this.hn(s.a(r.d)))
return q},
pS(a){var s,r,q,p,o,n
for(s=this.hn(a),r=s.length,q=this.ry,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
n=o.b.j(0,"id")
n.toString
q.q(0,n,o)}},
en(){var s,r=this
r.aM(r.aL(C.h).B(0,C.e8).B(0,-1))
if(r.gbo(r)!=null){s=r.gbo(r)
s.toString
r.l7(s)}},
sbo(a,b){this.k4=H.ow(b)},
snL(a,b){this.r2=H.av(b)},
gbo(a){return this.k4}}
K.kn.prototype={
$1(a){var s
t.K.a(a)
s=J.bs(a)
return C.b.G(s.l(a),"href")&&C.b.G(s.l(a),"xlink")},
$S:48}
K.dm.prototype={
v(){return K.qF(this)},
kq(){var s=H.a(["M","L","H","V","C","S","Q","T","A","Z"],t.s),r=P.i(s,!0,t.N)
C.a.U(r,new H.F(s,t.gL.a(new K.kp()),t.gQ))
return r},
bO(){var s,r,q,p,o,n,m,l=this,k=P.at("["+C.a.aW(l.kq())+"]"),j=l.k3,i=k.ca(0,j),h=t.N,g=H.D(i)
g=H.k1(i,g.h("o(k.E)").a(new K.ko()),g.h("k.E"),h)
s=P.i(g,!0,H.D(g).h("k.E"))
r=B.cy(C.b.cp(j,k),h)
for(j=B.J(s.length,0,1),i=j.length,q=null,p=0;p<j.length;j.length===i||(0,H.f)(j),++p,q=n){o=j[p]
n=C.a.j(s,o)
m=C.a.j(r,o)
l.ov(n,m,q==null?"":q)}l.eE(0,3.141592653589793,C.h,C.j)},
ov(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="addCubicBezierCurveTo",a0="points",a1=a4.toUpperCase(),a2=J.c7(b.gA(b))?J.aL(b.gA(b)):new M.e(0,0,0),a3=b.lz(a1,a5,a4!==a4.toUpperCase(),a2)
switch(a1){case"M":if(0>=a3.length)return H.b(a3,0)
s=t.V
r=t.y.a(H.a([s.a(a3[0])],t.l))
J.ak(b.gA(b),r)
for(s=B.cy(a3,s),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)b.d1(s[q])
return
case"H":case"V":case"L":for(s=a3.length,q=0;q<a3.length;a3.length===s||(0,H.f)(a3),++q)b.d1(a3[q])
return
case"C":for(s=B.J(a3.length,0,3),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){l=s[q]
if(typeof l!=="number")return l.L()
k=C.a.j(a3,l+0)
j=C.a.j(a3,l+1)
i=C.a.j(a3,l+2)
m.a(k)
m.a(j)
m.a(i)
b.aK(a)
h=b.r
if(C.d.ac(J.H(h==null?H.c(H.h(a0)):h),n)===1){k=o.a(H.a([k,j,i],p))
j=b.r
J.ak(j==null?H.c(H.h(a0)):j,k)}else{h=b.r
k=o.a(H.a([J.aL(h==null?H.c(H.h(a0)):h),k,j,i],p))
j=b.r
J.ak(j==null?H.c(H.h(a0)):j,k)}}return
case"S":g=C.a.G(H.a(["C","S"],t.s),a6.toUpperCase())?J.Y(b.gA(b),J.H(b.gA(b))-2):a2
for(s=B.J(a3.length,0,2),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){l=s[q]
f=a2.B(0,2).R(0,g)
k=C.a.j(a3,l)
if(typeof l!=="number")return l.L()
j=l+1
i=C.a.j(a3,j)
m.a(k)
m.a(i)
b.aK(a)
h=b.r
if(C.d.ac(J.H(h==null?H.c(H.h(a0)):h),n)===1){k=o.a(H.a([f,k,i],p))
i=b.r
J.ak(i==null?H.c(H.h(a0)):i,k)}else{h=b.r
k=o.a(H.a([J.aL(h==null?H.c(H.h(a0)):h),f,k,i],p))
i=b.r
J.ak(i==null?H.c(H.h(a0)):i,k)}a2=C.a.j(a3,j)
g=C.a.j(a3,l)}return
case"Q":for(s=B.J(a3.length,0,2),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){l=s[q]
k=C.a.j(a3,l)
if(typeof l!=="number")return l.L()
j=C.a.j(a3,l+1)
m.a(k)
m.a(j)
i=k.B(0,0.6666666666666666)
h=b.r
i=i.L(0,J.aL(h==null?H.c(H.h(a0)):h).B(0,0.3333333333333333))
k=k.B(0,0.6666666666666666).L(0,j.B(0,0.3333333333333333))
b.aK(a)
h=b.r
if(C.d.ac(J.H(h==null?H.c(H.h(a0)):h),n)===1){k=o.a(H.a([i,k,j],p))
j=b.r
J.ak(j==null?H.c(H.h(a0)):j,k)}else{h=b.r
k=o.a(H.a([J.aL(h==null?H.c(H.h(a0)):h),i,k,j],p))
j=b.r
J.ak(j==null?H.c(H.h(a0)):j,k)}}return
case"T":e=C.a.G(H.a(["Q","T"],t.s),a6.toUpperCase())?J.cX(J.Y(b.gA(b),J.H(b.gA(b))-2),1.5).R(0,J.cX(J.aL(b.gA(b)),0.5)):a2
for(s=a3.length,r=t.l,p=t.y,o=b.cy,n=t.V,q=0;q<a3.length;a3.length===s||(0,H.f)(a3),++q,e=c,a2=d){d=a3[q]
c=a2.B(0,2).R(0,e)
n.a(d)
m=c.B(0,0.6666666666666666)
k=b.r
m=m.L(0,J.aL(k==null?H.c(H.h(a0)):k).B(0,0.3333333333333333))
k=c.B(0,0.6666666666666666).L(0,d.B(0,0.3333333333333333))
b.aK(a)
j=b.r
if(C.d.ac(J.H(j==null?H.c(H.h(a0)):j),o)===1){m=p.a(H.a([m,k,d],r))
k=b.r
J.ak(k==null?H.c(H.h(a0)):k,m)}else{j=b.r
m=p.a(H.a([J.aL(j==null?H.c(H.h(a0)):j),m,k,d],r))
k=b.r
J.ak(k==null?H.c(H.h(a0)):k,m)}}return
case"A":for(s=B.J(a3.length,0,3),r=s.length,p=t.l,o=t.y,n=b.cy,m=t.V,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){l=s[q]
k=C.a.j(a3,l)
if(typeof l!=="number")return l.L()
j=C.a.j(a3,l+1)
i=C.a.j(a3,l+2)
m.a(k)
m.a(j)
m.a(i)
b.aK(a)
h=b.r
if(C.d.ac(J.H(h==null?H.c(H.h(a0)):h),n)===1){k=o.a(H.a([k,j,i],p))
j=b.r
J.ak(j==null?H.c(H.h(a0)):j,k)}else{h=b.r
k=o.a(H.a([J.aL(h==null?H.c(H.h(a0)):h),k,j,i],p))
j=b.r
J.ak(j==null?H.c(H.h(a0)):j,k)}}return
case"Z":if(!b.jb(J.aR(b.gA(b)),J.aL(b.gA(b)))){s=C.a.gt(b.eP(P.i(b.gA(b),!0,t.V)))
if(0>=s.length)return H.b(s,0)
b.d1(s[0])}return}},
lz(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=K.tW(a0),c=t.l,b=H.a([],c)
if(a==="A"){for(c=K.oZ(d,2,t.W),s=c.length,r=null,q=0;q<c.length;c.length===s||(0,H.f)(c),++q){p=c[q]
if(r!=null)a2=r
if(a1){if(5>=p.length)return H.b(p,5)
o=p[5]
if(typeof o!=="number")return o.L()
C.a.q(p,5,o+a2.a)
if(6>=p.length)return H.b(p,6)
o=p[6]
if(typeof o!=="number")return o.L()
C.a.q(p,6,o+a2.b)}o=p.length
if(5>=o)return H.b(p,5)
n=p[5]
if(a2.a===n){if(6>=o)return H.b(p,6)
m=a2.b===p[6]}else m=!1
if(m)continue
m=p[0]
l=p[1]
k=p[2]
j=p[3]
i=p[4]
if(6>=o)return H.b(p,6)
C.a.U(b,K.tv(a2,m,l,k,j,i,new M.e(n,p[6],0)))
n=p.length
if(5>=n)return H.b(p,5)
i=p[5]
if(6>=n)return H.b(p,6)
r=new M.e(i,p[6],0)}return b}else if(a==="H")if(a1){c=H.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,H.f)(d),++q)c.push(new M.e(d[q],0,0))
b=c
a1=!0}else{c=H.a([],c)
for(s=d.length,o=a2.b,q=0;q<d.length;d.length===s||(0,H.f)(d),++q)c.push(new M.e(d[q],o,0))
b=c
a1=!1}else if(a==="V")if(a1){c=H.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,H.f)(d),++q)c.push(new M.e(0,d[q],0))
b=c
a1=!0}else{c=H.a([],c)
for(s=d.length,o=a2.a,q=0;q<d.length;d.length===s||(0,H.f)(d),++q)c.push(new M.e(o,d[q],0))
b=c
a1=!1}else{c=H.a([],c)
for(s=K.oZ(d,2,t.W),o=s.length,q=0;q<s.length;s.length===o||(0,H.f)(s),++q){h=s[q]
n=h.length
if(0>=n)return H.b(h,0)
m=h[0]
if(1>=n)return H.b(h,1)
c.push(new M.e(m,h[1],0))}b=c}if(!a1)return b
if(a==="Q"||a==="S")g=2
else g=a==="C"?3:1
for(c=B.J(b.length,0,1),s=c.length,f=a2,q=0;q<c.length;c.length===s||(0,H.f)(c),++q){e=c[q]
C.a.q(b,e,C.a.j(b,e).L(0,f))
if(typeof e!=="number")return e.L()
if(C.e.ac(e+1,g)===0)f=C.a.j(b,e)}return b}}
K.kp.prototype={
$1(a){return H.av(a).toLowerCase()},
$S:25}
K.ko.prototype={
$1(a){var s=t.lu.a(a).b
if(0>=s.length)return H.b(s,0)
s=s[0]
s.toString
return s},
$S:50}
K.eB.prototype={
bN(a){var s,r,q=a.a
if(q==null)q=this.a
s=a.b
if(s==null)s=this.b
r=a.c
return new K.eB(q,s,r==null?this.c:r)},
l(a){return"fill: "+H.l(this.a)+", stroke: "+H.l(this.b)+" "+H.l(this.c)+"pt"}}
Y.eN.prototype={
v(){return Y.qT(this)}}
Y.bK.prototype={
v(){return Y.qH(this)},
ji(){var s=this,r=s.a9
C.b.eF(r)
s.a9=Y.qI(r)
if(!$.cP.an(s.ab)||!$.cP.j(0,s.ab).an(s.a9))throw H.d(s.a9+" need to be preloaded")
r=$.cP.j(0,s.ab).j(0,s.a9)
r.toString
s.snL(0,r)
s.saT(t.y.a(H.a([],t.l)))
s.sbk(t.a.a(H.a([],t.r)))
s.bO()
s.en()
s.bA(s.ga0(s))
s.dE(0.035)},
l(a){return this.bv()+"("+this.a9+")"},
eq(a,b,c){var s=null,r=new Y.eN(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,C.c,s,s,s,s,s)
r.am(C.c,s,s)
if(c!=null)return this.bX(b.bN(this.bt(c)),r)
else return this.bX(b,r)},
jO(a,b){return this.eq(a,b,null)},
sbo(a,b){this.ah=H.ow(b)},
gbo(a){return this.ah}}
Y.dd.prototype={
hT(a,b,c,d,e,f){var s,r=this
r.ab=d
s=r.bG
r.spL(Y.ql(a,r.cD,s))
r.a9=C.a.aC(r.bH,r.b_)
r.ji()
r.nq()
r.l5(s)},
v(){return Y.qk(this)},
nq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="submobjects",a2=H.a([],t.nn)
for(s=a.bH,r=s.length,q=t.a,p=a.b_,o=t.s,n=t.N,m=t.h,l=t.j,k=t.r,j=0,i=0;i<s.length;s.length===r||(0,H.f)(s),++i,j=e){h=new Y.bK(s[i],a.ab,!0,2,a0,"",!0,P.aX(n,m),4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,C.c,a0,a0,a0,a0,a0)
h.am(C.c,a0,a0)
g=h.r
if(J.c7(g==null?H.c(H.h("points")):g))h.en()
h.a=C.c
h.ji()
g=h.d
f=(g==null?H.c(H.h(a1)):g).length
e=j+f+C.a.aC(H.a(p.split(" "),o),"").length
if(f===0){h.sbk(q.a(H.a([K.o3(C.h)],k)))
g=a.d
d=Math.min(j,(g==null?H.c(H.h(a1)):g).length-1)
if(d>>>0!==d||d>=g.length)return H.b(g,d)
g=l.a(g[d])
h.c4(g.aL(C.j))}else{g=a.d
if(g==null)g=H.c(H.h(a1))
P.aF(j,e,g.length)
c=H.x(g)
b=new H.aJ(g,j,e,c.h("aJ<1>"))
b.cq(g,j,e,c.c)
h.sbk(q.a(b.az(0)))}C.a.p(a2,h)}a.sbk(q.a(a2))},
kp(a,b,c){var s,r,q,p,o=new Y.k2(!0,!0),n=H.a([],t.nn)
for(s=this.gM(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
if(p instanceof Y.bK&&H.aG(o.$2(a,p.a9)))n.push(p)}return n},
l4(a,b,c,d){var s,r,q,p=this.kp(a,!0,!0)
for(s=p.length,r=0;r<p.length;p.length===s||(0,H.f)(p),++r){q=p[r]
q.dF(b,!0)
q.dI(b,!0)
q.hQ(b,!0)}},
l5(a){var s,r
t.fg.a(a)
for(s=a.gea(a),s=new P.cq(s.a(),s.$ti.h("cq<1>"));s.n();){r=s.gu()
this.l4(r.a,r.b,!0,!0)}},
spL(a){this.bH=t.bF.a(a)}}
Y.k2.prototype={
$2(a,b){var s
if(!this.a){a=a.toLowerCase()
b=b.toLowerCase()}s=C.b.G(b,a)
return s},
$S:51}
Y.eM.prototype={
v(){return Y.qS(this)}}
U.h6.prototype={
lW(a){this.b9(t.a.a(H.a([this.x],t.r)))
this.fv()}}
U.dR.prototype={
gjM(a){var s=this.dy
return s==null?H.c(H.h("onClick")):s},
lU(a,b){this.sm2(t.M.a(b))},
fv(){var s,r,q
H.iD(t.nB,t.e,"IEvent","addEventListener")
s=t.mc
r=new Y.bj(t.kL.a(new U.j3(this)),C.v,s)
q=$.dH()
t.d3.a(r)
q=q.gcc().j(0,C.v)
q.toString
C.a.p(q,r)
this.sm3(s.a(r))},
v(){return U.pS(this)},
sm3(a){this.dx=t.e0.a(a)},
sm2(a){this.dy=t.jE.a(a)},
oX(a){return this.gjM(this).$0()}}
U.j3.prototype={
$1(a){var s=this.a,r=s.x,q=t.nB.a(a).c,p=q.a
if(p>=r.aL(C.K).a-0.1)if(p<=r.aL(C.j).a+0.1){q=q.b
r=q>=r.aL(C.m).b-0.1&&q<=r.aL(C.J).b+0.1}else r=!1
else r=!1
if(r){s.oX(0)
return!0}return!1},
$S:52}
Y.I.prototype={
ga0(a){var s=this.a
return s},
gI(a){var s=this.b
return s==null?H.c(H.h("name")):s},
gM(){var s=this.d
return s==null?H.c(H.h("submobjects")):s},
ga6(){var s=this.f
return s==null?H.c(H.h("updatingSuspended")):s},
gA(a){var s=this.r
return s==null?H.c(H.h("points")):s},
am(a,b,c){var s=this,r=s.bv()
s.b=r
s.sbk(t.a.a(H.a([],t.r)))
s.f=!1
s.saT(t.y.a(H.a([],t.l)))
s.jy()
s.bO()},
l(a){return this.bv()},
bv(){var s=this.hR(0),r=P.at("^Instance of '(.*?)'$").ju(s).b
if(1>=r.length)return H.b(r,1)
r=r[1]
r.toString
return r},
jy(){},
bO(){},
b9(a){var s,r,q,p,o,n=t.a
n.a(a)
if(C.a.G(a,this))throw H.d("Mobject can't contain itself")
s=P.i(a,!0,t.j)
for(r=this.gM(),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p){o=r[p]
if(!C.a.G(a,o))s.push(o)}this.sbk(n.a(s))},
cz(a,b,c){var s,r,q,p,o,n,m,l
t.ew.a(c)
if(b==null)b=this.aL(a)
for(s=this.dz(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
m=H.a([],p)
l=n.r
l=J.K(l==null?H.c(H.h("points")):l)
for(;l.n();)m.push(J.mm(c.$1(l.gu().R(0,b)),b))
n.saT(q.a(m))}},
iY(a){return this.cz(C.h,null,a)},
v(){return Y.qm(this)},
k9(a,b){var s,r,q,p=this
if(p.ga6())return
s=p.e
if(s==null){s=H.a([],t.po)
p.sm5(s)}r=0
for(;!1;++r)s[r].$2(p,a)
for(s=p.gM(),q=s.length,r=0;r<s.length;s.length===q||(0,H.f)(s),++r)s[r].k9(a,!0)},
k8(a){return this.k9(a,!0)},
aM(a){return this.iY(new Y.kb(a))},
eR(a,b,c){return this.cz(C.h,c,new Y.ka(b))},
dD(a,b){return this.eR(a,b,null)},
eS(a,b,c){return this.cz(b,c,new Y.k9(a))},
dE(a){return this.eS(a,C.h,null)},
hy(a,b){return this.eS(a,C.h,b)},
eE(a,b,c,d){this.cz(C.h,c,new Y.k8(S.tR(b,d).gk7()))},
cQ(a,b){return this.eE(a,b,null,C.l)},
pC(a,b,c){return this.eE(a,b,c,C.l)},
ly(a,b,c,d){return this.cz(c,d,new Y.kc(b,a))},
n7(a){var s={},r=S.fA(3)
s.a=r
s.a=r.cf(0,new Y.k4(a))
this.iY(new Y.k5(s))},
jY(a,b,c,d,e){var s,r=this.oM(b)
if(r===0)return
s=a/r
if(e)this.ly(s,b,c,d)
else this.eS(s,c,d)},
eY(a,b){this.jY(a,0,C.h,null,b)},
dG(a,b){this.jY(a,1,C.h,null,b)},
l7(a){return this.dG(a,!1)},
c4(a){this.aM(a.R(0,this.aL(C.h)).B(0,new M.e(1,1,1)))},
cN(a,b){var s,r=this,q=r.bw(),p=r.be(),o=p.R(0,q)
if(q.Z(0,p))throw H.d("Cannot position endpoints of a closed loop")
s=b.R(0,a)
r.hy(Math.sqrt(s.bL())/Math.sqrt(o.bL()),q)
r.pC(0,s.d2()-o.d2(),q)
r.aM(a.R(0,q))},
c6(a,b){var s,r,q
for(s=this.gM(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].c6(a,!0)
this.a=a},
dd(a,b){var s,r,q
for(s=this.gM(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].dd(a,!0)},
jo(a){return this.dd(a,!0)},
bP(){var s,r,q,p,o=H.a([this],t.r)
for(s=this.gM(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)C.a.U(o,s[q].bP())
p=P.my(o,t.j)
return P.i(p,!0,H.D(p).h("b_.E"))},
dz(){var s=this.bP(),r=H.x(s),q=r.h("ai<1>")
return P.i(new H.ai(s,r.h("B(1)").a(new Y.k6()),q),!0,q.h("k.E"))},
hp(){var s,r,q,p,o=H.a([],t.l)
for(s=this.dz(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q].r
C.a.U(o,p==null?H.c(H.h("points")):p)}return o},
ht(){return this.hp()},
eM(a,b,c){var s,r,q
t.fA.a(c)
s=H.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,H.f)(c),++q)s.push(c[q].eK(a))
if(b<0)return C.a.aR(s,C.L)
else if(b===0)return(C.a.aR(s,C.L)+C.a.aR(s,C.y))/2
else return C.a.aR(s,C.y)},
aL(a){var s=this,r=s.ht()
if(r.length===0)return C.h
return new M.e(s.eM(0,C.e.bM(a.a),r),s.eM(1,C.e.bM(a.b),r),s.eM(2,C.e.bM(a.c),r))},
oM(a){var s,r,q,p=this.hp()
if(p.length===0)return 1
s=H.x(p)
r=new H.F(p,s.h("q(1)").a(new Y.k7(a)),s.h("F<1,q>"))
q=r.aR(0,C.L)
return r.aR(0,C.y)-q},
bw(){this.aK("getStart")
return J.aR(this.gA(this))},
be(){this.aK("getEnd")
return J.aL(this.gA(this))},
gm(a){return this.dJ(0).length},
dJ(a){var s=this,r=H.a([],t.r)
if(J.c7(s.gA(s)))r.push(s)
C.a.U(r,s.gM())
return r},
fp(a){var s,r,q,p,o,n,m=this
if(J.cz(m.gA(m))&&J.c7(a.gA(a)))a.jS()
if(J.cz(a.gA(a))&&J.c7(m.gA(m)))m.jS()
s=m.dJ(0).length
r=a.dJ(0).length
m.iO(Math.max(0,r-s))
a.iO(Math.max(0,s-r))
m.iU(a)
for(q=new A.as(H.a([m.gM(),a.gM()],t.Z),t.Y),q=q.gH(q);q.n();){p=q.b
if(p==null)p=H.c(P.au("No element"))
o=p.length
if(0>=o)return H.b(p,0)
n=p[0]
if(1>=o)return H.b(p,1)
n.fp(p[1])}},
hs(){throw H.d("getPointMobject not implemented for "+H.l(this.gko())+"()")},
iU(a){var s=this,r=J.H(s.gA(s)),q=J.H(a.gA(a))
if(r<q)s.iV(a)
else if(r>q)a.iV(s)},
iV(a){throw H.d("Not implemented")},
jS(){var s=this.v(),r=t.r,q=t.a
s.sbk(q.a(H.a([],r)))
this.saT(t.y.a(H.a([],t.l)))
this.b9(q.a(H.a([s],r)))},
iO(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.dJ(0).length
if(s===0){r=H.a([],t.r)
for(q=B.J(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,H.f)(q),++o)r.push(a1.hs())
a1.sbk(t.a.a(r))}n=s+a2
r=t.t
q=H.a([],r)
for(p=B.J(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.f)(p),++o){l=p[o]
if(typeof l!=="number")return l.B()
q.push(C.e.b0(l*s,n))}p=H.a([],r)
for(m=B.J(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,H.f)(m),++o){i=m[o]
h=H.a([],r)
for(g=q.length,f=J.bs(i),e=0;e<q.length;q.length===g||(0,H.f)(q),++e)if(f.Z(i,q[e]))h.push(1)
else h.push(0)
p.push(B.mi(h,j))}d=H.a([],t.r)
for(r=new A.as(H.a([a1.gM(),p],t.bo),t.c2),r=r.gH(r),q=t.j;r.n();){c=r.b
if(c==null)c=H.c(P.au("No element"))
p=c.length
if(0>=p)return H.b(c,0)
b=q.a(c[0])
if(1>=p)return H.b(c,1)
a=H.a0(c[1])
C.a.p(d,b)
for(p=B.J(a,1,1),m=p.length,o=0;o<p.length;p.length===m||(0,H.f)(p),++o){a0=b.v()
a0.jo(1)
C.a.p(d,a0)}}a1.sbk(t.a.a(d))},
h1(a,b,c){},
hc(a,b,c){},
fs(a){var s,r,q,p,o,n,m
this.fp(a)
for(s=new A.as(H.a([this.bP(),a.bP()],t.Z),t.Y),s=s.gH(s),r=t.V,q=t.y;s.n();){p=s.b
if(p==null)p=H.c(P.au("No element"))
o=p.length
if(0>=o)return H.b(p,0)
n=p[0]
if(1>=o)return H.b(p,1)
m=p[1]
o=m.r
n.saT(q.a(P.i(o==null?H.c(H.h("points")):o,!0,r)))
n.h1(n,m,1)}},
aK(a){var s
if(J.c7(this.gA(this)))return
s="Cannot call Mobject."+a+" , the mobject doesn't have any points"
throw H.d(s)},
sbk(a){this.d=t.kQ.a(a)},
sm5(a){this.e=t.gr.a(a)},
saT(a){this.r=t.fA.a(a)}}
Y.kb.prototype={
$1(a){return a.L(0,this.a)},
$S:3}
Y.ka.prototype={
$1(a){return a.B(0,this.a)},
$S:3}
Y.k9.prototype={
$1(a){return a.B(0,this.a)},
$S:3}
Y.k8.prototype={
$1(a){return a.cg(this.a)},
$S:3}
Y.kc.prototype={
$1(a){var s=this.a
return a.q3(s,a.eK(s)*this.b)},
$S:3}
Y.k4.prototype={
$2(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gag(r).a
if(typeof s!=="number")return s.eI()
if(typeof q!=="number")return H.b3(q)
if(s<q){s=b.b
q=r.gag(r).b
if(typeof s!=="number")return s.eI()
if(typeof q!=="number")return H.b3(q)
q=s>=q
s=q}else s=!0
return s?a:r.by(b)},
$S:4}
Y.k5.prototype={
$1(a){return a.cg(this.a.a)},
$S:3}
Y.k6.prototype={
$1(a){t.j.a(a)
return J.H(a.gA(a))>0},
$S:13}
Y.k7.prototype={
$1(a){return t.V.a(a).eK(this.a)},
$S:24}
Y.d6.prototype={
v(){return Y.q6(this)}}
K.Q.prototype={
v(){return K.r1(this)},
jy(){var s=this,r=s.db
s.l6(r==null?H.a([s.ga0(s)],t.O):r)
r=s.dx
if(r==null)r=H.a([s.ga0(s)],t.O)
s.ld(r,s.gaG())
s.l3(s.dy,s.y)},
cU(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=H.a([],s)
if(b!=null)C.a.U(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.dC(),p=q.length,o=0;o<q.length;q.length===p||(0,H.f)(q),++o)q[o].hB(r,!1)
if(r.length!==0){if(n.db==null)n.scd(r)
q=n.db
q.toString
q=J.H(q)
p=r.length
if(q<p){q=n.db
q.toString
n.scd(B.cW(q,p,t.G))}else{q=n.db
q.toString
if(p<J.H(q)){q=n.db
q.toString
n.scd(B.cW(r,J.H(q),t.G))}}s=H.a([],s)
q=n.db
q.toString
q=B.J(J.H(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.f)(q),++o)s.push(C.a.j(r,q[o]))
n.scd(s)}},
dF(a,b){return this.cU(a,null,b)},
hB(a,b){return this.cU(null,a,b)},
hA(a){return this.cU(a,null,!0)},
l6(a){return this.cU(null,a,!0)},
bS(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=H.a([],s)
if(c!=null)C.a.U(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.dC(),p=q.length,o=0;o<q.length;q.length===p||(0,H.f)(q),++o)q[o].le(a,r,!1,e)
if(r.length!==0)if(a){if(n.dy==null)n.scA(r)
q=n.dy
q.toString
q=J.H(q)
p=r.length
if(q<p){q=n.dy
q.toString
n.scA(B.cW(q,p,t.G))}else{q=n.dy
q.toString
if(p<J.H(q)){q=n.dy
q.toString
n.scA(B.cW(r,J.H(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=B.J(J.H(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.f)(q),++o)s.push(C.a.j(r,q[o]))
n.sbT(s)}else{if(n.dx==null)n.sbT(r)
q=n.dx
q.toString
q=J.H(q)
p=r.length
if(q<p){q=n.dx
q.toString
n.sbT(B.cW(q,p,t.G))}else{q=n.dx
q.toString
if(p<J.H(q)){q=n.dx
q.toString
n.sbT(B.cW(r,J.H(q),t.G))}}s=H.a([],s)
q=n.dx
q.toString
q=B.J(J.H(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,H.f)(q),++o)s.push(C.a.j(r,q[o]))
n.sbT(s)}if(e!=null)if(a)n.y=e
else n.saG(e)},
dI(a,b){return this.bS(!1,a,null,b,null)},
le(a,b,c,d){return this.bS(a,null,b,c,d)},
lc(a,b){return this.bS(!1,null,a,b,null)},
la(a){return this.bS(!1,null,null,!0,a)},
lb(a,b){return this.bS(!1,a,null,!0,b)},
ld(a,b){return this.bS(!1,null,a,!0,b)},
eW(a,b,c,d){return this.bS(!0,a,t.x.a(b),c,d)},
l2(a,b){return this.eW(null,a,b,null)},
l3(a,b){return this.eW(null,a,!0,b)},
hD(a,b){return this.lg(a.d,a.e,b,a.a,a.b,a.c)},
lh(a){return this.hD(a,!0)},
hC(a,b,c,d,e,f,g,h){var s=t.x
s.a(e)
s.a(g)
s.a(a)
this.cU(d,e,c)
this.bS(!1,f,g,c,h)
this.eW(null,a,c,b)},
lg(a,b,c,d,e,f){return this.hC(a,b,c,null,d,null,e,f)},
lf(a,b,c){return this.hC(null,null,!0,a,null,b,null,c)},
hq(){var s=J.Y(this.bu(),0)
return s},
c6(a,b){this.dF(a,!0)
this.dI(a,!0)
this.hQ(a,!0)},
bA(a){return this.c6(a,!0)},
jH(a,b){var s,r,q,p="removeWhere",o=a.bu(),n=a.cT(),m=a.gaG(),l=a.bx(!0),k=a.y
this.hD(new K.eQ(o,n,m,l,k),!1)
s=this.gM()
r=a.gM()
if(s.length===0)return
else if(r.length===0)r=H.a([a],t.r)
o=H.x(s).h("B(1)").a(new K.kY())
if(!!s.fixed$length)H.c(P.T(p))
C.a.fj(s,o,!0)
o=H.x(r).h("B(1)").a(new K.kZ())
if(!!r.fixed$length)H.c(P.T(p))
C.a.fj(r,o,!0)
for(o=t.j,o=B.tO(s,r,o,o),o=P.bH([o.a,o.b],!1,t.z),o=new A.as(new H.aT(o,H.x(o).h("aT<1,m<Q>>")),t.pn),o=o.gH(o);o.n();){q=o.b
if(q==null)q=H.c(P.au("No element"))
n=q.length
if(0>=n)return H.b(q,0)
m=q[0]
if(1>=n)return H.b(q,1)
m.jH(q[1],!0)}},
jG(a){return this.jH(a,!0)},
dd(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=H.a([],n)
for(s=J.K(p.bu());s.n();){r=s.gu()
q=r.d
m.push(new V.M(r.a,r.b,r.c,q*o))}p.hB(m,!0)
m=H.a([],n)
for(s=J.K(p.cT());s.n();){r=s.gu()
q=r.d
m.push(new V.M(r.a,r.b,r.c,q*o))}p.lc(m,!0)
n=H.a([],n)
for(m=J.K(p.bx(!0));m.n();){s=m.gu()
r=s.d
n.push(new V.M(s.a,s.b,s.c,r*o))}p.l2(n,!0)
p.lO(a,!0)},
jo(a){return this.dd(a,!0)},
bu(){var s=this.db
return s==null?H.a([C.n],t.O):s},
bx(a){var s=a?this.dy:this.dx
return s==null||J.cz(s)?H.a([C.n],t.O):s},
cT(){return this.bx(!1)},
kl(){var s,r,q,p,o,n=this.aL(C.h),m=H.a([],t.b)
for(s=[C.j,C.J,C.l],r=t.n,q=0;q<3;++q){p=this.aL(s[q]).R(0,n)
m.push(H.a([p.a,p.b,p.c],r))}o=C.j.cg(S.aA(null,m).gk7())
return new S.O(n.R(0,o),n.L(0,o),t.iu)},
eV(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=t.y
f.a(a)
f.a(b)
f.a(c)
f.a(d)
s=g.cy
r=a.length
q=H.a([],t.l)
for(r=B.J(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,H.f)(r),++o)q.push(C.h)
g.saT(f.a(q))
n=H.a([a,b,c,d],t.Q)
for(f=B.J(s,0,1),r=f.length,q=t.S,o=0;o<f.length;f.length===r||(0,H.f)(f),++o){m=f[o]
l=C.a.j(n,m)
p=g.r
for(p=B.iE(B.J(J.H(p==null?H.c(H.h("points")):p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,H.f)(p),++j){i=p[j]
h=g.r
if(h==null)h=H.c(H.h("points"))
J.iJ(h,i.b,l[C.d.ac(i.a,l.length)])}}},
mS(a,b,c){var s,r,q=this
q.aK("addCubicBezierCurveTo")
s=t.l
r=t.y
if(C.d.ac(J.H(q.gA(q)),q.cy)===1){s=r.a(H.a([a,b,c],s))
J.ak(q.gA(q),s)}else{s=r.a(H.a([J.aL(q.gA(q)),a,b,c],s))
J.ak(q.gA(q),s)}},
d1(a){var s,r,q,p,o,n,m=[]
for(s=B.iG(this.cy,1,0).jv(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=this.r
m.push(J.aL(o==null?H.c(H.h("points")):o).B(0,1-p).L(0,a.B(0,p)))}s=m.length
if(1>=s)return H.b(m,1)
r=t.V
o=r.a(m[1])
if(2>=s)return H.b(m,2)
n=r.a(m[2])
if(3>=s)return H.b(m,3)
return this.mS(o,n,r.a(m[3]))},
mT(a){var s,r
t.y.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.f)(a),++r)this.d1(a[r])},
eX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=B.iG(this.cy,1,0).aY(0)
r=t.V
q=S.iO(B.cy(a,r))
p=S.iO(B.ng(a,r))
r=H.a([],t.fp)
for(o=s.length,n=0;n<s.length;s.length===o||(0,H.f)(s),++n){m=s[n]
r.push(p.B(0,1-m).L(0,q.B(0,m)))}o=H.a([],t.Q)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,H.f)(r),++n){j=r[n]
i=H.a([],k)
h=j.a
g=h.length
f=0
for(;f<h.length;h.length===g||(0,H.f)(h),++f){e=h[f]
d=J.X(e)
i.push(new M.e(d.j(e,0),d.j(e,1),d.j(e,2)))}o.push(i)}r=o.length
if(0>=r)return H.b(o,0)
l=o[0]
if(1>=r)return H.b(o,1)
k=o[1]
if(2>=r)return H.b(o,2)
i=o[2]
if(3>=r)return H.b(o,3)
this.eV(l,k,i,o[3])},
hx(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(s=this.dC(),r=s.length,q=t.l,p=t.n,o=t.b,n=this.cy,m=0;m<s.length;s.length===r||(0,H.f)(s),++m){l=s[m]
k=l.r
if(J.H(k==null?H.c(H.h("points")):k)<n)continue
j=l.ki()
k=H.a([],o)
if(0>=j.length)return H.b(j,0)
i=j[0]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.f)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}e=S.aA(a4,k)
k=H.a([],o)
if(1>=j.length)return H.b(j,1)
i=j[1]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.f)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}d=S.aA(a4,k)
k=H.a([],o)
if(2>=j.length)return H.b(j,2)
i=j[2]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.f)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}c=S.aA(a4,k)
k=H.a([],o)
if(3>=j.length)return H.b(j,3)
i=j[3]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.f)(i),++g){f=i[g]
k.push(H.a([f.a,f.b,f.c],p))}b=S.aA(a4,k)
a=d.R(0,e)
a0=c.R(0,b)
k=H.a([],q)
i=a.b
i=e.L(0,S.cY(a5,i==null?H.c(H.h("shape")):i).B(0,a)).a
h=i.length
g=0
for(;g<i.length;i.length===h||(0,H.f)(i),++g){a1=i[g]
a2=J.X(a1)
k.push(new M.e(a2.j(a1,0),a2.j(a1,1),a2.j(a1,2)))}i=H.a([],q)
h=a0.b
h=b.L(0,S.cY(a5,h==null?H.c(H.h("shape")):h).B(0,a0)).a
a2=h.length
g=0
for(;g<h.length;h.length===a2||(0,H.f)(h),++g){a1=h[g]
a3=J.X(a1)
i.push(new M.e(a3.j(a1,0),a3.j(a1,1),a3.j(a1,2)))}h=j.length
if(0>=h)return H.b(j,0)
a2=j[0]
if(3>=h)return H.b(j,3)
l.eV(a2,k,i,j[3])}},
fE(a,b){var s=this.cx,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
jb(a,b){var s
if(!this.fE(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.cx+0.00001*Math.abs(s))return!1
return!0},
eJ(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=F.jZ(a,new K.kS(l,C.d.ac(J.H(a),this.cy)),t.V)
l.a=P.i(s,!0,s.$ti.h("k.E"))
s=H.a([],t.ez)
for(r=B.J(J.H(l.a),0,4),q=r.length,p=t.cn,o=0;o<r.length;r.length===q||(0,H.f)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.L()
s.push(new S.ds(J.Y(m,n+0),J.Y(l.a,n+1),J.Y(l.a,n+2),J.Y(l.a,n+3),p))}return s},
ic(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.gw.a(b)
s=this.cy
r=B.J(a.length,s,s)
q=H.x(r)
q=P.i(new H.ai(r,q.h("B(1)").a(b),q.h("ai<1>")),!0,t.S)
q.push(a.length)
r=H.a([0],t.t)
C.a.U(r,q)
p=H.a([],t.Q)
for(r=new A.as(H.a([r,q],t.fC),t.lb),r=r.gH(r),q=H.x(a),o=q.c,q=q.h("aJ<1>");r.n();){n=r.b
if(n==null)n=H.c(P.au("No element"))
if(1>=n.length)return H.b(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.R()
if(typeof l!=="number")return H.b3(l)
if(m-l>=s){H.a0(l)
H.a0(m)
P.aF(l,m,a.length)
k=new H.aJ(a,l,m,q)
k.cq(a,l,m,o)
p.push(k.az(0))}}return p},
eP(a){t.y.a(a)
return this.ic(a,new K.kV(this,a))},
ku(a){t.y.a(a)
return this.ic(a,new K.kU(this,a))},
es(a){var s=this,r=s.cy,q=B.n9(0,C.d.b0(J.H(s.gA(s)),r),a),p=q.a
return B.n3(J.nq(s.gA(s),r*p,r*(p+1)).az(0)).$1(q.b)},
ki(){var s,r,q,p=H.a([],t.Q)
for(s=B.J(this.cy,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)p.push(this.dP(s[q]))
return p},
dP(a){var s=F.jZ(this.gA(this),new K.kO(this,a),t.V)
return P.i(s,!0,s.$ti.h("k.E"))},
kh(){var s,r=this
if(J.H(r.gA(r))===1)return r.gA(r)
s=t.b5
s=A.ny(P.i(new A.as(H.a([r.dP(0),r.dP(r.cy-1)],t.Q),s),!0,s.h("k.E")),t.V)
return P.i(s,!0,s.$ti.h("k.E"))},
ht(){var s,r,q,p=H.a([],t.l)
for(s=this.dC(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)C.a.U(p,s[q].kh())
return p},
kk(){var s,r,q,p,o=this,n=4*C.d.b0(J.H(o.gA(o)),o.cy)+1,m=t.l,l=H.a([],m)
for(s=B.iG(n,1,0).aY(0),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)l.push(o.es(s[q]))
m=H.a([],m)
for(s=B.J(n-1,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
if(typeof p!=="number")return p.L()
m.push(C.a.j(l,p+1).R(0,C.a.j(l,p)))}l=t.aQ
return B.mi(P.i(new H.F(m,t.eL.a(new K.kT()),l),!0,l.h("C.E")),t.W)},
iU(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.bX.a(a2)
a0.n5(a2)
if(J.H(a0.gA(a0))===J.H(a2.gA(a2)))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
if(J.cz(n==null?H.c(H.h(a1)):n)){n=q.a(H.a([o.aL(C.h)],r))
m=o.r
J.ak(m==null?H.c(H.h(a1)):m,n)}n=o.r
if(C.d.ac(J.H(n==null?H.c(H.h(a1)):n),o.cy)===1){n=o.r
o.d1(J.aL(n==null?H.c(H.h(a1)):n))}}s=t.V
l=a0.eP(P.i(a0.gA(a0),!0,s))
k=a2.eP(P.i(a2.gA(a2),!0,s))
j=Math.max(l.length,k.length)
i=H.a([],r)
h=H.a([],r)
g=a0.cy
f=new K.kR(g)
for(s=B.J(j,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){e=s[p]
d=f.$2(l,e)
c=f.$2(k,e)
n=J.X(c)
m=J.X(d)
b=Math.max(0,C.d.b0(n.gm(c)-m.gm(d),g))
a=Math.max(0,C.d.b0(m.gm(d)-n.gm(c),g))
d=a0.h0(b,d)
c=a0.h0(a,c)
C.a.U(i,d)
C.a.U(h,c)}a0.saT(q.a(i))
a2.saT(q.a(h))},
h0(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=H.a([],t.l)
for(r=B.J(this.cy*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)C.a.U(s,a8)
return s}o=this.eJ(a8)
n=o.length
m=n+a7
s=t.t
r=H.a([],s)
for(q=B.J(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,H.f)(q),++p){k=q[p]
if(typeof k!=="number")return k.B()
r.push(C.e.b0(k*n,m))}q=H.a([],s)
for(l=B.J(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,H.f)(l),++p){k=l[p]
h=H.a([],s)
for(g=r.length,f=J.bs(k),e=0;e<r.length;r.length===g||(0,H.f)(r),++e)h.push(f.Z(k,r[e])?1:0)
q.push(B.mi(h,i))}d=H.a([],t.l)
for(s=new A.as(H.a([o,q],t.bo),t.c2),s=s.gH(s),r=t.W,q=t.b,l=t.lx,j=t.z,i=t.cn;s.n();){c=s.b
if(c==null)c=H.c(P.au(a6))
h=c.length
if(0>=h)return H.b(c,0)
b=i.a(c[0])
if(1>=h)return H.b(c,1)
a=B.iG(H.a0(c[1])+1,1,0).aY(0)
for(h=new A.as(H.a([a,B.cy(a,r)],q),l),h=h.gH(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.n();){a2=h.b
if(a2==null)a2=H.c(P.au(a6))
a3=P.bH([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return H.b(a2,0)
a5=a2[0]
if(1>=a4)return H.b(a2,1)
C.a.U(d,B.mf(new H.aT(a3,H.x(a3).h("aT<1,e>")),a5,a2[1]))}}return d},
n5(a){var s,r,q,p,o,n,m,l,k=new K.kP(),j=new K.kQ()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.X(o)
l=J.X(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,B.cW(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,B.cW(o,l.gm(n),r))}},
hs(){var s=this.aL(C.h),r=K.o3(s)
r.jG(this)
return r},
h1(a,b,c){var s,r=this,q=t.bX
q.a(a)
q.a(b)
r.scd(B.na(a.bu(),b.bu(),c))
r.sbT(B.na(a.cT(),b.cT(),c))
r.scA(B.na(a.bx(!0),b.bx(!0),c))
q=t.W
r.saG(B.p0(a.gaG(),b.gaG(),c,q))
r.sne(B.p0(a.y,b.y,c,q))
s=new K.kX()
if(c===1){q=b.db
r.scd(q!=null?s.$1(q):null)
q=b.dx
r.sbT(q!=null?s.$1(q):null)
q=b.dy
r.scA(q!=null?s.$1(q):null)
r.saG(b.gaG())
r.y=b.y}},
hc(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
t.bX.a(a)
if(b<=0&&c>=1){e.saT(t.y.a(P.i(a.gA(a),!0,t.V)))
return}s=t.y
r=a.eJ(s.a(P.i(a.gA(a),!0,t.V)))
q=r.length
p=B.n9(0,q,b)
o=B.n9(0,q,c)
n=p.a
m=p.b
l=o.a
k=o.b
e.saT(s.a(H.a([],t.l)))
if(q===0)return
j=r.length
if(n===l){if(n>>>0!==n||n>=j)return H.b(r,n)
j=J.fo(r[n])
j=s.a(B.mf(new H.aT(j,H.x(j).h("aT<1,e>")),m,k))
J.ak(e.gA(e),j)}else{if(n>>>0!==n||n>=j)return H.b(r,n)
j=J.fo(r[n])
j=s.a(B.mf(new H.aT(j,H.x(j).h("aT<1,e>")),m,1))
J.ak(e.gA(e),j)
for(j=n+1,P.aF(j,l,r.length),j=H.bf(r,j,l,H.x(r).c),i=j.$ti,j=new H.N(j,j.gm(j),i.h("N<C.E>")),i=i.h("C.E"),h=t.z;j.n();){g=i.a(j.d)
g=P.bH([g.a,g.b,g.c,g.d],!1,h)
g=s.a(new H.aT(g,H.x(g).h("aT<1,e>")))
f=e.r
J.ak(f==null?H.c(H.h("points")):f,g)}if(l>>>0!==l||l>=r.length)return H.b(r,l)
j=J.fo(r[l])
j=s.a(B.mf(new H.aT(j,H.x(j).h("aT<1,e>")),0,k))
J.ak(e.gA(e),j)}},
dC(){var s,r,q,p,o=H.a([],t.f)
for(s=this.bP(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
if(p instanceof K.Q)o.push(p)}return o},
saG(a){this.x=H.b9(a)},
sne(a){this.y=H.b9(a)},
scd(a){this.db=t.x.a(a)},
sbT(a){this.dx=t.x.a(a)},
scA(a){this.dy=t.x.a(a)},
gaG(){return this.x},
ge4(){return this.z}}
K.a3.prototype={
$1(a){return t.G.a(a).v()},
$S:9}
K.a4.prototype={
$1(a){return t.G.a(a).v()},
$S:9}
K.a5.prototype={
$1(a){return t.G.a(a).v()},
$S:9}
K.kY.prototype={
$1(a){return!(t.j.a(a) instanceof K.Q)},
$S:13}
K.kZ.prototype={
$1(a){return!(t.j.a(a) instanceof K.Q)},
$S:13}
K.kS.prototype={
$2(a,b){t.V.a(b)
return a<J.H(this.a.a)-this.b},
$S:22}
K.kV.prototype={
$1(a){var s,r,q
H.a0(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.b(s,r)
r=s[r]
if(a<0||a>=q)return H.b(s,a)
return!this.a.jb(r,s[a])},
$S:16}
K.kU.prototype={
$1(a){var s,r,q
H.a0(a)
s=this.b
r=a-1
q=s.length
if(r<0||r>=q)return H.b(s,r)
r=s[r]
if(a<0||a>=q)return H.b(s,a)
return!this.a.fE(r,s[a])},
$S:16}
K.kO.prototype={
$2(a,b){t.V.a(b)
return C.d.ac(a,this.a.cy)===this.b},
$S:22}
K.kT.prototype={
$1(a){return Math.sqrt(t.V.a(a).bL())},
$S:24}
K.kR.prototype={
$2(a,b){var s,r,q,p
t.ls.a(a)
s=a.length
if(b>=s){s=H.a([],t.l)
for(r=B.J(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,H.f)(r),++p)s.push(C.a.gt(C.a.gt(a)))
return s}if(b<0)return H.b(a,b)
return a[b]},
$S:58}
K.kP.prototype={
$2(a,b){switch(a){case"fillColors":return b.bu()
case"strokeColors":return b.cT()
case"backgroundStrokeColors":return b.bx(!1)
default:throw H.d(u.v+a)}},
$S:59}
K.kQ.prototype={
$3(a,b,c){t.ev.a(c)
switch(a){case"fillColors":b.scd(c)
break
case"strokeColors":b.sbT(c)
break
case"backgroundStrokeColors":b.scA(c)
break
default:throw H.d(u.v+a)}},
$S:60}
K.kX.prototype={
$1(a){var s=t.G
return P.i(J.t(t.ev.a(a),new K.kW(),s),!0,s)},
$S:77}
K.kW.prototype={
$1(a){return t.G.a(a).v()},
$S:9}
K.eQ.prototype={}
K.cl.prototype={
hV(a){var s=a==null?H.a([],t.r):a
this.b9(t.a.a(s))},
v(){return K.mJ(this)}}
K.eR.prototype={
v(){return K.r2(this)}}
Z.dJ.prototype={
gau(a){var s=this.d
return s==null?H.c(H.h("display")):s},
li(a){this.d=a}}
F.fI.prototype={
gbb(){var s=this.e
return s==null?H.c(H.h("ctx")):s},
eC(a){var s,r,q=this,p=q.gau(q).gas(),o=q.gau(q).e1(a)
C.t.sfY(q.gbb(),o.ds())
s=p.c
r=p.d
q.gbb().fillRect(0-s/2,0-r/2,p.c,p.d)},
pv(a){var s,r,q,p,o,n,m=this,l=t.y.a(P.i(a.gA(a),!0,t.V)),k=m.gau(m).gas().k6(a,l)
if(k.length===0)return
s=a.ku(k)
for(l=s.length,r="",q=0;q<s.length;s.length===l||(0,H.f)(s),++q)r+=m.kv(a,s[q])
p=W.qq(r)
m.iZ(p,a,!0)
o=a.bu()
if(J.H(o)>1)C.t.sfY(m.gbb(),m.jj(a,o))
else{n=m.gau(m).e1(J.Y(a.bu(),0))
C.t.sfY(m.gbb(),n.ds())}m.gbb().fill(p)
m.iZ(p,a,!1)},
kv(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.eJ(b)
r=J.aP(b)
q=r.gar(b)
p="M "+H.l(q.a)+" "+H.l(q.b)
o=a.fE(r.gar(b),r.gt(b))
for(r=s.length,n=0;n<s.length;s.length===r||(0,H.f)(s),++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+H.l(l.a)+" "+H.l(l.b)+" "+H.l(k.a)+" "+H.l(k.b)+" "+H.l(j.a)+" "+H.l(j.b)}return o?p+" Z":p},
jj(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this
t.ev.a(b)
s=a.kl()
r=t.y.a(H.a([s.a,s.b],t.l))
q=g.gau(g).gas().k6(a,r)
r=g.gbb()
p=q.length
if(0>=p)return H.b(q,0)
o=q[0]
n=o.a
o=o.b
if(1>=p)return H.b(q,1)
p=q[1]
p=r.createLinearGradient(n,o,p.a,p.b)
p.toString
o=J.X(b)
m=1/(o.gm(b)-1)
l=B.n2(m+1,0,m).aY(0)
for(r=B.J(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,H.f)(r),++k){j=r[k]
i=g.d
if(i==null)i=H.c(H.h("display"))
h=i.e1(o.j(b,j))
p.addColorStop(C.a.j(l,j),h.ds())}return p},
iZ(a,b,c){var s,r,q,p,o=this,n=c?b.y:b.gaG()
if(n===0)return
s=b.bx(c)
r=o.gau(o).gas().c
o.gbb().lineWidth=n*0.01*(r/14.222222222222221)
r=J.aP(s)
q=r.cC(s,new F.j7())
if(r.gai(s)||q)return
if(r.gm(s)>1)C.t.shO(o.gbb(),o.jj(b,s))
else{p=o.gau(o).e1(J.aR(b.bx(c)))
C.t.shO(o.gbb(),p.ds())}C.t.lA(o.gbb(),a)}}
F.j7.prototype={
$1(a){return t.G.a(a).d===0},
$S:62}
A.hC.prototype={
gdj(){var s=this.d
return s==null?H.c(H.h("mobjects")):s},
gas(){var s=this.f
return s==null?H.c(H.h("camera")):s},
gau(a){var s=this.x
return s==null?H.c(H.h("display")):s},
lX(){this.f=new T.j4(14.222222222222221)
new P.iq().lZ(0)
this.shW(t.a.a(H.a([],t.r)))},
cR(){var s=0,r=P.bQ(t.z),q=1,p,o=[],n=this,m,l,k
var $async$cR=P.bR(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:n.gau(n).fv()
s=2
return P.aw(null,$async$cR)
case 2:q=4
s=7
return P.aw(n.c_(),$async$cR)
case 7:q=1
s=6
break
case 4:q=3
k=p
H.aK(k)
throw k
s=6
break
case 3:s=1
break
case 6:l=n.gas()
l.gau(l).gdq().eC(C.r)
n.gas().he(n.gdj())
s=8
return P.aw(null,$async$cR)
case 8:n.gau(n).pQ()
return P.bO(null,r)
case 1:return P.bN(p,r)}})
return P.bP($async$cR,r)},
cl(a){var s,r,q
for(s=this.gdj(),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)s[q].k8(a)},
b9(a){t.a.a(a)
this.pA(a)
C.a.ei(this.gdj(),0,a)},
pB(a,b){var s,r=this,q=t.a
q.a(b)
s=P.i(b,!0,t.j)
C.a.U(s,r.gas().fP(b))
r.shW(q.a(r.kr(r.gdj(),s)))},
pA(a){return this.pB(!0,a)},
kr(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=H.a([],t.r)
new A.kq(s).$2(a,P.my(b,H.x(b).c))
return s},
ew(a){var s=0,r=P.bQ(t.z),q=this,p,o,n,m
var $async$ew=P.bR(function(b,c){if(b===1)return P.bN(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.x
s=4
return P.aw((o==null?H.c(H.h("display")):o).dl(),$async$ew)
case 4:n=c
p+=n
o=a.a
a.cl(n)
a.di(p/o)
q.cl(n)
o=q.f
o=(o==null?H.c(H.h("camera")):o).r
o=(o==null?H.c(H.h("display")):o).a;(o==null?H.c(H.h("renderer")):o).eC(C.r)
o=q.f
if(o==null)o=H.c(H.h("camera"))
m=q.d
o.he(m==null?H.c(H.h("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.bO(null,r)}})
return P.bP($async$ew,r)},
bd(a,b){var s=0,r=P.bQ(t.z),q=this,p,o
var $async$bd=P.bR(function(c,d){if(c===1)return P.bN(d,r)
while(true)switch(s){case 0:o=q.gas().fP(q.gdj())
b.d4()
p=b.r
if(!C.a.G(o,p)){q.b9(t.a.a(H.a([p],t.r)))
C.a.U(o,p.bP())}s=2
return P.aw(q.ew(b),$async$bd)
case 2:b.fZ()
b.d5(q)
q.cl(0)
return P.bO(null,r)}})
return P.bP($async$bd,r)},
eG(){var s=0,r=P.bQ(t.z),q=this,p,o,n,m
var $async$eG=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.x
s=4
return P.aw((o==null?H.c(H.h("display")):o).dl(),$async$eG)
case 4:n=b
p+=n
q.cl(n)
o=q.f
o=(o==null?H.c(H.h("camera")):o).r
o=(o==null?H.c(H.h("display")):o).a;(o==null?H.c(H.h("renderer")):o).eC(C.r)
o=q.f
if(o==null)o=H.c(H.h("camera"))
m=q.d
o.he(m==null?H.c(H.h("mobjects")):m)
q.a+=n
s=2
break
case 3:return P.bO(null,r)}})
return P.bP($async$eG,r)},
shW(a){this.d=t.kQ.a(a)}}
A.kq.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.ns.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.f)(a),++q){p=a[q]
if(b.G(0,p))continue
o=p.bP()
n=b.oH(0,P.my(o,H.x(o).c))
if(n.a!==0){o=p.d
this.$2(o==null?H.c(H.h("submobjects")):o,n)}else C.a.p(r,p)}},
$S:63}
B.mj.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
B.mh.prototype={
$1(a){return H.a0(a)/this.a*this.b},
$S:64}
B.mk.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("B(j,0)")}}
B.m8.prototype={
$1(a){return t.G.a(a).az(0)},
$S:19}
B.m9.prototype={
$1(a){return t.G.a(a).az(0)},
$S:19}
B.ma.prototype={
$1(a){var s
t.H.a(a)
s=J.X(a)
return new V.M(s.j(a,0),s.j(a,1),s.j(a,2),s.j(a,3))},
$S:66}
B.lS.prototype={
$1(a){var s,r,q,p,o,n,m,l=H.a([],t.l)
for(s=B.iE(this.a,t.V),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,H.f)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return H.b3(m)
l.push(J.cX(n.b,Math.pow(q,p-m)*Math.pow(a,m)*F.oP(p,m,!0)))}return C.a.aR(l,new B.lR())},
$S:27}
B.lR.prototype={
$2(a,b){var s=t.V
return s.a(a).L(0,s.a(b))},
$S:67}
V.M.prototype={
v(){var s=this
return new V.M(s.a,s.b,s.c,s.d)},
az(a){var s=this,r=H.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
ds(){var s=this
return"rgba("+C.e.bM(s.a*255)+", "+C.e.bM(s.b*255)+", "+C.e.bM(s.c*255)+", "+H.l(s.d)+")"},
l(a){return this.ds()}}
V.lG.prototype={
$1(a){return P.cv(a,16)/255},
$S:68}
A.cE.prototype={
Z(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.cE&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s},
B(a,b){var s=this.a,r=b.a,q=this.b,p=b.b
return new A.cE(s*r-q*p,s*p+q*r)}}
Y.bk.prototype={
l(a){return this.b}}
Y.b5.prototype={}
Y.jg.prototype={
gcc(){var s=this.a
return s==null?H.c(H.h("eventListeners")):s},
lV(){var s,r,q=P.aX(t.cY,t.oR)
for(s=t.fO,r=0;r<6;++r)q.q(0,C.bf[r],H.a([],s))
this.sm4(t.fY.a(q))},
cs(a,b,c){var s,r,q
H.iD(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=P.i(c.h("m<bj<0>>").a(b),!0,c.h("bj<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=C.a.gt(s)
C.a.a5(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
e7(a){var s,r=this
switch(a.a){case C.z:t.m6.a(a)
s=r.gcc().j(0,C.z)
s.toString
r.cs(a,s,t.e)
break
case C.A:t.oJ.a(a)
s=r.gcc().j(0,C.A)
s.toString
r.cs(a,s,t.e)
break
case C.v:t.nB.a(a)
s=r.gcc().j(0,C.v)
s.toString
r.cs(a,s,t.e)
break
case C.B:t.gn.a(a)
s=r.gcc().j(0,C.B)
s.toString
r.cs(a,s,t.e)
break
case C.M:t.lY.a(a)
s=r.gcc().j(0,C.M)
s.toString
r.cs(a,s,t.e)
break
case C.N:t.am.a(a)
s=r.gcc().j(0,C.N)
s.toString
r.cs(a,s,t.e)
break}},
sm4(a){this.a=t.pp.a(a)}}
Y.bj.prototype={}
Y.hc.prototype={}
Y.er.prototype={}
Y.es.prototype={}
Y.bI.prototype={}
Y.eq.prototype={}
Y.ep.prototype={
f1(a){switch(this.a){case 0:break
case 1:break
case 2:break
default:break}}}
O.kA.prototype={
$1(a){return H.iB(a)!=null},
$S:6}
F.lU.prototype={
$2(a,b){return H.a0(a)*H.a0(b)},
$S:11}
F.lV.prototype={
$2(a,b){return H.a0(a)*H.a0(b)},
$S:11}
S.bv.prototype={
gav(a){var s=this.a
return s},
gag(a){var s=this.b
return s==null?H.c(H.h("shape")):s},
L(a,b){return this.cf(0,new S.iU(typeof b=="number"?S.cY(b,this.gag(this)):t.A.a(b)))},
R(a,b){return this.cf(0,new S.iW(b))},
B(a,b){return this.cf(0,new S.iV(typeof b=="number"?S.cY(b,this.gag(this)):t.A.a(b)))},
cf(a,b){var s,r,q,p=this
t.iJ.a(b)
s=B.iE(p.gav(p),t.H)
r=H.x(s)
q=r.h("F<1,m<q>>")
q=P.i(new H.F(s,r.h("m<q>(1)").a(new S.iT(b)),q),!0,q.h("C.E"))
return S.aA(p.gag(p),q)},
by(a){var s,r
t.o.a(a)
s=a.a
r=this.gav(this)
if(s>>>0!==s||s>=r.length)return H.b(r,s)
return J.Y(r[s],a.b)},
bh(a,b){var s,r,q,p,o=this
t.o.a(a)
s=a.a
r=o.gag(o).a
if(typeof s!=="number")return s.ac()
if(typeof r!=="number")return H.b3(r)
q=C.d.ac(s,r)
r=a.b
s=o.gag(o).b
if(typeof r!=="number")return r.ac()
if(typeof s!=="number")return H.b3(s)
p=C.e.ac(r,s)
s=o.gav(o)
if(q<0||q>=s.length)return H.b(s,q)
J.iJ(s[q],p,b)},
mD(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.gag(f).a
if(typeof e!=="number")return e.R()
s=f.gag(f).b
if(typeof s!=="number")return s.R()
r=H.a([],t.b)
for(q=B.J(f.gag(f).a,0,1),p=q.length,o=t.n,n=0;n<q.length;q.length===p||(0,H.f)(q),++n){m=q[n]
if(!J.V(m,a)){l=H.a([],o)
k=f.b
k=B.J((k==null?H.c(H.h("shape")):k).a,0,1)
j=k.length
i=0
for(;i<k.length;k.length===j||(0,H.f)(k),++i){h=k[i]
if(!J.V(h,b)){g=f.a
l.push(J.Y(C.a.j(g,m),h))}}r.push(l)}}return S.aA(new S.O(e-1,s-1,t.o),r)},
hr(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(J.V(h.gag(h).a,2)){s=h.gav(h)
if(0>=s.length)return H.b(s,0)
r=J.Y(s[0],0)
s=h.gav(h)
if(0>=s.length)return H.b(s,0)
q=J.Y(s[0],1)
s=h.gav(h)
if(1>=s.length)return H.b(s,1)
p=J.Y(s[1],0)
s=h.gav(h)
if(1>=s.length)return H.b(s,1)
return r*J.Y(s[1],1)-q*p}s=h.gag(h).a
if(typeof s!=="number")return s.R()
o=h.gag(h).b
if(typeof o!=="number")return o.R()
n=new S.O(s-1,o-1,t.o)
o=H.a([],t.n)
for(s=B.J(h.gag(h).a,0,1),m=s.length,l=0;l<s.length;s.length===m||(0,H.f)(s),++l){k=s[l]
if(typeof k!=="number")return k.ac()
j=C.e.ac(k,2)===0?1:-1
i=h.a
if(0>=i.length)return H.b(i,0)
o.push(j*S.cY(J.Y(i[0],k),n).B(0,h.mD(0,k)).hr())}return B.mi(o,t.W)},
kn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this
if(a8.hr()===0)throw H.d("This matrix is not inversible")
s=a8.gag(a8).a
r=a8.gag(a8).b
q=a8.v()
p=S.fA(s)
for(o=B.J(r,0,1),n=o.length,m=s-1,l=r-1,k=t.o,j=0;j<o.length;o.length===n||(0,H.f)(o),++j){i=o[j]
for(h=i,g=-1,f=-1;h!==s;++h){k.a(new S.O(h,i,k))
e=q.a
if(h<0||h>=e.length)return H.b(e,h)
d=J.Y(e[h],i)
if(d>f){f=d
g=h}}e=q.a
c=e.length
if(g<0||g>=c)return H.b(e,g)
b=e[g]
if(i>>>0!==i||i>=c)return H.b(e,i)
e[g]=e[i]
C.a.q(e,i,b)
e=p.a
c=e.length
if(g>=c)return H.b(e,g)
a=e[g]
if(i!==(i|0)||i>=c)return H.b(e,i)
e[g]=e[i]
C.a.q(e,i,a)
e=J.X(b)
a0=e.j(b,i)
for(a1=i;a1<r;++a1){c=e.j(b,a1)
if(typeof c!=="number")return c.b5()
e.q(b,a1,c/a0)}for(c=J.X(a),a1=l;a1>=0;--a1){a2=c.j(a,a1)
if(typeof a2!=="number")return a2.b5()
c.q(a,a1,a2/a0)}for(a1=i+1,g=m;g>=0;--g)if(g!==i){a2=q.a
if(g>=a2.length)return H.b(a2,g)
a3=a2[g]
a2=p.a
if(g>=a2.length)return H.b(a2,g)
a4=a2[g]
a2=J.X(a3)
a0=a2.j(a3,i)
for(a5=a1;a5!==r;++a5){a6=a2.j(a3,a5)
a7=e.j(b,a5)
if(typeof a7!=="number")return a7.B()
if(typeof a6!=="number")return a6.R()
a2.q(a3,a5,a6-a7*a0)}for(a2=J.X(a4),a5=l;a5>0;--a5){a6=a2.j(a4,a5)
a7=c.j(a,a5)
if(typeof a7!=="number")return a7.B()
if(typeof a6!=="number")return a6.R()
a2.q(a4,a5,a6-a7*a0);--a5
a7=a2.j(a4,a5)
a6=c.j(a,a5)
if(typeof a6!=="number")return a6.B()
if(typeof a7!=="number")return a7.R()
a2.q(a4,a5,a7-a6*a0)}if(a5===0){a6=a2.j(a4,0)
a7=c.j(a,0)
if(typeof a7!=="number")return a7.B()
if(typeof a6!=="number")return a6.R()
a2.q(a4,0,a6-a7*a0)}}}return p},
aY(a){var s=this.gav(this),r=H.x(s),q=r.h("F<1,q>")
return P.i(new H.F(s,r.h("q(1)").a(new S.iR(a)),q),!0,q.h("C.E"))},
gk7(){return this.cf(0,new S.iX(this))},
cg(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.gag(c),a=c.gag(c).b,a0=a2.gag(a2).b,a1=S.cY(0,new S.O(c.gag(c).a,a2.gag(a2).b,t.o))
for(b=B.J(b.a,0,1),s=b.length,r=0;r<b.length;b.length===s||(0,H.f)(b),++r){q=b[r]
for(p=B.J(a0,0,1),o=p.length,n=0;n<p.length;p.length===o||(0,H.f)(p),++n){m=p[n]
for(l=B.J(a,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,H.f)(l),++j){i=l[j]
h=a1.a
h=C.a.j(h,q)
g=J.X(h)
f=g.j(h,m)
e=c.a
e=J.Y(C.a.j(e,q),i)
d=a2.a
d=J.Y(C.a.j(d,i),m)
if(typeof e!=="number")return e.B()
if(typeof d!=="number")return H.b3(d)
if(typeof f!=="number")return f.L()
g.q(h,m,f+e*d)}}}return a1},
v(){return this.e2(new S.iQ())},
e2(a){return this.cf(0,new S.iP(t.f3.a(a)))},
jv(){var s,r,q,p,o=H.a([],t.n)
for(s=this.gav(this),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)for(p=J.K(s[q]);p.n();)o.push(p.gu())
return o},
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=H.l(d.gag(d).a)+"x"+H.l(d.gag(d).b),b=H.a([],t.t)
for(s=d.gav(d),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q)for(p=J.K(s[q]);p.n();)b.push(C.e.hk(p.gu(),6).length)
o=C.a.ef(b,6,C.a0,t.S)
for(b=d.gav(d),s=b.length,r=o+4,p=t.s,n="",q=0;q<b.length;b.length===s||(0,H.f)(b),++q){m=b[q]
n+="      "
for(l=J.K(m);l.n();){k=l.gu()
j=k<0?"-":" "
k=Math.abs(k)
i=C.e.hk(k,6)
h=H.a([],p)
for(i=B.J(r-i.length,0,1),g=i.length,f=0;f<i.length;i.length===g||(0,H.f)(i),++f)h.push(" ")
e=C.a.aW(h)
n=n+j+C.e.hk(k,6)+e}n+="\n"}return c+" matrix\n"+n},
pz(a,b){var s,r,q,p,o,n,m,l,k=this.jv(),j=S.cY(0,new S.O(a,b,t.o))
for(s=B.iE(k,t.W),r=s.length,q=0;q<s.length;s.length===r||(0,H.f)(s),++q){p=s[q]
o=p.a
n=C.d.ac(o,a)
m=C.d.b0(o,a)
l=j.a
if(n>=l.length)return H.b(l,n)
J.iJ(l[n],m,p.b)}return j},
sm1(a){this.b=t.nm.a(a)}}
S.iU.prototype={
$2(a,b){return a+this.a.by(t.o.a(b))},
$S:4}
S.iW.prototype={
$2(a,b){return a-this.a.by(t.o.a(b))},
$S:4}
S.iV.prototype={
$2(a,b){return a*this.a.by(t.o.a(b))},
$S:4}
S.iT.prototype={
$1(a){var s,r,q
t.kk.a(a)
s=B.iE(a.b,t.W)
r=H.x(s)
q=r.h("F<1,q>")
return P.i(new H.F(s,r.h("q(1)").a(new S.iS(this.a,a)),q),!0,q.h("C.E"))},
$S:70}
S.iS.prototype={
$1(a){t.d7.a(a)
return this.a.$2(a.b,new S.O(this.b.a,a.a,t.o))},
$S:71}
S.iR.prototype={
$1(a){return J.Y(t.H.a(a),this.a)},
$S:72}
S.iX.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.by(new S.O(b.b,b.a,s))},
$S:4}
S.iQ.prototype={
$1(a){return a},
$S:5}
S.iP.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:4}
S.mg.prototype={
$2(a,b){var s=t.A
return s.a(a).cg(s.a(b))},
$S:73}
M.e.prototype={
Z(a,b){if(b==null)return!1
return b instanceof M.e&&this.a===b.a&&this.b===b.b&&this.c===b.c},
L(a,b){var s=this
if(typeof b=="number")return new M.e(s.a+b,s.b+b,s.c+b)
else if(b instanceof M.e)return new M.e(s.a+b.a,s.b+b.b,s.c+b.c)
else throw H.d("Vector3 only support addition by num or Vector3")},
R(a,b){return new M.e(this.a-b.a,this.b-b.b,this.c-b.c)},
B(a,b){var s=this
if(typeof b=="number")return new M.e(s.a*b,s.b*b,s.c*b)
else if(b instanceof M.e)return new M.e(s.a*b.a,s.b*b.b,s.c*b.c)
else throw H.d("Vector3 only support multiplication by num or Vector3")},
b5(a,b){return new M.e(this.a/b,this.b/b,this.c/b)},
bL(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
eK(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw H.d("No component at index "+a+" on a vector3")}},
pO(){var s=t.n
s=S.aA(null,H.a([H.a([this.a],s),H.a([this.b],s),H.a([this.c],s)],t.b))
return s},
hm(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new M.e(s,r,c==null?this.c:c)},
q4(a){return this.hm(a,null,null)},
q5(a){return this.hm(null,a,null)},
ke(a){return this.hm(null,null,a)},
q3(a,b){if(a===0)return this.q4(b)
else if(a===1)return this.q5(b)
else if(a===2)return this.ke(b)
else throw H.d("Cannot index a vector3 with index="+a)},
cg(a){var s=S.fA(3).cf(0,new M.l0(a)).cg(this.pO()),r=t.o
return new M.e(s.by(new S.O(0,0,r)),s.by(new S.O(1,0,r)),s.by(new S.O(2,0,r)))},
nN(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new M.e(s*r-q*p,q*o-n*r,n*p-s*o)},
e2(a){t.f3.a(a)
return new M.e(a.$1(this.a),a.$1(this.b),a.$1(this.c))},
hE(a){return this.e2(new M.l1())},
mN(a){return this.e2(new M.l_())},
d2(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l(a){return"vec3("+H.l(this.a)+", "+H.l(this.b)+", "+H.l(this.c)+")"}}
M.l0.prototype={
$2(a,b){var s,r,q
t.o.a(b)
s=b.a
r=this.a
q=r.gag(r).a
if(typeof s!=="number")return s.eI()
if(typeof q!=="number")return H.b3(q)
if(s<q){s=b.b
q=r.gag(r).b
if(typeof s!=="number")return s.eI()
if(typeof q!=="number")return H.b3(q)
q=s>=q
s=q}else s=!0
return s?a:r.by(b)},
$S:4}
M.l1.prototype={
$1(a){return J.np(a)},
$S:5}
M.l_.prototype={
$1(a){return Math.abs(a)},
$S:5}
M.ja.prototype={
mP(a,b){var s,r,q=t.D
M.oK("absolute",H.a([b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.aX(b)>0&&!s.c3(b)
if(s)return b
s=D.oS()
r=H.a([s,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
M.oK("join",r)
return this.oL(new H.an(r,t.na))},
oL(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.h("B(k.E)").a(new M.jb()),q=a.gH(a),s=new H.cS(q,r,s.h("cS<k.E>")),r=this.a,p=!1,o=!1,n="";s.n();){m=q.gu()
if(r.c3(m)&&o){l=X.hp(m,r)
k=n.charCodeAt(0)==0?n:n
n=C.b.w(k,0,r.cP(k,!0))
l.b=n
if(r.dk(n))C.a.q(l.e,0,r.gcn())
n=""+l.l(0)}else if(r.aX(m)>0){o=!r.c3(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return H.b(m,0)
j=r.fF(m[0])}else j=!1
if(!j)if(p)n+=r.gcn()
n+=m}p=r.dk(m)}return n.charCodeAt(0)==0?n:n},
cp(a,b){var s=X.hp(b,this.a),r=s.d,q=H.x(r),p=q.h("ai<1>")
s.sjN(P.i(new H.ai(r,q.h("B(1)").a(new M.jc()),p),!0,p.h("k.E")))
r=s.b
if(r!=null)C.a.bJ(s.d,0,r)
return s.d},
h7(a){var s
if(!this.mr(a))return a
s=X.hp(a,this.a)
s.h6()
return s.l(0)},
mr(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.aX(a)
if(j!==0){if(k===$.iI())for(s=0;s<j;++s)if(C.b.E(a,s)===47)return!0
r=j
q=47}else{r=0
q=null}for(p=new H.a9(a).a,o=p.length,s=r,n=null;s<o;++s,n=q,q=m){m=C.b.J(p,s)
if(k.bK(m)){if(k===$.iI()&&m===47)return!0
if(q!=null&&k.bK(q))return!0
if(q===46)l=n==null||n===46||k.bK(n)
else l=!1
if(l)return!0}}if(q==null)return!0
if(k.bK(q))return!0
if(q===46)k=n==null||k.bK(n)||n===46
else k=!1
if(k)return!0
return!1},
ps(a){var s,r,q,p,o,n,m=this,l='Unable to find a path to "',k=m.a,j=k.aX(a)
if(j<=0)return m.h7(a)
s=D.oS()
if(k.aX(s)<=0&&k.aX(a)>0)return m.h7(a)
if(k.aX(a)<=0||k.c3(a))a=m.mP(0,a)
if(k.aX(a)<=0&&k.aX(s)>0)throw H.d(X.nH(l+a+'" from "'+s+'".'))
r=X.hp(s,k)
r.h6()
q=X.hp(a,k)
q.h6()
j=r.d
p=j.length
if(p!==0){if(0>=p)return H.b(j,0)
j=J.V(j[0],".")}else j=!1
if(j)return q.l(0)
j=r.b
p=q.b
if(j!=p)j=j==null||p==null||!k.hb(j,p)
else j=!1
if(j)return q.l(0)
while(!0){j=r.d
p=j.length
if(p!==0){o=q.d
n=o.length
if(n!==0){if(0>=p)return H.b(j,0)
j=j[0]
if(0>=n)return H.b(o,0)
o=k.hb(j,o[0])
j=o}else j=!1}else j=!1
if(!j)break
C.a.eB(r.d,0)
C.a.eB(r.e,1)
C.a.eB(q.d,0)
C.a.eB(q.e,1)}j=r.d
p=j.length
if(p!==0){if(0>=p)return H.b(j,0)
j=J.V(j[0],"..")}else j=!1
if(j)throw H.d(X.nH(l+a+'" from "'+s+'".'))
j=t.N
C.a.ei(q.d,0,P.bG(r.d.length,"..",!1,j))
C.a.q(q.e,0,"")
C.a.ei(q.e,1,P.bG(r.d.length,k.gcn(),!1,j))
k=q.d
j=k.length
if(j===0)return"."
if(j>1&&J.V(C.a.gt(k),".")){C.a.dn(q.d)
k=q.e
if(0>=k.length)return H.b(k,-1)
k.pop()
if(0>=k.length)return H.b(k,-1)
k.pop()
C.a.p(k,"")}q.b=""
q.jW()
return q.l(0)},
jP(a){var s,r,q=this,p=M.oE(a)
if(p.gaS()==="file"&&q.a===$.fn())return p.l(0)
else if(p.gaS()!=="file"&&p.gaS()!==""&&q.a!==$.fn())return p.l(0)
s=q.h7(q.a.h9(M.oE(p)))
r=q.ps(s)
return q.cp(0,r).length>q.cp(0,s).length?s:r}}
M.jb.prototype={
$1(a){return H.av(a)!==""},
$S:8}
M.jc.prototype={
$1(a){return H.av(a).length!==0},
$S:8}
M.lP.prototype={
$1(a){H.iB(a)
return a==null?"null":'"'+a+'"'},
$S:74}
B.cI.prototype={
ks(a){var s,r=this.aX(a)
if(r>0)return C.b.w(a,0,r)
if(this.c3(a)){if(0>=a.length)return H.b(a,0)
s=a[0]}else s=null
return s},
hb(a,b){return a===b}}
X.kg.prototype={
jW(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.V(C.a.gt(s),"")))break
C.a.dn(q.d)
s=q.e
if(0>=s.length)return H.b(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)C.a.q(s,r-1,"")},
h6(){var s,r,q,p,o,n,m=this,l=H.a([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,H.f)(s),++p){o=s[p]
n=J.bs(o)
if(!(n.Z(o,".")||n.Z(o,"")))if(n.Z(o,"..")){n=l.length
if(n!==0){if(0>=n)return H.b(l,-1)
l.pop()}else ++q}else C.a.p(l,o)}if(m.b==null)C.a.ei(l,0,P.bG(q,"..",!1,t.N))
if(l.length===0&&m.b==null)C.a.p(l,".")
m.sjN(l)
s=m.a
m.sl1(P.bG(l.length+1,s.gcn(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.dk(r))C.a.q(m.e,0,"")
r=m.b
if(r!=null&&s===$.iI()){r.toString
m.b=H.bt(r,"/","\\")}m.jW()},
l(a){var s,r,q=this,p=q.b
p=p!=null?""+p:""
for(s=0;s<q.d.length;++s){r=q.e
if(s>=r.length)return H.b(r,s)
r=p+H.l(r[s])
p=q.d
if(s>=p.length)return H.b(p,s)
p=r+H.l(p[s])}p+=H.l(C.a.gt(q.e))
return p.charCodeAt(0)==0?p:p},
sjN(a){this.d=t.bF.a(a)},
sl1(a){this.e=t.bF.a(a)}}
X.hr.prototype={
l(a){return"PathException: "+this.a},
$ibW:1}
O.kB.prototype={
l(a){return this.gI(this)}}
E.hu.prototype={
fF(a){return C.b.G(a,"/")},
bK(a){return a===47},
dk(a){var s=a.length
return s!==0&&C.b.J(a,s-1)!==47},
cP(a,b){if(a.length!==0&&C.b.E(a,0)===47)return 1
return 0},
aX(a){return this.cP(a,!1)},
c3(a){return!1},
h9(a){var s
if(a.gaS()===""||a.gaS()==="file"){s=a.gaQ(a)
return P.mW(s,0,s.length,C.x,!1)}throw H.d(P.a8("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gI(){return"posix"},
gcn(){return"/"}}
F.hZ.prototype={
fF(a){return C.b.G(a,"/")},
bK(a){return a===47},
dk(a){var s=a.length
if(s===0)return!1
if(C.b.J(a,s-1)!==47)return!0
return C.b.bm(a,"://")&&this.aX(a)===s},
cP(a,b){var s,r,q,p,o=a.length
if(o===0)return 0
if(C.b.E(a,0)===47)return 1
for(s=0;s<o;++s){r=C.b.E(a,s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=C.b.aP(a,"/",C.b.ak(a,"//",s+1)?s+3:s)
if(q<=0)return o
if(!b||o<q+3)return q
if(!C.b.a1(a,"file://"))return q
if(!B.p2(a,q+1))return q
p=q+3
return o===p?p:q+4}}return 0},
aX(a){return this.cP(a,!1)},
c3(a){return a.length!==0&&C.b.E(a,0)===47},
h9(a){return a.l(0)},
gI(){return"url"},
gcn(){return"/"}}
L.i3.prototype={
fF(a){return C.b.G(a,"/")},
bK(a){return a===47||a===92},
dk(a){var s=a.length
if(s===0)return!1
s=C.b.J(a,s-1)
return!(s===47||s===92)},
cP(a,b){var s,r,q=a.length
if(q===0)return 0
s=C.b.E(a,0)
if(s===47)return 1
if(s===92){if(q<2||C.b.E(a,1)!==92)return 1
r=C.b.aP(a,"\\",2)
if(r>0){r=C.b.aP(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!B.p1(s))return 0
if(C.b.E(a,1)!==58)return 0
q=C.b.E(a,2)
if(!(q===47||q===92))return 0
return 3},
aX(a){return this.cP(a,!1)},
c3(a){return this.aX(a)===1},
h9(a){var s,r
if(a.gaS()!==""&&a.gaS()!=="file")throw H.d(P.a8("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gaQ(a)
if(a.gbp(a)===""){if(s.length>=3&&C.b.a1(s,"/")&&B.p2(s,1))s=C.b.jX(s,"/","")}else s="\\\\"+a.gbp(a)+s
r=H.bt(s,"/","\\")
return P.mW(r,0,r.length,C.x,!1)},
nz(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
hb(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.nz(C.b.E(a,r),C.b.E(b,r)))return!1
return!0},
gI(){return"windows"},
gcn(){return"\\"}}
Y.hI.prototype={
gm(a){return this.c.length},
goN(){return this.b.length},
hU(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(n>=r)return H.b(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)C.a.p(q,p+1)}},
f_(a,b,c){return Y.mK(this,b,c)},
cS(a){var s,r=this
if(a<0)throw H.d(P.aE("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw H.d(P.aE("Offset "+a+u.D+r.gm(r)+"."))
s=r.b
if(a<C.a.gar(s))return-1
if(a>=C.a.gt(s))return s.length-1
if(r.mo(a)){s=r.d
s.toString
return s}return r.d=r.md(a)-1},
mo(a){var s,r,q,p=this.d
if(p==null)return!1
s=this.b
r=s.length
if(p>>>0!==p||p>=r)return H.b(s,p)
if(a<s[p])return!1
if(!(p>=r-1)){q=p+1
if(q>=r)return H.b(s,q)
q=a<s[q]}else q=!0
if(q)return!0
if(!(p>=r-2)){q=p+2
if(q>=r)return H.b(s,q)
q=a<s[q]
s=q}else s=!0
if(s){this.d=p+1
return!0}return!1},
md(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+C.d.aV(o-s,2)
if(r<0||r>=p)return H.b(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
aY(a){var s,r,q,p=this
if(a<0)throw H.d(P.aE("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw H.d(P.aE("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gm(p)+"."))
s=p.cS(a)
r=p.b
if(s<0||s>=r.length)return H.b(r,s)
q=r[s]
if(q>a)throw H.d(P.aE("Line "+s+" comes after offset "+a+"."))
return a-q},
dA(a){var s,r,q,p
if(a<0)throw H.d(P.aE("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw H.d(P.aE("Line "+a+" must be less than the number of lines in the file, "+this.goN()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw H.d(P.aE("Line "+a+" doesn't have 0 columns."))
return q}}
Y.b6.prototype={
ga7(){return this.a.a},
gaj(){return this.a.cS(this.b)},
gaq(){return this.a.aY(this.b)},
bj(a,b){var s,r=this.b
if(r<0)throw H.d(P.aE("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw H.d(P.aE("Offset "+r+u.D+s.gm(s)+"."))}},
gay(a){return this.b}}
Y.ap.prototype={
ga7(){return this.a.a},
gm(a){return this.c-this.b},
gV(a){return Y.c8(this.a,this.b)},
gX(){return Y.c8(this.a,this.c)},
gY(a){return P.ad(C.w.b8(this.a.c,this.b,this.c),0,null)},
gaZ(){var s=this,r=s.a,q=s.c,p=r.cS(q)
if(r.aY(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":P.ad(C.w.b8(r.c,r.dA(p),r.dA(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dA(p+1)
return P.ad(C.w.b8(r.c,r.dA(r.cS(s.b)),q),0,null)},
aH(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw H.d(P.a8("End "+r+" must come after start "+q+".",null))
else{s=this.a
if(r>s.c.length)throw H.d(P.aE("End "+r+u.D+s.gm(s)+"."))
else if(q<0)throw H.d(P.aE("Start may not be negative, was "+q+"."))}},
aA(a,b){var s
t.hs.a(b)
if(!(b instanceof Y.ap))return this.lS(0,b)
s=C.d.aA(this.b,b.b)
return s===0?C.d.aA(this.c,b.c):s},
Z(a,b){var s=this
if(b==null)return!1
if(!t.lS.b(b))return s.lR(0,b)
return s.b===b.b&&s.c===b.c&&J.V(s.a.a,b.a.a)},
gO(a){return P.hl(this.b,this.c,this.a.a,C.o)},
o8(a,b){var s,r=this,q=r.a
if(!J.V(q.a,b.a.a))throw H.d(P.a8('Source URLs "'+H.l(r.ga7())+'" and  "'+H.l(b.ga7())+"\" don't match.",null))
s=Math.min(r.b,b.b)
return Y.mK(q,s,Math.max(r.c,b.c))},
$imr:1,
$ibL:1}
U.jp.prototype={
oz(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.iM(C.a.gar(a1).c)
s=a.e
r=P.bG(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=m.c
k=n.c
if(!J.V(l,k)){a.dZ("\u2575")
q.a+="\n"
a.iM(k)}else if(m.b+1!==n.b){a.mM("...")
q.a+="\n"}}for(l=n.d,k=H.x(l).h("W<1>"),j=new H.W(l,k),j=new H.N(j,j.gm(j),k.h("N<C.E>")),k=k.h("C.E"),i=n.b,h=n.a;j.n();){g=k.a(j.d)
f=g.a
if(f.gV(f).gaj()!==f.gX().gaj()&&f.gV(f).gaj()===i&&a.mp(C.b.w(h,0,f.gV(f).gaq()))){e=C.a.ao(r,a0)
if(e<0)H.c(P.a8(H.l(r)+" contains no null elements.",a0))
C.a.q(r,e,g)}}a.mL(i)
q.a+=" "
a.mK(n,r)
if(s)q.a+=" "
d=C.a.jx(l,new U.jK())
if(d===-1)c=a0
else{if(d<0||d>=l.length)return H.b(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gV(j).gaj()===i?j.gV(j).gaq():0
a.mI(h,g,j.gX().gaj()===i?j.gX().gaq():h.length,p)}else a.e0(h)
q.a+="\n"
if(k)a.mJ(n,c,r)
for(k=l.length,b=0;b<k;++b){l[b].toString
continue}}a.dZ("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
iM(a){var s=this
if(!s.f||!t.jJ.b(a))s.dZ("\u2577")
else{s.dZ("\u250c")
s.b1(new U.jx(s),"\x1b[34m",t.p)
s.r.a+=" "+$.nk().jP(a)}s.r.a+="\n"},
dY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={}
t.eU.a(b)
d.a=!1
d.b=null
s=c==null
if(s)r=null
else r=e.b
for(q=b.length,p=t.P,o=e.b,s=!s,n=e.r,m=t.p,l=!1,k=0;k<q;++k){j=b[k]
i=j==null
if(i)h=null
else{g=j.a
h=g.gV(g).gaj()}f=i?null:j.a.gX().gaj()
if(s&&j===c){e.b1(new U.jE(e,h,a),r,p)
l=!0}else if(l)e.b1(new U.jF(e,j),r,p)
else if(i)if(d.a)e.b1(new U.jG(e),d.b,m)
else n.a+=" "
else e.b1(new U.jH(d,e,c,h,a,j,f),o,p)}},
mK(a,b){return this.dY(a,b,null)},
mI(a,b,c,d){var s=this
s.e0(C.b.w(a,0,b))
s.b1(new U.jy(s,a,b,c),d,t.p)
s.e0(C.b.w(a,c,a.length))},
mJ(a,b,c){var s,r,q,p,o=this
t.eU.a(c)
s=o.b
r=b.a
if(r.gV(r).gaj()===r.gX().gaj()){o.fm()
r=o.r
r.a+=" "
o.dY(a,c,b)
if(c.length!==0)r.a+=" "
o.iN(b,c,o.b1(new U.jz(o,a,b),s,t.S))}else{q=a.b
if(r.gV(r).gaj()===q){if(C.a.G(c,b))return
B.tQ(c,b,t.C)
o.fm()
r=o.r
r.a+=" "
o.dY(a,c,b)
o.b1(new U.jA(o,a,b),s,t.p)
r.a+="\n"}else if(r.gX().gaj()===q){p=r.gX().gaq()===a.a.length
if(p&&!0){B.pf(c,b,t.C)
return}o.fm()
o.r.a+=" "
o.dY(a,c,b)
o.iN(b,c,o.b1(new U.jB(o,p,a,b),s,t.S))
B.pf(c,b,t.C)}}},
iL(a,b,c){var s=c?0:1,r=this.r
s=r.a+=C.b.B("\u2500",1+b+this.fa(C.b.w(a.a,0,b+s))*3)
r.a=s+"^"},
mH(a,b){return this.iL(a,b,!0)},
iN(a,b,c){t.eU.a(b)
this.r.a+="\n"
return},
e0(a){var s,r,q,p
for(s=new H.a9(a),r=t.E,s=new H.N(s,s.gm(s),r.h("N<w.E>")),q=this.r,r=r.h("w.E");s.n();){p=r.a(s.d)
if(p===9)q.a+=C.b.B(" ",4)
else q.a+=H.bc(p)}},
e_(a,b,c){var s={}
s.a=c
if(b!=null)s.a=C.d.l(b+1)
this.b1(new U.jI(s,this,a),"\x1b[34m",t.P)},
dZ(a){return this.e_(a,null,null)},
mM(a){return this.e_(null,null,a)},
mL(a){return this.e_(null,a,null)},
fm(){return this.e_(null,null,null)},
fa(a){var s,r,q
for(s=new H.a9(a),r=t.E,s=new H.N(s,s.gm(s),r.h("N<w.E>")),r=r.h("w.E"),q=0;s.n();)if(r.a(s.d)===9)++q
return q},
mp(a){var s,r,q
for(s=new H.a9(a),r=t.E,s=new H.N(s,s.gm(s),r.h("N<w.E>")),r=r.h("w.E");s.n();){q=r.a(s.d)
if(q!==32&&q!==9)return!1}return!0},
b1(a,b,c){var s,r
c.h("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
U.jJ.prototype={
$0(){return this.a},
$S:75}
U.jr.prototype={
$1(a){var s=t.nR.a(a).d,r=H.x(s)
r=new H.ai(s,r.h("B(1)").a(new U.jq()),r.h("ai<1>"))
return r.gm(r)},
$S:76}
U.jq.prototype={
$1(a){var s=t.C.a(a).a
return s.gV(s).gaj()!==s.gX().gaj()},
$S:10}
U.js.prototype={
$1(a){return t.nR.a(a).c},
$S:78}
U.ju.prototype={
$1(a){var s=t.C.a(a).a.ga7()
return s==null?new P.G():s},
$S:79}
U.jv.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aA(0,s.a(b).a)},
$S:80}
U.jw.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.lO.a(a)
s=a.a
r=a.b
q=H.a([],t.dg)
for(p=J.aP(r),o=p.gH(r),n=t.pg;o.n();){m=o.gu().a
l=m.gaZ()
k=B.lZ(l,m.gY(m),m.gV(m).gaq())
k.toString
k=C.b.ca("\n",C.b.w(l,0,k))
j=k.gm(k)
i=m.gV(m).gaj()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>C.a.gt(q).b)C.a.p(q,new U.bh(g,i,s,H.a([],n)));++i}}f=H.a([],n)
for(o=q.length,n=t.aP,e=0,h=0;h<q.length;q.length===o||(0,H.f)(q),++h){g=q[h]
m=n.a(new U.jt(g))
if(!!f.fixed$length)H.c(P.T("removeWhere"))
C.a.fj(f,m,!0)
d=f.length
for(m=p.b7(r,e),m=m.gH(m);m.n();){k=m.gu()
c=k.a
if(c.gV(c).gaj()>g.b)break
C.a.p(f,k)}e+=f.length-d
C.a.U(g.d,f)}return q},
$S:81}
U.jt.prototype={
$1(a){return t.C.a(a).a.gX().gaj()<this.a.b},
$S:10}
U.jK.prototype={
$1(a){t.C.a(a)
return!0},
$S:10}
U.jx.prototype={
$0(){this.a.r.a+=C.b.B("\u2500",2)+">"
return null},
$S:1}
U.jE.prototype={
$0(){var s=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=s},
$S:2}
U.jF.prototype={
$0(){var s=this.b==null?"\u2500":"\u253c"
this.a.r.a+=s},
$S:2}
U.jG.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:1}
U.jH.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b1(new U.jC(p,s),p.b,t.P)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gX().gaq()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b1(new U.jD(r,o),p.b,t.P)}}},
$S:2}
U.jC.prototype={
$0(){var s=this.a.a?"\u252c":"\u250c"
this.b.r.a+=s},
$S:2}
U.jD.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
U.jy.prototype={
$0(){var s=this
return s.a.e0(C.b.w(s.b,s.c,s.d))},
$S:1}
U.jz.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gV(n).gaq(),l=n.gX().gaq()
n=this.b.a
s=q.fa(C.b.w(n,0,m))
r=q.fa(C.b.w(n,m,l))
m+=s*3
p.a+=C.b.B(" ",m)
p=p.a+=C.b.B("^",Math.max(l+(s+r)*3-m,1))
return p.length-o.length},
$S:18}
U.jA.prototype={
$0(){var s=this.c.a
return this.a.mH(this.b,s.gV(s).gaq())},
$S:1}
U.jB.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a+=C.b.B("\u2500",3)
else r.iL(s.c,Math.max(s.d.a.gX().gaq()-1,0),!1)
return q.a.length-p.length},
$S:18}
U.jI.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=r.a+=C.b.oY(q,s.d)
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
U.az.prototype={
l(a){var s=""+"primary ",r=this.a
r=s+(""+r.gV(r).gaj()+":"+r.gV(r).gaq()+"-"+r.gX().gaj()+":"+r.gX().gaq())
return r.charCodeAt(0)==0?r:r}}
U.lo.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&B.lZ(o.gaZ(),o.gY(o),o.gV(o).gaq())!=null)){s=o.gV(o)
s=V.hJ(s.gay(s),0,0,o.ga7())
r=o.gX()
r=r.gay(r)
q=o.ga7()
p=B.tt(o.gY(o),10)
o=X.kw(s,V.hJ(r,U.o7(o.gY(o)),p,q),o.gY(o),o.gY(o))}return U.r9(U.rb(U.ra(o)))},
$S:83}
U.bh.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+C.a.aC(this.d,", ")+")"}}
V.bz.prototype={
fH(a){var s=this.a
if(!J.V(s,a.ga7()))throw H.d(P.a8('Source URLs "'+H.l(s)+'" and "'+H.l(a.ga7())+"\" don't match.",null))
return Math.abs(this.b-a.gay(a))},
aA(a,b){var s
t.hq.a(b)
s=this.a
if(!J.V(s,b.ga7()))throw H.d(P.a8('Source URLs "'+H.l(s)+'" and "'+H.l(b.ga7())+"\" don't match.",null))
return this.b-b.gay(b)},
Z(a,b){if(b==null)return!1
return t.hq.b(b)&&J.V(this.a,b.ga7())&&this.b===b.gay(b)},
gO(a){var s=this.a
s=s==null?null:s.gO(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r="<"+H.m1(s).l(0)+": "+s.b+" ",q=s.a
return r+(H.l(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iae:1,
ga7(){return this.a},
gay(a){return this.b},
gaj(){return this.c},
gaq(){return this.d}}
D.hK.prototype={
fH(a){if(!J.V(this.a.a,a.ga7()))throw H.d(P.a8('Source URLs "'+H.l(this.ga7())+'" and "'+H.l(a.ga7())+"\" don't match.",null))
return Math.abs(this.b-a.gay(a))},
aA(a,b){t.hq.a(b)
if(!J.V(this.a.a,b.ga7()))throw H.d(P.a8('Source URLs "'+H.l(this.ga7())+'" and "'+H.l(b.ga7())+"\" don't match.",null))
return this.b-b.gay(b)},
Z(a,b){if(b==null)return!1
return t.hq.b(b)&&J.V(this.a.a,b.ga7())&&this.b===b.gay(b)},
gO(a){var s=this.a.a
s=s==null?null:s.gO(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this.b,r="<"+H.m1(this).l(0)+": "+s+" ",q=this.a,p=q.a
return r+(H.l(p==null?"unknown source":p)+":"+(q.cS(s)+1)+":"+(q.aY(s)+1))+">"},
$iae:1,
$ibz:1}
V.hL.prototype={
lY(a,b,c){var s,r=this.b,q=this.a
if(!J.V(r.ga7(),q.ga7()))throw H.d(P.a8('Source URLs "'+H.l(q.ga7())+'" and  "'+H.l(r.ga7())+"\" don't match.",null))
else if(r.gay(r)<q.gay(q))throw H.d(P.a8("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.fH(r))throw H.d(P.a8('Text "'+s+'" must be '+q.fH(r)+" characters long.",null))}},
gV(a){return this.a},
gX(){return this.b},
gY(a){return this.c}}
Y.eG.prototype={
ga7(){return this.gV(this).ga7()},
gm(a){var s,r=this.gX()
r=r.gay(r)
s=this.gV(this)
return r-s.gay(s)},
aA(a,b){var s
t.hs.a(b)
s=this.gV(this).aA(0,b.gV(b))
return s===0?this.gX().aA(0,b.gX()):s},
jJ(a,b,c){var s,r,q=this,p=""+("line "+(q.gV(q).gaj()+1)+", column "+(q.gV(q).gaq()+1))
if(q.ga7()!=null){s=q.ga7()
s=p+(" of "+$.nk().jP(s))
p=s}p+=": "+b
r=q.oA(c)
if(r.length!==0)p=p+"\n"+r
return p.charCodeAt(0)==0?p:p},
oA(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return U.q7(s,a).oz()},
Z(a,b){if(b==null)return!1
return t.hs.b(b)&&this.gV(this).Z(0,b.gV(b))&&this.gX().Z(0,b.gX())},
gO(a){return P.hl(this.gV(this),this.gX(),C.o,C.o)},
l(a){var s=this
return"<"+H.m1(s).l(0)+": from "+s.gV(s).l(0)+" to "+s.gX().l(0)+' "'+s.gY(s)+'">'},
$iae:1,
$ibo:1}
X.bL.prototype={
gaZ(){return this.d}}
S.O.prototype={
l(a){return"["+H.l(this.a)+", "+H.l(this.b)+"]"},
Z(a,b){if(b==null)return!1
return b instanceof S.O&&J.V(b.a,this.a)&&J.V(b.b,this.b)},
gO(a){return P.hl(J.aH(this.a),J.aH(this.b),C.o,C.o)}}
S.cj.prototype={
l(a){return"["+this.a.l(0)+", "+H.l(this.b)+", "+H.l(this.c)+"]"},
Z(a,b){if(b==null)return!1
return b instanceof S.cj&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gO(a){return P.hl(H.bJ(this.a),C.e.gO(this.b),C.e.gO(this.c),C.o)}}
S.ds.prototype={
az(a){var s=this
return P.bH([s.a,s.b,s.c,s.d],!1,t.z)},
l(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
Z(a,b){var s=this
if(b==null)return!1
return b instanceof S.ds&&b.a.Z(0,s.a)&&b.b.Z(0,s.b)&&b.c.Z(0,s.c)&&b.d.Z(0,s.d)},
gO(a){var s=this
return P.hl(H.bJ(s.a),H.bJ(s.b),H.bJ(s.c),H.bJ(s.d))}}
U.e6.prototype={
gj_(){var s=this.y
return s==null?H.c(H.h("axes")):s},
gbf(){var s=this.cx
return s==null?H.c(H.h("gmm")):s},
gd9(){var s=this.db
return s==null?H.c(H.h("currentGMM")):s},
geo(){var s=this.dy
return s==null?H.c(H.h("nextGMM")):s},
gcK(){var s=this.k3
return s==null?H.c(H.h("playShape")):s},
ghl(){var s=this.k4
return s==null?H.c(H.h("tri")):s},
ghG(){var s=this.r1
return s==null?H.c(H.h("sqr")):s},
c_(){var s=0,r=P.bQ(t.z),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$c_=P.bR(function(a0,a1){if(a0===1)return P.bN(a1,r)
while(true)switch(s){case 0:c=t.W
b=P.bH(q.fQ,!0,c)
a=P.bH(q.fR,!0,c)
q.cx=new O.e5(3,U.n8(3),b,a)
c=t.H.a(q.de)
p=c[0]
o=c[1]
n=M.j0(null,null,null,null,null,!1,null,null,null,null,null,null,null,null,null,1,null,null,null,0.5)
m=M.j0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7)
l=new M.dO(C.h,M.j0(null,null,null,null,null,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null),n,m,p,o,-1,10,4,0,!1,0.01,!1,0.000001,4,null,null,null,C.c,null,null,null,null,null)
l.am(C.c,null,null)
l.hV(null)
l.fS=l.jf(p,o,n.h5(C.aM))
l.fT=l.jf(-1,10,m.h5(C.aK))
l.gdv().eE(0,-1.5707963267948966,C.h,C.l)
m=t.f
l.fU=K.cm(H.a([l.gdu(),l.gdv()],m))
n=t.a
l.b9(n.a(H.a([l.gdu(),l.gdv()],t.r)))
l.aM(C.h)
l.bA(C.c)
l.aM(C.q.hE(0).B(0,new M.e(7.111111111111111,4,0)).R(0,l.aL(C.q)).R(0,C.q.B(0,0.5)).B(0,C.q.hE(0).mN(0)))
q.y=l
q.gj_()
q.db=q.d8(b,a,c)
k=q.jg(q.eb)
q.jg(q.o9)
j=L.dp(q.gd9())
q.k4=V.nY(C.a5,null)
c=q.ghl()
c.cQ(0,1.5707963267948966)
c.c4(new M.e(5.5,2.5,0))
c.dD(0,new M.e(0.1,0.1,1))
c=H.a([C.q,C.Y,C.Z,C.a_],t.l)
p=new V.eH(4,0,!1,0.01,!1,0.000001,4,null,null,null,C.u,null,null,null,null,null)
p.am(C.u,null,null)
p.cW(c,C.u)
p.f2(C.u,2,2)
q.r1=p
p=q.ghG()
p.cQ(0,1.5707963267948966)
p.c4(new M.e(5.5,2.5,0))
p.dD(0,new M.e(0.08,0.08,1))
i=V.hw(C.c,0.25,0.4)
h=Y.nG("\\to"," ",C.r,"align*",C.p,C.H)
h.dE(0.5)
g=K.cm(H.a([h,i],m))
g.c4(new M.e(6,2.5,0))
q.fy=U.j2(g,q.goU())
i=V.hw(C.c,0.3,1.4)
h=new Y.eM(" ",C.p,C.H,H.a([],t.s),"","align*",!0,2,null,"",!0,P.aX(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,null,null,null,C.c,null,null,null,null,null)
h.am(C.c,null,null)
if(J.c7(h.gA(h)))h.en()
h.a=C.u
h.hT("Reset"," ",C.u,"center",C.p,C.H)
h.dE(0.5)
f=K.cm(H.a([h,i],m))
f.c4(new M.e(5.5,3,0))
q.go=U.j2(f,q.gpx())
i=V.hw(C.c,0.5,0.8)
q.k3=V.nY(C.a5,null)
c=q.gcK()
c.dD(0,new M.e(0.18,0.18,1))
c.cQ(0,1.5707963267948966)
q.gcK().aM(C.m.b5(0,4))
e=K.cm(H.a([q.gcK(),i],m))
e.c4(new M.e(5.5,2.5,0))
e.dD(0,new M.e(0.5,0.5,1))
q.id=U.j2(e,q.gp3())
i=V.hw(C.c,0.25,0.4)
h=Y.nG("\\gets"," ",C.r,"align*",C.p,C.H)
h.dE(0.5)
d=K.cm(H.a([h,i],m))
d.c4(new M.e(5,2.5,0))
q.k1=U.j2(d,q.gp6())
s=2
return P.aw(q.bd(0,L.dp(q.gj_())),$async$c_)
case 2:s=3
return P.aw(q.bd(0,L.dp(k)),$async$c_)
case 3:s=4
return P.aw(q.bd(0,j),$async$c_)
case 4:m=q.fy
c=L.dp(m==null?H.c(H.h("b1")):m)
p=q.go
p=L.dp(p==null?H.c(H.h("b2")):p)
o=q.id
o=L.dp(o==null?H.c(H.h("b3")):o)
m=q.k1
c=t.cG.a(H.a([c,p,o,L.dp(m==null?H.c(H.h("b4")):m)],t.lq))
p=new Y.d6(C.c,null,null,null,null,null)
p.am(C.c,null,null)
p.b9(n.a(C.bm))
p=new L.fy(c,0,M.pd(),0,p)
p.f=p.bv()
p.lT(c,null,0,M.pd(),0)
s=5
return P.aw(q.bd(0,p),$async$c_)
case 5:s=6
return P.aw(q.c0(),$async$c_)
case 6:return P.bO(null,r)}})
return P.bP($async$c_,r)},
eu(){var s=0,r=P.bQ(t.z),q=this,p,o,n,m
var $async$eu=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:--q.rx
p=t.W
q.cx=new O.e5(3,U.n8(3),P.bH(q.fQ,!0,p),P.bH(q.fR,!0,p))
for(p=q.eb,o=0;o<q.rx;++o){n=q.cx
m=(n==null?H.c(H.h("gmm")):n).fL(p)
n=q.cx;(n==null?H.c(H.h("gmm")):n).h4(p,m)}q.dy=q.d8(q.gbf().c,q.gbf().d,q.de)
s=2
return P.aw(q.bd(0,L.kE(q.gd9(),q.geo())),$async$eu)
case 2:return P.bO(null,r)}})
return P.bP($async$eu,r)},
ep(){var s=0,r=P.bQ(t.z),q=this,p,o
var $async$ep=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:p=q.eb
o=q.gbf().fL(p)
q.gbf().h4(p,o);++q.rx
q.dy=q.d8(q.gbf().c,q.gbf().d,q.de)
s=2
return P.aw(q.bd(0,L.kE(q.gd9(),q.geo())),$async$ep)
case 2:return P.bO(null,r)}})
return P.bP($async$ep,r)},
eD(){var s=0,r=P.bQ(t.z),q=this,p,o,n,m
var $async$eD=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:p=U.n8(3)
o=t.W
n=P.bH(q.fQ,!0,o)
m=P.bH(q.fR,!0,o)
q.cx=new O.e5(3,p,n,m)
q.rx=0
q.dy=q.d8(n,m,q.de)
s=2
return P.aw(q.bd(0,L.kE(q.gd9(),q.geo())),$async$eD)
case 2:return P.bO(null,r)}})
return P.bP($async$eD,r)},
er(){var s=0,r=P.bQ(t.z),q=this,p,o,n,m
var $async$er=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:n=q.eb
m=q.gbf().fL(n)
q.gbf().h4(n,m);++q.rx
P.bU("iteration")
P.bU(q.rx)
n=q.gbf()
p=q.gbf().d
o=q.oI(p)
P.bU("hasConverged")
P.bU(o)
if(o&&q.rx>3){q.r2=0
q.gcK().fs(q.ghl())}q.dy=q.d8(n.c,p,q.de)
s=2
return P.aw(q.bd(0,L.kE(q.gd9(),q.geo())),$async$er)
case 2:return P.bO(null,r)}})
return P.bP($async$er,r)},
oV(){this.r2=1},
py(){P.bU("state")
P.bU(this.r2)
this.r2=2},
p4(){var s=this
if(s.x1){s.gcK().fs(s.ghl())
s.r2=0}else{s.gcK().fs(s.ghG())
s.r2=3}s.x1=!s.x1
P.bU("Play")},
p7(){this.r2=4},
jg(a){var s,r,q,p,o,n,m,l,k,j=null
t.H.a(a)
s=H.a([],t.n_)
r=a.length
for(q=t.O,p=0;p<r;++p){o=this.y
if(o==null)o=H.c(H.h("axes"))
if(p>=a.length)return H.b(a,p)
o=o.je(new M.e(a[p],0,0))
n=H.a([],q)
m=H.a([C.c],q)
l=H.a([],q)
k=new V.d3(0,6.283185307179586,0.08,o,9,0.35,C.l,new V.dr(m,l,0,n,0),j,j,4,0,!1,0.01,!1,0.000001,4,j,j,j,C.c,j,j,j,j,j)
k.am(C.c,j,j)
k.dI(C.a6,!1)
k.dF(C.n,!1)
k.hS(C.a6,!0)
C.a.p(s,k)}return K.cm(s)},
d8(a,b,c){var s,r,q,p,o,n,m,l=t.H
l.a(a)
l.a(b)
l.a(c)
s=H.a([],t.jA)
r=[C.b_,C.aX,C.b4,C.b5,C.b1,C.b2,C.aZ,C.b0,C.aY,C.b3]
q=a.length
l=b.length
q=Math.min(Math.min(q,l),l)
for(p=0;p<q;++p){if(p>=b.length)return H.b(b,p)
l=b[p]
if(typeof l!=="number")return l.kw()
if(l<0.8)C.a.q(b,p,0.8)
if(p>=b.length)return H.b(b,p)
l=b[p]
if(typeof l!=="number")return l.b6()
if(l>3)C.a.q(b,p,3)
if(p>=b.length)return H.b(b,p)
l=b[p]
if(typeof l!=="number")return l.kw()
o=l<2?0.1:0.3
n=this.y
if(n==null)n=H.c(H.h("axes"))
if(p>=a.length)return H.b(a,p)
m=a[p]
l=3*l
if(typeof m!=="number")return m.R()
if(p>=10)return H.b(r,p)
C.a.p(s,n.km(new U.jn(b,p,a),r[p],o,m+l,m-l))}return K.cm(s)},
oI(a){var s,r,q
t.H.a(a)
P.bU(a)
for(s=a.length,r=0;r<s;++r){q=a[r]
if(typeof q!=="number")return q.b6()
if(q>0.8&&q<3)return!1}return!0},
c0(){var s=0,r=P.bQ(t.z),q=this,p
var $async$c0=P.bR(function(a,b){if(a===1)return P.bN(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}H.nd(C.d.l(q.r2))
p=q.r2
s=p===1?4:6
break
case 4:s=7
return P.aw(q.ep(),$async$c0)
case 7:q.r2=0
s=5
break
case 6:s=p===2?8:10
break
case 8:H.nd("HIHIHI")
s=11
return P.aw(q.eD(),$async$c0)
case 11:q.r2=0
s=9
break
case 10:s=p===3?12:14
break
case 12:s=15
return P.aw(q.er(),$async$c0)
case 15:s=13
break
case 14:s=p===4?16:18
break
case 16:s=19
return P.aw(q.eu(),$async$c0)
case 19:q.r2=0
s=17
break
case 18:s=20
return P.aw(q.eG(),$async$c0)
case 20:case 17:case 13:case 9:case 5:s=2
break
case 3:return P.bO(null,r)}})
return P.bP($async$c0,r)}}
U.jn.prototype={
$1(a){var s,r=this.a,q=this.b
if(q>=r.length)return H.b(r,q)
r=r[q]
if(typeof r!=="number")return H.b3(r)
s=this.c
if(q>=s.length)return H.b(s,q)
q=s[q]
if(typeof q!=="number")return H.b3(q)
q=a-q
return 4/r*Math.exp(-(q*q/(2*r*r)))},
$S:5};(function aliases(){var s=J.aW.prototype
s.lE=s.l
s=J.cK.prototype
s.lF=s.l
s=H.ba.prototype
s.lG=s.jA
s.lH=s.jB
s.lJ=s.jD
s.lI=s.jC
s=P.w.prototype
s.lK=s.d6
s=P.G.prototype
s.hR=s.l
s=V.a7.prototype
s.lQ=s.a4
s=F.aY.prototype
s.lL=s.q
s.bU=s.p
s.hP=s.bJ
s.lM=s.U
s=L.b4.prototype
s.lC=s.d4
s.lD=s.d5
s=Y.I.prototype
s.lN=s.cz
s.lP=s.cN
s.hQ=s.c6
s.lO=s.dd
s.dM=s.bw
s.dL=s.be
s=K.Q.prototype
s.hS=s.c6
s=Z.dJ.prototype
s.lB=s.li
s=Y.eG.prototype
s.lS=s.aA
s.lR=s.Z})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0u
s(J,"rX","qd",17)
r(J.z.prototype,"gmR","p",35)
q(J.bE.prototype,"ghN",1,1,null,["$2","$1"],["ak","a1"],56,0,0)
p(H,"t6","q4",29)
p(P,"tj","r4",14)
p(P,"tk","r5",14)
p(P,"tl","r6",14)
o(P,"oO","td",1)
s(P,"to","rO",87)
p(P,"tp","rP",29)
s(P,"tn","qi",17)
p(P,"ts","qZ",25)
n(P,"tP",2,null,["$1$2","$2"],["p7",function(a,b){return P.p7(a,b,t.q)}],88,0)
n(P,"p5",2,null,["$1$2","$2"],["p6",function(a,b){return P.p6(a,b,t.q)}],89,0)
p(A,"oR","a6",6)
p(A,"tq","mb",6)
p(A,"tr","p3",6)
p(A,"bS","pN",90)
m(B.eC.prototype,"gkb","kc",33)
var k
l(k=Y.e7.prototype,"gD","nO",0)
l(k,"go3","o4",0)
l(k,"gcO","pr",0)
l(k,"gnu","nv",0)
l(k,"gey","pk",0)
l(k,"gbR","l_",0)
l(k,"gp1","p2",0)
l(k,"gpI","pJ",0)
l(k,"gnx","ny",0)
l(k,"gk5","pH",0)
l(k,"gpp","pq",0)
l(k,"gpn","po",0)
l(k,"gpl","pm",0)
l(k,"gpi","pj",0)
l(k,"gpg","ph",0)
l(k,"gpe","pf",0)
l(k,"gkY","kZ",0)
l(k,"gkJ","kK",0)
l(k,"gkH","kI",0)
l(k,"gkN","kO",0)
l(k,"gkL","kM",0)
l(k,"gbg","kX",0)
l(k,"gkQ","kR",0)
l(k,"ghz","kP",0)
l(k,"geU","kW",0)
l(k,"gkU","kV",0)
l(k,"gkS","kT",0)
l(k,"gkz","kA",0)
l(k,"gbQ","kG",0)
l(k,"gkD","kE",0)
l(k,"gkB","kC",0)
l(k,"geT","kF",0)
l(k,"gkx","ky",0)
l(k,"gbD","nf",0)
l(k,"gbY","n8",0)
l(k,"gmV","mW",0)
l(k,"gj0","ng",0)
l(k,"gn9","na",0)
l(k,"gnb","nc",0)
l(k,"ge3","nd",0)
l(k,"giR","mX",0)
l(k,"gbz","l0",0)
l(k,"gfw","no",0)
l(k,"goP","oQ",0)
l(k,"gnG","nH",0)
l(k,"gnE","nF",0)
l(k,"gbZ","nI",0)
l(k,"gj8","nC",0)
l(k,"gj9","nD",0)
l(k,"gnA","nB",0)
l(k,"gnV","nW",0)
l(k,"gj1","nh",0)
l(k,"gfI","nQ",0)
l(k,"gmY","mZ",0)
l(k,"gn0","n1",0)
l(k,"gft","ni",0)
l(k,"gnR","nS",0)
l(k,"gnT","nU",0)
l(k,"giS","n_",0)
l(k,"gnk","nl",0)
l(k,"gn3","n4",0)
l(k,"gfu","nj",0)
l(k,"gfJ","nX",0)
l(k,"gfK","nY",0)
l(k,"giT","n2",0)
l(k,"gcB","np",0)
l(k,"gns","nt",0)
l(Y.I.prototype,"gko","bv",7)
l(k=U.e6.prototype,"goU","oV",1)
l(k,"gpx","py",1)
l(k,"gp3","p4",1)
l(k,"gp6","p7",1)
n(U,"pa",3,null,["$3"],["tT"],91,0)
n(M,"pd",1,null,["$3$inflection$pauseRatio","$1"],["p4",function(a){return M.p4(a,null,null)}],20,0)
n(M,"pe",1,null,["$3$inflection$pauseRatio","$1"],["ph",function(a){return M.ph(a,null,null)}],20,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.mv,J.aW,J.ay,P.k,H.dT,H.aU,P.a1,P.f_,H.kv,H.N,P.U,H.e3,H.e0,H.cT,H.bl,H.bB,H.d1,H.kG,H.hj,H.e1,H.f4,P.cc,H.jX,H.ej,H.cJ,H.dz,H.dw,H.dq,H.iu,H.l8,H.bx,H.im,H.f7,P.lx,P.i6,P.dy,P.cq,P.dN,P.i8,P.cU,P.aq,P.i7,P.eJ,P.eK,P.hN,P.is,P.fd,P.ff,P.io,P.cV,P.w,P.f0,P.b_,P.f3,P.iz,P.cD,P.lA,P.ho,P.eI,P.ik,P.e4,P.bn,P.am,P.iv,P.hz,P.a2,P.cs,P.kI,P.br,W.mq,P.iq,P.cN,A.eY,G.lu,G.bp,G.kD,F.de,F.eo,F.k3,L.kj,B.S,B.i2,O.e5,B.aB,B.ip,B.lt,B.ie,B.ag,V.jM,V.a7,V.aZ,A.km,K.jf,K.j9,V.jL,T.b8,T.eL,Y.e7,D.kF,B.p,L.b4,T.j4,L.dI,Y.I,M.aS,K.eQ,V.hS,K.eB,Z.dJ,A.hC,V.M,A.cE,Y.bk,Y.b5,Y.jg,Y.bj,Y.ep,S.bv,M.e,M.ja,O.kB,X.kg,X.hr,Y.hI,D.hK,Y.eG,U.jp,U.az,U.bh,V.bz,S.O,S.cj,S.ds])
q(J.aW,[J.h7,J.ef,J.cK,J.z,J.cb,J.bE,H.hf,W.aV,W.dS,W.je,W.dX,W.u,W.hq])
q(J.cK,[J.ht,J.bM,J.bF])
r(J.jV,J.z)
q(J.cb,[J.da,J.eg])
q(P.k,[H.co,H.P,H.cL,H.ai,H.e2,H.c_,H.an,H.eT,P.ee,H.it,P.hA])
q(H.co,[H.cC,H.fe])
r(H.eV,H.cC)
r(H.eS,H.fe)
q(H.aU,[H.fM,H.fL,H.jo,H.h5,H.hO,H.jW,H.m3,H.m5,P.l4,P.l3,P.lD,P.lf,P.ln,P.kx,P.lw,P.lr,P.k0,P.kK,P.lI,P.lJ,W.l2,W.la,A.jT,O.jk,B.jh,V.jR,B.kt,B.ku,B.ks,B.kr,Y.jN,T.j5,T.j6,Z.iL,Z.iM,Z.iN,M.kd,M.ke,M.jd,Y.kf,Y.ji,K.kn,K.kp,K.ko,U.j3,Y.kb,Y.ka,Y.k9,Y.k8,Y.kc,Y.k5,Y.k6,Y.k7,K.a3,K.a4,K.a5,K.kY,K.kZ,K.kV,K.kU,K.kT,K.kQ,K.kX,K.kW,F.j7,B.mh,B.m8,B.m9,B.ma,B.lS,V.lG,O.kA,S.iT,S.iS,S.iR,S.iQ,M.l1,M.l_,M.jb,M.jc,M.lP,U.jr,U.jq,U.js,U.ju,U.jw,U.jt,U.jK,U.jn])
q(H.fM,[H.l7,H.m4,P.lE,P.lQ,P.lg,P.jY,P.k_,P.kJ,P.kL,P.lH,O.jj,O.jl,O.jm,V.ki,V.jQ,B.m_,M.j_,Y.k2,Y.k4,K.kS,K.kO,K.kR,K.kP,A.kq,B.mj,B.mk,B.lR,F.lU,F.lV,S.iU,S.iW,S.iV,S.iX,S.iP,S.mg,M.l0,U.jv])
r(H.aT,H.eS)
q(P.a1,[H.eh,P.ck,H.h8,H.hW,H.hB,P.dM,H.ij,P.hi,P.bC,P.hX,P.eP,P.cg,P.fN,P.fP])
r(P.ek,P.f_)
q(P.ek,[H.du,F.aY])
r(H.a9,H.du)
q(H.fL,[H.md,P.l5,P.l6,P.ly,P.lb,P.lj,P.lh,P.ld,P.li,P.lc,P.lm,P.ll,P.lk,P.ky,P.lO,P.lv,P.kN,P.kM,V.kh,V.jP,Y.lY,Y.lX,Y.jO,U.jJ,U.jx,U.jE,U.jF,U.jG,U.jH,U.jC,U.jD,U.jy,U.jz,U.jA,U.jB,U.jI,U.lo])
q(H.P,[H.C,H.e_,H.ei])
q(H.C,[H.aJ,H.F,H.W,P.el])
r(H.dY,H.cL)
q(P.U,[H.en,H.cS,H.eF])
r(H.d4,H.c_)
q(H.d1,[H.v,H.c9])
r(H.ca,H.h5)
r(H.ev,P.ck)
q(H.hO,[H.hM,H.cZ])
r(H.i5,P.dM)
r(P.em,P.cc)
r(H.ba,P.em)
q(P.ee,[H.i4,P.f6,A.as,B.il])
r(H.df,H.hf)
r(H.f1,H.df)
r(H.f2,H.f1)
r(H.et,H.f2)
q(H.et,[H.he,H.eu,H.cM])
r(H.f8,H.ij)
r(P.f5,P.i8)
r(P.ir,P.fd)
q(H.ba,[P.ls,P.eZ])
r(P.dA,P.ff)
q(P.dA,[P.c3,P.fg])
r(P.eD,P.f3)
r(P.fb,P.fg)
q(P.cD,[P.fS,P.fE])
q(P.fS,[P.fB,P.i_])
r(P.cF,P.hN)
q(P.cF,[P.iw,P.fF,P.i0])
r(P.fC,P.iw)
q(P.bC,[P.dk,P.h3])
r(P.ia,P.cs)
q(W.aV,[W.b7,W.dv])
q(W.b7,[W.r,W.bD])
r(W.y,W.r)
q(W.y,[W.fw,W.fz,W.cB,W.fW,W.hD])
r(W.bA,W.u)
r(W.bb,W.bA)
r(W.eU,W.dX)
r(W.eW,P.eJ)
r(W.ig,W.eW)
r(W.eX,P.eK)
r(G.h_,G.bp)
r(G.kC,G.kD)
q(B.S,[B.bY,B.cn,B.hQ,B.hg,B.hE,B.cd,B.eE,B.b0,B.dn,B.al])
q(B.b0,[B.cG,B.hd,B.fD,B.fZ,B.fK,B.di,B.dj,B.hh])
r(B.ey,B.di)
r(B.hv,B.dj)
q(B.al,[B.hn,B.hm,B.af])
q(B.af,[B.hk,B.bq,B.hs,B.fR,B.fU,B.fX])
q(B.bq,[B.h9,B.fx,B.hR,B.fY,B.hy,B.fJ,B.hx,B.i1])
q(B.ag,[B.ib,B.dW,B.c1,B.ih,B.dU])
r(B.ic,B.ib)
r(B.id,B.ic)
r(B.d2,B.id)
r(B.ii,B.ih)
r(B.R,B.ii)
q(F.aY,[B.ah,D.fq])
r(B.fV,B.il)
q(V.a7,[V.bw,V.fG,V.dP,V.h1,V.fv,V.d7,V.hP,V.ed,V.d9,V.e8,V.e9,V.cH,V.eb,V.d8,V.ec,V.h2,V.h0,V.ft,V.ea,V.fu,V.fr,V.fs])
r(Z.i9,P.eD)
r(Z.fQ,Z.i9)
r(B.eC,B.i2)
q(T.b8,[T.c0,T.be,T.dV])
q(T.c0,[T.cf,T.L])
q(T.be,[T.n,T.E,T.cQ,T.d0])
q(L.b4,[L.fy,L.hG,L.hU])
r(L.hF,L.hG)
r(Z.fp,L.dI)
r(Z.fH,Z.fp)
q(Y.I,[K.Q,U.h6,Y.d6])
q(K.Q,[V.eO,K.cl,Y.ew,V.ex,K.bZ,K.dm,K.eR])
q(V.eO,[V.aD,V.dK])
r(M.dg,V.aD)
r(M.fO,K.cl)
r(M.dO,M.fO)
r(Y.d5,Y.ew)
r(V.dr,K.eQ)
q(V.dK,[V.cA,V.d_])
q(V.d_,[V.d3,V.dZ])
q(V.ex,[V.ez,V.dl])
r(V.cR,V.ez)
r(V.dL,V.cR)
q(V.dl,[V.eH,V.eA])
r(Y.eN,K.dm)
r(Y.bK,K.bZ)
r(Y.dd,Y.bK)
r(Y.eM,Y.dd)
r(U.dR,U.h6)
r(F.fI,Z.dJ)
r(Y.hc,Y.b5)
q(Y.hc,[Y.er,Y.es,Y.bI,Y.eq])
r(B.cI,O.kB)
q(B.cI,[E.hu,F.hZ,L.i3])
r(Y.b6,D.hK)
q(Y.eG,[Y.ap,V.hL])
r(X.bL,V.hL)
r(U.e6,A.hC)
s(H.du,H.bB)
s(H.fe,P.w)
s(H.f1,P.w)
s(H.f2,H.bl)
s(P.f_,P.w)
s(P.f3,P.b_)
s(P.ff,P.b_)
s(P.fg,P.iz)
s(B.ib,B.ip)
s(B.ic,B.lt)
s(B.id,B.ie)
s(B.ih,B.ip)
s(B.ii,B.ie)
s(B.il,P.w)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",q:"double",ac:"num",o:"String",B:"bool",am:"Null",m:"List"},mangledNames:{},types:["B()","~()","am()","e(e)","q(q,O<j,j>)","q(q)","B(o?)","o()","B(o)","M(M)","B(az)","j(j,j)","q(q,q)","B(I)","~(~())","~(bb)","B(j)","j(@,@)","j()","m<q>(M)","q(q{inflection:q?,pauseRatio:q?})","~(@,@)","B(j,e)","@()","q(e)","o(o)","~(dt,o,j)","e(q)","am(@)","j(G?)","aD(aD)","~(G,o)","B(ag)","B(cd)","o(be)","~(G?)","@(@,o)","aN<o,m<o>>()","m<o>()","@(o)","m<I>(I)","B(e)","~(R)","@(@)","~(u)","aS(aS,aS)","aq<@>(@)","~(ac)","B(G)","dt(@,@)","o(cO)","B(o,o)","B(bI)","am(~())","~(o[@])","~(o,j)","B(dh[j])","~(G?,G?)","m<e>(m<m<e>>,@)","m<M>(o,Q)","~(o,Q,m<M>)","B(@)","B(M)","~(m<I>,by<I>)","q(j)","B(G?)","M(m<q>)","e(e,e)","q(o)","bm<am>()","m<q>(O<j,m<q>>)","q(O<j,q>)","q(m<q>)","bv(bv,bv)","o(o?)","o?()","j(bh)","m<M>(m<M>)","G(bh)","G(az)","j(az,az)","m<bh>(bn<G,m<az>>)","am(G,ce)","bL()","~(j,@)","am(@,ce)","~(@)","B(G?,G?)","0^(0^,0^)<ac>","0^(0^,0^)<ac>","j(j)","m<e>(m<e>,m<e>,q)","B(q)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
H.rr(v.typeUniverse,JSON.parse('{"ht":"cK","bM":"cK","bF":"cK","u2":"u","u9":"u","u1":"r","ua":"r","ul":"r","u3":"y","ue":"y","ub":"b7","u7":"b7","uf":"bb","u5":"bA","u4":"bD","um":"bD","h7":{"B":[]},"ef":{"am":[]},"z":{"m":["1"],"P":["1"],"k":["1"]},"jV":{"z":["1"],"m":["1"],"P":["1"],"k":["1"]},"ay":{"U":["1"]},"cb":{"q":[],"ac":[],"ae":["ac"]},"da":{"q":[],"j":[],"ac":[],"ae":["ac"]},"eg":{"q":[],"ac":[],"ae":["ac"]},"bE":{"o":[],"ae":["o"],"dh":[]},"co":{"k":["2"]},"dT":{"U":["2"]},"cC":{"co":["1","2"],"k":["2"],"k.E":"2"},"eV":{"cC":["1","2"],"co":["1","2"],"P":["2"],"k":["2"],"k.E":"2"},"eS":{"w":["2"],"m":["2"],"co":["1","2"],"P":["2"],"k":["2"]},"aT":{"eS":["1","2"],"w":["2"],"m":["2"],"co":["1","2"],"P":["2"],"k":["2"],"w.E":"2","k.E":"2"},"eh":{"a1":[]},"a9":{"w":["j"],"bB":["j"],"m":["j"],"P":["j"],"k":["j"],"w.E":"j","bB.E":"j"},"P":{"k":["1"]},"C":{"P":["1"],"k":["1"]},"aJ":{"C":["1"],"P":["1"],"k":["1"],"C.E":"1","k.E":"1"},"N":{"U":["1"]},"cL":{"k":["2"],"k.E":"2"},"dY":{"cL":["1","2"],"P":["2"],"k":["2"],"k.E":"2"},"en":{"U":["2"]},"F":{"C":["2"],"P":["2"],"k":["2"],"C.E":"2","k.E":"2"},"ai":{"k":["1"],"k.E":"1"},"cS":{"U":["1"]},"e2":{"k":["2"],"k.E":"2"},"e3":{"U":["2"]},"c_":{"k":["1"],"k.E":"1"},"d4":{"c_":["1"],"P":["1"],"k":["1"],"k.E":"1"},"eF":{"U":["1"]},"e_":{"P":["1"],"k":["1"],"k.E":"1"},"e0":{"U":["1"]},"an":{"k":["1"],"k.E":"1"},"cT":{"U":["1"]},"du":{"w":["1"],"bB":["1"],"m":["1"],"P":["1"],"k":["1"]},"W":{"C":["1"],"P":["1"],"k":["1"],"C.E":"1","k.E":"1"},"d1":{"aN":["1","2"]},"v":{"d1":["1","2"],"aN":["1","2"]},"eT":{"k":["1"],"k.E":"1"},"c9":{"d1":["1","2"],"aN":["1","2"]},"h5":{"aU":[],"bX":[]},"ca":{"aU":[],"bX":[]},"ev":{"ck":[],"a1":[]},"h8":{"a1":[]},"hW":{"a1":[]},"hj":{"bW":[]},"f4":{"ce":[]},"aU":{"bX":[]},"fL":{"aU":[],"bX":[]},"fM":{"aU":[],"bX":[]},"hO":{"aU":[],"bX":[]},"hM":{"aU":[],"bX":[]},"cZ":{"aU":[],"bX":[]},"hB":{"a1":[]},"i5":{"a1":[]},"ba":{"cc":["1","2"],"ha":["1","2"],"aN":["1","2"]},"ei":{"P":["1"],"k":["1"],"k.E":"1"},"ej":{"U":["1"]},"cJ":{"dh":[]},"dz":{"cO":[],"dc":[]},"i4":{"k":["cO"],"k.E":"cO"},"dw":{"U":["cO"]},"dq":{"dc":[]},"it":{"k":["dc"],"k.E":"dc"},"iu":{"U":["dc"]},"df":{"db":["1"]},"et":{"w":["j"],"db":["j"],"m":["j"],"P":["j"],"k":["j"],"bl":["j"]},"he":{"w":["j"],"db":["j"],"m":["j"],"P":["j"],"k":["j"],"bl":["j"],"w.E":"j","bl.E":"j"},"eu":{"w":["j"],"qX":[],"db":["j"],"m":["j"],"P":["j"],"k":["j"],"bl":["j"],"w.E":"j","bl.E":"j"},"cM":{"w":["j"],"dt":[],"db":["j"],"m":["j"],"P":["j"],"k":["j"],"bl":["j"],"w.E":"j","bl.E":"j"},"f7":{"nZ":[]},"ij":{"a1":[]},"f8":{"ck":[],"a1":[]},"aq":{"bm":["1"]},"cq":{"U":["1"]},"f6":{"k":["1"],"k.E":"1"},"dN":{"a1":[]},"f5":{"i8":["1"]},"fd":{"o5":[]},"ir":{"fd":[],"o5":[]},"ls":{"ba":["1","2"],"cc":["1","2"],"ha":["1","2"],"aN":["1","2"]},"eZ":{"ba":["1","2"],"cc":["1","2"],"ha":["1","2"],"aN":["1","2"]},"c3":{"dA":["1"],"b_":["1"],"by":["1"],"P":["1"],"k":["1"],"b_.E":"1"},"cV":{"U":["1"]},"ee":{"k":["1"]},"ek":{"w":["1"],"m":["1"],"P":["1"],"k":["1"]},"em":{"cc":["1","2"],"aN":["1","2"]},"cc":{"aN":["1","2"]},"el":{"C":["1"],"nL":["1"],"P":["1"],"k":["1"],"C.E":"1","k.E":"1"},"f0":{"U":["1"]},"eD":{"b_":["1"],"by":["1"],"P":["1"],"k":["1"]},"dA":{"b_":["1"],"by":["1"],"P":["1"],"k":["1"]},"fb":{"dA":["1"],"b_":["1"],"iz":["1"],"by":["1"],"P":["1"],"k":["1"],"b_.E":"1"},"fB":{"cD":["o","m<j>"]},"iw":{"cF":["m<j>","o"]},"fC":{"cF":["m<j>","o"]},"fE":{"cD":["m<j>","o"]},"fF":{"cF":["m<j>","o"]},"fS":{"cD":["o","m<j>"]},"i_":{"cD":["o","m<j>"]},"i0":{"cF":["m<j>","o"]},"q":{"ac":[],"ae":["ac"]},"j":{"ac":[],"ae":["ac"]},"m":{"P":["1"],"k":["1"]},"ac":{"ae":["ac"]},"cO":{"dc":[]},"by":{"P":["1"],"k":["1"]},"o":{"ae":["o"],"dh":[]},"dM":{"a1":[]},"ck":{"a1":[]},"hi":{"a1":[]},"bC":{"a1":[]},"dk":{"a1":[]},"h3":{"a1":[]},"hX":{"a1":[]},"eP":{"a1":[]},"cg":{"a1":[]},"fN":{"a1":[]},"ho":{"a1":[]},"eI":{"a1":[]},"fP":{"a1":[]},"ik":{"bW":[]},"e4":{"bW":[]},"iv":{"ce":[]},"hA":{"k":["j"],"k.E":"j"},"hz":{"U":["j"]},"a2":{"qO":[]},"cs":{"hY":[]},"br":{"hY":[]},"ia":{"hY":[]},"bb":{"u":[]},"y":{"r":[],"aV":[]},"fw":{"r":[],"aV":[]},"fz":{"r":[],"aV":[]},"cB":{"r":[],"aV":[]},"bD":{"aV":[]},"dX":{"mC":["ac"]},"r":{"aV":[]},"fW":{"r":[],"aV":[]},"b7":{"aV":[]},"hD":{"r":[],"aV":[]},"bA":{"u":[]},"dv":{"aV":[]},"eU":{"mC":["ac"]},"eW":{"eJ":["1"]},"ig":{"eW":["1"],"eJ":["1"]},"eX":{"eK":["1"]},"iq":{"qy":[]},"as":{"k":["m<1>"],"k.E":"m<1>"},"eY":{"U":["m<1>"]},"h_":{"bp":[]},"cd":{"S":[]},"eE":{"S":[]},"al":{"S":[]},"bY":{"S":[]},"cn":{"S":[]},"hQ":{"S":[]},"hg":{"S":[]},"hE":{"S":[]},"b0":{"S":[]},"cG":{"b0":[],"S":[]},"hd":{"b0":[],"S":[]},"fD":{"b0":[],"S":[]},"fZ":{"b0":[],"S":[]},"fK":{"b0":[],"S":[]},"di":{"b0":[],"S":[]},"dj":{"b0":[],"S":[]},"ey":{"di":[],"b0":[],"S":[]},"hv":{"dj":[],"b0":[],"S":[]},"dn":{"S":[]},"hh":{"b0":[],"S":[]},"hn":{"al":[],"S":[]},"hm":{"al":[],"S":[]},"af":{"al":[],"S":[]},"hk":{"af":[],"al":[],"S":[]},"bq":{"af":[],"al":[],"S":[]},"h9":{"bq":[],"af":[],"al":[],"S":[]},"hs":{"af":[],"al":[],"S":[]},"fR":{"af":[],"al":[],"S":[]},"fU":{"af":[],"al":[],"S":[]},"fx":{"bq":[],"af":[],"al":[],"S":[]},"hR":{"bq":[],"af":[],"al":[],"S":[]},"fY":{"bq":[],"af":[],"al":[],"S":[]},"fX":{"af":[],"al":[],"S":[]},"hy":{"bq":[],"af":[],"al":[],"S":[]},"fJ":{"bq":[],"af":[],"al":[],"S":[]},"hx":{"bq":[],"af":[],"al":[],"S":[]},"i1":{"bq":[],"af":[],"al":[],"S":[]},"i2":{"o4":[]},"aB":{"ae":["G"]},"d2":{"ag":[]},"R":{"ag":[]},"dW":{"ag":[]},"c1":{"ag":[]},"dU":{"ag":[]},"ah":{"aY":["ag"],"w":["ag"],"m":["ag"],"P":["ag"],"k":["ag"],"w.E":"ag","aY.E":"ag"},"fV":{"w":["R"],"m":["R"],"P":["R"],"k":["R"],"w.E":"R","k.E":"R"},"aZ":{"bW":[]},"bw":{"a7":[]},"fG":{"a7":[]},"dP":{"a7":[]},"h1":{"a7":[]},"fv":{"a7":[]},"d7":{"a7":[]},"hP":{"a7":[]},"ed":{"a7":[]},"d9":{"a7":[]},"e8":{"a7":[]},"e9":{"a7":[]},"cH":{"a7":[]},"eb":{"a7":[]},"d8":{"a7":[]},"ec":{"a7":[]},"h2":{"a7":[]},"h0":{"a7":[]},"ft":{"a7":[]},"ea":{"a7":[]},"fu":{"a7":[]},"fr":{"a7":[]},"fs":{"a7":[]},"fQ":{"b_":["o"],"by":["o"],"P":["o"],"k":["o"],"b_.E":"o"},"i9":{"b_":["o"],"by":["o"],"P":["o"],"k":["o"]},"aY":{"w":["1"],"m":["1"],"P":["1"],"k":["1"]},"eC":{"o4":[]},"be":{"b8":[]},"c0":{"b8":[]},"cf":{"c0":[],"b8":[]},"L":{"c0":[],"b8":[]},"n":{"be":[],"b8":[]},"E":{"be":[],"b8":[]},"cQ":{"be":[],"b8":[]},"d0":{"be":[],"b8":[]},"dV":{"b8":[]},"e7":{"U":["b8"]},"fq":{"aY":["R?"],"w":["R?"],"m":["R?"],"P":["R?"],"k":["R?"],"w.E":"R?","aY.E":"R?"},"fy":{"b4":[]},"hG":{"b4":[]},"hF":{"b4":[]},"hU":{"b4":[]},"fp":{"dI":[]},"fH":{"dI":[]},"dg":{"aD":[],"Q":[],"I":[]},"fO":{"cl":[],"Q":[],"I":[]},"dO":{"cl":[],"Q":[],"I":[]},"d5":{"Q":[],"I":[]},"ew":{"Q":[],"I":[]},"cA":{"Q":[],"I":[]},"d3":{"Q":[],"I":[]},"aD":{"Q":[],"I":[]},"dr":{"eQ":[]},"eO":{"Q":[],"I":[]},"dK":{"Q":[],"I":[]},"d_":{"Q":[],"I":[]},"dZ":{"Q":[],"I":[]},"ex":{"Q":[],"I":[]},"ez":{"Q":[],"I":[]},"cR":{"Q":[],"I":[]},"dL":{"cR":[],"Q":[],"I":[]},"dl":{"Q":[],"I":[]},"eH":{"Q":[],"I":[]},"eA":{"Q":[],"I":[]},"bZ":{"Q":[],"I":[]},"dm":{"Q":[],"I":[]},"bK":{"bZ":[],"Q":[],"I":[]},"eN":{"Q":[],"I":[]},"dd":{"bK":[],"bZ":[],"Q":[],"I":[]},"eM":{"bK":[],"bZ":[],"Q":[],"I":[]},"h6":{"I":[]},"dR":{"I":[]},"d6":{"I":[]},"Q":{"I":[]},"cl":{"Q":[],"I":[]},"eR":{"Q":[],"I":[]},"fI":{"dJ":[]},"bI":{"b5":[]},"hc":{"b5":[]},"er":{"b5":[]},"es":{"b5":[]},"eq":{"b5":[]},"hr":{"bW":[]},"hu":{"cI":[]},"hZ":{"cI":[]},"i3":{"cI":[]},"mr":{"bL":[],"bo":[],"ae":["bo"]},"b6":{"bz":[],"ae":["bz"]},"ap":{"mr":[],"bL":[],"bo":[],"ae":["bo"]},"bz":{"ae":["bz"]},"hK":{"bz":[],"ae":["bz"]},"bo":{"ae":["bo"]},"hL":{"bo":[],"ae":["bo"]},"eG":{"bo":[],"ae":["bo"]},"bL":{"bo":[],"ae":["bo"]},"e6":{"hC":[]},"dt":{"m":["j"],"P":["j"],"k":["j"]}}'))
H.rq(v.typeUniverse,JSON.parse('{"du":1,"fe":2,"df":1,"hN":2,"ee":1,"ek":1,"em":2,"eD":1,"f_":1,"f3":1,"ff":1,"fg":1}'))
var u={D:" must not be greater than the number of characters in the file, ",U:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",v:"No color list in VMobject with attribute name ",A:"expected-attribute-value-but-got-right-bracket",g:"expected-closing-tag-but-got-right-bracket",f:"expected-doctype-name-but-got-right-bracket",S:"expected-space-or-right-bracket-in-doctype",d:"unexpected-bang-after-double-dash-in-comment",H:"unexpected-character-after-attribute-value",B:"unexpected-character-after-soldius-in-tag",V:"unexpected-character-in-unquoted-attribute-value",K:"unexpected-dash-after-double-dash-in-comment",q:"unexpected-frameset-in-frameset-innerhtml",G:"unexpected-html-element-in-foreign-content",M:"unexpected-start-tag-implies-table-voodoo",r:"unexpected-table-element-end-tag-in-select-in-table",a:"unexpected-table-element-start-tag-in-select-in-table"}
var t=(function rtii(){var s=H.aO
return{pc:s("@<j>"),aY:s("cA"),A:s("bv"),u:s("dN"),fy:s("aS"),jQ:s("cB"),g4:s("E"),E:s("a9"),G:s("M"),cw:s("d0"),bP:s("ae<@>"),B:s("v<o,o>"),R:s("v<o,@>"),i:s("dV"),dA:s("d2"),gt:s("P<@>"),h:s("R"),ia:s("L"),fz:s("a1"),fq:s("u"),d3:s("bj<b5>"),mc:s("bj<bI>"),cY:s("bk"),e:s("b5"),mA:s("bW"),lS:s("mr"),gY:s("bX"),g7:s("bm<@>"),ha:s("c9<de,o>"),ek:s("d6"),gx:s("bY"),aB:s("d9"),id:s("ca<q>"),Y:s("as<I>"),c2:s("as<G>"),pn:s("as<Q>"),b5:s("as<e>"),lx:s("as<q>"),lb:s("as<j>"),cj:s("k<R>"),hl:s("k<ag>"),bq:s("k<o>"),e7:s("k<@>"),lq:s("z<b4>"),nC:s("z<cA>"),fp:s("z<bv>"),iX:s("z<aS>"),O:s("z<M>"),hR:s("z<cE>"),n_:s("z<d3>"),il:s("z<R>"),fO:s("z<bj<b5>>"),oQ:s("z<al>"),jA:s("z<d5>"),b1:s("z<aD>"),Z:s("z<m<I>>"),bo:s("z<m<G>>"),Q:s("z<m<e>>"),b:s("z<m<q>>"),fC:s("z<m<j>>"),bV:s("z<aN<o,@>>"),kU:s("z<eo>"),r:s("z<I>"),d:s("z<ag>"),a8:s("z<p<o,o>>"),eH:s("z<p<@,@>>"),bD:s("z<aZ>"),gg:s("z<a7>"),b7:s("z<cd>"),iM:s("z<eE>"),nn:s("z<bK>"),dw:s("z<eK<@>>"),s:s("z<o>"),ks:s("z<be>"),kG:s("z<eL>"),bB:s("z<cj<b4,q,q>>"),ez:s("z<ds<e,e,e,e>>"),f:s("z<Q>"),l:s("z<e>"),pg:s("z<az>"),dg:s("z<bh>"),n:s("z<q>"),m:s("z<@>"),t:s("z<j>"),lB:s("z<R?>"),hg:s("z<ag?>"),D:s("z<o?>"),po:s("z<I(I,q)>"),T:s("ef"),dY:s("bF"),dX:s("db<@>"),lY:s("uc"),am:s("ud"),mY:s("aD"),oP:s("ha<G,o>"),cG:s("m<b4>"),ev:s("m<M>"),jB:s("m<R>"),oR:s("m<bj<b5>>"),ls:s("m<m<e>>"),jj:s("m<m<q>>"),a:s("m<I>"),bF:s("m<o>"),oX:s("m<be>"),fr:s("m<S>"),dq:s("m<cj<b4,q,q>>"),y:s("m<e>"),H:s("m<q>"),gs:s("m<@>"),L:s("m<j>"),eU:s("m<az?>"),mH:s("af"),lO:s("bn<G,m<az>>"),fg:s("aN<o,M>"),fY:s("aN<bk,m<bj<b5>>>"),gQ:s("F<o,o>"),iZ:s("F<o,@>"),aQ:s("F<e,q>"),j:s("I"),gn:s("eq"),gD:s("bb"),m6:s("er"),oJ:s("es"),nB:s("bI"),hD:s("cM"),I:s("ag"),P:s("am"),f7:s("dg"),K:s("G"),w:s("p<o,o>"),nz:s("p<@,@>"),X:s("p<o,o?>"),iA:s("p<o?,o?>"),jK:s("n"),m4:s("dh"),n8:s("cN<ac>"),f_:s("nL<o>"),mx:s("mC<ac>"),lu:s("cO"),dT:s("cd"),b9:s("dn"),ns:s("by<I>"),hq:s("bz"),hs:s("bo"),ol:s("bL"),lH:s("cQ"),k:s("ce"),ny:s("cf"),N:s("o"),g:s("be"),gL:s("o(o)"),mN:s("aJ<e>"),fn:s("c0"),oI:s("c1"),J:s("bp"),in:s("S"),iu:s("O<e,e>"),d7:s("O<j,q>"),o:s("O<j,j>"),kk:s("O<j,m<q>>"),oM:s("cj<b4,q,q>"),cn:s("ds<e,e,e,e>"),f5:s("nZ"),do:s("ck"),hb:s("dt"),cx:s("bM"),jJ:s("hY"),bX:s("Q"),V:s("e"),ew:s("e(e)"),v:s("an<R>"),na:s("an<o>"),pl:s("cT<R>"),eX:s("ig<bb>"),av:s("aq<am>"),j_:s("aq<@>"),hy:s("aq<j>"),iS:s("aq<ac>"),C:s("az"),nR:s("bh"),km:s("f5<ac>"),k4:s("B"),c:s("B()"),cT:s("B(R)"),kL:s("B(bI)"),iW:s("B(G)"),gS:s("B(o)"),aP:s("B(az)"),gw:s("B(j)"),W:s("q"),iJ:s("q(q,O<j,j>)"),eL:s("q(e)"),f3:s("q(q)"),z:s("@"),de:s("@()"),mq:s("@(G)"),ng:s("@(G,ce)"),f6:s("@(o)"),S:s("j"),eK:s("0&*"),_:s("G*"),mV:s("R?"),e0:s("bj<bI>?"),gK:s("bm<am>?"),x:s("m<M>?"),bk:s("m<R>?"),gv:s("m<aD>?"),kQ:s("m<I>?"),fm:s("m<o>?"),jq:s("m<eL>?"),az:s("m<cj<b4,q,q>>?"),fA:s("m<e>?"),lX:s("m<e>(m<e>,m<e>,q)?"),f8:s("m<j>?"),gr:s("m<I(I,q)>?"),pp:s("aN<bk,m<bj<b5>>>?"),e1:s("ag?"),iD:s("G?"),oA:s("by<o>?"),g9:s("b0?"),jv:s("o?"),nU:s("b8?"),nm:s("O<j,j>?"),F:s("cU<@,@>?"),dd:s("az?"),nF:s("io?"),a5:s("B()?"),pi:s("B(o)?"),U:s("@(u)?"),dU:s("j(R,R)?"),jE:s("~()?"),q:s("ac"),p:s("~"),M:s("~()"),hv:s("~(ac)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.a4=W.cB.prototype
C.t=W.dS.prototype
C.b6=J.aW.prototype
C.a=J.z.prototype
C.d=J.da.prototype
C.e=J.cb.prototype
C.b=J.bE.prototype
C.b7=J.bF.prototype
C.w=H.eu.prototype
C.cP=H.cM.prototype
C.aw=J.ht.prototype
C.X=J.bM.prototype
C.e9=W.dv.prototype
C.ax=new P.fC(!1,127)
C.K=new M.e(-1,0,0)
C.aK=new M.aS(null,null,null,C.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.a7=new V.M(0.73333,0.73333,0.73333,1)
C.m=new M.e(0,-1,0)
C.b8=H.a(s([0]),t.n)
C.aL=new M.aS(C.a7,!0,!1,C.m,1,!0,0.1,1,null,C.b8,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
C.aM=new M.aS(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.y=new H.ca(P.p5(),t.id)
C.a0=new H.ca(P.p5(),H.aO("ca<j>"))
C.L=new H.ca(P.tP(),t.id)
C.aN=new P.fB()
C.eb=new P.fF()
C.aO=new P.fE()
C.a1=new H.e0(H.aO("e0<0&>"))
C.a2=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.aP=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.aU=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.aQ=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.aR=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.aT=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.aS=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.a3=function(hooks) { return hooks; }

C.aV=new P.ho()
C.o=new H.kv()
C.x=new P.i_()
C.k=new P.ir()
C.aW=new P.iv()
C.n=new V.M(0,0,0,0)
C.r=new V.M(0,0,0,1)
C.aX=new V.M(1,1,0,1)
C.c=new V.M(1,1,1,1)
C.aY=new V.M(0.46275,0.86667,0.75294,1)
C.u=new V.M(0.98824,0.38431,0.33333,1)
C.aZ=new V.M(0.53333,0.53333,0.53333,1)
C.b_=new V.M(0.1098,0.45882,0.54118,1)
C.a5=new V.M(0.51373,0.75686,0.40392,1)
C.b0=new V.M(0.36078,0.81569,0.70196,1)
C.a6=new V.M(0.3451,0.76863,0.86667,1)
C.b1=new V.M(0.60392,0.44706,0.67451,1)
C.b2=new V.M(0.81961,0.27843,0.74118,1)
C.b3=new V.M(0.67451,0.91765,0.84314,1)
C.b4=new V.M(1,0.52549,0.18431,1)
C.b5=new V.M(0.78824,0.88627,0.68235,1)
C.z=new Y.bk("EventType.mouseMovedEvent")
C.A=new Y.bk("EventType.mousePressedEvent")
C.v=new Y.bk("EventType.mouseReleasedEvent")
C.B=new Y.bk("EventType.mouseDraggedEvent")
C.M=new Y.bk("EventType.keyPressedEvent")
C.N=new Y.bk("EventType.keyReleasedEvent")
C.C=H.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.am=new B.p("http://www.w3.org/1999/xhtml","applet",t.w)
C.ao=new B.p("http://www.w3.org/1999/xhtml","caption",t.w)
C.W=new B.p("http://www.w3.org/1999/xhtml","html",t.w)
C.ar=new B.p("http://www.w3.org/1999/xhtml","marquee",t.w)
C.av=new B.p("http://www.w3.org/1999/xhtml","object",t.w)
C.U=new B.p("http://www.w3.org/1999/xhtml","table",t.w)
C.aq=new B.p("http://www.w3.org/1999/xhtml","td",t.w)
C.ak=new B.p("http://www.w3.org/1999/xhtml","th",t.w)
C.as=new B.p("http://www.w3.org/1998/Math/MathML","mi",t.w)
C.an=new B.p("http://www.w3.org/1998/Math/MathML","mo",t.w)
C.au=new B.p("http://www.w3.org/1998/Math/MathML","mn",t.w)
C.ap=new B.p("http://www.w3.org/1998/Math/MathML","ms",t.w)
C.al=new B.p("http://www.w3.org/1998/Math/MathML","mtext",t.w)
C.dw=new B.p("http://www.w3.org/1998/Math/MathML","annotation-xml",t.w)
C.V=new B.p("http://www.w3.org/2000/svg","foreignObject",t.w)
C.at=new B.p("http://www.w3.org/2000/svg","desc",t.w)
C.aj=new B.p("http://www.w3.org/2000/svg","title",t.w)
C.O=H.a(s([C.am,C.ao,C.W,C.ar,C.av,C.U,C.aq,C.ak,C.as,C.an,C.au,C.ap,C.al,C.dw,C.V,C.at,C.aj]),t.m)
C.dJ=new B.p("http://www.w3.org/1999/xhtml","button",t.nz)
C.ba=H.a(s([C.dJ]),t.eH)
C.bb=H.a(s(["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","menu","meta","nobr","ol","p","pre","ruby","s","small","span","strike","strong","sub","sup","table","tt","u","ul","var"]),t.s)
C.D=H.a(s(["h1","h2","h3","h4","h5","h6"]),t.s)
C.P=H.a(s(["dd","dt","li","option","optgroup","p","rp","rt"]),t.s)
C.E=H.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.be=H.a(s(["+//silmaril//dtd html pro v0r11 19970101//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//as//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sq//dtd html 2.0 hotmetal + extensions//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"]),t.s)
C.bf=H.a(s([C.z,C.A,C.v,C.B,C.M,C.N]),H.aO("z<bk>"))
C.F=H.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.bg=H.a(s(["uU","bB","lL","iI","cC"]),t.s)
C.bh=H.a(s([11,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),t.t)
C.Q=H.a(s(["table","tbody","tfoot","thead","tr"]),t.s)
C.cQ=new B.p("http://www.w3.org/1999/xhtml","ol",t.nz)
C.dj=new B.p("http://www.w3.org/1999/xhtml","ul",t.nz)
C.bi=H.a(s([C.cQ,C.dj]),t.eH)
C.i=H.a(s(["unit","value"]),t.s)
C.bK=new H.v(2,{unit:600,value:"em"},C.i,t.R)
C.c0=new H.v(2,{unit:601,value:"ex"},C.i,t.R)
C.c4=new H.v(2,{unit:602,value:"px"},C.i,t.R)
C.bW=new H.v(2,{unit:603,value:"cm"},C.i,t.R)
C.bZ=new H.v(2,{unit:604,value:"mm"},C.i,t.R)
C.bU=new H.v(2,{unit:605,value:"in"},C.i,t.R)
C.bJ=new H.v(2,{unit:606,value:"pt"},C.i,t.R)
C.c7=new H.v(2,{unit:607,value:"pc"},C.i,t.R)
C.bT=new H.v(2,{unit:608,value:"deg"},C.i,t.R)
C.c3=new H.v(2,{unit:609,value:"rad"},C.i,t.R)
C.bN=new H.v(2,{unit:610,value:"grad"},C.i,t.R)
C.c1=new H.v(2,{unit:611,value:"turn"},C.i,t.R)
C.bO=new H.v(2,{unit:612,value:"ms"},C.i,t.R)
C.c_=new H.v(2,{unit:613,value:"s"},C.i,t.R)
C.bQ=new H.v(2,{unit:614,value:"hz"},C.i,t.R)
C.c5=new H.v(2,{unit:615,value:"khz"},C.i,t.R)
C.bS=new H.v(2,{unit:617,value:"fr"},C.i,t.R)
C.bM=new H.v(2,{unit:618,value:"dpi"},C.i,t.R)
C.bP=new H.v(2,{unit:619,value:"dpcm"},C.i,t.R)
C.bV=new H.v(2,{unit:620,value:"dppx"},C.i,t.R)
C.bL=new H.v(2,{unit:621,value:"ch"},C.i,t.R)
C.bY=new H.v(2,{unit:622,value:"rem"},C.i,t.R)
C.c2=new H.v(2,{unit:623,value:"vw"},C.i,t.R)
C.bX=new H.v(2,{unit:624,value:"vh"},C.i,t.R)
C.c6=new H.v(2,{unit:625,value:"vmin"},C.i,t.R)
C.bR=new H.v(2,{unit:626,value:"vmax"},C.i,t.R)
C.a8=H.a(s([C.bK,C.c0,C.c4,C.bW,C.bZ,C.bU,C.bJ,C.c7,C.bT,C.c3,C.bN,C.c1,C.bO,C.c_,C.bQ,C.c5,C.bS,C.bM,C.bP,C.bV,C.bL,C.bY,C.c2,C.bX,C.c6,C.bR]),t.bV)
C.a9=H.a(s(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),t.s)
C.bk=H.a(s(["address","div","p"]),t.s)
C.aa=H.a(s([C.as,C.an,C.au,C.ap,C.al]),t.a8)
C.f=H.a(s(["type","value"]),t.s)
C.cv=new H.v(2,{type:670,value:"top-left-corner"},C.f,t.R)
C.cp=new H.v(2,{type:671,value:"top-left"},C.f,t.R)
C.cD=new H.v(2,{type:672,value:"top-center"},C.f,t.R)
C.cE=new H.v(2,{type:673,value:"top-right"},C.f,t.R)
C.cb=new H.v(2,{type:674,value:"top-right-corner"},C.f,t.R)
C.ci=new H.v(2,{type:675,value:"bottom-left-corner"},C.f,t.R)
C.ct=new H.v(2,{type:676,value:"bottom-left"},C.f,t.R)
C.cC=new H.v(2,{type:677,value:"bottom-center"},C.f,t.R)
C.cd=new H.v(2,{type:678,value:"bottom-right"},C.f,t.R)
C.ck=new H.v(2,{type:679,value:"bottom-right-corner"},C.f,t.R)
C.cB=new H.v(2,{type:680,value:"left-top"},C.f,t.R)
C.cm=new H.v(2,{type:681,value:"left-middle"},C.f,t.R)
C.cj=new H.v(2,{type:682,value:"right-bottom"},C.f,t.R)
C.cf=new H.v(2,{type:683,value:"right-top"},C.f,t.R)
C.cx=new H.v(2,{type:684,value:"right-middle"},C.f,t.R)
C.cy=new H.v(2,{type:685,value:"right-bottom"},C.f,t.R)
C.bl=H.a(s([C.cv,C.cp,C.cD,C.cE,C.cb,C.ci,C.ct,C.cC,C.cd,C.ck,C.cB,C.cm,C.cj,C.cf,C.cx,C.cy]),t.bV)
C.ac=H.a(s(["0","1","2","3","4","5","6","7","8","9"]),t.s)
C.bm=H.a(s([]),t.r)
C.R=H.a(s([]),t.eH)
C.p=H.a(s([]),t.s)
C.bn=H.a(s([]),t.n)
C.bq=H.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.br=H.a(s(["oO","cC","tT","yY","pP","eE"]),t.s)
C.bs=H.a(s(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),t.s)
C.cJ=new H.v(2,{type:641,value:"import"},C.f,t.R)
C.cs=new H.v(2,{type:642,value:"media"},C.f,t.R)
C.cq=new H.v(2,{type:643,value:"page"},C.f,t.R)
C.cH=new H.v(2,{type:644,value:"charset"},C.f,t.R)
C.cw=new H.v(2,{type:645,value:"stylet"},C.f,t.R)
C.ce=new H.v(2,{type:646,value:"keyframes"},C.f,t.R)
C.cz=new H.v(2,{type:647,value:"-webkit-keyframes"},C.f,t.R)
C.cI=new H.v(2,{type:648,value:"-moz-keyframes"},C.f,t.R)
C.cu=new H.v(2,{type:649,value:"-ms-keyframes"},C.f,t.R)
C.cl=new H.v(2,{type:650,value:"-o-keyframes"},C.f,t.R)
C.cL=new H.v(2,{type:651,value:"font-face"},C.f,t.R)
C.co=new H.v(2,{type:652,value:"namespace"},C.f,t.R)
C.cr=new H.v(2,{type:653,value:"host"},C.f,t.R)
C.cc=new H.v(2,{type:654,value:"mixin"},C.f,t.R)
C.cA=new H.v(2,{type:655,value:"include"},C.f,t.R)
C.cG=new H.v(2,{type:656,value:"content"},C.f,t.R)
C.ch=new H.v(2,{type:657,value:"extend"},C.f,t.R)
C.cF=new H.v(2,{type:658,value:"-moz-document"},C.f,t.R)
C.cg=new H.v(2,{type:659,value:"supports"},C.f,t.R)
C.cn=new H.v(2,{type:660,value:"viewport"},C.f,t.R)
C.cK=new H.v(2,{type:661,value:"-ms-viewport"},C.f,t.R)
C.bt=H.a(s([C.cJ,C.cs,C.cq,C.cH,C.cw,C.ce,C.cz,C.cI,C.cu,C.cl,C.cL,C.co,C.cr,C.cc,C.cA,C.cG,C.ch,C.cF,C.cg,C.cn,C.cK]),t.bV)
C.bu=H.a(s(["yY","sS","tT","eE","mM"]),t.s)
C.d6=new B.p("http://www.w3.org/1998/Math/MathML","annotaion-xml",t.w)
C.bx=H.a(s([C.d6,C.V,C.at,C.aj]),t.a8)
C.G=H.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.by=H.a(s(["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"]),t.s)
C.bz=H.a(s(["pre","listing","textarea"]),t.s)
C.ad=H.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.ae=H.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.bA=H.a(s(["C","D","A","T","A","["]),t.s)
C.cU=new B.p("http://www.w3.org/1999/xhtml","optgroup",t.w)
C.e_=new B.p("http://www.w3.org/1999/xhtml","option",t.w)
C.bB=H.a(s([C.cU,C.e_]),t.m)
C.bC=H.a(s(["tbody","tfoot","thead","html"]),t.s)
C.bF=H.a(s([C.W,C.U]),t.m)
C.dO=new B.p("http://www.w3.org/1999/xhtml","address",t.w)
C.cW=new B.p("http://www.w3.org/1999/xhtml","area",t.w)
C.e2=new B.p("http://www.w3.org/1999/xhtml","article",t.w)
C.dm=new B.p("http://www.w3.org/1999/xhtml","aside",t.w)
C.du=new B.p("http://www.w3.org/1999/xhtml","base",t.w)
C.dc=new B.p("http://www.w3.org/1999/xhtml","basefont",t.w)
C.de=new B.p("http://www.w3.org/1999/xhtml","bgsound",t.w)
C.dG=new B.p("http://www.w3.org/1999/xhtml","blockquote",t.w)
C.db=new B.p("http://www.w3.org/1999/xhtml","body",t.w)
C.dl=new B.p("http://www.w3.org/1999/xhtml","br",t.w)
C.dK=new B.p("http://www.w3.org/1999/xhtml","button",t.w)
C.dM=new B.p("http://www.w3.org/1999/xhtml","center",t.w)
C.cZ=new B.p("http://www.w3.org/1999/xhtml","col",t.w)
C.dR=new B.p("http://www.w3.org/1999/xhtml","colgroup",t.w)
C.dp=new B.p("http://www.w3.org/1999/xhtml","command",t.w)
C.dW=new B.p("http://www.w3.org/1999/xhtml","dd",t.w)
C.dx=new B.p("http://www.w3.org/1999/xhtml","details",t.w)
C.d7=new B.p("http://www.w3.org/1999/xhtml","dir",t.w)
C.d5=new B.p("http://www.w3.org/1999/xhtml","div",t.w)
C.dU=new B.p("http://www.w3.org/1999/xhtml","dl",t.w)
C.dq=new B.p("http://www.w3.org/1999/xhtml","dt",t.w)
C.cY=new B.p("http://www.w3.org/1999/xhtml","embed",t.w)
C.cT=new B.p("http://www.w3.org/1999/xhtml","fieldset",t.w)
C.dE=new B.p("http://www.w3.org/1999/xhtml","figure",t.w)
C.dV=new B.p("http://www.w3.org/1999/xhtml","footer",t.w)
C.d9=new B.p("http://www.w3.org/1999/xhtml","form",t.w)
C.dr=new B.p("http://www.w3.org/1999/xhtml","frame",t.w)
C.cV=new B.p("http://www.w3.org/1999/xhtml","frameset",t.w)
C.d1=new B.p("http://www.w3.org/1999/xhtml","h1",t.w)
C.e1=new B.p("http://www.w3.org/1999/xhtml","h2",t.w)
C.cX=new B.p("http://www.w3.org/1999/xhtml","h3",t.w)
C.dy=new B.p("http://www.w3.org/1999/xhtml","h4",t.w)
C.dZ=new B.p("http://www.w3.org/1999/xhtml","h5",t.w)
C.dD=new B.p("http://www.w3.org/1999/xhtml","h6",t.w)
C.df=new B.p("http://www.w3.org/1999/xhtml","head",t.w)
C.e0=new B.p("http://www.w3.org/1999/xhtml","header",t.w)
C.dn=new B.p("http://www.w3.org/1999/xhtml","hr",t.w)
C.dP=new B.p("http://www.w3.org/1999/xhtml","iframe",t.w)
C.dF=new B.p("http://www.w3.org/1999/xhtml","image",t.w)
C.ds=new B.p("http://www.w3.org/1999/xhtml","img",t.w)
C.dA=new B.p("http://www.w3.org/1999/xhtml","input",t.w)
C.dN=new B.p("http://www.w3.org/1999/xhtml","isindex",t.w)
C.di=new B.p("http://www.w3.org/1999/xhtml","li",t.w)
C.dh=new B.p("http://www.w3.org/1999/xhtml","link",t.w)
C.dL=new B.p("http://www.w3.org/1999/xhtml","listing",t.w)
C.d2=new B.p("http://www.w3.org/1999/xhtml","men",t.w)
C.dH=new B.p("http://www.w3.org/1999/xhtml","meta",t.w)
C.dg=new B.p("http://www.w3.org/1999/xhtml","nav",t.w)
C.dX=new B.p("http://www.w3.org/1999/xhtml","noembed",t.w)
C.dv=new B.p("http://www.w3.org/1999/xhtml","noframes",t.w)
C.dt=new B.p("http://www.w3.org/1999/xhtml","noscript",t.w)
C.cR=new B.p("http://www.w3.org/1999/xhtml","ol",t.w)
C.dQ=new B.p("http://www.w3.org/1999/xhtml","p",t.w)
C.d_=new B.p("http://www.w3.org/1999/xhtml","param",t.w)
C.dB=new B.p("http://www.w3.org/1999/xhtml","plaintext",t.w)
C.cS=new B.p("http://www.w3.org/1999/xhtml","pre",t.w)
C.dz=new B.p("http://www.w3.org/1999/xhtml","script",t.w)
C.dd=new B.p("http://www.w3.org/1999/xhtml","section",t.w)
C.d8=new B.p("http://www.w3.org/1999/xhtml","select",t.w)
C.d3=new B.p("http://www.w3.org/1999/xhtml","style",t.w)
C.dS=new B.p("http://www.w3.org/1999/xhtml","tbody",t.w)
C.d4=new B.p("http://www.w3.org/1999/xhtml","textarea",t.w)
C.dI=new B.p("http://www.w3.org/1999/xhtml","tfoot",t.w)
C.da=new B.p("http://www.w3.org/1999/xhtml","thead",t.w)
C.dC=new B.p("http://www.w3.org/1999/xhtml","title",t.w)
C.d0=new B.p("http://www.w3.org/1999/xhtml","tr",t.w)
C.dk=new B.p("http://www.w3.org/1999/xhtml","ul",t.w)
C.dY=new B.p("http://www.w3.org/1999/xhtml","wbr",t.w)
C.dT=new B.p("http://www.w3.org/1999/xhtml","xmp",t.w)
C.S=H.a(s([C.dO,C.am,C.cW,C.e2,C.dm,C.du,C.dc,C.de,C.dG,C.db,C.dl,C.dK,C.ao,C.dM,C.cZ,C.dR,C.dp,C.dW,C.dx,C.d7,C.d5,C.dU,C.dq,C.cY,C.cT,C.dE,C.dV,C.d9,C.dr,C.cV,C.d1,C.e1,C.cX,C.dy,C.dZ,C.dD,C.df,C.e0,C.dn,C.W,C.dP,C.dF,C.ds,C.dA,C.dN,C.di,C.dh,C.dL,C.ar,C.d2,C.dH,C.dg,C.dX,C.dv,C.dt,C.av,C.cR,C.dQ,C.d_,C.dB,C.cS,C.dz,C.dd,C.d8,C.d3,C.U,C.dS,C.aq,C.d4,C.dI,C.ak,C.da,C.dC,C.d0,C.dk,C.dY,C.dT,C.V]),t.a8)
C.b9=H.a(s(["AElig","AElig;","AMP","AMP;","Aacute","Aacute;","Abreve;","Acirc","Acirc;","Acy;","Afr;","Agrave","Agrave;","Alpha;","Amacr;","And;","Aogon;","Aopf;","ApplyFunction;","Aring","Aring;","Ascr;","Assign;","Atilde","Atilde;","Auml","Auml;","Backslash;","Barv;","Barwed;","Bcy;","Because;","Bernoullis;","Beta;","Bfr;","Bopf;","Breve;","Bscr;","Bumpeq;","CHcy;","COPY","COPY;","Cacute;","Cap;","CapitalDifferentialD;","Cayleys;","Ccaron;","Ccedil","Ccedil;","Ccirc;","Cconint;","Cdot;","Cedilla;","CenterDot;","Cfr;","Chi;","CircleDot;","CircleMinus;","CirclePlus;","CircleTimes;","ClockwiseContourIntegral;","CloseCurlyDoubleQuote;","CloseCurlyQuote;","Colon;","Colone;","Congruent;","Conint;","ContourIntegral;","Copf;","Coproduct;","CounterClockwiseContourIntegral;","Cross;","Cscr;","Cup;","CupCap;","DD;","DDotrahd;","DJcy;","DScy;","DZcy;","Dagger;","Darr;","Dashv;","Dcaron;","Dcy;","Del;","Delta;","Dfr;","DiacriticalAcute;","DiacriticalDot;","DiacriticalDoubleAcute;","DiacriticalGrave;","DiacriticalTilde;","Diamond;","DifferentialD;","Dopf;","Dot;","DotDot;","DotEqual;","DoubleContourIntegral;","DoubleDot;","DoubleDownArrow;","DoubleLeftArrow;","DoubleLeftRightArrow;","DoubleLeftTee;","DoubleLongLeftArrow;","DoubleLongLeftRightArrow;","DoubleLongRightArrow;","DoubleRightArrow;","DoubleRightTee;","DoubleUpArrow;","DoubleUpDownArrow;","DoubleVerticalBar;","DownArrow;","DownArrowBar;","DownArrowUpArrow;","DownBreve;","DownLeftRightVector;","DownLeftTeeVector;","DownLeftVector;","DownLeftVectorBar;","DownRightTeeVector;","DownRightVector;","DownRightVectorBar;","DownTee;","DownTeeArrow;","Downarrow;","Dscr;","Dstrok;","ENG;","ETH","ETH;","Eacute","Eacute;","Ecaron;","Ecirc","Ecirc;","Ecy;","Edot;","Efr;","Egrave","Egrave;","Element;","Emacr;","EmptySmallSquare;","EmptyVerySmallSquare;","Eogon;","Eopf;","Epsilon;","Equal;","EqualTilde;","Equilibrium;","Escr;","Esim;","Eta;","Euml","Euml;","Exists;","ExponentialE;","Fcy;","Ffr;","FilledSmallSquare;","FilledVerySmallSquare;","Fopf;","ForAll;","Fouriertrf;","Fscr;","GJcy;","GT","GT;","Gamma;","Gammad;","Gbreve;","Gcedil;","Gcirc;","Gcy;","Gdot;","Gfr;","Gg;","Gopf;","GreaterEqual;","GreaterEqualLess;","GreaterFullEqual;","GreaterGreater;","GreaterLess;","GreaterSlantEqual;","GreaterTilde;","Gscr;","Gt;","HARDcy;","Hacek;","Hat;","Hcirc;","Hfr;","HilbertSpace;","Hopf;","HorizontalLine;","Hscr;","Hstrok;","HumpDownHump;","HumpEqual;","IEcy;","IJlig;","IOcy;","Iacute","Iacute;","Icirc","Icirc;","Icy;","Idot;","Ifr;","Igrave","Igrave;","Im;","Imacr;","ImaginaryI;","Implies;","Int;","Integral;","Intersection;","InvisibleComma;","InvisibleTimes;","Iogon;","Iopf;","Iota;","Iscr;","Itilde;","Iukcy;","Iuml","Iuml;","Jcirc;","Jcy;","Jfr;","Jopf;","Jscr;","Jsercy;","Jukcy;","KHcy;","KJcy;","Kappa;","Kcedil;","Kcy;","Kfr;","Kopf;","Kscr;","LJcy;","LT","LT;","Lacute;","Lambda;","Lang;","Laplacetrf;","Larr;","Lcaron;","Lcedil;","Lcy;","LeftAngleBracket;","LeftArrow;","LeftArrowBar;","LeftArrowRightArrow;","LeftCeiling;","LeftDoubleBracket;","LeftDownTeeVector;","LeftDownVector;","LeftDownVectorBar;","LeftFloor;","LeftRightArrow;","LeftRightVector;","LeftTee;","LeftTeeArrow;","LeftTeeVector;","LeftTriangle;","LeftTriangleBar;","LeftTriangleEqual;","LeftUpDownVector;","LeftUpTeeVector;","LeftUpVector;","LeftUpVectorBar;","LeftVector;","LeftVectorBar;","Leftarrow;","Leftrightarrow;","LessEqualGreater;","LessFullEqual;","LessGreater;","LessLess;","LessSlantEqual;","LessTilde;","Lfr;","Ll;","Lleftarrow;","Lmidot;","LongLeftArrow;","LongLeftRightArrow;","LongRightArrow;","Longleftarrow;","Longleftrightarrow;","Longrightarrow;","Lopf;","LowerLeftArrow;","LowerRightArrow;","Lscr;","Lsh;","Lstrok;","Lt;","Map;","Mcy;","MediumSpace;","Mellintrf;","Mfr;","MinusPlus;","Mopf;","Mscr;","Mu;","NJcy;","Nacute;","Ncaron;","Ncedil;","Ncy;","NegativeMediumSpace;","NegativeThickSpace;","NegativeThinSpace;","NegativeVeryThinSpace;","NestedGreaterGreater;","NestedLessLess;","NewLine;","Nfr;","NoBreak;","NonBreakingSpace;","Nopf;","Not;","NotCongruent;","NotCupCap;","NotDoubleVerticalBar;","NotElement;","NotEqual;","NotEqualTilde;","NotExists;","NotGreater;","NotGreaterEqual;","NotGreaterFullEqual;","NotGreaterGreater;","NotGreaterLess;","NotGreaterSlantEqual;","NotGreaterTilde;","NotHumpDownHump;","NotHumpEqual;","NotLeftTriangle;","NotLeftTriangleBar;","NotLeftTriangleEqual;","NotLess;","NotLessEqual;","NotLessGreater;","NotLessLess;","NotLessSlantEqual;","NotLessTilde;","NotNestedGreaterGreater;","NotNestedLessLess;","NotPrecedes;","NotPrecedesEqual;","NotPrecedesSlantEqual;","NotReverseElement;","NotRightTriangle;","NotRightTriangleBar;","NotRightTriangleEqual;","NotSquareSubset;","NotSquareSubsetEqual;","NotSquareSuperset;","NotSquareSupersetEqual;","NotSubset;","NotSubsetEqual;","NotSucceeds;","NotSucceedsEqual;","NotSucceedsSlantEqual;","NotSucceedsTilde;","NotSuperset;","NotSupersetEqual;","NotTilde;","NotTildeEqual;","NotTildeFullEqual;","NotTildeTilde;","NotVerticalBar;","Nscr;","Ntilde","Ntilde;","Nu;","OElig;","Oacute","Oacute;","Ocirc","Ocirc;","Ocy;","Odblac;","Ofr;","Ograve","Ograve;","Omacr;","Omega;","Omicron;","Oopf;","OpenCurlyDoubleQuote;","OpenCurlyQuote;","Or;","Oscr;","Oslash","Oslash;","Otilde","Otilde;","Otimes;","Ouml","Ouml;","OverBar;","OverBrace;","OverBracket;","OverParenthesis;","PartialD;","Pcy;","Pfr;","Phi;","Pi;","PlusMinus;","Poincareplane;","Popf;","Pr;","Precedes;","PrecedesEqual;","PrecedesSlantEqual;","PrecedesTilde;","Prime;","Product;","Proportion;","Proportional;","Pscr;","Psi;","QUOT","QUOT;","Qfr;","Qopf;","Qscr;","RBarr;","REG","REG;","Racute;","Rang;","Rarr;","Rarrtl;","Rcaron;","Rcedil;","Rcy;","Re;","ReverseElement;","ReverseEquilibrium;","ReverseUpEquilibrium;","Rfr;","Rho;","RightAngleBracket;","RightArrow;","RightArrowBar;","RightArrowLeftArrow;","RightCeiling;","RightDoubleBracket;","RightDownTeeVector;","RightDownVector;","RightDownVectorBar;","RightFloor;","RightTee;","RightTeeArrow;","RightTeeVector;","RightTriangle;","RightTriangleBar;","RightTriangleEqual;","RightUpDownVector;","RightUpTeeVector;","RightUpVector;","RightUpVectorBar;","RightVector;","RightVectorBar;","Rightarrow;","Ropf;","RoundImplies;","Rrightarrow;","Rscr;","Rsh;","RuleDelayed;","SHCHcy;","SHcy;","SOFTcy;","Sacute;","Sc;","Scaron;","Scedil;","Scirc;","Scy;","Sfr;","ShortDownArrow;","ShortLeftArrow;","ShortRightArrow;","ShortUpArrow;","Sigma;","SmallCircle;","Sopf;","Sqrt;","Square;","SquareIntersection;","SquareSubset;","SquareSubsetEqual;","SquareSuperset;","SquareSupersetEqual;","SquareUnion;","Sscr;","Star;","Sub;","Subset;","SubsetEqual;","Succeeds;","SucceedsEqual;","SucceedsSlantEqual;","SucceedsTilde;","SuchThat;","Sum;","Sup;","Superset;","SupersetEqual;","Supset;","THORN","THORN;","TRADE;","TSHcy;","TScy;","Tab;","Tau;","Tcaron;","Tcedil;","Tcy;","Tfr;","Therefore;","Theta;","ThickSpace;","ThinSpace;","Tilde;","TildeEqual;","TildeFullEqual;","TildeTilde;","Topf;","TripleDot;","Tscr;","Tstrok;","Uacute","Uacute;","Uarr;","Uarrocir;","Ubrcy;","Ubreve;","Ucirc","Ucirc;","Ucy;","Udblac;","Ufr;","Ugrave","Ugrave;","Umacr;","UnderBar;","UnderBrace;","UnderBracket;","UnderParenthesis;","Union;","UnionPlus;","Uogon;","Uopf;","UpArrow;","UpArrowBar;","UpArrowDownArrow;","UpDownArrow;","UpEquilibrium;","UpTee;","UpTeeArrow;","Uparrow;","Updownarrow;","UpperLeftArrow;","UpperRightArrow;","Upsi;","Upsilon;","Uring;","Uscr;","Utilde;","Uuml","Uuml;","VDash;","Vbar;","Vcy;","Vdash;","Vdashl;","Vee;","Verbar;","Vert;","VerticalBar;","VerticalLine;","VerticalSeparator;","VerticalTilde;","VeryThinSpace;","Vfr;","Vopf;","Vscr;","Vvdash;","Wcirc;","Wedge;","Wfr;","Wopf;","Wscr;","Xfr;","Xi;","Xopf;","Xscr;","YAcy;","YIcy;","YUcy;","Yacute","Yacute;","Ycirc;","Ycy;","Yfr;","Yopf;","Yscr;","Yuml;","ZHcy;","Zacute;","Zcaron;","Zcy;","Zdot;","ZeroWidthSpace;","Zeta;","Zfr;","Zopf;","Zscr;","aacute","aacute;","abreve;","ac;","acE;","acd;","acirc","acirc;","acute","acute;","acy;","aelig","aelig;","af;","afr;","agrave","agrave;","alefsym;","aleph;","alpha;","amacr;","amalg;","amp","amp;","and;","andand;","andd;","andslope;","andv;","ang;","ange;","angle;","angmsd;","angmsdaa;","angmsdab;","angmsdac;","angmsdad;","angmsdae;","angmsdaf;","angmsdag;","angmsdah;","angrt;","angrtvb;","angrtvbd;","angsph;","angst;","angzarr;","aogon;","aopf;","ap;","apE;","apacir;","ape;","apid;","apos;","approx;","approxeq;","aring","aring;","ascr;","ast;","asymp;","asympeq;","atilde","atilde;","auml","auml;","awconint;","awint;","bNot;","backcong;","backepsilon;","backprime;","backsim;","backsimeq;","barvee;","barwed;","barwedge;","bbrk;","bbrktbrk;","bcong;","bcy;","bdquo;","becaus;","because;","bemptyv;","bepsi;","bernou;","beta;","beth;","between;","bfr;","bigcap;","bigcirc;","bigcup;","bigodot;","bigoplus;","bigotimes;","bigsqcup;","bigstar;","bigtriangledown;","bigtriangleup;","biguplus;","bigvee;","bigwedge;","bkarow;","blacklozenge;","blacksquare;","blacktriangle;","blacktriangledown;","blacktriangleleft;","blacktriangleright;","blank;","blk12;","blk14;","blk34;","block;","bne;","bnequiv;","bnot;","bopf;","bot;","bottom;","bowtie;","boxDL;","boxDR;","boxDl;","boxDr;","boxH;","boxHD;","boxHU;","boxHd;","boxHu;","boxUL;","boxUR;","boxUl;","boxUr;","boxV;","boxVH;","boxVL;","boxVR;","boxVh;","boxVl;","boxVr;","boxbox;","boxdL;","boxdR;","boxdl;","boxdr;","boxh;","boxhD;","boxhU;","boxhd;","boxhu;","boxminus;","boxplus;","boxtimes;","boxuL;","boxuR;","boxul;","boxur;","boxv;","boxvH;","boxvL;","boxvR;","boxvh;","boxvl;","boxvr;","bprime;","breve;","brvbar","brvbar;","bscr;","bsemi;","bsim;","bsime;","bsol;","bsolb;","bsolhsub;","bull;","bullet;","bump;","bumpE;","bumpe;","bumpeq;","cacute;","cap;","capand;","capbrcup;","capcap;","capcup;","capdot;","caps;","caret;","caron;","ccaps;","ccaron;","ccedil","ccedil;","ccirc;","ccups;","ccupssm;","cdot;","cedil","cedil;","cemptyv;","cent","cent;","centerdot;","cfr;","chcy;","check;","checkmark;","chi;","cir;","cirE;","circ;","circeq;","circlearrowleft;","circlearrowright;","circledR;","circledS;","circledast;","circledcirc;","circleddash;","cire;","cirfnint;","cirmid;","cirscir;","clubs;","clubsuit;","colon;","colone;","coloneq;","comma;","commat;","comp;","compfn;","complement;","complexes;","cong;","congdot;","conint;","copf;","coprod;","copy","copy;","copysr;","crarr;","cross;","cscr;","csub;","csube;","csup;","csupe;","ctdot;","cudarrl;","cudarrr;","cuepr;","cuesc;","cularr;","cularrp;","cup;","cupbrcap;","cupcap;","cupcup;","cupdot;","cupor;","cups;","curarr;","curarrm;","curlyeqprec;","curlyeqsucc;","curlyvee;","curlywedge;","curren","curren;","curvearrowleft;","curvearrowright;","cuvee;","cuwed;","cwconint;","cwint;","cylcty;","dArr;","dHar;","dagger;","daleth;","darr;","dash;","dashv;","dbkarow;","dblac;","dcaron;","dcy;","dd;","ddagger;","ddarr;","ddotseq;","deg","deg;","delta;","demptyv;","dfisht;","dfr;","dharl;","dharr;","diam;","diamond;","diamondsuit;","diams;","die;","digamma;","disin;","div;","divide","divide;","divideontimes;","divonx;","djcy;","dlcorn;","dlcrop;","dollar;","dopf;","dot;","doteq;","doteqdot;","dotminus;","dotplus;","dotsquare;","doublebarwedge;","downarrow;","downdownarrows;","downharpoonleft;","downharpoonright;","drbkarow;","drcorn;","drcrop;","dscr;","dscy;","dsol;","dstrok;","dtdot;","dtri;","dtrif;","duarr;","duhar;","dwangle;","dzcy;","dzigrarr;","eDDot;","eDot;","eacute","eacute;","easter;","ecaron;","ecir;","ecirc","ecirc;","ecolon;","ecy;","edot;","ee;","efDot;","efr;","eg;","egrave","egrave;","egs;","egsdot;","el;","elinters;","ell;","els;","elsdot;","emacr;","empty;","emptyset;","emptyv;","emsp13;","emsp14;","emsp;","eng;","ensp;","eogon;","eopf;","epar;","eparsl;","eplus;","epsi;","epsilon;","epsiv;","eqcirc;","eqcolon;","eqsim;","eqslantgtr;","eqslantless;","equals;","equest;","equiv;","equivDD;","eqvparsl;","erDot;","erarr;","escr;","esdot;","esim;","eta;","eth","eth;","euml","euml;","euro;","excl;","exist;","expectation;","exponentiale;","fallingdotseq;","fcy;","female;","ffilig;","fflig;","ffllig;","ffr;","filig;","fjlig;","flat;","fllig;","fltns;","fnof;","fopf;","forall;","fork;","forkv;","fpartint;","frac12","frac12;","frac13;","frac14","frac14;","frac15;","frac16;","frac18;","frac23;","frac25;","frac34","frac34;","frac35;","frac38;","frac45;","frac56;","frac58;","frac78;","frasl;","frown;","fscr;","gE;","gEl;","gacute;","gamma;","gammad;","gap;","gbreve;","gcirc;","gcy;","gdot;","ge;","gel;","geq;","geqq;","geqslant;","ges;","gescc;","gesdot;","gesdoto;","gesdotol;","gesl;","gesles;","gfr;","gg;","ggg;","gimel;","gjcy;","gl;","glE;","gla;","glj;","gnE;","gnap;","gnapprox;","gne;","gneq;","gneqq;","gnsim;","gopf;","grave;","gscr;","gsim;","gsime;","gsiml;","gt","gt;","gtcc;","gtcir;","gtdot;","gtlPar;","gtquest;","gtrapprox;","gtrarr;","gtrdot;","gtreqless;","gtreqqless;","gtrless;","gtrsim;","gvertneqq;","gvnE;","hArr;","hairsp;","half;","hamilt;","hardcy;","harr;","harrcir;","harrw;","hbar;","hcirc;","hearts;","heartsuit;","hellip;","hercon;","hfr;","hksearow;","hkswarow;","hoarr;","homtht;","hookleftarrow;","hookrightarrow;","hopf;","horbar;","hscr;","hslash;","hstrok;","hybull;","hyphen;","iacute","iacute;","ic;","icirc","icirc;","icy;","iecy;","iexcl","iexcl;","iff;","ifr;","igrave","igrave;","ii;","iiiint;","iiint;","iinfin;","iiota;","ijlig;","imacr;","image;","imagline;","imagpart;","imath;","imof;","imped;","in;","incare;","infin;","infintie;","inodot;","int;","intcal;","integers;","intercal;","intlarhk;","intprod;","iocy;","iogon;","iopf;","iota;","iprod;","iquest","iquest;","iscr;","isin;","isinE;","isindot;","isins;","isinsv;","isinv;","it;","itilde;","iukcy;","iuml","iuml;","jcirc;","jcy;","jfr;","jmath;","jopf;","jscr;","jsercy;","jukcy;","kappa;","kappav;","kcedil;","kcy;","kfr;","kgreen;","khcy;","kjcy;","kopf;","kscr;","lAarr;","lArr;","lAtail;","lBarr;","lE;","lEg;","lHar;","lacute;","laemptyv;","lagran;","lambda;","lang;","langd;","langle;","lap;","laquo","laquo;","larr;","larrb;","larrbfs;","larrfs;","larrhk;","larrlp;","larrpl;","larrsim;","larrtl;","lat;","latail;","late;","lates;","lbarr;","lbbrk;","lbrace;","lbrack;","lbrke;","lbrksld;","lbrkslu;","lcaron;","lcedil;","lceil;","lcub;","lcy;","ldca;","ldquo;","ldquor;","ldrdhar;","ldrushar;","ldsh;","le;","leftarrow;","leftarrowtail;","leftharpoondown;","leftharpoonup;","leftleftarrows;","leftrightarrow;","leftrightarrows;","leftrightharpoons;","leftrightsquigarrow;","leftthreetimes;","leg;","leq;","leqq;","leqslant;","les;","lescc;","lesdot;","lesdoto;","lesdotor;","lesg;","lesges;","lessapprox;","lessdot;","lesseqgtr;","lesseqqgtr;","lessgtr;","lesssim;","lfisht;","lfloor;","lfr;","lg;","lgE;","lhard;","lharu;","lharul;","lhblk;","ljcy;","ll;","llarr;","llcorner;","llhard;","lltri;","lmidot;","lmoust;","lmoustache;","lnE;","lnap;","lnapprox;","lne;","lneq;","lneqq;","lnsim;","loang;","loarr;","lobrk;","longleftarrow;","longleftrightarrow;","longmapsto;","longrightarrow;","looparrowleft;","looparrowright;","lopar;","lopf;","loplus;","lotimes;","lowast;","lowbar;","loz;","lozenge;","lozf;","lpar;","lparlt;","lrarr;","lrcorner;","lrhar;","lrhard;","lrm;","lrtri;","lsaquo;","lscr;","lsh;","lsim;","lsime;","lsimg;","lsqb;","lsquo;","lsquor;","lstrok;","lt","lt;","ltcc;","ltcir;","ltdot;","lthree;","ltimes;","ltlarr;","ltquest;","ltrPar;","ltri;","ltrie;","ltrif;","lurdshar;","luruhar;","lvertneqq;","lvnE;","mDDot;","macr","macr;","male;","malt;","maltese;","map;","mapsto;","mapstodown;","mapstoleft;","mapstoup;","marker;","mcomma;","mcy;","mdash;","measuredangle;","mfr;","mho;","micro","micro;","mid;","midast;","midcir;","middot","middot;","minus;","minusb;","minusd;","minusdu;","mlcp;","mldr;","mnplus;","models;","mopf;","mp;","mscr;","mstpos;","mu;","multimap;","mumap;","nGg;","nGt;","nGtv;","nLeftarrow;","nLeftrightarrow;","nLl;","nLt;","nLtv;","nRightarrow;","nVDash;","nVdash;","nabla;","nacute;","nang;","nap;","napE;","napid;","napos;","napprox;","natur;","natural;","naturals;","nbsp","nbsp;","nbump;","nbumpe;","ncap;","ncaron;","ncedil;","ncong;","ncongdot;","ncup;","ncy;","ndash;","ne;","neArr;","nearhk;","nearr;","nearrow;","nedot;","nequiv;","nesear;","nesim;","nexist;","nexists;","nfr;","ngE;","nge;","ngeq;","ngeqq;","ngeqslant;","nges;","ngsim;","ngt;","ngtr;","nhArr;","nharr;","nhpar;","ni;","nis;","nisd;","niv;","njcy;","nlArr;","nlE;","nlarr;","nldr;","nle;","nleftarrow;","nleftrightarrow;","nleq;","nleqq;","nleqslant;","nles;","nless;","nlsim;","nlt;","nltri;","nltrie;","nmid;","nopf;","not","not;","notin;","notinE;","notindot;","notinva;","notinvb;","notinvc;","notni;","notniva;","notnivb;","notnivc;","npar;","nparallel;","nparsl;","npart;","npolint;","npr;","nprcue;","npre;","nprec;","npreceq;","nrArr;","nrarr;","nrarrc;","nrarrw;","nrightarrow;","nrtri;","nrtrie;","nsc;","nsccue;","nsce;","nscr;","nshortmid;","nshortparallel;","nsim;","nsime;","nsimeq;","nsmid;","nspar;","nsqsube;","nsqsupe;","nsub;","nsubE;","nsube;","nsubset;","nsubseteq;","nsubseteqq;","nsucc;","nsucceq;","nsup;","nsupE;","nsupe;","nsupset;","nsupseteq;","nsupseteqq;","ntgl;","ntilde","ntilde;","ntlg;","ntriangleleft;","ntrianglelefteq;","ntriangleright;","ntrianglerighteq;","nu;","num;","numero;","numsp;","nvDash;","nvHarr;","nvap;","nvdash;","nvge;","nvgt;","nvinfin;","nvlArr;","nvle;","nvlt;","nvltrie;","nvrArr;","nvrtrie;","nvsim;","nwArr;","nwarhk;","nwarr;","nwarrow;","nwnear;","oS;","oacute","oacute;","oast;","ocir;","ocirc","ocirc;","ocy;","odash;","odblac;","odiv;","odot;","odsold;","oelig;","ofcir;","ofr;","ogon;","ograve","ograve;","ogt;","ohbar;","ohm;","oint;","olarr;","olcir;","olcross;","oline;","olt;","omacr;","omega;","omicron;","omid;","ominus;","oopf;","opar;","operp;","oplus;","or;","orarr;","ord;","order;","orderof;","ordf","ordf;","ordm","ordm;","origof;","oror;","orslope;","orv;","oscr;","oslash","oslash;","osol;","otilde","otilde;","otimes;","otimesas;","ouml","ouml;","ovbar;","par;","para","para;","parallel;","parsim;","parsl;","part;","pcy;","percnt;","period;","permil;","perp;","pertenk;","pfr;","phi;","phiv;","phmmat;","phone;","pi;","pitchfork;","piv;","planck;","planckh;","plankv;","plus;","plusacir;","plusb;","pluscir;","plusdo;","plusdu;","pluse;","plusmn","plusmn;","plussim;","plustwo;","pm;","pointint;","popf;","pound","pound;","pr;","prE;","prap;","prcue;","pre;","prec;","precapprox;","preccurlyeq;","preceq;","precnapprox;","precneqq;","precnsim;","precsim;","prime;","primes;","prnE;","prnap;","prnsim;","prod;","profalar;","profline;","profsurf;","prop;","propto;","prsim;","prurel;","pscr;","psi;","puncsp;","qfr;","qint;","qopf;","qprime;","qscr;","quaternions;","quatint;","quest;","questeq;","quot","quot;","rAarr;","rArr;","rAtail;","rBarr;","rHar;","race;","racute;","radic;","raemptyv;","rang;","rangd;","range;","rangle;","raquo","raquo;","rarr;","rarrap;","rarrb;","rarrbfs;","rarrc;","rarrfs;","rarrhk;","rarrlp;","rarrpl;","rarrsim;","rarrtl;","rarrw;","ratail;","ratio;","rationals;","rbarr;","rbbrk;","rbrace;","rbrack;","rbrke;","rbrksld;","rbrkslu;","rcaron;","rcedil;","rceil;","rcub;","rcy;","rdca;","rdldhar;","rdquo;","rdquor;","rdsh;","real;","realine;","realpart;","reals;","rect;","reg","reg;","rfisht;","rfloor;","rfr;","rhard;","rharu;","rharul;","rho;","rhov;","rightarrow;","rightarrowtail;","rightharpoondown;","rightharpoonup;","rightleftarrows;","rightleftharpoons;","rightrightarrows;","rightsquigarrow;","rightthreetimes;","ring;","risingdotseq;","rlarr;","rlhar;","rlm;","rmoust;","rmoustache;","rnmid;","roang;","roarr;","robrk;","ropar;","ropf;","roplus;","rotimes;","rpar;","rpargt;","rppolint;","rrarr;","rsaquo;","rscr;","rsh;","rsqb;","rsquo;","rsquor;","rthree;","rtimes;","rtri;","rtrie;","rtrif;","rtriltri;","ruluhar;","rx;","sacute;","sbquo;","sc;","scE;","scap;","scaron;","sccue;","sce;","scedil;","scirc;","scnE;","scnap;","scnsim;","scpolint;","scsim;","scy;","sdot;","sdotb;","sdote;","seArr;","searhk;","searr;","searrow;","sect","sect;","semi;","seswar;","setminus;","setmn;","sext;","sfr;","sfrown;","sharp;","shchcy;","shcy;","shortmid;","shortparallel;","shy","shy;","sigma;","sigmaf;","sigmav;","sim;","simdot;","sime;","simeq;","simg;","simgE;","siml;","simlE;","simne;","simplus;","simrarr;","slarr;","smallsetminus;","smashp;","smeparsl;","smid;","smile;","smt;","smte;","smtes;","softcy;","sol;","solb;","solbar;","sopf;","spades;","spadesuit;","spar;","sqcap;","sqcaps;","sqcup;","sqcups;","sqsub;","sqsube;","sqsubset;","sqsubseteq;","sqsup;","sqsupe;","sqsupset;","sqsupseteq;","squ;","square;","squarf;","squf;","srarr;","sscr;","ssetmn;","ssmile;","sstarf;","star;","starf;","straightepsilon;","straightphi;","strns;","sub;","subE;","subdot;","sube;","subedot;","submult;","subnE;","subne;","subplus;","subrarr;","subset;","subseteq;","subseteqq;","subsetneq;","subsetneqq;","subsim;","subsub;","subsup;","succ;","succapprox;","succcurlyeq;","succeq;","succnapprox;","succneqq;","succnsim;","succsim;","sum;","sung;","sup1","sup1;","sup2","sup2;","sup3","sup3;","sup;","supE;","supdot;","supdsub;","supe;","supedot;","suphsol;","suphsub;","suplarr;","supmult;","supnE;","supne;","supplus;","supset;","supseteq;","supseteqq;","supsetneq;","supsetneqq;","supsim;","supsub;","supsup;","swArr;","swarhk;","swarr;","swarrow;","swnwar;","szlig","szlig;","target;","tau;","tbrk;","tcaron;","tcedil;","tcy;","tdot;","telrec;","tfr;","there4;","therefore;","theta;","thetasym;","thetav;","thickapprox;","thicksim;","thinsp;","thkap;","thksim;","thorn","thorn;","tilde;","times","times;","timesb;","timesbar;","timesd;","tint;","toea;","top;","topbot;","topcir;","topf;","topfork;","tosa;","tprime;","trade;","triangle;","triangledown;","triangleleft;","trianglelefteq;","triangleq;","triangleright;","trianglerighteq;","tridot;","trie;","triminus;","triplus;","trisb;","tritime;","trpezium;","tscr;","tscy;","tshcy;","tstrok;","twixt;","twoheadleftarrow;","twoheadrightarrow;","uArr;","uHar;","uacute","uacute;","uarr;","ubrcy;","ubreve;","ucirc","ucirc;","ucy;","udarr;","udblac;","udhar;","ufisht;","ufr;","ugrave","ugrave;","uharl;","uharr;","uhblk;","ulcorn;","ulcorner;","ulcrop;","ultri;","umacr;","uml","uml;","uogon;","uopf;","uparrow;","updownarrow;","upharpoonleft;","upharpoonright;","uplus;","upsi;","upsih;","upsilon;","upuparrows;","urcorn;","urcorner;","urcrop;","uring;","urtri;","uscr;","utdot;","utilde;","utri;","utrif;","uuarr;","uuml","uuml;","uwangle;","vArr;","vBar;","vBarv;","vDash;","vangrt;","varepsilon;","varkappa;","varnothing;","varphi;","varpi;","varpropto;","varr;","varrho;","varsigma;","varsubsetneq;","varsubsetneqq;","varsupsetneq;","varsupsetneqq;","vartheta;","vartriangleleft;","vartriangleright;","vcy;","vdash;","vee;","veebar;","veeeq;","vellip;","verbar;","vert;","vfr;","vltri;","vnsub;","vnsup;","vopf;","vprop;","vrtri;","vscr;","vsubnE;","vsubne;","vsupnE;","vsupne;","vzigzag;","wcirc;","wedbar;","wedge;","wedgeq;","weierp;","wfr;","wopf;","wp;","wr;","wreath;","wscr;","xcap;","xcirc;","xcup;","xdtri;","xfr;","xhArr;","xharr;","xi;","xlArr;","xlarr;","xmap;","xnis;","xodot;","xopf;","xoplus;","xotime;","xrArr;","xrarr;","xscr;","xsqcup;","xuplus;","xutri;","xvee;","xwedge;","yacute","yacute;","yacy;","ycirc;","ycy;","yen","yen;","yfr;","yicy;","yopf;","yscr;","yucy;","yuml","yuml;","zacute;","zcaron;","zcy;","zdot;","zeetrf;","zeta;","zfr;","zhcy;","zigrarr;","zopf;","zscr;","zwj;","zwnj;"]),t.s)
C.T=new H.v(2231,{AElig:"\xc6","AElig;":"\xc6",AMP:"&","AMP;":"&",Aacute:"\xc1","Aacute;":"\xc1","Abreve;":"\u0102",Acirc:"\xc2","Acirc;":"\xc2","Acy;":"\u0410","Afr;":"\ud835\udd04",Agrave:"\xc0","Agrave;":"\xc0","Alpha;":"\u0391","Amacr;":"\u0100","And;":"\u2a53","Aogon;":"\u0104","Aopf;":"\ud835\udd38","ApplyFunction;":"\u2061",Aring:"\xc5","Aring;":"\xc5","Ascr;":"\ud835\udc9c","Assign;":"\u2254",Atilde:"\xc3","Atilde;":"\xc3",Auml:"\xc4","Auml;":"\xc4","Backslash;":"\u2216","Barv;":"\u2ae7","Barwed;":"\u2306","Bcy;":"\u0411","Because;":"\u2235","Bernoullis;":"\u212c","Beta;":"\u0392","Bfr;":"\ud835\udd05","Bopf;":"\ud835\udd39","Breve;":"\u02d8","Bscr;":"\u212c","Bumpeq;":"\u224e","CHcy;":"\u0427",COPY:"\xa9","COPY;":"\xa9","Cacute;":"\u0106","Cap;":"\u22d2","CapitalDifferentialD;":"\u2145","Cayleys;":"\u212d","Ccaron;":"\u010c",Ccedil:"\xc7","Ccedil;":"\xc7","Ccirc;":"\u0108","Cconint;":"\u2230","Cdot;":"\u010a","Cedilla;":"\xb8","CenterDot;":"\xb7","Cfr;":"\u212d","Chi;":"\u03a7","CircleDot;":"\u2299","CircleMinus;":"\u2296","CirclePlus;":"\u2295","CircleTimes;":"\u2297","ClockwiseContourIntegral;":"\u2232","CloseCurlyDoubleQuote;":"\u201d","CloseCurlyQuote;":"\u2019","Colon;":"\u2237","Colone;":"\u2a74","Congruent;":"\u2261","Conint;":"\u222f","ContourIntegral;":"\u222e","Copf;":"\u2102","Coproduct;":"\u2210","CounterClockwiseContourIntegral;":"\u2233","Cross;":"\u2a2f","Cscr;":"\ud835\udc9e","Cup;":"\u22d3","CupCap;":"\u224d","DD;":"\u2145","DDotrahd;":"\u2911","DJcy;":"\u0402","DScy;":"\u0405","DZcy;":"\u040f","Dagger;":"\u2021","Darr;":"\u21a1","Dashv;":"\u2ae4","Dcaron;":"\u010e","Dcy;":"\u0414","Del;":"\u2207","Delta;":"\u0394","Dfr;":"\ud835\udd07","DiacriticalAcute;":"\xb4","DiacriticalDot;":"\u02d9","DiacriticalDoubleAcute;":"\u02dd","DiacriticalGrave;":"`","DiacriticalTilde;":"\u02dc","Diamond;":"\u22c4","DifferentialD;":"\u2146","Dopf;":"\ud835\udd3b","Dot;":"\xa8","DotDot;":"\u20dc","DotEqual;":"\u2250","DoubleContourIntegral;":"\u222f","DoubleDot;":"\xa8","DoubleDownArrow;":"\u21d3","DoubleLeftArrow;":"\u21d0","DoubleLeftRightArrow;":"\u21d4","DoubleLeftTee;":"\u2ae4","DoubleLongLeftArrow;":"\u27f8","DoubleLongLeftRightArrow;":"\u27fa","DoubleLongRightArrow;":"\u27f9","DoubleRightArrow;":"\u21d2","DoubleRightTee;":"\u22a8","DoubleUpArrow;":"\u21d1","DoubleUpDownArrow;":"\u21d5","DoubleVerticalBar;":"\u2225","DownArrow;":"\u2193","DownArrowBar;":"\u2913","DownArrowUpArrow;":"\u21f5","DownBreve;":"\u0311","DownLeftRightVector;":"\u2950","DownLeftTeeVector;":"\u295e","DownLeftVector;":"\u21bd","DownLeftVectorBar;":"\u2956","DownRightTeeVector;":"\u295f","DownRightVector;":"\u21c1","DownRightVectorBar;":"\u2957","DownTee;":"\u22a4","DownTeeArrow;":"\u21a7","Downarrow;":"\u21d3","Dscr;":"\ud835\udc9f","Dstrok;":"\u0110","ENG;":"\u014a",ETH:"\xd0","ETH;":"\xd0",Eacute:"\xc9","Eacute;":"\xc9","Ecaron;":"\u011a",Ecirc:"\xca","Ecirc;":"\xca","Ecy;":"\u042d","Edot;":"\u0116","Efr;":"\ud835\udd08",Egrave:"\xc8","Egrave;":"\xc8","Element;":"\u2208","Emacr;":"\u0112","EmptySmallSquare;":"\u25fb","EmptyVerySmallSquare;":"\u25ab","Eogon;":"\u0118","Eopf;":"\ud835\udd3c","Epsilon;":"\u0395","Equal;":"\u2a75","EqualTilde;":"\u2242","Equilibrium;":"\u21cc","Escr;":"\u2130","Esim;":"\u2a73","Eta;":"\u0397",Euml:"\xcb","Euml;":"\xcb","Exists;":"\u2203","ExponentialE;":"\u2147","Fcy;":"\u0424","Ffr;":"\ud835\udd09","FilledSmallSquare;":"\u25fc","FilledVerySmallSquare;":"\u25aa","Fopf;":"\ud835\udd3d","ForAll;":"\u2200","Fouriertrf;":"\u2131","Fscr;":"\u2131","GJcy;":"\u0403",GT:">","GT;":">","Gamma;":"\u0393","Gammad;":"\u03dc","Gbreve;":"\u011e","Gcedil;":"\u0122","Gcirc;":"\u011c","Gcy;":"\u0413","Gdot;":"\u0120","Gfr;":"\ud835\udd0a","Gg;":"\u22d9","Gopf;":"\ud835\udd3e","GreaterEqual;":"\u2265","GreaterEqualLess;":"\u22db","GreaterFullEqual;":"\u2267","GreaterGreater;":"\u2aa2","GreaterLess;":"\u2277","GreaterSlantEqual;":"\u2a7e","GreaterTilde;":"\u2273","Gscr;":"\ud835\udca2","Gt;":"\u226b","HARDcy;":"\u042a","Hacek;":"\u02c7","Hat;":"^","Hcirc;":"\u0124","Hfr;":"\u210c","HilbertSpace;":"\u210b","Hopf;":"\u210d","HorizontalLine;":"\u2500","Hscr;":"\u210b","Hstrok;":"\u0126","HumpDownHump;":"\u224e","HumpEqual;":"\u224f","IEcy;":"\u0415","IJlig;":"\u0132","IOcy;":"\u0401",Iacute:"\xcd","Iacute;":"\xcd",Icirc:"\xce","Icirc;":"\xce","Icy;":"\u0418","Idot;":"\u0130","Ifr;":"\u2111",Igrave:"\xcc","Igrave;":"\xcc","Im;":"\u2111","Imacr;":"\u012a","ImaginaryI;":"\u2148","Implies;":"\u21d2","Int;":"\u222c","Integral;":"\u222b","Intersection;":"\u22c2","InvisibleComma;":"\u2063","InvisibleTimes;":"\u2062","Iogon;":"\u012e","Iopf;":"\ud835\udd40","Iota;":"\u0399","Iscr;":"\u2110","Itilde;":"\u0128","Iukcy;":"\u0406",Iuml:"\xcf","Iuml;":"\xcf","Jcirc;":"\u0134","Jcy;":"\u0419","Jfr;":"\ud835\udd0d","Jopf;":"\ud835\udd41","Jscr;":"\ud835\udca5","Jsercy;":"\u0408","Jukcy;":"\u0404","KHcy;":"\u0425","KJcy;":"\u040c","Kappa;":"\u039a","Kcedil;":"\u0136","Kcy;":"\u041a","Kfr;":"\ud835\udd0e","Kopf;":"\ud835\udd42","Kscr;":"\ud835\udca6","LJcy;":"\u0409",LT:"<","LT;":"<","Lacute;":"\u0139","Lambda;":"\u039b","Lang;":"\u27ea","Laplacetrf;":"\u2112","Larr;":"\u219e","Lcaron;":"\u013d","Lcedil;":"\u013b","Lcy;":"\u041b","LeftAngleBracket;":"\u27e8","LeftArrow;":"\u2190","LeftArrowBar;":"\u21e4","LeftArrowRightArrow;":"\u21c6","LeftCeiling;":"\u2308","LeftDoubleBracket;":"\u27e6","LeftDownTeeVector;":"\u2961","LeftDownVector;":"\u21c3","LeftDownVectorBar;":"\u2959","LeftFloor;":"\u230a","LeftRightArrow;":"\u2194","LeftRightVector;":"\u294e","LeftTee;":"\u22a3","LeftTeeArrow;":"\u21a4","LeftTeeVector;":"\u295a","LeftTriangle;":"\u22b2","LeftTriangleBar;":"\u29cf","LeftTriangleEqual;":"\u22b4","LeftUpDownVector;":"\u2951","LeftUpTeeVector;":"\u2960","LeftUpVector;":"\u21bf","LeftUpVectorBar;":"\u2958","LeftVector;":"\u21bc","LeftVectorBar;":"\u2952","Leftarrow;":"\u21d0","Leftrightarrow;":"\u21d4","LessEqualGreater;":"\u22da","LessFullEqual;":"\u2266","LessGreater;":"\u2276","LessLess;":"\u2aa1","LessSlantEqual;":"\u2a7d","LessTilde;":"\u2272","Lfr;":"\ud835\udd0f","Ll;":"\u22d8","Lleftarrow;":"\u21da","Lmidot;":"\u013f","LongLeftArrow;":"\u27f5","LongLeftRightArrow;":"\u27f7","LongRightArrow;":"\u27f6","Longleftarrow;":"\u27f8","Longleftrightarrow;":"\u27fa","Longrightarrow;":"\u27f9","Lopf;":"\ud835\udd43","LowerLeftArrow;":"\u2199","LowerRightArrow;":"\u2198","Lscr;":"\u2112","Lsh;":"\u21b0","Lstrok;":"\u0141","Lt;":"\u226a","Map;":"\u2905","Mcy;":"\u041c","MediumSpace;":"\u205f","Mellintrf;":"\u2133","Mfr;":"\ud835\udd10","MinusPlus;":"\u2213","Mopf;":"\ud835\udd44","Mscr;":"\u2133","Mu;":"\u039c","NJcy;":"\u040a","Nacute;":"\u0143","Ncaron;":"\u0147","Ncedil;":"\u0145","Ncy;":"\u041d","NegativeMediumSpace;":"\u200b","NegativeThickSpace;":"\u200b","NegativeThinSpace;":"\u200b","NegativeVeryThinSpace;":"\u200b","NestedGreaterGreater;":"\u226b","NestedLessLess;":"\u226a","NewLine;":"\n","Nfr;":"\ud835\udd11","NoBreak;":"\u2060","NonBreakingSpace;":"\xa0","Nopf;":"\u2115","Not;":"\u2aec","NotCongruent;":"\u2262","NotCupCap;":"\u226d","NotDoubleVerticalBar;":"\u2226","NotElement;":"\u2209","NotEqual;":"\u2260","NotEqualTilde;":"\u2242\u0338","NotExists;":"\u2204","NotGreater;":"\u226f","NotGreaterEqual;":"\u2271","NotGreaterFullEqual;":"\u2267\u0338","NotGreaterGreater;":"\u226b\u0338","NotGreaterLess;":"\u2279","NotGreaterSlantEqual;":"\u2a7e\u0338","NotGreaterTilde;":"\u2275","NotHumpDownHump;":"\u224e\u0338","NotHumpEqual;":"\u224f\u0338","NotLeftTriangle;":"\u22ea","NotLeftTriangleBar;":"\u29cf\u0338","NotLeftTriangleEqual;":"\u22ec","NotLess;":"\u226e","NotLessEqual;":"\u2270","NotLessGreater;":"\u2278","NotLessLess;":"\u226a\u0338","NotLessSlantEqual;":"\u2a7d\u0338","NotLessTilde;":"\u2274","NotNestedGreaterGreater;":"\u2aa2\u0338","NotNestedLessLess;":"\u2aa1\u0338","NotPrecedes;":"\u2280","NotPrecedesEqual;":"\u2aaf\u0338","NotPrecedesSlantEqual;":"\u22e0","NotReverseElement;":"\u220c","NotRightTriangle;":"\u22eb","NotRightTriangleBar;":"\u29d0\u0338","NotRightTriangleEqual;":"\u22ed","NotSquareSubset;":"\u228f\u0338","NotSquareSubsetEqual;":"\u22e2","NotSquareSuperset;":"\u2290\u0338","NotSquareSupersetEqual;":"\u22e3","NotSubset;":"\u2282\u20d2","NotSubsetEqual;":"\u2288","NotSucceeds;":"\u2281","NotSucceedsEqual;":"\u2ab0\u0338","NotSucceedsSlantEqual;":"\u22e1","NotSucceedsTilde;":"\u227f\u0338","NotSuperset;":"\u2283\u20d2","NotSupersetEqual;":"\u2289","NotTilde;":"\u2241","NotTildeEqual;":"\u2244","NotTildeFullEqual;":"\u2247","NotTildeTilde;":"\u2249","NotVerticalBar;":"\u2224","Nscr;":"\ud835\udca9",Ntilde:"\xd1","Ntilde;":"\xd1","Nu;":"\u039d","OElig;":"\u0152",Oacute:"\xd3","Oacute;":"\xd3",Ocirc:"\xd4","Ocirc;":"\xd4","Ocy;":"\u041e","Odblac;":"\u0150","Ofr;":"\ud835\udd12",Ograve:"\xd2","Ograve;":"\xd2","Omacr;":"\u014c","Omega;":"\u03a9","Omicron;":"\u039f","Oopf;":"\ud835\udd46","OpenCurlyDoubleQuote;":"\u201c","OpenCurlyQuote;":"\u2018","Or;":"\u2a54","Oscr;":"\ud835\udcaa",Oslash:"\xd8","Oslash;":"\xd8",Otilde:"\xd5","Otilde;":"\xd5","Otimes;":"\u2a37",Ouml:"\xd6","Ouml;":"\xd6","OverBar;":"\u203e","OverBrace;":"\u23de","OverBracket;":"\u23b4","OverParenthesis;":"\u23dc","PartialD;":"\u2202","Pcy;":"\u041f","Pfr;":"\ud835\udd13","Phi;":"\u03a6","Pi;":"\u03a0","PlusMinus;":"\xb1","Poincareplane;":"\u210c","Popf;":"\u2119","Pr;":"\u2abb","Precedes;":"\u227a","PrecedesEqual;":"\u2aaf","PrecedesSlantEqual;":"\u227c","PrecedesTilde;":"\u227e","Prime;":"\u2033","Product;":"\u220f","Proportion;":"\u2237","Proportional;":"\u221d","Pscr;":"\ud835\udcab","Psi;":"\u03a8",QUOT:'"',"QUOT;":'"',"Qfr;":"\ud835\udd14","Qopf;":"\u211a","Qscr;":"\ud835\udcac","RBarr;":"\u2910",REG:"\xae","REG;":"\xae","Racute;":"\u0154","Rang;":"\u27eb","Rarr;":"\u21a0","Rarrtl;":"\u2916","Rcaron;":"\u0158","Rcedil;":"\u0156","Rcy;":"\u0420","Re;":"\u211c","ReverseElement;":"\u220b","ReverseEquilibrium;":"\u21cb","ReverseUpEquilibrium;":"\u296f","Rfr;":"\u211c","Rho;":"\u03a1","RightAngleBracket;":"\u27e9","RightArrow;":"\u2192","RightArrowBar;":"\u21e5","RightArrowLeftArrow;":"\u21c4","RightCeiling;":"\u2309","RightDoubleBracket;":"\u27e7","RightDownTeeVector;":"\u295d","RightDownVector;":"\u21c2","RightDownVectorBar;":"\u2955","RightFloor;":"\u230b","RightTee;":"\u22a2","RightTeeArrow;":"\u21a6","RightTeeVector;":"\u295b","RightTriangle;":"\u22b3","RightTriangleBar;":"\u29d0","RightTriangleEqual;":"\u22b5","RightUpDownVector;":"\u294f","RightUpTeeVector;":"\u295c","RightUpVector;":"\u21be","RightUpVectorBar;":"\u2954","RightVector;":"\u21c0","RightVectorBar;":"\u2953","Rightarrow;":"\u21d2","Ropf;":"\u211d","RoundImplies;":"\u2970","Rrightarrow;":"\u21db","Rscr;":"\u211b","Rsh;":"\u21b1","RuleDelayed;":"\u29f4","SHCHcy;":"\u0429","SHcy;":"\u0428","SOFTcy;":"\u042c","Sacute;":"\u015a","Sc;":"\u2abc","Scaron;":"\u0160","Scedil;":"\u015e","Scirc;":"\u015c","Scy;":"\u0421","Sfr;":"\ud835\udd16","ShortDownArrow;":"\u2193","ShortLeftArrow;":"\u2190","ShortRightArrow;":"\u2192","ShortUpArrow;":"\u2191","Sigma;":"\u03a3","SmallCircle;":"\u2218","Sopf;":"\ud835\udd4a","Sqrt;":"\u221a","Square;":"\u25a1","SquareIntersection;":"\u2293","SquareSubset;":"\u228f","SquareSubsetEqual;":"\u2291","SquareSuperset;":"\u2290","SquareSupersetEqual;":"\u2292","SquareUnion;":"\u2294","Sscr;":"\ud835\udcae","Star;":"\u22c6","Sub;":"\u22d0","Subset;":"\u22d0","SubsetEqual;":"\u2286","Succeeds;":"\u227b","SucceedsEqual;":"\u2ab0","SucceedsSlantEqual;":"\u227d","SucceedsTilde;":"\u227f","SuchThat;":"\u220b","Sum;":"\u2211","Sup;":"\u22d1","Superset;":"\u2283","SupersetEqual;":"\u2287","Supset;":"\u22d1",THORN:"\xde","THORN;":"\xde","TRADE;":"\u2122","TSHcy;":"\u040b","TScy;":"\u0426","Tab;":"\t","Tau;":"\u03a4","Tcaron;":"\u0164","Tcedil;":"\u0162","Tcy;":"\u0422","Tfr;":"\ud835\udd17","Therefore;":"\u2234","Theta;":"\u0398","ThickSpace;":"\u205f\u200a","ThinSpace;":"\u2009","Tilde;":"\u223c","TildeEqual;":"\u2243","TildeFullEqual;":"\u2245","TildeTilde;":"\u2248","Topf;":"\ud835\udd4b","TripleDot;":"\u20db","Tscr;":"\ud835\udcaf","Tstrok;":"\u0166",Uacute:"\xda","Uacute;":"\xda","Uarr;":"\u219f","Uarrocir;":"\u2949","Ubrcy;":"\u040e","Ubreve;":"\u016c",Ucirc:"\xdb","Ucirc;":"\xdb","Ucy;":"\u0423","Udblac;":"\u0170","Ufr;":"\ud835\udd18",Ugrave:"\xd9","Ugrave;":"\xd9","Umacr;":"\u016a","UnderBar;":"_","UnderBrace;":"\u23df","UnderBracket;":"\u23b5","UnderParenthesis;":"\u23dd","Union;":"\u22c3","UnionPlus;":"\u228e","Uogon;":"\u0172","Uopf;":"\ud835\udd4c","UpArrow;":"\u2191","UpArrowBar;":"\u2912","UpArrowDownArrow;":"\u21c5","UpDownArrow;":"\u2195","UpEquilibrium;":"\u296e","UpTee;":"\u22a5","UpTeeArrow;":"\u21a5","Uparrow;":"\u21d1","Updownarrow;":"\u21d5","UpperLeftArrow;":"\u2196","UpperRightArrow;":"\u2197","Upsi;":"\u03d2","Upsilon;":"\u03a5","Uring;":"\u016e","Uscr;":"\ud835\udcb0","Utilde;":"\u0168",Uuml:"\xdc","Uuml;":"\xdc","VDash;":"\u22ab","Vbar;":"\u2aeb","Vcy;":"\u0412","Vdash;":"\u22a9","Vdashl;":"\u2ae6","Vee;":"\u22c1","Verbar;":"\u2016","Vert;":"\u2016","VerticalBar;":"\u2223","VerticalLine;":"|","VerticalSeparator;":"\u2758","VerticalTilde;":"\u2240","VeryThinSpace;":"\u200a","Vfr;":"\ud835\udd19","Vopf;":"\ud835\udd4d","Vscr;":"\ud835\udcb1","Vvdash;":"\u22aa","Wcirc;":"\u0174","Wedge;":"\u22c0","Wfr;":"\ud835\udd1a","Wopf;":"\ud835\udd4e","Wscr;":"\ud835\udcb2","Xfr;":"\ud835\udd1b","Xi;":"\u039e","Xopf;":"\ud835\udd4f","Xscr;":"\ud835\udcb3","YAcy;":"\u042f","YIcy;":"\u0407","YUcy;":"\u042e",Yacute:"\xdd","Yacute;":"\xdd","Ycirc;":"\u0176","Ycy;":"\u042b","Yfr;":"\ud835\udd1c","Yopf;":"\ud835\udd50","Yscr;":"\ud835\udcb4","Yuml;":"\u0178","ZHcy;":"\u0416","Zacute;":"\u0179","Zcaron;":"\u017d","Zcy;":"\u0417","Zdot;":"\u017b","ZeroWidthSpace;":"\u200b","Zeta;":"\u0396","Zfr;":"\u2128","Zopf;":"\u2124","Zscr;":"\ud835\udcb5",aacute:"\xe1","aacute;":"\xe1","abreve;":"\u0103","ac;":"\u223e","acE;":"\u223e\u0333","acd;":"\u223f",acirc:"\xe2","acirc;":"\xe2",acute:"\xb4","acute;":"\xb4","acy;":"\u0430",aelig:"\xe6","aelig;":"\xe6","af;":"\u2061","afr;":"\ud835\udd1e",agrave:"\xe0","agrave;":"\xe0","alefsym;":"\u2135","aleph;":"\u2135","alpha;":"\u03b1","amacr;":"\u0101","amalg;":"\u2a3f",amp:"&","amp;":"&","and;":"\u2227","andand;":"\u2a55","andd;":"\u2a5c","andslope;":"\u2a58","andv;":"\u2a5a","ang;":"\u2220","ange;":"\u29a4","angle;":"\u2220","angmsd;":"\u2221","angmsdaa;":"\u29a8","angmsdab;":"\u29a9","angmsdac;":"\u29aa","angmsdad;":"\u29ab","angmsdae;":"\u29ac","angmsdaf;":"\u29ad","angmsdag;":"\u29ae","angmsdah;":"\u29af","angrt;":"\u221f","angrtvb;":"\u22be","angrtvbd;":"\u299d","angsph;":"\u2222","angst;":"\xc5","angzarr;":"\u237c","aogon;":"\u0105","aopf;":"\ud835\udd52","ap;":"\u2248","apE;":"\u2a70","apacir;":"\u2a6f","ape;":"\u224a","apid;":"\u224b","apos;":"'","approx;":"\u2248","approxeq;":"\u224a",aring:"\xe5","aring;":"\xe5","ascr;":"\ud835\udcb6","ast;":"*","asymp;":"\u2248","asympeq;":"\u224d",atilde:"\xe3","atilde;":"\xe3",auml:"\xe4","auml;":"\xe4","awconint;":"\u2233","awint;":"\u2a11","bNot;":"\u2aed","backcong;":"\u224c","backepsilon;":"\u03f6","backprime;":"\u2035","backsim;":"\u223d","backsimeq;":"\u22cd","barvee;":"\u22bd","barwed;":"\u2305","barwedge;":"\u2305","bbrk;":"\u23b5","bbrktbrk;":"\u23b6","bcong;":"\u224c","bcy;":"\u0431","bdquo;":"\u201e","becaus;":"\u2235","because;":"\u2235","bemptyv;":"\u29b0","bepsi;":"\u03f6","bernou;":"\u212c","beta;":"\u03b2","beth;":"\u2136","between;":"\u226c","bfr;":"\ud835\udd1f","bigcap;":"\u22c2","bigcirc;":"\u25ef","bigcup;":"\u22c3","bigodot;":"\u2a00","bigoplus;":"\u2a01","bigotimes;":"\u2a02","bigsqcup;":"\u2a06","bigstar;":"\u2605","bigtriangledown;":"\u25bd","bigtriangleup;":"\u25b3","biguplus;":"\u2a04","bigvee;":"\u22c1","bigwedge;":"\u22c0","bkarow;":"\u290d","blacklozenge;":"\u29eb","blacksquare;":"\u25aa","blacktriangle;":"\u25b4","blacktriangledown;":"\u25be","blacktriangleleft;":"\u25c2","blacktriangleright;":"\u25b8","blank;":"\u2423","blk12;":"\u2592","blk14;":"\u2591","blk34;":"\u2593","block;":"\u2588","bne;":"=\u20e5","bnequiv;":"\u2261\u20e5","bnot;":"\u2310","bopf;":"\ud835\udd53","bot;":"\u22a5","bottom;":"\u22a5","bowtie;":"\u22c8","boxDL;":"\u2557","boxDR;":"\u2554","boxDl;":"\u2556","boxDr;":"\u2553","boxH;":"\u2550","boxHD;":"\u2566","boxHU;":"\u2569","boxHd;":"\u2564","boxHu;":"\u2567","boxUL;":"\u255d","boxUR;":"\u255a","boxUl;":"\u255c","boxUr;":"\u2559","boxV;":"\u2551","boxVH;":"\u256c","boxVL;":"\u2563","boxVR;":"\u2560","boxVh;":"\u256b","boxVl;":"\u2562","boxVr;":"\u255f","boxbox;":"\u29c9","boxdL;":"\u2555","boxdR;":"\u2552","boxdl;":"\u2510","boxdr;":"\u250c","boxh;":"\u2500","boxhD;":"\u2565","boxhU;":"\u2568","boxhd;":"\u252c","boxhu;":"\u2534","boxminus;":"\u229f","boxplus;":"\u229e","boxtimes;":"\u22a0","boxuL;":"\u255b","boxuR;":"\u2558","boxul;":"\u2518","boxur;":"\u2514","boxv;":"\u2502","boxvH;":"\u256a","boxvL;":"\u2561","boxvR;":"\u255e","boxvh;":"\u253c","boxvl;":"\u2524","boxvr;":"\u251c","bprime;":"\u2035","breve;":"\u02d8",brvbar:"\xa6","brvbar;":"\xa6","bscr;":"\ud835\udcb7","bsemi;":"\u204f","bsim;":"\u223d","bsime;":"\u22cd","bsol;":"\\","bsolb;":"\u29c5","bsolhsub;":"\u27c8","bull;":"\u2022","bullet;":"\u2022","bump;":"\u224e","bumpE;":"\u2aae","bumpe;":"\u224f","bumpeq;":"\u224f","cacute;":"\u0107","cap;":"\u2229","capand;":"\u2a44","capbrcup;":"\u2a49","capcap;":"\u2a4b","capcup;":"\u2a47","capdot;":"\u2a40","caps;":"\u2229\ufe00","caret;":"\u2041","caron;":"\u02c7","ccaps;":"\u2a4d","ccaron;":"\u010d",ccedil:"\xe7","ccedil;":"\xe7","ccirc;":"\u0109","ccups;":"\u2a4c","ccupssm;":"\u2a50","cdot;":"\u010b",cedil:"\xb8","cedil;":"\xb8","cemptyv;":"\u29b2",cent:"\xa2","cent;":"\xa2","centerdot;":"\xb7","cfr;":"\ud835\udd20","chcy;":"\u0447","check;":"\u2713","checkmark;":"\u2713","chi;":"\u03c7","cir;":"\u25cb","cirE;":"\u29c3","circ;":"\u02c6","circeq;":"\u2257","circlearrowleft;":"\u21ba","circlearrowright;":"\u21bb","circledR;":"\xae","circledS;":"\u24c8","circledast;":"\u229b","circledcirc;":"\u229a","circleddash;":"\u229d","cire;":"\u2257","cirfnint;":"\u2a10","cirmid;":"\u2aef","cirscir;":"\u29c2","clubs;":"\u2663","clubsuit;":"\u2663","colon;":":","colone;":"\u2254","coloneq;":"\u2254","comma;":",","commat;":"@","comp;":"\u2201","compfn;":"\u2218","complement;":"\u2201","complexes;":"\u2102","cong;":"\u2245","congdot;":"\u2a6d","conint;":"\u222e","copf;":"\ud835\udd54","coprod;":"\u2210",copy:"\xa9","copy;":"\xa9","copysr;":"\u2117","crarr;":"\u21b5","cross;":"\u2717","cscr;":"\ud835\udcb8","csub;":"\u2acf","csube;":"\u2ad1","csup;":"\u2ad0","csupe;":"\u2ad2","ctdot;":"\u22ef","cudarrl;":"\u2938","cudarrr;":"\u2935","cuepr;":"\u22de","cuesc;":"\u22df","cularr;":"\u21b6","cularrp;":"\u293d","cup;":"\u222a","cupbrcap;":"\u2a48","cupcap;":"\u2a46","cupcup;":"\u2a4a","cupdot;":"\u228d","cupor;":"\u2a45","cups;":"\u222a\ufe00","curarr;":"\u21b7","curarrm;":"\u293c","curlyeqprec;":"\u22de","curlyeqsucc;":"\u22df","curlyvee;":"\u22ce","curlywedge;":"\u22cf",curren:"\xa4","curren;":"\xa4","curvearrowleft;":"\u21b6","curvearrowright;":"\u21b7","cuvee;":"\u22ce","cuwed;":"\u22cf","cwconint;":"\u2232","cwint;":"\u2231","cylcty;":"\u232d","dArr;":"\u21d3","dHar;":"\u2965","dagger;":"\u2020","daleth;":"\u2138","darr;":"\u2193","dash;":"\u2010","dashv;":"\u22a3","dbkarow;":"\u290f","dblac;":"\u02dd","dcaron;":"\u010f","dcy;":"\u0434","dd;":"\u2146","ddagger;":"\u2021","ddarr;":"\u21ca","ddotseq;":"\u2a77",deg:"\xb0","deg;":"\xb0","delta;":"\u03b4","demptyv;":"\u29b1","dfisht;":"\u297f","dfr;":"\ud835\udd21","dharl;":"\u21c3","dharr;":"\u21c2","diam;":"\u22c4","diamond;":"\u22c4","diamondsuit;":"\u2666","diams;":"\u2666","die;":"\xa8","digamma;":"\u03dd","disin;":"\u22f2","div;":"\xf7",divide:"\xf7","divide;":"\xf7","divideontimes;":"\u22c7","divonx;":"\u22c7","djcy;":"\u0452","dlcorn;":"\u231e","dlcrop;":"\u230d","dollar;":"$","dopf;":"\ud835\udd55","dot;":"\u02d9","doteq;":"\u2250","doteqdot;":"\u2251","dotminus;":"\u2238","dotplus;":"\u2214","dotsquare;":"\u22a1","doublebarwedge;":"\u2306","downarrow;":"\u2193","downdownarrows;":"\u21ca","downharpoonleft;":"\u21c3","downharpoonright;":"\u21c2","drbkarow;":"\u2910","drcorn;":"\u231f","drcrop;":"\u230c","dscr;":"\ud835\udcb9","dscy;":"\u0455","dsol;":"\u29f6","dstrok;":"\u0111","dtdot;":"\u22f1","dtri;":"\u25bf","dtrif;":"\u25be","duarr;":"\u21f5","duhar;":"\u296f","dwangle;":"\u29a6","dzcy;":"\u045f","dzigrarr;":"\u27ff","eDDot;":"\u2a77","eDot;":"\u2251",eacute:"\xe9","eacute;":"\xe9","easter;":"\u2a6e","ecaron;":"\u011b","ecir;":"\u2256",ecirc:"\xea","ecirc;":"\xea","ecolon;":"\u2255","ecy;":"\u044d","edot;":"\u0117","ee;":"\u2147","efDot;":"\u2252","efr;":"\ud835\udd22","eg;":"\u2a9a",egrave:"\xe8","egrave;":"\xe8","egs;":"\u2a96","egsdot;":"\u2a98","el;":"\u2a99","elinters;":"\u23e7","ell;":"\u2113","els;":"\u2a95","elsdot;":"\u2a97","emacr;":"\u0113","empty;":"\u2205","emptyset;":"\u2205","emptyv;":"\u2205","emsp13;":"\u2004","emsp14;":"\u2005","emsp;":"\u2003","eng;":"\u014b","ensp;":"\u2002","eogon;":"\u0119","eopf;":"\ud835\udd56","epar;":"\u22d5","eparsl;":"\u29e3","eplus;":"\u2a71","epsi;":"\u03b5","epsilon;":"\u03b5","epsiv;":"\u03f5","eqcirc;":"\u2256","eqcolon;":"\u2255","eqsim;":"\u2242","eqslantgtr;":"\u2a96","eqslantless;":"\u2a95","equals;":"=","equest;":"\u225f","equiv;":"\u2261","equivDD;":"\u2a78","eqvparsl;":"\u29e5","erDot;":"\u2253","erarr;":"\u2971","escr;":"\u212f","esdot;":"\u2250","esim;":"\u2242","eta;":"\u03b7",eth:"\xf0","eth;":"\xf0",euml:"\xeb","euml;":"\xeb","euro;":"\u20ac","excl;":"!","exist;":"\u2203","expectation;":"\u2130","exponentiale;":"\u2147","fallingdotseq;":"\u2252","fcy;":"\u0444","female;":"\u2640","ffilig;":"\ufb03","fflig;":"\ufb00","ffllig;":"\ufb04","ffr;":"\ud835\udd23","filig;":"\ufb01","fjlig;":"fj","flat;":"\u266d","fllig;":"\ufb02","fltns;":"\u25b1","fnof;":"\u0192","fopf;":"\ud835\udd57","forall;":"\u2200","fork;":"\u22d4","forkv;":"\u2ad9","fpartint;":"\u2a0d",frac12:"\xbd","frac12;":"\xbd","frac13;":"\u2153",frac14:"\xbc","frac14;":"\xbc","frac15;":"\u2155","frac16;":"\u2159","frac18;":"\u215b","frac23;":"\u2154","frac25;":"\u2156",frac34:"\xbe","frac34;":"\xbe","frac35;":"\u2157","frac38;":"\u215c","frac45;":"\u2158","frac56;":"\u215a","frac58;":"\u215d","frac78;":"\u215e","frasl;":"\u2044","frown;":"\u2322","fscr;":"\ud835\udcbb","gE;":"\u2267","gEl;":"\u2a8c","gacute;":"\u01f5","gamma;":"\u03b3","gammad;":"\u03dd","gap;":"\u2a86","gbreve;":"\u011f","gcirc;":"\u011d","gcy;":"\u0433","gdot;":"\u0121","ge;":"\u2265","gel;":"\u22db","geq;":"\u2265","geqq;":"\u2267","geqslant;":"\u2a7e","ges;":"\u2a7e","gescc;":"\u2aa9","gesdot;":"\u2a80","gesdoto;":"\u2a82","gesdotol;":"\u2a84","gesl;":"\u22db\ufe00","gesles;":"\u2a94","gfr;":"\ud835\udd24","gg;":"\u226b","ggg;":"\u22d9","gimel;":"\u2137","gjcy;":"\u0453","gl;":"\u2277","glE;":"\u2a92","gla;":"\u2aa5","glj;":"\u2aa4","gnE;":"\u2269","gnap;":"\u2a8a","gnapprox;":"\u2a8a","gne;":"\u2a88","gneq;":"\u2a88","gneqq;":"\u2269","gnsim;":"\u22e7","gopf;":"\ud835\udd58","grave;":"`","gscr;":"\u210a","gsim;":"\u2273","gsime;":"\u2a8e","gsiml;":"\u2a90",gt:">","gt;":">","gtcc;":"\u2aa7","gtcir;":"\u2a7a","gtdot;":"\u22d7","gtlPar;":"\u2995","gtquest;":"\u2a7c","gtrapprox;":"\u2a86","gtrarr;":"\u2978","gtrdot;":"\u22d7","gtreqless;":"\u22db","gtreqqless;":"\u2a8c","gtrless;":"\u2277","gtrsim;":"\u2273","gvertneqq;":"\u2269\ufe00","gvnE;":"\u2269\ufe00","hArr;":"\u21d4","hairsp;":"\u200a","half;":"\xbd","hamilt;":"\u210b","hardcy;":"\u044a","harr;":"\u2194","harrcir;":"\u2948","harrw;":"\u21ad","hbar;":"\u210f","hcirc;":"\u0125","hearts;":"\u2665","heartsuit;":"\u2665","hellip;":"\u2026","hercon;":"\u22b9","hfr;":"\ud835\udd25","hksearow;":"\u2925","hkswarow;":"\u2926","hoarr;":"\u21ff","homtht;":"\u223b","hookleftarrow;":"\u21a9","hookrightarrow;":"\u21aa","hopf;":"\ud835\udd59","horbar;":"\u2015","hscr;":"\ud835\udcbd","hslash;":"\u210f","hstrok;":"\u0127","hybull;":"\u2043","hyphen;":"\u2010",iacute:"\xed","iacute;":"\xed","ic;":"\u2063",icirc:"\xee","icirc;":"\xee","icy;":"\u0438","iecy;":"\u0435",iexcl:"\xa1","iexcl;":"\xa1","iff;":"\u21d4","ifr;":"\ud835\udd26",igrave:"\xec","igrave;":"\xec","ii;":"\u2148","iiiint;":"\u2a0c","iiint;":"\u222d","iinfin;":"\u29dc","iiota;":"\u2129","ijlig;":"\u0133","imacr;":"\u012b","image;":"\u2111","imagline;":"\u2110","imagpart;":"\u2111","imath;":"\u0131","imof;":"\u22b7","imped;":"\u01b5","in;":"\u2208","incare;":"\u2105","infin;":"\u221e","infintie;":"\u29dd","inodot;":"\u0131","int;":"\u222b","intcal;":"\u22ba","integers;":"\u2124","intercal;":"\u22ba","intlarhk;":"\u2a17","intprod;":"\u2a3c","iocy;":"\u0451","iogon;":"\u012f","iopf;":"\ud835\udd5a","iota;":"\u03b9","iprod;":"\u2a3c",iquest:"\xbf","iquest;":"\xbf","iscr;":"\ud835\udcbe","isin;":"\u2208","isinE;":"\u22f9","isindot;":"\u22f5","isins;":"\u22f4","isinsv;":"\u22f3","isinv;":"\u2208","it;":"\u2062","itilde;":"\u0129","iukcy;":"\u0456",iuml:"\xef","iuml;":"\xef","jcirc;":"\u0135","jcy;":"\u0439","jfr;":"\ud835\udd27","jmath;":"\u0237","jopf;":"\ud835\udd5b","jscr;":"\ud835\udcbf","jsercy;":"\u0458","jukcy;":"\u0454","kappa;":"\u03ba","kappav;":"\u03f0","kcedil;":"\u0137","kcy;":"\u043a","kfr;":"\ud835\udd28","kgreen;":"\u0138","khcy;":"\u0445","kjcy;":"\u045c","kopf;":"\ud835\udd5c","kscr;":"\ud835\udcc0","lAarr;":"\u21da","lArr;":"\u21d0","lAtail;":"\u291b","lBarr;":"\u290e","lE;":"\u2266","lEg;":"\u2a8b","lHar;":"\u2962","lacute;":"\u013a","laemptyv;":"\u29b4","lagran;":"\u2112","lambda;":"\u03bb","lang;":"\u27e8","langd;":"\u2991","langle;":"\u27e8","lap;":"\u2a85",laquo:"\xab","laquo;":"\xab","larr;":"\u2190","larrb;":"\u21e4","larrbfs;":"\u291f","larrfs;":"\u291d","larrhk;":"\u21a9","larrlp;":"\u21ab","larrpl;":"\u2939","larrsim;":"\u2973","larrtl;":"\u21a2","lat;":"\u2aab","latail;":"\u2919","late;":"\u2aad","lates;":"\u2aad\ufe00","lbarr;":"\u290c","lbbrk;":"\u2772","lbrace;":"{","lbrack;":"[","lbrke;":"\u298b","lbrksld;":"\u298f","lbrkslu;":"\u298d","lcaron;":"\u013e","lcedil;":"\u013c","lceil;":"\u2308","lcub;":"{","lcy;":"\u043b","ldca;":"\u2936","ldquo;":"\u201c","ldquor;":"\u201e","ldrdhar;":"\u2967","ldrushar;":"\u294b","ldsh;":"\u21b2","le;":"\u2264","leftarrow;":"\u2190","leftarrowtail;":"\u21a2","leftharpoondown;":"\u21bd","leftharpoonup;":"\u21bc","leftleftarrows;":"\u21c7","leftrightarrow;":"\u2194","leftrightarrows;":"\u21c6","leftrightharpoons;":"\u21cb","leftrightsquigarrow;":"\u21ad","leftthreetimes;":"\u22cb","leg;":"\u22da","leq;":"\u2264","leqq;":"\u2266","leqslant;":"\u2a7d","les;":"\u2a7d","lescc;":"\u2aa8","lesdot;":"\u2a7f","lesdoto;":"\u2a81","lesdotor;":"\u2a83","lesg;":"\u22da\ufe00","lesges;":"\u2a93","lessapprox;":"\u2a85","lessdot;":"\u22d6","lesseqgtr;":"\u22da","lesseqqgtr;":"\u2a8b","lessgtr;":"\u2276","lesssim;":"\u2272","lfisht;":"\u297c","lfloor;":"\u230a","lfr;":"\ud835\udd29","lg;":"\u2276","lgE;":"\u2a91","lhard;":"\u21bd","lharu;":"\u21bc","lharul;":"\u296a","lhblk;":"\u2584","ljcy;":"\u0459","ll;":"\u226a","llarr;":"\u21c7","llcorner;":"\u231e","llhard;":"\u296b","lltri;":"\u25fa","lmidot;":"\u0140","lmoust;":"\u23b0","lmoustache;":"\u23b0","lnE;":"\u2268","lnap;":"\u2a89","lnapprox;":"\u2a89","lne;":"\u2a87","lneq;":"\u2a87","lneqq;":"\u2268","lnsim;":"\u22e6","loang;":"\u27ec","loarr;":"\u21fd","lobrk;":"\u27e6","longleftarrow;":"\u27f5","longleftrightarrow;":"\u27f7","longmapsto;":"\u27fc","longrightarrow;":"\u27f6","looparrowleft;":"\u21ab","looparrowright;":"\u21ac","lopar;":"\u2985","lopf;":"\ud835\udd5d","loplus;":"\u2a2d","lotimes;":"\u2a34","lowast;":"\u2217","lowbar;":"_","loz;":"\u25ca","lozenge;":"\u25ca","lozf;":"\u29eb","lpar;":"(","lparlt;":"\u2993","lrarr;":"\u21c6","lrcorner;":"\u231f","lrhar;":"\u21cb","lrhard;":"\u296d","lrm;":"\u200e","lrtri;":"\u22bf","lsaquo;":"\u2039","lscr;":"\ud835\udcc1","lsh;":"\u21b0","lsim;":"\u2272","lsime;":"\u2a8d","lsimg;":"\u2a8f","lsqb;":"[","lsquo;":"\u2018","lsquor;":"\u201a","lstrok;":"\u0142",lt:"<","lt;":"<","ltcc;":"\u2aa6","ltcir;":"\u2a79","ltdot;":"\u22d6","lthree;":"\u22cb","ltimes;":"\u22c9","ltlarr;":"\u2976","ltquest;":"\u2a7b","ltrPar;":"\u2996","ltri;":"\u25c3","ltrie;":"\u22b4","ltrif;":"\u25c2","lurdshar;":"\u294a","luruhar;":"\u2966","lvertneqq;":"\u2268\ufe00","lvnE;":"\u2268\ufe00","mDDot;":"\u223a",macr:"\xaf","macr;":"\xaf","male;":"\u2642","malt;":"\u2720","maltese;":"\u2720","map;":"\u21a6","mapsto;":"\u21a6","mapstodown;":"\u21a7","mapstoleft;":"\u21a4","mapstoup;":"\u21a5","marker;":"\u25ae","mcomma;":"\u2a29","mcy;":"\u043c","mdash;":"\u2014","measuredangle;":"\u2221","mfr;":"\ud835\udd2a","mho;":"\u2127",micro:"\xb5","micro;":"\xb5","mid;":"\u2223","midast;":"*","midcir;":"\u2af0",middot:"\xb7","middot;":"\xb7","minus;":"\u2212","minusb;":"\u229f","minusd;":"\u2238","minusdu;":"\u2a2a","mlcp;":"\u2adb","mldr;":"\u2026","mnplus;":"\u2213","models;":"\u22a7","mopf;":"\ud835\udd5e","mp;":"\u2213","mscr;":"\ud835\udcc2","mstpos;":"\u223e","mu;":"\u03bc","multimap;":"\u22b8","mumap;":"\u22b8","nGg;":"\u22d9\u0338","nGt;":"\u226b\u20d2","nGtv;":"\u226b\u0338","nLeftarrow;":"\u21cd","nLeftrightarrow;":"\u21ce","nLl;":"\u22d8\u0338","nLt;":"\u226a\u20d2","nLtv;":"\u226a\u0338","nRightarrow;":"\u21cf","nVDash;":"\u22af","nVdash;":"\u22ae","nabla;":"\u2207","nacute;":"\u0144","nang;":"\u2220\u20d2","nap;":"\u2249","napE;":"\u2a70\u0338","napid;":"\u224b\u0338","napos;":"\u0149","napprox;":"\u2249","natur;":"\u266e","natural;":"\u266e","naturals;":"\u2115",nbsp:"\xa0","nbsp;":"\xa0","nbump;":"\u224e\u0338","nbumpe;":"\u224f\u0338","ncap;":"\u2a43","ncaron;":"\u0148","ncedil;":"\u0146","ncong;":"\u2247","ncongdot;":"\u2a6d\u0338","ncup;":"\u2a42","ncy;":"\u043d","ndash;":"\u2013","ne;":"\u2260","neArr;":"\u21d7","nearhk;":"\u2924","nearr;":"\u2197","nearrow;":"\u2197","nedot;":"\u2250\u0338","nequiv;":"\u2262","nesear;":"\u2928","nesim;":"\u2242\u0338","nexist;":"\u2204","nexists;":"\u2204","nfr;":"\ud835\udd2b","ngE;":"\u2267\u0338","nge;":"\u2271","ngeq;":"\u2271","ngeqq;":"\u2267\u0338","ngeqslant;":"\u2a7e\u0338","nges;":"\u2a7e\u0338","ngsim;":"\u2275","ngt;":"\u226f","ngtr;":"\u226f","nhArr;":"\u21ce","nharr;":"\u21ae","nhpar;":"\u2af2","ni;":"\u220b","nis;":"\u22fc","nisd;":"\u22fa","niv;":"\u220b","njcy;":"\u045a","nlArr;":"\u21cd","nlE;":"\u2266\u0338","nlarr;":"\u219a","nldr;":"\u2025","nle;":"\u2270","nleftarrow;":"\u219a","nleftrightarrow;":"\u21ae","nleq;":"\u2270","nleqq;":"\u2266\u0338","nleqslant;":"\u2a7d\u0338","nles;":"\u2a7d\u0338","nless;":"\u226e","nlsim;":"\u2274","nlt;":"\u226e","nltri;":"\u22ea","nltrie;":"\u22ec","nmid;":"\u2224","nopf;":"\ud835\udd5f",not:"\xac","not;":"\xac","notin;":"\u2209","notinE;":"\u22f9\u0338","notindot;":"\u22f5\u0338","notinva;":"\u2209","notinvb;":"\u22f7","notinvc;":"\u22f6","notni;":"\u220c","notniva;":"\u220c","notnivb;":"\u22fe","notnivc;":"\u22fd","npar;":"\u2226","nparallel;":"\u2226","nparsl;":"\u2afd\u20e5","npart;":"\u2202\u0338","npolint;":"\u2a14","npr;":"\u2280","nprcue;":"\u22e0","npre;":"\u2aaf\u0338","nprec;":"\u2280","npreceq;":"\u2aaf\u0338","nrArr;":"\u21cf","nrarr;":"\u219b","nrarrc;":"\u2933\u0338","nrarrw;":"\u219d\u0338","nrightarrow;":"\u219b","nrtri;":"\u22eb","nrtrie;":"\u22ed","nsc;":"\u2281","nsccue;":"\u22e1","nsce;":"\u2ab0\u0338","nscr;":"\ud835\udcc3","nshortmid;":"\u2224","nshortparallel;":"\u2226","nsim;":"\u2241","nsime;":"\u2244","nsimeq;":"\u2244","nsmid;":"\u2224","nspar;":"\u2226","nsqsube;":"\u22e2","nsqsupe;":"\u22e3","nsub;":"\u2284","nsubE;":"\u2ac5\u0338","nsube;":"\u2288","nsubset;":"\u2282\u20d2","nsubseteq;":"\u2288","nsubseteqq;":"\u2ac5\u0338","nsucc;":"\u2281","nsucceq;":"\u2ab0\u0338","nsup;":"\u2285","nsupE;":"\u2ac6\u0338","nsupe;":"\u2289","nsupset;":"\u2283\u20d2","nsupseteq;":"\u2289","nsupseteqq;":"\u2ac6\u0338","ntgl;":"\u2279",ntilde:"\xf1","ntilde;":"\xf1","ntlg;":"\u2278","ntriangleleft;":"\u22ea","ntrianglelefteq;":"\u22ec","ntriangleright;":"\u22eb","ntrianglerighteq;":"\u22ed","nu;":"\u03bd","num;":"#","numero;":"\u2116","numsp;":"\u2007","nvDash;":"\u22ad","nvHarr;":"\u2904","nvap;":"\u224d\u20d2","nvdash;":"\u22ac","nvge;":"\u2265\u20d2","nvgt;":">\u20d2","nvinfin;":"\u29de","nvlArr;":"\u2902","nvle;":"\u2264\u20d2","nvlt;":"<\u20d2","nvltrie;":"\u22b4\u20d2","nvrArr;":"\u2903","nvrtrie;":"\u22b5\u20d2","nvsim;":"\u223c\u20d2","nwArr;":"\u21d6","nwarhk;":"\u2923","nwarr;":"\u2196","nwarrow;":"\u2196","nwnear;":"\u2927","oS;":"\u24c8",oacute:"\xf3","oacute;":"\xf3","oast;":"\u229b","ocir;":"\u229a",ocirc:"\xf4","ocirc;":"\xf4","ocy;":"\u043e","odash;":"\u229d","odblac;":"\u0151","odiv;":"\u2a38","odot;":"\u2299","odsold;":"\u29bc","oelig;":"\u0153","ofcir;":"\u29bf","ofr;":"\ud835\udd2c","ogon;":"\u02db",ograve:"\xf2","ograve;":"\xf2","ogt;":"\u29c1","ohbar;":"\u29b5","ohm;":"\u03a9","oint;":"\u222e","olarr;":"\u21ba","olcir;":"\u29be","olcross;":"\u29bb","oline;":"\u203e","olt;":"\u29c0","omacr;":"\u014d","omega;":"\u03c9","omicron;":"\u03bf","omid;":"\u29b6","ominus;":"\u2296","oopf;":"\ud835\udd60","opar;":"\u29b7","operp;":"\u29b9","oplus;":"\u2295","or;":"\u2228","orarr;":"\u21bb","ord;":"\u2a5d","order;":"\u2134","orderof;":"\u2134",ordf:"\xaa","ordf;":"\xaa",ordm:"\xba","ordm;":"\xba","origof;":"\u22b6","oror;":"\u2a56","orslope;":"\u2a57","orv;":"\u2a5b","oscr;":"\u2134",oslash:"\xf8","oslash;":"\xf8","osol;":"\u2298",otilde:"\xf5","otilde;":"\xf5","otimes;":"\u2297","otimesas;":"\u2a36",ouml:"\xf6","ouml;":"\xf6","ovbar;":"\u233d","par;":"\u2225",para:"\xb6","para;":"\xb6","parallel;":"\u2225","parsim;":"\u2af3","parsl;":"\u2afd","part;":"\u2202","pcy;":"\u043f","percnt;":"%","period;":".","permil;":"\u2030","perp;":"\u22a5","pertenk;":"\u2031","pfr;":"\ud835\udd2d","phi;":"\u03c6","phiv;":"\u03d5","phmmat;":"\u2133","phone;":"\u260e","pi;":"\u03c0","pitchfork;":"\u22d4","piv;":"\u03d6","planck;":"\u210f","planckh;":"\u210e","plankv;":"\u210f","plus;":"+","plusacir;":"\u2a23","plusb;":"\u229e","pluscir;":"\u2a22","plusdo;":"\u2214","plusdu;":"\u2a25","pluse;":"\u2a72",plusmn:"\xb1","plusmn;":"\xb1","plussim;":"\u2a26","plustwo;":"\u2a27","pm;":"\xb1","pointint;":"\u2a15","popf;":"\ud835\udd61",pound:"\xa3","pound;":"\xa3","pr;":"\u227a","prE;":"\u2ab3","prap;":"\u2ab7","prcue;":"\u227c","pre;":"\u2aaf","prec;":"\u227a","precapprox;":"\u2ab7","preccurlyeq;":"\u227c","preceq;":"\u2aaf","precnapprox;":"\u2ab9","precneqq;":"\u2ab5","precnsim;":"\u22e8","precsim;":"\u227e","prime;":"\u2032","primes;":"\u2119","prnE;":"\u2ab5","prnap;":"\u2ab9","prnsim;":"\u22e8","prod;":"\u220f","profalar;":"\u232e","profline;":"\u2312","profsurf;":"\u2313","prop;":"\u221d","propto;":"\u221d","prsim;":"\u227e","prurel;":"\u22b0","pscr;":"\ud835\udcc5","psi;":"\u03c8","puncsp;":"\u2008","qfr;":"\ud835\udd2e","qint;":"\u2a0c","qopf;":"\ud835\udd62","qprime;":"\u2057","qscr;":"\ud835\udcc6","quaternions;":"\u210d","quatint;":"\u2a16","quest;":"?","questeq;":"\u225f",quot:'"',"quot;":'"',"rAarr;":"\u21db","rArr;":"\u21d2","rAtail;":"\u291c","rBarr;":"\u290f","rHar;":"\u2964","race;":"\u223d\u0331","racute;":"\u0155","radic;":"\u221a","raemptyv;":"\u29b3","rang;":"\u27e9","rangd;":"\u2992","range;":"\u29a5","rangle;":"\u27e9",raquo:"\xbb","raquo;":"\xbb","rarr;":"\u2192","rarrap;":"\u2975","rarrb;":"\u21e5","rarrbfs;":"\u2920","rarrc;":"\u2933","rarrfs;":"\u291e","rarrhk;":"\u21aa","rarrlp;":"\u21ac","rarrpl;":"\u2945","rarrsim;":"\u2974","rarrtl;":"\u21a3","rarrw;":"\u219d","ratail;":"\u291a","ratio;":"\u2236","rationals;":"\u211a","rbarr;":"\u290d","rbbrk;":"\u2773","rbrace;":"}","rbrack;":"]","rbrke;":"\u298c","rbrksld;":"\u298e","rbrkslu;":"\u2990","rcaron;":"\u0159","rcedil;":"\u0157","rceil;":"\u2309","rcub;":"}","rcy;":"\u0440","rdca;":"\u2937","rdldhar;":"\u2969","rdquo;":"\u201d","rdquor;":"\u201d","rdsh;":"\u21b3","real;":"\u211c","realine;":"\u211b","realpart;":"\u211c","reals;":"\u211d","rect;":"\u25ad",reg:"\xae","reg;":"\xae","rfisht;":"\u297d","rfloor;":"\u230b","rfr;":"\ud835\udd2f","rhard;":"\u21c1","rharu;":"\u21c0","rharul;":"\u296c","rho;":"\u03c1","rhov;":"\u03f1","rightarrow;":"\u2192","rightarrowtail;":"\u21a3","rightharpoondown;":"\u21c1","rightharpoonup;":"\u21c0","rightleftarrows;":"\u21c4","rightleftharpoons;":"\u21cc","rightrightarrows;":"\u21c9","rightsquigarrow;":"\u219d","rightthreetimes;":"\u22cc","ring;":"\u02da","risingdotseq;":"\u2253","rlarr;":"\u21c4","rlhar;":"\u21cc","rlm;":"\u200f","rmoust;":"\u23b1","rmoustache;":"\u23b1","rnmid;":"\u2aee","roang;":"\u27ed","roarr;":"\u21fe","robrk;":"\u27e7","ropar;":"\u2986","ropf;":"\ud835\udd63","roplus;":"\u2a2e","rotimes;":"\u2a35","rpar;":")","rpargt;":"\u2994","rppolint;":"\u2a12","rrarr;":"\u21c9","rsaquo;":"\u203a","rscr;":"\ud835\udcc7","rsh;":"\u21b1","rsqb;":"]","rsquo;":"\u2019","rsquor;":"\u2019","rthree;":"\u22cc","rtimes;":"\u22ca","rtri;":"\u25b9","rtrie;":"\u22b5","rtrif;":"\u25b8","rtriltri;":"\u29ce","ruluhar;":"\u2968","rx;":"\u211e","sacute;":"\u015b","sbquo;":"\u201a","sc;":"\u227b","scE;":"\u2ab4","scap;":"\u2ab8","scaron;":"\u0161","sccue;":"\u227d","sce;":"\u2ab0","scedil;":"\u015f","scirc;":"\u015d","scnE;":"\u2ab6","scnap;":"\u2aba","scnsim;":"\u22e9","scpolint;":"\u2a13","scsim;":"\u227f","scy;":"\u0441","sdot;":"\u22c5","sdotb;":"\u22a1","sdote;":"\u2a66","seArr;":"\u21d8","searhk;":"\u2925","searr;":"\u2198","searrow;":"\u2198",sect:"\xa7","sect;":"\xa7","semi;":";","seswar;":"\u2929","setminus;":"\u2216","setmn;":"\u2216","sext;":"\u2736","sfr;":"\ud835\udd30","sfrown;":"\u2322","sharp;":"\u266f","shchcy;":"\u0449","shcy;":"\u0448","shortmid;":"\u2223","shortparallel;":"\u2225",shy:"\xad","shy;":"\xad","sigma;":"\u03c3","sigmaf;":"\u03c2","sigmav;":"\u03c2","sim;":"\u223c","simdot;":"\u2a6a","sime;":"\u2243","simeq;":"\u2243","simg;":"\u2a9e","simgE;":"\u2aa0","siml;":"\u2a9d","simlE;":"\u2a9f","simne;":"\u2246","simplus;":"\u2a24","simrarr;":"\u2972","slarr;":"\u2190","smallsetminus;":"\u2216","smashp;":"\u2a33","smeparsl;":"\u29e4","smid;":"\u2223","smile;":"\u2323","smt;":"\u2aaa","smte;":"\u2aac","smtes;":"\u2aac\ufe00","softcy;":"\u044c","sol;":"/","solb;":"\u29c4","solbar;":"\u233f","sopf;":"\ud835\udd64","spades;":"\u2660","spadesuit;":"\u2660","spar;":"\u2225","sqcap;":"\u2293","sqcaps;":"\u2293\ufe00","sqcup;":"\u2294","sqcups;":"\u2294\ufe00","sqsub;":"\u228f","sqsube;":"\u2291","sqsubset;":"\u228f","sqsubseteq;":"\u2291","sqsup;":"\u2290","sqsupe;":"\u2292","sqsupset;":"\u2290","sqsupseteq;":"\u2292","squ;":"\u25a1","square;":"\u25a1","squarf;":"\u25aa","squf;":"\u25aa","srarr;":"\u2192","sscr;":"\ud835\udcc8","ssetmn;":"\u2216","ssmile;":"\u2323","sstarf;":"\u22c6","star;":"\u2606","starf;":"\u2605","straightepsilon;":"\u03f5","straightphi;":"\u03d5","strns;":"\xaf","sub;":"\u2282","subE;":"\u2ac5","subdot;":"\u2abd","sube;":"\u2286","subedot;":"\u2ac3","submult;":"\u2ac1","subnE;":"\u2acb","subne;":"\u228a","subplus;":"\u2abf","subrarr;":"\u2979","subset;":"\u2282","subseteq;":"\u2286","subseteqq;":"\u2ac5","subsetneq;":"\u228a","subsetneqq;":"\u2acb","subsim;":"\u2ac7","subsub;":"\u2ad5","subsup;":"\u2ad3","succ;":"\u227b","succapprox;":"\u2ab8","succcurlyeq;":"\u227d","succeq;":"\u2ab0","succnapprox;":"\u2aba","succneqq;":"\u2ab6","succnsim;":"\u22e9","succsim;":"\u227f","sum;":"\u2211","sung;":"\u266a",sup1:"\xb9","sup1;":"\xb9",sup2:"\xb2","sup2;":"\xb2",sup3:"\xb3","sup3;":"\xb3","sup;":"\u2283","supE;":"\u2ac6","supdot;":"\u2abe","supdsub;":"\u2ad8","supe;":"\u2287","supedot;":"\u2ac4","suphsol;":"\u27c9","suphsub;":"\u2ad7","suplarr;":"\u297b","supmult;":"\u2ac2","supnE;":"\u2acc","supne;":"\u228b","supplus;":"\u2ac0","supset;":"\u2283","supseteq;":"\u2287","supseteqq;":"\u2ac6","supsetneq;":"\u228b","supsetneqq;":"\u2acc","supsim;":"\u2ac8","supsub;":"\u2ad4","supsup;":"\u2ad6","swArr;":"\u21d9","swarhk;":"\u2926","swarr;":"\u2199","swarrow;":"\u2199","swnwar;":"\u292a",szlig:"\xdf","szlig;":"\xdf","target;":"\u2316","tau;":"\u03c4","tbrk;":"\u23b4","tcaron;":"\u0165","tcedil;":"\u0163","tcy;":"\u0442","tdot;":"\u20db","telrec;":"\u2315","tfr;":"\ud835\udd31","there4;":"\u2234","therefore;":"\u2234","theta;":"\u03b8","thetasym;":"\u03d1","thetav;":"\u03d1","thickapprox;":"\u2248","thicksim;":"\u223c","thinsp;":"\u2009","thkap;":"\u2248","thksim;":"\u223c",thorn:"\xfe","thorn;":"\xfe","tilde;":"\u02dc",times:"\xd7","times;":"\xd7","timesb;":"\u22a0","timesbar;":"\u2a31","timesd;":"\u2a30","tint;":"\u222d","toea;":"\u2928","top;":"\u22a4","topbot;":"\u2336","topcir;":"\u2af1","topf;":"\ud835\udd65","topfork;":"\u2ada","tosa;":"\u2929","tprime;":"\u2034","trade;":"\u2122","triangle;":"\u25b5","triangledown;":"\u25bf","triangleleft;":"\u25c3","trianglelefteq;":"\u22b4","triangleq;":"\u225c","triangleright;":"\u25b9","trianglerighteq;":"\u22b5","tridot;":"\u25ec","trie;":"\u225c","triminus;":"\u2a3a","triplus;":"\u2a39","trisb;":"\u29cd","tritime;":"\u2a3b","trpezium;":"\u23e2","tscr;":"\ud835\udcc9","tscy;":"\u0446","tshcy;":"\u045b","tstrok;":"\u0167","twixt;":"\u226c","twoheadleftarrow;":"\u219e","twoheadrightarrow;":"\u21a0","uArr;":"\u21d1","uHar;":"\u2963",uacute:"\xfa","uacute;":"\xfa","uarr;":"\u2191","ubrcy;":"\u045e","ubreve;":"\u016d",ucirc:"\xfb","ucirc;":"\xfb","ucy;":"\u0443","udarr;":"\u21c5","udblac;":"\u0171","udhar;":"\u296e","ufisht;":"\u297e","ufr;":"\ud835\udd32",ugrave:"\xf9","ugrave;":"\xf9","uharl;":"\u21bf","uharr;":"\u21be","uhblk;":"\u2580","ulcorn;":"\u231c","ulcorner;":"\u231c","ulcrop;":"\u230f","ultri;":"\u25f8","umacr;":"\u016b",uml:"\xa8","uml;":"\xa8","uogon;":"\u0173","uopf;":"\ud835\udd66","uparrow;":"\u2191","updownarrow;":"\u2195","upharpoonleft;":"\u21bf","upharpoonright;":"\u21be","uplus;":"\u228e","upsi;":"\u03c5","upsih;":"\u03d2","upsilon;":"\u03c5","upuparrows;":"\u21c8","urcorn;":"\u231d","urcorner;":"\u231d","urcrop;":"\u230e","uring;":"\u016f","urtri;":"\u25f9","uscr;":"\ud835\udcca","utdot;":"\u22f0","utilde;":"\u0169","utri;":"\u25b5","utrif;":"\u25b4","uuarr;":"\u21c8",uuml:"\xfc","uuml;":"\xfc","uwangle;":"\u29a7","vArr;":"\u21d5","vBar;":"\u2ae8","vBarv;":"\u2ae9","vDash;":"\u22a8","vangrt;":"\u299c","varepsilon;":"\u03f5","varkappa;":"\u03f0","varnothing;":"\u2205","varphi;":"\u03d5","varpi;":"\u03d6","varpropto;":"\u221d","varr;":"\u2195","varrho;":"\u03f1","varsigma;":"\u03c2","varsubsetneq;":"\u228a\ufe00","varsubsetneqq;":"\u2acb\ufe00","varsupsetneq;":"\u228b\ufe00","varsupsetneqq;":"\u2acc\ufe00","vartheta;":"\u03d1","vartriangleleft;":"\u22b2","vartriangleright;":"\u22b3","vcy;":"\u0432","vdash;":"\u22a2","vee;":"\u2228","veebar;":"\u22bb","veeeq;":"\u225a","vellip;":"\u22ee","verbar;":"|","vert;":"|","vfr;":"\ud835\udd33","vltri;":"\u22b2","vnsub;":"\u2282\u20d2","vnsup;":"\u2283\u20d2","vopf;":"\ud835\udd67","vprop;":"\u221d","vrtri;":"\u22b3","vscr;":"\ud835\udccb","vsubnE;":"\u2acb\ufe00","vsubne;":"\u228a\ufe00","vsupnE;":"\u2acc\ufe00","vsupne;":"\u228b\ufe00","vzigzag;":"\u299a","wcirc;":"\u0175","wedbar;":"\u2a5f","wedge;":"\u2227","wedgeq;":"\u2259","weierp;":"\u2118","wfr;":"\ud835\udd34","wopf;":"\ud835\udd68","wp;":"\u2118","wr;":"\u2240","wreath;":"\u2240","wscr;":"\ud835\udccc","xcap;":"\u22c2","xcirc;":"\u25ef","xcup;":"\u22c3","xdtri;":"\u25bd","xfr;":"\ud835\udd35","xhArr;":"\u27fa","xharr;":"\u27f7","xi;":"\u03be","xlArr;":"\u27f8","xlarr;":"\u27f5","xmap;":"\u27fc","xnis;":"\u22fb","xodot;":"\u2a00","xopf;":"\ud835\udd69","xoplus;":"\u2a01","xotime;":"\u2a02","xrArr;":"\u27f9","xrarr;":"\u27f6","xscr;":"\ud835\udccd","xsqcup;":"\u2a06","xuplus;":"\u2a04","xutri;":"\u25b3","xvee;":"\u22c1","xwedge;":"\u22c0",yacute:"\xfd","yacute;":"\xfd","yacy;":"\u044f","ycirc;":"\u0177","ycy;":"\u044b",yen:"\xa5","yen;":"\xa5","yfr;":"\ud835\udd36","yicy;":"\u0457","yopf;":"\ud835\udd6a","yscr;":"\ud835\udcce","yucy;":"\u044e",yuml:"\xff","yuml;":"\xff","zacute;":"\u017a","zcaron;":"\u017e","zcy;":"\u0437","zdot;":"\u017c","zeetrf;":"\u2128","zeta;":"\u03b6","zfr;":"\ud835\udd37","zhcy;":"\u0436","zigrarr;":"\u21dd","zopf;":"\ud835\udd6b","zscr;":"\ud835\udccf","zwj;":"\u200d","zwnj;":"\u200c"},C.b9,t.B)
C.bc=H.a(s(["null-character","invalid-codepoint","incorrectly-placed-solidus","incorrect-cr-newline-entity","illegal-windows-1252-entity","cant-convert-numeric-entity","illegal-codepoint-for-numeric-entity","numeric-entity-without-semicolon","expected-numeric-entity-but-got-eof","expected-numeric-entity","named-entity-without-semicolon","expected-named-entity","attributes-in-end-tag","self-closing-flag-on-end-tag","expected-tag-name-but-got-right-bracket","expected-tag-name-but-got-question-mark","expected-tag-name",u.g,"expected-closing-tag-but-got-eof","expected-closing-tag-but-got-char","eof-in-tag-name","expected-attribute-name-but-got-eof","eof-in-attribute-name","invalid-character-in-attribute-name","duplicate-attribute","expected-end-of-tag-name-but-got-eof","expected-attribute-value-but-got-eof",u.A,"equals-in-unquoted-attribute-value",u.V,"invalid-character-after-attribute-name",u.H,"eof-in-attribute-value-double-quote","eof-in-attribute-value-single-quote","eof-in-attribute-value-no-quotes","unexpected-EOF-after-solidus-in-tag",u.B,"expected-dashes-or-doctype",u.d,"unexpected-space-after-double-dash-in-comment","incorrect-comment","eof-in-comment","eof-in-comment-end-dash",u.K,"eof-in-comment-double-dash","eof-in-comment-end-space-state","eof-in-comment-end-bang-state","unexpected-char-in-comment","need-space-after-doctype",u.f,"expected-doctype-name-but-got-eof","eof-in-doctype-name","eof-in-doctype",u.S,"unexpected-end-of-doctype","unexpected-char-in-doctype","eof-in-innerhtml","unexpected-doctype","non-html-root","expected-doctype-but-got-eof","unknown-doctype","expected-doctype-but-got-chars","expected-doctype-but-got-start-tag","expected-doctype-but-got-end-tag","end-tag-after-implied-root","expected-named-closing-tag-but-got-eof","two-heads-are-not-better-than-one","unexpected-end-tag","unexpected-start-tag-out-of-my-head","unexpected-start-tag","missing-end-tag","missing-end-tags","unexpected-start-tag-implies-end-tag","unexpected-start-tag-treated-as","deprecated-tag","unexpected-start-tag-ignored","expected-one-end-tag-but-got-another","end-tag-too-early","end-tag-too-early-named","end-tag-too-early-ignored","adoption-agency-1.1","adoption-agency-1.2","adoption-agency-1.3","unexpected-end-tag-treated-as","no-end-tag","unexpected-implied-end-tag-in-table","unexpected-implied-end-tag-in-table-body","unexpected-char-implies-table-voodoo","unexpected-hidden-input-in-table","unexpected-form-in-table",u.M,"unexpected-end-tag-implies-table-voodoo","unexpected-cell-in-table-body","unexpected-cell-end-tag","unexpected-end-tag-in-table-body","unexpected-implied-end-tag-in-table-row","unexpected-end-tag-in-table-row","unexpected-select-in-select","unexpected-input-in-select","unexpected-start-tag-in-select","unexpected-end-tag-in-select",u.a,u.r,"unexpected-char-after-body","unexpected-start-tag-after-body","unexpected-end-tag-after-body","unexpected-char-in-frameset","unexpected-start-tag-in-frameset",u.q,"unexpected-end-tag-in-frameset","unexpected-char-after-frameset","unexpected-start-tag-after-frameset","unexpected-end-tag-after-frameset","unexpected-end-tag-after-body-innerhtml","expected-eof-but-got-char","expected-eof-but-got-start-tag","expected-eof-but-got-end-tag","eof-in-table","eof-in-select","eof-in-frameset","eof-in-script-in-script","eof-in-foreign-lands","non-void-element-with-trailing-solidus",u.G,"unexpected-end-tag-before-html","undefined-error"]),t.s)
C.bG=new H.v(126,{"null-character":"Null character in input stream, replaced with U+FFFD.","invalid-codepoint":"Invalid codepoint in stream.","incorrectly-placed-solidus":"Solidus (/) incorrectly placed in tag.","incorrect-cr-newline-entity":"Incorrect CR newline entity, replaced with LF.","illegal-windows-1252-entity":"Entity used with illegal number (windows-1252 reference).","cant-convert-numeric-entity":"Numeric entity couldn't be converted to character (codepoint U+%(charAsInt)08x).","illegal-codepoint-for-numeric-entity":"Numeric entity represents an illegal codepoint: U+%(charAsInt)08x.","numeric-entity-without-semicolon":"Numeric entity didn't end with ';'.","expected-numeric-entity-but-got-eof":"Numeric entity expected. Got end of file instead.","expected-numeric-entity":"Numeric entity expected but none found.","named-entity-without-semicolon":"Named entity didn't end with ';'.","expected-named-entity":"Named entity expected. Got none.","attributes-in-end-tag":"End tag contains unexpected attributes.","self-closing-flag-on-end-tag":"End tag contains unexpected self-closing flag.","expected-tag-name-but-got-right-bracket":"Expected tag name. Got '>' instead.","expected-tag-name-but-got-question-mark":"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)","expected-tag-name":"Expected tag name. Got something else instead","expected-closing-tag-but-got-right-bracket":"Expected closing tag. Got '>' instead. Ignoring '</>'.","expected-closing-tag-but-got-eof":"Expected closing tag. Unexpected end of file.","expected-closing-tag-but-got-char":"Expected closing tag. Unexpected character '%(data)s' found.","eof-in-tag-name":"Unexpected end of file in the tag name.","expected-attribute-name-but-got-eof":"Unexpected end of file. Expected attribute name instead.","eof-in-attribute-name":"Unexpected end of file in attribute name.","invalid-character-in-attribute-name":"Invalid character in attribute name","duplicate-attribute":"Dropped duplicate attribute on tag.","expected-end-of-tag-name-but-got-eof":"Unexpected end of file. Expected = or end of tag.","expected-attribute-value-but-got-eof":"Unexpected end of file. Expected attribute value.","expected-attribute-value-but-got-right-bracket":"Expected attribute value. Got '>' instead.","equals-in-unquoted-attribute-value":"Unexpected = in unquoted attribute","unexpected-character-in-unquoted-attribute-value":"Unexpected character in unquoted attribute","invalid-character-after-attribute-name":"Unexpected character after attribute name.","unexpected-character-after-attribute-value":"Unexpected character after attribute value.","eof-in-attribute-value-double-quote":'Unexpected end of file in attribute value (".',"eof-in-attribute-value-single-quote":"Unexpected end of file in attribute value (').","eof-in-attribute-value-no-quotes":"Unexpected end of file in attribute value.","unexpected-EOF-after-solidus-in-tag":"Unexpected end of file in tag. Expected >","unexpected-character-after-soldius-in-tag":"Unexpected character after / in tag. Expected >","expected-dashes-or-doctype":"Expected '--' or 'DOCTYPE'. Not found.","unexpected-bang-after-double-dash-in-comment":"Unexpected ! after -- in comment","unexpected-space-after-double-dash-in-comment":"Unexpected space after -- in comment","incorrect-comment":"Incorrect comment.","eof-in-comment":"Unexpected end of file in comment.","eof-in-comment-end-dash":"Unexpected end of file in comment (-)","unexpected-dash-after-double-dash-in-comment":"Unexpected '-' after '--' found in comment.","eof-in-comment-double-dash":"Unexpected end of file in comment (--).","eof-in-comment-end-space-state":"Unexpected end of file in comment.","eof-in-comment-end-bang-state":"Unexpected end of file in comment.","unexpected-char-in-comment":"Unexpected character in comment found.","need-space-after-doctype":"No space after literal string 'DOCTYPE'.","expected-doctype-name-but-got-right-bracket":"Unexpected > character. Expected DOCTYPE name.","expected-doctype-name-but-got-eof":"Unexpected end of file. Expected DOCTYPE name.","eof-in-doctype-name":"Unexpected end of file in DOCTYPE name.","eof-in-doctype":"Unexpected end of file in DOCTYPE.","expected-space-or-right-bracket-in-doctype":"Expected space or '>'. Got '%(data)s'","unexpected-end-of-doctype":"Unexpected end of DOCTYPE.","unexpected-char-in-doctype":"Unexpected character in DOCTYPE.","eof-in-innerhtml":"XXX innerHTML EOF","unexpected-doctype":"Unexpected DOCTYPE. Ignored.","non-html-root":"html needs to be the first start tag.","expected-doctype-but-got-eof":"Unexpected End of file. Expected DOCTYPE.","unknown-doctype":"Erroneous DOCTYPE.","expected-doctype-but-got-chars":"Unexpected non-space characters. Expected DOCTYPE.","expected-doctype-but-got-start-tag":"Unexpected start tag (%(name)s). Expected DOCTYPE.","expected-doctype-but-got-end-tag":"Unexpected end tag (%(name)s). Expected DOCTYPE.","end-tag-after-implied-root":"Unexpected end tag (%(name)s) after the (implied) root element.","expected-named-closing-tag-but-got-eof":"Unexpected end of file. Expected end tag (%(name)s).","two-heads-are-not-better-than-one":"Unexpected start tag head in existing head. Ignored.","unexpected-end-tag":"Unexpected end tag (%(name)s). Ignored.","unexpected-start-tag-out-of-my-head":"Unexpected start tag (%(name)s) that can be in head. Moved.","unexpected-start-tag":"Unexpected start tag (%(name)s).","missing-end-tag":"Missing end tag (%(name)s).","missing-end-tags":"Missing end tags (%(name)s).","unexpected-start-tag-implies-end-tag":"Unexpected start tag (%(startName)s) implies end tag (%(endName)s).","unexpected-start-tag-treated-as":"Unexpected start tag (%(originalName)s). Treated as %(newName)s.","deprecated-tag":"Unexpected start tag %(name)s. Don't use it!","unexpected-start-tag-ignored":"Unexpected start tag %(name)s. Ignored.","expected-one-end-tag-but-got-another":"Unexpected end tag (%(gotName)s). Missing end tag (%(expectedName)s).","end-tag-too-early":"End tag (%(name)s) seen too early. Expected other end tag.","end-tag-too-early-named":"Unexpected end tag (%(gotName)s). Expected end tag (%(expectedName)s).","end-tag-too-early-ignored":"End tag (%(name)s) seen too early. Ignored.","adoption-agency-1.1":"End tag (%(name)s) violates step 1, paragraph 1 of the adoption agency algorithm.","adoption-agency-1.2":"End tag (%(name)s) violates step 1, paragraph 2 of the adoption agency algorithm.","adoption-agency-1.3":"End tag (%(name)s) violates step 1, paragraph 3 of the adoption agency algorithm.","unexpected-end-tag-treated-as":"Unexpected end tag (%(originalName)s). Treated as %(newName)s.","no-end-tag":"This element (%(name)s) has no end tag.","unexpected-implied-end-tag-in-table":"Unexpected implied end tag (%(name)s) in the table phase.","unexpected-implied-end-tag-in-table-body":"Unexpected implied end tag (%(name)s) in the table body phase.","unexpected-char-implies-table-voodoo":"Unexpected non-space characters in table context caused voodoo mode.","unexpected-hidden-input-in-table":"Unexpected input with type hidden in table context.","unexpected-form-in-table":"Unexpected form in table context.","unexpected-start-tag-implies-table-voodoo":"Unexpected start tag (%(name)s) in table context caused voodoo mode.","unexpected-end-tag-implies-table-voodoo":"Unexpected end tag (%(name)s) in table context caused voodoo mode.","unexpected-cell-in-table-body":"Unexpected table cell start tag (%(name)s) in the table body phase.","unexpected-cell-end-tag":"Got table cell end tag (%(name)s) while required end tags are missing.","unexpected-end-tag-in-table-body":"Unexpected end tag (%(name)s) in the table body phase. Ignored.","unexpected-implied-end-tag-in-table-row":"Unexpected implied end tag (%(name)s) in the table row phase.","unexpected-end-tag-in-table-row":"Unexpected end tag (%(name)s) in the table row phase. Ignored.","unexpected-select-in-select":"Unexpected select start tag in the select phase treated as select end tag.","unexpected-input-in-select":"Unexpected input start tag in the select phase.","unexpected-start-tag-in-select":"Unexpected start tag token (%(name)s in the select phase. Ignored.","unexpected-end-tag-in-select":"Unexpected end tag (%(name)s) in the select phase. Ignored.","unexpected-table-element-start-tag-in-select-in-table":"Unexpected table element start tag (%(name)s) in the select in table phase.","unexpected-table-element-end-tag-in-select-in-table":"Unexpected table element end tag (%(name)s) in the select in table phase.","unexpected-char-after-body":"Unexpected non-space characters in the after body phase.","unexpected-start-tag-after-body":"Unexpected start tag token (%(name)s) in the after body phase.","unexpected-end-tag-after-body":"Unexpected end tag token (%(name)s) in the after body phase.","unexpected-char-in-frameset":"Unepxected characters in the frameset phase. Characters ignored.","unexpected-start-tag-in-frameset":"Unexpected start tag token (%(name)s) in the frameset phase. Ignored.","unexpected-frameset-in-frameset-innerhtml":"Unexpected end tag token (frameset) in the frameset phase (innerHTML).","unexpected-end-tag-in-frameset":"Unexpected end tag token (%(name)s) in the frameset phase. Ignored.","unexpected-char-after-frameset":"Unexpected non-space characters in the after frameset phase. Ignored.","unexpected-start-tag-after-frameset":"Unexpected start tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-frameset":"Unexpected end tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-body-innerhtml":"Unexpected end tag after body(innerHtml)","expected-eof-but-got-char":"Unexpected non-space characters. Expected end of file.","expected-eof-but-got-start-tag":"Unexpected start tag (%(name)s). Expected end of file.","expected-eof-but-got-end-tag":"Unexpected end tag (%(name)s). Expected end of file.","eof-in-table":"Unexpected end of file. Expected table content.","eof-in-select":"Unexpected end of file. Expected select content.","eof-in-frameset":"Unexpected end of file. Expected frameset content.","eof-in-script-in-script":"Unexpected end of file. Expected script content.","eof-in-foreign-lands":"Unexpected end of file. Expected foreign content","non-void-element-with-trailing-solidus":"Trailing solidus not allowed on element %(name)s","unexpected-html-element-in-foreign-content":"Element %(name)s not allowed in a non-html context","unexpected-end-tag-before-html":"Unexpected end tag (%(name)s) before html.","undefined-error":"Undefined error (this sucks and should be fixed)"},C.bc,t.B)
C.bd=H.a(s(["altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","clippath","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","foreignobject","glyphref","lineargradient","radialgradient","textpath"]),t.s)
C.bH=new H.v(36,{altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},C.bd,t.B)
C.bI=new H.c9([0,"\ufffd",13,"\r",128,"\u20ac",129,"\x81",130,"\u201a",131,"\u0192",132,"\u201e",133,"\u2026",134,"\u2020",135,"\u2021",136,"\u02c6",137,"\u2030",138,"\u0160",139,"\u2039",140,"\u0152",141,"\x8d",142,"\u017d",143,"\x8f",144,"\x90",145,"\u2018",146,"\u2019",147,"\u201c",148,"\u201d",149,"\u2022",150,"\u2013",151,"\u2014",152,"\u02dc",153,"\u2122",154,"\u0161",155,"\u203a",156,"\u0153",157,"\x9d",158,"\u017e",159,"\u0178"],H.aO("c9<j,o>"))
C.bj=H.a(s(["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns","xmlns:xlink"]),t.s)
C.aA=new B.aB("xlink","actuate","http://www.w3.org/1999/xlink")
C.aD=new B.aB("xlink","arcrole","http://www.w3.org/1999/xlink")
C.aE=new B.aB("xlink","href","http://www.w3.org/1999/xlink")
C.aC=new B.aB("xlink","role","http://www.w3.org/1999/xlink")
C.aB=new B.aB("xlink","show","http://www.w3.org/1999/xlink")
C.aJ=new B.aB("xlink","title","http://www.w3.org/1999/xlink")
C.aI=new B.aB("xlink","type","http://www.w3.org/1999/xlink")
C.aH=new B.aB("xml","base","http://www.w3.org/XML/1998/namespace")
C.aF=new B.aB("xml","lang","http://www.w3.org/XML/1998/namespace")
C.ay=new B.aB("xml","space","http://www.w3.org/XML/1998/namespace")
C.aG=new B.aB(null,"xmlns","http://www.w3.org/2000/xmlns/")
C.az=new B.aB("xmlns","xlink","http://www.w3.org/2000/xmlns/")
C.c8=new H.v(12,{"xlink:actuate":C.aA,"xlink:arcrole":C.aD,"xlink:href":C.aE,"xlink:role":C.aC,"xlink:show":C.aB,"xlink:title":C.aJ,"xlink:type":C.aI,"xml:base":C.aH,"xml:lang":C.aF,"xml:space":C.ay,xmlns:C.aG,"xmlns:xlink":C.az},C.bj,H.aO("v<o,aB>"))
C.I=new F.de("MessageLevel.severe")
C.ai=new F.de("MessageLevel.warning")
C.ah=new F.de("MessageLevel.info")
C.c9=new H.c9([C.I,"error",C.ai,"warning",C.ah,"info"],t.ha)
C.af=new H.c9([C.I,"\x1b[31m",C.ai,"\x1b[35m",C.ah,"\x1b[32m"],t.ha)
C.H=new H.v(0,{},C.p,H.aO("v<o,M>"))
C.bo=H.a(s([]),t.m)
C.ag=new H.v(0,{},C.bo,H.aO("v<@,@>"))
C.bp=H.a(s(["attributename","attributetype","basefrequency","baseprofile","calcmode","clippathunits","contentscripttype","contentstyletype","diffuseconstant","edgemode","externalresourcesrequired","filterres","filterunits","glyphref","gradienttransform","gradientunits","kernelmatrix","kernelunitlength","keypoints","keysplines","keytimes","lengthadjust","limitingconeangle","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","numoctaves","pathlength","patterncontentunits","patterntransform","patternunits","pointsatx","pointsaty","pointsatz","preservealpha","preserveaspectratio","primitiveunits","refx","refy","repeatcount","repeatdur","requiredextensions","requiredfeatures","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","surfacescale","systemlanguage","tablevalues","targetx","targety","textlength","viewbox","viewtarget","xchannelselector","ychannelselector","zoomandpan"]),t.s)
C.ca=new H.v(62,{attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},C.bp,t.B)
C.bw=H.a(s(["li","dt","dd"]),t.s)
C.bv=H.a(s(["li"]),t.s)
C.ab=H.a(s(["dt","dd"]),t.s)
C.cM=new H.v(3,{li:C.bv,dt:C.ab,dd:C.ab},C.bw,H.aO("v<o,m<o>>"))
C.bD=H.a(s(["437","850","852","855","857","860","861","862","863","865","866","869","ansix341968","ansix341986","arabic","ascii","asmo708","big5","big5hkscs","chinese","cp037","cp1026","cp154","cp367","cp424","cp437","cp500","cp775","cp819","cp850","cp852","cp855","cp857","cp860","cp861","cp862","cp863","cp864","cp865","cp866","cp869","cp936","cpgr","cpis","csascii","csbig5","cseuckr","cseucpkdfmtjapanese","csgb2312","cshproman8","csibm037","csibm1026","csibm424","csibm500","csibm855","csibm857","csibm860","csibm861","csibm863","csibm864","csibm865","csibm866","csibm869","csiso2022jp","csiso2022jp2","csiso2022kr","csiso58gb231280","csisolatin1","csisolatin2","csisolatin3","csisolatin4","csisolatin5","csisolatin6","csisolatinarabic","csisolatincyrillic","csisolatingreek","csisolatinhebrew","cskoi8r","csksc56011987","cspc775baltic","cspc850multilingual","cspc862latinhebrew","cspc8codepage437","cspcp852","csptcp154","csshiftjis","csunicode11utf7","cyrillic","cyrillicasian","ebcdiccpbe","ebcdiccpca","ebcdiccpch","ebcdiccphe","ebcdiccpnl","ebcdiccpus","ebcdiccpwt","ecma114","ecma118","elot928","eucjp","euckr","extendedunixcodepackedformatforjapanese","gb18030","gb2312","gb231280","gbk","greek","greek8","hebrew","hproman8","hzgb2312","ibm037","ibm1026","ibm367","ibm424","ibm437","ibm500","ibm775","ibm819","ibm850","ibm852","ibm855","ibm857","ibm860","ibm861","ibm862","ibm863","ibm864","ibm865","ibm866","ibm869","iso2022jp","iso2022jp2","iso2022kr","iso646irv1991","iso646us","iso88591","iso885910","iso8859101992","iso885911987","iso885913","iso885914","iso8859141998","iso885915","iso885916","iso8859162001","iso88592","iso885921987","iso88593","iso885931988","iso88594","iso885941988","iso88595","iso885951988","iso88596","iso885961987","iso88597","iso885971987","iso88598","iso885981988","iso88599","iso885991989","isoceltic","isoir100","isoir101","isoir109","isoir110","isoir126","isoir127","isoir138","isoir144","isoir148","isoir149","isoir157","isoir199","isoir226","isoir58","isoir6","koi8r","koi8u","korean","ksc5601","ksc56011987","ksc56011989","l1","l10","l2","l3","l4","l5","l6","l8","latin1","latin10","latin2","latin3","latin4","latin5","latin6","latin8","latin9","ms936","mskanji","pt154","ptcp154","r8","roman8","shiftjis","tis620","unicode11utf7","us","usascii","utf16","utf16be","utf16le","utf8","windows1250","windows1251","windows1252","windows1253","windows1254","windows1255","windows1256","windows1257","windows1258","windows936","x-x-big5"]),t.s)
C.cN=new H.v(227,{"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","862":"cp862","863":"cp863","865":"cp865","866":"cp866","869":"cp869",ansix341968:"ascii",ansix341986:"ascii",arabic:"iso8859-6",ascii:"ascii",asmo708:"iso8859-6",big5:"big5",big5hkscs:"big5hkscs",chinese:"gbk",cp037:"cp037",cp1026:"cp1026",cp154:"ptcp154",cp367:"ascii",cp424:"cp424",cp437:"cp437",cp500:"cp500",cp775:"cp775",cp819:"windows-1252",cp850:"cp850",cp852:"cp852",cp855:"cp855",cp857:"cp857",cp860:"cp860",cp861:"cp861",cp862:"cp862",cp863:"cp863",cp864:"cp864",cp865:"cp865",cp866:"cp866",cp869:"cp869",cp936:"gbk",cpgr:"cp869",cpis:"cp861",csascii:"ascii",csbig5:"big5",cseuckr:"cp949",cseucpkdfmtjapanese:"euc_jp",csgb2312:"gbk",cshproman8:"hp-roman8",csibm037:"cp037",csibm1026:"cp1026",csibm424:"cp424",csibm500:"cp500",csibm855:"cp855",csibm857:"cp857",csibm860:"cp860",csibm861:"cp861",csibm863:"cp863",csibm864:"cp864",csibm865:"cp865",csibm866:"cp866",csibm869:"cp869",csiso2022jp:"iso2022_jp",csiso2022jp2:"iso2022_jp_2",csiso2022kr:"iso2022_kr",csiso58gb231280:"gbk",csisolatin1:"windows-1252",csisolatin2:"iso8859-2",csisolatin3:"iso8859-3",csisolatin4:"iso8859-4",csisolatin5:"windows-1254",csisolatin6:"iso8859-10",csisolatinarabic:"iso8859-6",csisolatincyrillic:"iso8859-5",csisolatingreek:"iso8859-7",csisolatinhebrew:"iso8859-8",cskoi8r:"koi8-r",csksc56011987:"cp949",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspc862latinhebrew:"cp862",cspc8codepage437:"cp437",cspcp852:"cp852",csptcp154:"ptcp154",csshiftjis:"shift_jis",csunicode11utf7:"utf-7",cyrillic:"iso8859-5",cyrillicasian:"ptcp154",ebcdiccpbe:"cp500",ebcdiccpca:"cp037",ebcdiccpch:"cp500",ebcdiccphe:"cp424",ebcdiccpnl:"cp037",ebcdiccpus:"cp037",ebcdiccpwt:"cp037",ecma114:"iso8859-6",ecma118:"iso8859-7",elot928:"iso8859-7",eucjp:"euc_jp",euckr:"cp949",extendedunixcodepackedformatforjapanese:"euc_jp",gb18030:"gb18030",gb2312:"gbk",gb231280:"gbk",gbk:"gbk",greek:"iso8859-7",greek8:"iso8859-7",hebrew:"iso8859-8",hproman8:"hp-roman8",hzgb2312:"hz",ibm037:"cp037",ibm1026:"cp1026",ibm367:"ascii",ibm424:"cp424",ibm437:"cp437",ibm500:"cp500",ibm775:"cp775",ibm819:"windows-1252",ibm850:"cp850",ibm852:"cp852",ibm855:"cp855",ibm857:"cp857",ibm860:"cp860",ibm861:"cp861",ibm862:"cp862",ibm863:"cp863",ibm864:"cp864",ibm865:"cp865",ibm866:"cp866",ibm869:"cp869",iso2022jp:"iso2022_jp",iso2022jp2:"iso2022_jp_2",iso2022kr:"iso2022_kr",iso646irv1991:"ascii",iso646us:"ascii",iso88591:"windows-1252",iso885910:"iso8859-10",iso8859101992:"iso8859-10",iso885911987:"windows-1252",iso885913:"iso8859-13",iso885914:"iso8859-14",iso8859141998:"iso8859-14",iso885915:"iso8859-15",iso885916:"iso8859-16",iso8859162001:"iso8859-16",iso88592:"iso8859-2",iso885921987:"iso8859-2",iso88593:"iso8859-3",iso885931988:"iso8859-3",iso88594:"iso8859-4",iso885941988:"iso8859-4",iso88595:"iso8859-5",iso885951988:"iso8859-5",iso88596:"iso8859-6",iso885961987:"iso8859-6",iso88597:"iso8859-7",iso885971987:"iso8859-7",iso88598:"iso8859-8",iso885981988:"iso8859-8",iso88599:"windows-1254",iso885991989:"windows-1254",isoceltic:"iso8859-14",isoir100:"windows-1252",isoir101:"iso8859-2",isoir109:"iso8859-3",isoir110:"iso8859-4",isoir126:"iso8859-7",isoir127:"iso8859-6",isoir138:"iso8859-8",isoir144:"iso8859-5",isoir148:"windows-1254",isoir149:"cp949",isoir157:"iso8859-10",isoir199:"iso8859-14",isoir226:"iso8859-16",isoir58:"gbk",isoir6:"ascii",koi8r:"koi8-r",koi8u:"koi8-u",korean:"cp949",ksc5601:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",l1:"windows-1252",l10:"iso8859-16",l2:"iso8859-2",l3:"iso8859-3",l4:"iso8859-4",l5:"windows-1254",l6:"iso8859-10",l8:"iso8859-14",latin1:"windows-1252",latin10:"iso8859-16",latin2:"iso8859-2",latin3:"iso8859-3",latin4:"iso8859-4",latin5:"windows-1254",latin6:"iso8859-10",latin8:"iso8859-14",latin9:"iso8859-15",ms936:"gbk",mskanji:"shift_jis",pt154:"ptcp154",ptcp154:"ptcp154",r8:"hp-roman8",roman8:"hp-roman8",shiftjis:"shift_jis",tis620:"cp874",unicode11utf7:"utf-7",us:"ascii",usascii:"ascii",utf16:"utf-16",utf16be:"utf-16-be",utf16le:"utf-16-le",utf8:"utf-8",windows1250:"cp1250",windows1251:"cp1251",windows1252:"cp1252",windows1253:"cp1253",windows1254:"cp1254",windows1255:"cp1255",windows1256:"cp1256",windows1257:"cp1257",windows1258:"cp1258",windows936:"gbk","x-x-big5":"big5"},C.bD,t.B)
C.bE=H.a(s(["after","before","first-letter","first-line"]),t.s)
C.cO=new H.v(4,{after:null,before:null,"first-letter":null,"first-line":null},C.bE,H.aO("v<o,am>"))
C.e3=new P.fb(C.cO,H.aO("fb<o>"))
C.e4=new V.hS("TipSide.Start")
C.e5=new V.hS("TipSide.End")
C.e6=H.u_("G")
C.e7=new P.i0(!1)
C.h=new M.e(0,0,0)
C.l=new M.e(0,0,1)
C.J=new M.e(0,1,0)
C.j=new M.e(1,0,0)
C.Y=new M.e(1,1,0)
C.e8=new M.e(1,1,1)
C.Z=new M.e(1,-1,0)
C.q=new M.e(-1,1,0)
C.a_=new M.e(-1,-1,0)
C.ea=new P.dy(null,2)})();(function staticFields(){$.lp=null
$.bV=0
$.dQ=null
$.nv=null
$.oY=null
$.oN=null
$.pb=null
$.lW=null
$.m6=null
$.n7=null
$.dD=null
$.fh=null
$.fi=null
$.mZ=!1
$.ab=C.k
$.bi=H.a([],H.aO("z<G>"))
$.fm=H.r7("messages")
$.mD=P.aX(t.N,H.aO("bZ"))
$.cP=P.aX(t.N,H.aO("aN<o,o>"))
$.iC=P.aX(t.S,H.aO("aN<j,j>"))
$.oy=null
$.lK=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"u6","pm",function(){return H.tA("_$dart_dartClosure")})
s($,"uP","nl",function(){return C.k.k0(new H.md(),H.aO("bm<am>"))})
s($,"un","po",function(){return H.c2(H.kH({
toString:function(){return"$receiver$"}}))})
s($,"uo","pp",function(){return H.c2(H.kH({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"up","pq",function(){return H.c2(H.kH(null))})
s($,"uq","pr",function(){return H.c2(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ut","pu",function(){return H.c2(H.kH(void 0))})
s($,"uu","pv",function(){return H.c2(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"us","pt",function(){return H.c2(H.o_(null))})
s($,"ur","ps",function(){return H.c2(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"uw","px",function(){return H.c2(H.o_(void 0))})
s($,"uv","pw",function(){return H.c2(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"uz","ni",function(){return P.r3()})
s($,"ux","py",function(){return new P.kN().$0()})
s($,"uy","pz",function(){return new P.kM().$0()})
s($,"uA","pA",function(){return H.qo(H.mX(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"uB","nj",function(){return typeof process!="undefined"&&Object.prototype.toString.call(process)=="[object process]"&&process.platform=="win32"})
s($,"uK","ml",function(){return H.me(C.e6)})
s($,"uL","pB",function(){return P.rM()})
r($,"uO","pC",function(){return new Y.lY().$0()})
r($,"u8","dH",function(){var q=new Y.jg()
q.lV()
return q})
s($,"uM","nk",function(){return new M.ja(H.aO("cI").a($.nh()))})
s($,"ui","pn",function(){return new E.hu(P.at("/"),P.at("[^/]$"),P.at("^/"))})
s($,"uk","iI",function(){return new L.i3(P.at("[/\\\\]"),P.at("[^/\\\\]$"),P.at("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),P.at("^[/\\\\](?![/\\\\])"))})
s($,"uj","fn",function(){return new F.hZ(P.at("/"),P.at("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),P.at("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),P.at("^/"))})
s($,"uh","nh",function(){return O.qR()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.aW,DOMError:J.aW,MediaError:J.aW,Navigator:J.aW,NavigatorConcurrentHardware:J.aW,NavigatorUserMediaError:J.aW,OverconstrainedError:J.aW,PositionError:J.aW,GeolocationPositionError:J.aW,SQLError:J.aW,ArrayBufferView:H.hf,Int8Array:H.he,Uint32Array:H.eu,Uint8Array:H.cM,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLBaseElement:W.y,HTMLBodyElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLDivElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLImageElement:W.y,HTMLInputElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableCellElement:W.y,HTMLTableDataCellElement:W.y,HTMLTableHeaderCellElement:W.y,HTMLTableColElement:W.y,HTMLTableElement:W.y,HTMLTableRowElement:W.y,HTMLTableSectionElement:W.y,HTMLTemplateElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,HTMLAnchorElement:W.fw,HTMLAreaElement:W.fz,HTMLCanvasElement:W.cB,CanvasRenderingContext2D:W.dS,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,DOMException:W.je,DOMRectReadOnly:W.dX,SVGAElement:W.r,SVGAnimateElement:W.r,SVGAnimateMotionElement:W.r,SVGAnimateTransformElement:W.r,SVGAnimationElement:W.r,SVGCircleElement:W.r,SVGClipPathElement:W.r,SVGDefsElement:W.r,SVGDescElement:W.r,SVGDiscardElement:W.r,SVGEllipseElement:W.r,SVGFEBlendElement:W.r,SVGFEColorMatrixElement:W.r,SVGFEComponentTransferElement:W.r,SVGFECompositeElement:W.r,SVGFEConvolveMatrixElement:W.r,SVGFEDiffuseLightingElement:W.r,SVGFEDisplacementMapElement:W.r,SVGFEDistantLightElement:W.r,SVGFEFloodElement:W.r,SVGFEFuncAElement:W.r,SVGFEFuncBElement:W.r,SVGFEFuncGElement:W.r,SVGFEFuncRElement:W.r,SVGFEGaussianBlurElement:W.r,SVGFEImageElement:W.r,SVGFEMergeElement:W.r,SVGFEMergeNodeElement:W.r,SVGFEMorphologyElement:W.r,SVGFEOffsetElement:W.r,SVGFEPointLightElement:W.r,SVGFESpecularLightingElement:W.r,SVGFESpotLightElement:W.r,SVGFETileElement:W.r,SVGFETurbulenceElement:W.r,SVGFilterElement:W.r,SVGForeignObjectElement:W.r,SVGGElement:W.r,SVGGeometryElement:W.r,SVGGraphicsElement:W.r,SVGImageElement:W.r,SVGLineElement:W.r,SVGLinearGradientElement:W.r,SVGMarkerElement:W.r,SVGMaskElement:W.r,SVGMetadataElement:W.r,SVGPathElement:W.r,SVGPatternElement:W.r,SVGPolygonElement:W.r,SVGPolylineElement:W.r,SVGRadialGradientElement:W.r,SVGRectElement:W.r,SVGScriptElement:W.r,SVGSetElement:W.r,SVGStopElement:W.r,SVGStyleElement:W.r,SVGElement:W.r,SVGSVGElement:W.r,SVGSwitchElement:W.r,SVGSymbolElement:W.r,SVGTSpanElement:W.r,SVGTextContentElement:W.r,SVGTextElement:W.r,SVGTextPathElement:W.r,SVGTextPositioningElement:W.r,SVGTitleElement:W.r,SVGUseElement:W.r,SVGViewElement:W.r,SVGGradientElement:W.r,SVGComponentTransferFunctionElement:W.r,SVGFEDropShadowElement:W.r,SVGMPathElement:W.r,Element:W.r,AbortPaymentEvent:W.u,AnimationEvent:W.u,AnimationPlaybackEvent:W.u,ApplicationCacheErrorEvent:W.u,BackgroundFetchClickEvent:W.u,BackgroundFetchEvent:W.u,BackgroundFetchFailEvent:W.u,BackgroundFetchedEvent:W.u,BeforeInstallPromptEvent:W.u,BeforeUnloadEvent:W.u,BlobEvent:W.u,CanMakePaymentEvent:W.u,ClipboardEvent:W.u,CloseEvent:W.u,CustomEvent:W.u,DeviceMotionEvent:W.u,DeviceOrientationEvent:W.u,ErrorEvent:W.u,ExtendableEvent:W.u,ExtendableMessageEvent:W.u,FetchEvent:W.u,FontFaceSetLoadEvent:W.u,ForeignFetchEvent:W.u,GamepadEvent:W.u,HashChangeEvent:W.u,InstallEvent:W.u,MediaEncryptedEvent:W.u,MediaKeyMessageEvent:W.u,MediaQueryListEvent:W.u,MediaStreamEvent:W.u,MediaStreamTrackEvent:W.u,MessageEvent:W.u,MIDIConnectionEvent:W.u,MIDIMessageEvent:W.u,MutationEvent:W.u,NotificationEvent:W.u,PageTransitionEvent:W.u,PaymentRequestEvent:W.u,PaymentRequestUpdateEvent:W.u,PopStateEvent:W.u,PresentationConnectionAvailableEvent:W.u,PresentationConnectionCloseEvent:W.u,ProgressEvent:W.u,PromiseRejectionEvent:W.u,PushEvent:W.u,RTCDataChannelEvent:W.u,RTCDTMFToneChangeEvent:W.u,RTCPeerConnectionIceEvent:W.u,RTCTrackEvent:W.u,SecurityPolicyViolationEvent:W.u,SensorErrorEvent:W.u,SpeechRecognitionError:W.u,SpeechRecognitionEvent:W.u,SpeechSynthesisEvent:W.u,StorageEvent:W.u,SyncEvent:W.u,TrackEvent:W.u,TransitionEvent:W.u,WebKitTransitionEvent:W.u,VRDeviceEvent:W.u,VRDisplayEvent:W.u,VRSessionEvent:W.u,MojoInterfaceRequestEvent:W.u,ResourceProgressEvent:W.u,USBConnectionEvent:W.u,IDBVersionChangeEvent:W.u,AudioProcessingEvent:W.u,OfflineAudioCompletionEvent:W.u,WebGLContextEvent:W.u,Event:W.u,InputEvent:W.u,SubmitEvent:W.u,EventTarget:W.aV,HTMLFormElement:W.fW,MouseEvent:W.bb,DragEvent:W.bb,PointerEvent:W.bb,WheelEvent:W.bb,Document:W.b7,DocumentFragment:W.b7,HTMLDocument:W.b7,ShadowRoot:W.b7,XMLDocument:W.b7,Attr:W.b7,DocumentType:W.b7,Node:W.b7,Path2D:W.hq,HTMLSelectElement:W.hD,CompositionEvent:W.bA,FocusEvent:W.bA,KeyboardEvent:W.bA,TextEvent:W.bA,TouchEvent:W.bA,UIEvent:W.bA,Window:W.dv,DOMWindow:W.dv,ClientRect:W.eU,DOMRect:W.eU})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SQLError:true,ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})
H.df.$nativeSuperclassTag="ArrayBufferView"
H.f1.$nativeSuperclassTag="ArrayBufferView"
H.f2.$nativeSuperclassTag="ArrayBufferView"
H.et.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=U.tM
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=example.dart.js.map
