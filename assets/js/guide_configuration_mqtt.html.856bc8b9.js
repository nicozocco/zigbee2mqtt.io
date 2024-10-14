"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[17872],{40461:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>i});var e=a(24691);const t={},l=(0,a(89260).A)(t,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="mqtt" tabindex="-1"><a class="header-anchor" href="#mqtt"><span>MQTT</span></a></h1><h2 id="server-connection" tabindex="-1"><a class="header-anchor" href="#server-connection"><span>Server connection</span></a></h2><p>Zigbee2MQTT requires a MQTT-Server connection to operate.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Required: MQTT settings</span></span>\n<span class="line"><span class="token key atrule">mqtt</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Required: MQTT server URL (use mqtts:// for SSL/TLS connection)</span></span>\n<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://localhost:1883&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: MQTT base topic for Zigbee2MQTT MQTT messages (default: zigbee2mqtt)</span></span>\n<span class="line">    <span class="token key atrule">base_topic</span><span class="token punctuation">:</span> zigbee2mqtt</span>\n<span class="line">    <span class="token comment"># Optional: absolute path to SSL/TLS certificate of CA used to sign server and client certificates (default: nothing)</span></span>\n<span class="line">    <span class="token key atrule">ca</span><span class="token punctuation">:</span> <span class="token string">&#39;/etc/ssl/mqtt-ca.crt&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: absolute paths to SSL/TLS key and certificate for client-authentication (default: nothing)</span></span>\n<span class="line">    <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&#39;/etc/ssl/mqtt-client.key&#39;</span></span>\n<span class="line">    <span class="token key atrule">cert</span><span class="token punctuation">:</span> <span class="token string">&#39;/etc/ssl/mqtt-client.crt&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: MQTT server authentication user (default: nothing)</span></span>\n<span class="line">    <span class="token key atrule">user</span><span class="token punctuation">:</span> my_user</span>\n<span class="line">    <span class="token comment"># Optional: MQTT server authentication password (default: nothing)</span></span>\n<span class="line">    <span class="token key atrule">password</span><span class="token punctuation">:</span> my_password</span>\n<span class="line">    <span class="token comment"># Optional: MQTT client ID (default: nothing)</span></span>\n<span class="line">    <span class="token key atrule">client_id</span><span class="token punctuation">:</span> <span class="token string">&#39;MY_CLIENT_ID&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: disable self-signed SSL certificates (default: true)</span></span>\n<span class="line">    <span class="token key atrule">reject_unauthorized</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: Include device information to mqtt messages (default: false)</span></span>\n<span class="line">    <span class="token key atrule">include_device_information</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: MQTT keepalive in seconds (default: 60)</span></span>\n<span class="line">    <span class="token key atrule">keepalive</span><span class="token punctuation">:</span> <span class="token number">60</span></span>\n<span class="line">    <span class="token comment"># Optional: MQTT protocol version (default: 4), set this to 5 if you</span></span>\n<span class="line">    <span class="token comment"># use the &#39;retention&#39; device specific configuration</span></span>\n<span class="line">    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">4</span></span>\n<span class="line">    <span class="token comment"># Optional: Disable retain for all send messages. ONLY enable if you MQTT broker doesn&#39;t</span></span>\n<span class="line">    <span class="token comment"># support retained message (e.g. AWS IoT core, Azure IoT Hub, Google Cloud IoT core, IBM Watson IoT Platform).</span></span>\n<span class="line">    <span class="token comment"># Enabling will break the Home Assistant integration. (default: false)</span></span>\n<span class="line">    <span class="token key atrule">force_disable_retain</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="specifying-mqtt-server-user-password-and-network-key-in-a-different-file" tabindex="-1"><a class="header-anchor" href="#specifying-mqtt-server-user-password-and-network-key-in-a-different-file"><span>Specifying MQTT server/user/password and network_key in a different file</span></a></h3><p>To specify the MQTT server/user/password in a different file, e.g <code>secret.yaml</code>, use the following configuration.</p><p><strong>configuration.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># IMPORTANT: Don&#39;t forget the quotes!</span></span>\n<span class="line"><span class="token key atrule">mqtt</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret.yaml server&#39;</span></span>\n<span class="line">    <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret.yaml user&#39;</span></span>\n<span class="line">    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret.yaml password&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>secret.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">server</span><span class="token punctuation">:</span> <span class="token string">&#39;mqtt://localhost:1883&#39;</span></span>\n<span class="line"><span class="token key atrule">user</span><span class="token punctuation">:</span> mqtt_user</span>\n<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> mqtt_password</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mqtt-behaviour" tabindex="-1"><a class="header-anchor" href="#mqtt-behaviour"><span>MQTT behaviour</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Optional: state caching, MQTT message payload will contain all attributes, not only changed ones.</span></span>\n<span class="line">    <span class="token comment"># Has to be true when integrating via Home Assistant (default: true)</span></span>\n<span class="line">    <span class="token key atrule">cache_state</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: persist cached state, only used when cache_state: true (default: true)</span></span>\n<span class="line">    <span class="token key atrule">cache_state_persistent</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: send cached state on startup, only used when cache_state_persistent: true (default: true)</span></span>\n<span class="line">    <span class="token key atrule">cache_state_send_on_startup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message</span></span>\n<span class="line">    <span class="token comment"># possible values are: disable (default), ISO_8601, ISO_8601_local, epoch (default: disable)</span></span>\n<span class="line">    <span class="token key atrule">last_seen</span><span class="token punctuation">:</span> <span class="token string">&#39;disable&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg (default: false)</span></span>\n<span class="line">    <span class="token key atrule">elapsed</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token comment"># Optional: Enables report feature, this feature is DEPRECATED since reporting is now setup by default</span></span>\n<span class="line">    <span class="token comment"># when binding devices. Docs can still be found here: https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/information/report.md</span></span>\n<span class="line">    <span class="token key atrule">report</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: disables the legacy api (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">legacy_api</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: MQTT output type: json, attribute or attribute_and_json (default: shown below)</span></span>\n<span class="line">    <span class="token comment"># Examples when &#39;state&#39; of a device is published</span></span>\n<span class="line">    <span class="token comment"># json: topic: &#39;zigbee2mqtt/my_bulb&#39; payload &#39;{&quot;state&quot;: &quot;ON&quot;}&#39;</span></span>\n<span class="line">    <span class="token comment"># attribute: topic &#39;zigbee2mqtt/my_bulb/state&#39; payload &#39;ON&quot;</span></span>\n<span class="line">    <span class="token comment"># attribute_and_json: both json and attribute (see above)</span></span>\n<span class="line">    <span class="token key atrule">output</span><span class="token punctuation">:</span> <span class="token string">&#39;json&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',12)]))}]]),i=JSON.parse('{"path":"/guide/configuration/mqtt.html","title":"MQTT","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Server connection","slug":"server-connection","link":"#server-connection","children":[{"level":3,"title":"Specifying MQTT server/user/password and network_key in a different file","slug":"specifying-mqtt-server-user-password-and-network-key-in-a-different-file","link":"#specifying-mqtt-server-user-password-and-network-key-in-a-different-file","children":[]}]},{"level":2,"title":"MQTT behaviour","slug":"mqtt-behaviour","link":"#mqtt-behaviour","children":[]}],"git":{"updatedTime":1728936427000},"filePathRelative":"guide/configuration/mqtt.md"}')}}]);