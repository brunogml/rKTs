<?php

for ($i = 1000; $i < 9999; $i++) {
	if (file_exists('tamp/PT'.$i.'.json')==1)
	{	
	$json=file_get_contents('tamp/PT'.$i.'.json');
	$jsona=json_decode($json,true);
$canv=$jsona["sequences"][0];
$nb=count($canv["canvases"]);


$id=$i;

if ($nb>0)
{
$text="{".PHP_EOL;

for ($x = 1; $x < $nb; $x++) {
	$text=$text.'"'.$x.'":{"pagination":"'.$x.'","psection":"1","file":"'.$x.'"},'.PHP_EOL;

}
	$text=$text.'"'.$nb.'":{"pagination":"'.$nb.'","psection":"1","file":"'.$nb.'"}'.PHP_EOL;


$text=$text."}";


file_put_contents('PT'.$id.'.json', $text);
echo 'PT'.$id.' fait<br>';
}
}
}