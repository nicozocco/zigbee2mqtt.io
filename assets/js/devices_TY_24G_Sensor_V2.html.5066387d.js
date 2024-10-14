"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12599],{39074:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>o,data:()=>d});var n=t(24691);const a={},o=(0,t(89260).A)(a,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i[8]||(i[8]=(0,n.Lk)("h1",{id:"ihseno-ty-24g-sensor-v2",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#ihseno-ty-24g-sensor-v2"},[(0,n.Lk)("span",null,"iHseno TY_24G_Sensor_V2")])],-1)),(0,n.Lk)("table",null,[i[6]||(i[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[i[2]||(i[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"TY_24G_Sensor_V2")],-1)),(0,n.Lk)("tr",null,[i[1]||(i[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=iHseno"},{default:(0,n.k6)((()=>i[0]||(i[0]=[(0,n.eW)("iHseno")]))),_:1})])]),i[3]||(i[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Human presence sensor 24G")],-1)),i[4]||(i[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"illuminance_lux, presence, target_distance, radar_sensitivity, minimum_range, maximum_range, detection_delay, fading_time, linkquality")],-1)),i[5]||(i[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TY_24G_Sensor_V2.png",alt:"iHseno TY_24G_Sensor_V2"})])],-1))])]),i[9]||(i[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>i[7]||(i[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,n.Fv)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>m</code>.</p><h3 id="radar-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#radar-sensitivity-numeric"><span>Radar sensitivity (numeric)</span></a></h3><p>sensitivity of the radar. Value can be found in the published state on the <code>radar_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#minimum-range-numeric"><span>Minimum range (numeric)</span></a></h3><p>Minimum range. Value can be found in the published state on the <code>minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id="maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#maximum-range-numeric"><span>Maximum range (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>m</code>.</p><h3 id="detection-delay-numeric" tabindex="-1"><a class="header-anchor" href="#detection-delay-numeric"><span>Detection delay (numeric)</span></a></h3><p>Detection delay. Value can be found in the published state on the <code>detection_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>s</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric"><span>Fading time (numeric)</span></a></h3><p>Fading time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>1500</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),d=JSON.parse('{"path":"/devices/TY_24G_Sensor_V2.html","title":"iHseno TY_24G_Sensor_V2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"iHseno TY_24G_Sensor_V2 control via MQTT","description":"Integrate your iHseno TY_24G_Sensor_V2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:41.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Radar sensitivity (numeric)","slug":"radar-sensitivity-numeric","link":"#radar-sensitivity-numeric","children":[]},{"level":3,"title":"Minimum range (numeric)","slug":"minimum-range-numeric","link":"#minimum-range-numeric","children":[]},{"level":3,"title":"Maximum range (numeric)","slug":"maximum-range-numeric","link":"#maximum-range-numeric","children":[]},{"level":3,"title":"Detection delay (numeric)","slug":"detection-delay-numeric","link":"#detection-delay-numeric","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728936427000},"filePathRelative":"devices/TY_24G_Sensor_V2.md"}')}}]);