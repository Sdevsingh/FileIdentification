webpackJsonp([22919317635961],{1254:function(s,a){s.exports={data:{package:{type:"published",id:"bs-tinycolor",name:"bs-tinycolor",version:"1.0.1",category:"binding",flags:[],platforms:["browser","node"],description:"Fast, small color manipulation and conversion",keywords:["utilities","graphics"],license:"MIT",updated:"2019-05-02T06:00:20.424Z",stars:2,score:.6292435410009551,quality:.899084579423955,popularity:.02736159279889977,maintenance:.999833170554725,readme:'<h1 id="bs-tinycolor"><a href="#bs-tinycolor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-tinycolor</h1>\n<p><a href="https://www.npmjs.org/package/bs-tinycolor"><img src="http://img.shields.io/npm/v/bs-tinycolor.svg" alt="NPM version"></a>\n<a href="https://travis-ci.org/mikaello/bs-tinycolor"><img src="https://travis-ci.org/mikaello/bs-tinycolor.svg?branch=master" alt="Build Status"></a></p>\n<p>Bucklescript bindings for <a href="https://github.com/TypeCtrl/tinycolor">TinyColor</a>: fast, small color manipulation and conversion. See also <a href="https://typectrl.github.io/tinycolor">https://typectrl.github.io/tinycolor</a></p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-tinycolor</code></pre></div>\n<p>Then add <code>bs-tinycolor</code> as a dependency to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"bs-dependencies"</span>: [\n+  <span class="hljs-string">"bs-tinycolor"</span>\n]</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsTinycolor</span>;\n\n<span class="hljs-keyword">let</span> redString = <span class="hljs-type">TinyColor</span>.makeFromString(<span class="hljs-string">"red"</span>);\n<span class="hljs-comment">/* New instance made by name \'red\' */</span>\n\n<span class="hljs-keyword">let</span> blueRgb = <span class="hljs-type">TinyColor</span>.makeFromRgb({r: <span class="hljs-number">0</span>, g: <span class="hljs-number">0</span>, b: <span class="hljs-number">255</span>});\n<span class="hljs-comment">/* New instance made with RGB values */</span>\n\n<span class="hljs-keyword">let</span> yellowHsl = <span class="hljs-type">TinyColor</span>.makeFromHsl({h: <span class="hljs-number">60</span>, s: <span class="hljs-number">0.94</span>, l: <span class="hljs-number">0.5</span>});\n<span class="hljs-comment">/* New instance made with HSL values (saturation and lightness must be given as percent fractions) */</span>\n\n<span class="hljs-keyword">let</span> darkGreenHsv = <span class="hljs-type">TinyColor</span>.makeFromHsv({h: <span class="hljs-number">100</span>, s: <span class="hljs-number">1.0</span>, v: <span class="hljs-number">0.3</span>});\n<span class="hljs-comment">/* New instance made with HSV values (saturation and value must be given as percent fractions) */</span>\n\n<span class="hljs-keyword">let</span> blueRgbWithAlpha = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.<span class="hljs-built_in">map</span>(blueRgb, <span class="hljs-type">TinyColor</span>.setAlpha(<span class="hljs-number">0.2</span>));\n<span class="hljs-comment">/* New instance with changed alpha */</span>\n\n<span class="hljs-keyword">let</span> brightness = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.<span class="hljs-built_in">map</span>(redString, <span class="hljs-type">TinyColor</span>.getBrightness);\n<span class="hljs-comment">/* Some(76.245) */</span>\n\n<span class="hljs-keyword">let</span> hexString = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.<span class="hljs-built_in">map</span>(blueRgb, <span class="hljs-type">TinyColor</span>.toHexString);\n<span class="hljs-comment">/* Some("#0000ff") */</span>\n\n<span class="hljs-keyword">let</span> shadedBlue = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.<span class="hljs-built_in">map</span>(blueRgb, <span class="hljs-type">TinyColor</span>.shade(~value=<span class="hljs-number">50</span>));\n<span class="hljs-comment">/* New instanced with color shaded 50% */</span>\n\n<span class="hljs-keyword">let</span> isReadableInCombination = <span class="hljs-keyword">switch</span>(redString, blueRgb) {\n    | (<span class="hljs-type">Some</span>(red), <span class="hljs-type">Some</span>(blue)) =&gt; <span class="hljs-type">TinyColor</span>.isReadable(red, blue);\n    | <span class="hljs-number">_</span> =&gt; <span class="hljs-literal">false</span>;\n};\n<span class="hljs-comment">/* returns a bool telling whether these colors can be used for background/text */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsTinycolor</span>\n<span class="hljs-keyword">let</span> redString = <span class="hljs-type">TinyColor</span>.makeFromString <span class="hljs-string">"red"</span>\n<span class="hljs-keyword">let</span> blueRgb = <span class="hljs-type">TinyColor</span>.makeFromRgb { r = <span class="hljs-number">0</span>; g = <span class="hljs-number">0</span>; b = <span class="hljs-number">255</span> }\n<span class="hljs-keyword">let</span> yellowHsl = <span class="hljs-type">TinyColor</span>.makeFromHsl { h = <span class="hljs-number">60</span>; s = <span class="hljs-number">0.94</span>; l = <span class="hljs-number">0.5</span> }\n<span class="hljs-keyword">let</span> darkGreenHsv = <span class="hljs-type">TinyColor</span>.makeFromHsv { h = <span class="hljs-number">100</span>; s = <span class="hljs-number">1.0</span>; v = <span class="hljs-number">0.3</span> }\n<span class="hljs-keyword">let</span> blueRgbWithAlpha = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.map blueRgb (<span class="hljs-type">TinyColor</span>.setAlpha <span class="hljs-number">0.2</span>)\n<span class="hljs-keyword">let</span> brightness = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.map redString <span class="hljs-type">TinyColor</span>.getBrightness\n<span class="hljs-keyword">let</span> hexString = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.map blueRgb <span class="hljs-type">TinyColor</span>.toHexString\n<span class="hljs-keyword">let</span> shadedBlue = <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.map blueRgb (<span class="hljs-type">TinyColor</span>.shade ~<span class="hljs-keyword">value</span>:<span class="hljs-number">50</span>)\n<span class="hljs-keyword">let</span> isReadableInCombination =\n  <span class="hljs-keyword">match</span> (redString, blueRgb) <span class="hljs-keyword">with</span>\n  | (((<span class="hljs-type">Some</span> (red))[@explicit_arity ]),((<span class="hljs-type">Some</span> (blue))[@explicit_arity ])) -&gt;\n      <span class="hljs-type">TinyColor</span>.isReadable red blue\n  | _ -&gt; <span class="hljs-literal">false</span></code></pre>\n      </div>\n    </div>\n  \n<p>See all available functions in the <a href="https://github.com/TypeCtrl/tinycolor">original TinyColor repo</a>.</p>\n<h2 id="differences-from-original"><a href="#differences-from-original" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Differences from original</h2>\n<ul>\n<li>It is not possible to create an invalid tinycolor instance, it will either return <code>Some(t)</code> if it is valid, or <code>None</code> if it is invalid. E.g. an invalid instance can occur if you create a color with a string not corresponding to a valid color (<code>beautifulRed</code> is not a valid color) or you provide RGB values outside the valid range (0-255).</li>\n<li>When creating instances with HSL and HSV values: saturation, lightness and value must be given as fractions instead of percent (<code>0.2 == 20%</code>).</li>\n<li>All functions accept only TinyColor-instances created by one of the <code>make-</code>-functions (or <code>random()</code>), it is not possible to pass in a string or RGB-record for the functions (which is possible in the original library).</li>\n<li><code>setAlpha(val)</code> is immutable, it will return a new instance with changed alpha value (the other methods that modify a color (<code>spin</code>, <code>lighten</code>, etc.) is immutable from the original library)</li>\n<li><code>toName()</code> returns an option, either <code>Some(string)</code> if a name could be deduced (e.g. <em>red</em>) or <code>None</code> if not</li>\n</ul>\n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<p>If you find bugs or there are updates in <a href="https://github.com/bgrins/TinyColor">TinyColor</a>, feel free to open an issue or PR. If you are upgrading any dependencies, please use yarn so <code>yarn.lock</code> is updated.</p>\n<p>If you add, remove or change bindings, remember to update the tests as well. It should be at least one test for every binding. Run the tests with <code>yarn test</code> from project root.</p>\n<h2 id="alternatives"><a href="#alternatives" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alternatives</h2>\n<ul>\n<li><a href="https://redex.github.io/package/unpublished/theatlasroom/bs-parse-color/">bs-parse-color</a> (bindings for <a href="https://github.com/substack/parse-color">parse-color</a>)</li>\n</ul>\n',homepageUrl:"https://github.com/mikaello/bs-tinycolor",repositoryUrl:"https://github.com/mikaello/bs-tinycolor",npmUrl:"https://www.npmjs.com/package/bs-tinycolor",issuesUrl:"https://github.com/mikaello/bs-tinycolor/issues",slug:"/package/bs-tinycolor"}},pathContext:{id:"bs-tinycolor"}}}});
//# sourceMappingURL=path---package-bs-tinycolor-733df39be4d44d593303.js.map