<?php

$vol=$_GET['vol'];

	$json=file_get_contents("1KG86".$vol.".json");
	$jsona=json_decode($json,true);
	$i=1;
	foreach ($jsona as $ligne){
		$fileno1=$ligne['file'];
		if (strlen($fileno1=33) {$fileno=substr($fileno1,0,28).'000'.substr($fileno1,-5);}
		if (strlen($fileno1=34) {$fileno=substr($fileno1,0,28).'00'.substr($fileno1,-6);}
		if (strlen($fileno1=35) {$fileno=substr($fileno1,0,28).'0'.substr($fileno1,-7);}
		
		echo '"'.$i.'":{"pagination":"'.$ligne['pagination'].'","psection":"'.$ligne['psection'].'","file":"'.$fileno.'"},<br>'; 
		
	}
