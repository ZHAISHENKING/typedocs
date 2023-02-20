import{_ as e,c as t,o as s,a as o}from"./app.15aa155d.js";const _=JSON.parse('{"title":"Function: runTests","description":"","frontmatter":{},"headers":[],"relativePath":"dist/functions/index.runTests.md"}'),n={name:"dist/functions/index.runTests.md"},a=o(`<h1 id="function-runtests" tabindex="-1">Function: runTests <a class="header-anchor" href="#function-runtests" aria-hidden="true">#</a></h1><p><a href="./../modules/">index</a>.runTests</p><p><strong>runTests</strong>(<code>opts?</code>): <code>Promise</code>&lt;<a href="./../interfaces/index.TestMessage.html"><code>TestMessage</code></a>[<code>&quot;end&quot;</code>]&gt; &amp; {}</p><p>Run any tests which have been registered via <code>Deno.test()</code>. Always resolves asynchronously.</p><p><strong><code>I18n</code></strong></p><p>\u8FD0\u884C\u6240\u6709\u901A\u8FC7 <code>Deno.test()</code> \u6CE8\u518C\u7684\u6D4B\u8BD5\u3002\u59CB\u7EC8\u5F02\u6B65 resolve\u3002</p><pre><code>   // \u6CE8\u518C\u4E00\u4E2A\u6D4B\u8BD5\u3002
   Deno.test({
     name: &quot;example test&quot;,
     fn(): void {
       assertEquals(&quot;world&quot;, &quot;world&quot;);
       assertEquals({ hello: &quot;world&quot; }, { hello: &quot;world&quot; });
     },
   });

   // \u8FD0\u884C\u6240\u6709\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u7684\u6D4B\u8BD5\u3002
   const runInfo = await Deno.runTests();
   console.log(runInfo.duration);  // all tests duration, e.g. &quot;5&quot; (in ms)
   console.log(runInfo.stats.passed);  //e.g. 1
   console.log(runInfo.results[0].name);  //e.g. &quot;example test&quot;
</code></pre><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>opts?</code></td><td style="text-align:left;"><a href="./../interfaces/index.RunTestsOptions.html"><code>RunTestsOptions</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<a href="./../interfaces/index.TestMessage.html"><code>TestMessage</code></a>[<code>&quot;end&quot;</code>]&gt; &amp; {}</p>`,11),r=[a];function d(c,u,i,l,h,p){return s(),t("div",null,r)}const m=e(n,[["render",d]]);export{_ as __pageData,m as default};
