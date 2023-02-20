import{_ as e,c as t,o,a as s}from"./app.8ea3f0da.js";const u=JSON.parse('{"title":"Interface: RunTestsOptions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"disableLog","slug":"disablelog","link":"#disablelog","children":[]},{"level":3,"title":"exitOnFail","slug":"exitonfail","link":"#exitonfail","children":[]},{"level":3,"title":"failFast","slug":"failfast","link":"#failfast","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"onMessage","slug":"onmessage","link":"#onmessage","children":[]},{"level":3,"title":"reportToConsole","slug":"reporttoconsole","link":"#reporttoconsole","children":[]},{"level":3,"title":"skip","slug":"skip","link":"#skip","children":[]}]}],"relativePath":"dist/interfaces/index.RunTestsOptions.md"}'),a={name:"dist/interfaces/index.RunTestsOptions.md"},i=s('<h1 id="interface-runtestsoptions" tabindex="-1">Interface: RunTestsOptions <a class="header-anchor" href="#interface-runtestsoptions" aria-hidden="true">#</a></h1><p><a href="./../modules/">index</a>.RunTestsOptions</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./index.RunTestsOptions.html#disablelog">disableLog</a></li><li><a href="./index.RunTestsOptions.html#exitonfail">exitOnFail</a></li><li><a href="./index.RunTestsOptions.html#failfast">failFast</a></li><li><a href="./index.RunTestsOptions.html#filter">filter</a></li><li><a href="./index.RunTestsOptions.html#onmessage">onMessage</a></li><li><a href="./index.RunTestsOptions.html#reporttoconsole">reportToConsole</a></li><li><a href="./index.RunTestsOptions.html#skip">skip</a></li></ul><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="disablelog" tabindex="-1">disableLog <a class="header-anchor" href="#disablelog" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>disableLog</strong>: <code>boolean</code></p><p>Disable logging of the results. Defaults to <code>false</code>.</p><p><strong><code>I18n</code></strong></p><p>\u7981\u7528\u8BB0\u5F55\u7ED3\u679C. \u9ED8\u8BA4\u503C\u4E3A <code>false</code>\u3002</p><hr><h3 id="exitonfail" tabindex="-1">exitOnFail <a class="header-anchor" href="#exitonfail" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>exitOnFail</strong>: <code>boolean</code></p><p>If <code>true</code>, Deno will exit with status code 1 if there was test failure. Defaults to <code>true</code>.</p><p><strong><code>I18n</code></strong></p><p>\u5982\u679C\u4E3A <code>true</code>\uFF0C\u5F53\u6D4B\u8BD5\u5931\u8D25\u65F6 Deno \u5C06\u4EE5\u72B6\u6001\u7801 1 \u9000\u51FA\u3002\u9ED8\u8BA4\u4E3A <code>true</code>\u3002</p><hr><h3 id="failfast" tabindex="-1">failFast <a class="header-anchor" href="#failfast" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>failFast</strong>: <code>boolean</code></p><p>If <code>true</code>, Deno will exit upon first test failure. Defaults to <code>false</code>.</p><p><strong><code>I18n</code></strong></p><p>\u5982\u679C\u4E3A <code>true</code>\uFF0CDeno \u5C06\u5728\u7B2C\u4E00\u6B21\u6D4B\u8BD5\u5931\u8D25\u540E\u9000\u51FA\u3002\u9ED8\u8BA4\u503C\u4E3A <code>false</code>\u3002</p><hr><h3 id="filter" tabindex="-1">filter <a class="header-anchor" href="#filter" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>filter</strong>: <code>string</code> | <code>RegExp</code></p><p>String or RegExp used to filter test to run. Only test with names matching provided <code>String</code> or <code>RegExp</code> will be run.</p><p><strong><code>I18n</code></strong></p><p>\u7528\u4E8E\u7B5B\u9009\u8981\u8FD0\u884C\u7684\u6D4B\u8BD5\u7684\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u53EA\u6709\u5F53\u6D4B\u8BD5\u540D\u79F0\u4E0E\u63D0\u4F9B\u7684 <code>String</code> \u6216 <code>RegExp</code> \u76F8\u5339\u914D\u65F6\u624D\u4F1A\u8FD0\u884C\u3002</p><hr><h3 id="onmessage" tabindex="-1">onMessage <a class="header-anchor" href="#onmessage" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>onMessage</strong>: (<code>message</code>: <a href="./index.TestMessage.html"><code>TestMessage</code></a>) =&gt; <code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><p>(<code>message</code>): <code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Called for each message received from the test run.</p><p><strong><code>I18n</code></strong></p><p>\u56DE\u8C03\u4ECE\u6D4B\u8BD5\u8FD0\u884C\u6536\u5230\u7684\u6BCF\u4E2A\u6D88\u606F\u3002</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>message</code></td><td style="text-align:left;"><a href="./index.TestMessage.html"><code>TestMessage</code></a></td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h5><p><code>void</code> | <code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="reporttoconsole" tabindex="-1">reportToConsole <a class="header-anchor" href="#reporttoconsole" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>reportToConsole</strong>: <code>boolean</code></p><p>If true, report results to the console as is done for <code>deno test</code>. Defaults to <code>true</code>.</p><p><strong><code>I18n</code></strong></p><p>\u5982\u679C\u4E3A <code>true</code>\uFF0C\u5C06 <code>deno test</code> \u5B8C\u6210\u7684\u7ED3\u679C\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u3002\u9ED8\u8BA4\u503C\u4E3A <code>true</code>\u3002</p><hr><h3 id="skip" tabindex="-1">skip <a class="header-anchor" href="#skip" aria-hidden="true">#</a></h3><p><code>Optional</code> <strong>skip</strong>: <code>string</code> | <code>RegExp</code></p><p>String or RegExp used to skip tests to run. Tests with names matching provided <code>String</code> or <code>RegExp</code> will not be run.</p><p><strong><code>I18n</code></strong></p><p>\u7528\u4E8E\u8DF3\u8FC7\u8981\u8FD0\u884C\u7684\u6D4B\u8BD5\u7684\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u5F53\u6D4B\u8BD5\u540D\u79F0\u4E0E\u63D0\u4F9B\u7684 <code>String</code> \u6216 <code>RegExp</code> \u76F8\u5339\u914D\u65F6\u5C06\u4E0D\u4F1A\u8FD0\u884C\u3002</p>',53),r=[i];function d(n,l,c,p,h,f){return o(),t("div",null,r)}const x=e(a,[["render",d]]);export{u as __pageData,x as default};
