{include header_en.tpl}
<style>
.art{
width:1100px;
display:table;
padding:40px 0;
margin:auto;
}
.art .hd{
width:100%;
display:block;
height:40px;
margin-bottom:15px;
line-height:40px;
text-align:center;
font-size:28px;
font-weight:600;
font-family:"MicrosoftYaHei";
color:#333;
}
.art .time{
  width:100%;
  display:block;
  height:40px;
  font-size:18px;
  color:#8f8f8f;
  text-align:center;
}
</style>
<div class="art">
<span class="hd">{$art.title}</span>
<span class="time"> {$art.created}{if $art.source} Source: {$art.source} {/if}</span>
{$art.content}
</div>
{include footer_en.tpl}
