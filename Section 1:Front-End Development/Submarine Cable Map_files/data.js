google.maps.__gjsload__('data', function(_){var eAa=function(a){const b=[a[0]];let c=a[0].lng();for(let d=1,e=_.Hi(a);d<e;++d)c=_.Li(a[d].lng(),c-180,c+180),b.push(new _.rj(a[d].lat(),c,!0));return b},cO=function(a,b){if(b)return a=b.fromLatLngToPoint(a),[a.x,a.y,-1];b=_.tj(a);a=_.uj(a);return[Math.cos(b)*Math.cos(a),Math.cos(b)*Math.sin(a),Math.sin(b)]},fAa=function(a,b,c,d){a=[cO(a,d),cO(b,d),cO(c,d)];return 0<a[0][0]*(a[1][1]*a[2][2]-a[2][1]*a[1][2])+a[1][0]*(a[2][1]*a[0][2]-a[0][1]*a[2][2])+a[2][0]*(a[0][1]*a[1][2]-a[1][1]*a[0][2])},gAa=
function(a,b=null){let c=null,d=[];_.Kb(a,f=>{f.equals(c)||(c=f,d.push(c))});const e=_.Hi(d);d.push(a[0]);d=eAa(d);a=Math.round((d[e].lng()-d[0].lng())/360);if(0!==a)return 0<a;a=-1;for(let f=0;f<e;f++)d[f].lng()<d[f+1].lng()&&(-1===a||d[f].lng()<d[a].lng())&&(a=f);return fAa(d[_.Li(a-1,0,e)],d[_.Li(a,0,e)],d[_.Li(a+1,0,e)],b)},hAa=function(a,b){if(a instanceof _.rj)b.wy(a);else switch(a.getType()){case "Point":b.wy(a.get());break;case "LineString":b.ty(a.getArray());break;case "Polygon":a=_.Ni(a.getArray(),
function(e){return e.getArray()});b.rM(a);break;case "LinearRing":a=a.getArray();2<=a.length&&a.push(a[0]);b.ty(a);break;case "MultiPoint":case "MultiLineString":case "MultiPolygon":case "GeometryCollection":for(var c=0,d=a.getLength();c<d;++c)hAa(a.getAt(c),b)}},iAa=function(a,b){if(!(1>=a.length))for(var c=gAa(a[0],b),d=1;d<a.length;++d)gAa(a[d],b)==c&&a[d].reverse()},dO=function(a,b,c){this.h=a;this.s=b;this.o=c||null;this.l=null;this.g=[];this.i=null;var d=new _.Hm(this.C,0,this);this.m=function(){d.start()}},
jAa=function(a,b,c){const d=b instanceof _.$n?b:new _.$n;b instanceof _.$n||(eO(b),fO(a,d));d.setPath(c);_.Kb(["set_at","insert_at","remove_at"],function(e){_.bk(d.getPath(),e,a.m)});return d},kAa=function(a,b,c){b instanceof _.Zn||(eO(b),b=new _.Zn,fO(a,b));var d=a.h.getProjection();iAa(c,d);b.setPaths(c);_.Kb(["set_at","insert_at","remove_at"],e=>{b.getPaths().forEach(f=>{_.bk(f,e,a.m)})});return b},fO=function(a,b){b.set("map",a.h);lAa(a,b);var c=a.s;_.Kb(_.Xk,function(d){_.bk(b,d,function(e){c(d,
e)})})},eO=function(a){a&&a.set("map",null)},lAa=function(a,b){a.l&&_.Kb(mAa,function(c){b.set(c,a.l[c])})},gO=function(a,b,c,d){this.Ea=new _.Hm(()=>{this.h.setStyle(nAa(this))},0);this.m=b;b=b.getGeometry();this.g=c;this.l=d;this.h=a;a.setStyle(nAa(this));a.setGeometry(b);this.i=!1},hO=function(a){a.i||_.Im(a.Ea)},nAa=function(a){var b={};if("function"==typeof a.g){a.i=!0;try{_.Ji(b,a.g.call(null,a.m))}finally{a.i=!1}}else a.g&&_.Ji(b,a.g);a.l&&_.Ji(b,a.l);return b},pAa=function(a,b,c,d,e){a=new dO(a,
function(f,h){_.ok(e,f,new oAa(h.latLng,b,h.domEvent))},function(f){b.setGeometry(f)});return new gO(a,b,c,d)},qAa=function(a){_.bk(a.i,"changed",function(b){const c=a.g[b];c&&c.overrideStyle(a.i.get(b))})},rAa=function(a){a.l()&&(a.h.forEach((0,_.ta)(a.o,a)),a.m=[_.bk(a.h,"addfeature",function(b){a.o(b.feature)}),_.bk(a.h,"removefeature",function(b){a.C(_.rk(b.feature))}),_.bk(a.h,"setgeometry",function(b){(b=a.g[_.rk(b.feature)])&&b.h.setGeometry(b.m.getGeometry())}),_.bk(a.h,"setproperty",function(b){(b=
a.g[_.rk(b.feature)])&&hO(b)}),_.bk(a.h,"removeproperty",function(b){(b=a.g[_.rk(b.feature)])&&hO(b)})])},iO=function(a){if(_.wj(a))return[a.lng(),a.lat()];if(a instanceof _.zj)return iO(a.get());const b=a.getArray();a instanceof _.Ek&&b.push(b[0]);return _.Ni(b,iO)},sAa=function(a){return null==a?null:a instanceof _.Bk?{type:"GeometryCollection",geometries:_.Ni(a.getArray(),sAa)}:{type:a.getType(),coordinates:iO(a)}},tAa=function(a){const b={};a.forEachProperty(function(d,e){b[e]=d});const c={type:"Feature",
geometry:sAa(a.getGeometry()),properties:b};(a=a.getId())&&(c.id=a);return c},uAa=function(a){const b=[];a.forEach(function(c){b.push(tAa(c))});return{type:"FeatureCollection",features:b}},jO=function(){},mAa="animation clickable cursor fillColor fillOpacity draggable editable geodesic icon icons label opacity optimized shape strokeColor strokeOpacity strokeWeight title visible zIndex".split(" ");
dO.prototype.setStyle=function(a){var b=this;this.l=a;_.Kb(this.g,function(c){lAa(b,c)});if(a.draggable||a.editable)_.il(this.h,"Le"),_.gl(this.h,148236)};dO.prototype.C=function(){this.i=_.Vua(this.g);this.o&&this.o(this.i)};
dO.prototype.setGeometry=function(a){var b=this,c=0;if(a!==b.i){(b.i=a)&&hAa(a,{wy:function(d){var e=b.g,f=c,h=b.g[c];h instanceof _.El||(eO(h),h=new _.El,fO(b,h),_.bk(h,"drag",b.m));h.setPosition(d);e[f]=h;c++},ty:function(d){b.g[c]=jAa(b,b.g[c],d);c++},rM:function(d){b.g[c]=kAa(b,b.g[c],d);c++}});for(a=c;c<this.g.length;c++)eO(this.g[c]);this.g.length=a}};var oAa=class extends _.bC{constructor(a,b,c){super(a,c);this.feature=b}};_.Da(gO,_.sk);gO.prototype.release=function(){this.h.setGeometry(null)};gO.prototype.setStyle=function(a){this.g=a;hO(this)};gO.prototype.overrideStyle=function(a){this.l=a;hO(this)};var kO=class extends _.sk{constructor(a,b){super();this.m=[];this.h=a;this.i=b;this.g={};qAa(this)}map_changed(){_.Kb(this.m,_.dk);this.m=[];_.Ii(this.g,(0,_.ta)(this.C,this));rAa(this);const a=this.l();a&&(_.il(a,"La"),_.gl(a,148235))}style_changed(){const a=this.s();_.Ii(this.g,function(b,c){c.setStyle(a)})}o(a){const b=this.l();b&&(this.g[_.rk(a)]=pAa(b,a,this.s(),this.i.get(_.rk(a)),this))}C(a){const b=this.g[a];b&&(delete this.g[a],b.release())}};kO.prototype.l=_.Uk("map");kO.prototype.s=_.Uk("style");jO.prototype.UA=function(a,b,c){var d=new kO(b,c);d.bindTo("style",a);d.bindTo("map",a);_.Kb(_.Xk,function(e){_.nk(d,e,a)})};jO.prototype.qI=function(a,b,c,d){_.Yua(b,{Jb:function(e){e=_.Kk(a,e,c);d&&d(e)},hg:function(e,f){1==e&&f&&_.Ui("Error parsing "+b+": "+f)},yv:!0})};jO.prototype.kI=function(a,b){b(uAa(a))};jO.prototype.lI=function(a,b){b(tAa(a))};_.Tj("data",new jO);});
