webpackJsonp([4871832117001],{1173:function(s,a){s.exports={data:{package:{id:"minimist.re",stars:26,name:"minimist.re",version:"0.0.5",category:"library",flags:["neglected"],platforms:["native"],description:"A no-frills cli argument parser for reason, inspired by [minimist](https://www.npmjs.com/package/minimist) and [yargs](https://www.npmjs.com/package/yargs).",keywords:["cli"],license:"MIT",updated:"2018-04-07T05:22:04.842Z",type:"published",score:.6030440275337823,quality:.7399290560596705,popularity:.09010347370146232,maintenance:.9986545569153409,readme:'<h1 id="minimistre"><a href="#minimistre" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Minimist.re</h1>\n<p>A no-frills cli argument parser for reason, inspired by <a href="https://www.npmjs.com/package/minimist">minimist</a> and <a href="https://www.npmjs.com/package/yargs">yargs</a>.</p>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n<p>(from <a href="https://www.npmjs.com/package/pack.re">pack.re</a>):</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> parse = <span class="hljs-type">Minimist</span>.parse(~alias=[(<span class="hljs-string">"h"</span>, <span class="hljs-string">"help"</span>)], ~presence=[<span class="hljs-string">"help"</span>], ~multi=[<span class="hljs-string">"rename"</span>], ~strings=[<span class="hljs-string">"base"</span>]);\n\n<span class="hljs-keyword">let</span> help = {|\n# pack.re - a simple js bundler <span class="hljs-keyword">for</span> reason\n\n<span class="hljs-type">Usage</span>: pack.re [options] entry-file.js &gt; bundle.js\n\n  --base (<span class="hljs-keyword">default</span>: current directory)\n      expected <span class="hljs-keyword">to</span> contain node_modules\n  --rename newName=realName (can be defined multiple times)\n      maps `require(<span class="hljs-string">"newName"</span>)` <span class="hljs-keyword">to</span> a node_module called <span class="hljs-string">"realName"</span>\n  -h, --help\n      <span class="hljs-built_in">print</span> this help\n|};\n\n<span class="hljs-keyword">let</span> fail = (msg) =&gt; {\n  print_endline(msg);\n  print_endline(help);\n  exit(<span class="hljs-number">1</span>);\n};\n\n<span class="hljs-keyword">let</span> args = <span class="hljs-type">List</span>.tl(<span class="hljs-type">Array</span>.to_list(<span class="hljs-type">Sys</span>.argv));\n<span class="hljs-comment">/* Some example args for you */</span>\n<span class="hljs-keyword">let</span> args = [<span class="hljs-string">"--base"</span>, <span class="hljs-string">"awesome"</span>, <span class="hljs-string">"some-entry.js"</span>];\n\n<span class="hljs-keyword">switch</span> (parse(args)) {\n| <span class="hljs-type">Minimist</span>.<span class="hljs-type">Error</span>(err) =&gt; fail(<span class="hljs-type">Minimist</span>.report(err))\n| <span class="hljs-type">Ok</span>(opts) =&gt;\n<span class="hljs-keyword">if</span> (<span class="hljs-type">Minimist</span>.has(<span class="hljs-string">"help"</span>, opts.presence)) {\n  print_endline(help); exit(<span class="hljs-number">0</span>);\n} <span class="hljs-keyword">else</span> <span class="hljs-keyword">switch</span> (opts.rest) {\n  | [] =&gt; fail(<span class="hljs-string">"Expected entry file as final argument"</span>)\n  | [entry] =&gt; {\n    <span class="hljs-keyword">let</span> base = <span class="hljs-type">Minimist</span>.<span class="hljs-keyword">get</span>(opts.strings, <span class="hljs-string">"base"</span>);\n    <span class="hljs-keyword">let</span> renames = <span class="hljs-type">Minimist</span>.multi(opts.multi, <span class="hljs-string">"rename"</span>);\n    print_endline(<span class="hljs-string">"All good!"</span>)\n  }\n  | <span class="hljs-number">_</span> =&gt; fail(<span class="hljs-string">"Only one entry file allowed"</span>)\n}\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> parse =\n  <span class="hljs-type">Minimist</span>.parse ~alias:[(<span class="hljs-string">"h"</span>, <span class="hljs-string">"help"</span>)] ~presence:[<span class="hljs-string">"help"</span>] ~multi:[<span class="hljs-string">"rename"</span>]\n    ~strings:[<span class="hljs-string">"base"</span>]\n<span class="hljs-keyword">let</span> help =\n  {|\n# pack.re - a simple js bundler <span class="hljs-keyword">for</span> reason\n\n<span class="hljs-type">Usage</span>: pack.re [options] entry-file.js &gt; bundle.js\n\n  --base (default: current directory)\n      expected <span class="hljs-keyword">to</span> contain node_modules\n  --rename newName=realName (can be defined multiple times)\n      maps `require(<span class="hljs-string">"newName"</span>)` <span class="hljs-keyword">to</span> a node_module called <span class="hljs-string">"realName"</span>\n  -h, --help\n      print this help\n|}\n<span class="hljs-keyword">let</span> fail msg = print_endline msg; print_endline help; exit <span class="hljs-number">1</span>\n<span class="hljs-keyword">let</span> args = <span class="hljs-type">List</span>.tl (<span class="hljs-type">Array</span>.to_list <span class="hljs-type">Sys</span>.argv)\n<span class="hljs-keyword">let</span> args = [<span class="hljs-string">"--base"</span>; <span class="hljs-string">"awesome"</span>; <span class="hljs-string">"some-entry.js"</span>]\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">match</span> parse args <span class="hljs-keyword">with</span>\n  | ((<span class="hljs-type">Minimist</span>.<span class="hljs-type">Error</span> (err))[@explicit_arity ]) -&gt; fail (<span class="hljs-type">Minimist</span>.report err)\n  | ((<span class="hljs-type">Ok</span> (opts))[@explicit_arity ]) -&gt;\n      <span class="hljs-keyword">if</span> <span class="hljs-type">Minimist</span>.has <span class="hljs-string">"help"</span> opts.presence\n      <span class="hljs-keyword">then</span> (print_endline help; exit <span class="hljs-number">0</span>)\n      <span class="hljs-keyword">else</span>\n        (<span class="hljs-keyword">match</span> opts.rest <span class="hljs-keyword">with</span>\n         | <span class="hljs-literal">[]</span> -&gt; fail <span class="hljs-string">"Expected entry file as final argument"</span>\n         | entry::<span class="hljs-literal">[]</span> -&gt;\n             <span class="hljs-keyword">let</span> base = <span class="hljs-type">Minimist</span>.get opts.strings <span class="hljs-string">"base"</span> <span class="hljs-keyword">in</span>\n             <span class="hljs-keyword">let</span> renames = <span class="hljs-type">Minimist</span>.multi opts.multi <span class="hljs-string">"rename"</span> <span class="hljs-keyword">in</span>\n             print_endline <span class="hljs-string">"All good!"</span>\n         | _ -&gt; fail <span class="hljs-string">"Only one entry file allowed"</span>)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/jaredly/minimist.re#readme",repositoryUrl:"https://github.com/jaredly/minimist.re",npmUrl:"https://www.npmjs.com/package/minimist.re",issuesUrl:"https://github.com/jaredly/minimist.re/issues",slug:"/package/minimist.re"}},pathContext:{id:"minimist.re"}}}});
//# sourceMappingURL=path---package-minimist-re-898c61971d9af81a1fa2.js.map