import{L as M}from"./ApplicationLogo.35028a5f.js";import{i as P,s as D,l as _,h as C,o as u,g as v,d as e,r as f,j as w,v as $,a as r,w as o,n as c,b as d,T as N,c as x,L as b,f as a,t as y,k as B}from"./app.313367a8.js";const j={class:"relative"},A={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(n){const s=n,t=g=>{l.value&&g.key==="Escape"&&(l.value=!1)};P(()=>document.addEventListener("keydown",t)),D(()=>document.removeEventListener("keydown",t));const i=_(()=>({48:"w-48"})[s.width.toString()]),m=_(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=C(!1);return(g,h)=>(u(),v("div",j,[e("div",{onClick:h[0]||(h[0]=k=>l.value=!l.value)},[f(g.$slots,"trigger")]),w(e("div",{class:"fixed inset-0 z-40",onClick:h[1]||(h[1]=k=>l.value=!1)},null,512),[[$,l.value]]),r(N,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[w(e("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[d(i),d(m)]]),style:{display:"none"},onClick:h[2]||(h[2]=k=>l.value=!1)},[e("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[f(g.$slots,"content")],2)],2),[[$,l.value]])]),_:3})]))}},E={__name:"DropdownLink",setup(n){return(s,t)=>(u(),x(d(b),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[f(s.$slots,"default")]),_:3}))}},p={__name:"NavLink",props:["href","active"],setup(n){const s=n,t=_(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(u(),x(d(b),{href:n.href,class:c(d(t))},{default:o(()=>[f(i.$slots,"default")]),_:3},8,["href","class"]))}},L={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const s=n,t=_(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(u(),x(d(b),{href:n.href,class:c(d(t))},{default:o(()=>[f(i.$slots,"default")]),_:3},8,["href","class"]))}},z={class:"min-h-screen bg-gray-100"},I={class:"bg-white border-b border-gray-100"},S={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},V={class:"flex justify-between h-16"},O={class:"flex"},T={class:"shrink-0 flex items-center"},R={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},U=a(" Dashboard "),q=a(" My Pokemons "),F=a(" Profile "),G={class:"hidden sm:flex sm:items-center sm:ml-6"},H={class:"ml-3 relative"},J={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Q=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),W=a(" Log Out "),X={class:"-mr-2 flex items-center sm:hidden"},Y={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Z={class:"pt-2 pb-3 space-y-1"},ee=a(" Dashboard "),te=a(" Pokemon List "),se=a(" Profile "),oe={class:"pt-4 pb-1 border-t border-gray-200"},re={class:"px-4"},ne={class:"font-medium text-base text-gray-800"},ae={class:"font-medium text-sm text-gray-500"},ie={class:"mt-3 space-y-1"},le=a(" Log Out "),de={key:0,class:"bg-white shadow"},ue={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},he={__name:"Authenticated",setup(n){const s=C(!1);return(t,i)=>(u(),v("div",null,[e("div",z,[e("nav",I,[e("div",S,[e("div",V,[e("div",O,[e("div",T,[r(d(b),{href:t.route("dashboard")},{default:o(()=>[r(M,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",R,[r(p,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[U]),_:1},8,["href","active"]),r(p,{href:t.route("pokeAPI"),active:t.route().current("pokeAPI")},{default:o(()=>[q]),_:1},8,["href","active"]),r(p,{href:t.route("profile"),active:t.route().current("profile")},{default:o(()=>[F]),_:1},8,["href","active"])])]),e("div",G,[e("div",H,[r(A,{align:"right",width:"48"},{trigger:o(()=>[e("span",J,[e("button",K,[a(y(t.$page.props.auth.user.name)+" ",1),Q])])]),content:o(()=>[r(E,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[W]),_:1},8,["href"])]),_:1})])]),e("div",X,[e("button",{onClick:i[0]||(i[0]=m=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(u(),v("svg",Y,[e("path",{class:c({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:c({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:c([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",Z,[r(L,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[ee]),_:1},8,["href","active"]),r(p,{href:t.route("pokeAPI"),active:t.route().current("pokeAPI")},{default:o(()=>[te]),_:1},8,["href","active"]),r(p,{href:t.route("profile"),active:t.route().current("profile")},{default:o(()=>[se]),_:1},8,["href","active"])]),e("div",oe,[e("div",re,[e("div",ne,y(t.$page.props.auth.user.name),1),e("div",ae,y(t.$page.props.auth.user.email),1)]),e("div",ie,[r(L,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[le]),_:1},8,["href"])])])],2)]),t.$slots.header?(u(),v("header",de,[e("div",ue,[f(t.$slots,"header")])])):B("",!0),e("main",null,[f(t.$slots,"default")])])]))}};export{he as _};
