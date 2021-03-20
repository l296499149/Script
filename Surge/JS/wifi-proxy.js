/* wifi_proxy change (Made by Meeta)
文本编辑模式下复制粘贴,TG频道已发操作教程视频

PS:记得自己修改WIFI名称
主要功能:指定Wi-Fi(路由器翻)下,Surge使用直连模式,其他网络下Surge使用规则模式
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效

*/

var wifiname = $network.wifi.ssid;
var proxywifi = ["Boring~~","Walkmen-5G","Walkmen-W-5G","ASUS_B0_5G","ASUS_B0_2G","5B_5G","FLink_5G","tyr_5G","RT-AX86U_5G","RT-AX86U","wpln-2G_5G","wpln-2G"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");
		setTimeout(function(){$notification.post("识别到"+wifiname,"主人，欢迎回家已帮您切换为直连模式"+"","");}, 500);
		break;
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		setTimeout(function(){$notification.post("识别到"+wifiname,"主人，您已离开家已为您切换到规则模式","早点回家哦！");}, 500);
	}
};
$done();
