(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8915:(e,t,a)=>{Promise.resolve().then(a.bind(a,6254))},6254:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var r=a(5155),s=a(9827),l=function(e){return e.MAP="MapOnly",e.TABLE="DataTable",e.BOTH="Both",e}({});let n=(0,s.v)(e=>({mode:"MapOnly",setMode:t=>e({mode:t}),mapData:[],updateMap:async()=>{e({mapData:await fetch("/data/world-data.json").then(e=>e.json())})}}));var i=a(2115),o=a(2317),d=a(1027),c=a(3463),u=a(9795);function f(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,u.QP)((0,c.$)(t))}let m=(0,d.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),h=i.forwardRef((e,t)=>{let{className:a,variant:s,size:l,asChild:n=!1,...i}=e,d=n?o.DX:"button";return(0,r.jsx)(d,{className:f(m({variant:s,size:l,className:a})),ref:t,...i})});h.displayName="Button";let x=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:f("w-full caption-bottom text-sm",a),...s})})});x.displayName="Table";let v=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:f("[&_tr]:border-b",a),...s})});v.displayName="TableHeader";let b=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:f("[&_tr:last-child]:border-0",a),...s})});b.displayName="TableBody",i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:f("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let g=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:f("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});g.displayName="TableRow";let p=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:f("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...s})});p.displayName="TableHead";let j=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:f("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...s})});j.displayName="TableCell",i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:f("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption";var y=a(9789),w=a(9083),N=a(1349);let k=[{accessorKey:"name",header:"Country"},{accessorKey:"value",header:e=>{let{column:t}=e;return(0,r.jsxs)(h,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Uptake outcome",(0,r.jsx)(N.A,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e;return"".concat(t.getValue("value"),"%")}},{accessorKey:"details",cell:e=>{let{row:t}=e;return t.getValue("details").desc},header:"desc"}],T=()=>{var e;let t=n(e=>e.mode===l.TABLE||e.mode===l.BOTH),a=n(e=>e.mapData),[s,o]=(0,i.useState)([]),d=(0,y.N4)({columns:k,data:a,getCoreRowModel:(0,w.HT)(),onSortingChange:o,getSortedRowModel:(0,w.h5)(),state:{sorting:s}});return t?(0,r.jsx)("div",{className:"h-full grow shrink basis-0 p-4 ",children:(0,r.jsx)("div",{className:"rounded-md border",children:(0,r.jsxs)(x,{children:[(0,r.jsx)(v,{children:d.getHeaderGroups().map(e=>(0,r.jsx)(g,{children:e.headers.map(e=>(0,r.jsx)(p,{children:e.isPlaceholder?null:(0,y.Kv)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(b,{children:(null===(e=d.getRowModel().rows)||void 0===e?void 0:e.length)?d.getRowModel().rows.map(e=>(0,r.jsx)(g,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(j,{children:(0,y.Kv)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(g,{children:(0,r.jsx)(j,{colSpan:k.length,className:"h-24 text-center",children:"No results."})})})]})})}):null};var R=a(8914);let C=R.bL,M=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(R.B8,{ref:t,className:f("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a),...s})});M.displayName=R.B8.displayName;let D=i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(R.l9,{ref:t,className:f("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a),...s})});D.displayName=R.l9.displayName,i.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(R.UC,{ref:t,className:f("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...s})}).displayName=R.UC.displayName;var B=a(4714);let S=()=>{let{mode:e,setMode:t}=n((0,B.k)(e=>({mode:e.mode,setMode:e.setMode})));return(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("label",{children:"Display Mode:"}),(0,r.jsx)(C,{value:e,onValueChange:e=>t(e),children:(0,r.jsxs)(M,{className:"bg-zinc-200 cursor-pointer",children:[(0,r.jsx)(D,{value:l.MAP,children:"Map Only"}),(0,r.jsx)(D,{value:l.TABLE,children:"Data Table"}),(0,r.jsx)(D,{value:l.BOTH,children:"Both"})]})})]})};var z=a(3609);let E=e=>{let{loadingText:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,r.jsx)("div",{className:"w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"}),(0,r.jsx)("div",{className:"w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"}),(0,r.jsx)("div",{className:"w-4 h-4 bg-blue-600 rounded-full animate-bounce"})]}),(0,r.jsx)("div",{className:"text-sm text-gray-500",children:t})]})};function O(e){let{loadingText:t}=e,s=(0,i.useRef)(null),o=(0,i.useRef)(null),[d,c]=(0,i.useState)(!0),[u,f]=(0,i.useState)(null),{shouldRender:m,mode:h,mapData:x}=n((0,B.k)(e=>({shouldRender:e.mode===l.MAP||e.mode===l.BOTH,mode:e.mode,mapData:e.mapData})));return((0,i.useEffect)(()=>{if(h===l.TABLE||0===x.length)return;let e=!0;(async()=>{if(s.current)try{c(!0);let{default:t}=await a.e(806).then(a.t.bind(a,6361,19));if(!e)return;z.mz("world",t),o.current=z.Ts(s.current),o.current.setOption({backgroundColor:"#ffffff",tooltip:{trigger:"item",showDelay:0,transitionDuration:.2,formatter:function(e){let{name:t,value:a,data:r}=e;return r.details?'  \n                <div style="font-weight: bold; margin-bottom: 5px;">'.concat(t,"</div>  \n                <div>Uptake outcome: ").concat(a+"%","</div>  \n                <div>Interverntion: ").concat(r.details.intervention,"</div>  \n                <div>Description of total population: ").concat(r.details.desc,"</div>  \n              "):t}},visualMap:{left:"right",min:0,max:100,inRange:{color:["#e5f7ff","#096dd9"]},text:["heigh","low"],calculable:!0,dimension:0,orient:"vertical",right:26,bottom:40,show:!1},series:[{name:"World Map",type:"map",map:"world",roam:!0,scaleLimit:{min:1,max:10},emphasis:{label:{show:!0,fontSize:18,color:"#333"},itemStyle:{areaColor:"#40a9ff"}},select:{label:{show:!0,color:"#fff"},itemStyle:{areaColor:"#1890ff"}},itemStyle:{areaColor:"#f0f2f5",borderColor:"#d9d9d9",borderWidth:1},data:x}]}),c(!1)}catch(e){console.error("Chart initialization error:",e),f(e instanceof Error?e.message:"unknow error"),c(!1)}})();let t=()=>{var e;null===(e=o.current)||void 0===e||e.resize()};return window.addEventListener("resize",t),()=>{var a;e=!1,window.removeEventListener("resize",t),null===(a=o.current)||void 0===a||a.dispose()}},[h,x]),m)?u?(0,r.jsx)("div",{className:"h-full flex-1 flex items-center justify-center",children:(0,r.jsxs)("div",{className:"text-red-500",children:["错误: ",u]})}):(0,r.jsxs)("div",{className:"h-full grow-[2] shrink-[2] basis-0 relative",children:[d&&(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10",children:(0,r.jsx)(E,{loadingText:t})}),(0,r.jsx)("div",{ref:s,className:"w-full h-full min-h-[500px]"})]}):null}let _=JSON.parse('{"D":"website title","K":"loading data..."}');function A(){let e=n(e=>e.updateMap);return(0,i.useEffect)(()=>{e()},[e]),(0,r.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,r.jsx)("div",{className:"p-4 bg-zinc-100 space-y-4",children:(0,r.jsxs)("header",{className:"flex justify-between",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-center",children:_.D}),(0,r.jsx)(S,{})]})}),(0,r.jsxs)("div",{className:"flex flex-1",children:[(0,r.jsx)(O,{loadingText:_.K}),(0,r.jsx)(T,{})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[487,441,517,358],()=>t(8915)),_N_E=e.O()}]);