<?php
try
{
$mysqlClient  = new PDO('mysql:host=mysqlsvr83.world4you.com;dbname=6140636db12;charset=utf8', 'sql4629280', 'aku@5mp7');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

$n=$_GET['n'];

for ($y = $n; $y < $n+10; $y++) {

$id=$y;
$id1="NLM".$id.".";

echo '{<br>';$k=0;
file_put_contents('NLM/NLM'.$id.'.json', '{'.PHP_EOL);

$sec=0;
$pos=0;


			$sq = "SELECT * FROM NLM WHERE ref LIKE '$id1%'";
			$rsq = $mysqlClient->prepare($sq);
			$rsq->execute();
			$rsqs = $rsq->fetchAll();
$i=0;
foreach ($rsqs as $rs)
{
			$i++;$sec++;
			$ref=$rs["ref"];
			$sq1 = "SELECT * FROM locationsNLM WHERE ref LIKE '$ref'";
			$rsq1 = $mysqlClient->prepare($sq1);
			$rsq1->execute();
			$rsqs1 = $rsq1->fetchAll();
			$p=$rsqs1[0]["debp"];
			$f=$rsqs1[0]["debf"]; if ($p==1) {$f="a";}

		$deb=$rs["ImgDebut"];$img=$deb-1;
		$fin=$rsqs[$i]["ImgDebut"];
		for ($k = $deb; $k < $fin; $k++) {
			$pos++;$img++;
		if ($img<10) {$img1="000".$img;}
		if ($img>9 and $img<100) {$img1="00".$img;}
		if ($img>99 and $img<1000) {$img1="0".$img;}
		if ($img>999) {$img1=$img;}
		if ($f=="b") {$f1="a";}
		if ($f=="a") {$f1="b";}

		echo '"'.$pos.'":{"pagination":"'.$p.$f.'","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"},<br>';
		$txt='"'.$pos.'":{"pagination":"'.$p.$f.'","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"},'.PHP_EOL;
		file_put_contents('NLM/NLM'.$id.'.json', $txt,FILE_APPEND);

		if ($f1=="b") {$f="b";}
		if ($f1=="a") {$p++;$f="a";}

		}
	
}



/*dernier texte du volume*/
$p1=$rsqs1[0]["debp"];
$p2=$rsqs1[0]["finp"];
$pos++;

for ($x = $p1; $x <= $p2; $x++) {
	$img++;
		if ($img<10) {$img1="000".$img;}
		if ($img>9 and $img<100) {$img1="00".$img;}
		if ($img>99 and $img<1000) {$img1="0".$img;}
		if ($img>999) {$img1=$img;}

	echo '"'.$pos.'":{"pagination":"'.$x.'a","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"},<br>';
	$txt='"'.$pos.'":{"pagination":"'.$x.'a","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"},'.PHP_EOL;
		file_put_contents('NLM/NLM'.$id.'.json', $txt,FILE_APPEND);
	$img++;
		if ($img<10) {$img1="000".$img;}
		if ($img>9 and $img<100) {$img1="00".$img;}
		if ($img>99 and $img<1000) {$img1="0".$img;}
		if ($img>999) {$img1=$img;}
	$pos++;
	if ($x<$p2){
	echo '"'.$pos.'":{"pagination":"'.$x.'b","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"},<br>';
	$txt='"'.$pos.'":{"pagination":"'.$x.'b","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"},'.PHP_EOL;
		file_put_contents('NLM/NLM'.$id.'.json', $txt,FILE_APPEND);
	}
	if ($x==$p2){
	echo '"'.$pos.'":{"pagination":"'.$x.'b","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"}<br>}';
	$txt='"'.$pos.'":{"pagination":"'.$x.'b","psection":"'.$sec.'","file":"bdr:I1NLM'.$id.'_001::I1NLM'.$id.'_001'.$img1.'.jpg"}'.PHP_EOL.'}';
		file_put_contents('NLM/NLM'.$id.'.json', $txt,FILE_APPEND);
	}
	
	$pos++;
}



}