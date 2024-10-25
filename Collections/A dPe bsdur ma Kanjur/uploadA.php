<?php
ERROR HERE

try
{
$mysqlClient  = new PDO('mysql:host=mysqlsvr83.world4you.com;dbname=6140636db12;charset=utf8', 'sql4629280', 'aku@5mp7');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}


$xml=simplexml_load_file('A.xml');
$apres="";
$i=1;
foreach($xml->item as $item)
{
	if ($item->rkts!="-")
	{
		$rktsTyp="K";
		$rkts=$item->rkts;
		$coll="A";
		$ref=$item->ref;
		$tib=$item->tib;
		$skt=$item->skttrans;
		$coloph=$item->coloph;
		$colophTitle="";
		$margin="";
		$suit=$apres;
		$rnb=$i;

$tib=str_replace("'","\'",$tib);
$skt=str_replace("'","\'",$skt);
$coloph=str_replace("'","\'",$coloph);


$sql="INSERT INTO catalog(rktsTyp, rkts, coll, ref, tib, skt, coloph, colophTitle, margin, suit, rnb)
VALUES ('$rktsTyp', '$rkts', '$coll', '$ref', '$tib', '$skt', '$coloph', '$colophTitle', '$margin', '$suit', '$rnb');";
$resultat = $mysqlClient->prepare($sql);
$resultat->execute();



foreach($item->loc as $loc)
{
		$setid="MW1PD96682";
		$vol=$loc->json;
		$sec=1;
		$p=$loc->p;
		$debp=explode("-",$p)[0];
		$debf="";
		$debl=1;
		$finp=explode("-",$p)[1];
		$finf="";
		$finl=25;
		echo $debp.'<br>';
$sql="INSERT INTO locations (ref, setid, vol, sec, debp, debf, debl, finp, finf, finl)
VALUES ('$ref', '$setid', '$vol', '$sec', '$debp', '$debf', '$debl', '$finp', '$finf', '$finl');";
$resultat = $mysqlClient->prepare($sql);
$resultat->execute();



}		
		echo $ref;
		echo '<hr>';
		$apres=$item->ref;
		$i++;


	}
}