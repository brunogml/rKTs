function Tib(id) {
	var str1 = document.getElementById(id).innerHTML;
	var str2 = str1.replace(/\+v/g, "\u0fad");
	str2 =  str2.replace(/\+w/g, "\u0fad");
	str2 =  str2.replace(/\+tsh/g, "\u0faa");
	str2 =  str2.replace(/\+kh/g, "\u0f91");
	str2 =  str2.replace(/\+ng/g, "\u0f94");
	str2 =  str2.replace(/\+ch/g, "\u0f96");
	str2 =  str2.replace(/\+ny/g, "\u0f99");
	str2 =  str2.replace(/\+Th/g, "\u0f9b");
	str2 =  str2.replace(/\+th/g, "\u0fa0");
	str2 =  str2.replace(/\+ph/g, "\u0fa5");
	str2 =  str2.replace(/\+ts/g, "\u0fa9");
	str2 =  str2.replace(/\+dz/g, "\u0fab");
	str2 =  str2.replace(/\+zh/g, "\u0fae");
	str2 =  str2.replace(/\+sh/g, "\u0fb4");
	str2 =  str2.replace(/\+Sh/g, "\u0fb5");
	str2 =  str2.replace(/\+k/g, "\u0f90");
	str2 =  str2.replace(/\+g/g, "\u0f92");
	str2 =  str2.replace(/\+c/g, "\u0f95");
	str2 =  str2.replace(/\+j/g, "\u0f97");
	str2 =  str2.replace(/\+T/g, "\u0f9a");
	str2 =  str2.replace(/\+D/g, "\u0f9c");
	str2 =  str2.replace(/\+N/g, "\u0f9e");
	str2 =  str2.replace(/\+t/g, "\u0f9f");
	str2 =  str2.replace(/\+d/g, "\u0fa1");
	str2 =  str2.replace(/\+n/g, "\u0fa3");
	str2 =  str2.replace(/\+p/g, "\u0fa4");
	str2 =  str2.replace(/\+b/g, "\u0fa6");
	str2 =  str2.replace(/\+m/g, "\u0fa8");
	str2 =  str2.replace(/\+z/g, "\u0faf");
	str2 =  str2.replace(/\+y/g, "\u0fb1");
	str2 =  str2.replace(/\+r/g, "\u0fb2");
	str2 =  str2.replace(/\+l/g, "\u0fb3");
	str2 =  str2.replace(/\+s/g, "\u0fb6");
	str2 =  str2.replace(/\+h/g, "\u0fb7");
	str2 =  str2.replace(/\+Y/g, "\u0fbb");
	str2 =  str2.replace(/\+R/g, "\u0fbc");
	
	str2 =  str2.replace(/khy/g, "\u0f41\u0fb1");
	str2 =  str2.replace(/khr/g, "\u0f41\u0fb2");
	str2 =  str2.replace(/kh/g, "\u0f41");

	str2 =  str2.replace(/skr/g, "\u0f66\u0f90\u0fb2");
	str2 =  str2.replace(/sky/g, "\u0f66\u0f90\u0fb1");
	str2 =  str2.replace(/rky/g, "\u0f62\u0f90\u0fb1");
	str2 =  str2.replace(/rk/g, "\u0f62\u0f90");
	str2 =  str2.replace(/sk/g, "\u0f66\u0f90");
	str2 =  str2.replace(/lk/g, "\u0f63\u0f90");
	str2 =  str2.replace(/ky/g, "\u0f40\u0fb1");
	str2 =  str2.replace(/kr/g, "\u0f40\u0fb2");
	str2 =  str2.replace(/kl/g, "\u0f40\u0fb3");
	str2 =  str2.replace(/k/g, "\u0f40");

	str2 =  str2.replace(/sng/g, "\u0f66\u0f94");
	str2 =  str2.replace(/rng/g, "\u0f62\u0f94");
	str2 =  str2.replace(/lng/g, "\u0f63\u0f94");
	str2 =  str2.replace(/ng/g, "\u0f44");

	str2 =  str2.replace(/sgr/g, "\u0f66\u0f92\u0fb2");
	str2 =  str2.replace(/sgy/g, "\u0f66\u0f92\u0fb1");
	str2 =  str2.replace(/rgy/g, "\u0f62\u0f92\u0fb1");
	str2 =  str2.replace(/rg/g, "\u0f62\u0f92");
	str2 =  str2.replace(/sg/g, "\u0f66\u0f92");
	str2 =  str2.replace(/lg/g, "\u0f63\u0f92");
	str2 =  str2.replace(/gy/g, "\u0f42\u0fb1");
	str2 =  str2.replace(/gr/g, "\u0f42\u0fb2");
	str2 =  str2.replace(/gl/g, "\u0f42\u0fb3");
	str2 =  str2.replace(/g/g, "\u0f42");
	
	str2 =  str2.replace(/ch/g, "\u0f46");
	
	str2 =  str2.replace(/lc/g, "\u0f63\u0f95");
	str2 =  str2.replace(/c/g, "\u0f45");
	
	str2 =  str2.replace(/lj/g, "\u0f63\u0f97");
	str2 =  str2.replace(/rj/g, "\u0f62\u0f97");
	str2 =  str2.replace(/j/g, "\u0f47");
	
	str2 =  str2.replace(/tsh/g, "\u0f5a");
	
	str2 =  str2.replace(/rts/g, "\u0f62\u0fa9");
	str2 =  str2.replace(/sts/g, "\u0f66\u0fa9");
	str2 =  str2.replace(/ts/g, "\u0f59");
	
	str2 =  str2.replace(/rdz/g, "\u0f62\u0fab");
	str2 =  str2.replace(/dzr/g, "\u0f5b\u0fb2");
	str2 =  str2.replace(/dz/g, "\u0f5b");
	
	str2 =  str2.replace(/rny/g, "\u0f62\u0f99");
	str2 =  str2.replace(/sny/g, "\u0f66\u0f99");
	str2 =  str2.replace(/ny/g, "\u0f49");
	
	str2 =  str2.replace(/rth/g, "\u0f62\u0fa0");
	str2 =  str2.replace(/sth/g, "\u0f66\u0fa0");
	str2 =  str2.replace(/th/g, "\u0f50");
	
	str2 =  str2.replace(/str/g, "\u0f66\u0f9f\u0fb2");
	str2 =  str2.replace(/sty/g, "\u0f66\u0f9f\u0fb1");
	str2 =  str2.replace(/rty/g, "\u0f62\u0f9f\u0fb1");
	str2 =  str2.replace(/st/g, "\u0f66\u0f9f");
	str2 =  str2.replace(/rt/g, "\u0f62\u0f9f");
	str2 =  str2.replace(/lt/g, "\u0f63\u0f9f");
	str2 =  str2.replace(/ty/g, "\u0f4f\u0fb1");
	str2 =  str2.replace(/tv/g, "\u0f4f\u0fad");
	str2 =  str2.replace(/tw/g, "\u0f4f\u0fad");
	str2 =  str2.replace(/tr/g, "\u0f4f\u0fb2");
	str2 =  str2.replace(/t/g, "\u0f4f");
	
	str2 =  str2.replace(/T/g, "\u0f4a");
	
	str2 =  str2.replace(/sd/g, "\u0f66\u0fa1");
	str2 =  str2.replace(/rd/g, "\u0f62\u0fa1");
	str2 =  str2.replace(/ld/g, "\u0f63\u0fa1");
	str2 =  str2.replace(/dy/g, "\u0f51\u0fb1");
	str2 =  str2.replace(/dv/g, "\u0f51\u0fad");
	str2 =  str2.replace(/dw/g, "\u0f51\u0fad");
	str2 =  str2.replace(/dr/g, "\u0f51\u0fb2");
	str2 =  str2.replace(/d/g, "\u0f51");
	
	str2 =  str2.replace(/D/g, "\u0f4c");
	
	str2 =  str2.replace(/sn/g, "\u0f66\u0fa3");
	str2 =  str2.replace(/rn/g, "\u0f62\u0fa3");
	str2 =  str2.replace(/n/g, "\u0f53");
	
	str2 =  str2.replace(/N/g, "\u0f4e");
	
	str2 =  str2.replace(/phy/g, "\u0f55\u0fb1");
	str2 =  str2.replace(/phr/g, "\u0f55\u0fb2");
	str2 =  str2.replace(/ph/g, "\u0f55");
	
	str2 =  str2.replace(/spr/g, "\u0f66\u0fa4\u0fb2");
	str2 =  str2.replace(/spy/g, "\u0f66\u0fa4\u0fb1");
	str2 =  str2.replace(/sp/g, "\u0f66\u0fa4");
	str2 =  str2.replace(/rp/g, "\u0f62\u0fa4");
	str2 =  str2.replace(/lp/g, "\u0f63\u0fa4");
	str2 =  str2.replace(/py/g, "\u0f54\u0fb1");
	str2 =  str2.replace(/pr/g, "\u0f54\u0fb2");
	str2 =  str2.replace(/p/g, "\u0f54");
	
	str2 =  str2.replace(/sbr/g, "\u0f66\u0fa6\u0fb2");
	str2 =  str2.replace(/sby/g, "\u0f66\u0fa6\u0fb1");
	str2 =  str2.replace(/rby/g, "\u0f62\u0fa6\u0fb1");
	str2 =  str2.replace(/sb/g, "\u0f66\u0fa6");
	str2 =  str2.replace(/rb/g, "\u0f62\u0fa6");
	str2 =  str2.replace(/lb/g, "\u0f63\u0fa6");
	str2 =  str2.replace(/by/g, "\u0f56\u0fb1");
	str2 =  str2.replace(/br/g, "\u0f56\u0fb2");
	str2 =  str2.replace(/bl/g, "\u0f56\u0fb3");
	str2 =  str2.replace(/b/g, "\u0f56");
	
	str2 =  str2.replace(/rm/g, "\u0f62\u0fa8");
	str2 =  str2.replace(/my/g, "\u0f58\u0fb1");
	str2 =  str2.replace(/mr/g, "\u0f58\u0fb2");
	str2 =  str2.replace(/m/g, "\u0f58");
	
	str2 =  str2.replace(/M/g, "\u0f7e");
	str2 =  str2.replace(/~M/g, "\u0f83");
	
	str2 =  str2.replace(/\'/g, "\u0f60");
	
	str2 =  str2.replace(/w/g, "\u0f5d");
	
	str2 =  str2.replace(/zh/g, "\u0f5e");
	
	str2 =  str2.replace(/zl/g, "\u0f5f\u0fb3");
	str2 =  str2.replace(/z/g, "\u0f5f");
	
	str2 =  str2.replace(/sh/g, "\u0f64");
	
	str2 =  str2.replace(/Sh/g, "\u0f65");
	
	str2 =  str2.replace(/sy/g, "\u0f66\u0fb1");
	str2 =  str2.replace(/sr/g, "\u0f66\u0fb2");
	str2 =  str2.replace(/sl/g, "\u0f66\u0fb3");
	str2 =  str2.replace(/s/g, "\u0f66");
	
	str2 =  str2.replace(/ly/g, "\u0f63\u0fb1");
	str2 =  str2.replace(/lh/g, "\u0f63\u0fb7");
	str2 =  str2.replace(/l/g, "\u0f63");
	
	str2 =  str2.replace(/h/g, "\u0f67");
		
	str2 =  str2.replace(/H/g, "\u0f7f");
	
	str2 =  str2.replace(/ry/g, "\u0f62\u0fb1");
	str2 =  str2.replace(/r/g, "\u0f62");
	
	str2 =  str2.replace(/y/g, "\u0f61");
	
	
	str2 =  str2.replace(/A/g, "\u0f71");
	str2 =  str2.replace(/ai/g, "\u0f7b");
	str2 =  str2.replace(/au/g, "\u0f7d");
	str2 =  str2.replace(/\-i/g, "\u0f80");
	str2 =  str2.replace(/\-I/g, "\u0f81");
	str2 =  str2.replace(/i/g, "\u0f72");
	str2 =  str2.replace(/I/g, "\u0f73");
	str2 =  str2.replace(/u/g, "\u0f74");
	str2 =  str2.replace(/U/g, "\u0f75");
	str2 =  str2.replace(/e/g, "\u0f7a");
	str2 =  str2.replace(/o/g, "\u0f7c");
	str2 =  str2.replace(/a/g, "");
	
	str2 =  str2.replace(/ /g, "\u0f0b");
	str2 =  str2.replace(/\//g, "\u0f0d ");
	str2 =  str2.replace(/ \u0f0b/g, " ");
	

	document.getElementById(id).innerHTML = str2;
  document.getElementById(id).style.fontSize = "xx-large";
}
function wylie() {
  location.reload();
}